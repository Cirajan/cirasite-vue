<template>
  <div class="container-fluid">
    <div class="row text-center font-weight-bold mx-auto justify-content-center" style="padding-top: 90px">
      <!-- <div
        class="col-8 mx-auto"
        style="padding-top: 90px"
      > -->
      <div v-for="list in tvshows" :key="list.text">
        <div class="col">
          <div class="card" style="width: 18rem">
            <div class="card-body">
              <!-- <h5 class="card-title">Card title</h5> -->
              <p class="card-text text-white-50">
                {{ list }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
import tv from "raw-loader!../assets/tvshows.txt";

const tvshows = tv.split("\n").sort();

tvshows.shift();

console.log(tvshows);

export default {
  name: "TV",
  inheritAttrs: false, // disable 'non-props' warning
  data() {
    return {
      tvshows,
    };
  },
};

console.log(typeof tvshows);
</script>

<style scoped>
.column_wrapper {
  column-count: 3;
}

.card {
    background-color: rgba(255,255,255, 0.1) !important;
}
</style>
