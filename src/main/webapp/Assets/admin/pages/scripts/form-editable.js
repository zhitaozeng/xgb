var FormEditable = function () {

    $.mockjaxSettings.responseTime = 500;

    var log = function (settings, response) {
        var s = [],
            str;
        s.push(settings.type.toUpperCase() + ' url = "' + settings.url + '"');
        for (var a in settings.data) {
            if (settings.data[a] && typeof settings.data[a] === 'object') {
                str = [];
                for (var j in settings.data[a]) {
                    str.push(j + ': "' + settings.data[a][j] + '"');
                }
                str = '{ ' + str.join(', ') + ' }';
            } else {
                str = '"' + settings.data[a] + '"';
            }
            s.push(a + ' = ' + str);
        }
        s.push('RESPONSE: status = ' + response.status);

        if (response.responseText) {
            if ($.isArray(response.responseText)) {
                s.push('[');
                $.each(response.responseText, function (i, v) {
                    s.push('{value: ' + v.value + ', text: "' + v.text + '"}');
                });
                s.push(']');
            } else {
                s.push($.trim(response.responseText));
            }
        }
        s.push('--------------------------------------\n');
        $('#console').val(s.join('\n') + $('#console').val());
    }

    var initAjaxMock = function () {
        //ajax mocks

        $.mockjax({
            url: '/post',
            response: function (settings) {
                log(settings, this);
            }
        });

        $.mockjax({
            url: '/error',
            status: 400,
            statusText: 'Bad Request',
            response: function (settings) {
                this.responseText = 'Please input correct value';
                log(settings, this);
            }
        });

        $.mockjax({
            url: '/status',
            status: 500,
            response: function (settings) {
                this.responseText = 'Internal Server Error';
                log(settings, this);
            }
        });

        $.mockjax({
            url: '/groups',
            response: function (settings) {
                this.responseText = [{
                        value: 0,
                        text: 'Guest'
                    }, {
                        value: 1,
                        text: 'Service'
                    }, {
                        value: 2,
                        text: 'Customer'
                    }, {
                        value: 3,
                        text: 'Operator'
                    }, {
                        value: 4,
                        text: 'Support'
                    }, {
                        value: 5,
                        text: 'Admin'
                    }
                ];
                log(settings, this);
            }
        });

    }

    var initEditables = function () {

        //set editable mode based on URL parameter
        if (Metronic.getURLParameter('mode') == 'inline') {
            $.fn.editable.defaults.mode = 'inline';
            $('#inline').attr("checked", true);
            jQuery.uniform.update('#inline');
        } else {
            $('#inline').attr("checked", false);
            jQuery.uniform.update('#inline');
        }

        //global settings 
        $.fn.editable.defaults.inputclass = 'form-control';
        $.fn.editable.defaults.url = '/post';

        //姓名
        $('#name').editable({
            url: '/post',
            type: 'text',
            pk: 1,
            name: 'name',
            title: '请输入姓名'
        });

        //性别
        $('#sex').editable({
            prepend: "未选择",
            inputclass: 'form-control',
            source: [{
                    value: 0,
                    text: '男'
                }, {
                    value: 1,
                    text: '女'
                }
            ],
            display: function (value, sourceData) {
                var colors = {
                    "": "gray",
                    1: "green",
                    2: "blue"
                },
                    elem = $.grep(sourceData, function (o) {
                        return o.value == value;
                    });

                if (elem.length) {
                    $(this).text(elem[0].text).css("color", colors[value]);
                } else {
                    $(this).empty();
                }
            }
        });
        
        //身份证
        $('#idcard').editable({
            url: '/post',
            type: 'text',
            pk: 1,
            name: 'idcard',
            title: '请输入身份证号'
        });

        //入学时间
        $('#rxsj').editable({
            inputclass: 'form-control',
        });

        //宿舍号
        $('#domnum').editable({
            url: '/post',
            type: 'text',
            pk: 1,
            name: 'domnum',
            title: '请输入宿舍号'
        });

        //QQ号
        $('#qqnum').editable({
            url: '/post',
            type: 'text',
            pk: 1,
            name: 'qqnum',
            title: '请输入QQ号'
        });

        //手机号码
        $('#telnum').editable({
            url: '/post',
            type: 'text',
            pk: 1,
            name: 'telnum',
            title: '请输入手机号码'
        });

        //政治面貌
        $('#zzmm').editable({
            showbuttons: false
        });

        //班级
        var bjs = [];
        $.each({
            "BD": "Bangladesh",
            "BE": "Belgium",
        }, function (k, v) {
            bjs.push({
                id: k,
                text: v
            });
        });

        $('#bj').editable({
            inputclass: 'form-control input-medium',
            source: bjs
        });

        //家庭住址
        $('#jtzz').editable({
            showbuttons: 'bottom'
        });

        //直系亲属
        // 王朝月(母亲), 18556224587
        $('#tr_family [name="family[]"]').editable({
            url: '/post',
            value: {
                name: "张晓明",
                relation: "父亲",
                telnum: "18856224587"
            },
            validate: function (value) {
                if (value.city == '') return '请输入名字!';
            },
            display: function (value) {
                if (!value) {
                    $(this).empty();
                    return;
                }
                var html = '<b>' + $('<div>').text(value.name).html() + '</b>, ' + $('<div>').text(value.relation).html() + ',' + $('<div>').text(value.telnum).html();
                $(this).html(html);
            }
        });
        //添加直系亲属
        $("#tr_family .fa-plus").parent().click(function(){
            var aDom = $('<a href="#" name="family[]" data-type="family" data-pk="1" data-original-title="请输入直系亲属的信息"></a>');
            var td = $("#tr_family td").eq(1);
            var aTotal = $("#tr_family td a").length;
            if(aTotal==0)
            {
                td.append(aDom);

            }
            else 
            {
                td.append($("<br/>")).append(aDom);
            }

            aDom.editable({
                url: '/post',
                value: {
                    name: "",
                    relation: "",
                    telnum: ""
                },
                validate: function (value) {
                    if (value.city == '') return '请输入名字!';
                },
                display: function (value) {
                    if (!value) {
                        $(this).empty();
                        return;
                    }
                    var html = '<b>' + $('<div>').text(value.name).html() + '</b>, ' + $('<div>').text(value.relation).html() + ',' + $('<div>').text(value.telnum).html();
                    $(this).html(html);
                }
            });
            setTimeout(function() {
                $("#tr_family td").eq(1).children("a")[2].click();
            }, 100);
        });

        //重大事项记录
        
        $('#zdssjl,#qjjl,#drxsgbqk,#wjcf,#hjqk,#rdjjfzdtjl,#beizhu').editable({
            showbuttons: 'bottom'
        });

    }

    return {
        //main function to initiate the module
        init: function () {

            // inii ajax simulation
            initAjaxMock();

            // init editable elements
            initEditables();
            
            // init editable toggler
            $('#enable').click(function () {
                $('#user .editable').editable('toggleDisabled');
            });

            // init 
            $('#inline').on('change', function (e) {
                if ($(this).is(':checked')) {
                    window.location.href = 'xsxx2.php?mode=inline';
                } else {
                    window.location.href = 'xsxx2.php';
                }
            });

            // handle editable elements on hidden event fired
            $('#user .editable').on('hidden', function (e, reason) {
                if (reason === 'save' || reason === 'nochange') {
                    var $next = $(this).closest('tr').next().find('.editable');
                    if ($('#autoopen').is(':checked')) {
                        setTimeout(function () {
                            $next.editable('show');
                        }, 300);
                    } else {
                        $next.focus();
                    }
                }
            });


        }

    };

}();