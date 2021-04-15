import React from 'react';
import {Navbar,Footer} from './components/layouts/layout.jsx';
import {MultiUploader, SingleUploader} from './components/uploader/uploaders.jsx'
const App = ()=> {
  return (
    <div className='wrapper d-flex flex-column justify-content-between'>
      <Navbar/>
     

     <div className="container flex-grow-1 pt-5">
      <div className="row">
        <div className="col-md-6 col-sm-12 mx-auto">
<div className="card">
  <div className='card-header'>
     <h3 className='text-primary font-weight-bold mt-2'>Upload Your Files</h3>

  </div>
<div className='card-body'> 
<form>

<SingleUploader id="single-upload" lable="Upload Single File " api="images/single-upload"/>

<MultiUploader id="multi-upload" lable="Upload multiple File " api="images/multi-upload" />

</form>

</div>
</div>

        </div>
      </div>
     </div>


     

     <Footer/>
        
        
    </div>
  );
}

export default App;
