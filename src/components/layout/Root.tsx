import { Outlet } from "react-router-dom";
import SideNavigation from "./SideNav";

const RootLayout = () => {
  return (
    <>
      <SideNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
