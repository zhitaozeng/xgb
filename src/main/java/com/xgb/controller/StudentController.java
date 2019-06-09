package com.xgb.controller;

import com.github.pagehelper.Page;
import com.xgb.Service.BuildingService;
import com.xgb.Service.DormService;
import com.xgb.Service.StudentService;
import com.xgb.model.Dorm;
import com.xgb.model.MoStudent;
import com.xgb.model.Student;
import com.xgb.utils.PageBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

/**
 *
 * 学生controller：用于学生的查找，添加，修改，删除
 *
 */
@Controller
public class StudentController {

    @Autowired
    private StudentService studentService;
    @Autowired
    private DormService dormService;
    @Autowired
    private BuildingService buildingService;

    //跳转到查找学生页面
    @RequestMapping("/student/find")
    public String find(){
        return "Student/search";
    }

    //跳转到导入学生页面
    @RequestMapping("/student/import")
    public String importS(){
        return "Student/importStudent";
    }


    //导入学生
    @RequestMapping(value = "/student/import",method = RequestMethod.POST)
    public String importStudent(@RequestParam("class_id")Integer cid, @RequestParam("file_name")MultipartFile file){
        try {
            studentService.improtStudent(cid,file.getOriginalFilename(),file);
        } catch (IOException e) {
            return "redirect:/err?msg=上传失败，请检测数据是否准确（如学号是否已存在）";
        }
        return "redirect:/student/find";
    }

    //下载学生模板
    @RequestMapping("/student/download")
    public String downloadTemp(){
        return "redirect:/Manage/student.xlsx";
    }


    //跳转到手动添加页面
    @RequestMapping("/student/add")
    public String add(){
        return "Student/add";
    }

    //执行手动添加
    @RequestMapping(value = "/student/add",method = RequestMethod.POST)
    public String addStudent(@RequestParam("class_id")Integer cid,@RequestParam("num")String num,@RequestParam("name")String name,@RequestParam("sex")String sex,@RequestParam("nation")String nation,@RequestParam("idcard")String idcard,@RequestParam(value = "politicalstatus",defaultValue = "")String politicalstatus,@RequestParam(value = "qq",defaultValue = "")String qq,@RequestParam(value = "address",defaultValue = "")String address,@RequestParam(value = "selfphone",defaultValue = "")String selfphone ,@RequestParam(value = "relativephone",defaultValue = "")String relativephone){
        studentService.addStudent(cid,num,name,sex,nation,idcard,politicalstatus,qq,address,selfphone,relativephone);
        return "redirect:/student/find";
    }

    //查询学生信息
    @RequestMapping("/student/findCon")
    @ResponseBody
    public PageBean<Student> find(@RequestParam(value = "page",defaultValue = "1")Integer page,@RequestParam(value = "name",defaultValue = "")String name,@RequestParam(value = "num",defaultValue = "")String num,@RequestParam(value = "majorId",defaultValue = "0")Integer mid,@RequestParam(value = "classId",defaultValue = "0")Integer cid){
        PageBean<Student> pageBean = studentService.findByCon(page,name,num,mid,cid);
        return pageBean;
    }

    //跳转到更新页面
    @RequestMapping("/student/update")
    public String update(@RequestParam("id")Integer id, Model model){
        Student student = studentService.findById(id);
        model.addAttribute("student",student);
        return "Student/update";
    }

    //执行更新功能
    @RequestMapping(value = "/student/update",method = RequestMethod.POST)
     public String updateStudnent(@RequestParam("id")Integer id,@RequestParam("num")String num,@RequestParam("name")String name,@RequestParam("sex")String sex,@RequestParam("nation")String nation,@RequestParam("idcard")String idcard,@RequestParam(value = "politicalstatus",defaultValue = "")String politicalstatus,@RequestParam(value = "qq",defaultValue = "")String qq,@RequestParam(value = "address",defaultValue = "")String address,@RequestParam(value = "selfphone",defaultValue = "")String selfphone ,@RequestParam(value = "relativephone",defaultValue = "")String relativephone){
        studentService.updateById(id,num,name,sex,nation,idcard,politicalstatus,qq,address,selfphone,relativephone);
        return "redirect:/student/find";
    }


    //删除学生信息
    @RequestMapping(value = "/student/delete", method = RequestMethod.GET)
    public String deleteStudent(@RequestParam("id")Integer id){
        //将学生对应的寝室人数减1
        Student student = studentService.findById(id);
        Integer did = student.getDormid();
        Dorm dorm = dormService.findById(did);
        if(dorm != null){
            dorm.setNum(dorm.getNum() - 1);
            dormService.updateByDorm(dorm);
        }
        studentService.deleteById(id);
        return "redirect:/student/find";
    }

    //根据专业班级查找学生
    @RequestMapping("/student/findByMidCid")
    @ResponseBody
    public List<MoStudent> findByMidCid(@RequestParam("mid")Integer mid,@RequestParam("cid")Integer cid){
        List<MoStudent> moStudents = new ArrayList<>();
        List<Student> students = studentService.findByMidCid(mid,cid);
        for (Student s:students) {
            MoStudent moStudent = new MoStudent();
            moStudent.setId(s.getId());
            moStudent.setSex(s.getSex());
            moStudent.setName(s.getName());
            moStudent.setNum(s.getNum());
            moStudent.setDorm(dormService.findById(s.getDormid()));
            Integer bid = 0;
            Dorm dorm = dormService.findById(s.getDormid());
            if(dorm != null){
                bid = dorm.getBuilding();
            }
            moStudent.setBuilding(buildingService.findById(bid));
            moStudents.add(moStudent);
        }
        return moStudents;
    }
}
