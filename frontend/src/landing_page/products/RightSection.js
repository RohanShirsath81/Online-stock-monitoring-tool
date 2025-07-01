import React from "react";

function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="conatainer mt-5">
      <div className="row">
        <div className="col-2"></div>
        <div className="col-4 mt-5 p-5">
          <p className="mb-5"></p>
          <p className="mb-5"></p>
          <h1 className="text-normal mb-3 ">{productName}</h1>
          <p
            className="mb-3"
            style={{
              fontSize: "1rem",
              lineHeight: "1.8",
              marginBottom: "15px",
            }}
          >
            {productDescription}
          </p>
          <div className="my-3">
            <a href={learnMore} style={{ textDecoration: "none" }}>
              Learn more{" "}
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <div className="col-5">
          <img src={imageURL} />
        </div>
        <div className="col-1"></div>
      </div>
    </div>
  );
}

export default RightSection;
