<template>
  <div class="card-body">
    <button @click="showPopup = true">View More</button>
    <DetailsPopup :isVisible="showPopup" @close="showPopup = false" />
  </div>
</template>

<style>
.details-popup {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  max-height: 80vh; /* Adjust as needed */
  overflow-y: auto;
  animation: slideUp 0.5s ease-in-out;
}

@keyframes slideUp {
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0);
  }
}
</style>

<script>
import DetailsPopup from './DetailsPopup.vue'; // Import your DetailsPopup component

export default {
  components: {
    DetailsPopup
  },
  data() {
    return {
      showPopup: false
    };
  }
};
</script>

