<script setup>
import dayjs from 'dayjs'
import { computed } from 'vue'
import { VueUiSparkline } from 'vue-data-ui'

const props = defineProps({
  views: {
    type: Array,
    default: () => [],
  },
})

const config = {
  style: {
    backgroundColor: '#242424',
    fontFamily: 'inherit',
    line: { color: '#5f8bee', strokeWidth: 3 },
    plot: { show: true, radius: 4, stroke: '#FFFFFF', strokeWidth: 1 },
    verticalIndicator: { show: true, strokeWidth: 1.5 },
    dataLabel: {
      position: 'left',
      fontSize: 48,
      bold: true,
      color: '#CCCCCC',
      roundingValue: 1,
      valueType: 'latest',
    },
    title: {
      show: true,
      textAlign: 'left',
      color: '#FAFAFA',
      fontSize: 16,
      bold: true,
      text: 'Visualizaciones',
    },
    area: { show: true, useGradient: true, opacity: 20, color: '#5f8bee' },
  },
}

const dataset = computed(() => {
  return props.views.map((view) => ({
    period: formatDate(view.created_at),
    value: view.value,
  }))
})

const formatDate = (date) => {
  return dayjs(date).format('DD MMM - YYYY (HH:mm)')
}
</script>

<template>
  <VueUiSparkline :dataset="dataset" :config="config" />
</template>
