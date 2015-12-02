<?php

namespace User\Controller;
use Think\Controller;

header("Content-type: text/html; charset=utf-8");

class CommonController extends Controller {

	public function _initialize() {

		if (APP_DEBUG == true) {
    		return;
    	}else {
    		$uid = session('user_uid');
            if(!isset($uid)) { //判断是否有uid
                $error = array('status' => 'error', 'msg' => '没有登录');
                $this->ajaxReturn($error);
            }elseif ($uid != I('uid')) {
                $error = array('status' => 'error', 'msg' => '数据上传出错');
                $this->ajaxReturn($error);
            }
    	}
    	
    }

}

?>