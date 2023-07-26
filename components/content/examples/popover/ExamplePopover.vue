<template>
  <div class="flex items-center justify-center">
    <UIPopover>
      <UIButton variant="outline">View Content</UIButton>
      <template #content>
        <UICard class="w-80">
          <div class="space-y-2">
            <h4 class="font-medium leading-none">Dimensions</h4>
            <p class="text-sm text-muted-foreground">Set the dimensions for the layer.</p>
          </div>
          <div class="mt-4 grid gap-3">
            <div class="grid grid-cols-3 items-center gap-4">
              <UILabel for="width">Width</UILabel>
              <div class="col-span-2">
                <UIInput
                  v-model="dimensions.width"
                  autofocus
                  id="width"
                  placeholder="Width"
                  class="h-9"
                />
              </div>
            </div>
            <div class="grid grid-cols-3 items-center gap-4">
              <UILabel for="max-width">Max. width</UILabel>
              <div class="col-span-2">
                <UIInput
                  v-model="dimensions.maxWidth"
                  id="max-width"
                  placeholder="Max. width"
                  class="h-9"
                />
              </div>
            </div>
            <div class="grid grid-cols-3 items-center gap-4">
              <UILabel for="height">Height</UILabel>
              <div class="col-span-2">
                <UIInput v-model="dimensions.height" id="height" placeholder="Height" class="h-9" />
              </div>
            </div>
            <div class="grid grid-cols-3 items-center gap-4">
              <UILabel for="max-height">Max. height</UILabel>
              <div class="col-span-2">
                <UIInput
                  v-model="dimensions.maxHeight"
                  id="max-height"
                  placeholder="Max. height"
                  class="h-9"
                />
              </div>
            </div>
          </div>
        </UICard>
      </template>
    </UIPopover>
  </div>
</template>

<script setup lang="ts">
  const dimensions = ref({
    width: "100%",
    maxWidth: "450px",
    height: "100%",
    maxHeight: "250px",
  });
</script>
