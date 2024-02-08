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
          <li onclick="linkClicked('skills')">
            <a href="#skills" id="skills-link">Skills/Expertise</a>
          </li>

          <li onclick="linkClicked('products')">
            <a href="#products" id="product-link">Products</a>
          </li>
          <li onclick="linkClicked('our_work')">
            <a href="#service" id="service-link">Our Work</a>
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
              Web, <br />
              Mobile, Enterprise and Low/No Code technologies.<br />
              We empower our clients with the tools<br />
              they need to thrive in the digital age.
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
              With expertise honed through over 10 years<br />
              of experience we leverage on the latest technologies<br />
              to build responsive designs and seamless functionalities <br />
              across devices
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
              With our team of UX, UI Designers, developers and<br />
              and project management experts encompassing a blend<br />
              of technical and problem solving skills, we revolutionize<br />
              mobile user experience with our intuitive, secure<br />
              and scalable mobile applications
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
              In the evolving business world, our team has<br />
              extensive experience across a wide range of<br />
              industries including Human Resource, Procurement,<br />
              Document Management and accounting, bringing our<br />
              immeasurable knowledge, skills and passion<br />
              in every project we deliver.
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
      style="border: 3px solid black; max-width: 1140px; margin: 0 auto"
    >
      <section id="home" class="">
        <h1 class="heading">About Us</h1>
        <div class="row">
          <div class="content">
            <p>
              IT Outsourcing, @iLabAfrica, is a research and innovation centre
              located at Strathmore University in Nairobi, Kenya.The centre
              focuses on customizing and developing solutions for clients by
              providing consulting services and end-to-end support for the
              entire product-development life-cycle in organizations, through
              developing,deploying and managing IT systems solutions.We pride
              ourselves on being a dynamic team of skilled developers and
              project management professionals dedicated to delivering
              innovative IT solutions for both government and corporate sectors.
            </p>
          </div>
        </div>
      </section>
    </section>

    <section class="row container" style="margin: 0 auto; padding: 0">
      <div class="card">
        <div class="card-header pl-3 pr-3">
          <h1 class="heading-edited-center">Services</h1>
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
              class="heading-edited-left mb-2 pl-3"
              style="font-size: 1.5rem; color: black"
            >
              Skills
            </h5>
            <ul class="skills-list">
              <li>React</li>
              <li>Angular</li>
              <li>Vue JS</li>
              <li>Node JS</li>
              <li>PHP</li>
              <li>Python</li>
            </ul>
          </div>
        </div>

        <div class="card-body">
          <!-- <h5 class="heading-edited-left mb-2 pl-3" style="font-size:2.5rem;color:#A0A4A8;">Card title</h5> -->

          <div class="d-flex flex-row pl-3 pr-3" id="experiment">
            <div class="card mr-4" style="border-radius: 1rem">
              <video
                oncontextmenu="return false;"
                width="320"
                height="240"
                controls
              >
                <source
                  src="/images/LoginTakeRec.mp4"
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
                  designed to streamline administrative tasks, delivering
                  efficiency, effectiveness, and transparency like never before.
                </p>
                <div class="d-flex justify-content-end">
                  <a href="#" class="btn btn-primary">View More</a>
                </div>
              </div>
            </div>

            <div class="card mr-4" style="border-radius: 1rem">
              <video
                oncontextmenu="return false;"
                width="320"
                height="240"
                controls
              >
                <source
                  src="/images/My Businesses Done.mp4"
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
                  <a href="#" class="btn btn-primary">View More</a>
                </div>
              </div>
            </div>

            <div class="card" style="border-radius: 1rem">
              <video
                oncontextmenu="return false;"
                width="320"
                height="240"
                controls
              >
                <source
                  src="/images/WILD_FINAL.mp4"
                  type="video/mp4"
                  style="border-radius: 1rem"
                  alt="eConservancy Solution"
                />
              </video>

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
                  <a href="#" class="btn btn-primary">View More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="about">
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
              website maintenance and support services.<br /><br />SKills<br />HTML,
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
              of native, cross platform native and hybrid mobile applications as
              well as progress web applications.<br /><br />Skills<br />
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
              underscoring our commitment to delivering successful outcomes for
              our clients through seamless planning, execution, and completion
              of projects, utilizing industry-best practices and
              methodologies.<br /><br />Skills<br />

              Leadership Skills, Stakeholder Management, Client Management,
              Agile,Scrum,Kanban,Waterfall,ITIL,PRINCE2, Google
              Workspace,Microsoft Project,Jira,Asana,Trello,Clickup,Monday.com.
            </p>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6">
          <div class="item">
            <h6>System Testing</h6>
            <p>
              We have extensive Knowledge and experience in manual and automated
              testing of software applications to evaluate their compliance to
              system requirements and end user needs.<br /><br />Skills<br />
              Understanding pr software applications testing process, Experience
              in Development of Test plans, Hands-on experience with automated
              testing tools like Master selenium and Manual Testing.

              <br /><br />System Training and Support<br />
              We have a proven record in system end user training and level 1&2
              system support. Prepare Training Manuals System User training
            </p>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6">
          <div class="item">
            <h6>UI/UX Designing</h6>
            <p>
              We work with clients to understand their data and formats they
              would want such data presented. This include converting manual to
              digital data, cleaning existing digital data as well as analysis
              the data to achieve client’s needs.<br /><br />Skills<br />
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
              would want such data presented. This include converting manual to
              digital data, cleaning existing digital data as well as analysis
              the data to achieve client’s needs.<br /><br />Skills<br />
              Typing, Data Conversion/ Formatting/Cleanup, Transcription, Data
              Analysis.
            </p>
          </div>
        </div>
      </div>
    </section>

    <div id="products" class="pt-5 mt-8">
      <div class="pt-5" style="background-color: #f2f2f2">
        <div class="container">
          <div class="row">
            <div class="section-head col-sm-12">
              <h1>Products</h1>
              <p>
                We help you to build high-quality digital solutions and products
                as well as deliver a wide range of related professional
                services. We are providing world-class service to our clients.
              </p>
            </div>

            <div class="col-lg-4 col-sm-6">
              <div class="container">
                <div class="row">
                  <div class="item" style="border: 2px solid black">
                    <span style="margin: auto" class="icon feature_box_col_one"
                      ><i class="fa fa-laptop"></i
                    ></span>

                    <h6>Web App Development</h6>
                    <p>
                      Our Custom Web Development Services Include Both Front-End
                      And Back-End Development. Whether It Is Enhancing An
                      Existing App Or Architecting An Enterprise App, Our
                      Developers Are Up For The Challenge.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-sm-6">
              <div class="container">
                <div class="row">
                  <div class="item" style="border: 2px solid black">
                    <span style="margin: auto" class="icon feature_box_col_one"
                      ><i class="fa fa-laptop"></i
                    ></span>
                    <h6>Revenue Management System</h6>
                    <p>
                      We Have Expertise In Creating Multi-Platform Revenue
                      Management Systems, Solutions For Both Android And IOS
                      Devices. Using Laravel, Vue js, We Offer Custom Web Apps
                      That Runs Smoothly On Multiple Platforms.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6">
              <div class="item" style="border: 2px solid black">
                <span style="margin: auto" class="icon feature_box_col_two"
                  ><i class="fa fa-android"></i
                ></span>
                <h6>Web Portals</h6>
                <p>
                  We Have Expertise In Creating Multi-Platform Web Apps
                  Solutions For Both Android And IOS Devices. Using Laravel, Vue
                  Js, And React Native, We Offer Custom Mobile App That Runs
                  Smoothly On Multiple Platforms.
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6">
              <div class="item" style="border: 2px solid black">
                <span style="margin: auto" class="icon feature_box_col_two"
                  ><i class="fa fa-android"></i
                ></span>
                <h6>Wildlife Conservancy Systems</h6>
                <p>
                  The Wildlife Conservancy Systems that we provide have their
                  own set of charms.
                </p>
              </div>
            </div>

            <div class="col-lg-4 col-sm-6">
              <div class="item" style="border: 2px solid black">
                <span style="margin: auto" class="icon feature_box_col_two"
                  ><i class="fa fa-magic"></i
                ></span>
                <h6>Business Process Management Systems(BPM)</h6>
                <p>
                  The Business Process Management Systems(BPM) that we provide
                  have their own set of charms.
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6">
              <div class="item" style="border: 2px solid black">
                <span style="margin: auto" class="icon feature_box_col_two"
                  ><i class="fa fa-android"></i
                ></span>
                <h6>Monitoring & Evaluation Systems(M&E)</h6>
                <p>
                  The Monitoring & Evaluation Systems(M&E) that we provide have
                  their own set of charms.
                </p>
              </div>
            </div>

            <div class="col-lg-4 col-sm-6">
              <div class="item" style="border: 2px solid black">
                <span style="margin: auto" class="icon feature_box_col_two"
                  ><i class="fa fa-android"></i
                ></span>
                <h6>Payment Gateway Solutions</h6>
                <p>
                  The Payment Gateway Solutions that we provide have their own
                  set of charms.
                </p>
              </div>
            </div>

            <div class="col-lg-4 col-sm-6">
              <div class="item" style="border: 2px solid black">
                <span style="margin: auto" class="icon feature_box_col_two"
                  ><i class="fa fa-android"></i
                ></span>
                <h6>Enterprise Resource Planning Systems(ERPs)</h6>
                <p>
                  The Enterprise Resource Planning Systems(ERPs) that we provide
                  have their own set of charms.
                </p>
              </div>
            </div>

            <div class="col-lg-4 col-sm-6">
              <div class="item" style="border: 2px solid black">
                <span style="margin: auto" class="icon feature_box_col_two"
                  ><i class="fa fa-magic"></i
                ></span>
                <h6>
                  Electronic Document and Records ManagementSystems(EDRMS)
                </h6>
                <p>
                  The Payment Gateway Solutions that we provide have their own
                  set of charms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="pt-5 mt-8" id="service">
      <div class="pt-5 mt-8">
        <div class="container">
          <div class="row">
            <div class="section-head-1 col-sm-12" style="text-align: center">
              <h4 style="margin-top: -5rem" id="portfolio">
                <span>Our</span> Work
              </h4>

              <p>
                Explore the dynamic range of our innovative solutions through a
                collection of videos that highlights the expertise and
                creativity embedded in our solutions.
              </p>
            </div>

            <div class="col-sm-4">
              <div class="card mb-3">
                <div class="card-body">
                  <h5 class="card-title">Revenue Collection System</h5>
                  <video
                    oncontextmenu="return false;"
                    width="320"
                    height="240"
                    controls
                  >
                    <source src="/images/LoginTakeRec.mp4" type="video/mp4" />
                  </video>
                  <br />
                  <a href="#" style="" class="btn btn-primary">View Product</a>
                </div>
              </div>
            </div>

            <div class="col-sm-4">
              <div class="card mb-3">
                <div class="card-body">
                  <h5 class="card-title">
                    Electronic Document Management System
                  </h5>
                  <video
                    oncontextmenu="return false;"
                    width="320"
                    height="240"
                    controls
                  >
                    <source
                      src="/images/My Businesses Done.mp4"
                      type="video/mp4"
                    />
                  </video>
                  <br />
                  <a href="#" class="btn btn-primary">View Product</a>
                </div>
              </div>
            </div>

            <div class="col-sm-4">
              <div class="card border-primary mb-3">
                <div class="card-body">
                  <h5 class="card-title">Wild Management System</h5>
                  <video
                    oncontextmenu="return false;"
                    width="320"
                    height="240"
                    controls
                  >
                    <source src="/images/WILD_FINAL.mp4" type="video/mp4" />
                  </video>
                  <br />
                  <a href="#" class="btn btn-primary">View Product</a>
                </div>
              </div>
            </div>

            <div class="col-sm-4">
              <div class="card border-primary mb-3">
                <div class="card-body">
                  <h5 class="card-title">Payment Gateway System</h5>
                  <video
                    oncontextmenu="return false;"
                    width="320"
                    height="240"
                    controls
                  >
                    <source
                      src="/images/payment_gateway.mp4"
                      type="video/mp4"
                    />
                  </video>
                  <br />
                  <a href="#" class="btn btn-primary">View Product</a>
                </div>
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
    </div>
  </div>

  <!-- </div> -->
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
