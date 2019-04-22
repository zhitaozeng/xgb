/**
 * Created by tinyjian on 17/4/4.
 */
var oTable = TableAdvanced.init("tb_grade", {
    columns: [
        {title : "序号", data: 'order_num', width:'50px'},
        {title : "课程名称", data: 'course_name'},
        {title : "成绩", data: 'score', width:'60px'}
    ],
});
jQuery(document).ready(function() {
    FormEditable.init(stu_id);
    $('#term_id').select2ForTerm().on('select2:select', function (evt) {
        console.log(evt);
    });

    /**
     * 加载成绩表格
     */
    function loadScore(term_id) {
        manage_rpc.getStudentScore(stu_id, term_id, function(data) {
            if (data.code == 0) {
                var data = data.data;
                //销毁表格
                oTable.fnClearTable();

                var rows = [];
                for (var i = 0; i < data.length; i++) {
                    var e = data[i];
                    rows.push({
                        order_num : i + 1,
                        course_name : e['coursename'],
                        score : e['score']
                    });
                }
                if (data.length > 0) {
                    oTable.fnAddData(rows);
                }

            } else {
                alert(data.status);
            }
        });
    }

    $('#a_reload').click(function () {
        var term_id = $('#term_id').val();
        loadScore(term_id);
    })
});