jQuery(document).ready(function() {




    $("#search_class").click(function () {
        var mid = 0;
        if($("#bed_major").val() != null){
            mid =$("#bed_major").val();
        }

        var cid = 0;
        if($("#bed_class").val() != null){
            cid = $("#bed_class").val();
        }

        $.ajax({
            url: "/student/findByMidCid?&mid="+mid+"&cid="+cid,
            context: document.body,
            success: function(data){
                displayStudent(data);
            }
        });

    });




    // /**
    //  * rpc 加载班级的学生
    //  * @param class_id
    //  */
    // function loadStudentByClass(class_id) {
    //     //清空当前
    //     if (class_id <= 0) {
    //         return ;
    //     }
    //     var params = {
    //         class_id : class_id
    //     };
    //     //生成列表
    //     manage_rpc.getStudentListWithDorm(params, function (data) {
    //         if (data.code == 0){
    //             //显示列表
    //             displayStudent(data.data);
    //         } else {
    //             alert(data.status);
    //         }
    //     });
    // }
//
//     /**
//      * rpc 按照条件加载学生
//      * @param params
//      */
//     function loadStudentBySearch(params) {
//         if (!params) {
//             return ;
//         }
//         manage_rpc.getStudentListWithDorm(params, function(data) {
//             if (data.code == 0) {
//                 displayStudent(data.data);
//             } else {
//                 alert(data.status);
//             }
//         });
//     }
//
//
    /**
     * 展示学生数据 到 学生表格中
     * @param stu_list
     */
    function displayStudent(stu_list) {
        var had_check=0;
        var html="";
        for(var i=0;i<stu_list.length;i++){
            var item = stu_list[i];
            html+="<div class='single_check'>";
            if(item["dorm"]!==null){
                had_check=had_check+1;
                html+=" <label class='btn uncheck_btn ";
                if(item["sex"]==="女"){
                    html+="girl";
                }
                html+="' data-usernum='"+
                    item["num"]+"' data-depart='"+item["building"]["name"]+
                    "'' data-roomnum='"+item["dorm"]["num"]+"' data-id='"
                    + item["id"]+"' data-dormid='"+item["dorm"]["id"]+"' data-roomname='"+item["dorm"]["name"]+"' data-sex='"+
                    item["sex"]+"'>"+item["name"]+"</label>";
            }
            else{
                html+= "<label class='btn check_btn ";
                if(item["sex"]==="女"){
                    html+="girl";
                }
                html+="' data-sex='"+item["sex"]+"' data-id='"+item["id"]+
                    "' data-usernum='"+item["num"]+
                    "'>"+item["name"]+"</label>";
            }
            html+="</div>";
        }
        $(".pl_box").find(".single_check").remove();
        $(html).insertBefore($(".choose"));
        $(".had_check").text(had_check);
        /*初始化未分配人数的个数*/
        $(".all").text($(".all").parent().parent().parent().children(".single_check").length);
    }


    function displayDorm(){
        var bid = $("#bed_depart").val();

        if(bid == 0){
            alert("请选择楼栋");
            return ;
        }

        $.ajax({
            url: "/dorm/findByBid?&bid="+bid,
            context: document.body,
            success: function(data){
                $("#dorm").empty();
                $("#dorm").append(
                    "<tr><th>选择</th><th>房间号</th><th>使用情况</th><th>人员</th><th>操作</th></tr>"
                );

                var html="";
                for (i = 0;i<data.length;i++){
                    var obj = data[i];
                    if(  obj.students.length >0){
                        html="";
                        for(j=0;j<obj.students.length ;j++){
                            html =html+" <div class='single_person'><label data-usernum='"+obj.students[j].num+"'>"+obj.students[j].name+"</label></div>";
                        }
                    }else {
                        html="";
                    }

                    $("#dorm").append(
                        "<tr><td><input type='checkbox' class='checker' value='"+data[i].id+"'></td><td>"+data[i].name+"</td><td>"+data[i].num+"/4</td><td>"+html+"</td><td><a  class='btn btn-xs red clear'><i class='fa fa-trash-o'></i>清空</a></td></tr>"
                    );
                }
            }
        });
    }


    //根据选择的楼栋加载信息
    $("#search_building").click(function () {
        displayDorm();
    });




//
//     function refreshDormTable(params) {
//         var isInit;
//         if (isInit = ((grid == null))) {
//             grid = new Datatable();
//         }
//         $.each(params, function(k ,v) {
//             grid.setAjaxParam(k, v);
//         });
//         if (isInit) {
//             grid.init({
//                 src: $("#dorm_list"),
//                 onSuccess: function (data) {
//                 },
//                 onError: function (data) {
//                 },
//                 loadingMessage: '加载中...',
//                 dataTable: {
//                     "columns": [
//                         { data: 'all_check',"orderable":false,"title":"全选"},
//                         { data: 'dorm_num' ,"orderable":false,"title":"房间号"},
//                         { data: 'area',"orderable":false ,"title":"面积"},
//                         { data: 'use_info' ,"orderable":false,"title":"使用情况"},
//                         { data: 'has_person',"orderable":false ,"title":"人员"},
//                         { data: 'opr' ,"orderable":false,"title":"操作"},
//                     ],
//                     "lengthMenu": [
//                         [10, 20, 50, 100, 150, -1],
//                         [10, 20, 50, 100, 150, "All"] // change per page values here
//                     ],
//                     "pageLength": 10, // default record count per page
//                     "ajax": {
//                         url : manage_rpc.buildMVC('DormAjax', 'getBedInfo'),
//                     },
//                     "order": [
//                         [0,"asc"]
//                     ] // set first column as a default sort by asc
//                 },
//                 dataHandle: function (list) {
//                     $.each(list, function(i, e){
//                         e.all_check=" <input type='checkbox' dorm-id='" + e.id +"'>";
//                         e.use_info="<span>"+e.used_num+"</span><span>/</span><span>"+e.bed_num+"</span>";
//                         e.has_person="";
//                         for(var i=0;i<e.students.length;i++){
//                             e.has_person+=" <div class='single_person'><label data-usernum='"+e.students[i].num+
//                                 "' data-sex='"+e.students[i].sex+"' data-id='"+e.students[i].id+"' data-major='"+e.students[i].major+
//                                 "' data-class='"+e.students[i].class+"'>"+e.students[i].student+"</label></div>";
//                         }
//                         e.opr ="<a  class='btn btn-xs red clear'><i class='fa fa-trash-o'></i>清空</a>";
//                     });
//                     return list;
//                 }
//
//             });
//         } else {
//             grid.getDataTable().ajax.reload();
//         }
//     }
// //初始化表格
//
//     /*楼栋选择下拉框的值改变绑定的事件*/
//     $("body").on("change","#bed_depart",function(){
//         var params = {
//             'building' : $("#bed_depart").val()
//         };
//         refreshDormTable(params);
//     });
//
    /*设置默认分配的房间*/
    $(".room_table").children("tbody").children("tr").eq(0).children("td").eq(0).children("div").children("span").addClass("checked");
    /*分配学生*/
    $("body").on("click",".check_btn",function() {
        var check_text = $(this).text();
        if ( $(this).hasClass("green")) {
            $(this).removeClass("green");
            $(".choosed_box label").each(function(){
                if($(this).text()===check_text)
                {
                    $(this).remove();
                }
                else{
                    /*doSomething*/
                }

            });
        }
        else{
            $(this).addClass("green");
            appendToSelectedList($(this).attr("data-id"), $(this).attr("data-usernum"), check_text);
        }
    });
//     /*点击搜索按钮*/
//     $('#search_class').on("click",function() {
//         var class_id=$('#bed_class').val();
//         loadStudentByClass(class_id);
//     });
//
//     /*按照学号,姓名搜索*/
//     $('#search_stu').click(function(){
//         var params = {};
//         var stu_num = $('#search_stu_num').val();
//         var stu_name = $('#search_stu_name').val();
//         if ($.trim(stu_num).length > 0) {
//             params['stu_num'] = stu_num;
//         }
//         if ($.trim(stu_name).length > 0) {
//             params['stu_name'] = stu_name;
//         }
//         loadStudentBySearch(params);
//     });
//
//
    /*灰色已选择学生mouseenter浮动效果*/
    $("body").on("mouseenter",".uncheck_btn",function(){
        var userid=$(this).attr("data-usernum");
        var depart=$(this).attr("data-depart");
        var roomname=$(this).attr("data-roomname");
        var html="<div class='user-details'>"+
            "<p><span>"+userid+"</span></p>"+
            "<p><span>"+depart+"</span>"+
            "--<span>"+roomname+"</span></p>"+
            "</div>";
        $(html).insertAfter($(this));
    });
    /*灰色已选择学生mouseenter浮动效果*/
    $("body").on("mouseleave",".uncheck_btn",function(){
        $(this).next(".user-details").remove();
    });
    /*黑色未选择学生mouseenter浮动效果*/
    $("body").on("mouseenter",".check_btn",function(){
        var usernum=$(this).attr("data-usernum");
        var html="<div class='user-details2'>"+
            "<p><span>"+usernum+"</span></p>"+
            "</div>";
        $(html).insertAfter($(this));
    });
    /*黑色未选择学生mouseleave浮动效果*/
    $("body").on("mouseleave",".check_btn",function(){
        $(this).next(".user-details2").remove();
    });
    /*选中男生*/
    $("body").on("click",".choose_boy",function(){
        var boys=$(this).parent().parent().children(".single_check");
        boys.each(function(){
            if($(this).children(".check_btn").attr("data-sex")==="男"){
                var check=$(this).children(".check_btn");
                if (check.hasClass("green")) {

                    /*doSomething*/
                }
                else{
                    var check_text=check.text();
                    check.addClass("green");
                    var $btn = $(this).children(".check_btn");
                    appendToSelectedList($btn.attr("data-id"), $btn.attr("data-usernum"), check_text);
                }
            }
            else{

                /*doSomething*/
            }

        });
    });
    /*选中女生*/
    $("body").on("click",".choose_girl",function(){
        var girls= $(this).parent().parent().children(".single_check");
        girls.each(function(){
            if($(this).children(".check_btn").attr("data-sex")==="女"){
                var check=$(this).children(".check_btn");
                if (check.hasClass("green")) {

                    /*doSomething*/
                }
                else {

                    var check_text=check.text();
                    check.addClass("green");
                    var $btn = $(this).children(".check_btn");
                    appendToSelectedList($btn.attr("data-id"), $btn.attr("data-usernum"), check_text);
                }
            }
            else{

                /*doSomething*/
            }

        });
    });
    /*fa fa-closed按钮点击后取消*/
    $("body").on("click",".fa-close",function(){

        var text=$(this).parent().text();
        $(".pl_box").children(".single_check").each(function(){
            if($(this).children(".green").text()===text){
                $(this).children(".green").removeClass("green");
                return false;
            }
            else{
                /*doSomething*/
            }
        });
        $(this).parent().remove();
    });

    /*重新选择点击事件绑定*/
    $("body").on("click",".re_check",function(){
        $(".choosed_box").children("label").each(function(){
            var text=$(this).text();
            $(".pl_box").children(".single_check").each(function(){
                if($(this).children(".green").text()===text){
                    $(this).children(".green").removeClass("green");
                    return false;
                }
                else {
                    /*doSomething*/
                }
            });
            $(this).remove();
        });
    });

    //分配到选中房间
    $("#dorm_add").click(function () {
        var count = $(".choosed_box").children("label").length;
        var check_length = $("#dorm").children("tbody").children("tr").length;
        var bool = false;
        for(i = 1 ;i<check_length;i++ ) {
            var td = $("#dorm").children("tbody").children("tr").eq(i).children("td");
            if (td.eq(0).find("input[type='checkbox']").eq(0).attr("checked") === "checked") {
                bool=true;
                var room_count = td.eq(3).children("label").length;
                var room_id = td.eq(0).find("input[type='checkbox']").eq(0).val();
                if ((count + room_count) > 4) {
                    alert("超过房间容纳人数，请重新选择");
                } else {
                    var studnets = new Array();
                    for (j = 0; j < count; j++) {
                        var id = $(".choosed_box").children("label").eq(j).attr("data-id");
                        studnets.push(id);
                    }
                    $.ajax({
                        url: "/dorm/addDormByDidStus?id=" + room_id+"&stus="+studnets,
                        context: document.body,
                        success: function (data) {
                            displayDorm();
                            $("#recheck").click();
                            $("#search_class").click();
                        }
                    });
                }
            }
        }
        if(!bool){
            alert("请选择房间");
        }
    });

//     /*分配到选中房间*/
//     $("body").on("click",".checking",function(){
//
//         var count=$(".choosed_box").children("label").length;
//         $(".room_table").children("tbody").children("tr").each(function(){
//             var td=$(this).children("td");
//             if(td.eq(0).children(".checker").children("span").attr("class")==="checked"){
//                 var now_count_position=$(this).children("td").eq(3).children("span");
//                 var now_count=parseInt($(this).children("td").eq(3).children("span").eq(0).text());
//                 var all_count=parseInt($(this).children("td").eq(3).children("span").eq(2).text());
//                 var room_id=$(this).children("td").eq(0).find("input[type='checkbox']").eq(0).attr('dorm-id');
//                 var room_num=$(this).children("td").eq(1).text();
//                 var content=$(this).children("td").eq(4);
//                 /*判断当前房间是否满员或者分配人数过多导致满员*/
//                 if((now_count+count)>all_count)
//                 {
//                     alert("超过房间容纳人数，请重新选择");
//                 }
//                 else{
//                     var students_id=new Array();
//                     /*发送数据库请求,请求成功后在页面执行表格数据更新和样式变化*/
//                     $(".choosed_box").children("label").each(function(){
//                         var userid=$(this).attr("data-id")
//                         students_id.push(userid);
//                     });
//                     manage_rpc.allocateBed(room_id,students_id,function(data){
//                         if(data.code===0)
//                         {
//                             /*已分配人数的增加*/
//                             var hadCheck=$(".had_check").text();
//                             var had_Check=parseInt(hadCheck);
//                             had_Check+=count;
//                             $(".had_check").text(had_Check);
//                             /*分配后已分配学生样式在选择框中的改变*/
//                             $(".choosed_box").children("label").each(function(){
//                                 var text=$(this).text();
//                                 $(".pl_box").children(".single_check").each(function(){
//                                     if($(this).children(".green").text()===text){
//                                         var check_label=$(this).children(".green");
//                                         check_label.addClass("uncheck_btn").removeClass("check_btn").removeClass("green");
//                                         /*此时还应该将选中的房间号和楼栋获取到加在data-属性下面*/
//                                         check_label.attr("data-roomnum",room_num);
//                                         check_label.attr("data-depart",$("#bed_depart").find("option:selected").text());
//                                         /*当前寝室人数的增加*/
//                                         now_count=now_count+1;
//                                         now_count_position.eq(0).text(now_count);
//                                         /*表格中人员的增加*/
//                                         var html="<div class='single_person'>"+
//                                             "<label data-id='"+check_label.attr("data-id")+
//                                             "' data-sex='"+check_label.attr("data-sex")+
//                                             "' data-usernum='"+check_label.attr("data-usernum")+
//                                             "' data-major='"+$('#bed_major').find("option:selected").text()+
//                                             "' data-class='"+$('#bed_class').find("option:selected").text()+
//                                             "'>"+text+"</label></div>";
//                                         $(html).appendTo(content);
//                                         return false;
//                                     }
//                                     else{
//                                         /*doSomething*/
//                                     }
//                                 });
//                                 $(this).remove();
//                             });
//                         }
//                         else{
//                             alert(data.status);
//                         }
//                     });
//                 }
//                 return false;
//             }
//             else if($(this).index()===$(this).parent().children("tr").length-1)
//             {
//                 alert("请先选中房间");
//                 return false;
//             }
//         });
//     });
    /*fa-trash-o清空图标操作*/
    $("body").on("click",".clear",function(){
        /*先做数据库操作，本班学生再回显到选择框里，其他班学生由数据库处理*/
        var dormid=$(this).parent().parent().children("td").eq(0).find("input").eq(0).val();
        $.ajax({
            url: "/dorm/clearDorm?id="+dormid,
            context: document.body,
            success: function(data){
                alert("清空成功！");
                displayDorm();
                $("#recheck").click();
                $("#search_class").click();
            }
        });
    });
//     /*sorting_1点击事件:只允许一个房间被选中*/
//     $("body").on("click",".sorting_1",function(){
//         $("#dorm").children("tbody").children("tr").each(function(){
//             $(this).children("td").eq(0).children("input").eq(0).removeClass("checked");
//         });
//         $(this).children("input").eq(0).addClass("checked");
//     });
//     /*显示满员房间*/
//     $("body").on("change",".show_full",function(){
//         /*如果选中*/
//         var flag=$(this).is(':checked');
//         if(!flag){
//             $(".room_table").children("tbody").children("tr").each(function(){
//                 var already_nums=$(this).children("td").eq(3).children("span").eq(0).text();
//                 var all_nums=$(this).children("td").eq(3).children("span").eq(2).text();
//                 if(parseInt(already_nums)>=parseInt(all_nums)){
//                     $(this).addClass("shadow");
//                 }
//             });
//         }
//         /*如果未选中*/
//         else{
//             $(".room_table").children("tbody").children("tr").each(function(){
//                 if($(this).hasClass("shadow")){
//                     $(this).removeClass("shadow");
//                 }
//             });
//
//         }
//     });
//     /*加粗本班学生*/
//     $("body").on("change",".add_bold",function(){
//         /*如果选中*/
//         var flag=$(this).is(':checked');
//         if(flag){
//             $(".room_table").children("tbody").children("tr").each(function(){
//
//                 $(this).children("td").eq(4).children(".single_person").each(function(){
//                     if(($(this).children("label").attr("data-class")===$('#bed_class').find("option:selected").text())&&
//                         ($(this).children("label").attr("data-major")===$('#bed_major').find("option:selected").text())){
//                         $(this).children("label").addClass("bold");
//                     }
//                 });
//
//             });
//         }
//         /*如果未选中*/
//         else{
//             $(".room_table").children("tbody").children("tr").each(function(){
//
//                 $(this).children("td").eq(4).children(".single_person").each(function(){
//                     if($(this).children("label").hasClass("bold")){
//                         $(this).children("label").removeClass("bold");
//                     }
//                 });
//
//             });
//         }
//     });
    /*已经分配房间的学生的mouseenter鼠标浮动事件*/
    $("body").on("mouseenter",".single_person label",function(){
        var userid=$(this).attr("data-usernum");
        var html="<div class='user-details3'>"+
            "<p><span>"+userid+"</span></p>"+
            "</div>";
        $(html).insertAfter($(this));
        // var $label = $(this);
        // $label.html("<i class='fa fa-close'></i>" + $label.html());
    });
    /*已经分配房间的学生的mouseleave鼠标浮动事件*/
    $("body").on("mouseleave",".single_person label",function(){
        $(this).next(".user-details3").remove();
        // $(this).children('i').remove();
    });
    /*已经分配房间的学生的click鼠标浮动事件重新选择*/
    $("body").on("click",".single_person label",function(){
        var name=$(this).text();
        /*先进行数据库操作，如果是本班则需要重新退回到界面上*/
        /*去掉重新选择的人的名字*/
        var major=$(this).attr("data-major");
        var stu_class=$(this).attr("data-class");
        var userid=$(this).attr('data-id');
        var dormid=$(this).parent().parent().parent().children("td").eq(0).find("span").attr("dorm-id");
        //[.single_person > label]
        var the = this;
        manage_rpc.dropDorm(dormid,userid,function(data) {
            if(data.code===0)
            {
                if((stu_class===$('#bed_class').find("option:selected").text()) &&
                    (major===$('#bed_major').find("option:selected").text())){
                    reselectStudent(name);
                }
                var span_used = $(the).parent().parent().prev().children("span").eq(0);
                textAddNum(span_used, -1);
                $(the).parent().remove();
            }
            else{
                alert(data.status);
            }
        });
    });

    /**
     * 重新选中学生
     * @param name
     */
    function reselectStudent(name){
        $(".pl_box").children(".single_check").each(function(){
            var $label = $(this).children("label");
            if($label.text()===name){
                $label.addClass("check_btn green").removeClass("uncheck_btn").removeAttr("data-depart").removeAttr("data-roomnum");
                //修改已分配的学生数量
                textAddNum($('.had_check'), -1);
                appendToSelectedList($label.attr('data-id'), $label.attr('data-usernum'), name);
                return false;
            }
        });
    }


    /**
     * 将学添加到选中列表中
     * @param id 学生id
     * @param stu_num 学生学号
     * @param name 学生姓名
     */
    function appendToSelectedList(id, stu_num, name) {
        var html="<label class='btn checked_btn' data-usernum='"+stu_num+"' data-id='"+id+"'>" +
            "<i class='fa fa-close'></i>"+
            name+"</label>";
        $(html).appendTo(".choosed_box");
    }

    /**
     * 把元素的内容当成数字来修改
     * @param dom 元素
     * @param num dom.text(parseInt(dom.text()) + num)
     */
    function textAddNum(dom, num) {
        if (dom) {
            dom.text(parseInt(dom.text()) + num);
        }
    }

});


$(function () {
    //动态加载班级号
    $("#bed_major").click(function () {
        var major = $(this).find("option:selected").val();
        $.ajax({
            url: "/class/findClassByMajor?major="+major,
            context: document.body,
            success: function(data){
                $("#bed_class").empty();
                $("#bed_class").append("<option value='0'>请选择班级</option>");  //添加一项option
                for (i=0;i<data.length;i++) {
                    var id = data[i].id;
                    var text = data[i].name;
                    $("#bed_class").append("<option value='"+id+"'>"+text+"</option>");
                }
            }
        });
    });
});

$(document).ready(function () {
    //动态加载专业
    $.ajax({
        url: "/major/findMajorApi",
        context: document.body,
        success: function(data){
            $("#bed_major").append("<option value='0'>请选择专业</option>");  //添加一项option
            for (i=0;i<data.length;i++) {
                var id = data[i].id;
                var text = data[i].name;
                $("#bed_major").append("<option value='"+id+"'>"+text+"</option>");
            }
        }
    });

});


$(document).ready(function () {
    //动态加载楼栋下拉列表
    $.ajax({
        url: "/dorm/findBuildingApi",
        context: document.body,
        success: function(data){
            $("#bed_depart").append("<option value='0'>请选择楼栋</option>");  //添加一项option
            for (i=0;i<data.length;i++) {
                var id = data[i].id;
                var text = data[i].name;
                $("#bed_depart").append("<option value='"+id+"'>"+text+"</option>");
            }
        }
    });

});



