import axios from "axios";
import { useEffect, useState } from "react";
import "tw-elements";
import Manu from "./Manu";
import ReceivedCrypto from "./ReceivedCrypto";
import SendCrypto from "./SendCrypto";
import Walletd from "./Walletd";

const WalletDash = () => {
  const userid = JSON.parse(localStorage.getItem("user"));

  const [sendMessage, setSendMessage] = useState(false);
  const [reveivedMessage, setReceivedMessage] = useState(false);
  const [allMessage, setAllMessage] = useState(false);

  const [copied, setCopied] = useState(false);
  const [copy, setCopy] = useState(true);
  const [walletDash, setWalletDash] = useState(true);
  const [send, setSend] = useState(false);
  const [reveived, setReceived] = useState(false);
  const [logout, setLogout] = useState(false);
  const [notMessage, setNotMessage] = useState(true);
  const [notReveived, setNotReceived] = useState(true);
  const Logout = (value) => {
    setLogout(value);
    if (value == true) {
      setWalletDash(false);
      localStorage.clear("user");
    }
  };
  const Send = () => {
    setWalletDash(false);
    setSend(true);
  };
  const Received = () => {
    setWalletDash(false);
    setReceived(true);
  };
  const BackSend = (value) => {
    // setWalletDash(true);
    // setSend(false);
    console.log(value);
    if (value == true) {
      setWalletDash(true);
      setSend(false);
    }
  };

  const BackReceived = (value) => {
    console.log(value);
    if (value == true) {
      setReceived(false);
      setWalletDash(true);
    }
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(userid.received);
    axios
      .post("https://msbhhwallet.herokuapp.com/dashbord", {
        message: user._id,
      })
      .then((res) => {
        localStorage.setItem("user", JSON.stringify(res.data));
        if (res.status == 200) {
          if (userid.received) {
            setSendMessage(true);
            setReceivedMessage(true);
            setAllMessage(true);
            setNotMessage(false);
          }
          // if (userid.send) {
          //   setNotReceived(false);
          // }
        }
      });
  }, []);

  return (
    <div style={{ width: "100%" }}>
      {walletDash && (
        <div style={{ width: "100%" }}>
          <div className="flex justify-between">
            <div>
              <h1 className="text-xl py-4">{userid.name}</h1>
            </div>
            <div>
              <Manu onLogout={Logout} />
            </div>
          </div>

          <div className="flex justify-center">
            <img className="w-20 h-20" src="../usdt.svg" alt="" />
          </div>
          <div className="flex justify-center">
            <span className="py-2 text-2xl">
              <span>{userid.balance}</span>

              <span> USDT</span>
            </span>
          </div>
          <div className="mt-2" style={{ height: "290px" }}>
            <ul
              class="nav nav-tabs flex flex-row  flex-wrap list-none border-b-0 pl-0 mb-4"
              id="tabs-tab"
              role="tablist"
            >
              <li class="nav-item" role="presentation">
                <a
                  href="#tabs-home"
                  class="
      nav-link
      block
      font-medium
      
      leading-tight
      
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
      active
      text-sm
    "
                  id=""
                  data-bs-toggle="pill"
                  data-bs-target="#tabs-home"
                  role="tab"
                  aria-controls="tabs-home"
                  aria-selected="true"
                >
                  All
                </a>
              </li>
              <li class="nav-item" role="presentation">
                <a
                  href="#tabs-profile"
                  class="
      nav-link
      block
      font-medium
      text-sm
      leading-tight
     
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
    "
                  id="tabs-profile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#tabs-profile"
                  role="tab"
                  aria-controls="tabs-profile"
                  aria-selected="false"
                >
                  Send
                </a>
              </li>
              <li class="nav-item" role="presentation">
                <a
                  href="#tabs-messages"
                  class="
      nav-link
      block
      font-medium
      text-sm
      leading-tight
     
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
    "
                  id="tabs-messages-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#tabs-messages"
                  role="tab"
                  aria-controls="tabs-messages"
                  aria-selected="false"
                >
                  Received
                </a>
              </li>
            </ul>
            <div class="tab-content" id="tabs-tabContent">
              <div
                class="tab-pane fade show active"
                id="tabs-home"
                role="tabpanel"
                aria-labelledby="tabs-home-tab"
              >
                <div style={{ height: "200px", overflowY: "scroll" }}>
                  {/* card all */}
                  <div>
                    {allMessage && (
                      <div>
                        {userid.all.map((value) => (
                          <div class="relative flex flex-col sm:flex-row sm:items-center bg-white shadow rounded-md py-5 pl-6 pr-8 sm:pr-6">
                            <div class="flex flex-row items-center border-b sm:border-b-0 w-full sm:w-auto pb-4 sm:pb-0">
                              <div class="text-green-500">
                                <svg
                                  class="w-6 sm:w-5 h-6 sm:h-5"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                  ></path>
                                </svg>
                              </div>
                              <div class="text-sm font-medium ml-3">
                                Success Payment.
                              </div>
                            </div>
                            <div class="text-sm tracking-wide text-gray-500 mt-4 sm:mt-0 sm:ml-4">
                              Your Payment {value} was Successful. You can use
                              our services!
                            </div>
                            <div class="absolute sm:relative sm:top-auto sm:right-auto ml-auto right-4 top-4 text-gray-400 hover:text-gray-800 cursor-pointer">
                              <svg
                                class="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M6 18L18 6M6 6l12 12"
                                ></path>
                              </svg>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                    {notMessage && (
                      <div style={{ fontSize: "12px" }}> No transaction!</div>
                    )}
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="tabs-profile"
                role="tabpanel"
                aria-labelledby="tabs-profile-tab"
              >
                <div
                  style={{
                    height: "200px",
                    overflowY: "scroll",
                    overflowX: "hidden",
                  }}
                >
                  {/* card  send*/}
                  <div>
                    {sendMessage && (
                      <div>
                        {userid.send.map((value) => (
                          <div class="relative flex flex-col sm:flex-row sm:items-center bg-white shadow rounded-md py-5 pl-6 pr-8 sm:pr-6">
                            <div class="flex flex-row items-center border-b sm:border-b-0 w-full sm:w-auto pb-4 sm:pb-0">
                              <div class="text-green-500">
                                <svg
                                  class="w-6 sm:w-5 h-6 sm:h-5"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                  ></path>
                                </svg>
                              </div>
                              <div class="text-sm font-medium ml-3">
                                Success Payment.
                              </div>
                            </div>
                            <div class="text-sm tracking-wide text-gray-500 mt-4 sm:mt-0 sm:ml-4">
                              Your Payment {value} was Successful. You can use
                              our services!
                            </div>
                            <div class="absolute sm:relative sm:top-auto sm:right-auto ml-auto right-4 top-4 text-gray-400 hover:text-gray-800 cursor-pointer">
                              <svg
                                class="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M6 18L18 6M6 6l12 12"
                                ></path>
                              </svg>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="tabs-messages"
                role="tabpanel"
                aria-labelledby="tabs-profile-tab"
              >
                <div
                  style={{
                    height: "200px",
                    overflowY: "scroll",
                    overflowX: "hidden",
                  }}
                >
                  {/* card  received*/}
                  <div>
                    {reveivedMessage && (
                      <div>
                        {userid.received.map((value) => (
                          <div class="relative flex flex-col sm:flex-row sm:items-center bg-white shadow rounded-md py-5 pl-6 pr-8 sm:pr-6">
                            <div class="flex flex-row items-center border-b sm:border-b-0 w-full sm:w-auto pb-4 sm:pb-0">
                              <div class="text-green-500">
                                <svg
                                  class="w-6 sm:w-5 h-6 sm:h-5"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                  ></path>
                                </svg>
                              </div>
                              <div class="text-sm font-medium ml-3">
                                Success Payment.
                              </div>
                            </div>
                            <div class="text-sm tracking-wide text-gray-500 mt-4 sm:mt-0 sm:ml-4">
                              Your Payment {value} was Successful. You can use
                              our services!
                            </div>
                            <div class="absolute sm:relative sm:top-auto sm:right-auto ml-auto right-4 top-4 text-gray-400 hover:text-gray-800 cursor-pointer">
                              <svg
                                class="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M6 18L18 6M6 6l12 12"
                                ></path>
                              </svg>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                    {notMessage && (
                      <div style={{ fontSize: "12px" }}> No transaction!</div>
                    )}
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="tabs-contact"
                role="tabpanel"
                aria-labelledby="tabs-contact-tab"
              >
                Tab 4 content
              </div>
            </div>
          </div>

          <div className="hello" style={{ width: "100%" }}>
            <div class="flex items-center  justify-center ">
              <div
                class="inline-flex shadow-md hover:shadow-lg focus:shadow-lg"
                role="group"
                style={{ width: "100%" }}
              >
                <button
                  onClick={() => Send()}
                  style={{ width: "50%" }}
                  type="button"
                  class="rounded-l inline-block px-6 py-1 flex bg-blue-500 text-white font-medium text-xs leading-tight  hover:bg-blue-600 focus:bg-blue-600 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out"
                >
                  <div className="mt-[9px] mr-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="17"
                      fill="currentColor"
                      class="bi bi-arrow-up-circle"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"
                      />
                    </svg>
                  </div>
                  <span className="block mt-2 text-[15px]"> Send</span>
                </button>
                <button
                  onClick={() => Received()}
                  type="button "
                  style={{ width: "50%" }}
                  class=" rounded-tr-sm flex rounded-br-sm inline-block px-6 py-2.5 bg-amber-500 text-white font-medium text-xs leading-tight  hover:bg-amber-600 focus:bg-blue-600 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out"
                >
                  <div className="mt-[3px] mr-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="17"
                      fill="currentColor"
                      class="bi bi-arrow-down-circle"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"
                      />
                    </svg>
                  </div>
                  <span className="text-[15px] mt-[2px]">Received</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {send && <SendCrypto onBackSend={BackSend} />}
      {reveived && <ReceivedCrypto onBackReceived={BackReceived} />}
      {logout && <Walletd />}
    </div>
  );
};

export default WalletDash;
