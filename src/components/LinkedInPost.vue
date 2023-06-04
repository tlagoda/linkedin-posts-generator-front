<template>
    <textarea :value="post" @input="updatePost" class="post"></textarea>
  </template>
  
  <script lang="ts" setup>  
  const props = defineProps({
    post: {
      type: String,
      default: ''
    }
  });
  
  const emits = defineEmits(['update:post']);
  
  const updatePost = (event: any) => {
    emits('update:post', event.target.value);
  };
  </script>
  
  <style scoped>
  .post {
    width: 24rem;
    height: 25rem;
    border: 3px solid black;
    padding: 0.3rem 0.8rem;
    border-radius: 1rem;
    position: relative;
    resize: none;
  }
  </style>
  