<template>
  <div>
    <div class="container">
      <div class="row" style="padding-top: 10%">
        <div class="col-sm-6 mx-auto">
          <table class="table table-borderless">
            <tbody>
              <tr v-for="track in tracks" :key="track">
                <td class="align-middle">
                  <b> {{ track[0] }} </b>
                </td>
                <td class="align-middle">
                  <audio controls>
                    <source :src="track[1]" type="audio/wav" />
                  </audio>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

// const tracknames = require.context("@/assets/tracks/", true, /^.*\.wav$/);
// tracknames.keys().forEach((filePath) => {
//   console.log(filePath.slice(2));
// });

export default {
  name: "Tracks",
  inheritAttrs: false, // disable 'non-props' warning
  data() {
    return {
      tracks: [
        ["Kupi", require("../assets/tracks/Kupi.wav")],
        ["Mintune", require("../assets/tracks/Mintune.wav")],
        ["T-Att", require("../assets/tracks/T-Att.wav")],
        ["Tram-Loop", require("../assets/tracks/Tram-Loop.wav")],
      ],
    };
  },
};
</script>

<style scoped>
audio::-webkit-media-controls-play-button,
audio::-webkit-media-controls-panel {
  background-color: #887979;
  color: #2b1717;
}
</style>
