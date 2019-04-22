/**
 * Created by tinyjian on 17/3/3.
 */


function ajaxGet(url, data, callback, syn, ajaxParam) {
    syn = (syn === true) ? true : false;
    var def = {
        url : url,
        method: 'GET',
        dataType : 'json',
        async : !syn,
        data : data,
        success: callback,
        error: ajaxErrorHandler
    };
    if (typeof ajaxParam == 'object' && ajaxParam) {
        def = $.extend(def, ajaxParam);
    }
    $.ajax(def);
}


function ajaxPost(url, data, callback, syn, ajaxParam) {
    syn = (syn === true) ? true : false;
    var def = {
        url : url,
        method: 'POST',
        dataType : 'json',
        async : !syn,
        data : data,
        success: callback,
        error: ajaxErrorHandler
    };
    if (typeof ajaxParam == 'object' && ajaxParam) {
        def = $.extend(def, ajaxParam);
    }
    $.ajax(def);
}

function ajaxErrorHandler(jqXHR, textStatus, errorThrown) {

}

function buildQueryString(data) {
    var str = '';
    for(var e in data) {
        if (str.length > 0) {
            str += '&';
        }
        str += e + '=' + data[e];
    }
    return str;
}

/**
 * 如果对象的函数确实存在,则调用
 * @param obj
 * @param key
 * @param the
 * @param args
 */
function doOrDont (obj, key, the, args) {
    if (!obj || !key) {
        return ;
    } else if (typeof obj[key] == 'function') {
        return obj[key].apply(the, args);
    }
}

