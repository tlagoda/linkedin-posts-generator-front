<template>
  <h1>LINKEDIN / GPT</h1>
  <div class="post-div">
    <LinkedInPost />
    <div class="btn-div">
      <button>Generate a post</button>
      <button>Share on LinkedIn</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import LinkedInPost from '@/components/LinkedInPost.vue'
</script>

<style scoped>
h1 {
  text-align: center;
}

.post-div {
  width: 50vw;
  min-width: 20rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.btn-div {
  margin-top: 1rem;
  display: flex;
  width: 20rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

button {
  cursor: pointer;
  font-size: 1rem;
  padding: 0.2rem 0.8rem;
}
</style>
