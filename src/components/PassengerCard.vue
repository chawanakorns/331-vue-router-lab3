<script setup lang="ts">
import Passenger from '@/types/Passenger'

defineProps<{
  passenger: Passenger
}>()
</script>

<template>
  <RouterLink
    class="passenger-link"
    :to="{ name: 'passenger-detail-view', params: { _id: passenger._id } }"
  >
    <div class="passenger-card">
      <p><b>ID:</b> {{ passenger._id }}</p>
      <p><b>Name:</b> {{ passenger.name }}</p>
      <p><b>Trips:</b> {{ passenger.trips }}</p>
    </div>
  </RouterLink>
</template>

<style scoped>
.passenger-card {
  padding: 20px;
  width: 325px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
  margin: 20px;
}

.passenger-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}

.passenger-link {
  text-decoration: none;
  color: #2c3e50;
}
</style>
