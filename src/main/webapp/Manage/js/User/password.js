/**
 * Created by tinyjian on 17/3/13.
 */


$(function() {

    //重置密码
    $('#submit').click(function() {
        var user_id = $('#user_id').val();
        var new_pwd_first = $('#new_pwd_first').val();
        var new_pwd = $('#new_pwd').val();
        var old_pwd = $('#old_pwd').val();

        if (user_id <= 0) {
            alert('系统错误,请刷新页面!');
        }

        if (old_pwd.length == 0) {
            alert('请输入原始密码!');
            return ;
        } else if (new_pwd_first.length == 0 || new_pwd.length == 0){
            alert('请输入新密码');
            return ;
        } else if (new_pwd_first != new_pwd) {
            alert('两次密码输入不一致!');
            return ;
        }
        var b = new Base64();

        old_pwd = b.encode(old_pwd);
        new_pwd = b.encode(new_pwd);
        manage_rpc.modifyPassword(user_id, old_pwd, new_pwd, function (data) {
            if (data.code == 0) {
                alert('修改成功!');
                location.reload();
            } else {
                alert(data.status);
            }
        })
    });
});