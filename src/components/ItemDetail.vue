<template>
	<v-slide-y-transition mode="out-in">
		<v-carousel>
	    <v-carousel-item v-for="(item,i) in items" v-bind:src="item.src" :key="i"></v-carousel-item>
	  </v-carousel>
	</v-slide-y-transition>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            src: '/static/doc-images/carousel/IMG_2486.jpg'
          },
          {
            src: '/static/doc-images/carousel/IMG_2515.jpg'
          },
          {
            src: '/static/doc-images/carousel/IMG_2630.jpg'
          },
          {
            src: '/static/doc-images/carousel/IMG_2642.jpg'
          }
        ]
      }
    }
  }
</script>