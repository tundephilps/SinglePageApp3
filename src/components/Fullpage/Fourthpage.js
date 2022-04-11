
import React from 'react'

const Fourthpage = () => {
    
    
  return (
        <>
        
        <div id="details" class="accordion">
            <div class="area-1">
            </div><div class="area-2">
                    
                    <div class="accordion-container" id="accordionOne">
                        <div class="item">
                            <div id="headingOne">
                                <span data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" role="button">
                                    <span class="circle-numbering">1</span><span class="accordion-title">Euismod Elementum Bisi Quis Rem</span>
                                </span>
                            </div>
                            <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionOne">
                                <div class="accordion-body" id='Performance'>
                                    Aenean euismod elementum nisi quis. Mauris a diam maecenas sed enim. Amet commodo nulla facilisi vehicula ipsum a. Morbi tristique senectus et netu
                                </div>
                            </div>
                        </div> 
                        <div class="item">
                            <div id="headingTwo">
                                <span class="collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" role="button">
                                    <span class="circle-numbering">2</span><span class="accordion-title">Aenean Euismod Elementum Nisi</span>
                                </span>
                            </div>
                            <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionOne">
                                <div class="accordion-body">
                                    Aenean euismod elementum nisi quis. Mauris a diam maecenas sed enim. Amet commodo nulla facilisi vehicula ipsum a. Morbi tristique senectus et netu
                                </div>
                            </div>
                        </div> 
                        <div class="item">
                            <div id="headingThree">
                                <span class="collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" role="button">
                                    <span class="circle-numbering">3</span><span class="accordion-title">Mauris A Diam Maecenas Sed Enim</span>
                                </span>
                            </div>
                            <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionOne">
                                <div class="accordion-body">
                                    Aenean euismod elementum nisi quis. Mauris a diam maecenas sed enim. Amet commodo nulla facilisi vehicula ipsum a. Morbi tristique senectus et netu
                                </div>
                            </div>
                        </div> 
                        <div class="item">
                            <div id="headingFour">
                                <span class="collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour" role="button">
                                    <span class="circle-numbering">4</span><span class="accordion-title">Morbi Tristique Senectus Et Netus</span>
                                </span>
                            </div>
                            <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordionOne">
                                <div class="accordion-body">
                                    Aenean euismod elementum nisi quis. Mauris a diam maecenas sed enim. Amet commodo nulla facilisi vehicula ipsum a. Morbi tristique senectus et netu
                                </div>
                            </div>
                        </div> </div> 

            </div> 
        </div>

        <div class="tabs">
            <div class="area-1">
                <div class="tabs-container">
                    
                    <ul class="nav nav-tabs" id="siteTabs" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active" id="nav-tab-1" data-toggle="tab" href="#tab-1" role="tab" aria-controls="tab-1" aria-selected="true">BUSINESS</a>
                        </li>
                        
                    </ul>
                    <div class="tab-content" id="siteTabsContent">

                        <div class="tab-pane fade show active" id="tab-1" role="tabpanel" aria-labelledby="tab-1">
                            <h4>Lobortis Feugiat Vivamus Ate</h4>
                            <p>Lobortis feugiat vivamus at augue eget arcu. Amet aliquam id diam maecenas ultricies mi <a class="orange page-scroll" href="#pricing">Pricing</a> eget nisl purus in mollis nunc sed id semper risus. In dictum non</p>
                            
                            <div class="progress-container">
                                <div class="title">Business Development 100%</div>
                                <div class="progress">
                                    <div class="progress-bar first" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <div class="title">Recruiting Services 90%</div>
                                <div class="progress">
                                    <div class="progress-bar second" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <div class="title">HR Management 75%</div>
                                <div class="progress">
                                    <div class="progress-bar third" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div> 

                    </div> 
                    
                </div> 
            </div>
            <div class="area-2">

            </div>
        </div> 

        
          </> 

  )
}

export default Fourthpage;