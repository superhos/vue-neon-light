import VueNeonLight from './vue-neon-light.vue'
VueNeonLight.install = (Vue,options) => {
    Vue.component(VueNeonLight.name, VueNeonLight)
}
// global 情况下 自动安装
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(VueNeonLight)
}
// 导出模块
export default VueNeonLight