<template>
  <div id="app">
    <display></display>
    <inc></inc>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import Display from './components/Display'
import Inc from './components/Inc'
export default {
  components: {
    Display,
    Inc
  }
}
</script>
