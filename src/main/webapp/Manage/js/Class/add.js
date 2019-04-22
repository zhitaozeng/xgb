/**
 * Created by tinyjian on 17/3/9.
 */

$(function() {
    //下拉框 年份
    var start_year = new Date().getFullYear(),
        select_data = [];
    for(var i = 1; i >= -20; i--) {
        var y = start_year + i;
        select_data.push({id : y, text: y + '年'});
    }
    //初始化select2 起始年份
    $("#year").select2({
        data: select_data,
        placeholder: "年份",
    }).on('select2:select', function(evt) {
        //选中项变动
    });
    var init_id = $("#year").attr('value-init');
    if (init_id && init_id > 0) {
        $("#year").val(init_id);
        $("#year").trigger('change');
    }



    //添加按钮
    $('#submit').click(function () {
        var data = {
            'year' : $('#year').val(),
            'major_id' : $('#major_id').val(),
            'class_num' : $('#class_num').val(),
            'teacher_id' : $('#teacher_id').val(),
            'qq' : $('#qq').val()
        };
        var class_id = $('#class_id').val();
        if ($.trim(class_id).length > 0) {
            manage_rpc.modifyClass(class_id,data, function(data) {
                if (data.code == 0) {
                    alert('修改成功!');
                } else {
                    alert(data.status);
                }
            });
        } else {
            manage_rpc.addClass(data, function(data) {
                if (data.code == 0) {
                    alert('添加成功!');
                } else {
                    alert(data.status);
                }
            });
        }

    })
});