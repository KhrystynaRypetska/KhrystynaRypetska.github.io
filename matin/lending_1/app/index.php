<?php
header("Access-Control-Allow-Origin: *");

$sites = array(
    "ru" => "/index.html",
    "en" => "/eng.html",
    "de" => "/de.html",
);
$lang = substr($_SERVER['HTTP_ACCEPT_LANGUAGE'], 0, 2);

if (!in_array($lang, array_keys($sites))){
    $lang = 'en';
}
//header('Location: ' . $sites[$lang]);
//print_r($_SERVER['HTTP_ACCEPT_LANGUAGE']);die;

include $_SERVER['DOCUMENT_ROOT'] . '/' . $sites[$lang];