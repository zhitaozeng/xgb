$(function() {



    //查询班级
    $("#submit_search").click(function () {
        //专业号
        var majorId = 0 ;
        if($("#major_id").find("option:selected").val() != null){
            majorId = $("#major_id").find("option:selected").val();
        }

        //班级号
        var classId = 0;
        if($("#class_num").find("option:selected").val() != null){
            classId = $("#class_num").find("option:selected").val();
        }

        var name = "";
        if($("#stu_name").val() != null){
            name = $("#stu_name").val();
        }

        var num = "";
        if($("#stu_num").val() != null){
            num = $("#stu_num").val();
        }

        $.ajax({
            url: "/student/findCon?majorId="+majorId+"&classId="+classId+"&name="+name+"&num="+num,
            context: document.body,
            success: function(data){
                $("#tabelDataTbody").empty();
                $("#pageHelper").empty();
                for (i=0;i<data.list.length;i++){
                    $("#tabelDataTbody").append(
                        "<tr><td>"+(i+1)+"</td><td>"+data.list[i].num+"</td><td>"+data.list[i].name+"</td><td>"+data.list[i].sex+"</td><td>"+data.list[i].nation+"</td><td>"+data.list[i].idcard+"</td><td>"+data.list[i].politicalstatus+"</td><td>"+data.list[i].qq+"</td><td>"+data.list[i].address+"</td><td>"+data.list[i].selfphone+"</td><td>"+data.list[i].relativephone+"</td><td><a href='/student/update?id="+data.list[i].id+"' class='btn btn-xs default'><i class='fa fa-pencil'></i> 修改</a><a href=\"javascript:if(confirm(\'确定删除吗？\')){location=\'/student/delete?id="+data.list[i].id+"'}\"'  class='btn btn-xs btn-danger del-class'><i class='fa fa-trash-o'></i> 删除</a></td></tr>"
                    );
                }

                if(data.page == 1){
                    $("#pageHelper").append(
                    "<li class='disabled'><span><span aria-hidden='true'>&laquo;</span></span></li>"
                    );
                }else {
                    $("#pageHelper").append(
                    "<li><a onclick='page("+(data.page - 1)+")' aria-label='Previous'><span aria-hidden='true'>&laquo;</span></a></li>"
                    );
                }

                for (i = 1;i <=data.totalPage;i++){
                    if(i == data.page){
                        $("#pageHelper").append("<li class='active'><a onclick='page("+i+")' >"+i+"</a></li>");
                    }else {
                        $("#pageHelper").append("<li><a onclick='page("+i+")' >"+i+"</a></li>");
                    }
                }

                if(data.page == data.totalPage){
                    $("#pageHelper").append(
                    "<li class='disabled'><span><span aria-hidden='true'>&raquo;</span></span></li>"
                    );
                }else {
                    $("#pageHelper").append(
                    "<li><a onclick='page("+(data.page + 1)+")' aria-label='Next'><span aria-hidden='true'>&raquo;</span></a></li>"
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



});


function page(p) {
    //专业号
    var majorId = 0 ;
    if($("#major_id").find("option:selected").val() != null){
        majorId = $("#major_id").find("option:selected").val();
    }

    //班级号
    var classId = 0;
    if($("#class_num").find("option:selected").val() != null){
        classId = $("#class_num").find("option:selected").val();
    }

    var name = "";
    if($("#stu_name").val() != null){
        name = $("#stu_name").val();
    }

    var num = "";
    if($("#stu_num").val() != null){
        num = $("#stu_num").val();
    }

    $.ajax({
        url: "/student/findCon?page="+p+"&majorId="+majorId+"&classId="+classId+"&name="+name+"&num="+num,
        context: document.body,
        success: function(data){
            $("#tabelDataTbody").empty();
            $("#pageHelper").empty();
            for (i=0;i<data.list.length;i++){
                $("#tabelDataTbody").append(
                    "<tr><td>"+(i+1)+"</td><td>"+data.list[i].num+"</td><td>"+data.list[i].name+"</td><td>"+data.list[i].sex+"</td><td>"+data.list[i].nation+"</td><td>"+data.list[i].idcard+"</td><td>"+data.list[i].politicalstatus+"</td><td>"+data.list[i].qq+"</td><td>"+data.list[i].address+"</td><td>"+data.list[i].selfphone+"</td><td>"+data.list[i].relativephone+"</td><td><a href='/student/update?id="+data.list[i].id+"' class='btn btn-xs default'><i class='fa fa-pencil'></i> 修改</a><a href=\"javascript:if(confirm(\'确定删除吗？\')){location=\'/student/delete?id="+data.list[i].id+"'}\"'  class='btn btn-xs btn-danger del-class'><i class='fa fa-trash-o'></i> 删除</a></td></tr>"
                );
            }

            if(data.page == 1){
                $("#pageHelper").append(
                    "<li class='disabled'><span><span aria-hidden='true'>&laquo;</span></span></li>"
                );
            }else {
                $("#pageHelper").append(
                    "<li><a onclick='page("+(data.page - 1)+")' aria-label='Previous'><span aria-hidden='true'>&laquo;</span></a></li>"
                );
            }

            for (i = 1;i <=data.totalPage;i++){
                if(i == data.page){
                    $("#pageHelper").append("<li class='active'><a onclick='page("+i+")' >"+i+"</a></li>");
                }else {
                    $("#pageHelper").append("<li><a onclick='page("+i+")' >"+i+"</a></li>");
                }
            }

            if(data.page == data.totalPage){
                $("#pageHelper").append(
                    "<li class='disabled'><span><span aria-hidden='true'>&raquo;</span></span></li>"
                );
            }else {
                $("#pageHelper").append(
                    "<li><a onclick='page("+(data.page + 1)+")' aria-label='Next'><span aria-hidden='true'>&raquo;</span></a></li>"
                );
            }
        }
    });
}


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