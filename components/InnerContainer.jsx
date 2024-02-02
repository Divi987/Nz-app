"use client";

import Link from "next/link";
import styles from "./styles.module.css";
import Image from "next/image";
import Form, { userState } from "./Form";
import { useState } from "react";
import { createCookies } from "@/app/action";
import { setCookie } from "cookies-next";
import { fetcher } from "@/app/fetcher";
import useSWR from "swr";
import { useSetRecoilState } from "recoil";
import { useRouter } from "next/navigation";

export default function InnerContainer() {
  const [message, setMessage] = useState("");
  const [shouldFetch, setShouldFetch] = useState(false);
  const [passportNumber, SetPassportNumber] = useState(null);
  const setUsers = useSetRecoilState(userState);
  let router = useRouter();

  const { data, error, isLoading } = useSWR(
    shouldFetch ? `http://127.0.0.1:3000/api/users/${passportNumber}` : null,
    fetcher
  );

  const onSubmitForm = (
    familyNameControls,
    nationalityControls,
    passportNumbers,
    dobs,
    genders,
    startDates
  ) => {
    SetPassportNumber(passportNumbers);
    console.log(passportNumber);
    setShouldFetch(true);

    //const { data, error } = useSWR(`http://127.0.0.1:3000/api/users/${passportNumbers}`, fetcher);
    console.log(data, error);

    if (data) {
      const result = data.user;
      if (
        result.familyName === familyNameControls &&
        result.passportNationality === nationalityControls &&
        result.passportNumber === passportNumbers &&
        result.dob === dobs &&
        result.gender === genders &&
        result.visaStartDate === startDates
      ) {
        setUsers(data.user);
        const cookieJson = data.user.json();
        console.log(cookieJson);
        setCookie("cookieKey", data.user);
        router.push("/workentitlement/visaVerificationEnquiry.aspx/historyId");
      } else {
        setMessage("The data you entered does not match with our data!");
      }
    }

    //createCookies(passportNumbers)
  };

  const login2 = {
    login: "login",
    firstLogin: "firstLogin",
  };
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
        <h1>Visa Verification Enquiry</h1>

        <p></p>

        <div>
          <span>Enter the details of the visa to be verified.</span>
          <a
            id="innerContainer_mainContent_HelpLink1"
            href="https://www.immigration.govt.nz/formshelp/visaview/vvs-search-tips"
            style={{ position: "absolute", marginLeft: "220px" }}
          >
            Can't find your visa?
          </a>
        </div>
        <br />
        <div>
          Please enter these details exactly as they appear in the visa holder's
          current passport.
        </div>

        <p>&nbsp;</p>

        <Form onSubmitForm={onSubmitForm} />
      </div>
    </div>
  );
}
