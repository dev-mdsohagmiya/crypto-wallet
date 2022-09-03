import { Button } from "@material-tailwind/react";
import { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import WalletDash from "./WalletDash";

const CreateSuccess = () => {
  const userid = JSON.parse(localStorage.getItem("user"));
  // console.log(userid.uid);
  const [createSuccess, setCreateSuccess] = useState(true);
  const [walletDash, setWalletDash] = useState(false);
  const [copy, setCopy] = useState(true);
  const [copied, setCopied] = useState(false);
  const [uid, setUid] = useState(userid.uid);
  const copyBtn = () => {
    setCopied(true);
    setCopy(false);
  };
  const ContinueBtn = () => {
    setWalletDash(true);
    setCreateSuccess(false);
  };
  return (
    <div style={{ width: "100%" }}>
      {createSuccess && (
        <div className="mt-20">
          <div className="flex justify-center">
            <img src={"../created.svg"} alt="Created" />
          </div>
          <div
            class="flex items-center justify-center rounded-md my-5  text-green-900 text-sm font-bold px-4 py-3"
            role="alert"
          >
            <svg
              class="fill-current w-4 h-4 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z" />
            </svg>
            <p>Wallet Created</p>
          </div>
          <div className="">
            <div
              class="bg-blue-100 border-t border-b mt-5 border-blue-500 text-blue-700  py-3"
              role="alert"
            >
              <p class="font-bold">Informational message</p>
              <p class="text-sm">Don't share your secret key!</p>
            </div>
            <div>
              <div
                class=" p-2 bg-indigo-800 items-center text-indigo-100 leading-none  flex lg:inline-flex"
                role="alert"
                style={{ width: "100%" }}
              >
                <span class="font-semibold text-white text-xs text-left flex-auto">
                  {uid}
                </span>
                <span class="flex rounded-full ml-1 cursor-pointer bg-indigo-500 uppercase px-2 py-1 font-bold mr-3">
                  <CopyToClipboard
                    style={{ width: "100%" }}
                    text={uid}
                    onCopy={() => copyBtn()}
                  >
                    <div className="" style={{ width: "100%" }}>
                      {copy && (
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-clipboard"
                            viewBox="0 0 16 16"
                          >
                            <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
                            <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
                          </svg>
                        </div>
                      )}

                      {copied && (
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-clipboard-check"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"
                            />
                            <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
                            <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
                          </svg>
                        </div>
                      )}
                    </div>
                  </CopyToClipboard>
                </span>
              </div>
            </div>
          </div>

          <div className="">
            <Button
              onClick={() => ContinueBtn()}
              className="mt-5 rounded-0"
              style={{ width: "100%" }}
              color="blue"
            >
              continue
            </Button>
          </div>
        </div>
      )}
      {walletDash && <WalletDash />}
    </div>
  );
};

export default CreateSuccess;
