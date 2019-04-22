package com.xgb.Service;

import com.xgb.model.Student;
import com.xgb.utils.PageBean;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

public interface StudentService {
    void improtStudent(Integer cid, String originalFilename, MultipartFile file) throws IOException;

    void addStudent(Integer cid, String num, String name, String sex, String nation, String idcard, String politicalstatus, String qq, String address, String selfphone, String relativephone);

    PageBean<Student> findByCon(Integer page, String name, String num, Integer mid, Integer cid);

    Student findById(Integer id);

    void updateById(Integer id, String num, String name, String sex, String nation, String idcard, String politicalstatus, String qq, String address, String selfphone, String relativephone);

    void deleteById(Integer id);

    List<Student> findByMidCid(Integer mid, Integer cid);

    List<Student> findByDid(Integer id);

    void updateByDid(Integer id);
}
