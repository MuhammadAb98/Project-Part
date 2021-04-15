import React,{useState} from 'react'

import upload from './img/upload.png';

import API from '../../services/index.js';

import {Progress} from 'reactstrap';

import _ from 'lodash';

export const SingleUploader = (props) => {
    
    const {id,lable,api}=props;
    
    const [progress,setprogress]=useState(0);
    const [isuploading,setuploading]=useState(false);

    const [uploadedimage,setuploadedimage]= useState('');




    const onChange= async e=>{

        

        let formData = new FormData();
 
        setuploadedimage('');
        formData.append('file',e.target.files[0]);
   setuploading(true);

    let {data}=await API.post(api,formData,{

        onUploadProgress:({total,loaded})=>{
     setprogress(((loaded/total)*100).toFixed(2));
        }
    });


    
    setuploading(false);
    setprogress(0);
    setuploadedimage(data.imagePath);
    }
    return (
        <div className='form-group'>
            
            <lable 
            htmlFor={id} 
            className='text-primary font-weight-bold font-size-sm'> {lable} </lable>

          <div className='d-flex'>

              <div>
               <input 
               type="file" 
               onChange={onChange}
               id="{id}" 
               className="form-control uploader-input"/>
            
               <div className="uploader-mask d-flex justify-content-center align-items-center"> 
            
                        <img 
                        src={upload}
                        alt="Upload_Icon"
                        className="upload-icon"/>
               </div>
              </div>
           
             {

              uploadedimage?(<img src={uploadedimage} 
              alt="upload-image" 
              className="img-fluid
              img-thumbnail ml-3 uploaded-img "/>):null

             }
             
            
            {
             isuploading?(
<div className='flex-grow-1 mx-3'>
<div className="text-center">{progress}%</div>
<Progress value={progress} />
</div>
                 ):null
             }
          




            </div>

        </div>
    )
}
//////////////////////////////////////////////////////////////////////////
 









//////////////////////////////////////////////////////////////////////////
export const MultiUploader = (props) => {
    
    const {id,lable,api}=props;
    
    const [progress,setprogress]=useState(0);
    const [isuploading,setuploading]=useState(false);

    const [uploadedimages,setuploadedimages]= useState('');




    const onChange= async e=>{

        

        let formData = new FormData();
 
        setuploadedimages([]);
        
        _.forEach(e.target.files,file=>
            {
                formData.append('files',file);
            })
   setuploading(true);

    let {data}=await API.post(api,formData,{

        onUploadProgress:({total,loaded})=>{
     setprogress(((loaded/total)*100).toFixed(2));
        }
    });


    
    setuploading(false);
    setprogress(0);
    setuploadedimages(data);
    }
    return (
        <div className='form-group'>
            
            <lable 
            htmlFor={id} 
            className='text-primary font-weight-bold font-size-sm'> {lable} </lable>

          <div className='d-flex'>

              <div>
               <input 
               multiple
               type="file" 
               onChange={onChange}
               id="{id}" 

               className="form-control uploader-input"/>
            
               <div className="uploader-mask d-flex justify-content-center align-items-center"> 
            
                        <img 
                        src={upload}
                        alt="Upload_Icon"
                        className="upload-icon"/>
               </div>
              </div>
           
             
            {
             isuploading?(
<div className='flex-grow-1 mx-3'>
<div className="text-center">{progress}%</div>
<Progress value={progress} />
</div>
                 ):null
             }
        
            </div>

            <div className="d-flex flex-wrap">
            {

uploadedimages.length?uploadedimages.map(uploadedimages=>(


<img 
  key={uploadedimages}
  src={uploadedimages} 
  alt="upload-image" 
  className="mr-2 img-fluid img-thumbnail uploaded-img "
  />)):null

} 
            </div>

        </div>
    )
}