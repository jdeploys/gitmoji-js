import {
  Module,
  VuexModule,
  Mutation,
  Action,
  getModule,
} from 'vuex-module-decorators';
import { storeInstance } from 'src/store';
import { Category } from 'components/types';

@Module({ namespaced: true, name: 'ui', store: storeInstance, dynamic: true })
export default class UIModule extends VuexModule {
  filter: Category | null = null;

  @Mutation
  private setFilter(data: Category) {
    this.filter = data;
  }

  @Action({ commit: 'setFilter' })
  updateFilter(data: Category) {
    return data;
  }
}

export const uiStore = getModule(UIModule);
