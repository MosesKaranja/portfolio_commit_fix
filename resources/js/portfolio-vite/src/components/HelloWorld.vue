<script setup>
import { ref } from "vue";
import Carousel from "./Carousel.vue";

$(document).ready(function () {
  $(".clients-carousel").owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    responsive: {
      0: {
        items: 2,
      },
      768: {
        items: 4,
      },
      1024: {
        items: 6,
      },
    },
  });
});

const count = ref(0);
</script>

<template>
  <div>
    <header class="header">
      <a href="#" class="logo"
        ><img
          style="width: 130px; height: 50px; object-fit: contain"
          src="/images/strath.png"
          alt=""
      /></a>
      <div class="fas fa-bars"></div>
      <nav class="navbar">
        <ul>
          <li><a href="#">Home</a></li>
          <!-- <li><a class="#services" href="#">Home</a></li> -->
          <li><a href="#about">About Us</a></li>
          <li><a href="#skills">Skills/Expertise</a></li>

          <li><a href="#products">Products</a></li>
          <li><a href="#service">Our Work</a></li>
          <!-- <li><a href="#portfolio">Products</a></li> -->
          <!-- <li class="dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#products"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Products
            </a>
            <div class="dropdown-content">
              <li><a href="#service">Our Work</a></li>
            </div>
          </li> -->
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </nav>
    </header>

    <div
      id="carouselExampleIndicators"
      class="carousel slide ban_img"
      data-ride="carousel"
    >
      <ol class="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          class="active"
        ></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="/images/img3.jpg"
            style="maxwidth: 100%; height: 600px; objectfit: cover"
            class="d-block w-100"
            alt="..."
          />

          <div class="ban_text">
            <strong><span>Revenue Management System (RMS)</span></strong>
            <p>
              A robust, ready-to-use revenue automation <br />
              software designed for seamless revenue <br />
              collection and real-time reporting.
            </p>
            <a href="#revenue-management">View Solution</a>
            <a href="#">Learn More</a>
          </div>
        </div>

        <div class="carousel-item">
          <img
            src="/images/img3.jpg"
            style="maxwidth: 100%; height: 600px; objectfit: cover"
            class="d-block w-100"
            alt="..."
          />

          <div class="ban_text">
            <strong><span>WILD Mobile App</span></strong>
            <p>
              A comprehensive, ready-to-use data collection<br />
              and reporting tool tailored for organizations<br />
              engaged in conservation efforts across protected and community areas.
            </p>
            <a href="#wild_app">View Solution</a>
            <a href="#">Learn More</a>
          </div>
        </div>

        <div class="carousel-item">
          <img
            src="/images/img3.jpg"
            style="maxwidth: 100%; height: 600px; objectfit: cover"
            class="d-block w-100"
            alt="..."
          />

          <div class="ban_text">
            <strong><span>iLabPay - Payment Gateway</span></strong>
            <p>
              A payment gateway that; Support various<br />
              various payment channels, secure client data,<br />
              in Africa.
            </p>
            <a href="#ilab-pay">View Solution</a>
            <a href="#">Learn More</a>
          </div>
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>

    <section id="about" class="about">
      <section id="home" class="">
        <h1 class="heading">About Us</h1>
        <div class="row">
          <div class="content">
            <p>
              IT Outsourcing, @iLabAfrica, is a research and innovation centre located at Strathmore University in Nairobi, Kenya.The centre focuses on customizing and developing solutions for clients by providing consulting services and end-to-end support for the entire product-development life-cycle in organizations, through developing,deploying and managing IT systems solutions.We pride ourselves on being a dynamic team of skilled developers and project management professionals dedicated to delivering innovative IT solutions for both government and corporate sectors.
            </p>
          </div>
        </div>

        <div class="row" id="skills">
          <h1 class="heading">Consulting Skills</h1>
        </div>
        <div class="row consulting-skills">
          <!-- Consulting Skills Grid -->
          <div class="col-lg-4 col-sm-6">
            <div class="item">
              <h6>Web Development</h6>
              <p>
                Website development solutions such as dynamic E-commerce
                websites,Content Management Systems (CMS),bespoke web
                applications,insightful reporting dashboards and comprehensive
                website maintenance and support services.<br /><br />SKILLS<br />HTML,
                CSS,PHP, Node.js, Python,JavaScript(React, Angular, Vue.js)
                Django, Ruby on Rails, Express.js MySQL, PostgreSQL,MongoDB
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6">
            <div class="item">
              <h6>Mobile Development</h6>
              <p>
                We have Extensive experience in creating dynamic software
                applications that run on mobile devices. We pride in development
                of native, cross platform native and hybrid mobile applications
                as well as progress web applications.<br /><br />SKILLS<br />
                JavaScript, Android/IOs, Kotlin,JavaScript,Kotlin/RESTful
                APIs,Mobile libraries for networking, Profilling and deubbing
                mobile applications
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6">
            <div class="item">
              <h6>Project Management</h6>
              <p>
                We possess Comprehensive project management expertise,
                underscoring our commitment to delivering successful outcomes
                for our clients through seamless planning, execution, and
                completion of projects, utilizing industry-best practices and
                methodologies.<br /><br />SKILLS<br />

                Leadership Skills, Stakeholder Management, Client Management,
                Agile,Scrum,Kanban,Waterfall,ITIL,PRINCE2, Google
                Workspace,Microsoft
                Project,Jira,Asana,Trello,Clickup,Monday.com.
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6">
            <div class="item">
              <h6>System Testing</h6>
              <p>
                We have extensive Knowledge and experience in manual and
                automated testing of software applications to evaluate their
                compliance to system requirements and end user needs.<br /><br />SKILLS<br />
                Understanding pr software applications testing process,
                Experience in Development of Test plans, Hands-on experience
                with automated testing tools like Master selenium and Manual
                Testing.

                <br /><br />System Training and Support<br />
                We have a proven record in system end user training and level
                1&2 system support. Prepare Training Manuals System User
                training
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6">
            <div class="item">
              <h6>UI/UX Designing</h6>
              <p>
                We work with clients to understand their data and formats they
                would want such data presented. This include converting manual
                to digital data, cleaning existing digital data as well as
                analysis the data to achieve client’s needs.<br /><br />SKILLS<br />
                SSL implementation, User Experience (UX) and User Interface (UI)
                Design, Theme Development and Customization
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6">
            <div class="item">
              <h6>Data Entry</h6>
              <p>
                We work with clients to understand their data and formats they
                would want such data presented. This include converting manual
                to digital data, cleaning existing digital data as well as
                analysis the data to achieve client’s needs.<br /><br />SKILLS<br />
                Typing, Data Conversion/ Formatting/Cleanup, Transcription, Data
                Analysis.
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>

    <div id="products" class="pt-5 mt-8"> 

    <div class="pt-5" style="background-color: #f2f2f2">
      <div class="container">
        <div class="row">
          <div class="section-head col-sm-12">
            <h1>Products</h1>
            <p>
              We help you to build high-quality digital solutions and products
              as well as deliver a wide range of related professional services.
              We are providing world-class service to our clients.
            </p>
          </div>
        
          <div class="col-lg-4 col-sm-6">
            <div class="container">
              <div class="row">

              <div class="item" style="border:2px solid black;"> 
                
                <span style="margin:auto;" class="icon feature_box_col_one"><i class="fa fa-laptop"></i></span>
              
                <h6>Web App Development</h6>
              <p>
                Our Custom Web Development Services Include Both Front-End And
                Back-End Development. Whether It Is Enhancing An Existing App Or
                Architecting An Enterprise App, Our Developers Are Up For The
                Challenge.
              </p>
            </div>
            </div>
            </div>
          </div>

          <div class="col-lg-4 col-sm-6">
            <div class="container" >
              <div class="row" >
              <div class="item" style="border:2px solid black;"> <span style="margin:auto;"  class="icon feature_box_col_one"><i class="fa fa-laptop"></i></span>
              <h6>Revenue Management System</h6>
              <p>
                We Have Expertise In Creating Multi-Platform Revenue Management
                Systems, Solutions For Both Android And IOS Devices. Using
                Laravel, Vue js, We Offer Custom Web Apps That Runs Smoothly On
                Multiple Platforms.
              </p>
            </div>
            </div>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6">
            <div class="item" style="border:2px solid black;"> <span style="margin:auto;"  class="icon feature_box_col_two"><i class="fa fa-android"></i></span>
              <h6>Web Portals</h6>
              <p>
                We Have Expertise In Creating Multi-Platform Web Apps Solutions
                For Both Android And IOS Devices. Using Laravel, Vue Js, And
                React Native, We Offer Custom Mobile App That Runs Smoothly On
                Multiple Platforms.
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6">
            <div class="item" style="border:2px solid black;"> <span style="margin:auto;"  class="icon feature_box_col_two"><i class="fa fa-android"></i></span>
              <h6>Wildlife Conservancy Systems</h6>
              <p>
                The Wildlife Conservancy Systems that we provide have their own
                set of charms.
              </p>
            </div>
          </div>

          <div class="col-lg-4 col-sm-6">
            <div class="item" style="border:2px solid black;"> <span style="margin:auto;"  class="icon feature_box_col_two"><i class="fa fa-magic"></i></span>
              <h6>Business Process Management Systems(BPM)</h6>
              <p>
                The Business Process Management Systems(BPM) that we provide
                have their own set of charms.
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6">
            <div class="item" style="border:2px solid black;"> <span style="margin:auto;"  class="icon feature_box_col_two"><i class="fa fa-android"></i></span>
              <h6>Monitoring & Evaluation Systems(M&E)</h6>
              <p>
                The Monitoring & Evaluation Systems(M&E) that we provide have
                their own set of charms.
              </p>
            </div>
          </div>

          <div class="col-lg-4 col-sm-6">
    <div class="item" style="border:2px solid black;"> <span style="margin:auto;"  class="icon feature_box_col_two"><i class="fa fa-android"></i></span>
              <h6>Payment Gateway Solutions</h6>
              <p>
                The Payment Gateway Solutions that we provide have their own set
                of charms.
              </p>
            </div>
          </div>

          <div class="col-lg-4 col-sm-6">
            <div class="item" style="border:2px solid black;"> <span style="margin:auto;"  class="icon feature_box_col_two"><i class="fa fa-android"></i></span>
              <h6>Enterprise Resource Planning Systems(ERPs)</h6>
              <p>
                The Enterprise Resource Planning Systems(ERPs) that we provide
                have their own set of charms.
              </p>
            </div>
          </div>

          <div class="col-lg-4 col-sm-6">
            <div class="item" style="border:2px solid black;"> <span style="margin:auto;"  class="icon feature_box_col_two"><i class="fa fa-magic"></i></span>
              <h6>Electronic Document and Records ManagementSystems(EDRMS)</h6>
              <p>
                The Payment Gateway Solutions that we provide have their own set
                of charms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>

  <div class="pt-5 mt-8" id="service">





    <div class="pt-5 mt-8" >
      <div class="container">
        <div class="row">
          <div class="section-head-1 col-sm-12" style="text-align: center">
            <h4 style="margin-top: -5rem" id="portfolio">
              <span>Our</span> Work
            </h4>

            <p>
              The objective of IT Company is to enable a large number of youth
              to take up <br />industry-relevant skill training that will help
              them<br />
              in securing a better livelihood.
            </p>
          </div>

          <div class="col-lg-4 col-sm-6">
            <div class="item" id="revenue-management">
              <!-- Video content -->
              <video
                oncontextmenu="return false;"
                width="320"
                height="240"
                controls
              >
                <source src="/images/LoginTakeRec.mp4" type="video/mp4" />
              </video>

              <p>Revenue Management System.<br /><br /><br /></p>
            </div>
          </div>

          <div class="col-lg-4 col-sm-6">
            <div class="item">
              <!-- Video content -->
              <video
                oncontextmenu="return false;"
                width="320"
                height="240"
                controls
              >
                <source src="/images/My Businesses Done.mp4" type="video/mp4" />
              </video>

              <p>Electronic Document Management System .<br /><br /><br /></p>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6">
            <div class="item" id="wild_app">
              <!-- Video content -->
              <video
                oncontextmenu="return false;"
                width="320"
                height="240"
                controls
              >
                <source src="/images/WILD_FINAL.mp4" type="video/mp4" />
              </video>

              <p>Wild Management System.<br /><br /><br /></p>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6" id="ilab-pay">
            <div class="item">
              <!-- Video content -->
              <video
                oncontextmenu="return false;"
                width="320"
                height="240"
                controls
              >
                <source src="/images/payment_gateway.mp4" type="video/mp4" />
              </video>

              <p>Payment Gateway System.<br /><br /><br /></p>
            </div>
          </div>

        </div>
      </div>

      <!-- <section>
        <div class="pt-5 pb-5">
          <div class="row">
            <div class="section-head col-sm-12" id="service">
              <h1>Our Partners</h1>

              <div
                class="owl-carousel clients-carousel"
                style="text-align: center; justify-content: center"
              >
                <img src="/images/img3.png" alt="Partner1 Logo" />
                <img src="/images/img4.png" alt="Partner2 Logo" />
                <img src="/images/img5.png" alt="Partner3 Logo" />
                <img src="/images/img6.png" alt="Partner4 Logo" />
                <img src="/images/img7.png" alt="Partner5 Logo" />
                <img src="/images/img8.png" alt="Partner6 Logo" />
                <img src="/images/img9.png" alt="Partner7 Logo" />
                <img src="/images/img10.png" alt="Partner6 Logo" />
                <img src="/images/img11.png" alt="Partner8 Logo" />
                <img src="/images/img12.png" alt="Partner9 Logo" />
              </div>
            </div>
          </div>
        </div>
      </section> -->

      <div class="clients">
        <div class="container">
          <div class="section-header">
            <h2>Our Partners</h2>
            <p>We don't just build softwares, we build your business.</p>
          </div>
          <div class="owl-carousel clients-carousel">
            <img src="/images/img3.png" alt="Partner1 Logo" />
            <img src="/images/img4.png" alt="Partner2 Logo" />
            <img src="/images/img5.png" alt="Partner3 Logo" />
            <img src="/images/img6.png" alt="Partner4 Logo" />
            <img src="/images/img7.png" alt="Partner5 Logo" />
            <img src="/images/img8.png" alt="Partner6 Logo" />
            <img src="/images/img9.png" alt="Partner7 Logo" />
            <img src="/images/img10.png" alt="Partner6 Logo" />
            <img src="/images/img11.png" alt="Partner8 Logo" />
            <img src="/images/img12.png" alt="Partner9 Logo" />
          </div>
        </div>
      </div>



      <section id="contact" class="contact">
  <h1 class="heading">Contact Us</h1>
  <div class="contact-container" style="display: flex; flex-wrap: wrap; justify-content: space-between;">

    <!-- Contact Details -->
    <div class="contact-details" style="flex: 1; width:50%;">
      <h3 class="heading-edited">Our Contact Details</h3>
      <h2 style="margin-top: 0;"><i class="fas fa-map-marker-alt"></i> Location</h2>
      <p>Strathmore University Student Centre, Keri Road<br />Nairobi, Kenya</p>

      <h2><i class="fas fa-envelope"></i> Email</h2>
      <p><a href="mailto:ilabafrica@strathmore.edu">itoutsourcing@strathmore.edu</a></p>

      <h2><i class="fas fa-phone"></i> Phone</h2>
      <p><a href="tel:+254703034616">+254 703 034 616 / 0717 306 466 / 0700 138 739</a></p>

      <h2><i class="fas fa-clock"></i> Working Hours</h2>
      <p>Mon - Fri<br />8:00 AM - 5:00 PM</p>
    </div>

    <!-- Contact Form -->
    <div class="contact-form" style="flex: 1; width:50%;">
      <form action="./contactme.php" method="POST">
        <input
          type="text"
          name="name"
          placeholder="Name"
          class="contact-form-txt"
          required
          style="border-radius: 0; margin-bottom: 10px; width: 100%;"
        />
        <input
          type="tel"
          id="phone"
          name="phone"
          pattern="[0-9]{10}"
          required
          placeholder="Contact number"
          maxlength="10"
          class="contact-form-phone"
          style="border-radius: 0; margin-bottom: 10px; width: 100%;"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          class="contact-form-email"
          required
          style="border-radius: 0; margin-bottom: 10px; width: 100%;"
        />
        <textarea
          placeholder="Your Message"
          name="message"
          class="contact-form-txtarea"
          required
          style="border-radius: 0; margin-bottom: 10px; width: 100%;"
        ></textarea>
        <input
          type="submit"
          value="Submit"
          name="submit"
          class="contact-form-btn"
          style="background-color: blue; color: white;"
        />
      </form>
    </div>
  </div>
</section>

<!-- Map Section -->
<section id="map" class="map">
  <div class="contact-map">
    <!-- Google Maps iframe -->
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.008028693293!2d36.81471141744388!3d-1.3103990000000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10a52993c8b7%3A0x98d5e6ecb1b4989a!2sStrathmore%20University!5e0!3m2!1sen!2ske!4v1644684739958!5m2!1sen!2sin"
      width="100%"
      height="450"
      style="border: 0"
      allowfullscreen=""
      loading="lazy"
    ></iframe>
  </div>
</section>


      <div class="footer">
        <div class="footer-top">
          <div class="container">
            <div class="row">
              <div class="col-lg-3 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <i class="ion-ios-arrow-forward"></i> <a href="#">Home</a>
                  </li>
                  <li>
                    <i class="ion-ios-arrow-forward"></i>
                    <a href="#about">About us</a>
                  </li>
                  <li>
                    <i class="ion-ios-arrow-forward"></i>
                    <a href="#service">Our services</a>
                  </li>
                  <li>
                    <i class="ion-ios-arrow-forward"></i>
                    <a href="#contact">Consultancy Services</a>
                  </li>
                  <li>
                    <i class="ion-ios-arrow-forward"></i>
                    <a href="#contact">Contact</a>
                  </li>
                </ul>
              </div>

              <div
                class="col-lg-3 col-md-6 footer-contact"
                style="font-size: 1.5rem"
              >
                <h4>Contact Us</h4>
                <p>
                  Strathmore University<br />
                  Olesankale Link Road<br />
                  Nairobi, Kenya <br />
                  <strong>Phone:</strong> +254 /0703 034 616/0717306466/0700138739<br />
                  <strong>Email:</strong> itoutsourcing@strathmore.edu<br />
                </p>

                <div class="social-links">
                  <a
                    href="https://www.facebook.com/StrathmoreUniversity"
                    target="_blank"
                  >
                    <i class="ion-logo-facebook"></i>
                  </a>

                  <a href="https://twitter.com/login?lang=en"
                    ><i class="ion-logo-twitter"></i
                  ></a>
                  <a
                    href="https://www.linkedin.com/school/strathmore-university/"
                    target="_blank"
                  >
                    <i class="ion-logo-linkedin"></i>
                  </a>

                  <a
                    href="https://www.instagram.com/strathmore.university/"
                    target="_blank"
                  >
                    <i class="ion-logo-instagram"></i>
                  </a>

                  <a href="https://accounts.google.com/" target="_blank">
                    <i class="ion-logo-googleplus"></i>
                  </a>
                </div>
              </div>

              <div class="col-lg-3 col-md-6 footer-newsletter">
                <h4>Subscription</h4>
                <p>
                  With Our Skills Put Together, You Get An Ensemble Capable Of
                  Doing Anything And Everything Your Brand Needs. Subscribe Here
                  To Get Our Latest Updates.
                </p>
                <form action="" method="post">
                  <input type="email" name="email" /><input
                    type="submit"
                    value="Subscribe"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>

        <div class="container">
          <div class="row align-items-center">
            <div
              class="col-md-6 copyright"
              style="color: #fff; font-size: 1.3rem"
            >
              Copyright &copy; 2024 ItOutsourcing, @iLabAfrica. All Rights
              Reserved.
            </div>
          </div>
        </div>

        <a href="#" class="back-to-top"><i class="ion-ios-arrow-up"></i></a>
      </div>
    </div>

    
  </div>


  </div>

  <!-- </div> -->
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
