<template>
  <div class="core-input">
    <label>{{ props.label }}</label>
    <input :placeholder="props.placeholder" />
  </div>
</template>

<script setup lang="ts">
interface Props {
  label: string
  placeholder: string
}

const props = defineProps<Props>()
</script>
