<template>
  <div>
    <div class="row">
      <div
        class="col-8 mx-auto text-center column_wrapper font-weight-bold"
        style="padding-top: 100px"
      >
        <div v-for="book in books" :key="book.text">
          <div>{{ book[1] }}</div>
          <div style="padding-bottom: 20px; font-size: 12px">
            by {{ book[0] }}
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- <div class="row" style="padding-top: 15vh">
    <div class="col-8 offset-md-4 offset-2">
      <table class="table table-borderless">
        <thead>
          <tr>
            <th scope="col" style="color: #918484">AUTHOR</th>

            <th scope="col" style="color: #918484">TITLE</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="book in books" :key="book.text">
            <td class="p-0" style="font-weight: 500; color: #918484">
              {{ book[0] }}
            </td>

            <td class="p-0" style="font-weight: 500; color: #918484">
              {{ book[1] }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div> -->
</template>

<script>

import raw from "raw-loader!../assets/sciencebooks.txt";
var books = raw.split("\n");

for (var i = 0; i < books.length; i++) {
  books[i] = books[i].split(",");
}

books.pop();
console.log(books);

var sortedNames = books.sort(compare);
console.log(sortedNames);

function compare(a, b) {
  var splitA = a[0].split(" ");
  var splitB = b[0].split(" ");
  var lastA = splitA[1];
  var lastB = splitB[1];

  if (lastA < lastB) return -1;
  if (lastA > lastB) return 1;
  return 0;
}

export default {
  name: "Books",
  inheritAttrs: false, // disable 'non-props' warning
  data() {
    return {
      books,
    };
  },
};
</script>

<style scoped>
.column_wrapper {
  column-count: 3;
}
table {
  border-collapse: separate;
  border-spacing: 0 1.5em;
}
</style>
