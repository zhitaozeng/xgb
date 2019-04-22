package com.xgb.controller;


import com.xgb.model.SysUser;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.crypto.hash.SimpleHash;
import org.apache.shiro.subject.Subject;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpSession;

@Controller
public class IndexController {



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
            return "Index/login";
        }
    }

}
