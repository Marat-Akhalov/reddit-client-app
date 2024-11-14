<script setup lang="ts">
import BaseModal from '@/ui/BaseModal.vue';

const visible = defineModel<boolean>('visible', { required: true })
</script>

<template>
  <BaseModal v-model:visible="visible">
    <input
      type="text"
      placeholder="me"
    >
  </BaseModal>
</template>

<style scoped lang="scss"></style>
