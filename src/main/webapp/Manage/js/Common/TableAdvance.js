/// <reference path="../global/plugins/datatables/media/js/jquery.dataTables.min.js" />
/// <reference path="../global/plugins/jquery.min.js" />

var TableAdvanced = function () {
    var initTable = function (tbid, opts) {
        var table = $('#'+tbid+'');
        /* Fixed header extension: http://datatables.net/extensions/keytable/ */
        
        var oTable = table.dataTable(
            $.extend({},opts,{
                // Internationalisation. For more info refer to http://datatables.net/manual/i18n
                "language": {
                    "aria": {
                        "sortAscending": ": 递增",
                        "sortDescending": ": 递减"
                    },
                    "emptyTable": "没有找到相关信息",
                    "info": "展示了 _START_ 到 _END_ 项，总共 _TOTAL_ 项",
                    "infoEmpty": "没有找到相关信息",
                    "infoFiltered": "(从 _MAX_ 项中搜索到的结果)",
                    "lengthMenu": "每页 _MENU_ 项",
                    "search": "查找信息:",
                    "zeroRecords": "没有找到相关信息",
                    "searchPlaceholder":"",
                    
                },
                "order": [
                    [0, 'asc']
                ],
                "lengthMenu": [
                    [5, 10, 15, -1],
                    [5, 10, 15, "全部显示"] // change per page values here
                ],
                "pageLength": 5, // set the initial value,

                
            })
        );

        var tableWrapper = $('#'+tbid+'_wrapper'); // datatable creates the table wrapper by adding with id {your_table_jd}_wrapper
        var tableColumnToggler = $('#'+tbid+'_column_toggler');

        /* handle show/hide columns*/
        $('input[type="checkbox"]', tableColumnToggler).change(function () {
            /* Get the DataTables object again - this is not a recreation, just a get of the object */
            var iCol = parseInt($(this).attr("data-column"));
            var api = (typeof oTable.api == 'function') ? oTable.api(true) : oTable;
            var col = api.columns(iCol);
            col.visible(!col.visible()[0]);
            oTable.fnSetColumnVis(col.visible()[0]);
        });
        tableWrapper.find('.dataTables_length select').select2(); // initialize select2 dropdown
        return oTable;
    }

    return {
        //main function to initiate the module
        init: function (tbid, opts) {
            if (!jQuery().dataTable) {
                return;
            }
            return initTable(tbid,opts);
        }

    };

}();