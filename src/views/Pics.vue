<template>
  <div class="container">
    <div
      id="carouselExampleControls"
      class="carousel slide"
      data-ride="carousel"
      data-interval="false"
    >
      <div class="carousel-inner">
        <div
          v-for="(image, index) in pics"
          :key="index"
          :class="index === 0 ? 'carousel-item active' : 'carousel-item'"
        >
          <!-- <img
            class=""
            style="width: 100%; max-width: 1200px"
            :src="image"
            alt=""
          /> -->
          <img
            class=""
            style="width: 100%; max-width: 1200px"
            :src="`/pics/${image}`"
            alt=""
          />

          {{ log(index) }}
        </div>
      </div>

      <a
        class="carousel-control-prev"
        href="#carouselExampleControls"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleControls"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
  <!-- width:100%;    -->
</template>

<script>

// const picnames = require.context(
//   '@/assets/pics/',
//   true,
//   /^.*\.jpg$/
// )

// var pics = []

// picnames.keys().forEach(filePath => {
//   pics.push(filePath.slice(2))
// });

// console.log(pics)

// var pics1 = []

// pics.forEach(pic => {
//   pics1.push("../assets/pics/".concat(pic))
// });

// console.log(pics1)

// console.log(typeof pics1[0])

// var photos = []

// photos.push(require('' + pics1[0]))

// var photos = [
//   "DSCF5431",
//   "IMG_0053",
//   "IMG_0136"
// ]

// var photos = [
//         require('../assets/pics/DSCF5411.jpg'),
//         require("../assets/pics/IMG_0175.jpg"),
//         require("../assets/pics/IMG_0180.jpg"),
//       ]


import raw from "raw-loader!../assets/picnames.txt";

var pics = raw.split("\r\n");

console.log(pics)

export default {
  name: "Pics",
  // inheritAttrs: false, // disable 'non-props' warning

  components: {},

  data() {
    return {
      // photos,
      pics
    };
  },

  methods: {
    log(index) {
      console.log(index);
    },
  },
};
</script>



<style scoped>
.container {
  /* height: 100%; */
  /* width: 100%; */
  /* justify-content: center;
        align-items: center; */
  padding-top: 6%;
}

@media (max-width: 800px) and (min-width: 0px) {
  .container {
    padding-top: 12%;
  }
}
</style>
