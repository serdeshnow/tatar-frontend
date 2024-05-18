import { Outlet } from "react-router-dom";

export const RegLayout = () => {
  return (
    <>
      <main>
        <Outlet />
      </main>
    </>
  );
};
