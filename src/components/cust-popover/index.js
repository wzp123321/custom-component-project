import childComp from './index.vue'

// plugin
const childComponent = {
    install: function (Vue) {
        Vue.component('custPopover', childComp)
    }
}

export default childComponent