<?php
namespace Home\Controller;
use Think\Controller;
class IndexController extends Controller {
    public function index(){
        $this->display();
    }

    public function activity(){
        $this->display();
    }

    public function news(){
        $this->display();
    }

    public function log(){
    	$this->display();
    }

    public function reg(){
    	$this->display();
    }


}