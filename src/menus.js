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
	id: '_V2l1JF1yEfGDTcMRWoUIdw',
	route: '/checkin',
    label: 'CheckIn',
    permission: '',
	subMenus: [],
})

addMenu({
	id: '_V2mcMF1yEfGDTcMRWoUIdw',
	route: '/eventcreation',
    label: 'EventCreation',
    permission: '',
	subMenus: [],
})

addMenu({
	id: '_V2mcM11yEfGDTcMRWoUIdw',
	route: '/attendeemanagement',
    label: 'AttendeeManagement',
    permission: '',
	subMenus: [],
})

addMenu({
	id: '_V2mcNl1yEfGDTcMRWoUIdw',
	route: '/notification',
    label: 'Notification',
    permission: '',
	subMenus: [],
})

addMenu({
	id: '_V2mcOV1yEfGDTcMRWoUIdw',
	route: '/report',
    label: 'Report',
    permission: '',
	subMenus: [],
})

addMenu({
	id: '_V2mcPF1yEfGDTcMRWoUIdw',
	route: '/review',
    label: 'Review',
    permission: '',
	subMenus: [],
})

addMenu({
	id: '_V2mcP11yEfGDTcMRWoUIdw',
	route: '/timestampcheckin',
    label: 'TimeStampCheckIn',
    permission: '',
	subMenus: [],
})
