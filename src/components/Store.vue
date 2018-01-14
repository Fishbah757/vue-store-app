<template>
  <div>
    <Menu :link="false" />
    <h1 class="ui centered header">
      Welcome to our Store!
    </h1>
    <h3 class="ui centered header">
      In your cart {{ countInCart }} item(s)
    </h3>
    <ul class="products-list">
      <li 
        v-for="item in items" 
        :key="item.name"
      >
        <ItemCard 
          @addToCart="addToCart" 
          from="Store" 
          :name="item.name" 
          :price="item.price" 
          :image="item.image" 
        />
      </li>
    </ul>
  </div>
</template>

<script>
import ItemCard from '../components/ItemCard'
import Menu from '../components/Menu'
import cartStorage from '../localData/localStore'
import ItemsArray from '../localData/ItemsArray'
import swal from 'sweetalert'

export default {
  name: 'Store',
  components: {
    ItemCard,
    Menu
  },
  data () {
    return {
      items: ItemsArray,
      cartItems: cartStorage.fetch()
    }
  },
  watch: {
    cartItems: {
      handler: function (cartItems) {
        cartStorage.save(cartItems)
      },
      deep: true
    }
  },
  computed: {
    countInCart: function () {
      let count = 0
      if (this.cartItems.length !== 0) {
        this.cartItems.forEach(element => {
          count += element.count
        })
      }
      return count
    }
  },
  methods: {
    addToCart: function (name, price, image) {
      if (this.cartItems.length !== 0) {
        let inCart = false
        let index = -1
        let changedEl = {}

        this.cartItems.forEach((element, ind) => {
          if (element.name === name) {
            element.count++
            changedEl = element
            index = ind
            inCart = true
            swal('Item Added!', 'Let`s check your cart! You have a ' + element.count + ' such items!', 'success')
          }
        })

        if (!inCart) {
          this.cartItems.unshift({name, price, image, count: 1})
          swal('Item Added!', 'Let`s check your cart! You added the first such item!', 'success')
        } else {
          this.cartItems.splice(index, 1)
          this.cartItems.unshift(changedEl)
        }
      } else {
        this.cartItems.unshift({name, price, image, count: 1})
        swal('Item Added!', 'Let`s check your cart! You added the first such item!', 'success')
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
