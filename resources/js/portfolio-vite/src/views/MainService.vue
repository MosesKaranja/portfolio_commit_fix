<script>
export default {
    props: {
        card_header: String,
        card_title: String,
        skills: Array,
        skills_no_code: Array,

        card_1_url: String,
        card_1_image: String,
        card_1_title: String,
        card_1_text: String,
        card_1_view_more: String,

        card_2_url: String,
        card_2_image: String,
        card_2_title: String,
        card_2_text: String,
        card_2_view_more: String,

        card_3_url: String,
        card_3_image: String,
        card_3_title: String,
        card_3_text: String,
        card_3_view_more: String,

        card_4_url: String,
        card_4_image: String,
        card_4_title: String,
        card_4_text: String,
        card_4_view_more: String,

        card_5_url: String,
        card_5_image: String,
        card_5_title: String,
        card_5_text: String,
        card_5_view_more: String,

        card_6_url: String,
        card_6_image: String,
        card_6_title: String,
        card_6_text: String,
        card_6_view_more: String,

        card_7_url: String,
        card_7_image: String,
        card_7_title: String,
        card_7_text: String,
        card_7_view_more: String,

        card_8_url: String,
        card_8_image: String,
        card_8_title: String,
        card_8_text: String,
        card_8_view_more: String,



    },
    data() {
        return {
            count: 0
        }
    },
    methods: {
        buttonStyles(card_image) {
            return {
                "background-image": "url(" + `${card_image}` + ")",
                "background-position": "center",
                "width": "378px",
                "height": "240px",
                "background-size": "cover",
                "background-repeat": "no-repeat",
                "margin-top": "10px",
                "border-radius": "10px"
            };
        }
    },
}
</script>

<template>
    <section class="row mt-3 mb-5" style="max-width:1280px;margin: 0 auto; padding: 0; border-radius: 10px;">
        <div class="card p-5">
            <div class="card-header pl-3 pr-3">

                <h1 class="">{{ this.card_header }}</h1>
                <p class="paragraph-moses">
                    {{ this.card_title }}

                </p>

                <div class="skills">
                    <h5 class="" style="
                font-size: 2.3rem;
                color: grey;
                ;
              ">
                        Our Skills
                    </h5>
                    <ul class="skills-list" style="list-style-type: none; padding-left: 0">

                        <li style="color: black; font-size: 1.5rem" v-for="(item, index) in skills" :key="index">
                            {{ skills[index] }}
                        </li>

                    </ul>
                </div>

                <div class="skills">
                    <h5 class="" style="
                font-size: 2.3rem;
                color: grey;
                ;
              ">
                        Tools
                    </h5>
                    <ul class="skills-list" style="list-style-type: none; padding-left: 0">

                        <li style="color: black; font-size: 1.5rem" v-for="(item, index) in skills_no_code" :key="index">
                            {{ item }}
                        </li>

                    </ul>
                </div>


                <br>
                <h5 class="" style="font-size: 2.3rem;color: #808080;">Projects</h5>
            </div>

            <div class="card-body">
                <!-- <h5 class="heading-edited-left mb-2 pl-3" style="font-size:2.5rem;color:#A0A4A8;">Card title</h5> -->

                <div class="row" id="experiment">
                    <div class="col-sm-4 card" style="border-radius: 1rem">

                        <div v-if="card_1_url">
                            <video style="display:block;" oncontextmenu="return false;" width="100%" height="240" controls>
                                <source :src="card_1_url" type="video/mp4" style="border-radius: 1rem"
                                    alt="e-Governance Revenue Management System (eRMS)" />
                            </video>

                        </div>


                        <!-- <img v-else :src="card_1_image" /> -->

                        <div v-else :style="buttonStyles(this.card_1_image)">
                        </div>

                        <!-- <img src="/images/img3.jpg" style="border-radius:1rem;" alt="e-Governance Revenue Management System (eRMS)" /> -->

                        <div class="card-body">
                            <h2 class="card-title">{{ card_1_title }}</h2>
                            <p class="paragraph-moses">
                                {{ card_1_text }}
                            </p>
                            <div class="d-flex justify-content-end">
                                <router-link :to="{ query: { current: card_1_view_more, img: card_1_image }, name: 'ViewMore' }"
                                    style="position:absolute;right:0;bottom:0; margin-right:8px;margin-bottom:8px;"><a
                                        href="#" class="btn btn-primary">View More</a></router-link>
                            </div>
                        </div>
                    </div>

                    <div class=" col-sm-4 card" style="border-radius: 1rem;">

                        <div v-if="card_2_url">
                            <video style="display:block;" oncontextmenu="return false;" width="100%" height="240" controls>
                                <source :src="card_2_url" type="video/mp4" style="border-radius: 1rem"
                                    alt="eConservancy Solution" />
                            </video>
                        </div>

                        <!-- <img v-else :src="card_2_image" /> -->

                        <div v-else :style="buttonStyles(this.card_2_image)">
                        </div>



                        <div class="card-body">
                            <h2 class="card-title">{{ card_2_title }}</h2>
                            <p class="paragraph-moses">
                                {{ card_2_text }}

                            </p>
                            <div class="d-flex justify-content-end">
                                <router-link :to="{
                                    query: { current: card_2_view_more, img: card_2_image },
                                    name: 'ViewMore',
                                }" style="position:absolute;right:0;bottom:0; margin-right:8px;margin-bottom:8px;"><a
                                        href="#" class="btn btn-primary">View More</a></router-link>
                                >
                            </div>
                        </div>
                    </div>

                    <div class=" col-sm-4 card" style="border-radius: 1rem">
                        <div v-if="card_3_url">
                            <video style="display:block;" oncontextmenu="return false;" width="100%" height="240" controls>
                                <source :src="card_3_url" type="video/mp4" style="border-radius: 1rem"
                                    alt="eConservancy Solution" />
                            </video>

                        </div>

                        <!-- <img v-else :src="card_3_image" /> -->

                        <div v-else :style="buttonStyles(this.card_3_image)">
                        </div>


                        <div class="card-body">
                            <h2 class="card-title">{{ card_3_title }}</h2>
                            <p class="paragraph-moses">
                                {{ card_3_text }}
                            </p>
                            <div class="d-flex justify-content-end">
                                <router-link :to="{ query: { current: card_3_view_more, img: card_3_image  }, name: 'ViewMore' }"
                                    style="position:absolute;right:0;bottom:0; margin-right:8px;margin-bottom:8px;"><a
                                        href="#" class="btn btn-primary">View More</a></router-link>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row" id="experiment">
                    <div class="col-sm-4 card" style="border-radius: 1rem">

                        <div v-if="card_4_url">
                            <video style="display:block;" oncontextmenu="return false;" width="100%" height="240" controls>
                                <source :src="card_4_url" type="video/mp4" style="border-radius: 1rem"
                                    alt="e-Governance Revenue Management System (eRMS)" />
                            </video>
                        </div>

                        <!-- <img v-else :src="card_4_image" /> -->
                        <div v-else :style="buttonStyles(this.card_4_image)">
                        </div>

                        <!-- <img src="/images/img3.jpg" style="border-radius:1rem;" alt="e-Governance Revenue Management System (eRMS)" /> -->

                        <div class="card-body">
                            <h2 class="card-title">{{ card_4_title }}</h2>
                            <p class="paragraph-moses">
                                {{ card_4_text }}
                            </p>
                            <div class="d-flex justify-content-end">
                                <router-link :to="{ query: { current: card_4_view_more, img: card_4_image  }, name: 'ViewMore' }"
                                    style="position:absolute;right:0;bottom:0; margin-right:8px;margin-bottom:8px;"><a
                                        href="#" class="btn btn-primary">View More</a></router-link>
                            </div>
                        </div>
                    </div>

                    <div class=" col-sm-4 card" style="border-radius: 1rem;">

                        <div v-if="card_5_url">
                            <video style="display:block;" oncontextmenu="return false;" width="100%" height="240" controls>
                                <source :src="card_5_url" type="video/mp4" style="border-radius: 1rem"
                                    alt="eConservancy Solution" />
                            </video>


                        </div>


                        <!-- <img v-else :src="card_5_image" /> -->
                        <div v-else :style="buttonStyles(this.card_5_image)">
                        </div>


                        <div class="card-body">
                            <h2 class="card-title">{{ card_5_title }}</h2>
                            <p class="paragraph-moses">
                                {{ card_5_text }}

                            </p>
                            <div class="d-flex justify-content-end">
                                <router-link :to="{
                                    query: { current: card_5_view_more, img: card_5_image  },
                                    name: 'ViewMore',
                                }" style="position:absolute;right:0;bottom:0; margin-right:8px;margin-bottom:8px;"><a
                                        href="#" class="btn btn-primary">View More</a></router-link>
                                >
                            </div>
                        </div>
                    </div>

                    <div class=" col-sm-4 card" style="border-radius: 1rem">

                        <div v-if="card_6_url">
                            <video style="display:block;" oncontextmenu="return false;" width="100%" height="240" controls>
                                <source :src="card_6_url" type="video/mp4" style="border-radius: 1rem"
                                    alt="eConservancy Solution" />
                            </video>



                        </div>

                        <!-- <img v-else :src="card_6_image" /> -->
                        <div v-else :style="buttonStyles(this.card_6_image)">
                        </div>


                        <div class="card-body">
                            <h2 class="card-title">{{ card_6_title }}</h2>
                            <p class="paragraph-moses">
                                {{ card_6_text }}
                            </p>
                            <div class="d-flex justify-content-end">
                                <router-link :to="{ query: { current: card_6_view_more, img: card_6_image }, name: 'ViewMore' }"
                                    style="position:absolute;right:0;bottom:0; margin-right:8px;margin-bottom:8px;"><a
                                        href="#" class="btn btn-primary">View More</a></router-link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
</template>
  

<style scoped>
button {
    font-weight: bold;
}
</style>