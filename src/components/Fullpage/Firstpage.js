import React from 'react'
import teamwork from "../images/teamwork.png"



const Firstpage = () => {


  


  return (
    <>
      <header id="header" class="header" >
            <div class="container" id='Home' >
                <div class="row">
                    <div class="col-lg-6">
                        <div class="text-container">
                            <h1 class="h1-large">LOREM IPSUM DOLOR SIT AMET</h1>
                            <p class="p-large">Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore etdol menes</p>
                            <a class="btn-outline-lg page-scroll" href="#services">DISCOVER</a>
                        </div>
                        </div> 
                    <div class="col-lg-6">

                        
                           <img src={teamwork} alt="" id='teamwork'  style={{width: "100%", marginTop: "7%"}} />
                    </div>
                 </div> 
            </div> 
        </header>
      
    </> 


  )
}

export default Firstpage;

