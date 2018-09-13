<template>
  <div id="a">
  <!-- <router-view/> 这里是router -->
   <div v-bind:title="msg">ddd</div>
   <span v-if="seen">可看见</span>
   <button v-on:click="toggle">toggle</button>

   <ul v-on:click="ulEnter">
     <li v-bind:key="list.id" v-for="list in lists" v-on:click='liEnter'>
       {{list.text}}
     </li>
   </ul>

   <div>input text :{{newinputText}}</div>
   <input type="text" v-model="inputText">

   <div>class and style</div>
   <div :class="seen?'active':'noActive'">xxx</div>

   <div>表单</div>
   <span>复选框</span>
   <div>
     <input type="checkbox" name="vegetables" id="tomato" value="tomato" v-model="vegetables">
     <label for="tomato">tomato</label>
     <input type="checkbox" name="vegetables" id="potato" value="potato" v-model="vegetables">
     <label for="potato">potato</label>
     <input type="checkbox" name="vegetables" id="eggplant" value="eggplant" v-model="vegetables">
     <label for="eggplant">eggplant</label>
     <br>
     <span>{{vegetables.length === 0 ? '' : vegetables}}</span>
   </div>
   <test v-for="(list, index) in lists" v-bind:key="index" v-bind:title="list.text" v-on:max="fatherMax">我是slot</test>
  </div>
</template>

<script>
import Test from './components/test'
import moduleName from 'vuex'

export default {
  name: 'App',
  components: {
    'test': Test
  },
  data () {
    return {
      msg: 'Hello Vue!' + new Date().toLocaleTimeString(),
      seen: true,
      inputText: '',
      isAction: true,
      vegetables: [],
      lists: [
        {
          id: 1,
          text: '1 list'
        },
        {
          id: 2,
          text: '2 list'
        }
      ]
    }
  },
  methods: {
    toggle: function () {
      this.seen = !this.seen
    },
    liEnter: function (e) {
      // e.stopPropagation();
      console.log(e, 'li')
    },
    ulEnter: function (e) {
      console.log(e, 'ul')
    },
    fatherMax: function (obj) {
      console.log(obj);
    }
  },
  computed: { //
    newinputText: function () {
      return this.inputText.split('').reverse().join('')
    }
  }
}

</script>

<style>
#a {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.active {
  color:salmon;
}
.noActive {
  color: aquamarine
}
</style>
