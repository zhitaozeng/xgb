/**
 * Created by tinyjian on 17/4/4.
 */
/**
 * 使用方式
 * //1. 直接加载,不带参数
 * $('#id').select2ForXXX()
 * //2. 给rpc函数传2个整形参数
 * $('#id').select2ForXXX(2017,2)
 * //3. 给rpc函数传1个整形, 1个对象参数
 * $('#id').select2ForXXX(1, {id:1, major_id: 2});
 *
 * //4. 给rpc传参数, 并且添加自定义的事件
 * $('#id').select2ForXXX({
 *      params : [1, {id:1, major_id:2}],
 *      beforeLoad : function(dom){},
 *      onLoad: function(dom){},
 *      afterLoad: function(dom, select_data){},
 * });
 *
 *
 *
 * 执行顺序
 * startToLoad -> beforeLoad -> beforeLoad(user) ->
 * load -> load(user) -> afterLoad -> afterLoad(user)
 * 用户配置的总是在后面执行
 */
(function($) {


    var event_names = {
        beforeLoad: 'beforeLoad',
        onLoad:'onLoad',
        afterLoad:'afterLoad'
    };



    /**
     * 获取一个dom的jquery dom对象
     * @param select2Dom
     * @returns {*}
     */
    var parseJqueryDom = function (select2Dom) {
        var $dom = select2Dom;
        if (!($dom instanceof jQuery)) {
            $dom = $(select2Dom);
        }
        return $dom;
    }

    /**
     * 加载前
     * @param $dom
     */
    var beforeLoad = function ($dom, events) {
        $dom.html('').append('<option>加载中...</option>').attr('disabled', 'true');
        //做用户的
        doOrDont(events, event_names.beforeLoad, this, $dom);
    }

    /**
     * 加载完成后
     * @param $dom
     * @param select_props
     */
    var afterLoad = function ($dom, select_props, events) {
        //初始化下拉框
        $dom.removeAttr('disabled').html('').select2(select_props);
        //做用户的
        doOrDont(events, event_names.afterLoad, this, [$dom, select_props]);
    }

    /**
     * 加载动作
     * @param $dom
     * @param loader
     */
    var load = function ($dom, loader, events) {
        //设置参数,吧回调函数加上去
        var args = arguments[3];
        args[args.length++] = function () {
            //ajax回调函数
            var select_props = loader.callback.call(this, arguments[0]);
            //完成加载
            afterLoad($dom, select_props, events);
        };
        //调用rpc
        loader.src.apply(this, args);
        doOrDont(events, event_names.onLoad, this, [$dom]);
    }

    /**
     * 加载一个select2下拉框
     * @param dom
     * @param loader
     * @param rpc_args
     * @returns {*}
     */
    var startToLoad = function (dom, loader, func_args) {
        $dom = parseJqueryDom(dom);
        var events = {};
        var rpc_args = func_args;

        if (func_args.length > 0 &&
            typeof func_args[0] == 'object' &&
            typeof func_args[0]['params'] != 'undefined') {
            rpc_args = func_args[0]['params'];
            //添加到事件链
            for (var i in event_names) {
                var name = event_names[i];
                if (typeof func_args[0][name] == 'function') {
                    events[name] = func_args[0][name];
                }
            }
        }
        //加载前的工作
        beforeLoad($dom, events);
        //开始加载
        load.apply(this, [$dom, loader, events, rpc_args]);
        return $dom;
    }

    var termLoader = {
        src : manage_rpc.getTermList,
        callback : function (data) {
            var select_data = [];
            if (data.code == 0) {
                var termList = data.data;
                for(var i = 0 ; i < termList.length;i++) {
                    select_data.push({
                        id:termList[i]['id'],
                        text: termList[i]['startyear']+
                        "~" + (parseInt(termList[i]['startyear'])+1)+
                        " " + (termList[i]['upordown']==1? "上学期":"下学期")
                    });
                }
            } else {
                alert(data.status);
            }
            return {
                allowClear: false,
                data : select_data
            };
        }
    };

    var classLoader = {
        src : manage_rpc.getClassList,
        callback : function (data) {
            var select_data = [];
            if (data.code == 0) {
                for (var i = 0; i < data.data.length; i++) {
                    var item = data.data[i];
                    select_data.push({
                        id:item.cid,
                        text:item.class_num
                    });
                }
            } else {
                alert(data.status);
            }
            return {
                allowClear: false,
                data : select_data
            };
        }
    };

    var majorLoader = {
        src : manage_rpc.getMajorList,
        callback : function (data) {
            var select_data = [];
            if (data.code == 0) {
                for (var i = 0; i < data.data.length; i++) {
                    var item = data.data[i];
                    select_data.push({
                        id:item.id,
                        text:item.name
                    });
                }
            } else {
                alert(data.status);
            }
            return {
                allowClear: false,
                data : select_data
            };
        }
    };

    /**
     * 加载 学期下拉框
     * @returns {*}
     */
    $.fn.select2ForTerm = function() {
        return startToLoad(this, termLoader, arguments);
    }

    /**
     * 加载班级下拉框
     * @returns {*}
     */
    $.fn.select2ForClass = function () {
        return startToLoad(this, classLoader, arguments);
    }

    /**
     * 加载专业下拉框
     * @returns {*}
     */
    $.fn.select2ForMajor = function() {
        return startToLoad(this, majorLoader, arguments);
    }

    /**
     * 加载年份下拉框
     */
    $.fn.select2ForNumber = function(min, max, process) {
        return startToLoad(this, {
            src : function () {
                for(var n = max; n >= min; n--) {
                    var data = {
                        id : n,
                        text : n
                    };
                    if (typeof process == 'function') {
                        var res = process(y);
                        if (typeof res == 'object') {
                            data = res;
                        } else if (typeof res == 'string') {
                            data.text = res;
                        }
                    }
                    select_data.push(data);
                }
            },
            callback : function () {

            }
        }, null);
    }

})(jQuery);






