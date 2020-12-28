import { VueConstructor } from "vue/types/umd";
import {
  Table,
  TableColumn,
  Button,
  Divider,
  Popover,
  Icon,
  Upload,
  Input,
  Message,
} from "element-ui";

export default {
  install(Vue: VueConstructor) {
    Vue.use(Table);
    Vue.use(TableColumn);
    Vue.use(Button);
    Vue.use(Divider);
    Vue.use(Popover);
    Vue.use(Icon);
    Vue.use(Upload);
    Vue.use(Input);
    Vue.prototype.$message = Message;
  },
};
