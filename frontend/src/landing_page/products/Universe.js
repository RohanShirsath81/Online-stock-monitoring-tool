import React from "react";

function Universe() {
  return (
    <div className="conatainer mt-5">
      <div className="row  text-center p-5">
        <h1>The Zerodha Universe</h1>
        <p className="mt-3 ">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col-4 P-3 mt-5">
          <img
            src="/images/zerodhaFundhouse.png"
            style={{ height: "55px", maxWidth: "100%", borderStyle: "none" }}
          />
          <p
            className="text-small text-muted mt-3"
            style={{
              lineHeight: "18px",
              display: "block",
              textAlign: "center",
              margintop: "10px",
            }}
          >
            Our asset management venture
            <br />
            that is creating simple and transparent index
            <br />
            funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4 P-3 mt-5">
          <img
            src="/images/sensibullLogo.svg"
            style={{ height: "46px", maxWidth: "100%", borderStyle: "none" }}
          />
          <p
            className="text-small text-muted mt-3"
            style={{
              lineHeight: "18px",
              display: "block",
              textAlign: "center",
              margintop: "10px",
            }}
          >
            Options trading platform that lets you <br />
            create strategies, analyze positions, and examine
            <br />
            data points like open interest, FII/DII, and more.
          </p>
        </div>
        <div className="col-4 P-3 mt-5">
          <img
            src="/images/tijori.svg"
            style={{ height: "55px", maxWidth: "100%", borderStyle: "none" }}
          />
          <p
            className="text-small text-muted mt-3"
            style={{
              lineHeight: "18px",
              display: "block",
              textAlign: "center",
              margintop: "10px",
            }}
          >
            Investment research platform
            <br />
            that offers detailed insights on stocks,
            <br />
            sectors, supply chains, and more.
          </p>
        </div>
        <div className="col-4 P-3 mt-5">
          <img
            src="/images/streakLogo.png"
            style={{ height: "55px", maxWidth: "100%", borderStyle: "none" }}
          />
          <p
            className="text-small text-muted mt-3"
            style={{
              lineHeight: "18px",
              display: "block",
              textAlign: "center",
              margintop: "10px",
            }}
          >
            Our asset management venture
            <br />
            that is creating simple and transparent index
            <br />
            funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4 P-3 mt-5">
          <img
            src="/images/smallcaseLogo.png"
            style={{ height: "46px", maxWidth: "100%", borderStyle: "none" }}
          />
          <p
            className="text-small text-muted mt-3"
            style={{
              lineHeight: "18px",
              display: "block",
              textAlign: "center",
              margintop: "10px",
            }}
          >
            Options trading platform that lets you <br />
            create strategies, analyze positions, and examine
            <br />
            data points like open interest, FII/DII, and more.
          </p>
        </div>
        <div className="col-4 P-3 mt-5">
          <img
            src="/images/dittoLogo.png"
            style={{ height: "55px", maxWidth: "100%", borderStyle: "none" }}
          />
          <p
            className="text-small text-muted mt-3"
            style={{
              lineHeight: "18px",
              display: "block",
              textAlign: "center",
              margintop: "10px",
            }}
          >
            Investment research platform
            <br />
            that offers detailed insights on stocks,
            <br />
            sectors, supply chains, and more.
          </p>
        </div>
        <div className="p-5">
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
    </div>
  );
}

export default Universe;
