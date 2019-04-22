var dt = TableAdvanced.init("tb_grade");

$('#termid').on('select2:select', function (evt) {
// Do something
    loadGrade(stuid,$('#termid').val());
    
});
$("#a_reload").click(function(){
    loadGrade(stuid,$('#termid').val())
});
function loadGrade(stuid, termid)
{
    $.getJSON("/BLL/score/getStuScore.php",{
        stu_id:stuid,
        term:termid
    },function(resJSON){
        console.log(resJSON);
        dt.destroy();
        var $tb = $("#tb_grade");
        var cjList = resJSON.stuscore;
        
        $tb.html("");
        
        var thead = $("<thead>");
        var tr = $("<tr>");
        thead.append(tr);
        
        //表头
        tr.append($("<th width=50>序号</th>"));
        tr.append($("<th >课程名</th>"));
        tr.append($("<th >成绩</th>"));
        $tb.append(thead);

        //表体
        var seq = 1;
        $.each(cjList,function(k, v){
            var tr = $("<tr>");
            tr.append("<td>"+seq+"</td>");
            tr.append("<td>"+v['coursename']+"</td>");
            tr.append("<td>"+v['score']+"</td>");
            seq++;
            $tb.append(tr);
        })

        //列过滤器
        var $div = $("#tb_grade_column_toggler");
        $div.html("");
        $div.append($("<label><input type='checkbox' checked data-column='"+(0)+"'>序号</label>"));
        $div.append($("<label><input type='checkbox' checked data-column='"+(1)+"'>课程名</label>"));
        $div.append($("<label><input type='checkbox' checked data-column='"+(1)+"'>成绩</label>"));
        

        // dt.destroy();
        dt = TableAdvanced.init("tb_grade",{
            "filter": true,
        });
        Metronic.init();
        return cjList;
    });
    
}



