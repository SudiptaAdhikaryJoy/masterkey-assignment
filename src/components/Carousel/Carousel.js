import React, { Component } from "react";
import Slider from "react-slick";
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";
// import Data from "../Sections/data"

export default class AutoPlay extends Component {
  
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear"
    };
    return (
      <div>
          <div className="container-fluid bg-light">
        <h2 className='pt-3'>Testimony</h2>
        <Slider {...settings}>
              <div class="card mb-3 px-3 mx-auto" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="..." class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">User 1</h5>
        <p class="card-text">This is one of the most popular ads. After users click, this ad opens landing page in behind. So,the user experience is not hampered much.</p>
        
      </div>
    </div>
  </div>
</div> 
          <div class="card mb-3 px-3 mx-auto" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="..." class="img-fluid rounded-start" alt="..." />
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">User 2</h5>
        <p class="card-text">Choose between the available banner formats. Highly effective ad for visibility.</p>
        
      </div>
    </div>
  </div>
</div>
          <div class="card mb-3 px-3 mx-auto gap-4" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4 col-lg-4">
      <img src="..." class="img-fluid rounded-start" alt="..." />
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">User 3</h5>
        <p class="card-text">Ad format with the image and the title, that perfectly fits into the content of the site. Native ads are placed in the most visible areas of the page and, thus this format shows good results and the level of interaction.</p>
        
      </div>
    </div>
  </div>
</div>
          <div class="card mb-3 px-3 mx-auto" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="../../../public/assets/images/img4.jpeg" class="img-fluid rounded-start" alt="..." />
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">User 4</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        
      </div>
    </div>
  </div>
</div>
          
        </Slider>
          </div>
      </div>
    );
  }
}