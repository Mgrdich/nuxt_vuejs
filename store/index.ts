import {
  Module,
  VuexModule,
  VuexMutation,
  VuexAction,
} from 'nuxt-property-decorator'


@Module({
  name: 'main',
  namespaced: true,
  stateFactory: true,
})
export default class First extends VuexModule {
  text = 'before update'

  @VuexMutation
  setText(val:string) {
    this.text = val
  }

  @VuexAction({ rawError: true })
  setTextSecond(val:string) {
    
  }
}
