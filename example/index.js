import Vue from 'vue';
import Vuex from 'vuex';
import { createVuexLoader } from 'vuex-loading';

const VuexLoading = createVuexLoader({
  moduleName: 'loading',
  componentName: 'my-loading',
  className: 'my-loading'
});

Vue.use(Vuex);
Vue.use(VuexLoading);

const store = new Vuex.Store({
  plugins: [VuexLoading.Store]
});

new Vue({
  el: '#app',
  store,
  data() {
    return {
      loaders: ['a', 'c', 'b', 'a', 'b', 'a', 'c', 'a', 'c', 'a', 'b']
    };
  },
  methods: {
    writeCode() {
      this.$startLoading('writing code');
    },
    endLoading() {
      this.$endLoading('writing code');
    },
    toggleLoader(loader) {
      if (this.$isLoading(loader)) {
        this.$endLoading(loader);
      } else {
        this.$startLoading(loader);
      }
    }
  }
});
