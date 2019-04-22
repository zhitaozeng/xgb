

var TableAdvanced = function () {



    var initTable4 = function () {
        var table = $('#sample_4');

        /* Formatting function for row expanded details */
        function fnFormatDetails(oTable, nTr) {
            var aData = oTable.fnGetData(nTr);
            var sOut =  aData[aData.length -1 ];

            return sOut;
        }

        /*
         * Insert a 'details' column to the table
         */
        var nCloneTh = document.createElement('th');
        nCloneTh.className = "table-checkbox";
        
        var nCloneTd = document.createElement('td');
        nCloneTd.innerHTML = '<span class="row-details row-details-close"></span>';

        table.find('thead tr').each(function () {
            this.insertBefore(nCloneTh, this.childNodes[0]);
        });

        table.find('tbody tr').each(function () {
            this.insertBefore(nCloneTd.cloneNode(true), this.childNodes[0]);
        });

        var oTable = table.dataTable({

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
                "search": "查找:",
                "zeroRecords": "没有找到相关信息",
                "searchPlaceholder":"专业",
                
            },
            "columnDefs": [{
                "orderable": false,
                "targets": [0]
            }],
            "order": [
                [1, 'asc']
            ],
            "lengthMenu": [
                [5, 10, 15, -1],
                [5, 10, 15, "All"] // change per page values here
            ],
            // set the initial value
            "pageLength": 5
        });
        var tableWrapper = $('#sample_4_wrapper'); // datatable creates the table wrapper by adding with id {your_table_jd}_wrapper
        var tableColumnToggler = $('#sample_4_column_toggler');

        /* modify datatable control inputs */
        tableWrapper.find('.dataTables_length select').select2(); // initialize select2 dropdown

        /* Add event listener for opening and closing details
         * Note that the indicator for showing which row is open is not controlled by DataTables,
         * rather it is done here
         */
        table.on('click', ' tbody td .row-details', function () {
            var nTr = $(this).parents('tr')[0];
            if (oTable.fnIsOpen(nTr)) {

                /* This row is already open - close it */
                $(this).addClass("row-details-close").removeClass("row-details-open");
                oTable.fnClose(nTr);
            } else {
                /* Open this row */
                
                $(this).addClass("row-details-open").removeClass("row-details-close");
                oTable.fnOpen(nTr, fnFormatDetails(oTable, nTr), 'details');
            }
        });

        /* handle show/hide columns*/
        $('input[type="checkbox"]', tableColumnToggler).change(function () {
            /* Get the DataTables object again - this is not a recreation, just a get of the object */
            var iCol = parseInt($(this).attr("data-column"));
            var bVis = oTable.fnSettings().aoColumns[iCol].bVisible;
            oTable.fnSetColumnVis(iCol, (bVis ? false : true));
        });
        console.log(oTable.fnSettings().aoColumns);
        
    }


    return {

        //main function to initiate the module
        init: function () {

            if (!jQuery().dataTable) {
                return;
            }

            initTable4();

        }

    };

}();