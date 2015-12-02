<?php

namespace Home\Model;
use Think\Model;

/**
* 
*/
class UserBattleModel extends Model {

	protected $tableName = 'user_battle';

	public function getAllBattles($lastid) {
		if (!$lastid) {
			$limit = C('PAGE_NUM');
		}else {
			$limit = ($lastid - C('PAGE_NUM')) . ',' . C('PAGE_NUM');
		}
		$user = M('user');
		$count = $this->count();
		$battle = $this->limit($limit)->order('id desc')->select();
		if ($battle) {
			foreach ($battle as &$bv) {
				$bv['uname'] = $user->where(array('id' => $bv['uid']))->getField('nickname');
				$bv['oname'] = $user->where(array('id' => $bv['oid']))->getField('nickname');
			}
		}
		return [$battle, $count];
	}

	public function saveGameResult($game) {
		$result = $this->data($game)->add();
		if ($result) {
			return $result;
		}
		return -1;
	}

	public function gameFind($id) {
		$game = $this->where(array('id' => $id))->find();
		if ($game) {
			return $game;
		}
		return -1;
	}

	public function getUserBattles($uid, $lastid, $page, $type = 0) {

		if (!$lastid && !$page) {
			$limit = C('PAGE_NUM');
		}elseif ($lastid && !$page) {
			$limit = ($lastid - C('PAGE_NUM')) . ',' . C('PAGE_NUM');
		}elseif (!$lastid && $page) {
			$limit = (($page - 1) * C('PAGE_NUM')) . ',' . C('PAGE_NUM');
		}elseif($page && $lastid) {
			return -1;
		}
		switch ($type) {
			case 0:
				$map['uid'] = $uid;
				$map['oid'] = $uid;
				$map['_logic'] = 'OR';
				$battles = $this->where($map)->order('begintime desc')->select();
				$count = $this->where($map)->count();
				$count = $count / C('PAGE_NUM');
				if (!is_int($count)) {
					$count++;
				}
				break;
			
			case 1: //主动发起
				$battles = $this->where(array('uid' => $uid))->order('begintime desc')->select();
				$count = $this->where(array('oid' => $uid))->count();
				$count = $count / C('PAGE_NUM');
				if (!is_int($count)) {
					$count++;
				}
				break;

			default: //被动发起
				$battles = $this->where(array('oid' => $uid))->order('begintime desc')->select();
				$count = $this->where(array('oid' => $uid))->count();
				$count = $count / C('PAGE_NUM');
				if (!is_int($count)) {
					$count++;
				}
				break;
		}
		
		if (!$battles) {
			return -1;
		}
		return [$battles, $count];
	}

}

?>