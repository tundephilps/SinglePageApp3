
import React, { useEffect, useState } from 'react'
import { SRLWrapper } from "simple-react-lightbox";
//import project1 from "../images/project-1.jpg"

//import project2 from "../images/project-2.jpg"
//import project3 from "../images/project-3.jpg"
//import project4 from "../images/project-4.jpg"
//import project5 from "../images/project-5.jpg"
//import project6 from "../images/project-6.jpg"
//import project7 from "../images/project-7.jpg"
//import project8 from "../images/project-8.jpg"
//import $ from 'jquery';





const images = [
    { id: "1", imageName: "../images/project-1.jpg", tag: 'development', span: "Hire" },
    { id: "2", imageName: '../images/project-2.jpg', tag: 'development',span: "Tunde Philps"},
    { id: "3", imageName: '../images/project-3.jpg', tag: 'design', span: "Right Now"},
    { id: "4", imageName: '../images/project-4.jpg', tag: 'design', span: "You"},
    { id: "5", imageName: '../images/project-5.jpg', tag: 'marketing', span: "have"},
    { id: "6", imageName: '../images/project-6.jpg', tag: 'marketing', span: "No"},
    { id: "7", imageName: '../images/project-7.jpg', tag: 'seo', span: "Choice"},
    { id: "8", imageName: '../images/project-8.jpg', tag: 'seo', span: "Bruh"},
    ];

    


function Sixthpage() {
    
const options = {
settings: {
    overlayColor: "rgb(25, 136, 124)",
    autoplaySpeed: 1500,
    transitionSpeed: 900,
}

};


const [ tag, setTag ] = useState('all');
const [ filteredImages, setFilteredImages] = useState([]);

useEffect( () => {
    tag === 'all' ? setFilteredImages(images) : setFilteredImages(images.filter( image => image.tag === tag))
}, [tag])


  return (
      
    <div id="Projects" class="filter bg-gray">
    <div class="container">
    <div class="row">
                    <div class="col-lg-12">
                        <h2>PROJECTS</h2>
                        <p class="p-heading">Egestas quis ipsum suspendisse ultrices gravida dictum fusce ut placerat. Sed viverra tellus in hac habitasse. Auctor neque vitae tempus quam nero veripse</p>
                    </div> 
                </div> 
               





                <div class="row">
                    <div class="col-lg-12">
                
    <div handleSetTag={setTag} class="button-group filters-button-group">

<TagButton name="all" handleSetTag={setTag} tagActive={ tag === 'all' ? true : false } />
<TagButton name="design" handleSetTag={setTag} tagActive={ tag === 'design' ? true : false } /> 
<TagButton name="development" handleSetTag={setTag} tagActive={ tag === 'development' ? true : false } />
<TagButton name="marketing" handleSetTag={setTag} tagActive={ tag === 'marketing' ? true : false } />
<TagButton name="seo" handleSetTag={setTag} tagActive={ tag === 'seo' ? true : false } />

<SRLWrapper options={options}>
    <div className='grid'>
{ filteredImages.map(image => 
<div key={image.id} class="element-item development">

<a href={`/images/${image.imageName}`}>
<div class="element-item-overlay"><span>{image.span}</span></div>

 <img src={`/images/${image.imageName}`} alt="" />
 </a>
</div>

)
}

</div>
</SRLWrapper>
</div>




</div>
</div>



</div>
</div>

  );
  }

const TagButton = ({name, handleSetTag, tagActive }) => {
    return (
      
        <a href="/##" id="button" class="button is-checked" className={ `tag ${ tagActive ? `active`: null}`} data-filter="*">    <span class="popup-with-move-anim" onClick={ () => handleSetTag(name)}>
          {name.toUpperCase()}
  
          </span></a>
          
    )
  };
  

export default Sixthpage;

