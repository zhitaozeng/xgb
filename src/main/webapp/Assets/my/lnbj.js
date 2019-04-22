var dt = TableAdvanced.init("tb_stuList",{
      "ajax":{
        url:"/BLL/xsgl/xsgl_cxxs_all.php",
        dataSrc:function(json)
        {
            var list = $.parseJSON(json.data);
            for(var i =0;i<list.length;i++)
            {
                list[i]['seq']=i+1;
                list[i]['opr']='<td>'+
                '<a href="/xsxx2.php?id='+ list[i]["sid"] +'"class="btn btn-xs btn-info">'+
                '<i class="fa fa-search"></i>'+
                '查看</a>'+
                '<a href="javascript:;" onclick="doDel('+list[i]['sid'] + ',\'' + list[i]['sname'] + '\')" class="btn btn-xs red">'+
                '<i class="fa fa-trash-o"></i>'+
                "删除</a>"+
                '</td>';
            }
            return list;
        }
    },
    "columns": [               
        { data: 'seq'},
        { data: 'num' },
        { data: 'sname'},
        { data: 'sex' },
        { data: 'qq'},
        { data: 'phone' },
        { data: 'opr'}
    ],
});
// 学制下拉框
$('#select_bj').select2({
    placeholder: "请选择班级",
    allowClear: false
});

$('#select_bj').on('select2:select', function (evt) {
  // Do something
  loadBj($('#select_bj').val());
});

function loadBj(cid)
{
    $.getJSON("/BLL/bjsz/bjsz_cxbj.php",{cid:cid},function(resJsonObj){
       var data = JsonMsgHandle(resJsonObj);
       $("#cid").val(data.cid);
       $("#year").val(data.year);
       $("#major_name").val(data.major_name);
       $("#class_num").val(data.class_num);
       $("#qq").val(data.qq);
       $("#studentnumber").val(data.studentnumber);
    });

    // //读ajax数据
    // var dataUrl = "/BLL/xsgl/xsgl_cxxs_all.php?cid="+cid;
    
    // MakeXsxxTable($("#tb_stuList tbody")[0], dataUrl, {}, function(data){
        
    // })
    dt.ajax.url("/BLL/xsgl/xsgl_cxxs_all.php?cid="+cid).load();
}

$(function(){
    loadBj($('#select_bj').val());
});