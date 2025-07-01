import React from "react";

function Brokerage() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 text-center border-top">
        <div className="col-8 p-4">
          <a href="" style={{ textDecoration: "none" }}>
            <h3 className="fs-5">Brokerage Calculator</h3>
          </a>
          <ul className="mt-4 text-muted" style={{textAlign:"left", lineHeight:"2.5", fontSize:"14px"}}>
            <li>
              Call & Trade and RMS auto-squareoff: Additional charges of $50 +
              GST per order.
            </li>
            <li>Digital contract notes will be sent via e-mail.</li>
            <li>
              Physical copy of contract notes, if required, shall be charges $20
              per contract note. Courier charges apply.
            </li>
            <li>
              For NRI account (non-PIS), 0.5% or $200 per executed order for
              equity (whichever is lower).
            </li>
            <li>
              For NRI account (PIS), 0.5% or $200 per executed order for equity
              (whichever is lower).
            </li>
            <li>
              If the account is in debit balance, any order placed will be
              charged $40 per executed order instead of $20 pper executed order.
            </li>
          </ul>
        </div>
        <div className="col-4 p-4">
          <a href="" style={{ textDecoration: "none" }}>
            <h3 className="fs-5">List of Charges</h3>
          </a>
        </div>
      </div>
      <h4 className=" text-muted text-center mt-4 mb-5">
        <a href="" style={{ textDecoration: "none" }}>
          Calculate your costs upfront{" "}
        </a>
        using our brokerage calculator
      </h4>
      <h2 className="text-center mb-4">Charges explained</h2>
      <div className="row">
        <div className="col-1"></div>
        <div
          className="col-5 text-right"
          style={{ display: "block", fontSize: "1.2rem" }}
        >
          <p style={{ fontSize: "1.2rem" }}>
            Securities/Commodities transaction tax
          </p>
          <p style={{ fontSize: "0.75rem" }}>
            Tax by the government when transacting on the exchanges. Charged as
            above on both buy and sell sides when trading equity delivery.
            Charged only on selling side when trading intraday or on F&O.
          </p>
          <p style={{ fontSize: "0.75rem" }}>
            When trading at Zerodha, STT/CTT can be a lot more than the
            brokerage we charge. Important to keep a tab.
          </p>
          <p style={{ fontSize: "1.2rem" }}>Transaction/Turnover Charges</p>
          <p style={{ fontSize: "0.75rem" }}>
            Charged by exchanges (NSE, BSE, MCX) on the value of your
            transactions. BSE has revised transaction
          </p>
          <p style={{ fontSize: "0.75rem" }}>
            charges in XC, XD, XT, Z and ZP groups to ₹10,000 per crore w.e.f
            01.01.2016. (XC and XD groups have been merged into a new group X
            w.e.f 01.12.2017)
          </p>
          <p style={{ fontSize: "0.75rem" }}>
            BSE has revised transaction charges in SS and ST groups to ₹1,00,000
            per crore of gross turnover.
          </p>
          <p style={{ fontSize: "0.75rem" }}>
            BSE has revised transaction charges for group A, B and other non
            exclusive scrips (non-exclusive scrips from group E, F, FC, G, GC,
            W, T) at ₹375 per crore of turnover on flat rate basis w.e.f.
            December 1, 2022
          </p>
          <p style={{ fontSize: "0.75rem" }}>
            BSE has revised transaction charges in M, MT, TS and MS groups to
            ₹275 per crore of gross turnover.
          </p>
          <p style={{ fontSize: "1.2rem" }}>Call & trade</p>
          <p style={{ fontSize: "0.75rem" }}>
            Additional charges of ₹50 per order for orders placed through a
            dealer at Zerodha including auto square off orders.
          </p>
          <p style={{ fontSize: "1.2rem" }}>Stamp charges</p>
          <p style={{ fontSize: "0.75rem" }}>
            Stamp charges by the Government of India as per the Indian Stamp Act
            of 1899 for transacting in instruments on the stock exchanges and
            depositories.
          </p>
          <p>NRI brokerage charges</p>
          <ui style={{ fontSize: "0.75rem" }}>
            <li>₹100 per order for futures and options.</li>
            <li>
              For a non-PIS account, 0.5% or ₹100 per executed order for equity
              (whichever is lower).
            </li>
            <li>
              For a PIS account, 0.5% or ₹200 per executed order for equity
              (whichever is lower).
            </li>
            <li>
              ₹500 + GST as yearly account maintenance charges (AMC) charges.
            </li>
          </ui>
          <p style={{ fontSize: "1.2rem" }}>Account with debit balance</p>
          <p style={{ fontSize: "0.75rem" }}>
            If the account is in debit balance, any order placed will be charged
            ₹40 per executed order instead of ₹20 per executed order.
          </p>
          <p>Charges for Investor's Protection Fund Trust (IPFT) by NSE</p>
          <ui style={{ fontSize: "0.75rem" }}>
            <li>
              Equity and Futures - ₹10 per crore + GST of the traded value.
            </li>
            <li>Options - ₹50 per crore + GST traded value (premium value).</li>
            <li>
              Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2 per
              lakh + GST of premium for Options.
            </li>
          </ui>
        </div>
        <div
          className="col-5 text-right"
          style={{ display: "block", fontSize: "1.2rem" }}
        >
          <p style={{ fontSize: "1.2rem" }}>GST</p>
          <p style={{ fontSize: "0.75rem" }}>
            Tax levied by the government on the services rendered. 18% of (
            brokerage + SEBI charges + transaction charges)
          </p>
          <p style={{ fontSize: "1.2rem" }}>SEBI Charges</p>
          <p style={{ fontSize: "0.75rem" }}>
            Charged at ₹10 per crore + GST by Securities and Exchange Board of
            India for regulating the markets.
          </p>
          <p style={{ fontSize: "1.2rem" }}>
            DP (Depository participant) charges
          </p>
          <p style={{ fontSize: "0.75rem" }}>
            ₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is
            charged on the trading account ledger when stocks are sold,
            irrespective of quantity. Female demat account holders (as first
            holder) will enjoy a discount of ₹0.25 per transaction on the CDSL
            fee. Debit transactions of mutual funds & bonds get an additional
            discount of ₹0.25 on the CDSL fee.
          </p>
          <p style={{ fontSize: "1.2rem" }}>Pledging charges</p>
          <p style={{ fontSize: "0.75rem" }}>
            ₹30 + GST per pledge request per ISIN.
          </p>
          <p style={{ fontSize: "1.2rem" }}>
            AMC (Account maintenance charges)
          </p>
          <p style={{ fontSize: "0.75rem" }}>
            For BSDA demat account: Zero charges if the holding value is less
            than ₹4,00,000. To learn more about BSDA. For non-BSDA demat
            accounts: ₹300/year + 18% GST charged quarterly (90 days). To learn
            more about AMC.
          </p>
          <p style={{ fontSize: "1.2rem" }}>Corporate action order charges</p>
          <p style={{ fontSize: "0.75rem" }}>
            ₹20 plus GST will be charged for OFS / buyback / takeover /
            delisting orders placed through Console.
          </p>
          <p style={{ fontSize: "1.2rem" }}>Off-market transfer charges</p>
          <p style={{ fontSize: "0.75rem" }}>
            ₹25 or 0.03% of the transfer value (whichever is higher).
          </p>
          <p style={{ fontSize: "1.2rem" }}>Physical CMR request</p>
          <p style={{ fontSize: "0.75rem" }}>
            First CMR request is free. ₹20 + ₹100 (courier charge) + 18% GST for
            subsequent requests.
          </p>
          <p style={{ fontSize: "1.2rem" }}>Payment gateway charges</p>
          <p style={{ fontSize: "0.75rem" }}>
            ₹9 + GST (Not levied on transfers done via UPI)
          </p>
          <p style={{ fontSize: "1.2rem" }}>Delayed Payment Charges</p>
          <p style={{ fontSize: "0.75rem" }}>
            Interest is levied at 18% a year or 0.05% per day on the debit
            balance in your trading account. Learn more.
          </p>
        </div>
        <div className="col-1"></div>
      </div>
      <div>
        <p className="mt-5">Disclaimer</p>
        <p
          style={{
            fontSize: "0.75rem",
            lineHeight: "1.8",
            marginBottom: "15px",
          }}
        >
          For Delivery based trades, a minimum of ₹0.01 will be charged per
          contract note. Clients who opt to receive physical contract notes will
          be charged ₹20 per contract note plus courier charges. Brokerage will
          not exceed the rates specified by SEBI and the exchanges. All
          statutory and regulatory charges will be levied at actuals. Brokerage
          is also charged on expired, exercised, and assigned options contracts.
          Free investments are available only for our retail individual clients.
          Companies, Partnerships, Trusts, and HUFs need to pay 0.1% or ₹20
          (whichever is less) as delivery brokerage. A brokerage of 0.25% of the
          contract value will be charged for contracts where physical delivery
          happens. For netted off positions in physically settled contracts, a
          brokerage of 0.1% will be charged.
        </p>
      </div>
      {/* <div className="container">
        <h2 class="charges-subheadings">Charges for account opening</h2>
        <div class="table-container">
          <table
            // style={{
            //   borderSpacing: "0",
            //   width: "100%",
            //   borderRadius: "3px",
            //   border: "1px solid #ddd",
            //   display: "table",
            //   borderCollapse: "separate",
            //   boxsizing: "border-box",
            //   textIndent: "initial",
            //   unicodeBidi: "isolate",
            // }}
          >
            <thead >
              <tr
                // style={{
                //   display: "table-row",
                //   verticalAlign: "inherit",
                //   unicodeBidi: "isolate",
                //   borderColor: "inherit",
                // }}
              >
                <th>Type of account</th>
                <th>Charges</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Online account</td>
                <td>
                  <span class="free-tag">free</span>
                </td>
              </tr>
              <tr>
                <td>Offline account</td>
                <td>
                  <span class="free-tag">free</span>
                </td>
              </tr>
              <tr>
                <td>NRI account (offline only)</td>
                <td>&#8377; 500</td>
              </tr>
              <tr>
                <td>
                  Partnership, LLP, HUF, or Corporate accounts (offline only)
                </td>
                <td>&#8377; 500</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div> */}
    </div>
  );
}

export default Brokerage;
