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