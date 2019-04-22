var TableAjax_ckxsxx = function () {
    var handleRecords = function (ajaxParam) {

        var grid = new Datatable();
        var ajax = {};
        ajax.url = "/BLL/xsgl/xsgl_cxxs_all.php"; // ajax source

        var dt = grid.init({
            src: $("#datatable_ajax"),
            onSuccess: function (grid) {
                // execute some code after table records loaded
            },
            onError: function (grid) {
                // execute some code on network or other general error  
            },
            loadingMessage: 'Loading...',
            dataTable: { // here you can define a typical datatable settings from http://datatables.net/usage/options 

                // Uncomment below line("dom" parameter) to fix the dropdown overflow issue in the datatable cells. The default datatable layout
                // setup uses scrollable div(table-scrollable) with overflow:auto to enable vertical scroll(see: assets/global/scripts/datatable.js). 
                // So when dropdowns used the scrollable div should be removed. 
                //"dom": "<'row'<'col-md-8 col-sm-12'pli><'col-md-4 col-sm-12'<'table-group-actions pull-right'>>r>t<'row'<'col-md-8 col-sm-12'pli><'col-md-4 col-sm-12'>>",
                
                // "bStateSave": true, // save datatable state(pagination, sort, etc) in cookie.
                //json数据格式
                "columns": [               
                    { data: 'order_number',"orderable":false },                    
                    { data: 'num' ,"orderable":false},
                    { data: 'sname' ,"orderable":false},
                    { data: 'startyear' ,"orderable":false},
                    { data: 'classname',"orderable":false },
                    { data: 'phone',"orderable":false },
                    { data: 'opr',"orderable":false }
                ],
                "lengthMenu": [
                    [10, 20, 50, 100, 150, -1],
                    [10, 20, 50, 100, 150, "All"] // change per page values here
                ],
                "pageLength": 10, // default record count per page
                "ajax": ajax,

                "order": [
                    [0, "asc"]
                ] // set first column as a default sort by asc
            },
            //数据预处理
            dataHandle:function (list){
                $.each(list,function(i, e){
                    e.opr =  
                '<a href="/xsxx2.php?id='+e.sid+'" class="btn btn-xs default"><i class="fa fa-search"></i> 详情</a>'+
                '<a href="javascript:;" onclick="doDel(this, '+e.sid+')" class="btn btn-xs btn-danger"><i class="fa fa-trash-o"></i> 删除</a>';
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

    return {

        //main function to initiate the module
        init: function (ajaxParam) {

            
            return handleRecords(ajaxParam);

        }

    };

}();


function doDel(aDom, sid)
{  
    var trDom = aDom.parentNode.parentNode;
    var stuName = $(trDom).find("td")[2].innerHTML;

    if(confirm("您真的要 " + stuName + " 删除这个学生吗?"))
    {
        location="/BLL/xsgl/xsgl_scxs.php?id="+sid;
    }

}