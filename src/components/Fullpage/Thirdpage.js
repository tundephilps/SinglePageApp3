import React from 'react'

import Service1 from "../images/services-1.jpg";
import Service2 from "../images/services-2.jpg";
import Service3 from "../images/services-3.jpg";
import Service4 from "../images/services-4.jpg";
import Service5 from "../images/services-5.jpg";
import Service6 from "../images/services-6.jpg";


const Thirdpage = () => {
  return (
    <div id="services" class="basic-2">
    <div class="container">
        <div class="row" id='Services'>
            <div class="col-lg-12">
                <h2>SERVICES</h2>
                <p class="p-heading">Elementum nisi quis mauris a diam maecenas sed enim. Amet commodo nulla facilisi nullam vehicula ipsum a morbi tristique senectus et netus et amet</p>
            </div> 
                    </div> 

        <div class="row">
            <div class="col-lg-6 first">

                <div class="service-container">
                    <div class="image-container">
                        <img src={Service1} alt="alternative" />
                    </div> 
                                        <div class="text-container">
                        <h4>Lobortis Feugiat</h4>
                        <p>Nisl purus in mollis nunc sed id semper risus in dictum non consectetur a erat nam et tortor consequat id porta nibh rem</p>
                    </div> 
                                    </div> 



                <div class="service-container">
                    <div class="image-container">
                        <img src={Service2} alt="alternative" />
                    </div> 
                    <div class="text-container">
                        <h4>Vivamus Augue</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    </div> 
                </div> 



                <div class="service-container">
                    <div class="image-container">
                        <img src={Service3} alt="alternative" />
                    </div> 
                                        <div class="text-container">
                        <h4>Egetro Arcules</h4>
                        <p>Senectus et netus et malesuada fameser malesuada nunc vel risus commodo. Eget egestas purus viverra accumsan in nisl nisi</p>
                    </div>                 </div>                 
            </div> 
            <div class="col-lg-6 second">
                
                <div class="service-container">
                    <div class="image-container">
                        <img src={Service4} alt="alternative" />
                    </div> 
                    <div class="text-container">
                        <h4>Amet Aliquam</h4>
                        <p>Pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Et leo duis ut diam quam nulla purus in mollis nunc sed id semper</p>
                    </div> 
                </div> 


                <div class="service-container">
                    <div class="image-container">
                        <img src={Service5} alt="alternative" />
                    </div> 
                                       <div class="text-container">
                        <h4>Diam Maecenas</h4>
                        <p>Aenean euismod elementum nisi quis mauris a diam maecenas sed enim amet commodo nulla facilisi nullam vehicula ipsum am tris</p>
                    </div>                 </div> 

                <div class="service-container">
                    <div class="image-container">
                        <img src={Service6} alt="alternative" />
                    </div> 
                    <div class="text-container">
                        <h4>Ultricies Mieget</h4>
                        <p>Lobortis feugiat vivamus at augue eget arcu amet aliquam id diam maecenas ultricies mi eget. Nisl purus in mollis nunc sed id sem</p>
                    </div>
                                    </div>
            
            </div> 
                    </div>
    </div> 
    </div> 


  )
}

export default Thirdpage