<script setup>
import ChartHours from '@/components/ChartHours.vue'
import ChartViews from '@/components/ChartViews.vue'
import ChartGlobalYoutubeInfo from '@/components/ChartGlobalYoutubeInfo.vue'
import BaseInput from '@/components/BaseInput.vue'
import BaseButton from '@/components/BaseButton.vue'
import { useHours } from '@/composables/useHours'
import { useViews } from '@/composables/useViews'

import { ref } from 'vue'

const { listHours, createHourRegistry } = useHours()
const { listViews, createViewRegistry } = useViews()

const hoursInput = ref('')
const viewsInput = ref('')
const hours = ref([])
const views = ref([])

const onSubmit = async () => {
  try {
    await createHourRegistry(hoursInput.value)
    await createViewRegistry(viewsInput.value)

    hoursInput.value = ''
    viewsInput.value = ''

    loadData()
  } catch (error) {
    console.error(error)
  }
}

const loadData = async () => {
  hours.value = await listHours()
  views.value = await listViews()
}

loadData()
</script>

<template>
  <main class="flex flex-col gap-6">
    <form class="w-full flex gap-8" @submit.prevent="onSubmit()">
      <BaseInput v-model="hoursInput" id="hours" placeholder="Horas actuales" type="number" />
      <BaseInput
        v-model="viewsInput"
        id="views"
        placeholder="Visualizaciones actuales"
        type="number"
      />

      <BaseButton>Añadir</BaseButton>
    </form>
    <section class="grid gap-6 grid-cols-2">
      <ChartHours v-if="hours.length" :hours="hours" />
      <ChartViews v-if="views.length" :views="views" />
    </section>
    <section>
      <ChartGlobalYoutubeInfo />
    </section>
  </main>
</template>
