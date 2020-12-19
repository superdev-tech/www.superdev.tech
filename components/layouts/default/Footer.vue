<template>
  <div class="d-flex justify-start">
    <v-card flat tile class="pa-8" color="#E14341" width="85%">
      <v-card-text>
        <div class="d-flex justify-start">
          <img src="~/assets/logo/logo_white.svg" alt="" />
          <h1 class="ml-4 white--text mt-2">SUPERDEV CO., LTD.</h1>
        </div>
      </v-card-text>
      <v-card-text v-for="n in 3" :key="n">
        <h1>HIHIHI</h1>
      </v-card-text>
      <v-card-text class="d-flex justify-end">
        Copyright © {{ new Date().getFullYear() }} SUPERDEV CO., LTD.
      </v-card-text>
    </v-card>
    <div style="width: 15%">
      <div style="width: 100%; height: 50%"></div>
      <div style="background: #ffffff; width: 100%; height: 50%"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      info: [],
    }
  },
}
</script>
