$(function() {



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
                $("#class_num").append("<option value='0'>请选择班级</option>");  //添加一项option
                for (i=0;i<data.length;i++) {
                    var id = data[i].id;
                    var text = data[i].name;
                    $("#class_num").append("<option value='"+id+"'>"+text+"</option>");
                }
            }
        });
    });


    $("#submit").click(function () {
       if($("#major_id").val() == 0 || $("#class_num").val() == 0){
           alert("请选择专业班级后再提交！");
           return false;
       }else{
           return true;
       }
    });


});


$(document).ready(function () {
    //动态加载专业
    $.ajax({
        url: "/major/findMajorApi",
        context: document.body,
        success: function(data){
            $("#major_id").append("<option value='0'>请选择专业</option>");  //添加一项option
            for (i=0;i<data.length;i++) {
                var id = data[i].id;
                var text = data[i].name;
                $("#major_id").append("<option value='"+id+"'>"+text+"</option>");
            }
        }
    });

});