package com.xgb.controller;

import com.xgb.Service.ClassService;
import com.xgb.Service.MajorService;
import com.xgb.model.Class;
import com.xgb.model.Major;
import com.xgb.model.MoClass;
import com.xgb.utils.PageBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.ArrayList;
import java.util.List;

/**
 *
 * 班级controller：用于班级的查找，添加，修改，删除
 *
 */
@Controller
public class ClassController {

    @Autowired
    private MajorService majorService;
    @Autowired
    private ClassService classService;


    //跳转到添加班级页面
    @RequestMapping("/class/add")
    public String add(Model model){
        //获取专业信息
        List<Major> majors = majorService.findAllMajor();
        model.addAttribute("majors",majors);
        return "Class/add";
    }

    //添加班级
    @RequestMapping(value = "/class/add",method = RequestMethod.POST)
    public String addClass(@RequestParam("name")String name,@RequestParam(value = "qqgroup",defaultValue = "")Integer qqgroup,@RequestParam("major")Integer major,@RequestParam("time")Integer time){
        classService.addClass(name,qqgroup,major,time);
        return "redirect:/class/find";
    }

    //跳转到显示班级页面
    @RequestMapping("/class/find")
    public String find(@RequestParam(value = "page",defaultValue = "1")Integer page,Model model){
        PageBean<MoClass> pageBean = classService.findAllByPage(page);
        List<Major> majorList = majorService.findAllMajor();
        model.addAttribute("majorList",majorList);
        model.addAttribute("classPages",pageBean);
        return "Class/find";
    }

    //根据前台添加查询班级，不判断是否毕业
    @RequestMapping("/class/findData")
    @ResponseBody
    public List<MoClass> findData(@RequestParam("majorId")Integer mid,@RequestParam("classId")Integer cid,@RequestParam("yearStart")Integer yearStart,@RequestParam("yearEnd")Integer yearEnd){

        List<Class> classList = classService.findAllByCon(mid,cid,yearStart,yearEnd);
        List<MoClass> moClassList = new ArrayList<>();
        for (Class c:classList) {
            MoClass moClass = new MoClass();
            moClass.setId(c.getId());
            moClass.setMajor(c.getMajor());
            moClass.setName(c.getName());
            moClass.setQqgroup(c.getQqgroup());
            moClass.setStudentnumber(c.getStudentnumber());
            moClass.setTime(c.getTime());
            moClass.setRealMajor(majorService.findById(c.getMajor()));
            moClassList.add(moClass);
        }
        return moClassList;
    }

    //根据专业获取班级信息，返回到前台
    @RequestMapping("/class/findClassByMajor")
    @ResponseBody
    public List<Class>  findClassByMajor(@RequestParam("major")Integer id){
        List<Class> classList = classService.findClassByMajor(id);
        return classList;
    }

    //跳转到更新班级页面
    @RequestMapping("/class/update")
    public String update(@RequestParam("id")Integer id,Model model){
        //获取专业信息
        List<Major> majors = majorService.findAllMajor();
        model.addAttribute("majors",majors);
        //获取班级信息
        Class c = classService.findById(id);
        model.addAttribute("c",c);
        return "Class/update";
    }

    //执行更新操作
    @RequestMapping(value = "/class/update",method = RequestMethod.POST)
    public String updateClass(@RequestParam("id")Integer id,@RequestParam("name")String name,@RequestParam(value = "qqgroup",defaultValue = "")Integer qqgroup,@RequestParam("major")Integer major,@RequestParam("time")Integer time){
        classService.updateById(id,name,qqgroup,major,time);
        return "redirect:/class/find";
    }

    //删除班级
    @RequestMapping("/class/delete")
    public String deleteClass(@RequestParam("id")Integer id){
        classService.deleteById(id);
        return "redirect:/class/find";
    }






}
