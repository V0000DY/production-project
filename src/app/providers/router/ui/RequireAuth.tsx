import { getUserAuthData } from "entities/User";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { RoutePath } from "shared/config/routeConfig/routeConfig";

function RequireAuth({ children }: { children: JSX.Element }) {
  const auth = useSelector(getUserAuthData);
  const location = useLocation();

  if (!auth) {
    // Redirect them to the /main page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to={RoutePath.main} state={{ from: location }} replace />;
  }

  return children;
}

export default RequireAuth;
