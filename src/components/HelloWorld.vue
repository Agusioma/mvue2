<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      <i>This demo is hosted on Kinsta</i>
    </p>
  </div>
  <div>{{ store.doubleCount }}</div>
  <button @click="store.increment">Increment</button>
</template>

<script>
import { useStore } from '/src/store';

export default {
  setup() {
    const store = useStore();
    return {
      store
     /* doubleCount: store.doubleCount,
      increment: store.increment*/
    };
  },
  //store.
  name: 'HelloWorld',
  props: {
    msg: String
  }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
a {
  color: #42b983;
}
</style>
