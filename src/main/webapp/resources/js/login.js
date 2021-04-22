$(function(){
    $("#login_btn").click(function(){
        if($("#user_id").val() == ""){
           alert("아이디를 입력하세요.");
           return;
        }
        
        if($("#user_pwd").val() == ""){
           alert("비밀번호를 입력하세요.");
           return;
        }
    
        let loginData = {
            id:$("#user_id").val(),
            pwd:$("#user_pwd").val()
        }
        
        $.ajax({
            url:"/api/login",
            type:"post",
            contentType:"application/json",
            data:JSON.stringify(loginData),
            success:function(result) {
                if( result.status == 'success' ) {
                    location.href='/dashboard';
                } else {
                    alert(result.message);
                }
            },
            error:function(){
                alert("에러");
            }
        })
    })
})