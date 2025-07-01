import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="row p-5" id="supportWrapper">
        <div className="col-3">
          <h4>Support Portal</h4>
        </div>
        <div className="col-7"></div>
        <div className="col-2">
          <a href="" className="fs-5" style={{ color: "white" }}>
            Track Tickets
          </a>
        </div>
      </div>
      <div className="row p-5 mx-5">
        <div className="col-6 p-5 ">
          <h1 className="fs-3 mb-4">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input placeholder="Eg. How do I activae F&O. why is my order is getting rejected.." />
          <br />
          <p style={{ display: "inline-block", margin: "10px" }}>
            <a href="">Track account opening </a>
          </p>
          <p style={{ display: "inline-block", margin: "10px" }}>
            <a href="" className="mr-2">
              Track segment activation{" "}
            </a>
          </p>
          <br />
          <p style={{ display: "inline-block", margin: "10px" }}>
            <a href="">Intraday margins </a>
          </p>
          <p style={{ display: "inline-block", margin: "10px" }}>
            <a href="">Kite user manual</a>
          </p>
        </div>
        <div className="col-6 p-5">
          <h3 className="fs-3 mb-3">Featured</h3>
          <ol>
            <li>
              <a className="fs-5" href="" >Suspension of trading - IDFC Limited</a>
            </li>
            <li>
              <a className="fs-5" href="" >Rights Entitlements listing in October 2024</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
