import { MainPage, ExamplePage } from '../pages'

export const routes = [
  {
    path: '/main',
    exact: false,
    component: MainPage,
  },
  {
    path: '/example',
    exact: true,
    component: ExamplePage,
  },
]
