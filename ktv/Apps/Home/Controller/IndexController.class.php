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

    public function doReg(){
        $User = D('User');
        $User -> select();

        $email = I('post.email');
        $tel = I('post.tel');

        $condition['user_email'] = $email;
        $condition['user_tel'] = $tel;
        $condition['_logic'] = 'AND';

        $search = $User->where($condition)->find();

        if(!$search){
            $data['user_email'] = $email;
            $data['user_tel'] = $tel;
            $data['user_pass'] = I('post.pass');

            $res = $User -> data($data) -> add();

            if($res){
                $res['status'] = "success";

                $this -> ajaxReturn($res);
            }
        } else {
            $this -> ajaxReturn($condition);
        }

    }


}