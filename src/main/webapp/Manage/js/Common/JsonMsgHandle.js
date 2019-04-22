/**
 * @params object jsonObj
 * @params function func 
 */
function JsonMsgHandle(jsonObj, func)
{
    //如果状态是ok, 返回data
    //如果状态是error, 则看errorcode是否有值,如果没有值,则弹框(msg不为空的话)并返回null,如果有有值,则返回errorcode(整数).

    if(typeof(jsonObj) == undefined || jsonObj == null || typeof(jsonObj.status) == undefined)
    {
        alert("请求数据出错!");
        return ;
    }

    switch(jsonObj.code)
    {
        case 0:
            break;
        case 1:
            if(jsonObj.status != "")
            {
                alert(jsonObj.status);
            }
            break;
        default:
            var data = null;
            break ;
    }
    if(typeof func == "function")
    {
        func(jsonObj.data);
    }
    return jsonObj.data;

}