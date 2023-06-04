<template>
  <textarea v-model="temp" class="post"></textarea>
</template>

<script lang="ts" setup>
const getTemp = () => {
  let temp = ''
  for (let i = 0; i < 500; i++) {
    temp += 'GPT GENERATED LINKEDIN POST IS COMING SOON! 🔥\n'
  }
  return temp
}

const temp= getTemp()
</script>

<style scoped>
.post {
  width: 24rem;
  height: 25rem;
  border: 1px solid black;
  padding: 0.3rem 0.8rem;
  border-radius: 1rem;
  position: relative;
  resize: none;
}
</style>
