<script>
export default {
    props: {
        card_header: String,
        card_title: String,
        skills: Array,

        card_1_url: String,
        card_1_title: String,
        card_1_text: String,
        card_1_view_more: String,

        card_2_url: String,
        card_2_title: String,
        card_2_text: String,
        card_2_view_more: String,

        card_3_url: String,
        card_3_title: String,
        card_3_text: String,
        card_3_view_more: String,
                    


    },
    data() {
        return {
            count: 0
        }
    }
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
                <br>
                <h5 class="" style="font-size: 2.3rem;color: #808080;">Projects</h5>
            </div>

            <div class="card-body">
                <!-- <h5 class="heading-edited-left mb-2 pl-3" style="font-size:2.5rem;color:#A0A4A8;">Card title</h5> -->

                <div class="row" id="experiment">
                    <div class="col-sm-4 card" style="border-radius: 1rem">
                        <video v-if="card_1_url" style="display:block;" oncontextmenu="return false;" width="320" height="240" controls>
                            <source :src="card_1_url" type="video/mp4" style="border-radius: 1rem"
                                alt="e-Governance Revenue Management System (eRMS)" />
                        </video>

                        <img v-else src="/images/justicelens.png" />

                        <!-- <img src="/images/img3.jpg" style="border-radius:1rem;" alt="e-Governance Revenue Management System (eRMS)" /> -->

                        <div class="card-body">
                            <h2 class="card-title">{{ card_1_title }}</h2>
                            <p class="paragraph-moses">
                                {{ card_1_text }}
                            </p>
                            <div class="d-flex justify-content-end">
                                <router-link :to="{ query: { current: 'wild' }, name: 'ViewMore' }"
                                    style="position:absolute;right:0;bottom:0; margin-right:8px;margin-bottom:8px;"><a
                                        href="#" class="btn btn-primary">View More</a></router-link>
                            </div>
                        </div>
                    </div>

                    <div class=" col-sm-4 card" style="border-radius: 1rem;">
                        <video v-if="card_2_url" style="display:block;" oncontextmenu="return false;" width="320" height="240" controls>
                            <source :src="card_2_url" type="video/mp4" style="border-radius: 1rem"
                                alt="eConservancy Solution" />
                        </video>

                        <img v-else src="/images/justicelens.png" />
                        

                        <div class="card-body">
                            <h2 class="card-title">{{ card_2_title }}</h2>
                            <p class="paragraph-moses">
                                {{ card_2_text }}

                            </p>
                            <div class="d-flex justify-content-end">
                                <router-link :to="{
                                    query: { current: 'eConservancy' },
                                    name: 'ViewMore',
                                }" style="position:absolute;right:0;bottom:0; margin-right:8px;margin-bottom:8px;"><a
                                        href="#" class="btn btn-primary">View More</a></router-link>
                                >
                            </div>
                        </div>
                    </div>

                    <div class=" col-sm-4 card" style="border-radius: 1rem">
                        <video v-if="card_3_url" style="display:block;" oncontextmenu="return false;" width="320" height="240" controls>
                            <source :src="card_3_url" type="video/mp4" style="border-radius: 1rem"
                                alt="eConservancy Solution" />
                        </video>

                        <img v-else src="/images/EDRMS.png" />

                        <div class="card-body">
                            <h2 class="card-title">EDRMS</h2>
                            <p class="paragraph-moses">
                                {{ card_2_text }}
                            </p>
                            <div class="d-flex justify-content-end">
                                <router-link :to="{ query: { current: 'wild' }, name: 'ViewMore' }"
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