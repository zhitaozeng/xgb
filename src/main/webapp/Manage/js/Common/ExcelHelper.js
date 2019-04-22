/**
 * Created by tinyjian on 17/4/10.
 */

/**
 * //设置当前状态为等待
 * $('').buttonForExcel('setState', 0);
 */
var ExcelButton = function() {
    var cur_status = 0;
    var $dom = null, $form;
    var defaults = {
        form : null,
        status : ['预览Excel', '提交', '提交中..'],
        previewReady: null,
        submitReady: null,
        onSubmit : null,
        onWait: null,
        process: null

    };
    //与后台一致
    var input_name = 'file_name';
    var excel_data = null;

    /**
     * 设置状态
     * @param status
     * @returns {boolean}
     */
    function setState(status) {
        if (cur_status == status) {
            return ;
        } else if (status < 0 || status >= defaults.status.length) {
            return ;
        }
        $dom.removeAttr('disabled');
        switch (status) {
            case 0:
                doOrDont(defaults, 'previewReady', $dom, null);
                break;
            case 1:
                //不能提交
                if (excel_data == null) {
                    return false;
                }
                doOrDont(defaults, 'submitReady', $dom, [excel_data]);
                break;
            case 2:
                $dom.attr('disabled', 'true');
                //超时设置..
                setTimeout(function () {
                    //如果还在加载...
                    if (getState() == 2) {
                        //重新预览
                        setState(0);
                    }
                }, 5000);
                doOrDont(defaults, 'onWait', $dom, null);
                break;
        }
        cur_status = status;
        $dom.attr('data-status', cur_status);
        $dom.val(defaults.status[status]);
        return true;
    }

    /**
     * 获取当前状态
     * @returns {*}
     */
    function getState() {
        return $dom.attr('data-status');
    }

    /**
     * 预览excel
     */
    function previewExcel() {
        if (getState() != 0) {
            return ;
        }
        var input = $form.find("input[type='file']:first");
        if (!input) {
            return false;
        } else if(input.val() == "") {
            alert("未选择任何文件!");
            return false;
        }

        // var form_data = new FormData( document.getElementById('stu_form'));
        var form_data = new FormData();
        form_data.append(input_name, input[0].files[0]);
        //加载中
        setState(2);
        manage_rpc.parseExcel(form_data, function (data) {
            //如果不是从等待状态转换来的, 说明中途改变了状态, 后面就不执行了。
            if (getState() != 2) {
                return ;
            }
            if (data.code == 0) {
                excel_data = data.data;
                //可提交
                setState(1);
            } else {
                //预览
                setState(0);
                alert(data.status);
            }
        });
    }


    /**
     *
     */
    function click() {
        if (getState() == 0) {
            if (doOrDont(defaults, 'onPreview', $dom, null) !== false) {
                previewExcel();
            }
        } else if (getState() == 1) {
            if (doOrDont(defaults, 'onSubmit', $dom, [excel_data]) !== false) {
                setState(2);
            }
        } else if (getState() == 2) {

        }
    }

    return {
        /**
         * @param dom
         * @param props
         *  {
         *  form: $('#formid'),
         *  status: ['预览Excel', '提交', '加载中..'],
         *  //预览准备
         *  previewReady: function(){},
         *  //点击预览
         *  onPreview : function() {},
         *  //提交准备
         *  submitReady: function(){},
         *  //点击提交
         *  onSubmit : function() {},
         *  //等待
         *  onWait: function(){},
         * }
         */
        init : function (dom, props) {
            $dom = $(dom);
            $dom.click(click);
            defaults = $.extend({}, defaults, props);
            $form = defaults.form ? $(defaults.form) : null;
            if (!$form) {
                return false;
            }
        },
        setState: setState,
        getState: getState,
        preview : previewExcel,
        getExcelData : function () {
            return excel_data;
        }
    }
};