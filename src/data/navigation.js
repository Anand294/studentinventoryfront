export const navigation = [
  { label: 'Dashboard', path: '/', icon: 'dashboard' },
  { label: 'Assets', icon: 'assets', children: [{ label: 'All assets', path: '/asset' }, { label: 'Add asset', path: 'add' }] },
  { label: 'Students', icon: 'students', children: [{ label: 'All students', path: '/student' }, { label: 'Add student', path: 'add' }] }
]
