<script setup>
</script>


<template>
    <div class="flex min-h-screen p-3">
      <div class="col-left">
        <slot />
      </div>
      <div class="col-right">
        <div>
          <img src="http://localhost:3001/_nuxt/img/img-ds.png" alt="">
        </div>
        <div class="m-11 text-center">
          <h2 class="text-2xl mb-5"><b>Make your spending Smarter & Faster.</b></h2>
          <p class="text-lg">Global corporate cards, expense management, reimbursements, travel, and bill pay — all in one.</p>
        </div>
      </div>
    </div>
</template>

<style scoped>
.col-right {
  width: 55%;
  background: #f8f8f8 url('http://localhost:3001/_nuxt/img/bg-dc-login.svg') no-repeat;
  border-radius: 10px;
  padding-left: 7rem;

}
.col-left {
  width: 45%;
  padding:3% 10%;
}

</style>