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
                        value: '群众',
                        text: '群众'
                    }, {
                        value: '共青团员',
                        text: '共青团员'
                    }, {
                        value: '积极分子',
                        text: '入党积极分子'
                    }, {
                        value: '预备党员',
                        text: '预备党员'
                    }, {
                        value: '党员',
                        text: '党员'
                    }
                ];
                log(settings, this);
            }
        });

    }

    var initEditables = function (primaryKey) {
        function checkSuccess(data) {
            data = $.parseJSON(data);
            if(data.code == 0) {
                return true;
            }
            else {
                alert(data.status);
                return false;
            }
        }

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
        $.fn.editable.defaults.url = '/index.php?app=Manage&ctr=StudentAjax&act=modifyStudentAttr';
        $.fn.editable.defaults.success = checkSuccess;
        $.fn.editable.defaults.params = {
                id:primaryKey
        };
        //姓名
        $('#name').editable({
            type: 'text',
            pk: primaryKey,
            name: 'name',
            title: '请输入姓名'

        });

        //性别
        $('#sex').editable({
            inputclass: 'form-control',
            name:"sex",
            source: [{
                    value: '男',
                    text: '男'
                }, {
                    value: '女',
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

        //性别
        $('#status').editable({
            inputclass: 'form-control',
            name:"status",
            source: [{
                value: 0,
                text: '在校'
            }, {
                value: 1,
                text: '离校'
            }
            ],
            display: function (value, sourceData) {
                var colors = {
                        0: "",
                        1: "gray",
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
            type: 'text',
            pk: primaryKey,
            name: 'idcard',
            title: '请输入身份证号'
        });

        //入学时间
        $('#rxsj').editable({
            combodate:{
                maxYear: new Date().getUTCFullYear(),
                
            },
            inputclass: 'form-control',
            name: 'startyear',
            params: function(p)
            {
                var date = new Date(p.value);
                var m = date.getMonth() + 1;
                p.value = date.getFullYear() + (m<10 ? "0":"") + m;
                p['id']=primaryKey;
                return p;
            }
        });

        //宿舍号
        $('#domnum').editable({
            type: 'text',
            pk: 1,
            params:{
                id:primaryKey
            },
            name: 'dormid',
            title: '请输入宿舍号'
        });


        //QQ号
        $('#qqnum').editable({
            type: 'text',
            pk: primaryKey,
            name: 'qq',
            title: '请输入QQ号'
        });

        //民族
        $('#ethnic').editable({
            type: 'text',
            pk: primaryKey,
            name: 'ethnic',
            title: '请输入民族'
        });
        //自习教室
        $('#self_study_room').editable({
            type: 'text',
            pk: primaryKey,
            name: 'self_study_room',
            title: '请输入自习教室'
        });
        //自考专业
        $('#self_taught_major').editable({
            type: 'text',
            pk: primaryKey,
            name: 'self_taught_major',
            title: '请输入自考创业'
        });



        //手机号码
        $('#telnum').editable({
            type: 'text',
            pk: primaryKey,
            name: 'selfphone',
            title: '请输入手机号码'
        });

        //政治面貌
        $('#zzmm').editable({
            showbuttons: false,
            name:"politicalstatus"
        });

        //班级
        if(typeof(class_list) == "undefined")
        {
            var class_list = [
                {id:"1",text:'1'},
                {id:"2",text:'2'},
                {id:"3",text:'3'},
                {id:"4",text:'4'}
            ];
        }

        //家庭住址
        $('#jtzz').editable({
            showbuttons: 'bottom',
            name:"address"
        });

        //直系亲属
        // 王朝月(母亲), 18556224587
        // $('#tr_family [name="family[]"]').editable({
        //     url: '/post',
        //     value: {
        //         name: "张晓明",
        //         relation: "父亲",
        //         telnum: "18856224587"
        //     },
        //     validate: function (value) {
        //         if (value.city == '') return '请输入名字!';
        //     },
        //     display: function (value) {
        //         if (!value) {
        //             $(this).empty();
        //             return;
        //         }
        //         var html = '<b>' + $('<div>').text(value.name).html() + '</b>, ' + $('<div>').text(value.relation).html() + ',' + $('<div>').text(value.telnum).html();
        //         $(this).html(html);
        //     }
        // });

        //添加直系亲属
        // $("#tr_family .fa-plus").parent().click(function(){
        //     var aDom = $('<a href="#" name="family[]" data-type="family" data-pk="1" data-original-title="请输入直系亲属的信息"></a>');
        //     var td = $("#tr_family td").eq(1);
        //     var aTotal = $("#tr_family td a").length;
        //     if(aTotal==0)
        //     {
        //         td.append(aDom);

        //     }
        //     else 
        //     {
        //         td.append($("<br/>")).append(aDom);
        //     }

        //     aDom.editable({
        //         url: '/post',
        //         value: {
        //             name: "",
        //             relation: "",
        //             telnum: ""
        //         },
        //         validate: function (value) {
        //             if (value.city == '') return '请输入名字!';
        //         },
        //         display: function (value) {
        //             if (!value) {
        //                 $(this).empty();
        //                 return;
        //             }
        //             var html = '<b>' + $('<div>').text(value.name).html() + '</b>, ' + $('<div>').text(value.relation).html() + ',' + $('<div>').text(value.telnum).html();
        //             $(this).html(html);
        //         }
        //     });
        //     setTimeout(function() {
        //         $("#tr_family td").eq(1).children("a")[2].click();
        //     }, 100);
        // });

        //直系亲属重大事项记录等等..
        
       
        //直系亲属
        $('#family').editable({
            showbuttons: 'bottom',
            name :"relativephone"
        });

        //重大事项记录
        $('#zdssjl').editable({
            showbuttons: 'bottom',
            name :"event"
        });

        //请假记录
        $('#qjjl').editable({
            showbuttons: 'bottom',
            name :"leaverecord"
        });

        //担任学生干部情况
        $('#drxsgbqk').editable({
            showbuttons: 'bottom',
            name :"studentcadre"
        });
        
        //违纪处分
        $('#wjcf').editable({
            showbuttons: 'bottom',
            name :"punishment"
        });

        //获奖情况
        $('#hjqk').editable({
            showbuttons: 'bottom',
            name :"award"
        });

        //入党积极分子动态记录
        $('#rdjjfzdtjl').editable({
            showbuttons: 'bottom',
            name :"activist"
        });

        //备注
        $('#beizhu').editable({
            showbuttons: 'bottom',
            name :"remark"
        });


    }

    return {
        //main function to initiate the module
        init: function (primaryKey) {

            // inii ajax simulation
            initAjaxMock();

            // init editable elements
            initEditables(primaryKey);
            
            // init editable toggler
            $('#enable').click(function () {
                $('#user .editable').editable('toggleDisabled');
            });

            // init 
            $('#inline').on('change', function (e) {
                if ($(this).is(':checked')) {
                    window.location.href = 'index.php?app=Manage&ctr=Student&act=details&id='+primaryKey+'&mode=inline';
                } else {
                    window.location.href = 'index.php?app=Manage&ctr=Student&act=details&id='+primaryKey;
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

}()