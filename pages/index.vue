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
      return axios.get(`https://sandbox-api.brewerydb.com/v2/beers?key=d54e938eaaa5fde135e5a1e4405a6ea6`)
        .then((res) => {
          return {data: res.data.data}
        })
    }
  }

</script>