<template>
  <div class="flex items-center justify-center">
    <UICalendar :attributes="attrs" />
  </div>
</template>

<script setup lang="ts">
  const attrs = ref([
    {
      highlight: "indigo",
      popover: {
        label: "Basketball Practice",
      },
      // Todays date start and end 5 days from now
      dates: { start: useDayjs()().toString(), end: useDayjs()().add(5, "day").toString() },
    },
    {
      dot: "blue",
      popover: {
        label: "Dentist Appointment",
      },
      dates: useDayjs()().subtract(7, "day").toString(),
    },
  ]);
</script>
