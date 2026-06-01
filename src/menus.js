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
	id: '_WQVxRF3HEfGIzuKUdlAhJw',
	route: '/checkin',
    label: 'CheckIn',
    permission: '',
	subMenus: [],
})

addMenu({
	id: '_WQWYUF3HEfGIzuKUdlAhJw',
	route: '/eventcreation',
    label: 'EventCreation',
    permission: '',
	subMenus: [],
})

addMenu({
	id: '_WQWYVl3HEfGIzuKUdlAhJw',
	route: '/notification',
    label: 'Notification',
    permission: '',
	subMenus: [],
})

addMenu({
	id: '_WQWYWV3HEfGIzuKUdlAhJw',
	route: '/report',
    label: 'Report',
    permission: '',
	subMenus: [],
})

addMenu({
	id: '_WQWYXF3HEfGIzuKUdlAhJw',
	route: '/review',
    label: 'Review',
    permission: '',
	subMenus: [],
})

addMenu({
	id: '_WQWYX13HEfGIzuKUdlAhJw',
	route: '/classattendeemanagement',
    label: 'ClassAttendeeManagement',
    permission: '',
	subMenus: [],
})
