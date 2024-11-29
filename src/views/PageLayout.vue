<script setup lang="ts">

</script>

<template>
  <main class="main">
    <RouterView v-slot="{ Component }">
      <template v-if="Component">
        <Suspense timeout="0">
          <component :is="Component"></component>
          <template #fallback>
            <div>Loading...</div>
          </template>
        </Suspense>
      </template>
    </RouterView>
  </main>
</template>

<style scoped lang="scss">
.main {
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 8px;
  width: 100%;
}
</style>
