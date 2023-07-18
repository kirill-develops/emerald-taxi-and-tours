const sitePagesArr = [
  { name: 'Home', link: '/' },
  {
    name: 'Transfers', link: '/transfer', nestedLinks: [
      { name: 'Sangster International (MBJ)', link: '/MBJ' },
      { name: 'Norman Manley International (KIN)', link: '/KIN' },
    ]
  },
  { name: 'Tours', link: '/tours' },
  { name: 'About Us', link: '/about' },
];

export default sitePagesArr;