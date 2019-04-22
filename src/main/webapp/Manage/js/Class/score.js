
var oTable = TableAdvanced.init("majorList", {
    "columns": [
        { data: 'order_number', title:"序号" },
        { data: 'major_class', title:"专业班级"},
        { data: 'pass_rate', title:"通过率"},
        { data: 'failed', title:"挂科人次"},
        { data: 'avg', title:'平均分'},
        { data: 'opr' , title:'操作'}
    ],
});
var list, cur_year = -1, cur_major = -1, cur_term = -1;
jQuery(document).ready(function() {
    // return ;

    //年级下拉框
    var start_year = new Date().getFullYear(),
        select_data = [
            {id:-1, text:'所有年级'}
        ];
    for(var i = 1; i >= -14; i--) {
        var y = start_year + i;
        select_data.push({id : y, text: y + '年'});
    }
    //初始化年级 select2
    $("#year").select2({
        data: select_data,
        placeholder: "请选择年级",
        allowClear: false
    }).on('select2:select', function(evt) {
        //选中项变动
        cur_year = evt.params.data.id;
        loadMajor();
    });

    //加载专业
    loadMajor();

    //避免样式不一致
    $('#term').select2();
    //加载学期
    manage_rpc.getTermList(function(data) {
        if (data.code == 0) {
            var termList = data.data;
            var select_data = [];
            for(var i = 0 ; i < termList.length;i++) {
                select_data.push({
                    id:termList[i]['id'],
                    text: termList[i]['startyear']+
                    "~" + (parseInt(termList[i]['startyear'])+1)+
                    " " + (termList[i]['upordown']==1? "上学期":"下学期")
                });
            }
            //初始化学期下拉框
            $('#term').select2({
                placeholder: "请选择学期",
                data : select_data
            }).on('select2:select', function(evt) {
                //选中项变动
                var id  = evt.params.data.id;
                cur_term = id;
                loadTable();
            });

        }  else {
            alert(data.status);
        }
    });



    //显示统计 按钮点击
    $('#submit').click(function() {
        if (cur_term > 0) {
            loadTable();
        } else {
            alert('学期未选择！');
        }
    });


    /**
     * 加载表格
     */
    function loadTable() {
        var major_id;
        if (cur_major == 0) {
            major_id = [];
            $('#major option').each(function(k ,e){
                major_id.push($(e).attr('value'));
            });
        } else {
            major_id = cur_major;
        }
        console.log(major_id);
        //列表显示
        manage_rpc.getMajorStatistic(major_id, cur_term, function (data) {
            if (data.code == 0) {
                list = data.data;
                oTable.fnClearTable();
                for (var i = 0; i < list.length; i++) {
                    var item = list[i];
                    list[i]['order_number'] = i + 1;
                    list[i]['opr'] = '<a type="button" class="btn btn-xs btn-default" href="/index.php?app=Manage&ctr=Class&act=class_score&id='+item.id+'&term='+cur_term+'">详细</a>' +
                        '<i class="fa fa-pencil"></i>';
                }

                oTable.fnAddData(list);

            } else {
                alert(data.status);
            }
        });
    }

    /**
     * rpc 加载专业并刷新下拉框
     */
    function loadMajor() {
        var major_select =  $('#major');
        major_select.html('').select2({
            data : [{id:'', text:'加载中..'}]
        });
        manage_rpc.getMajorList(cur_year, function(data) {
            cur_major = 0;
            if (data.code == 0) {
                var select_data = [{
                    id : '0',
                    text : '所有专业'
                }];
                for (var i = 0; i < data.data.length; i++) {
                    var item = data.data[i];
                    select_data.push({
                        id:item.id,
                        text:item.name
                    });
                }
                if (select_data.length == 0) {
                    select_data.push({
                        id:'-1',
                        text:'无'
                    });
                }
                major_select.html('').select2({
                    placeholder: "请选择专业",
                    data : select_data
                }).on('select2:select', function(evt) {
                    //选中项变动
                    var id  = evt.params.data.id;
                    cur_major = id;
                    loadTable();
                });
                cur_major = major_select.val();
                //刷新表格

            } else {
                alert(data.status);
            }
        });

    }





})