export const navigation = [
  { label: 'Dashboard', path: '/', icon: 'dashboard' },
  { label: 'Assets', icon: 'assets', children: [{ label: 'All assets', path: '/assets' }, { label: 'Add asset', path: '/assets/new' }] },
  { label: 'Students', icon: 'students', children: [{ label: 'All students', path: '/student' }, { label: 'Add student', path: '/students/new' }] }
]
