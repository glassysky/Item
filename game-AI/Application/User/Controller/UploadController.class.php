<?php

namespace User\Controller;
use Think\Controller;
use Home\Model\UserBattleModel;

/**
* 
*/
class UploadController extends CommonController {

	public $file;
	
	public function _initialize() {
		$this->file = D('UserFilecode');
		$this->user = D('User');
		$this->battle = new UserBattleModel();
	}

	public function userUpload() {
		
		if (is_uploaded_file($_FILES['file']['tmp_name'])) {
			$file = $_FILES['file'];

			$fp = fopen($file['tmp_name'], 'rb');
			if (!$fp) {
				$this->ajaxReturn(array('status' => 'error', 'msg' => '上传文件失败'));
			}
			$fileSize = filesize($file['tmp_name']);
			$contents = fread($fp, $fileSize);
			
			if (!empty($contents)) {
			
				$fileData = addslashes($contents);

				$fileType = trim(I('type'));
				$fileUid = session('user_uid');
				$fileNum = sha1_file($file['tmp_name']);
				
				fclose($fp);
				unlink($file['tmp_name']);
				
				$add = $this->file->saveFile($fileData, $fileUid, $fileType, $fileSize, $fileNum);
				if ($add != -1) {
					$this->ajaxReturn(array('status' => 'success', 'msg' => ''));
				}
			}

		}
		$this->ajaxReturn(array('status' => 'error', 'msg' => '非法上传文件'));

	}

	public function getDownload() {
		$uid = session('user_uid');
		$id = I('id');
		$file = $this->file->findFile($id, $uid);
		if ($file == -1) {
			$this->ajaxReturn(array('status' => 'error', 'msg' => '非法下载文件'));
		}
		header("Content-type: application/octet-stream");
		header("Accept-Ranges: bytes");
		header("Accept-Length: " . $file['filesize']);
		header("Content-Disposition: attachment; filename=" . $file['filenum'] . "." . $file['filetype']);
		echo $file['content'];
		die;
	}

	public function getFile() {
		$uid = session('user_uid');
		$uid = 1;
		$files = $this->file->getUserFile($uid);
		if ($files == -1) {
			$this->ajaxReturn(array('status' => 'error', 'msg' => '代码版本为空'));
		}

		$this->ajaxReturn(array('status' => 'success', 'msg' => $files));
	}

	/*
	用户的对战列表
	 */
	public function getBattles() {
		$uid = session('user_uid');
		$lastid = I('lastid');
		$page = I('page');
		$battles = $this->battle->getUserBattles($uid, $lastid, $page);
		if ($battles == -1) {
			$this->ajaxReturn(array('status' => 'error', 'msg' => ''));
		}
		$this->ajaxReturn(array('status' => 'success', 'msg' => array('battles' => $battles[0], 'count' => $battles[1])));
	}

}

?>