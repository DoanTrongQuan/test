<script setup lang="ts">
import Signup from './signup.vue';


const layout  = "auth"

</script>

<template>
    <NuxtLayout :name = "layout">
      <Signup/>
    </NuxtLayout>
    
</template>