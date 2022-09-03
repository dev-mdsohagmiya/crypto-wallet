import { Button, Input } from "@material-tailwind/react";
import axios from "axios";
import { useState } from "react";
import CreateSuccess from "./CreateSuccess";
const CreateWallet = () => {
  const [createSuccess, setCreateSuccess] = useState(false);

  const [walletName, setWalletName] = useState("");
  const [password, setPassword] = useState("");
  const [conPassword, setConPassword] = useState("");
  const [passWarning, setPassWarning] = useState("");
  const [check1, setCheck1] = useState(true);
  const [loder, setLoder] = useState(false);

  const wallet = {
    name: walletName,
    password: password,
  };

  const Createbtn = () => {
    if (walletName.length > 1) {
      console.log("enter your name");
    }
    if (password.length > 5) {
      console.log("enter a new password");
      setPassWarning("");
    }
    if (!password.length > 5) {
      setPassWarning("1px solid red");
    }

    if (conPassword.length > 5) {
      console.log(password, conPassword);
      console.log("confrom password");
      if (walletName.length > 1 && password === conPassword) {
        console.log("All ok");
      }
    }
    if (
      walletName.length > 1 &&
      conPassword.length > 5 &&
      password.length > 5 &&
      password === conPassword
    ) {
      console.log("all ok");
      setLoder(true);
      setCheck1(false);

      console.log(wallet);
      axios

        .post("https://msbhhwallet.herokuapp.com/wallet", wallet)
        .then((res) => {
          console.log(res.data);
          console.log(res.status);
          if (res.status == 200) {
            localStorage.setItem("user", JSON.stringify(res.data));
            setLoder(false);
            setCheck1(false);
            setCreateSuccess(true);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
    if (!password == conPassword) {
      console.log("conform pass not match");
    }
    console.log(wallet);
    console.log(walletName.length);
  };
  return (
    <div style={{ width: "100%" }}>
      <div className="">
        {/* loder */}
        {loder && (
          <div
            role="status "
            style={{
              position: "absolute",
              top: "45%",
              left: "45%",
              right: "0",
            }}
          >
            <svg
              aria-hidden="true"
              className="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span class="sr-only">Loading...</span>
          </div>
        )}
        {check1 && (
          <div style={{ width: "100%" }}>
            <h1 className="text-xl py-14 text-center ">Create Wallet</h1>
            <label htmlFor="input">Wallet Name</label>
            <Input
              style={{ border: passWarning }}
              onChange={(e) => setWalletName(e.target.value)}
              value={walletName}
              label="Wallet"
            />
            <br />
            <label htmlFor="input">Password</label>
            <Input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              label="Enter a password"
            />
            <br />
            <Input
              onChange={(e) => setConPassword(e.target.value)}
              label="Conform password  "
              className="pt-3"
              value={conPassword}
            />
            <br />
            <Button
              onClick={() => Createbtn()}
              variant="filled "
              style={{ width: "100%" }}
            >
              Create Wallet
            </Button>
          </div>
        )}

        {createSuccess && <CreateSuccess />}
      </div>
    </div>
  );
};

export default CreateWallet;
