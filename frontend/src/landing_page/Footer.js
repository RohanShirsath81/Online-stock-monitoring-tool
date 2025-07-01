import React from "react";

function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(250, 250, 250)" }}>
        <div className="container border-top at mt-5">
            <div className="row mt-5">
            <div className="col">
                <img src="/images/logo.svg" alt="logo" style={{ width: "50%" }} />
                <p className="mt-3">
                &copy; 2010 - 2024, Zerodha Broking Ltd.
                <br />
                All rights reserved.
                </p>
                <div class="icon-row" style={{
                    display: "flex",
                    justifyContent: "left",
                    gap: "40px",
                    fontSize: "20px", 
                    color: "#777",
                    padding: "8px 0"
                    }}>

                    <a href='' style={{ textDecoration: "none", color: "#777" }}><i class="fa fa-linkedin" aria-hidden="true"></i></a>
                    
                    <a href='' style={{ textDecoration: "none", color: "#777" }}><i class="fa fa-facebook-official" aria-hidden="true"></i></a>

                    <a href='' style={{ textDecoration: "none", color: "#777" }}><i class="fa fa-instagram" aria-hidden="true"></i></a>
                </div>

                <div class="divider"></div>

                <div class="icon-row" style={{
                    display: "flex",
                    justifyContent: "left",
                    gap: "40px",
                    fontSize: "20px",
                    color: "#777",
                    padding: "8px 0"
                    }}>

                    <a href='' style={{ textDecoration: "none", color: "#777" }}><i class="fa fa-youtube-play" aria-hidden="true"></i></a>

                    <a href='' style={{ textDecoration: "none", color: "#777" }}><i class="fa fa-whatsapp" aria-hidden="true"></i></a>

                    <a href='' style={{ textDecoration: "none", color: "#777" }}><i class="fa fa-telegram" aria-hidden="true"></i></a>
                </div>
            </div>
            <div className="col"  style={{ marginRight: '20px' }}>
                <p style={{ fontWeight: 'normal', marginBottom: '20px' }}>Company</p>
                <a href="" style={{ textDecoration: "none", color: "#777", lineHeight:"1.8"}}>About</a>
                <br />  
                <a href="" style={{ textDecoration: "none", color: "#777", lineHeight:"1.8" }}>Products</a>
                <br />  
                <a href="" style={{ textDecoration: "none", color: "#777", lineHeight:"1.8" }}>Pricing</a>
                <br />
                <a href="" style={{ textDecoration: "none", color: "#777", lineHeight:"1.8" }}>Referral programme</a>
                <br />
                <a href="" style={{ textDecoration: "none", color: "#777", lineHeight:"1.8" }}>Careers</a>
                <br />
                <a href="" style={{ textDecoration: "none", color: "#777", lineHeight:"1.8" }}>Zerodha.tech</a>
                <br />
                <a href="" style={{ textDecoration: "none", color: "#777", lineHeight:"1.8" }}>Press & media</a>
                <br />
                <a href="" style={{ textDecoration: "none", color: "#777", lineHeight:"1.8" }}>Zerodha Cares (CSR)</a>
                <br />
            </div>
            <div className="col"  style={{ marginRight: '20px' }}>
                <p style={{ fontWeight: 'normal', marginBottom: '20px' }}>Support</p>
                <a href="" style={{ textDecoration: "none", color: "#777", lineHeight:"1.8" }}>Contact us</a>
                <br />
                <a href="" style={{ textDecoration: "none", color: "#777", lineHeight:"1.8" }}>Support portal</a>
                <br />
                <a href="" style={{ textDecoration: "none", color: "#777", lineHeight:"1.8" }}>Z-Connect blog</a>
                <br />
                <a href="" style={{ textDecoration: "none", color: "#777", lineHeight:"1.8" }}>List of charges</a>
                <br />
                <a href="" style={{ textDecoration: "none", color: "#777", lineHeight:"1.8" }}>Downloads & resources</a>
                <br />
                <a href="" style={{ textDecoration: "none", color: "#777", lineHeight:"1.8" }}>Videos</a>
                <br />
                <a href="" style={{ textDecoration: "none", color: "#777", lineHeight:"1.8" }}>Market overview</a>
                <br />
                <a href="" style={{ textDecoration: "none", color: "#777", lineHeight:"1.8" }}>How to file a complaint?</a>
                <br />
                <a href="" style={{ textDecoration: "none", color: "#777", lineHeight:"1.8" }}>Status of your complaints</a>
                <br />
            </div>
            <div className="col"  style={{ marginRight: '20px' }}>
                <p style={{ fontWeight: 'normal', marginBottom: '20px' }}>Account</p>
                <a href="" style={{ textDecoration: "none", color: "#777", lineHeight:"1.8" }}>Open an account</a>
                <br />
                <a href="" style={{ textDecoration: "none", color: "#777", lineHeight:"1.8" }}>Fund transfer</a>
                <br />
            </div>
            </div>
            <div className="mt-5 text-muted" style={{ fontSize: "12px" }}>
            <p>
                Zerodha Broking Ltd.: Member of NSE, BSE MCX - SEBI Registration
                no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
                Broking Ltd.- SEBI Registration no.: IN-DP-431-2019 Commodity
                Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001
                - SEBI Registration no.: INZ000038238 Registered Address: Zerodha
                Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence
                Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka,
                India. For any complaints pertaining to securities broking please
                write to complaints@zerodha.com, for DP related to dp@zerodha.com.
                Please ensure you carefully read the Risk Disclosure Document as
                prescribed by SEBI | ICF
            </p>

            <p>
                Procedure to file a complaint on SEBI SCORES: Register on SCORES
                portal. Mandatory details for filing complaints on SCORES: Name,
                PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
                Communication, Speedy redressal of the grievances
            </p>

            <p>
                Smart Online Dispute Resolution | Grievances Redressal Mechanism
            </p>

            <p>
                Investments in securities market are subject to market risks; read
                all the related documents carefully before investing.
            </p>

            <p>
                Attention investors: 1) Stock brokers can accept securities as
                margins from clients only by way of pledge in the depository system
                w.e.f September 01, 2020. 2) Update your e-mail and phone number
                with your stock broker / depository participant and receive OTP
                directly from depository on your e-mail and/or mobile number to
                create pledge. 3) Check your securities / MF / bonds in the
                consolidated account statement issued by NSDL/CDSL every month.
            </p>

            <p>
                "Prevent unauthorised transactions in your account. Update your
                mobile numbers/email IDs with your stock brokers. Receive
                information of your transactions directly from Exchange on your
                mobile/email at the end of the day. Issued in the interest of
                investors. KYC is one time exercise while dealing in securities
                markets - once KYC is done through a SEBI registered intermediary
                (broker, DP, Mutual Fund etc.), you need not undergo the same
                process again when you approach another intermediary." Dear
                Investor, if you are subscribing to an IPO, there is no need to
                issue a cheque. Please write the Bank account number and sign the
                IPO application form to authorize your bank to make payment in case
                of allotment. In case of non allotment the funds will remain in your
                bank account. As a business we don't give stock tips, and have not
                authorized anyone to trade on behalf of others. If you find anyone
                claiming to be part of Zerodha and offering such services, please
                create a ticket here.
            </p>
            </div>
        </div>
        <div
            style={{
            display: "flex",
            justifyContent: "center",
            gap: "15px",
            fontSize: "14px",
            color: "#777",
            padding: "20px 0"
            }}
            >
            <a href="#" style={{ textDecoration: "none", color: "#777" }}>
            NSE
            </a>
            <a href="#" style={{ textDecoration: "none", color: "#777" }}>
            BSE
            </a>
            <a href="#" style={{ textDecoration: "none", color: "#777" }}>
            MCX
            </a>
            <a href="#" style={{ textDecoration: "none", color: "#777" }}>
            Terms & conditions
            </a>
            <a href="#" style={{ textDecoration: "none", color: "#777" }}>
            Policies & procedures
            </a>
            <a href="#" style={{ textDecoration: "none", color: "#777" }}>
            Privacy policy
            </a>
            <a href="#" style={{ textDecoration: "none", color: "#777" }}>
            Disclosure
            </a>
            <a href="#" style={{ textDecoration: "none", color: "#777" }}>
            For investor's attention
            </a>
            <a href="#" style={{ textDecoration: "none", color: "#777" }}>
            Investor charter
            </a>
        </div>
    </footer>
  );
}

export default Footer;


