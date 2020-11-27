import childComp from './index.vue'

const childComponent = {
    install: function (Vue) {
        Vue.component('custPopover', childComp)
    }
}

export default childComponent