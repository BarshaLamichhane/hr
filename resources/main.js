import Vue from 'vue'
import App from './App'
import router from './routers'
import './main.scss'
import 'bootstrap'
//import 'swal'
//var icons = require('glyphicons')
import 'glyphicons'

window.jQuery = window.$ = require('jquery')
window.Popper = require('popper.js')
window.swal = require('sweetalert')
window.axios = require('axios')

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	components: { App },
	template: '<App/>'
})