<?php

namespace User\Controller;
use Think\Controller;

class IndexController extends Controller {
    
    public $user;
	public $battle;

    public function _initialize() {
    	$this->user = D('User');
    	$this->file = D('UserFilecode');
		$this->battle = new UserBattleModel();
	}

	public function playGame($uid, $oid, $result) {
		if ($result == 1) { //uid赢了
			$uscore = $this->calcGame($uid, $oid, 1);
			$oscore = $this->calcGame($oid, $uid, 0);
		}elseif ($result == 0) {//oid赢了,uid输了
			$uscore = $this->calcGame($uid, $oid, 0);
			$oscore = $this->calcGame($oid, $uid, 1);
		}else {//平 result=0.5
			$uscore = $this->calcGame($uid, $oid, 0.5);
			$oscore = $this->calcGame($oid, $uid, 0.5);
		}

		$uUpdate = $this->user->where(array('id' => $uid))->setField(array('score' => $uscore));
		$oUpdate = $this->user->where(array('id' => $oid))->setField(array('score' => $oscore));

		return true;
	}

	public function calcGame($uid, $oid, $result) {
		$user = $this->user->userFind($uid);
		$opposite = $this->user->userFind($oid);
		if (!$user || !$opposite) {
			return false;
		}
		$eUser = 1 / (1 + pow(10, ($opposite['score'] - $user['score']) / 400));
		$rUser = $user['score'] + C('CALC_K') * ($result - $eUser);
		return $rUser;
	}

	public function gameResult() {
		$uid = I('uid');
		$oid = I('oid');
		$ufile = I('ufile');
		$ofile = I('ofile');
		$result = I('result');
		$begintime = I('begintime');
		$overtime = I('overtime');
		$process = I('process'); //文件路径

		$game = array(
			'uid' => $uid,
			//......
		);

		$this->battle->saveGameResult($game);
	}

}