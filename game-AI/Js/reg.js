define(['jquery','common'],function($,common){
	return {
		reg : function(){
			$("#reg-btn").on("click",function(){
				var email = $("#inputEmail").val(),
					nickname = $("#inputNickname").val(),
					password = $("#inputPassword").val(),
					school = $("#inputSchool").val(),
					studentnumber = $("#inputStudentNum").val(),
					name = $("#inputName").val(),
					year = $("#inputYear").val(),
					validate = $("#inputValidate").val();

				// 信息是否完整
				if(email && nickname && password && school && 
						studentnumber && name && year && validate){
					$.ajax({
						type : 'post',
						dataType : 'json',
						url : '',
						data : {
							'email' : email,
							'nickname' : nickname,
							'password' : password,
							'school' : school,
							'studentnumber' : studentnumber,
							'name' : name,
							'year' : year
						},
						success : function(){
							window.location.href = "homepage/homepage.html";
						},
						error : function(){
							console.log('请求失败');
						}
					});
				} else {
					$("form").find("input").each(function(){
						if($(this).val()){
							$(this).css("border-color","green");
						} else {
							$(this).css("border-color","red");
						}
					});
					alert("请补全信息");
				}
			});
		}
	};
});