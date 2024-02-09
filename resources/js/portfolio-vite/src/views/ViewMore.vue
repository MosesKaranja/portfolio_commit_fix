<script>
import { useRoute } from 'vue-router'

const view_more_data = {
    mtetezi:{
        title:'lsdfdo',
        url:'sadsa',
        stack: ['','']
    },
    wild:{
        title: 'EDRMS',
        url: '/images/WILD_FINAL.mp4',
        stack: ['Python', 'Django', 'Docker', 'Postgres', 'Redis'],
        solution: 'Innovative solution that facilitates centralised access to documents, version and access controls improving access to documents, streamlining operations and improving productivity',
        project: 'Automate document-centric processes such as approval workflows, review cycles, and document sharing, streamlining business operations and improving productivity. Inaccuracy and operational inefficiency while handling documents in an organization',
        problem: 'Lack of visibility of incidents in conservancies in protected and community areas',
        services_provided: [
            'Needs assessment',
            'Data Migration',
            'Training',
            'API Integration'
            ]
    }
}

export default {
  props:{
    title: String,
  },
  setup() {
    const route = useRoute()

    return {
        more_data:view_more_data[route.query.current]
    }
  },

  async mounted(){
    console.log("Mounted called")
    console.log(this.more_data)

  }
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

    <header style="max-width: 1140px;margin:81px auto 0 auto;">
        <h1>{{ more_data.title }}</h1>
    </header>

    <div
      class=""
      style="
        max-width: 1140px;
        border: 3px solid black;
        display: block;
        margin: 4px auto 4px auto;
      "
    >
      <video
        oncontextmenu="return false;"
        style="display: block"
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

    <div class="mt-3" style="max-width: 1140px;border:3px solid black;margin:0 auto;">
      <div class="d-flex flex-row">
        <div class="flex-basis-30">
          <h2>Stacks</h2>
        </div>
        <div class="flex-basis-70">
          <p>{{ more_data.stack }}</p>
        </div>
      </div>

      <div class="d-flex flex-row">
        <div class="flex-basis-30">
          <h2>Project</h2>
        </div>
        <div class="flex-basis-70">
          <p>{{ more_data.project }}</p>
        </div>
      </div>

      <div class="d-flex flex-row">
        <div class="flex-basis-30">
          <h2>Problem</h2>
        </div>
        <div class="flex-basis-70">
          <p>{{ more_data.problem }}</p>
        </div>
      </div>

      <div class="d-flex flex-row">
        <div class="flex-basis-30">
          <h2>Solution</h2>
        </div>
        <div class="flex-basis-70">
          <p>{{ more_data.solution }}</p>

        </div>
      </div>

      <div class="d-flex flex-row">
        <div class="flex-basis-30">
          <h2>Services Provided</h2>
        </div>
        <div class="flex-basis-70">
          <p>{{ more_data.services_provided }}</p>

        </div>
      </div>
    </div>
  </div>
</template>