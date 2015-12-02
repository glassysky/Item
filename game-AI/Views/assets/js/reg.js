define(['jquery','common'],function($,common){

	$("#checkpic").on("click",function(){
		$("#checkpic").src = "";
	});

	return {
		reg : function(){

			check();
			vertifyImg();

			$("#reg-btn").on("click",function(){
				var email = $("#inputEmail").val(),
					nickname = $("#inputNickname").val(),
					password = $("#inputPassword").val(),
					school = $("#inputSchool").val(),
					studentnumber = $("#inputStudentNum").val(),
					name = $("#inputName").val(),
					year = $("#inputYear").val(),
					validate = $("#inputValidate").val(),
					secondPlayer = $("#inputSecond").val(),
					thirdPlayer = $("#inputThird").val(),
					repassword = $("#repeatPassword").val();

				// 信息是否完整
				if(email && nickname && password && school && 
						studentnumber && name && year && validate){
					$.ajax({
						type : 'post',
						dataType : 'json',
						url : '/User/Login/register',
						data : {
							'email' : email,
							'nickname' : nickname,
							'password' : password,
							'repassword' : repassword,
							'school' : school,
							'studentid' : studentnumber,
							'name' : name,
							'entrance' : year,
							'secondPlayer' : secondPlayer,
							'thirdPlayer' : thirdPlayer,
							'validate' : validate
						},
						success : function(callback){
							if(callback.status == "success"){
								alert("注册成功,请登录");
								window.location.href = "login.html";
							} else {
								alert(callback.msg);
							}
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
							if($(this).attr("data-name") == "second" || $(this).attr("data-name") == "third"){
								$(this).css("border-color","green");
							} else {
								$(this).css("border-color","red");
							}
						}
					});
					alert("请补全信息");
				}
			});

			function check(){
				var checked = false;
				$("form").find("input").each(function(){
					$(this).blur(function(){
						checked = common.check($(this).attr("data-name"),$(this).val());
						if(checked){
							$(this).css("border-color","green");
						} else {
							$(this).css("border-color","red");
						}
					});
				});
			}

			function vertifyImg(){
				$("#checkpic").on("click",function(){
					$("#checkpic").attr("src","/User/Login/verify");
				});
			}
		}
	};
});