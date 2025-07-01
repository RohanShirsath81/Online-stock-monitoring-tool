import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row ">
        <h1 className="text-center">People</h1>
      </div>
      <div
        className="row mt-3 text-muted fs-5"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-2"></div>
        <div className="col-4 p-5 text-center">
          <img
            src="/images/profile.png"
            style={{ width: "80%", borderRadius: "100%" }}
            alt="Rohan Shirsath, CEO"
          />
          <h4 className="mt-5">Rohan Shirsath</h4>
          <h6 className="font-grey">Founder</h6>
        </div>
        <div className="col-6 p-5" style={{ fontSize: "1.1rem" }}>
          <p>
            Rohan bootstrapped and founded this Online Stock Monitoring Tool. Today,
            this tool causes best monitorization for the stock.
          </p>
          <p>
            He is a Data Science Engineer and he is passionate about his
            development skills.
          </p>
          <p>Playing Cricket is his zen.</p>
          <p>
            Connect on{" "}
            {/* <a href="" style={{ textDecoration: "none" }}>
              Homepage
            </a>{" "}
            /{" "}
            <a href="" style={{ textDecoration: "none" }}>
              {" "}
              TradingQnA
            </a>{" "}
            /{" "} */}
            <a href="" style={{ textDecoration: "none" }}>
              linkedIn
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
