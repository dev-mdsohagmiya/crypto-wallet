import { Tab, Tabs, TabsBody, TabsHeader } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import About from "./About";
import Wallet from "./Wallet";

export default function Navber(props) {
  const [tab1, setTab1] = useState(false);
  const [tab2, setTab2] = useState(false);
  useEffect(() => {}, []);
  const [de, setde] = useState(true);
  const Tab11 = () => {
    setTab1(true);
    setde(false);
    setTab2(false);
  };
  const Tab22 = () => {
    setTab1(false);
    setde(false);
    setTab2(true);
  };
  return (
    <Tabs value="wallet">
      <TabsHeader>
        <Tab onClick={() => Tab11()} key={1} value="wallet">
          Wallet
        </Tab>
        <Tab key={2} onClick={() => Tab22()} value="about">
          About
        </Tab>
      </TabsHeader>
      <TabsBody>
        {de && <Wallet />}
        {tab1 && <Wallet />}

        {/* About */}
        {tab2 && <About />}
      </TabsBody>
    </Tabs>
  );
}
