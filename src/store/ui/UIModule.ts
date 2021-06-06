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
  // 카테고리 필터 (전체 목록에 영향)
  filter: Category | null = null;
  // 전체 펴기 (펼치기 기본값)
  expanded = true;

  @Mutation
  private setFilter(data: Category) {
    this.filter = data;
  }

  @Mutation
  private setExpanded(data: boolean) {
    this.expanded = data;
  }

  @Action({ commit: 'setFilter' })
  updateFilter(data: Category) {
    return data;
  }

  @Action({ commit: 'setExpanded' })
  updateExpanded(data: boolean) {
    return data;
  }
}

export const uiStore = getModule(UIModule);
