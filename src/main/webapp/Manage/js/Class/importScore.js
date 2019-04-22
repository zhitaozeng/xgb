/**
 * Created by TinyJian on 2017/3/8.
 */
var oTable = TableAdvanced.init("tb_grade", {
    "columns": [
        { title: "序号"},
        { title: "姓名"},
    ]
});
var excel_data = null;
jQuery(document).ready(function() {

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
           $('#term_id').select2({
               placeholder: "请选择学期",
               allowClear: false,
               data : select_data
           }).on('select2:select', function(evt) {
               //选中项变动
               var id  = evt.params.data.id;

           });

       }  else {
           alert(data.status);
       }
    });

    //加载专业
    manage_rpc.getMajorList(-1, function(data) {
        if (data.code == 0) {
            var major_select =  $('#major_id');
            var select_data = [];
            for (var i = 0; i < data.data.length; i++) {
                var item = data.data[i];
                select_data.push({
                    id:item.id,
                    text:item.name
                });
            }
            major_select.select2({
                placeholder: "请选择专业",
                data : select_data
            }).on('select2:select', function(evt) {
                //选中项变动
                var id  = evt.params.data.id;
                loadClass(id);
            });
            if (major_select.val() > 0) {
                loadClass(major_select.val());
            }
        } else {
            alert(data.status);
        }
    });

    /**
     * 预览成绩
     */
    $('#submit').click(function() {
        var status = getSubmitStatus();
        if (status == 0) {
            //预览成绩
            previewExcel();
        } else {
            //提交成绩
            submitScore();
        }
    });

    function setSubmitStatus(status) {
        var cur_status = getSubmitStatus();
        var id = '#submit';
        if (cur_status == status) {
            return ;
        }
        var title = "预览Excel";
        $(id).removeAttr('disabled');
        switch (status) {
            case 0:break;
            case 1:
                title = "提交成绩";
                break;
            case 2:
                title = "提交中...";
                $(id).attr('disabled', 'true');
                //超时设置..
                setTimeout(function () {
                    if (getSubmitStatus() == 2) {
                        setSubmitStatus(1);
                    }
                }, 5000);
            break;
        }
        $(id).attr('data-status', status);
        $(id).val(title);
    }

    function getSubmitStatus() {
        return $('#submit').attr('data-status');
    }



    function previewExcel() {
        var formData = new FormData(document.getElementById('score_form'));
        setSubmitStatus(2);
        manage_rpc.parseExcel(formData, function(data){
            if (data.code == 0) {
                data = data.data;
                if (data.length == 0) {
                    return ;
                }
                oTable.fnDestroy();
                $('#tb_grade thead').html('');
                $('#tb_grade tbody').html('');
                excel_data = data;
                var newCols = [{title:"序号", bVisible:true}];
                for (var i = 0; i < data[0].length; i++) {
                    var title = data[0][i];
                    newCols.push({
                        title: title.length > 4 ? title.slice(0, 3) + ".." : title,
                        full_title : data[0][i],
                        bVisible:true}
                    );
                }
                var newRows = [];
                for(var i = 1; i < data.length;i++) {
                    newRows.push([i].concat(data[i]));
                }
                //show/hide column
                var ct = $('#tb_grade_column_toggler').html('');
                for (var i in newCols) {
                    ct.append('<label><input type="checkbox" checked data-column="'+i+'">'+ (newCols[i].full_title || newCols[i].title)+'</label>');
                }
                oTable = TableAdvanced.init("tb_grade", {
                    columns: newCols,
                    data : newRows,
                    bAutoWidth : false,
                });
                //可以提交成绩
                setSubmitStatus(1);
            } else {
                //预览失败
                setSubmitStatus(0);
                alert(data.status);
            }
        });
    }



    /**
     * 提交成绩
     */
    function submitScore () {
        if (excel_data == null) {
            alert('请先预览成绩再上传！');
            return;
        }
        var class_id = $('#class_id').val();
        var term_id = $('#term_id').val();
        if (class_id <= 0 || term_id <= 0) {
            alert('请选择班级、学期后再导入！');
            return;
        }

        //设置等待
        setSubmitStatus(2);

        manage_rpc.importScore(class_id, term_id, excel_data, function (data) {
            if (data.code == 0) {
                //加载当前班级的成绩
                loadScore();
                alert('导入成功！');
            } else {
                alert(data.status);
            }
            //回到最初状态
            setSubmitStatus(0);
        });
    };


    //查询成绩
    $('#get_score').click(function(){
        loadScore();
    });

    /**
     * 加载成绩表格
     */
    function loadScore() {
        excel_data = null;
        setSubmitStatus(0);
        var class_id = $('#class_id').val();
        var term_id = $('#term_id').val();

        manage_rpc.getClassScore(class_id, term_id, function(data) {
            if (data.code == 0) {
                var course = data.data.course;
                var score = data.data.score;
                var newCols = [
                    {title: '序号', bVisible:true},
                    {title: '学生姓名', bVisible:true}
                ]
                for(var i=0;i < course.length;i++) {
                    var title = course[i];
                    newCols.push({
                        title: title.length > 4 ? title.slice(0, 3) + ".." : title,
                        full_title:course[i],
                        bVisible:true
                    });
                }

                var rows = [];
                //提出score到row
                for(var i = 0; i < score.length; i++) {
                    var row = [];
                    var item = score[i];
                    row.push(i + 1);
                    row.push(item.name);
                    row = row.concat(item.score);
                    rows.push(row);
                }
                //show/hide column
                //销毁表格
                oTable.fnDestroy();
                $('#tb_grade thead').html('');
                $('#tb_grade tbody').html('');
                var ct = $('#tb_grade_column_toggler').html('');
                for (var i in newCols) {
                    ct.append('<label><input type="checkbox" checked data-column="'+i+'">'+ (newCols[i].full_title || newCols[i].title)+'</label>');
                }
                oTable = TableAdvanced.init("tb_grade", {
                    columns: newCols,
                    data : rows,
                    bAutoWidth : false
                });


            } else {
                alert(data.status);
            }
        });
    }

    /**
     * 加载班级列表
     * @param major_id
     */
    function loadClass(major_id) {
        var params = {
            major_id : major_id,
            length : 100
        };
        $('#class_id').attr('disabled');
        manage_rpc.getClassList(params, function(data){
            if (data.code == 0) {
                var select_data = [];
                for (var i = 0; i < data.data.length; i++) {
                    var item = data.data[i];
                    select_data.push({
                        id:item.cid,
                        text:item.class_num
                    });
                }
                var $sel = $('#class_id').html('').select2({
                    placeholder: "请选择班级",
                    data : select_data
                });
                $('#class_id').removeAttr('disabled');

            } else {
                alert(data.status);
            }
        });

    }


});