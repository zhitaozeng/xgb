package com.xgb.Service;

import com.xgb.model.Class;
import com.xgb.model.MoClass;
import com.xgb.utils.PageBean;

import java.util.List;

public interface ClassService {
    void addClass(String name, Integer qqgroup, Integer major, Integer time);



    PageBean<MoClass> findAllByPage(Integer page);

    List<Class> findClassByMajor(Integer id);


    List<Class> findAllByCon(Integer mid, Integer cid, Integer yearStart, Integer yearEnd);

    Class findById(Integer id);

    void updateById(Integer id, String name, Integer qqgroup, Integer major, Integer time);

    void deleteById(Integer id);
}
