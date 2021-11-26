import { Redirect, Route } from "react-router";
import useAuth from "../Hooks/useAuth";

const PrivateRoute = ({ children, ...rest }) => {
  const { users, isLoading } = useAuth();

  if (isLoading) {
    return <div></div>;
  }

  return (
    <Route
      {...rest}
      render={({ location }) =>
        users.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
