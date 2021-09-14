<?php header('Access-Control-Allow-Origin: *');
    $result = "Hello, React with Ajax";
    header('Content-Type: application/json'); 
    echo json_encode($result);

// //Upload folder
// $target_dir = "uploads/";
// $target_file = $target_dir . basename($_FILES["myFile"]["name"]);
// $imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));
// // Check if image file is a actual image or fake image
//   $check = getimagesize($_FILES["myFile"]["tmp_name"]);
//   if($check !== false) {
//   //Move File To Uploads Folder
//     if (move_uploaded_file($_FILES["myFile"]["tmp_name"], $target_file)) {
//     echo "The file ". basename( $_FILES["myFile"]["name"]). " has been uploaded.";
//     } else {
//     echo "Sorry, there was an error uploading your file.";
//     }
    
//   } else {
//     echo "File is not an image.";
    
//   }
?>