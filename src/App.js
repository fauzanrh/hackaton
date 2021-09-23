
import { Layout } from 'antd';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NotAuthenticatedGuardRoute from 'components/guard/notAuthenticated';
import { Sidebar } from 'components/sidebar';
import { MainProvider } from 'contexts';
import { Home as DashboardHome } from 'pages/dashboard/home';
import { DragAndDrop } from 'pages/examples/drag-and-drop';
import { FormSubmission } from 'pages/examples/form-submission';
import Login from 'pages/login';
import 'config/antd.less';
import 'App.scss';

// Weird that we mix UI and routes
function DashboardRoutes() {
  return (
    <Switch>
      <Layout className="pd-cms">
        <Sidebar />
        <Route exact path="/home" component={DashboardHome} />
        <Route
          exact
          path="/examples/form-submission"
          component={FormSubmission}
        />
        <Route exact path="/examples/dnd" component={DragAndDrop} />
      </Layout>
    </Switch>
  );
}

// TODO: 404 page
// TODO: ErrorBoundary

function App() {
  return (
    <MainProvider>
      <Router>
        <Switch>
            <NotAuthenticatedGuardRoute
              path="/login"
              component={Login}
            />
          {/* uncomment to allow authentication */}
          {/* <AuthenticatedGuardRoute path="/" component={DashboardRoutes} /> */}
          <Route path="/" component={DashboardRoutes} />
        </Switch>
      </Router>
    </MainProvider>
  );
}

export default App;
