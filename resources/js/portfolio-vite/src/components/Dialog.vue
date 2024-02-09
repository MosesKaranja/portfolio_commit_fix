<template>
  <div class="card-body">
    <button @click="showPopup = true">View More</button>
    <DetailsPopup :isVisible="showPopup" @close="showPopup = false" />
  </div>
</template>

  
<script>
  export default {
    data () {
      return {
        dialog: false,
        notifications: false,
        sound: true,
        widgets: false,
      }
    },
  }
</script>
