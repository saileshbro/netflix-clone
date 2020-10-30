import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import * as ROUTES from './constant/routes'
import { Home, Browse, Signin, Signup } from './pages'

const App = () => (
  <Router>
    <Route exact path={ROUTES.SIGNUP}>
      <Signup />
    </Route>
    <Route exact path={ROUTES.SIGNIN}>
      <Signin />
    </Route>
    <Route exact path={ROUTES.BROWSE}>
      <Browse />
    </Route>
    <Route exact path={ROUTES.HOME}>
      <Home />
    </Route>
  </Router>
)
export default App
