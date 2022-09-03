import { useEffect, useState } from "react";
import Walletd from "./Walletd";
import WalletDash from "./WalletDash";
const Wallet = (props) => {
  const [oldUser, setOldUser] = useState(localStorage.getItem("user"));
  const [wallet, setWallet] = useState(true);
  useEffect(() => {
    if (oldUser) {
      setWallet(false);
      console.log("shohag islam sajjad");
    }
  }, []);

  return (
    <div className="bg-gray overflow-y-hidden">
      {console.log("rendering")}
      <div
        class="min-w-screen py-5  flex items-center justify-center px-5 bg-gray-300 overflow-y-hidden"
        style={{ backgroundImage: `url("../bg.png")` }}
      >
        <div
          className="bg-white border-5 px-5 text-gray-800  rounded-xl shadow-lg overflow-hidden relative overflow-y-hidden  flex"
          style={{ width: "400px", height: "556px" }}
        >
          {" "}
          {oldUser && <WalletDash />}
          {wallet && <Walletd />}
          {/* {wallet && }
            {oldUser && (
              <div>
                <WalletDash />
              </div>
            )}
            {wallet && <CreateWallet />} */}
        </div>
      </div>
    </div>
  );
};

export default Wallet;
