<template>
<div class="images">
  <div id="container"></div>
</div> 
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { supabase } from '../supabase';
let pics = ref('getimages');
async function getimages(){
  const { data, error } = await supabase.from('pictures').select('*')
  if (error) {
    console.error('Error fetching data:', error);
    return;
  }
  pics = data
  console.log(data)

  let x = Array.from(pics);
        function create(blah) {
            blah.map((result) => {
                const correct = result.answer
                function check(){
                  if (input = correct) {
                    then //add picture to profile
                  } else {
                    return //WRONG
                  }
                }
                const card = document.createElement('div');
                card.classlist = 'card'
                const desc = `<div class=card>
                <img class="card" alt ="Stereogram" src="${result.imageurls}"></div>`
                container.innerHTML += desc;
            })
        }
        create(x)
        console.log(x)
}
onMounted(()=>(getimages()))

</script>

<style scoped>
.card {
  width: 400px;
  height: 60px;
  border: 2px;
}
</style>  