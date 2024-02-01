<script>
export default {
  data() {
    return {
        colors: [
          'indigo',
          'warning',
          'pink darken-2',
          'red lighten-1',
          'deep-purple accent-4',
        ],
        slides: [
          '/images/img3.jpg',
          '/images/img3.jpg',
          '/images/img3.jpg',
        ],

    }
  }
}
</script>

<template>
  <v-carousel
    cycle
    height="400"
    hide-delimiter-background
    show-arrows="hover"
  >
    <v-carousel-item
      style="maxwidth: 100%; height: 600px; objectFit: cover;"
      v-for="(slide, i) in slides"
      :src="slide"
      :key="i"
    >
    
    </v-carousel-item>
  </v-carousel>
</template>

<style scoped>
button {
  font-weight: bold;
}
</style>