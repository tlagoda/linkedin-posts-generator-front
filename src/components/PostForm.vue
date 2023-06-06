<template>
  <textarea
    maxlength="5000"
    placeholder="Enter your prompt here!"
    v-model="inputValue"
    @input="emitCustomPrompt"
  ></textarea>
</template>

<script setup lang="ts">
import {  ref } from 'vue'

const props = defineProps({
  customPrompt: String
})

const emit = defineEmits(['updateCustomPrompt'])

const inputValue = ref(props.customPrompt)

const emitCustomPrompt = () => {
  emit('updateCustomPrompt', inputValue.value)
}
</script>

<style scoped>
textarea {
  width: 24rem;
  height: 25rem;
  border: 3px solid black;
  padding: 0.3rem 0.8rem;
  border-radius: 1rem;
  position: relative;
  resize: none;
  margin-bottom: 1rem;
}
</style>
