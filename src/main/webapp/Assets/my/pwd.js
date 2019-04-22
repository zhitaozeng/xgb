

function checkPwd()
{
    var pwd_first = $($("#form_pwd input[name='new_pwd_first']")[0]);
    var pwd = $($("#form_pwd input[name='new_pwd']")[0]);
    if(pwd_first.val()==pwd.val())
    {
        var b = new Base64();  
        var old_pwd = $($("#form_pwd input[name='old_pwd']")[0]);
        old_pwd.val(b.encode(old_pwd.val()));        
        pwd.val(b.encode(pwd.val()));
        return true;
    }
    else 
    {
        alert('两次密码输入不一致!请重新输入');
        return false;
    }
}