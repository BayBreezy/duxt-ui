<template>
  <div class="flex justify-center">
    <UITabs class="w-[400px]">
      <template #tab>
        <div class="flex items-center rounded-md bg-muted p-1">
          <UITab class="w-full" type="fill">Account</UITab>
          <UITab class="w-full" type="fill">Password</UITab>
        </div>
      </template>
      <template #content>
        <UITabContent class="mt-3">
          <form>
            <UICard
              title="Account"
              subtitle="Make changes to your account here. Click save when you're done."
            >
              <div class="space-y-2 pt-6">
                <UIInput required label="Name" />
                <UIInput required label="Username" />
              </div>
              <template #footer>
                <div class="mt-5">
                  <UIButton type="submit">Save changes</UIButton>
                </div>
              </template>
            </UICard>
          </form>
        </UITabContent>
        <UITabContent class="mt-3">
          <form>
            <UICard
              title="Password"
              subtitle="Change your password here. After saving, you'll be logged out."
            >
              <div class="space-y-2 pt-6">
                <UIInput type="password" label="Current password" />
                <UIInput type="password" label="New password" />
              </div>
              <template #footer>
                <div class="mt-5">
                  <UIButton type="submit">Save password</UIButton>
                </div>
              </template>
            </UICard>
          </form>
        </UITabContent>
      </template>
    </UITabs>
  </div>
</template>
