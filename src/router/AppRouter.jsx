import { Navigate, Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import { LOGIN_ROUTE } from "./consts";

const AppRouter = () => {
  return (
    //Mapping through the routes array and rendering the Route component for each route
    <Routes>
      <>
        {routes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
        <Route path="*" element={<Navigate to={LOGIN_ROUTE} />} />
      </>
    </Routes>
  );
};

export default AppRouter;
