$(function(){
    $.ajax({
        url:"/api/members",
        type:"get",
        success:function(result){

            for( let i = 0; i < result.length; i++ ) {

                const data = result[i];

                let user_type = "";
                if(data.ui_user_type == 1) user_type = "관리자";
                if(data.ui_user_type == 2) user_type = "정회원";
                if(data.ui_user_type == 3) user_type = "준회원";
                if(data.ui_user_type == 4) user_type = "가입대기";
                
                let pf_img = "";
                if(data.ui_profile_img == '' || data.profile_img == null)
                	pf_img = "http://placehold.it/30x30"
                
                let template = 
                    '<tr data-user-seq="' + data.ui_seq + '">' +
                            '<td><input type="checkbox" class="userchk"></td>' +
                            '<td>' + data.ui_id + '</td>' +
                            '<td><button class="pwdChange">변경</button></td>' +
                            '<td>' + data.ui_name + '</td>' +
                            '<td>' + data.ui_email + '</td>' +
                            '<td>' + data.ui_user_type + '</td>' +
                            '<td>' + data.ui_user_grade + '</td>' +
                            '<td>' + data.ui_blog + '</td>' +
                            '<td><img src="' + data.ui_profile_img + '"></td>' +
                            '<td>' +
                                '<span>' +
                                + data.ui_introduce + 
                                '</span>' +
                            '</td>' +
                            '<td>' +
                                '<button class="modify">수정</button>' +
                            '</td>' +
                            '<td>' +
                                '<button class="delete">삭제</button>' +
                            '</td>' +
                        '</tr>'

                        $(".members tbody").append(template);
            }
            $(".delete").click(function(){
            	let seq = $(this).parent().parent().attr("data-user-seq");
            	if(confirm("삭제하시겠습니까?")){
            		deleteMember(seq);
            	}
            })
            $(".modify").click(function(){
            	let seq = $(this).parent().parent().attr("data-user-seq");
            	$(".member_regist_modal").addClass("open");
            	$(".member_regist_modal h1").html("사용자 수정");
            	$("#save").css("display", "none");
            	$("#modify").css("display", "initial");
            	let id = $(this).parent().parent().find(".id").html();
            	let name = $(this).parent().parent().find(".name").html();
            	let email = $(this).parent().parent().find(".email").html();
            	
            	$("#user_id").val(id);
            	$("#user_name").val(name);
            	$("#user_email").val(email);
            })
        },
        error:function(){
            alert("에러");
        }
    })

    $("#add_member").click(function(){
        $(".member_regist_modal").addClass("open");
        $(".member_regist_modal").addClass("");
        $(".member_regist_modal").addClass("open");
        $(".member_regist_modal").addClass("interval");
    })

    $("#save").click(function(){
    	if($("#user_id").val() == '') {alert('아이디를 입력하세요'); return;}
    	if($("#user_pwd").val() == '') {alert('비밀번호를 입력하세요'); return;}
    	if($("#user_name").val() == '') {alert('사용자명을 입력하세요'); return;}
    	if($("#user_email").val() == '') {alert('이메일을 입력하세요'); return;}

        let data = {

            ui_id : $("#user_id").val(),
            ui_pwd : $("#user_pwd").val(),
            ui_name : $("#user_name").val(),
            ui_email : $("user_email").val()

        }

        $.ajax({
            url:"/api/add_member",
            type:"post",
            contentType:"application/json"
            data:JSON.stringify(data),
            success:function(data){
            	if(data.result == 'failed'){
            		alert(data.message);
            	}
            	else{
            		alert(data.message);
            		location.reload();
            	//	$(".member_regist_modal").removeClass("open");
            	}
            	$(".member_regist_modal").removeClass("open");

            },
            error:function(){
                alert("에러");
            }
        })
    })

    $("#cancel").click(function(){
    	$(".member_regist_modal").removeClass("open");
    	$("#user_id").val();
    	$("#user_pwd").val();
    	$("#user_name").val();
    	$("#user_email").val();
    })
    
    function deleteMember(seq){
    	$.ajax({
    		url:"/api/delete_member",
    		type:"post",
    		contentType:"application/json",
    		data:JSON.stringify({ui_seq:seq}),
    		success:function(){
    			alert("삭제되었습니다.");
    			location.reload();
    		},
    		error:function(){
    			alert("에러");
    		}
    	})
    }
})