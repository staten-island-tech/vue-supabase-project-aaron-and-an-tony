<script setup>
  import { supabase } from '../components/TheWelcome.vue'
  const todos = ref([])

  async function getTodos() {
    const { data: todos } = await supabase.from('todos').select()
    countries.value = todos
  }

  onMounted(() => {
    getTodos()
  })

  const { data, error } = await supabase.auth.signUp({
  email: 'example@email.com',
  password: 'example-password',
  
})
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);
</script>

<template>
  <ul>
    <li v-for="todo in todos" :key="todo.id">{{ todo.name }}</li>
  </ul>
</template>