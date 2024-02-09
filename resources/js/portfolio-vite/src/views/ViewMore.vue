<script>
import { useRoute } from "vue-router";

const view_more_data = {
  mtetezi: {
    title: "lsdfdo",
    url: "sadsa",
    stack: ["", ""],
  },
  wild: {
    title: "eGovernance Solution",
    url: "/images/eGov Portfolio Video.mp4",
    stack: ["PHP", "VueJS", "MySQL ", "Redis", "REST APIs"],
    project:
      "Automate and streamline government administrative tasks to deliver effective and transparent user centric services",

    problem:
      "Inefficient and costly services with limited access and lacked transparency leading to risk of fraud and corruption",

    solution:
      "A powerful user centric web platform that assist government deliver efficient and transparent services",

    services_provided: [
      "Processes Mapping",
      "UI/UX design",
      "Backend Development",
      "App deployment on Google Data Migration",
      "Production Server configuration and setup",
      "System Documentation",
      "User acceptance testing",
      "Training and system Support",
    ],
  },

  eConservancy: {
    title: "eConservancy Solution",
    url: "/images/LoginTakeRec.mp4",
    stack: ["PHP", "JAVA", "ANDROID", "MYSQL"],
    project:
      "Developing an off the shelf data collection and reporting tool that can assist data management of  conservancies in protected and community areas",

    problem:
      "Lack of visibility of incidents in conservancies in protected and community areas",

    solution:
      "A mobile App that tracks and reports units’ movement by taking GPS points and overlaying them on Google maps, Creating visibility of incidents in the conservancies including; poaching; animal mortality; Human-Wildlife Conflict (HWC); community service",

    services_provided: ["Backend Development", "GIS Integration"],
  },

  // wild:{
  //     title: 'EDRMS',
  //     url: '/images/WILD_FINAL.mp4',
  //     stack: ['Python', 'Django', 'Docker', 'Postgres', 'Redis'],

  //     project: 'Automate document-centric processes such as approval workflows, review cycles, and document sharing, streamlining business operations and improving productivity. Inaccuracy and operational inefficiency while handling documents in an organization',
  //     problem: 'Lack of visibility of incidents in conservancies in protected and community areas',

  //     solution: 'Innovative solution that facilitates centralised access to documents, version and access controls improving access to documents, streamlining operations and improving productivity',

  //     services_provided: [
  //         'Needs assessment',
  //         'Data Migration',
  //         'Training',
  //         'API Integration'
  //         ]
  // },

  JusticeLens: {
    title: "EDRMS",
    url: "/images/WILD_FINAL.mp4",
    stack: ["Dart", "Flutter", "Codeigniter", "PHP", "Javascript"],

    project: "Development of a Justice Lens mobile application and backend.",

    problem:
      "Lack of Efficient and accurate collection and analysis of data on human rights offenses. ",

    solution: "Data Collection Mobile Application and Web based backend",

    services_provided: [
      "UI/UX design",
      "Software Development",
      "App deployment on Google Playstore and Apple Appstore",
      "Production Server configuration and setup",
      "System Documentation",
      "User acceptance testing",
      "Training and system Support",
    ],
  },

  ExamRevisionGameApp: {
    title: "Exam Revision Game App",
    url: "/images/WILD_FINAL.mp4",
    stack: ["Kotlin", "Android", "Laravel", "PHP", "Javascript"],

    project: "Developing an Exam Revision Game App.",

    problem:
      "Lack of engaging means of aiding students revise for their exams to enhance learning.",

    solution:
      "A mobile based game that provides students with interactive quizzes and exam questions based on their school curriculum.",

    services_provided: [
      "UI/UX design",
      "Software Development",
      "App deployment on Google Playstore",
      "Production Server configuration and setup",
      "System Documentation",
      "User acceptance testing",
    ],
  },

  TaxeCompliance: {
    title: "Tax eCompliance  ",
    url: "/images/WILD_FINAL.mp4",
    stack: ["Java", "Android", "Laravel", "PHP", "Javascript"],

    project:
      "Development of a solution that simplifies and streamlines tax compliance operations for governments.",

    problem: "Lack of real-time visibility into compliance activities.",

    solution:
      "A solution that provides enforcers with a platform to query and verify compliance in real time.",

    services_provided: [
      "User needs assessment",
      "Software Development",
      "System Documentation",
      "User Training",
    ],
  },

  eRevenueManagementApp: {
    title: "eRevenue Management App ",
    url: "/images/WILD_FINAL.mp4",
    stack: ["Java", "Android", "Laravel", "PHP", "Javascript"],

    project:
      "Development of a solution that simplifies and streamlines tax compliance operations for governments.",

    problem: "Lack of real-time visibility into compliance activities.",

    solution:
      "A solution that provides enforcers with a platform to query and verify compliance in real time.",

    services_provided: [
      "User needs assessment",
      "Software Development",
      "System Documentation",
      "User Training",
    ],
  },
};

export default {
  props: {
    title: String,
  },
  setup() {
    const route = useRoute();

    return {
      more_data: view_more_data[route.query.current],
    };
  },

  async mounted() {
    console.log("Mounted called");
    console.log(this.more_data);
  },
};
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

    <header style="max-width: 1140px; margin: 81px auto 0 auto">
      <h1 class="heading-edited-center text-center">{{ more_data.title }}</h1>
    </header>

    <div
      class=""
      style="max-width: 1140px; display: block; margin: 4px auto 4px auto;"
    >
      <video
        oncontextmenu="return false;"
        style="display: block;border-radius:10px;"
        width="100%"
        controls
      >
        <source
          :src="more_data.url"
          type="video/mp4"
          style="border-radius: 1rem"
          alt="e-Governance Revenue Management System (eRMS)"
        />
      </video>
    </div>

    <div
      class="mt-3 p-5"
      style="
        max-width: 1140px;
        margin: 0 auto;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.5);
        background-color: #ffffff;
        border-radius:10px;
      "
    >
      <div class="d-flex flex-row">
        <div class="flex-basis-30">
          <h2 class="heading-edited-grey">Stacks</h2>
        </div>
        <div class="flex-basis-70">
          <ul class="view-more-list">
            <li v-for="(item, index) in more_data.stack" :key="index">
              {{ item }}
            </li>
          </ul>
        </div>
      </div>

      <div class="d-flex flex-row">
        <div class="flex-basis-30">
          <h2 class="heading-edited-grey">Project</h2>
        </div>
        <div class="flex-basis-85">
          <p class="view-more-text">{{ more_data.project }}</p>
        </div>
      </div>

      <div class="d-flex flex-row">
        <div class="flex-basis-30">
          <h2 class="heading-edited-grey">Problem</h2>
        </div>
        <div class="flex-basis-70">
          <p class="view-more-text">{{ more_data.problem }}</p>
        </div>
      </div>

      <div class="d-flex flex-row">
        <div class="flex-basis-30">
          <h2 class="heading-edited-grey">Solution</h2>
        </div>
        <div class="flex-basis-70">
          <p class="view-more-text">{{ more_data.solution }}</p>
        </div>
      </div>

      <div class="d-flex flex-row">
        <div class="flex-basis-30">
          <h2 class="heading-edited-grey">Services Provided</h2>
        </div>
        <div class="flex-basis-70">
          <ul class="view-more-list">
            <li
              v-for="(item, index) in more_data.services_provided"
              :key="index"
            >
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="footer mt-5">
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
</template>

<style>
body {
  background-color: #f2f2f2;
}
</style>