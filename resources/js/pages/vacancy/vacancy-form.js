import Vue from 'vue'
import store from '../../vue/store-service/index'

Vue.component('vacancy-form', require('../../vue/VacancyForm.vue'));
Vue.component('vacancy-form-xmmp', require('../../vue/VacancyFormXmmp.vue'));

const app = new Vue({
    el: '#vacancy-form',
	store,
	data () {
		return {
			init: false
		}
	},
	mounted () {
        this.init = true;
    }
});


const appXmmp = new Vue({
    el: '#vacancy-form-xmmp',
	store,
	data () {
		return {
			init: false
		}
	},
	mounted () {
        this.init = true;
    }
});
