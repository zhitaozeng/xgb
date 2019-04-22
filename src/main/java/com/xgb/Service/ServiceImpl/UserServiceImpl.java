package com.xgb.Service.ServiceImpl;

import com.github.pagehelper.PageHelper;
import com.xgb.Service.UserService;
import com.xgb.mapper.SysPermissionMapper;
import com.xgb.mapper.SysRolePermissionMapper;
import com.xgb.mapper.SysUserMapper;
import com.xgb.mapper.SysUserRoleMapper;
import com.xgb.model.*;
import com.xgb.utils.PageBean;
import org.apache.shiro.crypto.hash.SimpleHash;
import org.springframework.stereotype.Service;
import tk.mybatis.mapper.entity.Example;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

@Service
public class UserServiceImpl implements UserService {

    @Resource
    private SysUserMapper sysUserMapper;
    @Resource
    private SysUserRoleMapper sysUserRoleMapper;
    @Resource
    private SysRolePermissionMapper sysRolePermissionMapper;
    @Resource
    private SysPermissionMapper sysPermissionMapper;

    //通过用户id查询用户权限
    @Override
    public List<String> findPermissionsByUid(Integer uid) {
        //通过uid查找到rid
        SysUserRole userRole = new SysUserRole();
        userRole.setUid(uid);
        SysUserRole sysUserRole = sysUserRoleMapper.selectOne(userRole);
        Integer rid = 0;
        if(sysUserRole != null){
            rid = sysUserRole.getRid();
        }
        //通过rid查找到pid数组
        SysRolePermission rolePermission = new SysRolePermission();
        rolePermission.setRid(rid);
        List<SysRolePermission> rolePermissions = sysRolePermissionMapper.select(rolePermission);
        //通过pid查找权限集合
        List<String> list = new ArrayList<>();
        for (SysRolePermission rolePer: rolePermissions) {
            SysPermission sysPermission = new SysPermission();
            sysPermission.setPid(rolePer.getPid());
            list.add(sysPermissionMapper.selectOne(sysPermission).getPercode());
        }
        return list;
    }

    //通过用户名查找用户信息
    @Override
    public SysUser findByUsername(String username) {
        SysUser user = new SysUser();
        user.setUsername(username);
        return sysUserMapper.selectOne(user);
    }

    //添加用户信息
    @Override
    public void createNewUser(String username, String password) {
        //随机生成盐
        StringBuffer buffer = new StringBuffer("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789");
        StringBuffer sb = new StringBuffer();
        Random r = new Random();
        for (int i = 0; i < 3; ++i) {
            sb.append(buffer.charAt(r.nextInt(buffer.length())));
        }
        String salt = sb.toString();

        //加密密码
        SimpleHash simpleHash = new SimpleHash("md5",password,salt,2);
        String password_md = simpleHash.toString();

        sysUserMapper.insert(new SysUser(username,password_md,salt));

    }


    //通过用户id查询用户信息
    @Override
    public SysUser findByUid(Integer uid) {
        return sysUserMapper.selectByPrimaryKey(uid);
    }

    //通过用户id更新用户数据
    @Override
    public void updateInfo(Integer uid, String username, String password) {

        //随机生成盐
        StringBuffer buffer = new StringBuffer("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789");
        StringBuffer sb = new StringBuffer();
        Random r = new Random();
        for (int i = 0; i < 3; ++i) {
            sb.append(buffer.charAt(r.nextInt(buffer.length())));
        }
        String salt = sb.toString();


        //加密密码
        SimpleHash simpleHash = new SimpleHash("md5",password,salt,2);
        String password_md = simpleHash.toString();
        sysUserMapper.updateByPrimaryKey(new SysUser(uid,username,password_md,salt));
    }

    //通过用户id删除用户表信息
    @Override
    public void deleteByUid(Integer uid) {
        sysUserMapper.deleteByPrimaryKey(uid);
    }

    //分页显示用户数据
    @Override
    public PageBean<MoUser> findUsersByPage(Integer page) {
        PageBean<MoUser> pageBean = new PageBean<>();
        //设置当前页码
        pageBean.setPage(page);
        //设置每页显示数
        Integer limit = 5;
        pageBean.setLimit(limit);


        //设置总记录数
        Integer totalCount = sysUserMapper.selectCount(new SysUser());
        pageBean.setTotalCount(totalCount);
        //计算总页数
        Integer totalPage = (int) Math.ceil((double)totalCount / (double)limit);
        pageBean.setTotalPage(totalPage);
        //开启pagehelper
        PageHelper.startPage(page,limit);
        //查询每页显示的数据
        List<SysUser> sysUsers = sysUserMapper.selectAll();
        List<MoUser> users = new ArrayList<>();
        for (SysUser user:sysUsers) {
            MoUser moUser = new MoUser();
            moUser.setUid(user.getUid());
            moUser.setPassword(user.getPassword());
            moUser.setUsername(user.getUsername());
            moUser.setSalt(user.getSalt());
            users.add(moUser);
        }
        pageBean.setList(users);
        return pageBean;
    }
}
