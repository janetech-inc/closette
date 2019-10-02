const uuid = require('uuid/v4');

export const UsersData = [
  {
    id: uuid(),
    username: "cxn",
    password: "cxnteam",
    role: "admin"
  },
  {
    id: uuid(),
    username: "cxnguest",
    password: "brand-demo",
    role: "brand"
  },
  {
    id: uuid(),
    username: "cxnguest",
    password: "showroom-demo",
    role: "showroom"
  },
  {
    id: uuid(),
    username: "cxnguest",
    password: "investor-demo",
    role: "investor"
  }
];