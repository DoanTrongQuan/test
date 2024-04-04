<script setup>
import { useSignup } from '~/composables/authencation/useSignUp';

const pageData = useSignup();

const {
  state,
  schema
} = pageData

function onSubmit (data) {
  console.log('Submitted', data)
}
</script>

<!-- eslint-disable vue/multiline-html-element-content-newline -->
<!-- eslint-disable vue/singleline-html-element-content-newline -->
<template>
  <UCard class="max-w-sm w-full">
    <UForm  :state="state" class="space-y-4" @submit="onSubmit">
    <UFormGroup label="Name" name="fullName">
      <UInput v-model="state.fullName" />
    </UFormGroup>

    <UFormGroup label="Email" name="email">
      <UInput v-model="state.email"  />
    </UFormGroup>

    <UFormGroup label="Password" name="password">
      <UInput v-model="state.password" type="password" />
    </UFormGroup>

    <UFormGroup label="ConfirmPassword" name="confirmPassword">
      <UInput v-model="state.confirmPassword" />
    </UFormGroup>

    <UButton type="submit">
      Submit
    </UButton>
  </UForm>
  </UCard>
</template>

