<template>
  <div>
    <h1>Hello world !</h1>
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

  export default {
    asyncData(context) {
      return axios.get(context.env.API_BEER_BASE_URL+`beers?key=`+context.env.API_BEER_KEY)
        .then((res) => {
          return {data: res.data.data}
        });
    }
  }

</script>