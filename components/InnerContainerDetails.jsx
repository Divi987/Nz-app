"use client";

import Link from "next/link";
import styles from "./styles.module.css";
import { getPNumCookies } from "@/app/action";
import { useEffect, useState } from "react";
import { deleteCookie, getCookie, getCookies, hasCookie } from "cookies-next";
import { fetcher } from "@/app/fetcher";
import useSWR from "swr";
import { useRouter } from "next/navigation";
import moment from "moment";
import SideView from "./SideView";
import Login from "./Login";
import LeftLogin from "./LeftLogin";

export default function InnerContainerDetails() {
  const [userData, setUserData] =  useState({
    dateF:"",
    firstName: "",
    familyName: "",
    dob: "",
    gender: "",
    visaType: "",
    visaStartDate: "",
    firstEntryBefore: "",
    passportNationality: "",
    passportNumber: "",
    clientNumber: "",
    visaExpiryDate: "",
    numberOfEntries: "",
    expiryDate: "",
    pdfLink: "",
    enquiryDate: "",
    validAsAt: ""
  });
  const [dateF, setDateF] = useState("");
  const [firstName, setFirstName] = useState("");
  const [familyName, setFamilyName] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [visaType, setVisaType] = useState("");
  const [visaStartDate, setVisaStartDate] = useState("");
  const [firstEntryBefore, setFirstEntryBefore] = useState("");
  const [passportNationality, setPassportNationality] = useState("");
  const [passportNumber, setPassportNumber] = useState("");
  const [clientNumber, setClientNumber] = useState("");
  const [visaExpiryDate, setVisaExpiryDate] = useState("");
  const [numberOfEntries, setNumberOfEntries] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [pdfLink, setPdfLink] = useState("#");
  const [enquiryDate, setEnquiryDate] = useState("");
  const [validAsAt, setValidAsAt] = useState("");
  let router = useRouter();

  let datenow = moment(new Date()).format("DD/MM/YYYY");

  useEffect(() => {
    const cookie = getCookie("cookieKey");
    let hasCookieExp = hasCookie("cookieKey");

    if (!hasCookieExp) {
      deleteCookie("cookieKey");
      router.push("/workentitlement/visaVerificationEnquiry.aspx");
    } else {
      let result = JSON.parse(cookie);
      var date1 = moment(result.visaStartDate, "DD-MM-YYYY").format(
        "Do MMMM YYYY"
      );
      setDateF(date1);
      //}

      //if (result && hasCookieExp===true ){

      // let result = data.user;
      let resultGender = result.gender.substring(0, 1);
      setFirstName(result.firstName);
      setFamilyName(result.familyName);
      setDob(result.dob);
      setGender(resultGender);
      setVisaType(result.visaType);
      setVisaStartDate(result.visaStartDate);
      setFirstEntryBefore(result.firstEntryBefore);
      setPassportNationality(result.passportNationality);
      setPassportNumber(result.passportNumber);
      setClientNumber(result.clientNumber);
      setVisaExpiryDate(result.visaExpiryDate);
      setNumberOfEntries(result.numberOfEntries);
      setExpiryDate(result.expiryDate);
      setPdfLink(result.pdfLink);
      setEnquiryDate(datenow);
      setValidAsAt(datenow);
    }
  }, []);

  return (
    <div className={styles.innercontainer}>
      <SideView />
      <Login />
      <LeftLogin />
      {/*<div className={styles.mainNav}>
        <ul>
          <li>
            <Link href="">VisaView</Link>

            <ul>
              <li></li>
              <li>
                <Link href="">Register Organisation</Link>
              </li>
              <li>
                <Link href="">Verify Visa Record</Link>
              </li>
              <li>
                <Link href="">My Visa Verification Service Account</Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className={styles.login}>
        <div>
          <span id="innerContainer_loginLabel" className={styles.fauxLabel}>
            Logged in as:
          </span>
          <span id="innerContainer_CurrentRepresentativeName">
            Manish Kumar
          </span>
          <Link id="innerContainer_logoutLinkControl" href="https://www.immigration.govt.nz/about-us/our-online-systems/visaview">
            logout
          </Link>
        </div>
      </div>
      <div
        id="innerContainer_LoggedInDiv2"
        className={`${styles.login} ${styles.firstLogin}`}
      >
        <div>
          <span className={styles.fauxLabel}>Acting for:</span>
          <span
            id="innerContainer_CurrentEmployer"
            className={styles.firstLoginFont}
          >
            Visa Verification Service
          </span>
        </div>
      </div> */}
      <div className={styles.content}>
        <h1>Visa Verification Result</h1>
        <h2>Result</h2>

        <p>
          The visa has been verified successfully using the details you
          provided. See below for the full conditions of the visa.
        </p>
        <p>
          Visa Verification Service checks are valid for the date stated on the
          enquiry result. Visa information may change.
        </p>
        <p>
          All dates given are in New Zealand time. Where a person is not yet in
          New Zealand, any visa they hold may be subject to the grant of entry
          permission.
        </p>
        <h2>Visa Details</h2>

        <div className={styles.form}>
          <div
            id="innerContainer_mainContent_leftColumn"
            className={`${styles.column} ${styles.div}`}
          >
            <div>
              <span className={styles.fauxLabel}>Family, First Name</span>
              <span>
                {familyName}, {firstName}
              </span>
            </div>
            <div>
              <span className={styles.fauxLabel}>Date of Birth</span>
              <span>{dob}</span>
            </div>
            <div>
              <span className={styles.fauxLabel}>Gender</span>
              <span>{gender}</span>
            </div>
            <div>
              <span className={styles.fauxLabel}>Passport Nationality</span>
              <span>{passportNationality}</span>
            </div>
            <div>
              <span className={styles.fauxLabel}>Passport Number</span>
              <span>{passportNumber} </span>
            </div>
            <div>
              <span className={styles.fauxLabel}>INZ Client Number</span>
              <span>{clientNumber}</span>
            </div>
          </div>
          <div
            id="innerContainer_mainContent_rightColumn"
            className={`${styles.column} ${styles.div}`}
          >
            <div>
              <span className={styles.fauxLabel}>Visa Type</span>
              <span>{visaType}</span>
            </div>
            <div>
              <span className={styles.fauxLabel}>Visa Start Date</span>
              <span>{visaStartDate}</span>
            </div>
            <div>
              <span className={styles.fauxLabel}>First Entry Before</span>
              <span>{firstEntryBefore}</span>
            </div>
            <div>
              <span className={styles.fauxLabel}>Number of Entries</span>
              <span>{numberOfEntries}</span>
            </div>
            <div>
              <span className={styles.fauxLabel}>Expiry Date Travel</span>
              <span>{visaExpiryDate}</span>
            </div>
            <div>
              <span className={styles.fauxLabel}>Visa Expiry</span>
              <span>{expiryDate}</span>
            </div>
          </div>
          <div id="innerContainer_mainContent_bottomRow" className={styles.div}>
            <div>
              <span className={styles.fauxLabel}>Visa Conditions</span>
              <span>
                On each entry into New Zealand you can stay up to 6 months at a
                time..Stay subject to grant of entry permission..The holder of
                this visa must comply with any instruction from a Medical
                Officer of Health which relates to a notifiable or quarantinable
                disease..The holder of this visa must comply with any order made
                under section 11 of the COVID-19 Public Health Response Act
                2020..The holder of this visa must comply with any order made
                under section 70 of the Health Act 1956 and listed in schedule 2
                of the COVID-19 Public Health Response Act 2020..The holder
                shall not study for more than 3 months in every 12 month period
                in NZ. .The holder shall not undertake employment in NZ..The
                last date you may travel and re-enter New Zealand is 01 May
                2024..The start date of this visa is {dateF}.
              </span>
            </div>
            <div>
              <span className={styles.fauxLabel}>Enquiry Date</span>
              <span>{enquiryDate}</span>
            </div>
            <div className={`clear-both`}>
              <span className={styles.fauxLabel}>Valid as at</span>
              <span>{validAsAt}</span>
            </div>
          </div>
        </div>
        <div>
          <span>
            <strong>Warning: </strong> if you download this visa information,
            you must ensure that you treat the personal information it contains
            in accordance with the Privacy Act 2020, including with respect to
            storage, access, disclosure to third parties, retention and
            disposal.
          </span>
          <div
            id="innerContainer_mainContent_divDownloadHistory"
            className={styles.buttons}
          >
            <div>
              <span className={styles.btnCorner1}></span>
              <Link
                name="ctl00$ctl00$innerContainer$mainContent$btnDownloadHistory"
                id="innerContainer_mainContent_btnDownloadHistory"
                tabIndex="9"
                target="_blank"
                download="visa"
                href={pdfLink !== null ? pdfLink : "#"}
              >
                Download Result{" "}
              </Link>
              <span className={styles.btnCorner2}></span>
            </div>
          </div>
          <p>
            <a
              id="innerContainer_mainContent_HelpLink1"
              href="https://www.immigration.govt.nz/formshelp/visaview/understanding-the-answer"
            >
              Questions about this result?
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
