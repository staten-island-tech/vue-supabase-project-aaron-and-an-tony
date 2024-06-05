<script setup>
import { ref } from "vue";
import { supabase } from "../supabase";

const loading = ref(false);
const email = ref("");
// this entire file is kinda unused, just the supabase vue 3 basic guide
const handleLogin = async () => {
  try {
    loading.value = true;
    const { error } = await supabase.auth.signInWithOtp({
      email: email.value,
    });
    if (error) throw error;
    alert("Check your email for the login link!");
  } catch (error) {
    if (error instanceof Error) {
      alert(error.message);
    }
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <form class="row flex-center flex" @submit.prevent="handleLogin">
    <div class="col-6 form-widget">
      <h1 class="header">Supabase + Vue 3</h1>
      <p class="description">Sign in via magic link with your email below</p>
      <div>
        <input
          class="inputField"
          required
          type="email"
          placeholder="Your email"
          v-model="email"
        />
      </div>
      <div>
        <input
          type="submit"
          class="sign-in button"
          :value="loading ? 'Loading' : 'Send magic link'"
          :disabled="loading"
        />
      </div>
    </div>
  </form>

</template>

<style scoped>
.sign-in button {
  font-size: 1.2rem;
  margin-top: 20px;
  padding: 15px 35px;
  border: none;
  outline: none;
  border-radius: 0.4rem;
  cursor: pointer;
  text-transform: uppercase;
  background-color: rgb(14, 14, 26);
  color: rgb(234, 234, 234);
  font-weight: 700;
  transition: 0.6s;
  box-shadow: 0px 0px 60px #1f4c65;
  -webkit-box-reflect: below 10px
    linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4));
}

.sign-in button:active {
  scale: 0.92;
  padding: 10px;
}

.sign-in button:hover {
  background: rgb(2, 29, 78);
  background: linear-gradient(
    270deg,
    rgba(2, 29, 78, 0.681) 0%,
    rgba(31, 215, 232, 0.873) 60%
  );
  color: rgb(4, 4, 38);
}

.log-in {
  position: relative;
  width: 196px;
  padding-top: 25px;
}

.log-in input {
  position: relative;
  width: 100%;
  padding: 20px 10px 10px;
  margin-top: 5px;
  background: transparent;
  outline: none;
  box-shadow: none;
  border: none;
  color: #23242a;
  font-size: 1em;
  letter-spacing: 0.05em;
  transition: 0.5s;
  z-index: 10;
}

.log-in span {
  position: absolute;
  left: 0;
  padding: 20px 10px 10px;
  font-size: 1em;
  color: #8f8f8f;
  letter-spacing: 00.05em;
  transition: 0.5s;
  pointer-events: none;
}

.log-in input:valid ~ span,
.log-in input:focus ~ span {
  color: #45f3ff;
  transform: translateX(-10px) translateY(-34px);
  font-size: 0, 75em;
}

.log-in i {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2px;
  background: #45f3ff;
  border-radius: 4px;
  transition: 0.5s;
  pointer-events: none;
  z-index: 9;
}

.log-in input:valid ~ i,
.log-in input:focus ~ i {
  height: 44px;
}
</style>
