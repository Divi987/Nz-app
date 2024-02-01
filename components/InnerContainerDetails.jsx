import Link from "next/link";
import styles from "./styles.module.css";
import { getPNumCookies } from "@/app/action";
import { useEffect, useState } from "react";
import { getCookie, getCookies } from "cookies-next";
import { fetcher } from "@/app/fetcher";
import useSWR from 'swr'

 

const fetchData = async (pNumber) => {
    const fetchData = await fetch(`http://127.0.0.1:3000/api/users/${pNumber}`, {
    mode: 'cors',
    'Access-Control-Allow-Origin': '*'
});
const data = fetchData.json();
return data;
}

export default function InnerContainerDetails() {
    const [pNumber, setPNumber] = useState(null);

    const cookie = getCookie("cookieKey")
    console.log(cookie)
    
   // useEffect(() => {
     //   let cookie = getCookies("cookieKey");
      //  setPNumber(cookie);
    //}, [])

   let { data, error } = useSWR(`http://127.0.0.1:3000/api/users/${cookie}`, fetcher);

   console.log(data, error); 
   if (data){
        let result = data.user;
        let resultGender = (result.gender).subString(0, 1);
    }

  return (
    <div className={styles.innercontainer}>
      <div className={styles.mainNav}>
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
          <Link id="innerContainer_logoutLinkControl" href="">
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
      </div>
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
            className={styles.column}
          >
            <div>
              <span className={styles.fauxLabel}>Family, First Name</span>
              <span>{result.firstName}, {result.familyName}</span>
            </div>
            <div>
              <span className={styles.fauxLabel}>Date of Birth</span>
              <span>{result.dob}</span>
            </div>
            <div>
              <span className={styles.fauxLabel}>Gender</span>
              <span>M</span>
            </div>
            <div>
              <span className={styles.fauxLabel}>Passport Nationality</span>
              <span>{result.passportNationality}</span>
            </div>
            <div>
              <span className={styles.fauxLabel}>Passport Number</span>
              <span>{result.passportNumber} </span>
            </div>
            <div>
              <span className={styles.fauxLabel}>INZ Client Number</span>
              <span>79928066</span>
            </div>
          </div>
          <div
            id="innerContainer_mainContent_rightColumn"
            className={styles.column}
          >
            <div>
              <span className={styles.fauxLabel}>Visa Type</span>
              <span>Visitor</span>
            </div>
            <div>
              <span className={styles.fauxLabel}>Visa Start Date</span>
              <span>01/05/23</span>
            </div>
            <div>
              <span className={styles.fauxLabel}>First Entry Before</span>
              <span>Not applicable</span>
            </div>
            <div>
              <span className={styles.fauxLabel}>Number of Entries</span>
              <span>Multiple</span>
            </div>
            <div>
              <span className={styles.fauxLabel}>Expiry Date Travel</span>
              <span>01/05/24</span>
            </div>
            <div>
              <span className={styles.fauxLabel}>Visa Expiry</span>
              <span>01/05/24</span>
            </div>
          </div>
          <div id="innerContainer_mainContent_bottomRow">
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
                2024..The start date of this visa is 01 May 2023..Thi
              </span>
            </div>
            <div>
              <span className={styles.fauxLabel}>Enquiry Date</span>
              <span>01/02/24</span>
            </div>
            <div>
              <span className={styles.fauxLabel}>Valid as at</span>
              <span>01/02/24</span>
            </div>
          </div>
        </div>
          <div>
            <span>
              <strong>Warning: </strong> if you download this visa information,
              you must ensure that you treat the personal information it
              contains in accordance with the Privacy Act 2020, including with
              respect to storage, access, disclosure to third parties, retention
              and disposal.
            </span>
            <div
              id="innerContainer_mainContent_divDownloadHistory"
              className={styles.buttons}
            >
              <div>
                <span className={styles.btnCorner1}></span>
                <input
                  type="submit"
                  name="ctl00$ctl00$innerContainer$mainContent$btnDownloadHistory"
                  value="Download Result"
                  id="innerContainer_mainContent_btnDownloadHistory"
                  tabindex="9"
                />
                <span className={styles.btnCorner2}></span>
              </div>
            </div>
            <p>
            <a id="innerContainer_mainContent_HelpLink1" href="https://www.immigration.govt.nz/formshelp/visaview/understanding-the-answer" onClick="window.open('https://www.immigration.govt.nz/formshelp/visaview/understanding-the-answer','eespopup','toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=720,height=520,left=50,top=50'); return false;">Questions about this result?</a>
        </p>
          </div>
      </div>
    </div>
  );
}
