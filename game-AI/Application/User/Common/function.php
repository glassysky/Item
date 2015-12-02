<?php

function encrySalt() {
	return substr(sha1(mt_rand()),0,22);
}


?>