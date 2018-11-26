<template>
  <table v-if="dataList.length > 0" class="table table-striped table-hover">
    <thead class="thead-dark">
      <tr>
        <th>Nom de la bière</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(beer, key) in dataList" :key="key">
        <td>{{ beer.nameDisplay }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    dataList: {
      type: Array,
      default: function() {
        return undefined
      }
    }
  }
}
</script>
