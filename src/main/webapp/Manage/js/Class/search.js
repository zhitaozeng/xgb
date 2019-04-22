/**
 * Created by TinyJian on 2017/3/6.
 */

$(function() {


    //下拉框 年份
    var start_year = new Date().getFullYear(),
        select_data = [
            {id:0, text:'不限'}
        ];
    for(var i = 1; i >= -14; i--) {
        var y = start_year + i;
        select_data.push({id : y, text: y + '年'});
    }
    //初始化select2 起始年份
    $("#year_start").select2({
        data: select_data,
        placeholder: "起始年",
    }).on('select2:select', function(evt) {
        //选中项变动
    });

    //初始化select2 结束年份
    $("#year_end").select2({
        data: select_data,
        placeholder: "结束年",
    }).on('select2:select', function(evt) {
        //选中项变动
    });


    //查询班级
    $("#submit_search").click(function () {
        //专业号
        var majorId =$("#major_id").find("option:selected").val();
        //班级号
        var classId = $("#class_num").find("option:selected").val();
        var yearStart= $("#year_start").find("option:selected").val();
        var yearEnd = $("#year_end").find("option:selected").val();

            $.ajax({
                url: "/class/findData?majorId="+majorId+"&classId="+classId+"&yearStart="+yearStart+"&yearEnd="+yearEnd,
                context: document.body,
                success: function(data){
                    $("#pageHelper").html("");
                    $("#tabelDataTbody").empty();
                    for (i=0;i<data.length;i++){
                        $("#tabelDataTbody").append(
                        "<tr><td>"+(i+1)+"</td><td>"+data[i].time+"</td><td>"+data[i].realMajor.schoolsystem+"</td><td>"+data[i].realMajor.name+"</td><td>"+data[i].name+"</td><td>"+data[i].qqgroup+"</td><td>"+data[i].studentnumber+"</td><td><a href='/class/update?id="+data[i].id+"' class='btn btn-xs default'><i class='fa fa-pencil'></i> 修改</a><a href=\"javascript:if(confirm(\'确定删除吗？\')){location=\'/class/delete?id="+data[i].id+"'}\"'  class='btn btn-xs btn-danger del-class'><i class='fa fa-trash-o'></i> 删除</a></td></tr>"
                        );
                    }
                }
            });
    });

    //动态加载班级号
    $("#major_id").click(function () {
        var major = $(this).find("option:selected").val();
        $.ajax({
            url: "/class/findClassByMajor?major="+major,
            context: document.body,
            success: function(data){
                $("#class_num").empty();
                $("#class_num").append("<option value='0'>全部班级</option>");  //添加一项option
                for (i=0;i<data.length;i++) {
                    var id = data[i].id;
                    var text = data[i].name;
                    $("#class_num").append("<option value='"+id+"'>"+text+"</option>");
                }
            }
        });
    });


});
