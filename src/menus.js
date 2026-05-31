const menus = [];
const addMenu = (menu) => {
  menus.push(menu);
};

const addSubMenu = (label, subMenu, menu = menus) => {
  for (const item of menu) {
    if (item.label === label) {
      item.subMenus.push(subMenu);
      return;
    }
    if (item.subMenus) {
      addSubMenu(label, subMenu, item.subMenus);
    }
  }
};

export const settingsMenu = [
  {
    id: 'pengaturan',
    route: '#',
    label: 'Pengaturan',
    permission: 'administrator',
    subMenus: [
      {
        id: 'pengaturan-tampilan',
        route: '/settings/appearance',
        label: 'Pengaturan Tampilan',
        permission: 'administrator',
      },
      {
        id: 'pengaturan-role',
        route: '/settings/role',
        label: 'Pengaturan Role',
        permission: 'administrator',
      },
      {
        id: 'pengaturan-user',
        route: '/settings/user',
        label: 'Pengaturan User',
        permission: 'administrator',
      },
    ]
  },
]

export default menus;

addMenu({
	id: '_xBloUEihEfGehLgYsDeT5g',
	route: '/attendee',
    label: 'Attendee',
    permission: '',
	subMenus: [],
})

addMenu({
	id: '_cOKAMEiiEfGehLgYsDeT5g',
	route: '/checkin',
    label: 'CheckIn',
    permission: '',
	subMenus: [],
})

addMenu({
	id: '_y_rQMEiiEfGehLgYsDeT5g',
	route: '/eventcreation',
    label: 'EventCreation',
    permission: '',
	subMenus: [],
})

addMenu({
	id: '_MdegQEijEfGehLgYsDeT5g',
	route: '/notification',
    label: 'Notification',
    permission: '',
	subMenus: [],
})

addMenu({
	id: '_aW4gEEijEfGehLgYsDeT5g',
	route: '/report',
    label: 'Report',
    permission: '',
	subMenus: [],
})

addMenu({
	id: '_mj2zQEijEfGehLgYsDeT5g',
	route: '/review',
    label: 'Review',
    permission: '',
	subMenus: [],
})

addMenu({
	id: '_eXYCcFZ3EfG2IPAwKxqHFA',
	route: '',
    label: 'PriorityReport',
    permission: '',
	subMenus: [],
})
