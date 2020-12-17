import Vue from 'vue'
import VueFbCustomerChat from 'vue-fb-customer-chat'

export default (context, inject) => {
  console.log(context)
  const i18n = context.store.$i18n
  const iso = i18n.locales
    .find((x) => x.code === i18n.locale)
    ?.iso?.replace('-', '_')
  const options = {
    page_id: context.$config.facebookPageID,
    theme_color: '#E14341', // theme color in HEX
    locale: iso, // default 'en_US'
  }
  Vue.use(VueFbCustomerChat, options)
}
