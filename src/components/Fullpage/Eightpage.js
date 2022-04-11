import React from 'react'
import team1 from "../images/team-member-1.jpg";

import team2 from "../images/team-member-2.jpg";
import team3 from "../images/team-member-3.jpg";
import team4 from "../images/team-member-4.jpg";
import { AiFillPhone, AiOutlineMail } from "react-icons/ai";
import { HiLocationMarker } from "react-icons/hi";


const Eightpage = () => {
  return (
    <div id='Team'>     <div class="basic-5">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <h2>OUR TEAM</h2>
                <hr class="hr-heading" />
            </div>
                    </div> 
        <div class="row">
            <div class="col-lg-12">



                <div class="card">
                    <div class="card-image">
                        <img class="img-fluid" src={team1} alt="alternative" />
                    </div>
                    <div class="card-body">
                        <h6 class="card-title">Lorem Ipsum</h6>
                        <p>Business Developer</p>
                        <span class="fa-stack">
                            <a href="#your-link">
                                <i class="fas fa-circle fa-stack-2x"></i>
                                <i class="fab fa-twitter fa-stack-1x"></i>
                            </a>
                        </span>
                        <span class="fa-stack">
                            <a href="#your-link">
                                <i class="fas fa-circle fa-stack-2x"></i>
                                <i class="fab fa-linkedin-in fa-stack-1x"></i>
                            </a>
                        </span>
                    </div>
                </div>



                <div class="card">
                    <div class="card-image">
                        <img class="img-fluid" src={team2} alt="alternative" />
                    </div>
                    <div class="card-body">
                        <h6 class="card-title">Lorem Ipsum</h6>
                        <p>Software Engineer</p>
                        <span class="fa-stack">
                            <a href="#your-link">
                                <i class="fas fa-circle fa-stack-2x"></i>
                                <i class="fab fa-twitter fa-stack-1x"></i>
                            </a>
                        </span>
                        <span class="fa-stack">
                            <a href="#your-link">
                                <i class="fas fa-circle fa-stack-2x"></i>
                                <i class="fab fa-linkedin-in fa-stack-1x"></i>
                            </a>
                        </span>
                    </div>
                </div>


                <div class="card">
                    <div class="card-image">
                        <img class="img-fluid" src={team3} alt="alternative" />
                    </div>
                    <div class="card-body">
                        <h6 class="card-title">Lorem Ipsum</h6>
                        <p>Online Marketer</p>
                        <span class="fa-stack">
                            <a href="#your-link">
                                <i class="fas fa-circle fa-stack-2x"></i>
                                <i class="fab fa-twitter fa-stack-1x"></i>
                            </a>
                        </span>
                        <span class="fa-stack">
                            <a href="#your-link">
                                <i class="fas fa-circle fa-stack-2x"></i>
                                <i class="fab fa-linkedin-in fa-stack-1x"></i>
                            </a>
                        </span>
                    </div>
                </div>


                <div class="card">
                    <div class="card-image">
                        <img class="img-fluid" src={team4} alt="alternative" />
                    </div>
                    <div class="card-body">
                        <h6 class="card-title">Lorem Ipsum</h6>
                        <p>Product Manager</p>
                        <span class="fa-stack">
                            <a href="#your-link">
                                <i class="fas fa-circle fa-stack-2x"></i>
                                <i class="fab fa-twitter fa-stack-1x"></i>
                            </a>
                        </span>
                        <span class="fa-stack">
                            <a href="#your-link">
                                <i class="fas fa-circle fa-stack-2x"></i>
                                <i class="fab fa-linkedin-in fa-stack-1x"></i>
                            </a>
                        </span>
                    </div>
                </div>
                

            </div> 
        </div> 
    </div>
</div> 

<div id="Contact" class="form-1 bg-gray">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <h2>CONTACT</h2>
                <p class="p-heading">Tellus in hac habitasse auctor neque vitae tempus quam pellentesque</p>
                <ul class="list-unstyled li-space-lg">
                    <li><HiLocationMarker /> &nbsp;40 Lorem ipsum, Vestibulum, VS 1234, GR</li>
                    <li><AiFillPhone /> &nbsp;<a href="tel:00123456789">+12 345 6789</a></li>
                    <li><AiOutlineMail /> &nbsp;<a href="mailto:contact@name.com">contact@name.com</a></li>
                </ul>
            </div> 
        </div> 
        <div class="row">
            <div class="col-lg-6">
                <div class="map-responsive">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100939.98555098464!2d-122.507640204439!3d37.757814996609724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan+Francisco%2C+CA%2C+USA!5e0!3m2!1sen!2sro!4v1498231462606" allowfullscreen title='map'></iframe>
                </div>
            </div>
            <div class="col-lg-6">
                
               
                <form id="contactForm">
                    <div class="form-group">
                        <input type="text" class="form-control-input" id="cname" required />
                        <label class="label-control" for="cname">Name</label>
                    </div>
                    <div class="form-group">
                        <input type="email" class="form-control-input" id="cemail" required />
                        <label class="label-control" for="cemail">Email</label>
                    </div>
                    <div class="form-group">
                        <textarea class="form-control-textarea" id="cmessage" required></textarea>
                        <label class="label-control" for="cmessage">Message</label>
                    </div>
                    <div class="form-group checkbox">
                        <input type="checkbox" id="cterms" value="Agreed-to-Terms" required />Accumsan sit amet nulla facilisi morbi tempus <a href="privacy.html">Privacy Policy</a> and <a href="terms.html">Terms Conditions</a> 
                    </div>
                    <div class="form-group">
                        <button type="submit" class="form-control-submit-button">SUBMIT</button>
                    </div>
                </form>
                
            </div>        
             </div> 
    </div> 
</div> 
</div>
  )
}

export default Eightpage