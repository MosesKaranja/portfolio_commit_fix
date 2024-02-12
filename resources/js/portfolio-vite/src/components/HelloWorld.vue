<script setup>
import { ref } from "vue";

import Carousel from "./Carousel.vue";

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
  <a href="#" class="logo">
    <img
      style="width: 197px; height: 50px; object-fit: contain"
      src="/images/ilab_africa_stolen.png"
      alt=""
    />
  </a>
  <div class="fas fa-bars"></div>
  <nav class="navbar">
    <ul>

      <li onclick="linkClicked('home')">
            <a href="#" class="link-hover" id="home-link">Home</a>
          </li>
      <li onclick="linkClicked('about_us')">
        <a href="#about" id="about-link">About Us</a>
      </li>
      <li onclick="linkClicked('Services')">
        <a href="#services" class="link-hover" id="services-link">Services</a>
      </li>
      <li onclick="linkClicked('contact_us')">
        <a href="#contact" id="contact-link">Contact Us</a>
      </li>
    </ul>
  </nav>
</header>



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
              Step into the future with us, where we redefine innovations in
              Web Mobile, Enterprise and Low/No Code technologies. We empower our clients with the tools they need to thrive in the digital age.
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
              With expertise honed through over 10 years of experience we leverage on the latest technologies to build responsive designs and seamless functionalities across devices
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
              With our team of UX, UI Designers, developers and and project management experts encompassing a blend of technical and problem solving skills, we revolutionize mobile user experience with our intuitive, secure and scalable mobile applications
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
            <strong><span>Enterprise application development</span></strong>
            <p>
              In the evolving business world, our team has extensive experience across a wide range of industries including human resource, procurement, document management, and accounting, bringing our immeasurable knowledge, skills, and passion in every project we deliver.
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
            <strong><span>Low/No Code Development</span></strong>
            <p>
              We leverage new tools and technologies in the<br />
              dynamic field of low/no code to craft creative<br />
              solutions by designing user-friendly interfaces<br />
              and unique workflows for our clients.
            </p>
            <!-- <a href="#ilab-pay">View Demo</a>
            <a href="#">Learn More</a> -->
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
      style="max-width: 1140px; margin: 0 auto"
    >
    <section id="home" class="">
  <h1 class="heading">About us</h1>
  <div class="row">
    <div class="content">
      <p>we focuse on customizing and developing solutions for clients by providing consulting services and end-to-end support for the entire product development lifecycle in organizations, through developing, deploying, and managing it systems solutions. 
      we pride ourselves on being a dynamic team of skilled developers and project management professionals dedicated to delivering innovative it solutions for both government and corporate sectors.</p>

    </div>
  </div>
</section>
</section>


    <div> 
      <h1 class="heading-edited-center">Services</h1>
      <p class="our-services">Let Us Embark on a Journey of Innovation, Agility and Transformation Together.</p>
      
    </div>

    <section class="row container mt-3 mb-5" style="margin: 0 auto; padding: 0; border-radius: 10px;">
      <div class="card p-5">
        <div class="card-header pl-3 pr-3">
          
          <h1 class="">Web Development</h1>
          <p class="paragraph-moses">
            We collaborate closely with our clients to understand their goals,
            forecast their needs and exceed expectations. With expertise honed
            through over 10 years of experience we leverage on the latest
            technologies to build responsive designs and seamless
            functionalities across devices. We harness the power of Agile
            approach to give our clients unprecedented efficiency and
            flexibility in each project we deliver.
          </p>

          <div class="skills">
            <h5
              class=""
              style="
                font-size: 2.3rem;
                color: grey;
                ;
              "
            >
              Skills
            </h5>
            <ul
              class="skills-list"
              style="list-style-type: none; padding-left: 0"
            >
              <li style="color: black; font-size: 1.5rem">REACT</li>
              <li style="color: black; font-size: 1.5rem">ANGULAR</li>
              <li style="color: black; font-size: 1.5rem">VUE JS</li>
              <li style="color: black; font-size: 1.5rem">NODE JS</li>
              <li style="color: black; font-size: 1.5rem">PHP</li>
              <li style="color: black; font-size: 1.5rem">PYTHON</li>
            </ul>
          </div>
          <br>
          <h5 class="" style="font-size: 2.3rem;color: #808080;">Projects</h5>
        </div> 
       
        <div class="card-body">
          <!-- <h5 class="heading-edited-left mb-2 pl-3" style="font-size:2.5rem;color:#A0A4A8;">Card title</h5> -->

          <div class="row" id="experiment">
            <div class="col-sm-4 card" style="border-radius: 1rem">
              <video
                style="display:block;"
                oncontextmenu="return false;"
                width="320"
                height="240"
                controls
              >
                <source
                  src="/images/eGov Portfolio Video.mp4"
                  type="video/mp4"
                  style="border-radius: 1rem"
                  alt="e-Governance Revenue Management System (eRMS)"
                />
              </video>

              <!-- <img src="/images/img3.jpg" style="border-radius:1rem;" alt="e-Governance Revenue Management System (eRMS)" /> -->

              <div class="card-body">
                <h2 class="card-title">E-Governance Solution</h2>
                <p class="paragraph-moses">
                  Our Solution defines the future of governance, where citizens
                  are at the heart of every decision and administrative process.
                  Our revolutionary user-centric eGovernance solution is
                  designed to streamline administrative tasks, delivering...
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

            <div class=" col-sm-4 card" style="border-radius: 1rem;">
              <video
                style="display:block;"
                oncontextmenu="return false;"
                width="320"
                height="240"
                controls
              >
                <source
                  src="/images/wild_demo_9_feb.mp4"
                  type="video/mp4"
                  style="border-radius: 1rem"
                  alt="eConservancy Solution"
                />
              </video>

              <div class="card-body">
                <h2 class="card-title">E-Conservancy Solution</h2>
                <p class="paragraph-moses">
                  Our solution is in the forefront of conservation technology.
                  It is a state-of-the-art web platform with a mobile app
                  designed specifically for conservancies in protected and
                  community areas. Our platform revolutionizes the way
                  conservationists collect.
                </p>
                <div class="d-flex justify-content-end">
                  <router-link
                    :to="{
                      query: { current: 'eConservancy' },
                      name: 'ViewMore',
                    }"
                    style="position:absolute;right:0;bottom:0; margin-right:8px;margin-bottom:8px;"
                    ><a href="#" class="btn btn-primary"
                      >View More</a
                    ></router-link
                  >
                  >
                </div>
              </div>
            </div>

            <div class=" col-sm-4 card" style="border-radius: 1rem">
              <img src="/images/pic2.png" />

              <div class="card-body">
                <h2 class="card-title">EDRMS</h2>
                <p class="paragraph-moses">
                  Our Innovative Document record management solution has
                  assisted over 7 of our clients to unlock new levels of
                  efficiency, collaboration and security by; a) organizing their
                  documents into a centralized location saving users the hassle
                  of sifting through piles of papers or digital folders.
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
    </section>

    <section class="row container mt-3 mb-5" style="margin: 0 auto; padding: 0">
      <div class="card p-5" >
        <div class="card-header pl-3 pr-3"> 
          <h1 class="">Mobile Development</h1>
          <p class="paragraph-moses">
            In a world where mobile is king, we assist clients to have a standout presence in the palm of their customers’ hands. With our team of UX, UI Designers, developers and project management experts encompassing a blend of technical and  problem solving skills, we revolutionize  mobile user experience with our intuitive, secure and scalable mobile applications.
          </p>

          <div class="skills">
            <h5
              class=""
              style="
                font-size: 2.0rem;
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
              <li style="color: black; font-size: 1.5rem">ANDROID MOBILE DEVELOPMENT</li>
              <li style="color: black; font-size: 1.5rem">IOS MOBILE DEVELOPMENT</li>
              <li style="color: black; font-size: 1.5rem">FLUTTER DEVELOPMENT</li> 
            </ul>
          </div>
          <br>
          <h5 class="" style="font-size: 2.3rem;color: #808080;">Projects</h5>
        </div>

        <div class="card-body">
          <!-- <h5 class="heading-edited-left mb-2 pl-3" style="font-size:2.5rem;color:#A0A4A8;">Card title</h5> -->

          <div class="row" id="experiment">
            <div class="col-sm-4 card" style="border-radius: 1rem">
             <img src="/images/pic2.png" />
               

              <!-- <img src="/images/img3.jpg" style="border-radius:1rem;" alt="e-Governance Revenue Management System (eRMS)" /> -->

              <div class="card-body">
                <h2 class="card-title">JusticeLens</h2>
                <p class="paragraph-moses">
                  Our solution empowers the individuals at the forefront of defending human rights with the right tools. They can be able to conveniently and securely capture information on human rights and election malpractices on the ground. Such information is pivotal in protecting the democratic space and protecting the wellbeing of the citizens.
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
                <h2 class="card-title">Exam Revision Game App</h2>
                <p class="paragraph-moses">
                  Our solution enhances the process of revision for students by making use of the latest mobile technologies available. Students can interact with a gamified mobile app and answer quizzes and examination questions earning points and immediate feedback on the answers. Appropriate reports are provided enabling the students and their parents to monitor progress and identify areas for improvement. 
                </p>
                <div class="d-flex justify-content-end">
                  <router-link
                    :to="{
                      query: { current: 'eConservancy' },
                      name: 'ViewMore',
                    }"
                    style="position:absolute;right:0;bottom:0; margin-right:8px;margin-bottom:8px;"
                    ><a href="#" class="btn btn-primary"
                      >View More</a
                    ></router-link
                  >
                  >
                </div>
              </div>
            </div>

            <div class="col-sm-4 card" style="border-radius: 1rem">
              <img src="/images/pic2.png" />

              <div class="card-body">
                <h2 class="card-title">Tax eCompliance </h2>
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
    </section>

    <section class="row container mt-3 mb-5" style="margin: 0 auto; padding: 0">
      <div class="card p-5">
        <div class="card-header pl-3 pr-3">
          <h1 class="">Enterprise Applications</h1>
          <p class="paragraph-moses">
            We partner with clients to streamline their business operations with tailored solutions, enabling them realize tangible results. In the evolving business world, our team has extensive experience across a wide range of industries including Human Resource, Procurement, Document Management and accounting, bringing our clients immeasurable knowledge, skills and passion in every project we deliver.
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
              <li style="color: black; font-size: 1.5rem">JAVA</li>
              <li style="color: black; font-size: 1.5rem">POSTGRES</li>
              <li style="color: black; font-size: 1.5rem">VUE JS</li>
              <li style="color: black; font-size: 1.5rem">SPRINGBOOT</li>  
            </ul>
          </div>
          <br>
          <h5 class="" style="font-size: 2.3rem;color: #808080;">Projects</h5>
        </div>

        <div class="card-body">
          <!-- <h5 class="heading-edited-left mb-2 pl-3" style="font-size:2.5rem;color:#A0A4A8;">Card title</h5> -->

          <div class="row" id="experiment">
            <div class="col-sm-4 card" style="border-radius: 1rem">
              <img src="/images/pic2.png" />

              <!-- <img src="/images/img3.jpg" style="border-radius:1rem;" alt="e-Governance Revenue Management System (eRMS)" /> -->

              <div class="card-body">
                <h2 class="card-title">Business Process Management (BPM</h2>
                <p class="paragraph-moses">
                  Our solution empowers the individuals at the forefront of defending human rights with the right tools. They can be able to conveniently and securely capture information on human rights and election malpractices on the ground. Such information is pivotal in protecting the democratic space and protecting the wellbeing of the citizens.
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
                <h2 class="card-title">eProcurement</h2>
                <p class="paragraph-moses">
                  Our solution enhances the process of revision for students by making use of the latest mobile technologies available. Students can interact with a gamified mobile app and answer quizzes and examination questions earning points and immediate feedback on the answers. Appropriate reports are provided enabling the students and their parents to monitor progress and identify areas for improvement. 
                </p>
                <div class="d-flex justify-content-end">
                  <router-link
                    :to="{
                      query: { current: 'eConservancy' },
                      name: 'ViewMore',
                    }"
                    style="position:absolute;right:0;bottom:0; margin-right:8px;margin-bottom:8px;"
                    ><a href="#" class="btn btn-primary"
                      >View More</a
                    ></router-link
                  >
                  >
                </div>
              </div>
            </div>

            <div class="col-sm-4 card" style="border-radius: 1rem">
              <img src="/images/pic2.png" />

              <div class="card-body">
                <h2 class="card-title">eHR </h2>
                <p class="paragraph-moses">
                  Our solution simplifies and streamlines tax compliance operations for governments. Our eCompliance solution automates repetitive tasks and workflows, saving you time and reducing the risk of human error. From assigning tasks and scheduling audits to sending reminders and generating reports, our solution streamlines your compliance processes from start to finish.
                </p>
                <div class="d-flex justify-content-end">
                  <router-link
                    :to="{ query: { current: 'wild' }, name: 'ViewMore' }"
                    ><a href="#" class="btn btn-primary"
                    style="position:absolute;right:0;bottom:0; margin-right:8px;margin-bottom:8px;"
                    
                      >View More</a
                    ></router-link
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="row container mt-3 mb-5" style="margin: 0 auto; padding: 0">
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
          <!-- <h5 class="heading-edited-left mb-2 pl-3" style="font-size:2.5rem;color:#A0A4A8;">Card title</h5> -->

          <div class="row" id="experiment">
            <div class="col-sm-4 card" style="border-radius: 1rem">
              <img src="/images/pic2.png" />

              <!-- <img src="/images/img3.jpg" style="border-radius:1rem;" alt="e-Governance Revenue Management System (eRMS)" /> -->

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
    </section>

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
              <img src="/images/img10.png" alt="Partner8 Logo" />
              <img src="/images/img11.png" alt="Partner9 Logo" />
              <img src="/images/img12.png" alt="Partner10 Logo" />

              <img src="/images/AAEA.png" alt="Partner11 Logo" />
              <img src="/images/amedo-centres.png" alt="Partner12 Logo" />
              <img src="/images/icpak.png" alt="Partner13 Logo" />
              <img src="/images/imlu.png" alt="Partner14 Logo" />
              <img
                src="/images/laikipia-wildlife-forum-logo-white-retina.png"
                alt="Partner15 Logo"
              />
              <img src="/images/paulines.png" alt="Partner16 Logo" />
              <img src="/images/task.png" alt="Partner17 Logo" />
            </div>
          </div>
        </div>

        <section id="contact" class="contact">
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
        <section id="map" class="container mb-2">
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
                    With Our Skills Put Together, You Get An Ensemble Capable Of
                    Doing Anything And Everything Your Brand Needs. Subscribe
                    Here To Get Our Latest Updates.
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
    


  <!-- </div> -->
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
