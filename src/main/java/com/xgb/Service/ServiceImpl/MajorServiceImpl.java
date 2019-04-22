package com.xgb.Service.ServiceImpl;

import com.github.pagehelper.PageHelper;
import com.xgb.Service.MajorService;
import com.xgb.mapper.MajorMapper;
import com.xgb.model.Major;
import com.xgb.utils.PageBean;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service
public class MajorServiceImpl implements MajorService {

    @Resource
    private MajorMapper majorMapper;

    //添加新专业
    @Override
    public void addMajor(String name, String schoolsystem) {
        Major major = new Major();
        major.setName(name);
        major.setSchoolsystem(schoolsystem);
        majorMapper.insert(major);
    }

    //查找所有的专业
    @Override
    public PageBean<Major> findByPage(Integer page) {
        PageBean<Major> pageBean = new PageBean<>();
        //设置当前页码
        pageBean.setPage(page);
        //设置每页显示数
        Integer limit = 5;
        pageBean.setLimit(limit);


        //设置总记录数
        Integer totalCount = majorMapper.selectCount(new Major());
        pageBean.setTotalCount(totalCount);
        //计算总页数
        Integer totalPage = (int) Math.ceil((double)totalCount / (double)limit);
        pageBean.setTotalPage(totalPage);
        //开启pagehelper
        PageHelper.startPage(page,limit);
        //查询每页显示的数据
        List<Major> majorList = majorMapper.selectAll();
        pageBean.setList(majorList);
        return pageBean;
    }

    //根据id查询专业信息
    @Override
    public Major findById(Integer id) {
        Major major = majorMapper.selectByPrimaryKey(id);
        return major;
    }

    //更新专业
    @Override
    public void updateById(Integer id, String name, String schoolsystem) {
        Major major = new Major();
        major.setId(id);
        major.setName(name);
        major.setSchoolsystem(schoolsystem);
        majorMapper.updateByPrimaryKey(major);
    }

    //删除专业
    @Override
    public void deleteById(Integer id) {
        majorMapper.deleteByPrimaryKey(id);
    }

    //查询所有专业
    @Override
    public List<Major> findAllMajor() {
        return majorMapper.selectAll();
    }
}
