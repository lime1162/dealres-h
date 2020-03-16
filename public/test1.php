<?php
// phpinfo();exit;
ini_set('display_errors', 1);
error_reporting(E_ALL);

$isSecure = false;
if (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] == 'on') {
    $isSecure = true;
}
elseif (!empty($_SERVER['HTTP_X_FORWARDED_PROTO']) && $_SERVER['HTTP_X_FORWARDED_PROTO'] == 'https' || !empty($_SERVER['HTTP_X_FORWARDED_SSL']) && $_SERVER['HTTP_X_FORWARDED_SSL'] == 'on') {
    $isSecure = true;
}
$REQUEST_PROTOCOL = $isSecure ? 'https' : 'http';

echo $REQUEST_PROTOCOL;
echo "\n";

//$url = 'http://api.cofigurator.hyundai.ru/dealers';
$url = 'http://configurator.hyundai.ru/exportdata/main/';
$url = 'http://picnic.hyundai.ru/';
// $url = 'https://api.metro-cc.ru/api/v1/C98BB1B547ECCC17D8AEBEC7116D6/tradecenters';

$json = file_get_contents($url);
//$dealers = json_decode($json, true);

var_dump($json); exit;


$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);

$response = curl_exec ($ch);
$code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
$err = curl_error($ch);  //if you need
curl_close ($ch);
var_dump($code);
var_dump($response); exit;
?>
