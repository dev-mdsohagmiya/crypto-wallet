import { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import "tw-elements";

const ReceivedCrypto = (props) => {
  const [copy, setCopy] = useState(true);
  const [copied, setCopied] = useState(false);
  const copyBtn = () => {
    setCopy(false);
    setCopied(true);
  };
  const [back, setBack] = useState(false);
  props.onBackReceived(back);
  return (
    <div>
      <div>
        <button onClick={() => setBack(true)} className="cursor-pointer py-5 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="23"
            fill="currentColor"
            class="bi bi-arrow-left-circle"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"
            />
          </svg>
        </button>
        <div className="bg-red-300 p-5 pb-5 rounded-md mt-5">
          <h1 className="text-lg pb-10 mt-10  text-center">RECEIVED USDT</h1>
          <h1 className="text-center">Network (BEP20)</h1>

          <div>
            <span class="flex rounded-full ml-1 cursor-pointer bg-indigo-500 uppercase px-2 py-1 font-bold mr-3">
              <span className="text-[9px] text-white mt-1">
                0x93ed6a25f666b0e349b01f6f77728c476a5481f8
                {/* <CopyToClipboard
                    onCopy={() => console.log("copied")}
                    text={"0x93ed6a25f666b0e349b01f6f77728c476a5481f8"}
                  >
                    copy
                  </CopyToClipboard> */}
              </span>
              &nbsp;
              <div>
                <CopyToClipboard
                  text="0x93ed6a25f666b0e349b01f6f77728c476a5481f8"
                  className="mt-1"
                  style={{ width: "100%" }}
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
              </div>
            </span>
          </div>
        </div>
        <br />
        <br />
        <p className="text-sm font-sans">
          Shardeum is an EVM-based, linearly scalable smart contract platform
          that provides low gas fees forever while maintaining true
          decentralization and solid security through dynamic state sharding.
        </p>
      </div>
    </div>
  );
};

export default ReceivedCrypto;
