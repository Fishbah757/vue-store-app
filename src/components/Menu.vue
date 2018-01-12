<template>
    <div class="ui fluid two item top massive fixed menu">
      <router-link v-if="link" to="/" class="item left home-link">
          <i class="home icon"></i>
          Home
      </router-link>
      <router-link v-if="!link" to="/cart" class="item right cart">
          <i class="shop icon"></i>
          Go to Cart
        </router-link>
    </div>
</template>

<script>
export default {
  name: 'Menu',
  props: [
    'link'
  ]
}
</script>

<style scoped>
a, a:visited, a:focus {
  color: white!important;
  font-weight: bold!important;
}
a:hover {
  color: white!important;
}
.cart {
  background: orange!important;
  border: none;
}
.cart:hover {
  background: rgb(255, 145, 0)!important;
}
.home-link {
  background: lightskyblue!important;
  border: none;
}
.home-link:hover {
  background: rgb(92, 192, 255)!important;
}
</style>