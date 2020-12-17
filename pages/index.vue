<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <Landing />
      <Service />
      <Stack />
      <Story />
    </v-col>
  </v-row>
</template>

<script>
import Landing from '~/components/pages/index/Landing'
import Service from '~/components/pages/index/Service'
import Stack from '~/components/pages/index/Stack'
import Story from '~/components/pages/index/Story'

export default {
  components: { Landing, Service, Stack, Story },
}
</script>
