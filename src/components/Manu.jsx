import {
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import { useState } from "react";
import Walletd from "./Walletd";
const Manu = (props) => {
  const [logout, setLogout] = useState(false);
  const [refer, setRefer] = useState(false);
  const Logout = () => {
    props.onLogout(true);
  };
  const [manu, setManu] = useState(true);
  const [openManu, setOpenManu] = useState(false);
  const ManuHandler = () => {
    setManu(false);
    setOpenManu(true);
  };
  const ReferOption = () => {
    console.log("hello world");
  };
  return (
    <div className="mt-4">
      <Menu style={{ width: "250px" }} placement="left-start">
        <MenuHandler>
          <Button
            onClick={() => console.log("hellllllllllllll")}
            color="teal"
            className=""
            size="sm"
          >
            {" "}
            {manu && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
            {openManu && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </Button>
        </MenuHandler>
        <MenuList>
          <MenuItem
            onClick={() => ReferOption()}
            className="font-thin underline"
            style={{ width: "200px" }}
          >
            Earn Money By Refer
          </MenuItem>

          <MenuItem>
            {" "}
            <Button
              onClick={() => Logout()}
              fullWidth
              className="text-white"
              size="sm"
              color="amber"
            >
              Logout
            </Button>
          </MenuItem>
        </MenuList>
      </Menu>

      {logout && <Walletd />}
    </div>
  );
};

export default Manu;
