import { Button } from "@material-tailwind/react";
import { useState } from "react";
import CreateWallet from "./CreateWallet";
import ImportWallet from "./ImportWallet";

const Walletd = () => {
  const [create, setCreate] = useState(true);
  const [createTem, setCreateTem] = useState(false);
  const [importWallet, setImportWallet] = useState(false);
  const ImportWalletFnc = () => {
    setCreate(false);
    setImportWallet(true);
  };
  const Createbtn = () => {
    setCreateTem(true);
    setCreate(false);
  };

  console.log(create);
  return (
    <div className="bg-white h-full w-full   overflow-y-auto overflow-hidden">
      {create && (
        <div>
          <div className="flex justify-center relative py-10 overflow-y-hidden">
            <img src={"../img-1.png"} />
            <h1 className="absolute bottom-7 text-xl">
              Full Support From Shardium
            </h1>
          </div>

          <div className="absolute top-5">
            {" "}
            <marquee className="text-green-400 " behavior="" direction="">
              <small> Earn Crypto Interest – Get Up To 15%</small>
            </marquee>
          </div>

          <div>
            <div className="flex justify-center gap-5 mt-7">
              <Button
                style={{ width: "100%" }}
                onClick={() => Createbtn()}
                variant="gradient "
              >
                <div className="flex justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-person-plus"
                    viewBox="0 0 16 16"
                  >
                    <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                    <path
                      fill-rule="evenodd"
                      d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"
                    />
                  </svg>
                </div>
                <h1 className="text-md">Create Wallet</h1>
                <span className="text-xs lowercase font-serif block">
                  create a new wallet
                </span>
              </Button>
              <Button
                style={{ width: "100%" }}
                onClick={() => ImportWalletFnc()}
                color="amber"
                variant="gradient "
              >
                <div className="flex justify-center text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-download"
                    viewBox="0 0 16 16"
                  >
                    <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                    <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                  </svg>
                </div>

                <h1 className="text-md text-white">Import Wallet</h1>
                <span className="text-xs text-white font-serif lowercase">
                  import wallet with private key
                </span>
              </Button>
            </div>
          </div>
        </div>
      )}
      {createTem && <CreateWallet />}
      {importWallet && <ImportWallet />}
    </div>
  );
};

export default Walletd;
