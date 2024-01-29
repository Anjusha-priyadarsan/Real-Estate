import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';
import { FaYoutube } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <div className=' bg-slate-950 ' style={{padding:"50px"}}>

    <div className='footer-content'>
      <Container>
        
        <Row>
          <Col ><span style={{fontSize:"30px",fontWeight:"bold"}}>                <img src="https://www.brandbucket.com/sites/default/files/logo_uploads/244207/large_greasehouse.png" alt="" width={150} />
</span> <br />
           <div className='footer-para text-slate-400 mt-1'>
           Dream Home is a full stack service provider for all real estate needs, with 15+ services including home loans, pay rent, packers and movers, legal assistance, property valuation, and expert advice. As the largest platform for buyers and sellers of property to connect in a transparent manner, Magicbricks has an active base of over 15 lakh property listings.
           </div>
           <div className='social mt-3'>
         <Button className=' bg-slate-950' > <FaYoutube /></Button>
          <Button className='btnnn'> <BsInstagram/></Button>
           <Button className='btnnn' > <  FaTwitter /></Button>
           <Button  > <FaFacebook /></Button>

            


           </div>
          </Col>
          <Col md="auto">
            <div className='mt-7'>
            <span className='text-slate-50 mt-5' style={{fontWeight:"bold"}}>Services</span>
          <div className='box mt-7'>
            <a href=''  className='link' style={{color:"white",textDecoration:"none"}}>Our Services</a> <br />
            <a href='' style={{color:"white",textDecoration:"none",lineHeight:"30px"}}>Meet the team</a><br />
            <a href='' style={{color:"white",textDecoration:"none",lineHeight:"30px"}}>Sales Enquiry</a><br />
            <a href='' style={{color:"white",textDecoration:"none",lineHeight:"30px"}}>Latest News & Videos </a>
          </div> 
            </div>
           
          </Col>
          <Col xs lg="2">
          <div className='mt-7'>
           <span style={{fontWeight:"bold"}} className='text-slate-50'> Menu</span>
           <div className='box mt-7'>
            <a href='' style={{color:"white",textDecoration:"none"}}>Home</a> <br />
            <a href='' style={{color:"white",textDecoration:"none",lineHeight:"30px"}}>About</a><br />
            <a href='' style={{color:"white",textDecoration:"none",lineHeight:"30px"}}>Services</a><br />
            <a href='' style={{color:"white",textDecoration:"none",lineHeight:"30px"}}>Terms & Conditions</a>
          </div> 
          </div>
          </Col>
          <Col xs lg="2">
          <div className='mt-7'>
         <span style={{fontWeight:"bold"}} className='text-slate-50'> About</span>
         <div className='box mt-7'>
            <a href='' style={{color:"white",textDecoration:"none"}}>Buy</a> <br />
            <a href='' style={{color:"white",textDecoration:"none",lineHeight:"30px"}}>Rent</a><br />
            <a href='' style={{color:"white",textDecoration:"none",lineHeight:"30px"}}>Property Management</a><br />
            <a href='' style={{color:"white",textDecoration:"none",lineHeight:"30px"}}>FAQ</a>
          </div>
          </div> 
          </Col>
        </Row>
      </Container>
    </div>


        
    </div>
  )
}
