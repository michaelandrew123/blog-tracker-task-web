import {useState} from 'react';

//For Image Save
//import axios from 'axios'

//For Image Upload
import ImageUploading from "react-images-uploading";
import $ from 'jquery';

const FileUpload = ()=>{
    const [state, setState] = useState(null);
    
    const fileSelectedHandler = (imageList) =>{
        //console.log(e.target.files[0].name); 
        //    setState(e.target.file[0]);
        //  
            // data for submit
            
            // Create an object of formData 
            

            // console.log(imageList.target.files[0].name);
            // const formData = new FormData(); 
             
            // Update the formData object 
            // formData.append( 
            //   "myFile", 
            //   imageList[0].file, 
            //   imageList[0].file.name
            // ); 
           
            // // Details of the uploaded file 
            // console.log(imageList[0].file); 
           
            // Request made to the backend api 
            // Send formData object to my php file for save in folder
            //axios.post("http://localhost/reactimageupload.php", formData); 
          
            if(imageList.target.files[0]){

            }
    }
    const fileUploadHandler = () =>{

        console.log(state.name);
        // const fd = new FormData();
        // fd.append('image', state, state.name);
    }

    const ajaxPHP = (e)=>{
        e.preventDefault();
        fetch('http://localhost:80/reactImageUpload.php')
        .then(res => res.json())
        .then(
            (result) => {
                console.log(result);
            }
        )
        
        // $.ajax({
        //     url: 'http://localhost/reactImageUpload.php',
        //     type: "GET",
        //     // header: {
        //     //     'Content-Type': 'application/x-www-form-urlencoded'
        //     // },
        //     dataType: 'json',
        //     success: function(data) {
        //         console.log('success');
        //         console.log(data);
        //     }.bind(this),
        //     error: function(xhr, status, err) {
        //         console.log('error')
        //     }.bind(this)
        // });
    }
        
    return (
        <>
            <h3>File Upload</h3> 
            <input type="file" onChange={fileSelectedHandler} />
            <button onClick={fileUploadHandler}>Upload</button>
            <div> 
                <img src={process.env.PUBLIC_URL + '/logo512.png'} /> 
            </div>
            <button onClick={ajaxPHP}>Click Me for Ajax</button>
        </>
    )
}

export default FileUpload;