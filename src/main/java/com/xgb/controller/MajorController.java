package com.xgb.controller;

import com.xgb.Service.MajorService;
import com.xgb.model.Major;
import com.xgb.utils.PageBean;
import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
public class MajorController {


    @Autowired
    private MajorService majorService;

    //跳转到专业管理页面
    @RequestMapping("/major/find")
    public String find(@RequestParam(value = "page",defaultValue = "1")Integer page, Model model){
        //查询所有用户
        PageBean<Major> pageBean = majorService.findByPage(page);
        model.addAttribute("majorPages",pageBean);
        return "Major/manage";
    }

    //跳转到专业添加页面
    @RequestMapping("/major/add")
    public String add(){
        return "Major/add";
    }

    //执行添加专业的方法
    @RequestMapping(value = "/major/add",method = RequestMethod.POST)
    public String addMajor(@RequestParam("name")String name,@RequestParam("schoolsystem")String schoolsystem){
        majorService.addMajor(name,schoolsystem);

        return "redirect:/major/find";
    }

    //跳转到更新页面
    @RequestMapping("/major/update")
    public String update(@RequestParam("id")Integer id,Model model){
        //获取专业信息
        Major major = majorService.findById(id);
        model.addAttribute("major",major);
        return "Major/update";
    }

    //执行更新功能
    @RequestMapping(value = "/major/update",method = RequestMethod.POST)
    public String updateMajor(@RequestParam("id")Integer id,@RequestParam("name")String name,@RequestParam("schoolsystem")String schoolsystem){
        majorService.updateById(id,name,schoolsystem);
        return "redirect:/major/find";
    }

    //删除专业
    @RequestMapping("/major/delete")
    public String deleteMajor(@RequestParam("id")Integer id){
        majorService.deleteById(id);
        return "redirect:/major/find";
    }

    //提供所有专业的数据，传送到前台
    @RequestMapping(value = "/major/findMajorApi")
    @ResponseBody
    public List<Major> findMajorApi(){
        return majorService.findAllMajor();
    }

}
