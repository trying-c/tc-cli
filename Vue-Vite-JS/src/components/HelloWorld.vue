<script setup>
import { useStore } from '@/stores';
defineProps({
  msg: String,
})

const store = useStore();

function increment() {
  store.increment();
}
function decrement() {
  store.decrement();
}
function reset() {
  store.reset();
}

</script>

<template>
  <transition name="transition-drop" appear>
    <h1>{{ msg }}</h1>
  </transition>

  <div class="card">
    <p>{{ store.count }}</p>

    <div>
      <Button type="primary" @click="increment">increment</Button>
      <Button type="warning" @click="decrement">decrement</Button>
      <Button type="error" @click="reset">reset</Button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
h1 {
  color: $red;
  font-size: 3rem;
}

p {
  font-size: 3rem;
}

button {
  margin: 8px;
}

* {
  text-align: center;
}
</style>