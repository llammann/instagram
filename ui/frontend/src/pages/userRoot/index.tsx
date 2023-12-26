import { Outlet } from "react-router-dom";
type Props = {};

function UserRoot({}: Props) {
  return (
    <>
      <h1>UserRoot</h1>
      <Outlet />
    </>
  );
}

export default UserRoot;
