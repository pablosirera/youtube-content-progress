<script setup>
import { VueUiXy } from 'vue-data-ui'

const dataset = [
  {
    name: 'hours',
    series: [824, 834, 862, 896, 957, 1084, 1152, 1226, 1320, 1450],
    type: 'line',
    color: 'rgb(66,211,146)',
    useProgression: true,
    dataLabels: false,
  },
  {
    name: 'videos',
    series: [4, 4, 1, 0, 0, 0, 0, 0, 0, 1],
    type: 'bar',
    color: 'rgb(95,139,238)',
  },
  {
    name: 'views',
    series: [1116, 3380, 3436, 5420, 5334, 5532, 4006, 3277, 3253, 6381],
    type: 'line',
    color: '#404040',
    dashed: true,
    useTag: 'start',
    dataLabels: false,
  },
  {
    name: 'subs',
    series: [1844, 1873, 1890, 1918, 1943, 1994, 2023, 2047, 2090, 2132],
    type: 'line',
    color: 'rgb(255,100,0)',
    dataLabels: false,
  },
]
const config = {
  chart: {
    backgroundColor: '#1A1A1A',
    color: '#c8c8c8',
    height: 300,
    width: 500,
    highlighter: { color: '#e1e5e8', opacity: 10 },
    zoom: { show: true, color: '#42d392' },
    padding: { top: 36, right: 12, bottom: 36, left: 48 },
    grid: {
      stroke: '#e1e5e8',
      showVerticalLines: false,
      labels: {
        show: true,
        color: '#c8c8c8',
        fontSize: 12,
        xAxisLabels: {
          color: '#c8c8c8',
          show: true,
          showOnlyFirstAndLast: false,
          values: [
            'ENE',
            'FEB',
            'MAR',
            'APR',
            'MAY',
            'JUN',
            'JUL',
            'AGO',
            'SEPT',
            'OCT',
            'NOV',
            'DIC',
          ],
          fontSize: 6,
        },
      },
    },
    legend: { show: true, color: '#c8c8c8', useDiv: true, fontSize: 16 },
    title: {
      show: true,
      text: 'Registro YT 2023',
      color: '#c8c8c8',
      fontSize: 20,
      bold: true,
    },
    tooltip: {
      color: '#FFFFFF',
      backgroundColor: '#1A1A1A',
      show: true,
      showValue: true,
      showPercentage: false,
      roundingValue: 0,
      roundingPercentage: 0,
    },
    userOptions: {
      show: true,
      title: 'options',
      labels: {
        dataLabels: 'Show datalabels',
        titleInside: 'Title inside',
        legendInside: 'Legend inside',
        showTable: 'Show table',
      },
    },
  },
  bar: { useGradient: true, labels: { show: true, offsetY: -6, rounding: 0, color: '#c8c8c8' } },
  line: {
    radius: 3,
    useGradient: true,
    strokeWidth: 2,
    labels: { show: true, offsetY: -6, rounding: 0, color: '#c8c8c8' },
  },
  plot: {
    radius: 3,
    useGradient: true,
    labels: { show: false, offsetY: -6, rounding: 0, color: '#c8c8c8' },
  },
  table: {
    rounding: 0,
    th: { backgroundColor: '#1A1A1A', color: '#c8c8c8', outline: '1px solid #e1e5e8' },
    td: { backgroundColor: '#1A1A1A', color: '#c8c8c8', outline: '1px solid #e1e5e8' },
  },
}
</script>

<template>
  <VueUiXy :dataset="dataset" :config="config" />
</template>
