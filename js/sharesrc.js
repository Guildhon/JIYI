if(typeof $ == "undefined")
    throw new Error("shareLife requires jQuery");
var share={
    base_url: "http://119.29.251.126/JIYI/",
    debug: true
};
/*share.log = function (msg) {
    if(this.debug) {
        console.log(msg);
    }
};*/
share.post = function(url, data, success_handler, error_handler) {
    $.ajax({ 
        type: "POST",   
        url: url,
        data: data,
        dataType: "json",
        cache: false,
         xhrFields: {
                    withCredentials: true
            },
        success: function(resJson){
        console.log(resJson);
        if(resJson.code == 20000){  //20000用户正确
            success_handler? success_handler(resJson) : '';
        } else if(resJson.code == 40000) {  //40000用户不正确
            error_handler? error_handler(resJson) : '';
        }else if(resJson.code == 40001) {
                alert(resJson.response);
                return true;
        } 
        },
        error: function(jqXHR, textStatus, error){
            //share.log('发生错误：' + jqXHR.status + ':'+ jqXHR.readyState +': ' + textStatus + ': ' +error);
            alert("网络发生错误了啦！");
            return false;
        }
        });
};
share.get = function(url, data, success_handler, error_handler,complete_handler) {
    // if(data && typeof data === 'object') {
    //     for(var key in data) {
    //         if(data[key]) {
    //             url += '/' + key + '/' + data[key];
    //         }
    //     }
    // }
    $.ajax({
        type: "GET",
        url: url,
        dataType: "json",
        xhrFields: {
                    withCredentials: true
            },
        success: function(resJson){
            if(resJson.code == 20000){
                success_handler? success_handler(resJson.response) : '';
                return true;
            } else if(resJson.code == 40000) {
                console.log(resJson);
                error_handler? error_handler(resJson.response) : '';
                return true;
            } else if(resJson.code == 40001) {
                alert(resJson.response);
                return true;
            } 
        },
        error: function(jqXHR, textStatus, error){
            alert("有错");
            return true;
        },
    });
};


var form={
    base_url: "http://119.29.251.126/JIYI/",
    debug: true
};
form.log = function (msg) {
    if(this.debug) {
        console.log(msg);
    }
};
form.post = function(url, data, success_handler, error_handler) {
    $.ajax({ 
        type: "POST",   
        url: url,
        data: data,
        dataType: "json",
         xhrFields: {
                    withCredentials: true
            },
        contentType: false,  
        processData: false,
        success: function(resJson){
        console.log(resJson);
        if(resJson.code == 20000){  //20000用户正确
            success_handler? success_handler(resJson) : '';
        } else if(resJson.code == 40000) {  //40000用户不正确
            alert(resJson.msg);
            
        }else if(resJson.code == 40001) {
                alert(resJson.response);
                return true;
        } 
        },
        error: function(jqXHR, textStatus, error){
            form.log('发生错误：' + jqXHR.status + ':'+ jqXHR.readyState +': ' + textStatus + ': ' +error);
            alert("网络发生错误了啦");
            return false;
        }
        });
};
form.get = function(url, data, success_handler, error_handler,complete_handler) {
    // if(data && typeof data === 'object') {
    //     for(var key in data) {
    //         if(data[key]) {
    //             url += '/' + key + '/' + data[key];
    //         }
    //     }
    // }
    $.ajax({
        type: "GET",
        url: url,
        dataType: "json",
        xhrFields: {
                    withCredentials: true
            },
        success: function(resJson){
            if(resJson.code == 20000){
                success_handler? success_handler(resJson.response) : '';
                return true;
            } else if(resJson.code == 40000) {
                console.log(resJson);
                error_handler? error_handler(resJson.response) : '';
                return true;
            }else if(resJson.code == 40001) {
                alert(resJson.response);
                return true;
            } 
        },
        error: function(jqXHR, textStatus, error){
            alert("有错");
            return true;
        },
    });
};