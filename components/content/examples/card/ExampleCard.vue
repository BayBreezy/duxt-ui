<template>
  <UICard
    class="mx-auto w-[350px] md:w-[400px]"
    title="Notifications"
    subtitle="You have a few unread messages"
  >
    <div class="my-6 flex gap-5 rounded-md border p-3">
      <Icon name="heroicons:bell" size="26" />
      <div class="space-y-2">
        <p class="font-semibold leading-none">Push Notifications</p>
        <p class="text-sm text-muted-foreground">Send notifications to device</p>
      </div>
      <div class="ml-auto">
        <UIToggle v-model="push" name="push" />
      </div>
    </div>

    <div class="mb-5 flex gap-4" v-for="n in notifications">
      <span class="mt-2 h-2 w-2 rounded-full bg-primary" />
      <div>
        <p class="mb-1 text-sm font-semibold">{{ n.title }}</p>
        <p class="text-sm text-muted-foreground">{{ n.description }}</p>
      </div>
    </div>
    <UIButton class="w-full">Mark all as read</UIButton>
  </UICard>
</template>

<script setup lang="ts">
  const push = ref(false);

  const notifications = [
    {
      title: "Your call has been confirmed.",
      description: "1 hour ago",
    },
    {
      title: "You have a new message!",
      description: "1 hour ago",
    },
    {
      title: "Your subscription is expiring soon!",
      description: "2 hours ago",
    },
  ];
</script>
