
var oTable = TableAdvanced.init("tb_grade", {
    "columns": [
        { title: "序号"},
        { title: "姓名"},
    ]
});
var list;
jQuery(document).ready(function() {
    //获得table数据
    var pageWrapper = $("#cladetailList_wrapper div[class='row'] div")[0];
    // $(pageWrapper). ppend($("<a onclick='doAdd()' style='margin-left: 10px' href='#modal_user' data-toggle='modal' class='btn blue'>添加用户</a>"));

    //显示列表
    loadTable();

//加载列表
    function loadTable() {
        manage_rpc.getClassScore(class_id, term_id, function(data) {
            if (data.code == 0) {
                var course = data.data.course;
                var score = data.data.score;
                var newCols = [
                    {title: '序号'},
                    {title: '学生姓名'}
                ]
                for(var i=0;i < course.length;i++) {
                    newCols.push({title: course[i]});
                }

                oTable.fnDestroy();
                $('#tb_grade thead').html('');
                var rows = [];
                //提出score到row
                for(var i = 0; i < score.length; i++) {
                    var row = [];
                    var item = score[i];
                    row.push(i + 1);
                    row.push(item.name);
                    row = row.concat(item.score);
                    row = scoreHandler(row);
                    rows.push(row);
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


    function scoreHandler(stu_score) {
        var css_class = "";
        for (var i = 2; i < stu_score.length; i++) {
            css_class = '';
            var grade  = stu_score[i];
            if (isNaN(stu_score[i])) {
                switch (stu_score[i]) {
                    case '冲突':;
                    case '缺考':css_class = 'red';break;
                    default:
                        ;
                }
            } else {
                grade = parseInt(stu_score[i]);
            }

            if (grade < 60) {
                css_class = 'red';
            }
            stu_score[i] = css_class.length > 0 ? '<span class="'+css_class+'">'+grade+'</span>' : grade;
        }
        console.log(stu_score);

        return stu_score;
    }


})