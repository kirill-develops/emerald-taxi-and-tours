import { AirplaneTicket, Info, Tour } from "@mui/icons-material";

const menuLinkArr = [
  {
    name: 'Airport Transfer',
    link: '/transfer',
    icon: <AirplaneTicket />,
    nested: [
      { name: 'Montego Bay International', link: '/MBJ' },
      { name: 'Kingston International', link: '/KIN' },
      { name: 'Resort to Resort', link: '/resort' },
    ]
  },
  {
    name: 'Tours',
    link: '/tours',
    icon: <Tour />,
    nested: [
      { name: 'Falmouth & Duncan', link: '/trelawny' },
      { name: 'Lucea', link: '/lucea' },
      { name: 'Montego Bay', link: '/montego_bay' },
      { name: 'Ocho Rios', link: '/ocho_rios' },
      { name: 'Runaway Bay', link: '/runaway_bay' },
      { name: 'Mandeville', link: '/mandeville' },
      { name: 'Negril', link: '/negril' },
      { name: 'Port Antonio', link: '/port_antonio' },
      { name: 'Kingston, Spanish Town & Portmore', link: '/kingston' },
    ]
  },
  {
    name: 'About Us',
    link: '/about',
    icon: <Info />,
  },
];

export default menuLinkArr;