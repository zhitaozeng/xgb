package com.xgb.controller;

import com.xgb.Service.BuildingService;
import com.xgb.Service.DormService;
import com.xgb.Service.StudentService;
import com.xgb.model.*;
import com.xgb.utils.PageBean;
import org.apache.poi.hssf.usermodel.HSSFCell;
import org.apache.poi.hssf.usermodel.HSSFRow;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import javax.annotation.Resource;
import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletResponse;
import java.io.*;
import java.util.ArrayList;
import java.util.List;

/**
 *
 * 宿舍controller：包含楼栋操作和床位操作
 *
 */
@Controller
public class DormController {

    @Autowired
    private BuildingService buildingService;
    @Autowired
    private DormService dormService;
    @Autowired
    private StudentService studentService;

    //跳转到楼栋管理页面
    @RequestMapping("/dorm/building")
    public String building(@RequestParam(value = "page",defaultValue = "1")Integer page, Model model){

        //获取所有的楼栋信息
        PageBean<MoBuilding> pageBean = buildingService.findAllBuilding(page);
        model.addAttribute("buildingPages",pageBean);
        return "Dorm/building";
    }

    //跳转到增加楼栋页面
    @RequestMapping("/dorm/add")
    public String add(){
        return "Dorm/add";
    }

    //添加楼栋
    @RequestMapping(value = "/dorm/add",method = RequestMethod.POST)
    public String addBuilding(@RequestParam("name")String name, @RequestParam("note")String note, @RequestParam("file_name")MultipartFile file){
        try {
            buildingService.importDrom(name,note,file.getOriginalFilename(),file);
        } catch (IOException e) {
            return "redirect:/err?msg=上传失败，请检测数据是否准确";
        }
        return "redirect:/dorm/building";
    }



    //下载房间模板
    @RequestMapping("/dorm/download")
    public String download(){
        return "redirect:/Manage/dorm.xlsx";
    }


    //跳转到床位管理页面
    @RequestMapping("/dorm/bed")
    public String bed(){
        return "Dorm/bed";
    }

    //显示所有楼栋
    @RequestMapping("/dorm/findBuildingApi")
    @ResponseBody
    public List<Building> findBuildingApi(){
        return buildingService.findAll();
    }

    //显示所有房间
    @RequestMapping("/dorm/findByBid")
    @ResponseBody
    public List<MoDorm> findByBid(@RequestParam("bid")Integer bid){
        List<MoDorm> moDorms = new ArrayList<>();
        List<Dorm> dorms = dormService.findByBid(bid);
        for (Dorm d:dorms) {
            MoDorm moDorm = new MoDorm();
            moDorm.setId(d.getId());
            moDorm.setName(d.getName());
            moDorm.setBuilding(d.getBuilding());
            moDorm.setNum(d.getNum());
            List<Student> students = studentService.findByDid(d.getId());
            moDorm.setStudents(students);
            moDorms.add(moDorm);
        }
        return moDorms;
    }

    //添加学生到宿舍
    @RequestMapping("/dorm/addDormByDidStus")
    @ResponseBody
    public String addDormByDidStus(@RequestParam("id")Integer id ,@RequestParam("stus")Integer[] stus){
        dormService.addByIdStus(id,stus);
        return "";
    }

    //清空宿舍的学生
    @RequestMapping("/dorm/clearDorm")
    @ResponseBody
    public String clearDorm(@RequestParam("id")Integer id){
        dormService.clearDorm(id);
        return "";
    }

    //跳转到楼栋详情页面
    @RequestMapping("/dorm/more")
    public String more(@RequestParam("id")Integer id,Model model){
       Building building =  buildingService.findById(id);
       List<MoDorm> moDorms = findByBid(id);
       model.addAttribute("building",building);
       model.addAttribute("moDorms",moDorms);
       return "Dorm/detail";
    }

    //更新楼栋
    @RequestMapping("/dorm/updateById")
    @ResponseBody
    public String updateById(@RequestParam("id")Integer id,@RequestParam("name")String name,@RequestParam("note")String note){
        dormService.updateById(id,name,note);
        return "";
    }

    //删除楼栋
    @RequestMapping("/dorm/delete")
    public String delete(@RequestParam("id")Integer id){
        //获取楼栋所有的房间,删除学生对应的房间号
        List<Dorm> dorms = dormService.findByBid(id);
        for (Dorm d:dorms) {
            studentService.updateByDid(d.getId());
        }

        //删除所有的房间
        dormService.deleteByBid(id);
        //删除楼栋信息
        buildingService.deleteById(id);

        return "redirect:/dorm/building";
    }

}
