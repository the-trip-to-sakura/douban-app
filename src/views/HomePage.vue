<template>
  <div class="home-page">
    <p>{{ a }}</p>
  </div>
</template>

<script>

export default {
  name: 'HomePage',
  data() {
    return {
      a: 1
    }
  },
  mounted() {
    this.test()
  },
  methods: {
    test() {
      this.$http.get('/weekly').then((data) => {
        console.log(data)
      })
    }
  }
};
</script>
