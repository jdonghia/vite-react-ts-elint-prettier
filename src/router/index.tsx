import { Route, Routes } from "react-router-dom";

import { RouteInterface } from "./types";

export default function Router() {
  const routes = [
    // {
    //   path: "/",
    //   id: "",
    //   element: <></>,
    // },
  ] as Array<RouteInterface>;

  return (
    <Routes>
      {routes.map(({ path, element, id }) => (
        <Route path={path} element={element} key={id} />
      ))}
    </Routes>
  );
}
