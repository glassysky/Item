<?php

namespace User\Model;
use Think\Model;

/**
* 
*/
class UserFilecodeModel extends Model {

	public function saveFile($fileData, $fileUid, $fileType, $fileSize, $fileNum) {
		$save = array(
			'uid' => $fileUid,
			'content' => $fileData,
			'createtime' => microtime(true) * 10000,
			'filenum' => $fileNum,
			'filetype' => $fileType,
			);
		$insertId = $this->data($save)->add();
		if ($insertId) {
			return $insertId;
			
		}
		return -1;
	}

	public function findFile($filenum, $uid) {
		$file = $this->where(array('filenum' => $filenum, 'uid' => $uid))->find();
		if ($file) {
			return $file;
		}
		return -1;
	}

	public function getUserFile($uid) {
		// $uid = 1;
		$files = $this->where(array('uid' => $uid))->select();
		if (!$files) {
			return -1;
		}
		return $files;
	}

}

?>