<?php

namespace Home\Controller;
use Think\Controller;
use User\Model\UserModel;

class IndexController extends Controller {
    
    protected $battle;

    public function _initialize() {
        $this->battle = D('UserBattle');
        $this->user = new UserModel();
    }

    public function index(){
        // echo microtime(true);
    }

    /*
    所有用户的战役对阵
     */
    public function getBattles() {
        $lastid = I('lastid');
        $page = I('page');
        $battles = $this->battle->getAllBattles($lastid, $page);
        if ($battles == -1) {
            $this->ajaxReturn(array('status' => 'error', 'msg' => ''));
        }
        $this->ajaxReturn(array('status' => 'success', 'msg' => array('list' => $battles[0], 'count' => $battles[1], 'page' => $page)));
    }

    public function getProcess() {
        $id = I('id');
        $type = I('type');
        $game = $this->battle->gameFind($id);
        if ($game == -1 || !is_file($game['process'] || !file_exists($game['process']))) {
            $this->ajaxReturn(array('status' => 'error', 'msg' => '没有找到'));
        }
        switch ($type) {
            case 'web':

                break;
            
            default:
            
                break;
        }
        $fp = fopen($game['process'], 'r');
        $contents = fread($fp, filesize($game['process']));
        if (empty($contents)) {
            $this->ajaxReturn(array('status' => 'error', 'msg' => '内容为空'));
        }
        $this->ajaxReturn(array('status' => 'success', 'msg' => $contents));

    }

    /*
    用户排行榜
     */
    public function userRank() {
        $lastid = I('lastid');
        $page = I('page');
        $rank = $this->user->getAllUser($lastid, $page);
        if ($rank == -1) {
            $this->ajaxReturn(array('status' => 'error', 'msg' => ''));
        }
        $this->ajaxReturn(array('status' => 'success', 'msg' => array('rank' => $rank[0], 'count' => $rank[1], 'page' => $page)));
    }

}