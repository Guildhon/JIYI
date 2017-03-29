(function() {
	var userName = $.cookie("user_nickname");
	if(userName) {
		$("#userName").html(userName);
	}else{
        window.location.href="login.html";
    }
})();
$("#logout").click(function() {
    share.get(share.base_url+'Home/User/logout',null,function(res) {
        swal({
            title: "退出成功!",
            text: "",
            type: "success",
            confirmButtonText: "确定",
            closeOnConfirm: false
        },function (){
             $.cookie('user_nickname',null,{
                path: '/'
            });
             $.cookie('user_phone',null,{
                path: '/'
            });
        	window.location.href= "login.html";
        });
    },function(err) {
        $.cookie('user_nickname',null,{
            path: '/'
        });
    });
});
