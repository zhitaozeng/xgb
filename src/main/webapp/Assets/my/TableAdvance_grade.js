var dt = TableAdvanced.init("tb_grade");

$('#termid').on('select2:select', function (evt) {
// Do something
    loadCJ(nowCid,$('#termid').val());
});
$("#a_reload").click(function(){
        loadCJ(nowCid,$('#termid').val())
    });
function loadCJ(cid, termid)
{
    $.getJSON("/BLL/score/getAllScore.php",{
        id:cid,
        term:termid
    },function(resJSON){
        console.log(resJSON);
        dt.destroy();
        var $tb = $("#tb_grade");
        var courseList = resJSON.course;
        var cjList = resJSON.stuscore;
        
        $tb.html("");
        var thead = $("<thead>");
        var tr = $("<tr>");
        thead.append(tr);
        
        //表头
        tr.append($("<th>学号</th>"));
        tr.append($("<th width=50>学生姓名</th>"));
        for(var i=0;i<courseList.length;i++)
        {
            tr.append($("<th width=100>"+courseList[i]["coursename"]+"</th>"));
        }
        $tb.append(thead);
        
        //表体
        for(var i=0;i<cjList.length;i++)
        {
            var tr = $("<tr>");
            // tr.append("<td>"+cjList[i]["name"]+"</td>");
            $.each(cjList[i], function(k,v){
                if(k!='id')
                {
                   //名字是一个超链接, 连接到详情
                    var html = k=='name'? "<a href='/xsxx2.php?id="+cjList[i]['id']+"&gt="+termid+"'>"+ v +"</a>":v;
                    tr.append("<td>"+html+"</td>");
                }
            });
            $tb.append(tr);
        }

        //列过滤器
        var $div = $("#tb_grade_column_toggler");
        $div.html("");
        $div.append($("<label><input type='checkbox' checked data-column='"+(0)+"'>序号</label>"));
        $div.append($("<label><input type='checkbox' checked data-column='"+(1)+"'>学生姓名</label>"));
        
        for(var i=0;i<courseList.length;i++)
        {
            $div.append($("<label><input type='checkbox' checked data-column='"+(i+2)+"'>"+courseList[i]["coursename"]+"</label>"));
        }



        // dt.destroy();
        dt = TableAdvanced.init("tb_grade",{
            "filter": true,
        });
        Metronic.init();
        return cjList;
    });
    
}
function loadCJ2(cid, termid)
{
    $.getJSON("/BLL/score/getAllScore.php",{
        id:cid,
        term:termid
    },function(resJSON){
        console.log(resJSON);
        
        var $tb = $("#tb_grade");
        var courseList = resJSON.course;
        var cjList = resJSON.stuscore;
        dt.rows().data([]);
        dt.columns().data([]);
        var newCols = [
            {data:"num"},
            {data:"name"},
        ]
        
        for(var i=0;i<courseList.length;i++)
        {
            newCols.push({data:"socre_"+(i+1)});
        }

        dt.columns(newCols)
        dt.rows(cjList);
        return cjList;
    });
    
}


