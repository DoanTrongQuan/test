<script setup>
import { useSignup } from '~/composables/authencation/useSignUp';

const pageData = useSignup();

const {
  userRegister,
  validation
} = pageData

function onSubmit (data) {
  console.log('Submitted', data)
}
</script>

<template>
  <div>
    <div class="text-center">
      <div class="mb-5 flex justify-center">
        <img src="http://localhost:3001/_nuxt/img/logo-b.png" alt="">
      </div>
      <h1 class="text-5xl">Let's get started</h1>
    </div>

    <UCard class="w-full mt-7">
      <UForm :schema = "validation" :state="userRegister" class="space-y-4" @submit="onSubmit">
      <UFormGroup size="xl" class="" label="Name" name="fullName">
        <UInput v-model="userRegister.fullName" />
      </UFormGroup>

      <UFormGroup size="xl" class="" label="Email" name="email">
        <UInput v-model="userRegister.email"  />
      </UFormGroup>

      <UFormGroup size="xl" class="" label="Password" name="password">
        <UInput v-model="userRegister.password" type="password" />
      </UFormGroup>

      <UFormGroup size="xl" label="ConfirmPassword" name="confirmPassword">
        <UInput v-model="userRegister.confirmPassword" />
      </UFormGroup>

      <UButton size ="xl" type="submit" class = "w-full justify-center mt-4">
        Submit
      </UButton>
      <div class="p-5 text-center">
        Have an account?
        <span class = " cursor-pointer ">Sign in</span>
      </div>

      </UForm>
    </UCard>
  </div>

</template>

