import { Redirect } from 'react-router'
import { Route, Switch } from 'react-router-dom'
import { Layout } from './components'
import { routes } from './utils'

function App() {
  return (
    <Layout>
      <Switch>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            exact={route.exact}
            component={route.component}
          />
        ))}
        <Redirect to="/main" />
      </Switch>
    </Layout>
  )
}

export default App
