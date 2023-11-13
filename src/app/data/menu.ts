import {
  client,
  dashboard,
  enquiries,
  headerAdd,
  headerBell,
  headerCheveronDown,
  headerDivider,
  headerImage,
  headerMessage,
  headerMoon,
  headerSetting,
  officeCheckIn,
  quotation,
  tasks,
  verify,
} from "@/assets/images";

const menuItems = [
  {
    name: "dashboard",
    title: "Dashboard",
    icon: dashboard,
    path: "/dashboard",
  },
  {
    name: "office-check-in",
    title: "Office Check-in",
    icon: officeCheckIn,
    path: "/office-check-in",
  },

  {
    name: "enquiries",
    icon: enquiries,
    path: "/enquiries",
    title: "Enquiries",
  },
  {
    name: "clients",
    title: "Clients",
    icon: client,
    path: "/clients",
  },
  {
    name: "services",
    title: "Services",
    icon: verify,
    path: "/services",
  },
  {
    name: "quotation",
    title: "Quotation",
    icon: quotation,
    path: "/quotation",
  },
  {
    name: "tasks",
    title: "Tasks",
    icon: tasks,
    path: "/tasks",
  },
];
const headerItems = [
  {
    icon: headerAdd,
    name: "add",
  },
  {
    icon: headerBell,
    name: "bell",
  },
  {
    icon: headerMessage,
    name: "message",
  },
  {
    icon: headerSetting,
    name: "setting",
  },
  {
    icon: headerDivider,
    name: "divider",
  },
  {
    icon: headerMoon,
    name: "moon",
  },
  {
    icon: headerImage,
    name: "image",
  },
];

export { menuItems, headerItems };
