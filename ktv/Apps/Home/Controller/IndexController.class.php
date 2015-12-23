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
        header("Content-Type:text/html; charset=utf-8");
        $User = M('User');

        $email = I('post.email');
        $phone = I('post.phone');

        $condition['user_email'] = $email;
        $condition['user_phone'] = $phone;
        $condition['_logic'] = "AND";

        $search = $User->where($condition)->find();

        if(!$search){
            $data['user_email'] = $email;
            $data['user_phone'] = $email;
            $data['user_tel'] = $email;
            $data['user_level'] = 1;
            $data['user_pass'] = I('post.pass');

            $res = $User -> data($data) -> add();

            if($res){
                $callback['status'] = "success";

                session_start();
                session("email",$email);
                $this -> ajaxReturn($callback);
            } else {
                $callback['status'] = "failed";
                $callback['msg'] = "注册失败";

                $this -> ajaxReturn($callback);
            }
        } else {
            $callback['status'] = "failed";
            $callback['msg'] = "此邮箱已注册过";
            $this -> ajaxReturn($callback);
        }

    }

    public function doLog(){
        header("Content-Type:text/html; charset=utf-8");
        $User = M('User');
        $email = I('post.email');

        $condition['user_email'] = $email;

        $vip = $User->where($condition)->find();
        if($vip){
            if($vip['user_pass'] == I('post.pass')){
                $res['status'] = "success";
                session_start();
                session("email",$email);
                $this->ajaxReturn($res);
            } else {
                $res['status'] = "failed";
                $res['msg'] = "密码错误";
                $this->ajaxReturn($res);
            }
        } else {
            $res['status'] = "failed";
            $res['msg'] = "此邮箱还未注册";
            $this->ajaxReturn($res);
        }
    }

    public function logOut(){
        session_destroy();
    }


}