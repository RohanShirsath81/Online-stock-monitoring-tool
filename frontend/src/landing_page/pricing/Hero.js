import React from "react";

function Hero() {
  return (
    <div className="container p-5">
      <div className="row mt-5 text-center">
        <h1 style={{ fontSize: "2.75rem", lineHeight: "1.25" }}>Charges</h1>
        <h5
          className=" mt-1 mb-5"
          style={{ marginBottom: "15px", color: "#9b9b9b" }}
        >
          List of all charges and taxes
        </h5>
      </div>
      <div className="row mt-5 p-5 text-center">
        <div className="col-4 P-3 mt-5">
          <img
            src="/images/pricingEquity.svg"
            style={{
              marginBottom: "15px",
              width: "250px",
              maxWidth: "100%",
              borderStyle: "none",
            }}
          />
          <h1 className="mt-3" style={{ fontSize: "2rem" }}>Free equity delivery</h1>
          <p
            className="text-small text-muted mt-4"
            style={{
              lineHeight: "18px",
              display: "block",
              textAlign: "center",
              margintop: "10px",
            }}
          >
            All equity delivery investments (NSE, BSE),
            <br />
            are absolutely free — ₹ 0 brokerage.
          </p>
        </div>
        <div className="col-4 P-3 mt-5">
          <img
            src="/images/intradayTrades.svg"
            style={{
              marginBottom: "15px",
              width: "250px",
              maxWidth: "100%",
              borderStyle: "none",
            }}
          />
          <h1 className="mt-3" style={{ fontSize: "2rem" }}>Intraday and F&O trades</h1>
          <p
            className="text-small text-muted mt-4"
            style={{
              lineHeight: "18px",
              display: "block",
              textAlign: "center",
              margintop: "10px",
            }}
          >
            Flat ₹ 20 or 0.03% (whichever is lower) per
            <br />
            executed order on intraday trades across
            <br />
            equity, currency, and commodity trades. Flat
            <br />
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-4 P-3 mt-5">
          <img
            src="/images/pricingMF.svg"
            style={{
              marginBottom: "15px",
              width: "250px",
              maxWidth: "100%",
              borderStyle: "none",
            }}
          />
          <h1 className="mt-3" style={{ fontSize: "2rem" }}>Free direct MF</h1>
          <p  
            className="text-small text-muted mt-4"
            style={{
              lineHeight: "18px",
              display: "block",
              textAlign: "center",
              margintop: "10px",
            }}
          >
            All direct mutual fund investments are
            <br />
            absolutely free — ₹ 0 commissions & DP
            <br />
            charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
