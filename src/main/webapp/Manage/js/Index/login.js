
$(function() {
    //登陆
    $("#login").click(function () {

        //验证码正确, 加密密码
        var pwd_dom = $("#login_form input[name='password']:first");
        var password = pwd_dom.val();

        var username_dom = $("#login_form input[name='username']:first");
        var username = username_dom.val();


        if (username.length == 0) {
            username_dom.focus();
            return ;
        } else if (password.length == 0) {
            pwd_dom.focus();
            return ;
        }

        action = "/login";
        form = $("<form></form>");
        form.attr('action',action);
        form.attr('method','post');
        input1 = $("<input type='text' name='username' />");
        input1.attr('value',username);
        input2 = $("<input type='password' name='password'/>");
        input2.attr('value',password);
        form.append(input1);
        form.append(input2);
        form.appendTo("body");
        form.css('display','none');
        form.submit();


    });


    //背景图
    $.backstretch([
        "/Assets/admin/pages/media/bg/1.jpg",
        "/Assets/admin/pages/media/bg/2.jpg",
        "/Assets/admin/pages/media/bg/3.jpg",
        "/Assets/admin/pages/media/bg/4.jpg"
    ], {
        fade: 1000,
        duration: 8000
    });

});