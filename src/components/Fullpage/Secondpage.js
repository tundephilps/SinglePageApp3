//import { faPhone } from '@fortawesome/free-solid-svg-icons';
import React from 'react'
import bulb from "../images/statement-icon-1.svg";

import pen from "../images/statement-icon-2.svg";
import board from "../images/statement-icon-3.svg";
import Phone from "../images/statement-icon-4.svg";


const Secondpage = () => {
  return (
    <div class="basic-1">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="text-container">
                    <div class="element">
                        <img class="icon" src={bulb} alt="alternative" />
                        <p class="title">Planning</p>
                    </div> 
                    <i class="fas fa-chevron-down"></i>
                    <i class="fas fa-chevron-right"></i>
                    <div class="element">
                        <img class="icon" src={pen} alt="alternative" />
                        <p class="title">Design</p>
                    </div> 
                    <i class="fas fa-chevron-down"></i>
                    <i class="fas fa-chevron-right"></i>
                    <div class="element">
                        <img class="icon" src={board} alt="alternative" />
                        <p class="title">Execution</p>
                    </div> 
                    <i class="fas fa-chevron-down"></i>
                    <i class="fas fa-chevron-right"></i>
                    <div class="element">
                        <img class="icon" src={Phone} alt="alternative" />
                        <p class="title">Maintenance</p>
                    </div> 
                </div> 
            </div>
        </div> 
        <div class="row">
            <div class="col-lg-12">
                <p class="testimonial-text p-large">”Eget egestas purus viverra accumsan in nisl nisi. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Et leo duis ut diam quam nulla purus in”</p>
                <p class="testimonial-author">Lorem Ipsum - Company CEO</p>
            </div> 
        </div>
    </div> 
</div> 



  )
}

export default Secondpage


