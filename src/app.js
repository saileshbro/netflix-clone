import { BrowserRouter as Router } from 'react-router-dom'
import * as ROUTES from './constant/routes'
import { Home, Browse, Signin, Signup } from './pages'
import { IsUserRedirect, ProtectedRoute } from './helpers/routes'
import { useAuthListener } from './hooks'

const App = () => {
  const user = useAuthListener()
  return (
    <Router>
      <IsUserRedirect exact path={ROUTES.SIGNIN} user={user} loggedInPath={ROUTES.BROWSE}>
        <Signin />
      </IsUserRedirect>
      <IsUserRedirect exact path={ROUTES.SIGNUP} user={user} loggedInPath={ROUTES.BROWSE}>
        <Signup />
      </IsUserRedirect>
      <ProtectedRoute exact path={ROUTES.BROWSE} user={user}>
        <Browse />
      </ProtectedRoute>
      <IsUserRedirect loggedInPath={ROUTES.BROWSE} exact path={ROUTES.HOME} user={user}>
        <Home />
      </IsUserRedirect>
    </Router>
  )
}
export default App
