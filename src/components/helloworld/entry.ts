import { Component, Prop, Vue, Emit, Watch } from 'vue-property-decorator'
@Component({
  // props: {
  //   msg: String
  // }
  watch: {
    num (val: number, oldVal: number) {
      console.log(val)
    }
  }
})
export default class HelloWorld extends Vue {
  @Prop() public msg!: string

  public num: number = 0

  @Emit('tab')
  public choose () {
    // this.$emit('tab','444')
    // this.tab('ddd')
    this.num = 1
    return 'dddd'
  }

  // public created (): void {}
    // computed
  get computedMsg () {
    return 'computed ' + this.msg
  }

  @Watch('msg', { immediate: true, deep: true })
  public onChildChanged (val: string, oldVal: string): void {
    console.log('watch',val)
  }
  // @Emit()
  // public tab (name: string) {
  //   debugger
  //   return name
  // }

}
