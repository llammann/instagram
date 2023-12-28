import { Outlet } from "react-router-dom";
type Props = {};

function UserRoot({}: Props) {
  return (
    <>
      <Outlet />
    </>
  );
}

export default UserRoot;
