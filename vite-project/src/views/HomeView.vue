<script setup>
import { supabase } from '../supabase.js'
import TheWelcome from '../components/TheWelcome.vue'
async function signUpNewUser() {
  const { data, error } = await supabase.auth.signUp({
    email: 'example@email.com',
    password: 'example-password',
    options: {
      emailRedirectTo: 'https://www.youtube.com',
    },
  })
}


</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template>
