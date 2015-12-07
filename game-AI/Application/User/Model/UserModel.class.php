<?php

namespace User\Model;
use Think\Model;

class UserModel extends Model {

	protected $_validate = array(
		array('email', 'email', 'email is empty', 1, 'unique', 3),
		array('nickname', 'require', 'nickname is empty', 1),
		array('password', '6,12', '密码长度6-12', 1, 'length', 3),
		array('repassword', 'password', 'confirm password failed', 1, 'confirm'),
		array('school', 'require', 'school id empty', 1),
		array('studentid', 'require', 'studentid is empty', 1),
		array('name', 'require', 'name is empty', 1),
		array('entrance', 'require', 'entrance is empty', 1),
		);

	protected $_auto = array(
		array('entrance', '2012'),
		array('school', 'njupt'),
		array('salt', 'encrySalt', 3, 'function'),
		);

	public function checkPassword($email, $password) {
		$map = array();
		if (empty($email)) {
			return -1;
		}else {
			$map['email'] = $email;
		}
		$user = $this->where($map)->find();
		if ($user['password'] == sha1($password . $user['salt'])) {
			return $user;
		}
		return -1;
	}

	public function userFind($uid) {
		return $this->where(array('id' => $uid))->find();
		
	}

	public function getAllUser($lastid, $page) {
		$count = $this->count();
		$count = $count / C('PAGE_NUM');
		//$count = 2.05;
		if (!is_int($count)) {
			$count = intval($count) + 1;
		}
		if (!$lastid && !$page) {
			$limit = C('PAGE_NUM');
		}elseif ($lastid && !$page) {
			$limit = ($lastid - C('PAGE_NUM')) . ',' . C('PAGE_NUM');
		}elseif (!$lastid && $page) {
			$limit = (($page - 1) * C('PAGE_NUM')) . ',' . C('PAGE_NUM');
		}elseif($page && $lastid) {
			return -1;
		}
		$user = $this->limit($limit)->order('score desc')->field('password,salt', true)->select();
		if (!$user) {
			return -1;
		}
		return [$user, $count];

	}

}


?>