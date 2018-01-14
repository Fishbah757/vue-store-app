<template>
    <div class="ui fluid centered card">
        <div class="ui image">
            <img :src="image">
        </div>
        <div class="content">
            <div class="header">
                {{ name }}
            </div>
            <div class="description">
                Price: ${{ price }}
            </div>
        </div>
        <div 
            v-if="from === 'Store'" 
            @click="addToCart(name, price, image)" 
            class="ui bottom attached red button"
        >
            <p>
                Add to shopping cart
            </p>
        </div>
        <div 
            v-if="from !== 'Store'" 
            class="ui two buttons"
        >
            <div 
                @click="removeOne(name)" 
                class="ui bottom left attached red button half"
            >
                <p class="small-size">
                    Delete from cart 1 item
                </p>
            </div>
            <div 
                @click="removeAll(name)" 
                class="ui bottom right attached red button half"
            >
                <p class="small-size">
                    Delete from cart all this items
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ItemCard',
  props: [
    'name',
    'price',
    'image',
    'from'
  ],
  methods: {
    addToCart: function (name, price, image) {
      this.$emit('addToCart', name, price, image)
    },
    removeOne: function (name) {
      this.$emit('removeOne', name)
    },
    removeAll: function (name) {
      this.$emit('removeAll', name)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
    box-shadow: 0 1px 3px 0 black,0 0 0 1px black; 
}
.content {
    border-color: black!important;
}
button {
    width: 100%;
    margin: 0;
}
.half {
    width: 50%!important;
    display: inline-block!important;
}
.left, .right {
    text-align: center!important;
}
.left {
    background: darkorange!important;
}
.right {
    background: rgb(170, 0, 0)!important;
}
.small-size {
    font-size: 12px;
}
p {
    font-size: 22px;
}
</style>