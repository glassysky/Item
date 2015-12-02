<?php

function p($arr) {
    echo "<pre>";
    print_r($arr);
}

function sthumb($path) {

	$image = new \Think\Image();
    $image->open($path);

    $result = explode('/', $path);
    $bname = '128_' . $result[count($result)-1];
    
    // 生成一个缩放后填充大小128*128的缩略图并保存为thumb.jpg
    $image->thumb(128, 128, \Think\Image::IMAGE_THUMB_FIXED)->save(C('THUMB_ROOT_DIR') . $bname);
    // echo "string";
    return C('THUMB_ROOT_DIR') . $bname;

}

function bthumb($path) {

    $image = new \Think\Image();
    $image->open($path);

    $result = explode('/', $path);
    $bname = '256_' . $result[count($result)-1];
    
    // 生成一个缩放后填充大小256*256的缩略图并保存为thumb.jpg
    $image->thumb(256, 256, \Think\Image::IMAGE_THUMB_FIXED)->save(C('THUMB_ROOT_DIR') . $bname);
    // echo "string";
    return C('THUMB_ROOT_DIR') . $bname;
}

function slidethumb($path) {

    $image = new \Think\Image();
    $image->open($path);

    $result = explode('/', $path);
    $bname = 'slide_' . $result[count($result)-1];
    
    // 生成一个缩放后填充大小256*256的缩略图并保存为thumb.jpg
    $image->thumb(480, 800, \Think\Image::IMAGE_THUMB_FIXED)->save(C('THUMB_ROOT_DIR') . $bname);
    // echo "string";
    return C('THUMB_ROOT_DIR') . $bname;
}

function get_all_header() {
    $headers = array();
    foreach ($_SERVER as $key => $value) {
        if (substr($key, 0, 5) == 'HTTP_') {
            $key = substr($key, 5);
            $key = strtolower($key);

            $key = str_replace('_', '', $key);
            // $key = ucwords($key); //首字母大写
            $key = str_replace('', '-', $key);
            $headers[$key] = $value;
        }
    }

    return $headers;
}

function selfTrim($str, $charlist) {
    return trim($str, $charlist . " \t\n\r\0\x0B");
}

function isSelf($uid) {
    if (session('user_id') == $uid) {
        return true;
    }
}

function getDifferDate($dateTime) {
    $dateYear = date('Y', $dateTime);
    $todayYear = date('Y', time());
    $days = round((time() - $dateTime) / 3600 / 24);
    if ($days == 0 && $dateYear == $todayYear) {
        return date('H:i', $dateTime);
    }else if ($days > 15 && $dateYear == $todayYear) {
        return date('m-d H:i', $dateTime);
    }else if ($days <= 15 && $dateYear == $todayYear) {
        return $days . '天前 ' . date('H:i', $dateTime); 
    }else if ($dateYear != $todayYear) {
        return date('Y-m-d H:i', $dateTime);
    }
}