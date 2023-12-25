import { Outlet } from "react-router-dom";

type Props = {};

function index({}: Props) {
  return (
    <>
      <Outlet />
    </>
  );
}

export default index;
