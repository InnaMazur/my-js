
<template>
  <div class="container">
    <h1>Vue + Vite Counter</h1>
    <div class="counter">
      <button class="btn btn-danger" @click="count--">-</button>
      <span>{{ count }}</span>
      <button class="btn btn-primary" @click="count++">+</button>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const count = ref(0) 
    return { count }
  }
}
</script>

