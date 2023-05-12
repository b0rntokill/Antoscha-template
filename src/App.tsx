import { useEffect, useState } from 'react'
import { Redirect } from 'react-router'
import { Route, Switch } from 'react-router-dom'
import ExampleApi from './api/example/exampleApi'
import { ExamplePosts } from './api/example/types'
import { routes } from './utils'
import { Layout } from './components'

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
