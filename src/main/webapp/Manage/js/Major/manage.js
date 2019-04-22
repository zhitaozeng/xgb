/// <reference path="JsonMsgHandle.js"/>
// $(document).ready(function(){$("#majorclass").select2();});
var cur_year = -1;
var oTable = TableAdvanced.init("tb_majorList");
$(function() {
    //下拉框年份
    var start_year = new Date().getFullYear(),
        select_data = [
            {id:-1, text:'所有年级'}
        ];
    for(var i = 1; i >= -14; i--) {
        var y = start_year + i;
        select_data.push({id : y, text: y + '年'});
    }
    //初始化select2
    $("#year").select2({
        data: select_data,
        placeholder: "请输入要查找的年份",
        allowClear: false
    }).on('select2:select', function(evt) {
        //选中项变动
        cur_year = evt.params.data.id;
        refreshTable();
    });
    refreshTable();
    //下拉框专业
// var datamajor = [{ id: 'a0', text: 'enhancement' }, { id: 'a1', text: 'bug' }, { id: 'a2', text: 'duplicate' }];
// $("#majorclass").select2({
//   data: datamajor,
//   placeholder:'请选择',
//   allowClear:false
// }).on('select2:select', function(evt) {
//         //选中项变动
//         // cur_year = evt.params.data.id;
//         // refreshTable();

//     });
    // 学制下拉框
    $('#major_schsys').select2({
        placeholder: "请选择学制",
        allowClear: false
    });

    //提交按钮
    $('#major_details_submit').click(function(){
        var opt = $(this).attr('submit-type');
        var major_id = $("#major_id").val();
        var data = {
            major_name : $("#major_name").val(),
            major_schsys : $("#major_schsys").val(),
        };
        if (opt == 'add') {
            manage_rpc.addMajor(major_id, data, function(data) {
                if (data.code == 0) {
                    refreshTable();
                } else {
                    alert(data.status);
                }
            });

        } else if (opt == 'modify'){
            manage_rpc.modifyMajor(major_id, data, function(data) {
                if (data.code == 0) {
                    refreshTable();
                } else {
                    alert(data.status);
                }
            });

        }
    });
    //重新加载
    $('#reload').click(refreshTable);
});



var config = [];
function refreshTable() {
    oTable.fnClearTable();
    var plain = $(".dataTables_empty").text();
    $(".dataTables_empty").text('加载中...');
    manage_rpc.getMajorList(cur_year, function(data){
        if (data.code == 0) {
            var tb_data = [];
            for(var i = 0; i < data.data.length; i++) {
                var item = data.data[i];
                var ext_info;
                if (cur_year === -1) {
                    ext_info = [
                        {"cn":"年份: ","en":"year"},
                        {"cn":"班级数量: ","en":"yearclassnum"},
                        {"cn":"学生数量: ","en":"yearstunum"}
                    ];
                } else {
                    ext_info = [
                        {"cn":"班级: ","en":"cname"},
                        {"cn":"学生数量: ","en":"studentnumber"},
                        {"cn":"班主任: ","en":"tname"}
                    ];
                }
                tb_data.push([
                    '<span class="row-details row-details-close"></span>',
                    i + 1,
                    item.name,
                    item.year,
                    item.schoolsystem,
                    item.classnum,
                    item.stunum,
                    '<a href="#modal_majorDetails" onclick="doModify('+item.id+',\''+ item.name+'\','+item.schoolsystem +')"  data-toggle="modal" class="btn btn-xs btn-info">'+
                    '<i class="glyphicon glyphicon-pencil"></i>'+
                    '修改</a>'+
                    '<a href="javascript:;" onclick="doDelMajor(\''+item.name+'\','+item.id+', '+item.classnum+')" class="btn btn-xs red">'+
                    '<i class="glyphicon glyphicon-trash"></i>'+
                    "删除</a>"+
                    '</td>'
                    ,
                    '<div style="display:none">' + MakeExtraInfo(item.extrainfo, ext_info) + '</div>'
                ]);
            }
            console.log(tb_data);
            if (tb_data.length > 0) {
                oTable.fnAddData(tb_data);
            }
            $(".dataTables_empty").text(plain);
        } else {
            alert(data.status);
        }
    });
}



function MakeExtraInfo(list, attr) {
    var html = '';
    for(var i=0; i<list.length;i++) {
        var ul = '<ul style="float:left">';
        for(var j=0; j<attr.length;j++)
        {
            ul += "<li>" + attr[j]['cn'] + list[i][attr[j]['en']]+ "</li>";
        }
        ul += '</ul>';
        html += ul;
    }
    return html;
}

function doDelMajor(majorName, majorId, classNum) {
    if(!confirm("您确定要删除 "+ majorName +"这个专业吗?")) {
        return ;
    }
    if(classNum != 0 && !confirm("警告：该专业尚有班级,本次操作会将班级及学生一起删除!您确定要这样操作吗?")) {
        return ;
    }
    manage_rpc.delMajor(majorId, true, function(data) {
        if (data.code == 0) {
            refreshTable();
        } else {
            alert('删除失败:' + data.status);
        }
    });
}

function doModify(major_id, major_name, major_schsys) {
    $('#major_details_submit').attr('submit-type', 'modify');
    $("#major_id").val(major_id);
    $("#major_name").val(major_name);
    $("#major_schsys").val(major_schsys);
}

function doAdd() {
    $('#major_details_submit').attr('submit-type', 'add');
}