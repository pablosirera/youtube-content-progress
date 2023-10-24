<script setup>
import { computed } from 'vue'

const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: '',
  },
  id: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: 'text',
  },
})
const emit = defineEmits(['update:modelValue'])

const localValue = computed({
  get() {
    return props.modelValue
  },
  set(newValue) {
    emit('update:modelValue', newValue)
  },
})
</script>

<template>
  <label
    :for="id"
    class="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
  >
    <input
      v-model="localValue"
      :type="type"
      :id="id"
      class="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
      :placeholder="placeholder"
    />

    <span
      class="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-[color:var(--color-background)] p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs dark:bg-[color:var(--color-background)] dark:text-[color:var(--color-text)]"
    >
      {{ placeholder }}
    </span>
  </label>
</template>
