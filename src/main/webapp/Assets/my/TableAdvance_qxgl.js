/// <reference path="JsonMsgHandle.js"/>

var config = [];
function MakeQxglTable(tb, url, param, func)
{
    config.tb = tb
    config.url = url
    config.param = param

    $.getJSON(url,param,function(jsonObj){
        console.log("do json function")

        JsonMsgHandle(jsonObj, function(data){
            // console.log(data)
            var tbody = tb;
            tb.innerHTML="";
            var list = data;

            for(var i=0; i<list.length; i++)
            {
                makeQxglTr(tbody, i+1,list[i]);
            }

            if(typeof(func) != undefined)
            {
                func();
            }
        })
    })
}
// TODO 创建, 删除 等操作 对应json格式

function makeQxglTr(tb, seq, trObj)
{
    if(typeof(trObj)!=undefined &&  trObj != null)
    {
        var $tb = $(tb)
        var $tr = $("<tr></tr>")
        $tr.append($('<td>'+ seq +'</td>'))
        $tr.append($('<td>'+ trObj["user_staffnumber"] +'</td>'))
        
        $tr.append($('<td>'+ trObj["user_name"] +'</td>'))
        $tr.append($('<td>'+ trObj["user_sex"] +'</td>'))
        $tr.append($('<td>'+ trObj["user_account"] +'</td>'))
        $tr.append($('<td>'+ trObj["permission"] +'</td>'))        
        $tr.append($('<td>'+ trObj["login_time"] +'</td>'))
        $tr.append($('<td>'+
        '<a href="#modal_user" onclick="doModify('+trObj["user_id"] +')"  data-toggle="modal" class="btn btn-xs btn-info">'+
        '<i class="fa fa-pencil"></i>'+
        '修改信息</a>'+
        '<a href="#modal_pwd" onclick="resetPwd('+trObj["user_id"] +')"  data-toggle="modal" class="btn btn-xs btn-default">'+
        '<i class="fa fa-key"></i>'+
        '重置密码</a>'+
        '<a href="javascript:;" onclick="doDel('+trObj['user_id'] + ',\'' + trObj['user_name'] + '\','+trObj['class_number']+')" class="btn btn-xs red">'+
        '<i class="fa fa-trash-o"></i>'+
        "删除</a>"+
        '</td>'))
        // $tr.append($('<td style="display:none">'+  +'</td>'))

        $tb.append($tr)
    }
}

function doDel(user_id, user_name, user_class_num)
{

    if(confirm("您确定要删除 "+ user_name +" 用户吗?"))
    {
        if(user_class_num==0 || alert("警告：该老师所负责班级存在, 无法删除!"),false)
        {
            //TODO - 修改地址
            $.getJSON("/BLL/qxgl/qxgl_scyh.php", {
                "user_id":user_id,
            },function(jsonObj){JsonMsgHandle(jsonObj, function(data){
                //刷新页面
                location.reload()
            })})
        }
    }
    
}

function doModify(user_id)
{

    //TODO - 地址修改, json属性对应.
    $("#form_userDetails input,select").val("");    
    $.getJSON("/BLL/qxgl/qxgl_yh_info.php", {
        "user_id":user_id,
    },function(jsonObj){JsonMsgHandle(jsonObj, function(data){
        var user = data;
        $("#form_userDetails").attr("action", "/BLL/qxgl/qxgl_xgyh.php")
        $("#form_userDetails input[name='user_id']").val(user.user_id)
        $("#form_userDetails input[name='user_name']").val(user.user_name)
        $("#form_userDetails select[name='user_sex']").val(user.user_sex)
        $("#form_userDetails input[name='user_phone']").val(user.user_phone)
        $("#form_userDetails select[name='user_permission']").val(user.user_permission)        
        $("#form_userDetails input[name='user_staffnumber']").val(user.user_staffnumber)
        $("#form_userDetails input[name='user_account']").val(user.user_account)
        $("#form_userDetails input[type='submit']").val("确认修改")
    })})
}

function doAdd()
{
    //TODO - 地址修改
    $("#form_userDetails").attr("action", "/BLL/qxgl/qxgl_xzyh.php")
    $("#tb_user input,select").val("");
    $("#form_userDetails input[type='submit']").val("确认添加");

}


function resetPwd(user_id)
{

    //TODO - 地址修改, json属性对应.
    $("#tb_userPwd input").val('');
    $($("#tb_userPwd input[name='new_pwd']")[0]).attr("type","text");        
    $("#tb_userPwd input[name='user_id']").val(user_id);
}

function pwdFormat()
{
    var pwd = $($("#tb_userPwd input[name='new_pwd']")[0]);
    $($("#tb_userPwd input[name='new_pwd']")[0]).attr("type","password");    
    var b = new Base64();    
    pwd.val(b.encode(pwd.val()));
    return true;
    
}