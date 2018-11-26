<template>
  <div>
    <h1>Liste des bières :)</h1>
    <div><list :data-list="data" /></div>
  </div>
</template>

<script>
import { getBeers } from "~/assets/js/beer"
import list from "../components/List"

export default {
  components: { list },
  asyncData() {
    return getBeers().then(res => {
      return { data: res.data.data }
    })
  }
}
</script>
