import { Button, Input } from "@material-tailwind/react";
import { useState } from "react";
import "tw-elements";

const SendCrypto = (props) => {
  const [back, setBack] = useState(false);
  props.onBackSend(back);
  return (
    <div style={{ width: "100%" }}>
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
        <div>
          <h1 className="text-lg pb-10 text-center mt-10">SEND UDST</h1>
        </div>
        <div style={{ width: "100%" }}>
          <div style={{ width: "100%" }}>
            <label htmlFor="input " className="text-md text-gray-700">
              {" "}
              Address
            </label>
            <Input style={{ width: "100%" }} color="blue" label="Address" />
          </div>
          <div>
            <label htmlFor="input " className="text-md text-gray-700">
              {" "}
              Network
            </label>
            <Input style={{ width: "100%" }} label="BEP(20)" disabled />
          </div>
          <div>
            <label htmlFor="input " className="text-md text-gray-700">
              {" "}
              Amount
            </label>
            <Input style={{ width: "100%" }} color="blue" label="Amount" />
          </div>
          <div className="mt-5">
            <Button style={{ width: "100%" }} fullWidth>
              Send
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendCrypto;
