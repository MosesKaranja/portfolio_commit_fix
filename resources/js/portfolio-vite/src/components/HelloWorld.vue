<script setup>
import { ref } from "vue";

import Carousel from "./Carousel.vue";

import Service from "../views/Service.vue"
import MainService from "../views/MainService.vue";

// import ViewMore from "../views/ViewMore.vue";
// export default{
//   components:{
//     ViewMore,

//   }
// }

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
          style="width: 197px; height: 50px; object-fit: contain"
          src="/images/ilab_africa_stolen.png"
          alt=""
      /></a>
      <div class="fas fa-bars"></div>
      <nav class="navbar">
        <ul>
          <li onclick="linkClicked('home')">
            <a href="#" class="link-hover" id="home-link">Home</a>
          </li>
      <li onclick="linkClicked('about_us')">
        <a href="#about" id="about-link">About Us</a>
      </li>
      <li onclick="linkClicked('services')">
        <a href="#services" id="services-link">Services</a>
      </li>
      <li onclick="linkClicked('contact_us')">
        <a href="#contact" id="contact-link">Contact Us</a>
      </li>
    </ul>
  </nav>
</header>



    <div id="home-link"></div>

    <div
      id="carouselExampleIndicators"
      class="carousel slide ban_img"
      data-ride="carousel"
      style="margin-top: 81px"
    >
      <ol class="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          class="active"
        ></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
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
            <strong
              ><span
                >Cutting-edge Tech Solutions for your Every Need</span
              ></strong
            >
            <p>
              Step into the future with us, where we redefine innovations in<br/>
              Web, Mobile, Enterprise technologies using traditional coding<br/>
              techniques, while harnessing the simplicity and speed of no-code<br/>
              tools to accelerate development cycles and empower clients to take<br/>
              control of their solutions. We empower our clients with the <br/>
              tools they need to thrive in the digital age.
            </p>
            <!-- <a href="#revenue-management">View Demo</a>
            <a href="#">Learn More</a> -->
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
            <strong><span>Web Development</span></strong>
            <p>
              With expertise honed through over 10 years of experience,<br /> 
              we embrace both traditional coding methods and no-code tools<br /> 
              to empower our clients to navigate the complexities of the digital<br />
              landscape with confidence and ease.  We are in the frontline of<br />
              innovation and adaptability to deliver to our clients<br />
              tailored, efficient, and future-proof web solutions that drive results.

            </p>
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
            <strong><span>Mobile Development</span></strong>
            <p>
              With our team of UX, UI Designers, developers<br>
              and and project management experts encompassing<br>
              a blend of technical and problem solving skills,<br>
              we revolutionize mobile user experience with<br>
              our intuitive, secure and scalable mobile applications.
            </p>
            <!-- <a href="#ilab-pay">View Demo</a>
            <a href="#">Learn More</a> -->
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
            <strong><span>Enterprise Application Development</span></strong>
            <p>
              In the evolving business world, our team has<br>
              extensive experience across a wide range of<br>
              industries including human resource, procurement,<br>
              document management, and accounting, bringing our<br>
              immeasurable knowledge, skills, and passion in<br>
              every project we deliver.<br>
            </p>
          </div>
        </div>


        <div class="carousel-item">
          <img src="/images/img3.jpg" style="maxwidth: 100%; height: 600px; objectfit: cover" class="d-block w-100"
            alt="..." />

          <div class="ban_text">
            <strong><span>Tailored Solutions with Shopify and Prestashop Development</span></strong>
            <p>
              We leverage the intuitive design and user-friendly interface of <br/>
              Shopify for building visuallystunning storefronts, while tapping <br/>
              into the extensive e-commerce functionalities of PrestaShop for <br/> 
              robust backend management and scalability. Our team of Shopify <br/> 
              and prestashop experts combines creativity, technical prowess, <br/> 
              and industry insights to deliver tailored solutions that exceed your expectations.
            </p>

          </div>
        </div>


        <div class="carousel-item">
          <img src="/images/img3.jpg" style="maxwidth: 100%; height: 600px; objectfit: cover" class="d-block w-100"
            alt="..." />

          <div class="ban_text">
            <strong><span>Seamlessly Integrated Solutions with Webflow</span></strong>
            <p>
              Our approach is rooted in the fusion of creativity<br />
              and functionality. With Webflow's intuitive visual<br />
              editor. We collaborate with our clients to craft<br />
              visually stunning  that wows your audience,<br />
              drives conversions, and propels your business to new heights.
            </p>

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
    <br /><br /><br />
    <section
      id="about"
      class="about"
      style="max-width: 1280px; margin: 0 auto;"
    >
    <section id="home" class="">
  <h1 class="heading">About us</h1>
  <div class="row">
    <div class="content">
      <p>We focuse on customizing and developing solutions for clients by providing consulting services and end-to-end support for the entire product development lifecycle in organizations, through developing, deploying, and managing it systems solutions. 
      we pride ourselves on being a dynamic team of skilled developers and project management professionals dedicated to delivering innovative it solutions for both government and corporate sectors.</p>

      <div id="services"></div>

    </div>
  </div>
</section>
</section>


    <div> 
      <h1 class="heading-edited-center">Services</h1>
      <p class="our-services">Let us embark on a journey of innovation, agility and transformation together.</p>
      
    </div>


    
    <MainService
    card_header="Web Development" 
    card_title="We collaborate closely with our clients to understand their goals, forecast their needs and exceed expectations. With expertise honed through over 10 years of experience  we embrace both traditional coding methods and no-code tools to empower our clients to navigate the complexities of the digital landscape with confidence and ease. We harness the power of Agile approach to give our clients unprecedented efficiency, adaptability and flexibility in each project we deliver."

      :skills="['REACT', 'ANGULAR', 'VUE', 'JSNODE', 'JS', 'PHP', 'PYTHON']" 
      :skills_no_code="['E-COMMERCE WEB DEVELOPMENT', 'SHOPIFY', 'WORDPRESS', 'PRESTASHOP', 'PLUGIN DEVELOPMENT']"
      card_1_url="/images/eGov Portfolio Video.mp4"
      card_1_title="E-Governance Solution"
      card_1_text=" Our Solution defines the future of governance, where citizens are at the heart of every decision and administrative process. Our revolutionary user-centric eGovernance solution is designed to streamline administrative tasks, delivering... "
      card_1_view_more="wild" 

      card_2_url="/images/wild_demo_9_feb.mp4" 
      card_2_title="E-Conservancy Solution"
      card_2_text="Our solution is in the forefront of conservation technology. It is a state-of-the-art web platform with a mobile app designed specifically for conservancies in protected and community areas. Our platform revolutionizes the way conservationists collect."
      card_2_view_more="eConservancy"

      card_3_url="" 
      card_3_title="EDRMS"
      card_3_text="Our innovative document record management solution has assisted over 7 of our clients to unlock new levels of efficiency, collaboration and security by; a) organizing their documents into a centralized location saving users the hassle of sifting through piles of papers or digital folders."
      card_3_view_more="eRevenueManagementApp" 


      card_4_url="" 
      card_4_title="Ecommerce Site"
      card_4_text="We created a user-friendly and attractive eCommerce website for the company using Prestashop, a platform that enables fast and easy development with minimal coding. The website allows the company to sell electronic products online and get them delivered to the clients. We also developed a plugin to connect the website with a payment provider, giving the clients a convenient way to pay for their orders."
      card_4_view_more="eRevenueManagementApp"

      card_5_url="" 
      card_5_title="Alumni Portal"
      card_5_text="Our solution provides an opportunity for continued communication and collaboration between students who have gone through and completed various training programmes. Learning can therefore be enhanced by allowing all participants to share best practices, new developments and seek assistance in their day to day activities. Technology enables the connection of learners globally, increasing the value of the knowledge that can be shared between themselves."
      card_5_view_more="eRevenueManagementApp"

      card_6_url="" 
      card_6_title="Shopify Plugin"
      card_6_text="Our solution simplifies and streamlines tax compliance operations for governments. Our eCompliance solution automates repetitive tasks and workflows, saving you time and reducing the risk of human error. From assigning tasks and scheduling audits to sending reminders and generating reports, our solution streamlines your compliance processes from start to finish."
      card_6_view_more="eRevenueManagementApp"

      
      />



    <Service card_header="Mobile Development"
      card_title="In a world where mobile is king, we assist clients to have a standout presence in the palm of their customers’ hands. With our team of UX, UI Designers, developers and project management experts encompassing a blend of technical and problem solving skills, we revolutionize mobile user experience with our intuitive, secure and scalable mobile applications."
      :skills="['ANDROID MOBILE DEVELOPMENT', 'IOS MOBILE DEVELOPMENT', 'FLUTTER DEVELOPMENT']" card_1_url=""
      card_1_title="JusticeLens"
      card_1_text="Our solution empowers the individuals at the forefront of defending human rights with the right tools. They can be able to conveniently and securely capture information on human rights and election malpractices on the ground. Such information is pivotal in protecting the democratic space and protecting the wellbeing of the citizens."
      card_1_view_more="JusticeLens" card_2_url="" card_2_title="Exam Revision Game App"
      card_2_text="Our solution enhances the process of revision for students by making use of the latest mobile technologies available. Students can interact with a gamified mobile app and answer quizzes and examination questions earning points and immediate feedback on the answers. Appropriate reports are provided enabling the students and their parents to monitor progress and identify areas for improvement."
      card_2_view_more="eConservancy" card_3_url="" card_3_title="Tax eCompliance"
      card_3_text="Our solution simplifies and streamlines tax compliance operations for governments. Our eCompliance solution automates repetitive tasks and workflows, saving you time and reducing the risk of human error. From assigning tasks and scheduling audits to sending reminders and generating reports, our solution streamlines your compliance processes from start to finish."
      card_3_view_more="eRevenueManagementApp" />

    <Service card_header="Enterprise Applications"
      card_title="We partner with clients to streamline their business operations with tailored solutions, enabling them realize tangible results. In the evolving business world, our team has extensive experience across a wide range of industries including human resource, procurement, document management and accounting, bringing our clients immeasurable knowledge, skills and passion in every project we deliver."
      :skills="['JAVA', 'POSTGRES', 'VUE JS', 'SPRINGBOOT']" card_1_url=""
      card_1_title="Business Process Management (BPM)."
      card_1_text="Our solution empowers the individuals at the forefront of defending human rights with the right tools. They can be able to conveniently and securely capture information on human rights and election malpractices on the ground. Such information is pivotal in protecting the democratic space and protecting the wellbeing of the citizens."
      card_1_view_more="JusticeLens" card_2_url="" card_2_title="eProcurement"
      card_2_text="Our solution enhances the process of revision for students by making use of the latest mobile technologies available. Students can interact with a gamified mobile app and answer quizzes and examination questions earning points and immediate feedback on the answers. Appropriate reports are provided enabling the students and their parents to monitor progress and identify areas for improvement."
      card_2_view_more="eConservancy" card_3_url="" card_3_title="eHR"
      card_3_text="Our solution simplifies and streamlines tax compliance operations for governments. Our eCompliance solution automates repetitive tasks and workflows, saving you time and reducing the risk of human error. From assigning tasks and scheduling audits to sending reminders and generating reports, our solution streamlines your compliance processes from start to finish."
      card_3_view_more="eRevenueManagementApp" />


    <!-- <section class="row mt-3 mb-5" style="max-width: 1280px;margin: 0 auto; padding: 0">
      <div class="card p-5">
        <div class="card-header pl-3 pr-3">
         
          <h1 class="">No/Low Code Building</h1>
          <p class="paragraph-moses">
            We revolutionize the way our clients build solutions for their business by unleashing the power of low/no-code development to assist clients unlock their full brand potential on the web and achieve unparalleled agility. We leverage new tools and technologies in the dynamic field of low/no code to craft creative solutions by designing user-friendly interfaces and unique workflows for our clients.
          </p>

          <div class="skills">
            <h5
              class=""
              style="
                font-size: 2.3rem;
                color: grey;
                background-color: transparent;
              "
            >
              Skills
            </h5>
            <ul
              class="skills-list"
              style="list-style-type: none; padding-left: 0"
            >
              <li style="color: black; font-size: 1.5rem">E-COMMERCE WEB DEVELOPMENT</li>
              <li style="color: black; font-size: 1.5rem">SHOPIFY</li>
              <li style="color: black; font-size: 1.5rem">WORDPRESS</li>
              <li style="color: black; font-size: 1.5rem">PRESTASHOP</li>
              <li style="color: black; font-size: 1.5rem">PLUGIN DEVELOPMENT</li>  
            </ul>
          </div>
          <br>
          <h5 class="" style="font-size: 2.3rem;color: #808080;">Projects</h5>
        </div>

        <div class="card-body"> 
          <div class="row" id="experiment">
            <div class="col-sm-4 card" style="border-radius: 1rem">
              <img src="/images/pic2.png" /> 
              <div class="card-body">
                <h2 class="card-title">Ecommerce Site</h2>
                <p class="paragraph-moses">
                  We created a user-friendly and attractive eCommerce website for the company using Prestashop, a platform that enables fast and easy development with minimal coding. The website allows the company to sell electronic products online and get them delivered to the clients. We also developed a plugin to connect the website with a payment provider, giving the clients a convenient way to pay for their orders.
                </p>
                <div class="d-flex justify-content-end">
                  <router-link
                    :to="{ query: { current: 'wild' }, name: 'ViewMore' }"
                    style="position:absolute;right:0;bottom:0; margin-right:8px;margin-bottom:8px;"
                    ><a href="#" class="btn btn-primary"
                      >View More</a
                    ></router-link
                  >
                </div>
              </div>
            </div>

            <div class="col-sm-4 card" style="border-radius: 1rem">
    <img src="/images/pic2.png" />

    <div class="card-body">
        <h2 class="card-title">Alumni Portal</h2>
        <p class="paragraph-moses">
            Our solution provides an opportunity for continued communication and collaboration between students who have gone through and completed various training programmes. Learning can therefore be enhanced by allowing all participants to share best practices, new developments and seek assistance in their day to day activities. Technology enables the connection of learners globally, increasing the value of the knowledge that can be shared between themselves.
        </p>
        <div class="d-flex justify-content-end">
            <router-link
                :to="{
                query: { current: 'eConservancy' },
                name: 'ViewMore',
                }"
                style="position:absolute;right:0;bottom:0; margin-right:8px;margin-bottom:8px;"
            >
                <a href="#" class="btn btn-primary" onclick="scrollToTop()">View More</a>
            </router-link>
        </div>
    </div>
</div> 

            <div class="col-sm-4 card" style="border-radius: 1rem">
              <img src="/images/pic2.png" />

              <div class="card-body">
                <h2 class="card-title">Shopify Plugin </h2>
                <p class="paragraph-moses">
                  Our solution simplifies and streamlines tax compliance operations for governments. Our eCompliance solution automates repetitive tasks and workflows, saving you time and reducing the risk of human error. From assigning tasks and scheduling audits to sending reminders and generating reports, our solution streamlines your compliance processes from start to finish.
                </p>
                <div class="d-flex justify-content-end">
                  <router-link
                    :to="{ query: { current: 'wild' }, name: 'ViewMore' }"
                    style="position:absolute;right:0;bottom:0; margin-right:8px;margin-bottom:8px;"
                    ><a href="#" class="btn btn-primary"
                    
                      >View More</a
                    ></router-link
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> -->

    <div>

        <div class="clients" style="max-width: 1280px;margin:0 auto;">
          <div class="">
            <div class="section-header">
              <h2>Our Partners</h2>
              <p>We don't just build softwares, we build your business.</p>
            </div>
            <div class="owl-carousel clients-carousel">
              <img src="/images/img3.png" style="width: 194px;height: 150px;" alt="Partner1 Logo" />
              <img src="/images/img4.png" style="width: 194px;height: 150px;" alt="Partner2 Logo" />
              <img src="/images/img5.png" style="width: 194px;height: 150px;" alt="Partner3 Logo" />
              <img src="/images/img6.png" style="width: 194px;height: 150px;" alt="Partner4 Logo" />
              <img src="/images/img7.png" style="width: 194px;height: 150px;" alt="Partner5 Logo" />
              <img src="/images/img8.png" style="width: 194px;height: 150px;" alt="Partner6 Logo" />
              <img src="/images/img9.png" style="width: 194px;height: 150px;" alt="Partner7 Logo" />
              <img src="/images/img10.png" style="width: 194px;height: 150px;" alt="Partner8 Logo" />
              <img src="/images/img11.png" style="width: 194px;height: 150px;" alt="Partner9 Logo" />
              <img src="/images/img12.png" style="width: 194px;height: 150px;" alt="Partner10 Logo" />

              <img src="/images/AAEA.png" style="width: 194px;height: 150px;" alt="Partner11 Logo" />
              <img src="/images/amedo-centres.png" style="width: 194px;height: 150px;" alt="Partner12 Logo" />
              <img src="/images/icpak.png" style="width: 194px;height: 150px;" alt="Partner13 Logo" />
              <img src="/images/imlu.png" style="width: 194px;height: 150px;" alt="Partner14 Logo" />
              <img
                src="/images/laikipia-wildlife-forum-logo-white-retina.png"
                alt="Partner15 Logo"
              />
              <img src="/images/paulines.png" alt="Partner16 Logo" />
              <img src="/images/task.png" alt="Partner17 Logo" />
            </div>
          </div>
        </div>

        <section id="contact" style="max-width: 1280px;margin: 0 auto;" class="contact">
          <h1 class="heading">Contact Us</h1>
          <div
            class="contact-container"
            style="
              display: flex;
              flex-wrap: wrap;
              justify-content: space-between;
            "
          >
            <!-- Contact Details -->
            <div class="contact-details" style="flex: 1; width: 50%">
              <h3 class="heading-edited">Our Contact Details</h3>
              <h2 style="margin-top: 0">
                <i class="fas fa-map-marker-alt"></i> Location
              </h2>
              <p>
                Strathmore University Student Centre, Keri Road<br />Nairobi,
                Kenya
              </p>

              <h2><i class="fas fa-envelope"></i> Email</h2>
              <p>
                <a href="mailto:ilabafrica@strathmore.edu"
                  >itoutsourcing@strathmore.edu</a
                >
              </p>

              <h2><i class="fas fa-phone"></i> Phone</h2>
              <p>
                <a href="tel:+254703034616"
                  >+254 703 034 616 / 0717 306 466 / 0700 138 739</a
                >
              </p>

              <h2><i class="fas fa-clock"></i> Working Hours</h2>
              <p>Mon - Fri<br />8:00 AM - 5:00 PM</p>
            </div>

            <!-- Contact Form -->
            <div class="contact-form" style="flex: 1; width: 50%">
              <form action="./contactme.php" method="POST">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  class="contact-form-txt"
                  required
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
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  class="contact-form-email"
                  required
                />
                <textarea
                  placeholder="Your Message"
                  name="message"
                  class="contact-form-txtarea"
                  required
                ></textarea>
                <input
                  type="submit"
                  value="Submit"
                  name="submit"
                  class="contact-form-btn"
                />
              </form>
            </div>
          </div>
        </section>

        <!-- Map Section -->
        <section id="map" class="mb-2" style="max-width: 1280px;margin: 0 auto;">
          <div class="contact-map">
            <!-- Google Maps iframe -->
            <h1 class="heading" style="display: block; text-align: center">
              Find Us
            </h1>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.008028693293!2d36.81471141744388!3d-1.3103990000000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10a52993c8b7%3A0x98d5e6ecb1b4989a!2sStrathmore%20University!5e0!3m2!1sen!2ske!4v1644684739958!5m2!1sen!2sin"
              width="100%"
              height="400px"
              style="display: block; border: 0"
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
        </section>

        <div class="footer">
          <div class="footer-top">
            <div class="container" style="padding-left: 0;padding-right: 0;max-width: 1280px; margin-left:auto;margin-right: auto;">
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
                      <a href="#service">Services</a>
                    </li> 
                    <li>
                      <i class="ion-ios-arrow-forward"></i>
                      <a href="#contact">Contact Us</a>
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
                    <strong>Phone:</strong> +254 /0703 034
                    616/0717306466/0700138739<br />
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
                    With our skills put together, You get an ensemble capable of
                    doing anything and everything your brand needs. Subscribe
                    here to get our latest updates.
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

          <div class="container" style="padding-left: 0;max-width: 1280px;">
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
    

</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
