<?php
header("Access-Control-Allow-Origin: *");

$sites = array(
    "ru" => "/ru.html",
    "en" => "/eng.html",
    "ge" => "/ge.html",
);
$lang = substr($_SERVER['HTTP_ACCEPT_LANGUAGE'], 0, 2);

if (!in_array($lang, array_keys($sites))){
    $lang = 'ru';
}
header('Location: ' . $sites[$lang]);
?>