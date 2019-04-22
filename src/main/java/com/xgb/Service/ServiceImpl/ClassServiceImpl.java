package com.xgb.Service.ServiceImpl;

import com.github.pagehelper.PageHelper;
import com.xgb.Service.ClassService;
import com.xgb.mapper.ClassMapper;
import com.xgb.mapper.MajorMapper;
import com.xgb.model.Class;
import com.xgb.model.MoClass;
import com.xgb.utils.PageBean;
import org.springframework.stereotype.Service;
import tk.mybatis.mapper.entity.Example;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;

@Service
public class ClassServiceImpl implements ClassService {

    @Resource
    private ClassMapper classMapper;
    @Resource
    private MajorMapper majorMapper;

    //添加新班级
    @Override
    public void addClass(String name, Integer qqgroup, Integer major, Integer time) {
        Class c = new Class();
        c.setName(name);
        c.setQqgroup(qqgroup);
        c.setMajor(major);
        c.setTime(time);
        c.setStudentnumber(0);
        classMapper.insert(c);
    }


    //分页查找班级
    @Override
    public PageBean<MoClass> findAllByPage(Integer page) {
        PageBean<MoClass> pageBean = new PageBean<>();
        //设置当前页码
        pageBean.setPage(page);
        //设置每页显示数
        Integer limit = 5;
        pageBean.setLimit(limit);


        //设置总记录数
        Integer totalCount = classMapper.selectCount(new Class());
        pageBean.setTotalCount(totalCount);
        //计算总页数
        Integer totalPage = (int) Math.ceil((double)totalCount / (double)limit);
        pageBean.setTotalPage(totalPage);
        //开启pagehelper
        PageHelper.startPage(page,limit);
        //查询每页显示的数据
        List<Class> classList = classMapper.selectAll();
        List<MoClass> moClassList = new ArrayList<>();
        for (Class c:classList) {
            MoClass moClass = new MoClass();
            moClass.setId(c.getId());
            moClass.setMajor(c.getMajor());
            moClass.setName(c.getName());
            moClass.setQqgroup(c.getQqgroup());
            moClass.setStudentnumber(c.getStudentnumber());
            moClass.setTime(c.getTime());
            moClass.setRealMajor(majorMapper.selectByPrimaryKey(c.getMajor()));
            moClassList.add(moClass);
        }
        pageBean.setList(moClassList);

        return pageBean;
    }

    //通过专业号来查询班级信息
    @Override
    public List<Class> findClassByMajor(Integer id) {
        Example example = new Example(Class.class);
        example.createCriteria().andEqualTo("major",id);
        example.setOrderByClause("name asc");
        return classMapper.selectByExample(example);
    }

    //根据前台条件查询班级
    @Override
    public List<Class> findAllByCon(Integer mid, Integer cid,  Integer yearStart, Integer yearEnd) {
            if(mid == 0){
                if(yearStart == 0 && yearEnd != 0){
                    Example example = new Example(Class.class);
                    Example.Criteria criteria = example.createCriteria();
                    criteria.andEqualTo("time",yearEnd);
                    example.setOrderByClause("name asc");
                    return classMapper.selectByExample(example);
                }else if(yearStart != 0 && yearEnd == 0){
                    Example example = new Example(Class.class);
                    Example.Criteria criteria = example.createCriteria();
                    criteria.andEqualTo("time",yearStart);
                    example.setOrderByClause("name asc");
                    return classMapper.selectByExample(example);
                }else if(yearStart !=0 && yearEnd !=0){
                    Example example = new Example(Class.class);
                    Example.Criteria criteria = example.createCriteria();
                    criteria.andBetween("time",yearStart,yearEnd);
                    example.setOrderByClause("name asc");
                    return classMapper.selectByExample(example);
                }else{
                    return classMapper.selectAll();
                }

            }else if(cid == 0){

                if(yearStart == 0 && yearEnd != 0){
                    Example example = new Example(Class.class);
                    Example.Criteria criteria = example.createCriteria();
                    criteria.andEqualTo("major",mid);
                    criteria.andEqualTo("time",yearEnd);
                    example.setOrderByClause("name asc");
                    return classMapper.selectByExample(example);
                }else if(yearStart != 0 && yearEnd == 0){
                    Example example = new Example(Class.class);
                    Example.Criteria criteria = example.createCriteria();
                    criteria.andEqualTo("major",mid);
                    criteria.andEqualTo("time",yearStart);
                    example.setOrderByClause("name asc");
                    return classMapper.selectByExample(example);
                }else if(yearStart !=0 && yearEnd !=0){
                    Example example = new Example(Class.class);
                    Example.Criteria criteria = example.createCriteria();
                    criteria.andEqualTo("major",mid);
                    criteria.andBetween("time",yearStart,yearEnd);
                    example.setOrderByClause("name asc");
                    return classMapper.selectByExample(example);
                }else{
                    Example example = new Example(Class.class);
                    Example.Criteria criteria = example.createCriteria();
                    criteria.andEqualTo("major",mid);
                    example.setOrderByClause("name asc");
                    return classMapper.selectByExample(example);
                }

            }else {

                if(yearStart == 0 && yearEnd != 0){
                    Example example = new Example(Class.class);
                    Example.Criteria criteria = example.createCriteria();
                    criteria.andEqualTo("id",cid);
                    criteria.andEqualTo("time",yearEnd);
                    example.setOrderByClause("name asc");
                    return classMapper.selectByExample(example);
                }else if(yearStart != 0 && yearEnd == 0){
                    Example example = new Example(Class.class);
                    Example.Criteria criteria = example.createCriteria();
                    criteria.andEqualTo("id",cid);
                    criteria.andEqualTo("time",yearStart);
                    example.setOrderByClause("name asc");
                    return classMapper.selectByExample(example);
                }else if(yearStart !=0 && yearEnd !=0){
                    Example example = new Example(Class.class);
                    Example.Criteria criteria = example.createCriteria();
                    criteria.andEqualTo("id",cid);
                    criteria.andBetween("time",yearStart,yearEnd);
                    example.setOrderByClause("name asc");
                    return classMapper.selectByExample(example);
                }else{
                    Example example = new Example(Class.class);
                    Example.Criteria criteria = example.createCriteria();
                    criteria.andEqualTo("id",cid);
                    example.setOrderByClause("name asc");
                    return classMapper.selectByExample(example);
                }

            }

    }


    //根据id获取班级信息
    @Override
    public Class findById(Integer id) {
        return classMapper.selectByPrimaryKey(id);
    }

    //更新班级信息
    @Override
    public void updateById(Integer id, String name, Integer qqgroup, Integer major, Integer time) {
        Class c = new Class();
        c.setId(id);
        c.setName(name);
        c.setQqgroup(qqgroup);
        c.setMajor(major);
        c.setTime(time);
        c.setStudentnumber(classMapper.selectByPrimaryKey(id).getStudentnumber());
        classMapper.updateByPrimaryKey(c);
    }


    //删除班级
    @Override
    public void deleteById(Integer id) {
        classMapper.deleteByPrimaryKey(id);
    }
}
