var TableAjax = {
    init : function (url, columns) {
        var grid = new Datatable();
        var ajax = {};
        ajax.data = ajaxParam;
        ajax.url = "/BLL/bjsz/bjsz_cxbj.php"; // ajax source

        grid.init({
            src: $("#datatable_ajax"),
            onSuccess: function (grid) {
                // execute some code after table records loaded
            },
            onError: function (grid) {
                // execute some code on network or other general error
            },
            loadingMessage: '加载中...',
            dataTable: {
                // here you can define a typical datatable settings from http://datatables.net/usage/options
                // Uncomment below line("dom" parameter) to fix the dropdown overflow issue in the datatable cells. The default datatable layout
                // setup uses scrollable div(table-scrollable) with overflow:auto to enable vertical scroll(see: assets/global/scripts/datatable.js).
                // So when dropdowns used the scrollable div should be removed.
                //"dom": "<'row'<'col-md-8 col-sm-12'pli><'col-md-4 col-sm-12'<'table-group-actions pull-right'>>r>t<'row'<'col-md-8 col-sm-12'pli><'col-md-4 col-sm-12'>>",
                "columns": [
                    { data: 'order_number',"orderable":false},
                    { data: 'year' ,"orderable":false},
                    { data: 'schoolsystem',"orderable":false },
                    { data: 'major_name' ,"orderable":false},
                    { data: 'class_num',"orderable":false },
                    { data: 'teacher_name' ,"orderable":false},
                    { data: 'studentnumber',"orderable":false },
                    { data: 'opr' ,"orderable":false},
                ],

                "lengthMenu": [
                    [10, 20, 50, 100, 150, -1],
                    [10, 20, 50, 100, 150, "All"] // change per page values here
                ],
                "pageLength": 10, // default record count per page
                "ajax":ajax,
                "order": [
                    [0,"asc"]
                ] // set first column as a default sort by asc
            },
            dataHandle:function (list){
                $.each(list,function(i, e){
                    e.opr =
                // '<a href="javascript:;" class="btn btn-xs btn-info"><i class="fa fa-search"></i> 查看</a>'+
                '<a href="/gly/bjsz_xg.php?cid='+e.cid+'" class="btn btn-xs default"><i class="fa fa-pencil"></i> 修改</a>'+
                '<a href="javascript:;" onclick="doDel(this, '+e.cid+')" class="btn btn-xs btn-danger"><i class="fa fa-trash-o"></i> 删除</a>';
                });
            }
        });

        // handle group actionsubmit button click
        grid.getTableWrapper().on('click', '.table-group-action-submit', function (e) {
            e.preventDefault();
            var action = $(".table-group-action-input", grid.getTableWrapper());
            if (action.val() != "" && grid.getSelectedRowsCount() > 0) {
                grid.setAjaxParam("customActionType", "group_action");
                grid.setAjaxParam("customActionName", action.val());
                grid.setAjaxParam("id", grid.getSelectedRows());
                grid.getDataTable().ajax.reload();
                grid.clearAjaxParams();
            } else if (grid.getSelectedRowsCount() === 0) {
                Metronic.alert({
                    type: 'danger',
                    icon: 'warning',
                    message: '请选择要修改的条目',
                    container: grid.getTableWrapper(),
                    place: 'prepend'
                });
            } else if (action.val() == "") {
                Metronic.alert({
                    type: 'danger',
                    icon: 'warning',
                    message: '请选择设置选项',
                    container: grid.getTableWrapper(),
                    place: 'prepend'
                });
            }
        });
        return grid;
    }
}();

function doDel(aDom, cid) {
    var trDom = aDom.parentNode.parentNode;
    var year = $(trDom).find("td")[2].innerHTML;    
    var major_name = $(trDom).find("td")[4].innerHTML;
    var class_num = $(trDom).find("td")[5].innerHTML;
    var stu_num = parseInt($(trDom).find("td")[7].innerHTML);
    

    if(confirm("您确定要删除 "+year+"年的 "+major_name+"-"+ class_num  +"这个班级吗?"))
    {
        if(stu_num==0 || confirm("警告：该专业尚有学生,本次操作会将学生一起删除!您确定要这样操作吗?"))
        {
            location = "/BLL/bjsz/bjsz_scbj.php?class_id="+cid+"&boolean1=true";
        }
    }

}