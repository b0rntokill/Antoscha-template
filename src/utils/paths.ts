import { MainPage, ExamplePage } from '../pages'

export const routes = [
  {
    path: '/main',
    exact: false,
    component: MainPage,
  },
  {
    path: '/development/:id',
    exact: true,
    component: ExamplePage,
  },
  {
    path: '/product/:id',
    exact: true,
    component: ExamplePage,
  },
]
