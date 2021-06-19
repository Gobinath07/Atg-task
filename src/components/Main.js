import React from 'react'
import first from '../images/first.png'
import dots from '../images/dots.png'
import profile1 from '../images/profile1.png'
import  hand from '../images/hand.png'
import suitcase from '../images/suitcase.png'
import july from '../images/july.png'

import microscope from '../images/microscope.png'

import  second_image from '../images/second_image.png'
import third_image from '../images/third_image.png'
import second from '../images/second.png'
import third from '../images/third.png'
import fourth from '../images/fourth.png'
export default function Main() {
    return (
    
<div>
{/* <section>
  <div className="sec-one">

     <h5 className="text-1">
    Computer Engineering
           </h5>
     <p className="paragraph">142,726 Computer Engineers follow this</p>
  </div>

</section> */}
<section >
       {/* <div className="sec-two">

       </div>
       <hr className="hr-teg "/> */}
       
       <div class="card first-card"> 
          <img src={first} class="card-img-top" alt="..."/>
          <div class="card-body">
           <div class="card-title">
             <img src={hand} alt="" /><span className="image-title fw-bolder">Article</span>
           </div>
           <div className="row">
           <p class="card-text fs-bolder col-12 col-md-10 ">What if famous brand had regular fonts? Meet RegulaBrands!</p>
  
   <div className="dot text-end col-2">
       <img src={dots} alt="" />
   </div>
  <div class=" fw-normal col-md-12 w-100  descript">
   <p>I’ve worked in UX for the better part of a decade. From now on, I plan to rei… </p>
   </div>
   <div className="col-12 col-md-8 mt-4 mb-1">
       <img src={profile1} alt="" />
       <span className="name ">Sarthak Kamra</span>
       
   </div>
   <div className="col-md-4 mt-4">

 
  <i className="bi bi-eye "></i>
   <span className="side-name" >1.4K views</span>
   <button className="btn btn-light share justify-content-center">
   <i class="bi bi-share-fill"></i>
   </button>
   </div>
   
           </div>
             
           </div>
     
       

       </div>
       <div class="card first-card"> 
          <img src={second_image} class="card-img-top" alt="..."/>
          <div class="card-body">
           <div class="card-title">
               <img src={microscope}  alt="" /><span className="image-title fw-bolder">Education</span>
           </div>
           <div className="row">
           <p class="card-text fs-bolder col-12 col-md-11 ">Tax Benefits for Investment under National Pension Scheme launched by Government</p>
  
   <div className="dot text-end col-1">
       <img src={dots} alt="" />
   </div>
  <div class=" fw-normal col-md-12 w-100">
   <p>I’ve worked in UX for the better part of a decade. From now on, I plan to rei… </p>
   </div>
   <div className="col-12 col-md-8 mt-4">
       <img src={second} alt="" />
       <span className="name ">Sarah West</span>
       
   </div>
   <div className="col-md-4 mt-4">

 
  <i className="bi bi-eye "></i>
   <span className="side-name" >1.4K views</span>
   <button className="btn btn-light share justify-content-center">
   <i class="bi bi-share-fill"></i>
   </button>
   </div>
   
           </div>
             
           </div>
     
       

       </div>
       <div class="card first-card"> 
          <img src={third_image} class="card-img-top" alt="..."/>
          <div class="card-body">
           <div class="card-title">
               <img src={july} alt="" /><span className="image-title fw-bolder">Meetup</span>
           </div>
           <div className="row">
           <p class="card-text fs-bolder col-12 col-md-10 ">Finance & Investment Elite Social Mixer @Lujiazui</p>
  
   <div className="dot text-end col-2">
       <img src={dots} alt="" />
   </div>
  <div class=" fw-bolder col-md-12 w-100">
  <i class="bi bi-calendar-event icons-color"></i> <span>Fri, 12 Oct, 2018</span><i class="bi bi-geo-alt ms-4 icons-color"></i> <span> Ahmedabad, India</span>


   </div>
   <button type="button" class="btn  btn-1 fs-5 ">Primary</button>
   <div className="col-12 col-md-8 mt-4">
       <img src={third} alt="" />
       <span className="name ">Ronal Jones</span>
       
   </div>
 
   <div className="col-md-4 mt-4">

 
  <i className="bi bi-eye "></i>
   <span className="side-name" >1.4K views</span>
   <button className="btn btn-light share justify-content-center">
   <i class="bi bi-share-fill"></i>
   </button>
   </div>
   
           </div>
             
           </div>
     
       

       </div>
       <div class="card last-card"> 

          <div class="card-body">
           <div class="card-title">
               <img src={suitcase} alt="" /><span className="image-title fw-bolder">Job</span>
           </div>
           <div className="row">
           <p class="card-text fs-bolder col-12 col-md-10 ">Software Developer</p>
  
   <div className="dot text-end col-2">
       <img src={dots} alt="" />
   </div>
  <div class=" fw-bolder col-md-12 w-100">
  <i class="bi bi-bag icons-color"></i> <span>Innovaccer Analytics Private Ltd.</span><i class="bi bi-geo-alt ms-4 icons-color"></i> <span> Noida, India</span>

   </div>
   <button type="button" className="btn  btn-2 fs-5">Apply on Timesjobs</button>
   <div className="col-12 col-md-8 mt-4">
       <img src={fourth} alt="" />
       <span className="name ">Joseph Gray</span>
       
   </div>
 
   <div className="col-md-4 mt-4">

 
  <i className="bi bi-eye "></i>
   <span className="side-name" >1.4K views</span>
   <button className="btn btn-light share justify-content-center">
   <i class="bi bi-share-fill"></i>
   </button>
   </div>
   
           </div>
             
           </div>
     
       

       </div>

         </section>
        </div>
 
    )
}
