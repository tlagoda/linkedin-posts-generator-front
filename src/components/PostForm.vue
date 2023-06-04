<template>
  <form>
    <div class="prompt-div">
      <label>Your prompt:</label>
      <textarea maxlength="1000">ENTER YOUR PROMPT HERE</textarea>
    </div>
    <div class="token-temp-div">
      <div class="token-div">
        <label>MAX TOKEN</label> <input type="number" min="10" max="2000" />
      </div>
      <div class="temp-div">
        <label>TEMPERATURE</label> <input type="number" min="0" max="1" step="0.05" />
      </div>
    </div>
  </form>
</template>

<script setup lang="ts"></script>

<style scoped>
form {
  width: 30rem;
}

.prompt-div {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

textarea {
  width: 20rem;
  height: 20rem;
  resize: none;
}

.token-temp-div {
    display: flex;
    justify-content: space-around;
}
</style>
