package com.xgb.controller;


import com.xgb.Service.UserService;
import com.xgb.model.SysUser;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.crypto.hash.SimpleHash;
import org.apache.shiro.subject.Subject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpSession;

/**
 *
 * 首页controller：用于登入，注销，首页的跳转等
 *
 */
@Controller
public class IndexController {


    @Autowired
    private UserService userService;

    @RequestMapping("/login")
    public String login(){
        return "Index/login";
    }


    @RequestMapping("/index")
    public String index(){
        return "Index/index";
    }

    @RequestMapping("/")
    public String toLogin(){
        return "redirect:/login";
    }

    @RequestMapping("/unauthorized")
    public String unauthorized(){
        return "Index/unauthorized";
    }

    @RequestMapping(value = "/login",method = RequestMethod.POST)
    public String loginUser(@RequestParam("username")String username, @RequestParam("password")String password, HttpSession session){
        //在认证提交前，准备token(令牌)
        UsernamePasswordToken token = new UsernamePasswordToken(username,password);
        Subject subject = SecurityUtils.getSubject();
        try {
            subject.login(token);
            SysUser user = (SysUser) subject.getPrincipal();
            session.setAttribute("user",user);
            return "redirect:/index";
        }catch (Exception e){
            session.setAttribute("msg","用户不存在或密码错误");
            return "Index/login";
        }
    }

    //跳转到修改密码页面
    @RequestMapping(value = "/modify/password", method = RequestMethod.GET)
    public String modifyPassword(){
        return "Index/update";
    }

    //执行修改密码的功能
    @RequestMapping(value = "/modify/password",method = RequestMethod.POST)
    public String modifyPassword(@RequestParam("uid")Integer uid,@RequestParam("username")String username,@RequestParam("password")String password){

        //更改用户表信息
        userService.updateInfo(uid,username,password);
        //跳转到用户查看页面
        return "redirect:/logout";
    }

}
