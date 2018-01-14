<template>
    <div>
        <ItemCard
          @removeOne="removeOne"
          @removeAll="removeAll"
          from="Cart"
          :name="item.name"
          :price="item.price"
          :image="item.image"
        />
        <div 
          v-if="isEditing" 
          class="ui small input"
        >
          <input 
            :placeholder="item.count" 
            v-model="newCount" 
            type="number" 
          />
          <button 
            @click="sendForm(item, newCount)" 
            class="ui green button"
          >
            Submit
          </button>
        </div>
        <div 
          v-if="!isEditing" 
          class="change-count-btn" 
          @click="openForm(item)"
        >
          <h2 class="count-btn">
            {{item.count}} {{item.count === 1 ? 'item' : 'items'}}
          </h2>
          <p>
            (click to change)
          </p>
        </div>
    </div>
</template>

<script>
import ItemCard from '../components/ItemCard'

export default {
  name: 'CartItem',
  props: ['item'],
  components: {
    ItemCard
  },
  data () {
    return {
      newCount: '',
      isEditing: false
    }
  },
  watch: {
    newCount: {
      handler: function () {
        if (this.newCount < 1) {
          this.newCount = 1
        }
      }
    }
  },
  methods: {
    removeOne: function (name) {
      this.$emit('removeOne', name)
    },
    removeAll: function (name) {
      this.$emit('removeAll', name)
    },
    openForm: function (item) {
      this.isEditing = true
    },
    sendForm: function (item, newCount) {
      this.isEditing = false
      if (newCount !== '') {
        this.$emit('catchForm', item, newCount)
      }
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