<template>
    <div>
        <Menu :link="true" />
        <h1 class="ui centered header">You are in your own Cart!</h1>
        <ul class="products-list">
            <li v-for="item in cartItems" :key='item.name'>
                <CartItem @removeAll="removeAll" @removeOne="removeOne" @catchForm="catchForm" :item="item" />
            </li>
        </ul>
        <h2 v-if="isEmpty" class="ui centered header diffcolor">Total price: ${{ totalPrice }}</h2>
        <h2 v-else class="ui centered header diffcolor">Your Cart is empty!</h2>
    </div>
</template>

<script>
import Menu from '../components/Menu'
import CartItem from '../components/CartItem'
import cartStorage from '../localData/localStore'
import swal from 'sweetalert'

export default {
  name: 'Cart',
  components: {
    Menu,
    CartItem
  },
  data () {
    return {
      cartItems: cartStorage.fetch(),
      empty: true
    }
  },
  computed: {
    totalPrice: function () {
      let total = 0
      this.cartItems.forEach(element => {
        total += element.price * element.count
      })
      return total
    },
    isEmpty: function () {
      return this.cartItems.length !== 0 ? this.empty : !this.empty
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
  methods: {
    removeOne: function (name) {
      let index = -1
      this.cartItems.forEach((element, ind) => {
        if (element.name === name) {
          if (element.count === 1) {
            index = ind
          } else {
            element.count--
            swal('Deleted!', 'One item was deleted!', 'success')
          }
        }
      })
      if (index !== -1) {
        this.cartItems.splice(index, 1)
        swal('Deleted!', 'All such items was deleted!', 'success')
      }
    },
    removeAll: function (name) {
      let index = -1
      this.cartItems.forEach((element, ind) => {
        if (element.name === name) {
          index = ind
        }
      })
      this.cartItems.splice(index, 1)
      swal('Deleted!', 'All such items was deleted!', 'success')
    },
    catchForm: function (item, newCount) {
      this.cartItems[this.cartItems.indexOf(item)].count = parseInt(newCount)
    }
  }
}
</script>

<style scoped>
.diffcolor {
  margin: 0 auto;
  margin-bottom: 80px!important;
  color: darkmagenta;
  border: 1px gray solid;
  width: 400px;
  padding: 20px 0;
  border-radius: 5px;
}
li {
  border: 1px black solid;
  background: rgb(86, 146, 214);
  color: white;
  border-radius: 5px;
  padding: 20px 0;
  padding-top: 0px;
}
.count-btn {
  margin-bottom: 0;
}
.change-count-btn {
  padding: 10px;
  margin: -10px 0;
  margin-bottom: -20px;
  cursor: pointer;
  border-radius: 5px;
}
.change-count-btn:hover {
  background: rgb(47, 129, 223);
}
input {
  margin: 0 20px!important;
}
</style>