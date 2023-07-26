# vue-use-context

![npm](https://img.shields.io/npm/v/vue-use-context) ![npm](https://img.shields.io/npm/dw/vue-use-context)

Get Vue globalProperties easily in setup.

## Install

```shell
$ npm install vue-use-context
```

## Use

main.ts

```ts
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
app.config.globalProperties.$name = 'name'

app.mount('#app')
```

App.vue

```vue
<script setup lang="ts">
   import { useContext } from 'vue-use-context'
   const { $name } = useContext()
</script>

<template>
  <div>{{ $name }}</div>
</template>
```
