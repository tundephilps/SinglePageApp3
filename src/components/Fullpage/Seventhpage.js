import React from 'react'
import about from "../images/about.jpg";
import jQuery from 'jquery';
import $ from 'jquery';

const Seventhpage = () => {
  return (
    <>
   <div class="basic-4">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <h2>ABOUT</h2>
                        <p class="p-heading">Sapien et ligula ullamcorper malesuada proin libero. Enim ut sem viverra aliquet. Ut aliquam purus sit amet luctus venenatis lectus magna rempus lion</p>
                    </div> 
                </div> 
                <div class="row">
                    <div class="col-lg-6">
                        <div class="image-container">
                            <img class="img-fluid" src={about} alt="alternative" />
                        </div> 
                                          </div> 
                    <div class="col-lg-6">
                        <div class="text-container">
                            <h4>Accumsan Sit Amet Nulla Facilisi Morb</h4>
                            <p>Aliquam sem fringilla ut morbi. Accumsan lacus vel facilisis volutpat est velit. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Velit egestas dui id ornare</p>
                            <ul class="list-unstyled li-space-lg">
                                <li><strong>2012 - 2014</strong> Sem fringilla ut morbi accumsan lacus vel faci</li>
                                <li><strong>2014 - 2017</strong> San lacus vel facilisis volutpat est velit platea</li>
                                <li><strong>2017 - 2021</strong> Volutpat est velit platea dictumst vestibulum rhon</li>
                            </ul>
                        </div>
                    </div> 
                                    </div> 
            </div> 
                   </div>

        
        <div class="counter">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        
                    
                        <div id="counter">
                            <div class="cell">
                                <div class="counter-value number-count" data-count="231">1</div>
                                <p class="counter-info">Egestas Quis</p>
                            </div>
                            <div class="cell">
                                <div class="counter-value number-count" data-count="85">1</div>
                                <p class="counter-info">Ipsum Suspendi</p>
                            </div>
                            <div class="cell">
                                <div class="counter-value number-count" data-count="59">1</div>
                                <p class="counter-info">Ultrices Gravi</p>
                            </div>
                            <div class="cell">
                                <div class="counter-value number-count" data-count="127">1</div>
                                <p class="counter-info">Dictum Fusce</p>
                            </div>
                            <div class="cell">
                                <div class="counter-value number-count" data-count="76">1</div>
                                <p class="counter-info">Sedro Viverra</p>
                            </div>
                        </div>
                    
                        
                    </div> 
                                    </div>
            </div> 
                    </div>



    </>
  )
}

export default Seventhpage;



 /* Counter - CountTo */
 var a = 0;
 $(window).scroll(function() {
     if ($('#counter').length) { // checking if CountTo section exists in the page, if not it will not run the script and avoid errors	
         var oTop = $('#counter').offset().top - window.innerHeight;
         if (a == 0 && $(window).scrollTop() > oTop) {
         $('.counter-value').each(function() {
             var $this = $(this),
             countTo = $this.attr('data-count');
             $({
             countNum: $this.text()
             }).animate({
                 countNum: countTo
             },
             {
                 duration: 2000,
                 easing: 'swing',
                 step: function() {
                 $this.text(Math.floor(this.countNum));
                 },
                 complete: function() {
                 $this.text(this.countNum);
                 //alert('finished');
                 }
             });
         });
         a = 1;
         }
     }
 });
