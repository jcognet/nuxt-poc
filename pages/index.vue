<template>
  <div>
    <h1>Liste des bières :)</h1>
    <div>
      <ul>
        <li v-for="(beer,key) in data">
          {{beer.nameDisplay}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import axios from "axios";
  import { getBeers } from "~/assets/js/beer";

  export default {
    asyncData(context) {
      return getBeers()
        .then((res) => {
          return {data: res.data.data}
        });
    }
  }

</script>