import type { App } from 'vue';
import { Button } from './Button';
import { 
  Layout ,
  Table,
  Menu,
  Select,
  Alert,
  Checkbox,
  DatePicker,
  Radio,
  Switch,
  Card,
  List,
  Tabs,
  Descriptions,
  Tree,
  Divider,
  Modal,
  Drawer,
  Dropdown,
  Tag,
  Tooltip,
  Badge,
  Popover,
  Upload,
  Transfer,
  Steps,
  PageHeader,
  Result,
  Empty,
  Avatar,
  Breadcrumb,
  Form,
  Input,
  Row,
  Col,
  Spin,

} from 'ant-design-vue';

import VXETable from 'vxe-table';

export function registerGlobComp(app: App) {
  app.use(Input)
  .use(Button)
  .use(Layout)
  .use(Table)
  .use(Menu)
  .use(Select)
  .use(Alert)
  .use(Breadcrumb)
  .use(Checkbox)
  .use(DatePicker)
  .use(Radio)
  .use(Switch)
  .use(Card)
  .use(List)
  .use(Descriptions)
  .use(Tree)
  .use(Table)
  .use(Divider)
  .use(Modal)
  .use(Drawer)
  .use(Dropdown)
  .use(Tag)
  .use(Tooltip)
  .use(Badge)
  .use(Popover)
  .use(Upload)
  .use(Transfer)
  .use(Steps)
  .use(PageHeader)
  .use(Result)
  .use(Empty)
  .use(Avatar)
  .use(Menu)
  .use(Tabs)
  .use(Form)
  .use(Input)
  .use(Row)
  .use(Col)
  .use(Spin)
  .use(VXETable);
}
