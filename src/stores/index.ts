import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
Vue.use(Vuex)
const files: any = require.context('./modules/', false, /\.ts$/)
const modules: any = {}

files.keys().forEach((item: string) => {
  const tmpKey: string = item.replace(/\.\//g, '').replace(/\.ts/g, '')
  modules[tmpKey] = files(item).default
})

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules,
  // strict: debug
  plugins: debug ? [createLogger()] : []
})
