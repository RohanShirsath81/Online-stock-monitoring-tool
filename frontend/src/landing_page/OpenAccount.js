import React from "react";

function OpenAccount() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <h1 className="mt-5">Open a Zerodha account</h1>
        <p className="mt-3">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        <p className="mt-1.5"></p>
        <button
          className="p-2 btn btn-primary fs-5"
          style={{
            width: "17%",
            margin: "0 auto",
            backgroundColor: "#387ed1",
            color: "white",
          }}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default OpenAccount;
