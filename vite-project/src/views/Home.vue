<template>
    <div>
    </div>    
    <form class="row flex-center flex" @submit.prevent="signUpNewUser">
    <div class="col-6 form-widget">
      <h1 class="header">Supabase + Vue 3</h1>
      <p class="description">Sign up with an email and password</p>
      <div>
        <input class="inputField" required type="email" placeholder="Your email" v-model="email" />
        <input class="inputField" required type="password" placeholder="Your password" v-model="password" />
      </div>
      <div>
        <input
          type="submit"
          class="button block"
          :value="loading ? 'Loading' : 'create account'"
          :disabled="loading"
        />
      </div>
    </div>
  </form>
    <button className="p-4 bg-blue-400 text-white rounded-xl hover:bg-blue-500" @click="login" v-if="!userSession.session">
      Sign In
    </button>
    <button className="p-4 bg-blue-400 text-white rounded-xl hover:bg-blue-500" @click="logOut" v-else>
      Sign Out
    </button>

</template>
  
  <script setup>
  // THIS IS THE LOG IN PAGE
  import { supabase } from '../supabase.js';
  import { userSessionStore } from '../stores/userSession.js';
  import {ref} from 'vue'
  import router from '../router';
  // initialize userSession store
  const userSession = userSessionStore()
  // 
  // login function
  const loading = ref(false);
  const email = ref("");
  const password = ref("");
  const login = async () => {
    try {
      const { error } = await supabase.auth.signInWithPassword({ email: email.value, password: password.value })
      if (error) throw error
    } catch (error) {
      alert(error.message)
    }
  }
  // logout function
  const logOut = async () => {
    try {
      const { error } = await supabase.auth.signOut().then(router.push('/'))
      if(error) throw error
    } catch(error){
      alert(error.message)
    }
  }
  // sign up function
  const signUpNewUser = async () => {
    try {
  const { error } = await supabase.auth.signUp({email: email.value, password: password.value,}) 
  if (error) throw error
}catch(error){
      alert(error.message)
    }}
  </script>
