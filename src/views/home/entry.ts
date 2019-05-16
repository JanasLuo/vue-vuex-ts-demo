import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from '@/components/helloworld/index.vue' // @ is an alias to /src
import { mapGetters } from 'vuex'
import {
  State,
  Getter,
  Action,
  Mutation,
  namespace
} from 'vuex-class'

const someModule = namespace('home')

@Component({
  components: {
    HelloWorld
  },
  computed: {
    ...mapGetters({
      id: 'home/getId'
    })
  }
})
export default class Home extends Vue {
  @someModule.State public id: any
  @someModule.Getter public getId: any
  @someModule.Mutation public addId: any
  public created (): void {
    const self = this
    // this.$store.dispatch('home/setId').then((res: any) => {
    //   console.log(res)
    // }, (err: any) => {
    //   console.log(err)
    // })

    debugger
    console.log('$route',this.$route)
    this.addId()
    console.log('$store',self.$store.getters['home/getId'])
    console.log('@State',this.id)
    console.log('@Getter',this.getId)
  }
  public tab (name: string): void {
    debugger
    console.log(name)
    this.$router.push('/about')
  }
}
