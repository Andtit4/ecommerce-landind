<template>
    <button
      class="base-button"
      :class="[variant, size, { disabled }]"
      :disabled="disabled"
      v-bind="$attrs"
    >
      <slot />
    </button>
  </template>
  <script setup>
  import { defineProps } from 'vue';
  defineProps({
    variant: {
      type: String,
      default: 'primary',
      validator: (value) => ['primary', 'secondary', 'text'].includes(value)
    },
    size: {
      type: String,
      default: 'medium',
      validator: (value) => ['small', 'medium', 'large'].includes(value)
    },
    disabled: {
      type: Boolean,
      default: false
    }
  })