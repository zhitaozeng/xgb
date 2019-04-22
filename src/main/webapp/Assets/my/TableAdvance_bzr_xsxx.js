/// <reference path="JsonMsgHandle.js"/>

var config = [];
function MakeXsxxTable(tb, url, param, func)
{
    config.tb = tb
    config.url = url
    config.param = param
    $.getJSON(url,param,function(jsonObj){
        console.log("do json function")
        JsonMsgHandle(jsonObj, function(data){
            // console.log(data)
            var tbody = tb;
            tb.innerHTML="";
            var list = data;

            for(var i=0; i<list.length; i++)
            {
                makeXsxxTr(tbody, i+1,list[i]);
            }

            if(typeof(func) != undefined)
            {
                func();
            }
        })
    })
}

function MakeXsxxTableByDt(dataTables, url, param, func)
{
    config.tb = dt
    config.url = url
    config.param = param
    $.getJSON(url,param,function(jsonObj){
        console.log("do json function")
        JsonMsgHandle(jsonObj, function(data){
            // console.log(data)
            var tbody = tb;
            tb.innerHTML="";
            var list = data;

            for(var i=0; i<list.length; i++)
            {
                makeXsxxTr(tbody, i+1,list[i]);
            }

            if(typeof(func) != undefined)
            {
                func();
            }
        })
    })
}

function makeXsxxTr(tb, seq, trObj)
{
    if(typeof(trObj)!=undefined &&  trObj != null)
    {
        var $tb = $(tb)
        var $tr = $("<tr></tr>")
        $tr.append($('<td>'+ seq +'</td>'))
        $tr.append($('<td>'+ trObj["num"] +'</td>'))
        
        $tr.append($('<td>'+ trObj["sname"] +'</td>'))
        $tr.append($('<td>'+ trObj["sex"] +'</td>'))
        $tr.append($('<td>'+ trObj["qq"] +'</td>'))        
        $tr.append($('<td>'+ trObj["phone"] +'</td>'))
        $tr.append($('<td>'+
        '<a href="/xsxx2.php?id='+ trObj["sid"] +'"class="btn btn-xs btn-info">'+
        '<i class="fa fa-search"></i>'+
        '查看</a>'+
        '<a href="javascript:;" onclick="doDel('+trObj['sid'] + ',\'' + trObj['sname'] + '\')" class="btn btn-xs red">'+
        '<i class="fa fa-trash-o"></i>'+
        "删除</a>"+
        '</td>'))
        // $tr.append($('<td style="display:none">'+  +'</td>'))

        $tb.append($tr)
    }
}


//导入前检查信息
function checkImportInfo()
{
    console.log($("#tb_import input[name='file_stu']").eq(0).val());
    if($("#tb_import input[name='file_stu']").eq(0).val()=="")
    {
        alert("未选择任何文件!");
        return false;
    }
    return  true;
}
function doImport()
{
    $("#tb_import input[name='file_stu']").val("");
    
}

