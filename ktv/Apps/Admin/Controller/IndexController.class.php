<?php
namespace Admin\Controller;
use Think\Controller;
class IndexController extends Controller {
    public function index(){
    	session('[start]');
    	session("location","welcome");
    	$this->display('welcome');
    }

    public function userList(){
    	$location = "userList";
    	session_start();
    	session("location",$location);
        $this->display();
    }

    public function getUserList(){
        $User = M('User');
        $condition['ID'] = 24;
        // $search = $User->getField('ID,user_email,user_tel',10);
        $search = $User->limit(10)->select();
        if($User){
            $res['status'] = "success";
            $res['msg'] = $search;
            $this->ajaxReturn($res);
        }
    }

    public function newsList(){
    	session_start();
    	session("location","newsList");
    	$this->display();
    }

    public function activityList(){
    	session_start();
    	session("location","activityList");
    	$this->display();
    }

}