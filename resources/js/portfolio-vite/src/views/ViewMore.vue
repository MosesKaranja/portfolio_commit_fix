<script>
import { useRoute } from "vue-router";

const view_more_data = {
  mtetezi: {
    title: "lsdfdo",
    url: "sadsa",
    stack: ["", ""],
  },


  eCommerceSite: {
    title: "Ecommerce Site",
    description : "We created a user-friendly and attractive eCommerce website for the company using Prestashop, a platform that enables fast and easy development with minimal coding. The website allows the company to sell electronic products online and get them delivered to the clients. We also developed a plugin to connect the website with a payment provider, giving the clients a convenient way to pay for their orders.",
    url: "",
    stack: ["Prestashop ecommerce platform", "PHP"],
    project:
      "Development of a state of the art ecommerce website.",

    problem:
      "Clients were unable to conveniently browse through and purchase the company's products online. This limited the customer base to walk in customers and reduced sales.",

    solution:
      "Ecommerce Website",

    services_provided: [
      "UI/UX design",
      "Plugin Development",
      "Production server setup and deployment",
      "Administrative user training.",
      "System documentation"
    ],
  },

  alumniEPortal: {
    title: "Alumni Portal",
    description : "Our solution provides an opportunity for continued communication and collaboration between students who have gone through and completed various training programmes. Learning can therefore be enhanced by allowing all participants to share best practices, new developments and seek assistance in their day to day activities. Technology enables the connection of learners globally, increasing the value of the knowledge that can be shared between themselves.",
    url: "",
    stack: ["Wordpress CMS", "Javascript", "PHP"],
    project:
      "Development of an Alumni Portal for collaboration and sharing knowledge",

    problem:
      "Cohorts of students who had gone through various training programs had no way of maintaining contact after the end of their programs. This limited the value they could receive from sharing knowledge and skills both from their training and day to day experiences.",

    solution:
      "Alumni portal website with features to aid communication and collaboration such as live chat and forums.",

    services_provided: [
      "CMS installation and customization.",
      "System documentation",
      "User acceptance testing"

    ],
  },

  shopifyPlugin: {
    title: "Shopify Ecommerce",
    description : "We created an ecommerce website on shopify with minimal customizations to ensure a seamless and easy purchase experience for online customers. The shopify platform enabled the solution to be delivered in a very tight schedule as well as reduce the number of hurdles in deploying the project. Our expertise on this platform gives us the freedom to implement custom features not available by coding some parts of the system.",
    url: "",
    stack: ["",],
    project:
      "",

    problem:
      "",

    solution:
      "",

    services_provided: [
      "",


    ],
  },



  eGovernanceSolution: {
    title: "eGovernance Solution",
    description: "Our Solution defines the future of governance, where citizens are at the heart of every decision and administrative process. Our revolutionary user-centric eGovernance solution is designed to streamline administrative tasks, delivering efficiency, effectiveness, and transparency like never before. Citizens access government services effortlessly, without the hassle of paperwork or long wait time, providing a seamless digital experience that simplifies interactions with government agencies. Additionally, our solution  empowers government leadership by providing a comprehensive dashboard that puts key data and insights at their fingertips.",
    url: "/images/eGov Portfolio Video.mp4",
    stack: ["PHP", "VueJS", "MySQL ", "Redis", "REST APIs"],
    project:
      "Automate and streamline government administrative tasks to deliver effective and transparent user centric services." ,

    problem:
      "Inefficient and costly services with limited access and lacked transparency leading to risk of fraud and corruption.",

    solution:
      "A powerful user centric web platform that assist government deliver efficient and transparent services.",

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

  eConservancySolution: {
    title: "eConservancy Solution",
    description: "Our solution is in the forefront of conservation technology. It  is a state-of-the-art web platform with a mobile app designed specifically for conservancies in protected and community areas. Our platform revolutionizes the way conservationists collect, analyze, and respond to critical information in real-time.  The system collects and sends live data, flagging incidents, facilitating seamless communication between different teams and monitoring impact over time. Therefore, ensuring the preservation of our planet's most precious natural habitats and wildlife.",
    url: "/images/wild_demo_9_feb.mp4",
    stack: ["PHP", "JAVA", "ANDROID", "MYSQL"],
    project:
      "Developing an off the shelf data collection and reporting tool that can assist data management of  conservancies in protected and community areas",

    problem:
      "Lack of visibility of incidents in conservancies in protected and community areas",

    solution:
      "A mobile App that tracks and reports units’ movement by taking GPS points and overlaying them on Google maps, Creating visibility of incidents in the conservancies including; poaching; animal mortality; Human-Wildlife Conflict (HWC); community service",

    services_provided: ["Backend Development", "GIS Integration"],
  },

  eDRMS: {
    title: "eDRMS",
    description: "Our Innovative Document record management solution has assisted over 7 of our clients to unlock new levels of efficiency, collaboration and security by organizing their documents into a centralized location saving users the hassle of sifting through piles of papers or digital folders.  facilitating seamless collaboration by allowing multiple users to access, edit, and comment on documents simultaneously, with version control and audit trails, to track changes and ensure everyone is working with the latest information providing security features including encryption, access controls, and user authentication to safeguard documents from unauthorized access and data breaches.",
    url: "",
    
    banner_image:"",
    stack: ["Python", "Django", "Docker", "Postgres", "Redis"],
    project:
      "Automate document-centric processes such as approval workflows, review cycles, and document sharing, streamlining business operations and improving productivity. Inaccuracy and operational inefficiency while handling documents in an organization.",

    problem:
      "",

    solution:
      "Innovative solution that facilitates centralised access to documents, version and access controls improving access to documents, streamlining operations and improving productivity.",

    services_provided: ["Needs assessment", "Data Migration", "Training", "API Integration"],
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

  justiceLens: {
    title: "JusticeLens",
    description: "Our solution empowers the individuals at the forefront of defending human rights with the right tools. They can be able to conveniently and securely capture information on human rights and election malpractices on the ground. Such information is pivotal in protecting the democratic space and protecting the wellbeing of the citizens.",
    url: "",
    banner_image:"",
    stack: ["Dart", "Flutter", "Codeigniter", "PHP", "Javascript"],

    project: "Development of a Justice Lens mobile application and backend.",

    problem:
      "Lack of Efficient and accurate collection and analysis of data on human rights offenses. ",

    solution: "A Data Collection Mobile Application and Web based backend.",

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

  examRevisionGameApp: {
    title: "Exam Revision Game App",
    description:"Our solution enhances the process of revision for students by making use of the latest mobile technologies available. Students can interact with a gamified mobile app and answer quizzes and examination questions earning points and immediate feedback on the answers. Appropriate reports are provided enabling the students and their parents to monitor progress and identify areas for improvement.",
    url: "",
    banner_image:"",
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

  eTaxCompliance: {
    title: "eTaxCompliance",
    description: "Our solution simplifies and streamlines tax compliance operations for governments. Our eCompliance solution automates repetitive tasks and workflows, saving you time and reducing the risk of human error. From assigning tasks and scheduling audits to sending reminders and generating reports, our solution streamlines your compliance processes from start to finish.",
    url: "",
    banner_image:"",
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
    title: "eRevenue Management App",
    description: "Our solution enables the government officials to collect revenue effectively while mobile. It eliminates the manual processes that make reconciliation of transactions time consuming and prone to errors. A mobile application installed on a mobile point of sale device (POS) device provides a more convenient method of processing payments for government services on site. The device has provisions for various modes of payments including integrations to enable mobile money payments. Printing of receipts is achieved with integration between the software and the device hardware using a software development kit(SDK) sourced from the device manufacturer. Appropriate security is achieved via use of HTTPS for all API calls, two factor authentication and activation of administrator privileges on the device. The application is built on the Android platform using the JAVA programming language.",
    banner_image: "",
    url: "",
    stack: ["Java", "Android", "Laravel", "PHP", "Javascript"],

    project: "",

    problem: "",

    solution: "",

    services_provided: [
      "UI/UX design",
      "Software Development",
      "Production Server configuration and setup",
      "System Documentation",
      "User acceptance testing",
      "User Training"

    ],
  },

  businessProcessManagement: {
    title: "Business Process Management (BPM)",
    description: "",
    banner_image: "",
    url: "",
    stack: ["Java", "Vue JS", "Springboot", "Postgress"],

    project: "To automate and accelerate the recruitment and onboarding steps within departments.",

    problem: "Recruitment and on-boarding is a cross-departmental and time consuming process making it more laborious when it’s manually executed.",

    solution: "A highly configurable recruitment and onboarding BPM system that consists of an admin portal and a user facing interface. The admin portal allows for a degree of configurability to fit the expected requirements of the Business Process. The configurations made on the admin portal are reflected on the user facing interface.",

    services_provided: [
      "System Requirement analysis",
      "UI/UX Design",
      "Web Service and API integrations",

    ],
  },

  eProcurement: {
    title: "eProcurement",
    description: "Our solution transforms your procurement operations by leveraging innovative technologies and best practices. We empower organizations to unlock the full potential of their procurement processes and propel their business towards growth and prosperity.",
    banner_image: "",
    url: "",
    stack: ["Python", "Javascript", "MariaDB / Redis", "Docker"],

    project: "Developing an ERP solution tailored to eProcurement.",

    problem: "Traditional procurement methods often involve manual tasks, lengthy approval processes, and fragmented systems, leading to inefficiencies, errors, and increased costs.",

    solution: "ERP solution tailored to eProcurement to optimize efficiency, reduce costs, and achieve sustainable competitive advantage in today's dynamic marketplace.",

    services_provided: [
      "Requisitions",
      "Products and Product Categories",
      "Supplier Management",
      "Catalogue Management",
      "Purchase Modes",
      "RFQs",
      "Tenders"

    ],
  },

  eHR: {
    title: "eHR",
    description: "Our ERP solution is tailored for human resources processes embraces innovation, automation, and best practices, to empower our clients to enhance efficiency, improve employee engagement, and achieve strategic HR objectives Our solution serves as a single source of truth for all employee-related information, consolidating data on demographics, employment history, performance evaluations, training records, and more.",
    banner_image: "",
    url: "",
    stack: ["Python", "Javascript", "MariaDB / Redis", "Docker"],

    project: "Developing an ERP solution tailored to eHR processes.",

    problem: "Traditional HR processes often involve manual tasks, disparate systems, and outdated practices, leading to inefficiencies, compliance risks, and decreased employee satisfaction.",

    solution: "A comprehensive platform designed to streamline and optimize human resource processes within organizations of all sizes.",

    services_provided: [
      "Employee Profile",
      "Employee Qualifications",
      "Employment Contracts",
      "Leave Management",
      "Recruitment Portal",
      "Promotions/Demotions",
      "Employee Training & Course Management",
      "Performance Evaluations",
      "Employee Travel Management",
      "Disciplinary",
      "Employee Separation"

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
      image_link: route.query.img

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

                      <router-link
          :to="{ name: 'home' }"
          href="#" class="link-hover" id="home-link">
          Home
          </router-link>

          </li>


          <li onclick="linkClicked('about_us')">
            <a href="#about" id="about-link">About Us</a>
          </li>
          <li onclick="linkClicked('service')">
            <a href="#services" id="service">Services</a>
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
      v-if="more_data.url"
      class=""
      style="max-width: 1140px; display: block; margin: 4px auto 4px auto;border: 3px solid black;"
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

    <div v-else style="max-width: 1140px;display: block; margin-left: auto; margin-right: auto;">
      <img :src="image_link" style="width: 100%; height: 637px; border-radius:10px;"/>

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
                  <a href="#service">services</a>
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