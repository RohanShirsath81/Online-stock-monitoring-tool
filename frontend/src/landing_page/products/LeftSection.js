import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePLay,
  appStore,
}) {
  return (
    <div className="conatainer mt-5">
      <div className="row border-top p-5">
        <div className="col-1"></div>
        <div className="col-5 p-5">
          <img src={imageURL} />
        </div>
        <div className="col-1"></div>
        <div className="col-5 mt-3 p-5">
          <h1 className="text-normal mt-3">{productName}</h1>
          <p
            className="mt-4"
            style={{
              fontSize: "1rem",
              lineHeight: "1.8",
              marginBottom: "15px",
            }}
          >
            {productDescription}
          </p>
          <div className="my-3">
            <a href={tryDemo} style={{ textDecoration: "none" }}>
              Try Demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            <a
              href={learnMore}
              style={{ textDecoration: "none", marginLeft: "100px" }}
            >
              Learn more{" "}
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
          <div className="mt-4">
            <a href={googlePLay}>
              <img src="/images/googlePlayBadge.svg" />
            </a>
            <a href={appStore} style={{ marginLeft: "50px" }}>
              <img src="/images/appStoreBadge.svg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
