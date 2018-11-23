<template>
  <div>
    <h1>Liste des bières :)</h1>
    <div>
      <ul>
        <li v-for="(beer, key) in data" :key="key">{{ beer.nameDisplay }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getBeers } from "~/assets/js/beer"

export default {
  asyncData() {
    return getBeers().then(res => {
      return { data: res.data.data }
    })
  }
}
</script>
