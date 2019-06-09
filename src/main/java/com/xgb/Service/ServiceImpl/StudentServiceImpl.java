package com.xgb.Service.ServiceImpl;

import com.github.pagehelper.PageHelper;
import com.xgb.Service.StudentService;
import com.xgb.mapper.ClassMapper;
import com.xgb.mapper.StudentMapper;
import com.xgb.model.Class;
import com.xgb.model.Student;
import com.xgb.utils.PageBean;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import tk.mybatis.mapper.entity.Example;

import javax.annotation.Resource;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;

@Service
public class StudentServiceImpl implements StudentService {

    @Resource
    private StudentMapper studentMapper;

    @Resource
    private ClassMapper classMapper;



    //从表格中导入学生
    @Override
    public void improtStudent(Integer cid, String fileName, MultipartFile file) throws IOException {
        //判断版本
        boolean isExcel2003 = true;
        if (fileName.matches("^.+\\.(?i)(xlsx)$")) {
            isExcel2003 = false;
        }
        InputStream is = file.getInputStream();
        Workbook wb = null;
        if (isExcel2003) {
            wb = new HSSFWorkbook(is);
        } else {
            wb = new XSSFWorkbook(is);
        }

        //获取第一个sheet
        Sheet sheet = wb.getSheetAt(0);

        //遍历sheet获得所有的行,第一行不用遍历
        for (int i =1;i<=sheet.getLastRowNum();i++){
            //获得该行
            Row row = sheet.getRow(i);
            if(row == null){
                break;
            }
            //遍历该行,获得所有的单元格
            Student student = new Student();
            if(row.getCell(0) != null){
                student.setNum(row.getCell(0).getStringCellValue());
            }

            if (row.getCell(1) != null){
                student.setName(row.getCell(1).getStringCellValue());
            }else {
                student.setName("");
            }

            if (row.getCell(2) != null){
                student.setSex(row.getCell(2).getStringCellValue());
            }else{
                student.setSex("");
            }

            if (row.getCell(3) != null){
                student.setNation(row.getCell(3).getStringCellValue());
            }else{
                student.setNation("");
            }

            if (row.getCell(4) != null){
                student.setIdcard(row.getCell(4).getStringCellValue());
            }else{
                student.setIdcard("");
            }

            if (row.getCell(5) != null){
                student.setPoliticalstatus(row.getCell(5).getStringCellValue());
            }else{
                student.setPoliticalstatus("");
            }

            if (row.getCell(6) != null){
                row.getCell(6).setCellType(Cell.CELL_TYPE_STRING);
                student.setQq(row.getCell(6).getStringCellValue());
            }else {
                student.setQq("");
            }

            if (row.getCell(7) != null){
                student.setAddress(row.getCell(7).getStringCellValue());
            }else {
                student.setAddress("");
            }

            if (row.getCell(8) != null){
                row.getCell(8).setCellType(Cell.CELL_TYPE_STRING);
                student.setSelfphone(row.getCell(8).getStringCellValue());
            }else {
                student.setSelfphone("");
            }


            if (row.getCell(9) != null){
                row.getCell(9).setCellType(Cell.CELL_TYPE_STRING);
                student.setRelativephone(row.getCell(9).getStringCellValue());
            }else {
                student.setRelativephone("");
            }

            student.setClassid(cid);

            //将学生信息存入数据库
            studentMapper.insert(student);

            //增加学生人数
            Class c = new Class();
            c.setId(cid);
            c.setStudentnumber(classMapper.selectByPrimaryKey(cid).getStudentnumber() + 1);
            classMapper.updateByPrimaryKeySelective(c);
        }
    }


    //手动添加学生
    @Override
    public void addStudent(Integer cid, String num, String name, String sex, String nation, String idcard, String politicalstatus, String qq, String address, String selfphone, String relativephone) {
        Student student = new Student(cid,num,name,sex,nation,idcard,politicalstatus,qq,address,selfphone,relativephone);
        studentMapper.insert(student);

        //增加学生人数
        Class c = new Class();
        c.setId(cid);
        c.setStudentnumber(classMapper.selectByPrimaryKey(cid).getStudentnumber() + 1);
        classMapper.updateByPrimaryKeySelective(c);
    }

    //查询学生
    @Override
    public PageBean<Student> findByCon(Integer page, String name, String num, Integer mid, Integer cid) {
        PageBean<Student> pageBean = new PageBean<>();
        //设置当前页码
        pageBean.setPage(page);
        //设置每页显示数
        Integer limit = 5;
        pageBean.setLimit(limit);

        //设置总记录数
        Integer totalCount = 0;

        //根据条件查询每页显示的数据
        List<Student> students = new ArrayList<>();
        if(mid == 0){
            Example example = new Example(Student.class);
            Example.Criteria criteria = example.createCriteria();
            criteria.andLike("num","%"+num+"%");
            criteria.andLike("name","%"+name+"%");
            example.setOrderByClause("num asc");

            totalCount = studentMapper.selectByExample(example).size();

            //开启pagehelper
            PageHelper.startPage(page,limit);
            students = studentMapper.selectByExample(example);
        }else if(cid == 0){
            Class c = new Class();
            c.setMajor(mid);
            List<Class> classList = classMapper.select(c);
            List<Integer> cids = new ArrayList<>();
            for (Class cla:classList) {
                Integer i = cla.getId();
                cids.add(i);
            }

            Example example = new Example(Student.class);
            Example.Criteria criteria = example.createCriteria();
            criteria.andLike("num","%"+num+"%");
            criteria.andLike("name","%"+name+"%");
            criteria.andIn("classid",cids);
            example.setOrderByClause("num asc");

            totalCount = studentMapper.selectByExample(example).size();

            //开启pagehelper
            PageHelper.startPage(page,limit);
            students = studentMapper.selectByExample(example);
        }else{
            Example example = new Example(Student.class);
            Example.Criteria criteria = example.createCriteria();
            criteria.andEqualTo("classid",cid);
            criteria.andLike("num","%"+num+"%");
            criteria.andLike("name","%"+name+"%");
            example.setOrderByClause("num asc");

            totalCount = studentMapper.selectByExample(example).size();

            //开启pagehelper
            PageHelper.startPage(page,limit);
            students = studentMapper.selectByExample(example);
        }


        pageBean.setTotalCount(totalCount);
        //计算总页数
        Integer totalPage = (int) Math.ceil((double)totalCount / (double)limit);
        pageBean.setTotalPage(totalPage);

        pageBean.setList(students);
        return pageBean;
    }


    //通过id查询学生信息
    @Override
    public Student findById(Integer id) {
        return studentMapper.selectByPrimaryKey(id);
    }

    //通过id更新学生信息
    @Override
    public void updateById(Integer id, String num, String name, String sex, String nation, String idcard, String politicalstatus, String qq, String address, String selfphone, String relativephone) {
        Student student = new Student();
        student.setId(id);
        student.setNum(num);
        student.setName(name);
        student.setSex(sex);
        student.setNation(nation);
        student.setIdcard(idcard);
        student.setPoliticalstatus(politicalstatus);
        student.setQq(qq);
        student.setAddress(address);
        student.setSelfphone(selfphone);
        student.setRelativephone(relativephone);
        studentMapper.updateByPrimaryKeySelective(student);
    }

    //根据id删除学生信息
    @Override
    public void deleteById(Integer id) {
        //更改对应班级学生数量
        Integer cid = studentMapper.selectByPrimaryKey(id).getClassid();
        Class c = new Class();
        c.setId(cid);
        c.setStudentnumber(classMapper.selectByPrimaryKey(cid).getStudentnumber() - 1);
        classMapper.updateByPrimaryKeySelective(c);

        //删除学生数据
        studentMapper.deleteByPrimaryKey(id);
    }


    //通过专业号，班级号查询学生信息
    @Override
    public List<Student> findByMidCid(Integer mid, Integer cid) {

        List<Student> students = new ArrayList<>();

        if(mid == 0){
            students = studentMapper.selectAll();
        }else if(cid == 0) {
            Class c = new Class();
            c.setMajor(mid);
            List<Class> classList = classMapper.select(c);
            for (Class cla:classList) {
                Student student = new Student();
                student.setClassid(cla.getId());
                List<Student> studentList = studentMapper.select(student);
                for (Student s:studentList) {
                    students.add(s);
                }
            }

        }else{
            Student student = new Student();
            student.setClassid(cid);
            students = studentMapper.select(student);
        }

        return students;
    }


    //通过房间id查找学生
    @Override
    public List<Student> findByDid(Integer id) {
        Student student = new Student();
        student.setDormid(id);
        return studentMapper.select(student);
    }

    //通过房间id删除学生did
    @Override
    public void updateByDid(Integer id) {
        Student student = new Student();
        student.setDormid(id);
        List<Student> students = studentMapper.select(student);
        for (Student s:students) {
            s.setDormid(null);
            studentMapper.updateByPrimaryKey(s);
        }
    }
}
