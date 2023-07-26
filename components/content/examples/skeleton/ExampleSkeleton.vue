<template>
  <div class="flex w-full justify-center">
    <div>
      <UISkeleton class="mb-2 h-[120px] w-[280px] rounded-md" />
      <div class="flex items-center gap-5 px-2">
        <UISkeleton class="h-12 w-12 rounded-full" />
        <div class="grow space-y-1">
          <UISkeleton class="h-5 w-full rounded" />
          <UISkeleton class="h-3 w-full rounded" />
        </div>
      </div>
    </div>
  </div>
</template>
