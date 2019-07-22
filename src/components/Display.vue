<template>
  <div>
    <h1>Count is : {{ getCount }}</h1>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'Display',
  computed: {
    ...mapGetters([
      'getCount'
    ])
  }
}
</script>

