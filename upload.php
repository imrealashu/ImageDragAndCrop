<?php
    /*
//echo $_POST['image'];
$data = $_POST['image'];

$data =explode(',',$data);
echo $data[1];
$data = base64_decode($data[1]);
$im = imagecreatefromstring($data);

move_uploaded_file(imagepng($data),'upload/sarnodeep.png');



if ($im != false) {
    header('Content-Type: image/png');
    imagepng($im);
    imagedestroy($im);
}
else {
    echo 'An error occurred.';
}*/

//echo $_POST['image'];
echo $_POST['image'];

/*
    $img_file = imagecreatefromstring(base64_decode($data));
    $src=imagejpeg($img_file);
    file_put_contents('sarnm.png',$src);
    //return 'ok';


  //$uri = substr($data,strpos($data," ")+1);
  $encodedData = str_replace(' ','+',$data);
  $decodedData = base64_decode($encodedData);
  $img_file=imagecreatefromstring($decodedData);
  file_put_contents('sarnodeep1.png', $img_file);
  */


list($type, $data) = explode(';', $data);
list(, $data)      = explode(',', $data);
$data = base64_decode($data);

file_put_contents('image.png', $data);




?>



