define(['jquery'],function(){
	return {
		reg : function(){
			$("#reg-btn").on("click",function(){
				var email = $("inputEmail").val(),
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
						datatype : 'json',
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

						},
						error : function(){
							console.log('请求失败');
						}
					});
				} else {
					console.log('信息不完整');
				}
			});
		}
	};
});