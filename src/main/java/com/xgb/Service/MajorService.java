package com.xgb.Service;

import com.xgb.model.Major;
import com.xgb.utils.PageBean;

import java.util.List;

public interface MajorService {
    void addMajor(String name, String schoolsystem);

    PageBean<Major> findByPage(Integer page);

    Major findById(Integer id);

    void updateById(Integer id, String name, String schoolsystem);

    void deleteById(Integer id);

    List<Major> findAllMajor();
}
