import { VueConstructor } from "vue/types/umd";
import {
  Table,
  TableColumn,
  Button,
  Divider,
  Popover,
  Icon,
  Upload,
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
  },
};
