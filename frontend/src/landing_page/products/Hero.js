import React from "react";

function Hero() {
  return (
    <div className="container p-5 mt-2">
      <div className="mt-5 text-center p-3">
        <h1>Zerodha Products</h1>
        <h5 className="text-muted mt-4 fs-5">
          Sleek, modern, and intuitive trading platforms
        </h5>
        <p className="mt-4 fs-6">
          Check out our{" "}
          <a href="" style={{ textDecoration: "none" }}>
            investment offerings{" "}
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Hero;
