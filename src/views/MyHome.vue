<template>
  <h1>GPT | LinkedIn</h1>
  <div class="main-div">
    <PostForm />
    <div class="post-div">
      <LinkedInPost />
      <div class="btn-div">
        <button class="generate-btn">Generate a post</button>
        <button class="share-btn">Share on LinkedIn</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import LinkedInPost from '@/components/LinkedInPost.vue'
import PostForm from '@/components/PostForm.vue'
</script>

<style scoped>
h1 {
  text-align: center;
  margin: 1rem 0 2rem 0;
}

.main-div {
  margin-top: 5rem;
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

.post-div {
  min-width: 20rem;
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

.generate-btn {
  color: crimson;
  background-color: transparent;
}

.share-btn {
  color: limegreen;
  background-color: transparent;
}

.generate-btn:hover {
  background-color: crimson;
  color: white;
}

.share-btn:hover {
  background-color: limegreen;
  color: white;
}
</style>
