import React from 'react'

export const Navbar = () => {
    return (

    <nav className="navbar navbar-dark bg-dark">
  
    <a className ="navbar-brand" href="/">Upload Helping Material</a>
  

</nav>
    )
}



export const Footer = () => {
    return (
        <footer className='d-flex  justify-content-centre bg-primary'>

           <h4 className='text-white mt-2'> 
           &copy;{new Date().getFullYear()}-InFocus 
           </h4>  

        </footer>
    )
}
