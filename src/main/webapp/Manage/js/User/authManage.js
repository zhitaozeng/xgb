/**
 * Created by TinyJian on 2017/3/12.
 */
var oTable = TableAdvanced.init("tb_userList", {
    "columns": [
        { data: 'order_number' },
        { data: 'user_staffnumber'},
        { data: 'user_name'},
        { data: 'user_sex' },
        { data: 'user_account' },
        { data: 'permission' },
        { data: 'login_time' },
        { data: 'opr' }
    ],
});
var list;
jQuery(document).ready(function() {
    //获得table数据
    var pageWrapper = $("#tb_userList_wrapper div[class='row'] div")[0];
    $(pageWrapper).append($("<a onclick='doAdd()' style='margin-left: 10px' href='#modal_user' data-toggle='modal' class='btn blue'>添加用户</a>"));

    //显示列表
    loadTable();
    //弹框 详情 确认按钮
    $('#submit_details').click(function () {
        var data = {};
        data['user_id'] = $('#user_id').val();
        data['user_staffnumber'] = $('#user_staffnumber').val();
        data['user_account'] = $('#user_account').val();
        data['user_name'] = $('#user_name').val();
        data['user_sex'] = $('#user_sex').val();
        data['user_permission'] = $('#user_permission').val();
        data['user_phone'] = $('#user_phone').val();

        if (data.user_name.length == 0 || data.user_staffnumber.length == 0) {
            alert('姓名、工号不能为空!');
            return ;
        }
        //操作类型
        var type_add = $('#opr_type').val() == 0 ? true : false;
        if (type_add) {
            manage_rpc.addUser(data, function (data) {
                if (data.code == 0) {
                    loadTable();
                } else {
                    alert(data.status);
                }
            });
        } else {
            manage_rpc.modifyUser(data.user_id, data, function (data) {
                if (data.code == 0) {
                    loadTable();
                } else {
                    alert(data.status);
                }
            });
        }
    });

    //弹窗 重置密码
    $('#submit_pwd').click(function () {
        var user_id = $('#user_id').val();
        var pwd = $('#new_pwd').val();
        if (pwd.length == 0) {
            alert('请输入密码');
            return ;
        }
        pwd = new Base64().encode(pwd);
        manage_rpc.modifyPassword(user_id,'', pwd, function(data) {
            if (data.code == 0) {

            } else {
                alert(data.status);
            }
        });

    })

});
//加载列表
function loadTable() {
    //列表显示
    manage_rpc.getUserList({}, function(data) {
        if (data.code == 0) {
            list = data.data;
            oTable.fnClearTable();
            for (var i = 0; i < list.length; i++) {
                var item = list[i];
                list[i]['order_number'] = i+1;
                list[i]['opr'] = '<a href="#modal_user" onclick="doModify('+ i +')"  data-toggle="modal" class="btn btn-xs btn-info">'+
                    '<i class="fa fa-pencil"></i>'+
                    '修改信息</a>'+
                    '<a href="#modal_pwd" onclick="resetPwd('+ item['user_id'] +')"  data-toggle="modal" class="btn btn-xs btn-default">'+
                    '<i class="fa fa-key"></i>'+
                    '重置密码</a>'+
                    '<a href="javascript:;" onclick="doDel('+ item['user_id'] + ',\'' + item['user_name'] + '\','+item['class_number']+')" class="btn btn-xs red">'+
                    '<i class="fa fa-trash-o"></i>'+
                    "删除</a>";
            }

            oTable.fnAddData(list);

        } else {
            alert(data.status);
        }
    });
}

function doModify(index) {
    $('#user_id').val(list[index]['user_id']);
    $('#user_staffnumber').val(list[index]['user_staffnumber']);
    $('#user_account').val(list[index]['user_account']);
    $('#user_name').val(list[index]['user_name']);
    $('#user_sex').val(list[index]['user_sex']);
    $('#user_permission').val(list[index]['permission']);
    $('#user_phone').val(list[index]['phone']);
    $('#opr_type').val(1);
}

function doAdd() {
    $('#user_id').val('');
    $('#user_staffnumber').val('');
    $('#user_account').val('');
    $('#user_name').val('');
    $('#user_sex').val('男');
    $('#user_permission').val('班主任');
    $('#user_phone').val('');
    $('#opr_type').val(0);
}

function resetPwd(user_id) {
    $('#new_pwd').val('');
    $('#user_id').val(user_id);
}

function doDel(user_id) {
    if (confirm('您确认要删除该用户吗?')) {
        manage_rpc.delUser(user_id, function (data) {
            if (data.code == 0) {
                 loadTable();
            } else {
                alert(data.status);
            }
        });
    }
}




