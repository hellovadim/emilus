import {
  DashboardOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
  PictureOutlined,
  ShopOutlined,
  UsergroupAddOutlined,
  MailOutlined,
  SettingOutlined,
  MobileOutlined,
  FileTextOutlined,
} from "@ant-design/icons";
import { APP_PREFIX_PATH } from "configs/AppConfig";

const dashBoardNavTree = [
  {
    key: "main",
    path: `${APP_PREFIX_PATH}/dashboards`,
    title: "sidenav.main",
    breadcrumb: false,
    submenu: [
      {
        key: "main-dashboard",
        path: `${APP_PREFIX_PATH}/dashboard`,
        title: "sidenav.main.dashboard",
        icon: DashboardOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: "main-catalog",
        path: `${APP_PREFIX_PATH}/dashboards/catalog`,
        title: "sidenav.main.catalog",
        icon: ShoppingCartOutlined,
        breadcrumb: false,
        submenu: [
          {
            key: "main-catalog-products",
            path: `${APP_PREFIX_PATH}/catalog`,
            title: "sidenav.main.catalog.products",
            icon: "",
            breadcrumb: false,
            submenu: [],
          },
          {
            key: "main-catalog-categories",
            path: `${APP_PREFIX_PATH}/catalog`,
            title: "sidenav.main.catalog.categories",
            icon: "",
            breadcrumb: false,
            submenu: [],
          },
          {
            key: "main-catalog-collection",
            path: `${APP_PREFIX_PATH}/catalog`,
            title: "sidenav.main.catalog.collection",
            icon: "",
            breadcrumb: false,
            submenu: [],
          },
          {
            key: "main-catalog-combo",
            path: `${APP_PREFIX_PATH}/catalog`,
            title: "sidenav.main.catalog.combo",
            icon: "",
            breadcrumb: false,
            submenu: [],
          },
        ],
      },
      {
        key: "main-orders",
        path: `${APP_PREFIX_PATH}/orders`,
        title: "sidenav.main.orders",
        icon: ShoppingOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: "main-clients",
        path: `${APP_PREFIX_PATH}/clients`,
        title: "sidenav.main.clients",
        icon: UserOutlined,
        breadcrumb: false,
        submenu: [
          {
            key: "main-clients-list",
            path: `${APP_PREFIX_PATH}/clients/list`,
            title: "sidenav.main.clients.list",
            icon: "",
            breadcrumb: false,
            submenu: [],
          },
          {
            key: "main-clients-group",
            path: `${APP_PREFIX_PATH}/apps/project/list`,
            title: "sidenav.main.clients.group",
            icon: "",
            breadcrumb: false,
            submenu: [],
          },
        ],
      },
      {
        key: "main-banners",
        path: `${APP_PREFIX_PATH}/banners`,
        title: "sidenav.main.banners",
        icon: PictureOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: "main-dot",
        path: `${APP_PREFIX_PATH}/dot`,
        title: "sidenav.main.dot",
        icon: ShopOutlined,
        breadcrumb: false,
        submenu: [
          {
            key: "main-dot-adress",
            path: `${APP_PREFIX_PATH}/dots/adress`,
            title: "sidenav.main.dot.adress",
            icon: "",
            breadcrumb: false,
            submenu: [],
          },
          {
            key: "main-dot-geozone",
            path: `${APP_PREFIX_PATH}/dots/geozone`,
            title: "sidenav.main.dot.geozone",
            icon: "",
            breadcrumb: false,
            submenu: [],
          },
        ],
      },
      {
        key: "main-employees",
        path: `${APP_PREFIX_PATH}/employees`,
        title: "sidenav.main.employees",
        icon: UsergroupAddOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: "main-mail",
        path: `${APP_PREFIX_PATH}/mail`,
        title: "sidenav.main.mail",
        icon: MailOutlined,
        breadcrumb: false,
        submenu: [],
      },
    ],
  },
];

const systemNavTree = [
  {
    key: "system",
    path: `${APP_PREFIX_PATH}/system`,
    title: "sidenav.system",
    breadcrumb: false,
    submenu: [
      {
        key: "system-settings",
        path: `${APP_PREFIX_PATH}/system/settings`,
        title: "sidenav.system.settings",
        icon: SettingOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: "system-mobile",
        path: `${APP_PREFIX_PATH}/system/mobile`,
        title: "sidenav.system.mobile",
        icon: MobileOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: "system-logs",
        path: `${APP_PREFIX_PATH}/system/logs`,
        title: "sidenav.system.logs",
        icon: FileTextOutlined,
        breadcrumb: false,
        submenu: [],
      },
    ],
  },
];

const navigationConfig = [...dashBoardNavTree, ...systemNavTree];

export default navigationConfig;
