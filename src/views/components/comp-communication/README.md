# 父子组件间通信
1.props $emit
父组件传参给子组件
$emit调用父组件绑定到子组件的方法 子组件调用与父组件通信

拓展：
使用vue中事件修饰符sync emit:update

2.eventbus  emit/on

3.vuex

# 兄弟组件间通信
1.eventbus emit/on


2.vuex


# 爷孙甚至更新的层级传参
$attrs $listeners
父亲组件会通过$attrs获取到不在父亲props里面的所有属性，
      父亲组件通过在孙子组件上绑定$attrs 和 $listeners 使孙组件获取爷爷传递的值并且可以调用在爷爷那里定义的方法 

peovide inject
祖先组件中通过provider来提供变量，然后在子孙组件中通过inject来注入变量。