<script setup lang="ts">
const isOpen = ref(false)

const links = [{
  label: 'Careers',
  to: './careers'
}, {
  label: 'Products',
  icon: 'i-heroicons-chevron-down-20-solid',
  children: [{
    sub: 'Payment Solution',
    to: '/',
    icon: 'i-heroicons-wallet'
  }, {
    sub: 'Print-On-Demand',
    to: '/',
    icon: 'i-heroicons-newspaper-solid'
  }, {
    sub: 'Advertise Agency',
    to: '/',
    icon: 'i-heroicons-computer-desktop'
  }]
}, {
  label: 'About Us',
  to: '/about-us'
},]
</script>

<template>
  <UButton
          @click="isOpen = true"
          icon="i-heroicons-bars-3-solid"
          size="sm"
          color="primary"
          variant="solid"
          :trailing="false"
          class="lg:hidden absolute right-0 top-0 bg-none text-[#000]"
  />
  <USlideover v-model="isOpen">
    <div class="px-4 py-8 menu-mobile">
      <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="absolute right-3 top-1" @click="isOpen = false" />
      <UVerticalNavigation  :links="links">
        <template #default="{ link }">
          <span class="my-1 font-bold text-[15px] text-[#111] leading-6 group-hover:text-primary relative">{{ link.label }}</span>
          <div v-if="link.children">
            <ul class="hidden sub-menu relative w-[310px] p-[20px] rounded-[16px] bg-[#fff] shadow-[0px_14px_30px_0px_rgba(0,0,0,0.04)]">
              <li v-for="child in link.children" class="p-[12px] text-left font-bold rounded-[10px] hover:bg-[#d4eff2]">
                <a :href="child.to" class="flex items-center text-[#111]"><span class="flex items-center justify-center mr-4 w-[40px] h-[40px] bg-[#F5F5F5] rounded-[14px] hover:bg-[#fff]"><i :class="child.icon" class="text-[#339498] text-[24px]"></i></span> {{ child.sub }}</a>
              </li>
            </ul>
          </div>
        </template>
      </UVerticalNavigation>
    </div>
  </USlideover>
</template>
