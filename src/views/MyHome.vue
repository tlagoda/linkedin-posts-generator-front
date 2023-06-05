<template>
  <h1>GPT | LinkedIn</h1>
  <div class="main-div">
    <PostForm />
    <div class="post-div">
      <LinkedInPost :post="generatedPost" />
      <div class="btn-div">
        <button
          class="generate-btn"
          @click="generatePost"
          :disabled="generatedPost === 'LOADING...'"
        >
          Generate a post
        </button>
        <button class="share-btn" @click="shareOnLinkedIn">Share on LinkedIn</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import LinkedInPost from '@/components/LinkedInPost.vue'
import PostForm from '@/components/PostForm.vue'
import { PostService } from '@/services/PostService'
import { ref } from 'vue'
import { useToast } from 'vue-toast-notification'

const generatedPost = ref('')

const generatePost = async () => {
  try {
    generatedPost.value = 'LOADING...'
    const post = await PostService.getPost()
    generatedPost.value = post
  } catch (error) {
    console.error('Error generating post:', error)
  }
}

const shareOnLinkedIn = async () => {
  if (generatedPost.value === '') {
    return
  }
  try {
    const response = await PostService.sharePost(generatedPost.value)
    if (response.status === 201) {
      const $toast = useToast()
      let instance = $toast.success('Post has been shared!')
    } else {
      const $toast = useToast()
      let instance = $toast.error('An error occured.')
    }
  } catch (error) {
    const $toast = useToast()
    let instance = $toast.error('An error occured.')
    console.error('Error while sharing post:', error)
  }
}
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
