<template>
  <button class="connect-btn" @click="loginToLinkedIn">Login to LinkedIn</button>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const loginToLinkedIn = ref(() => {
  const clientId = import.meta.env.VUE_APP_LINKEDIN_CLIENT_ID
  const redirectUri = encodeURIComponent('http://localhost:8080/linkedin-callback')
  const state = 'randomString'
  const scope = encodeURIComponent('r_liteprofile r_emailaddress w_member_social')
  const responseType = 'code'

  const url = `https://www.linkedin.com/oauth/v2/authorization?response_type=${responseType}&client_id=${clientId}&redirect_uri=${redirectUri}&state=${state}&scope=${scope}`

  window.location.href = 'http://google.com' // replace with linkedin redirect url
})
</script>

<style>
.connect-btn {
  position: absolute;
  top: 1rem;
  right: 1rem;
  cursor: pointer;
}
</style>
