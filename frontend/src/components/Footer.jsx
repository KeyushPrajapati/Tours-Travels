
import React from 'react';
import logo from '../images/ss1.png'
import './Compcss/Footers.css';

const Footer = () => {
  const imageStyle = {
    width:"90%",

  };


  const contactInfoStyle = {
    marginTop: '2%',
  };

  const mapFrameStyle = {
    border: '0',
  };


  return (
    <>
    <div className='border bg-dark border-dark '>
   <div className="container-fluid bg-dark mt-4 mb-4">
  <div className="row">
    <div className="col-lg-3 col-sm-6">
      <div className="p-2  d-flex flex-column gap-3">
        
        <div className=''><img  src={logo} style={imageStyle} alt="Logo" /></div>

        <div className='text-white' style={{  maxWidth:'330px'}}>
        <span className="text-center text_decpt">Explore is a Non Government Organization, being run by young students for social reformation and building the nation with moral values and ethics.
        </span>
        </div> 

        <div className=' d-flex gap-4'>
          <i className="fa-brands fa-instagram fa-2x text-white" ></i>
        <i className="fa-brands fa-facebook fa-2x text-white" ></i>
        <i className="fa-brands fa-twitter fa-2x text-white" ></i>
        </div>

 </div>
    </div>
    <div className="col-lg-3 col-sm-6">
      <div className="p-2  text-white">
        
        <h2 className='text_title'>Quick Links</h2>   
        <div className='mt-1 text_decpt'>
        <a href="/home" className="text-white text-decoration-none ">
              <h6>Home</h6>
            </a>
            <hr/>
            <a href="/about" className="text-white text-decoration-none">
              <h6>About Us</h6>
            </a>
            <hr/>
            <a href="/contact" className="text-white text-decoration-none">
              <h6>Contact Us</h6>
            </a>
            <hr/>
            <a href="/tour" className="text-white text-decoration-none">
              <h6>Tours</h6>
            </a>
            <hr/>
            <a href="/login" className="text-white text-decoration-none">
              <h6>Login</h6>
            </a></div> 
            
            </div>
    </div>
    <div className="col-lg-3 col-sm-6">
      <div className="p-2  text-white d-flex flex-column  border_top">
        <h2 className='text_title'>Contact Us</h2>
            <div style={contactInfoStyle} className='text_decpt'>
              <span>308, University Plaza,</span>
              <span>Vijay Cross Roads, Navrangpura,</span>
              <span>Ahmedabad, Gujarat 380009</span>
            </div>
            <br />
            <span className='text_decpt'>Office Timings: 11AM to 8PM</span>
            <br />
            <p className='text_decpt'>
              <i className="fa fa-fw fa-phone"></i>  091-9123456789
            </p></div>
    </div>
    <div className="col-lg-3 col-sm-6">
      <div className="p-2 ">
         <iframe className='rounded  mt-2 border-success' title='frame'
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.5377569882066!2d72.54628851422541!3d23.040738484943887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e83598e343933%3A0xb6291144ceebd7ef!2sInvincible%20NGO!5e0!3m2!1sen!2sin!4v1679671281300!5m2!1sen!2sin"
              width="250" height="250" style={mapFrameStyle}  loading="lazy" referrerPolicy="no-referrer-when-downgrade">
            </iframe></div>
    </div>
  </div>
</div>
{/* ------------------------------------------------------------------------------------------------------------- */}
</div>
    </>
  );
};

export default Footer;
