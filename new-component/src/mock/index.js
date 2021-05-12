import Mock from 'mockjs' //引入mock.js模块
import {
  stringify
} from 'querystring';

const Random = Mock.Random;

let data = {
  'age': () => Random.integer(3, 80), //返回一个随机的整数（大于等于 0 的整数）。
  //返回一个随机字符串。pool:'lower'-小写 或 'upper'-大写、'number'-数字、'symbol'-特殊字符 min：最小长度 max：最大长度
  "password": () => Random.string('lower', 3, 15),
  'isVip': () => Random.boolean, // 可以生成基本数据类型
  'username': () => Random.cname(), // 可以生成随机中文名
  'workTime': () => Random.float(0, 10), // 返回一个随机的自然数
  'birthday': () => Random.date(), // 生成一个随机日期,可加参数定义日期格式
  'avatar': () => Random.image(), //生成一个随机的图片地址。
  'description': () => Random.cparagraph(2), //随机生成一段文本
  'host': () => Random.url('https', 'zpwan.com'), //随机生成一个 URL。protocol:指定 URL 协议, host:指定 URL 域名和端口号
  'address': () => Random.county(true), // 随机生成县，true代表生成所属省市 类似的还有Random.province()   Random.city( prefix? )
}

Mock.mock('/mock/test', 'get', {
  code: 200,
  "data|20": [data],
  message: "SUCCESS"
});