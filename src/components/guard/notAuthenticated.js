import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

function NotAuthenticatedGuardRoute(props) {
  const { component: WrapperComponent, path, ...rest } = props;

  return (
    <Route
      path={path}
      {...rest}
      render={(props) => {
        // Perhaps it's better get auth status from authentication context.
        // so we can be more flexible of determining if a user logged in or not
        // instead relying only from cms_token
        return !localStorage.getItem('cms_token') ? (
          <WrapperComponent {...props} />
        ) : (
          <Redirect to="/home" />
        );
      }}
    />
  );
}

NotAuthenticatedGuardRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
  path: PropTypes.string.isRequired,
};

export default NotAuthenticatedGuardRoute;
