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
                const correct = result.correct
                function check(){
                  if (input == result.) {
                    
                  } else {
                    
                  }
                }
                const card = document.createElement('div');
                card.classlist = 'card'
                const desc = `<div class=card>
                <img class=cardimg alt ="" src="${result.imageurls}"></div>
                <form action="" id="form">
                <label for="first/name">Answer</label>
                <input type="text" name="" class="" />
                <input type="submit" value = "Click to Submit" id="submit"/>`
                container.innerHTML += desc;
            })
        }
        create(x)
        console.log(x)
}
onMounted(()=>(getimages()))

</script>

<style scoped>
.cardimg {
  width: 60px;
  height: 60px;
}
</style>  