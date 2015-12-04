<?php

namespace User\Controller;
use Think\Controller;

header("Content-type: text/html; charset=utf-8");

class LoginController extends Controller {
    
    public $model;

    public function _initialize() {
    	$this->model = D('User');

	}

    //验证码
    public function verify(){
        ob_end_clean();
        $config = array(
            'length' => 4, // 验证码位数
            'useNoise' => false, // 关闭验证码杂点
        );
        $verify = new \Think\Verify($config);
        $verify->entry();
    }

    public function register(){
        $code = I('validate');
        $verify=new \Think\Verify();
        if(!$verify->check($code)) {
            $this->ajaxReturn(array('status' => 'error', 'msg' => '验证码错位'));
        }
        
        // $_POST = [
        //     'email' => '1364140672@qq.com',
        //     'password' => '1364140672',
        //     'repassword' => '1364140672',
        //     'nickname' => 'tingyuge',
        //     'school' => 'njupt',
        //     'studentid' => '66666',
        //     'name' => 'tingyuge',
        //     'entrance' => '2013',
        // ];

        if ($this->model->create()) {
            $this->model->password = sha1($this->model->password . $this->model->salt);
            
            $result = $this->model->add();
    		if ($result) {
                $this->ajaxReturn(array('status' => 'success', 'msg' => ''));
    			
    		}
    	}else {
            $this->ajaxReturn(array('status' => 'error', 'msg' => $this->model->getError()));
            
        }
    }

    public function login($email, $password) {
        $result = $this->model->checkPassword($email, $password);
        if (is_array($result) && $result['id'] > 0) {
            session('user_uid', $result['id']);
            session('user_nickname', $result['nickname']);
            
            $this->ajaxReturn(array('status' => 'success', 'msg' => ''));
        }else {
            $this->ajaxReturn(array('status' => 'error', 'msg' => '帐号或密码错误'));
        }
    }

    public function loginStatus() {
        if (session('user_uid')) {
            $this->ajaxReturn(array('status' => 'success', 'msg' => array('uid' => session('user_uid'), 'nickname' => session('user_nickname'))));
        }
        return $this->ajaxReturn(array('status' => 'error', 'msg' => ''));
    }

    public function logout() {
        session(null);
        session_unset();
        session_destroy();
        $logout = array('status' => 'success', 'msg' => '');
        $this->ajaxReturn($logout);
    }

}