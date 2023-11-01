<template>
  <div class="flex justify-center items-center min-h-screen bg-gray-100">
    <div class="w-full max-w-screen-xl p-4">
      <!-- Page Title -->
      <h1 class="text-3xl font-semibold text-center mb-8">Pricing Plans</h1>

      <!-- Pricing Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <!-- Basic Plan -->
        <a-card :bordered="false" class="shadow-md">
          <template #title>
            <h2 class="text-2xl font-semibold">Basic</h2>
          </template>
          <p class="text-3xl font-semibold text-primary">$10/month</p>
          <a-divider></a-divider>
          <ul class="text-gray-600">
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
          </ul>
          <a-button type="primary" class="mt-4">Select Plan</a-button>
        </a-card>

        <!-- Pro Plan -->
        <a-card :bordered="false" class="shadow-md">
          <template #title>
            <h2 class="text-2xl font-semibold">Pro</h2>
          </template>
          <p class="text-3xl font-semibold text-primary">$20/month</p>
          <a-divider></a-divider>
          <ul class="text-gray-600">
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
            <li>Feature 4</li>
          </ul>
          <a-button type="primary" class="mt-4">Select Plan</a-button>
        </a-card>

        <!-- Premium Plan -->
        <a-card :bordered="false" class="shadow-md">
          <template #title>
            <h2 class="text-2xl font-semibold">Premium</h2>
          </template>
          <p class="text-3xl font-semibold text-primary">$30/month</p>
          <a-divider></a-divider>
          <ul class="text-gray-600">
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
            <li>Feature 4</li>
            <li>Feature 5</li>
          </ul>
          <a-button type="primary" class="mt-4">Select Plan</a-button>
        </a-card>
      </div>
    </div>
  </div>
</template>
