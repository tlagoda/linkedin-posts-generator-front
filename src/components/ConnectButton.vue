<template>
  <button class="connect-btn" @click="loginToLinkedIn">Login to LinkedIn</button>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const loginToLinkedIn = ref(() => {
  const clientId = import.meta.env.VITE_LINKEDIN_CLIENT_ID
  const redirectUri = encodeURIComponent('http://localhost:3000/auth/linkedin/callback')
  const state = 'randomString'
  const scope = encodeURIComponent('r_liteprofile r_emailaddress w_member_social')
  const responseType = 'code'

  const url = `https://www.linkedin.com/oauth/v2/authorization?response_type=${responseType}&client_id=${clientId}&redirect_uri=${redirectUri}&state=${state}&scope=${scope}`

  window.location.href = url
})
</script>

<style>
.connect-btn {
  position: absolute;
  top: 1rem;
  right: 2rem;
  cursor: pointer;
  font-size: 1.5rem;
  padding: 0.3rem 0.8rem;
  border-radius: 1rem;
  color: cornflowerblue;
  background-color: transparent;
}

.connect-btn:hover {
  background-color: cornflowerblue;
  color: white;
}
</style>
