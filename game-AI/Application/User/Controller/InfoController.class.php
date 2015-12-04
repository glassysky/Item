<?php

namespace User\Controller;
use Think\Controller;

/**
* 
*/
class InfoController extends Controller {
	
	protected $user;

	public function _initialize() {
		$this->user = D('User');

	}

	public function getUserInfo() {
		$uid = session('user_uid');
		$info = $this->user->userFind($uid);
		if ($info == -1) {
			return $this->ajaxReturn(array('status' => 'error', 'msg' => ''));
		}
		$this->ajaxReturn(array('status' => 'success', 'msg' => $info));
	}

	
}

?>