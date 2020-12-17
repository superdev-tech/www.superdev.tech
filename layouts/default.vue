<template>
  <v-app>
    <Topbar />
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Topbar from '~/components/pages/index/Topbar'
import Footer from '~/components/pages/index/Footer'

export default {
  components: {
    Topbar,
    Footer,
  },
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
    }
  },
  head() {
    const i18nSeo = this.$nuxtI18nSeo()
    console.log({ i18nSeo })
    return i18nSeo.htmlAttrs.lang === 'th-TH'
      ? {
          title: `ซูเปอร์เดฟ — รับพัฒนาซอฟต์แวร์ตามความต้องการของลูกค้าทั้งเว็บไซต์และแอปพลิเคชันแบบครบวงจร`,
        }
      : null
  },
}
</script>
