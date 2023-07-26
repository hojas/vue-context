<script setup lang="ts">
import { useContext } from 'use-context'

const { $name } = useContext()
</script>

<template>
  <div>Hello, {{ $name }}</div>
</template>
