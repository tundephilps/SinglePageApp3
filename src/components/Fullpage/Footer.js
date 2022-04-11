import React from 'react'
import { TiSocialFacebook,TiSocialInstagram, TiSocialTwitter, TiSocialGooglePlus } from "react-icons/ti";




const Footer = () => {
  return (
    <><div class="footer">
          <div class="container">
              <div class="row">
                  <div class="col-lg-12">
                      <div class="footer-col first">
                          <h6>Lorem Ipsum</h6>
                          <p class="p-small">Libero volutpat sed cras ornare. Malesuada fames ac turpis egestas integer eget. Velit egestas dui id ornare arcu odio. Viverra justo nec ultrices semper nem</p>
                      </div>
                      <div class="footer-col second">
                          <h6>Links</h6>
                          <ul class="list-unstyled li-space-lg p-small">
                              <li>Important: <a href="terms.html">Terms & Conditions</a>, <a href="privacy.html">Privacy Policy</a></li>
                              <li>Useful: <a href="/#">Colorpicker</a>, <a href="/#">Icon Library</a>, <a href="/#">Illustrations</a></li>
                              <li>Menu: <a class="page-scroll" href="#header">Home</a>, <a class="page-scroll" href="#registration">Trial</a>, <a class="page-scroll" href="#features">Features</a>, <a class="page-scroll" href="#details">Details</a></li>
                          </ul>
                      </div>
                      <div class="footer-col third">
                          <span class="fa-stack">
                              <a href="#your-link">
                                  <i class="fas fa-circle fa-stack-2x"></i>
                                 <TiSocialGooglePlus />
                              </a>
                          </span>
                          <span class="fa-stack">
                              <a href="#your-link">
                                  <i class="fas fa-circle fa-stack-2x"></i>
                                  <TiSocialTwitter />
                              </a>
                          </span>
                          <span class="fa-stack">
                              <a href="#your-link">
                                  <i class="fas fa-circle fa-stack-2x"></i>
                                  <TiSocialFacebook />
                              </a>
                          </span>
                          <span class="fa-stack">
                              <a href="#your-link">
                                  <i class="fas fa-circle fa-stack-2x"></i>
                                  <TiSocialInstagram />
                              </a>
                          </span>
                          <p class="p-small">Nunc eget lorem dolor sed viverra <a href="mailto:contact@name.com"><strong>contact@name.com</strong></a></p>
                      </div>
                  </div>
              </div>
          </div>
      </div><div class="copyright">
              <div class="container">
                  <div class="row">
                      <div class="col-lg-12">
                          <p class="p-small">Copyright © Some name</p>
                      </div>
                  </div>
              </div>
          </div></>


  )
}

export default Footer