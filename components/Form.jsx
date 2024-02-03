"use client";

import Link from "next/link";
import styles from "./styles.module.css";
import Image from "next/image";
import { atom, selector, useSetRecoilState } from "recoil";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { createCookies } from "@/app/action";
import { getCookie, setCookie } from "cookies-next";
import { fetcher } from "@/app/fetcher";
import useSWR from "swr";
import { userPassport } from "@/recoil/atoms/states";

export default function Form({ onSubmitForm, noMatchData }) {
  const [error, setError] = useState({
    fName: "",
    passportNum: "",
    nationality: "",
    dob: "",
    gender: "",
    startDate: ""
  });

  const [passportNumbers, SetPassportNumbers] = useState("");
  const [dnone, setDnone] = useState(`${styles.dnone}`);

  const familyNameControl = useRef();
  const nationalityControl = useRef();
  const passportNumber = useRef();
  const dob = useRef();
  const gender = useRef();
  const startDate = useRef();
  const setUserPass = useSetRecoilState(userPassport);
  let router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    const familyNameControls = familyNameControl.current.value;
    const nationalityControls = nationalityControl.current.value;
    const passportNumberRef = passportNumber.current.value;
    const dobs = dob.current.value;
    const genders = gender.current.value;
    const startDates = startDate.current.value;

    familyNameControls === ""
      ? setError((preState) => ({ ...preState, fName: "Family Name Needed" }))
      : setError((preState) => ({ ...preState, fName: "" }));
    console.log(error);
    nationalityControls === ""
      ? setError((preState) => ({
          ...preState,
          nationality: "Nationality Needed",
        }))
      : setError((preState) => ({ ...preState, nationality: "" }));
    passportNumberRef === ""
      ? setError((preState) => ({
          ...preState,
          passportNum: "Passport Number Needed",
        }))
      : setError((preState) => ({ ...preState, passportNum: "" }));
    dobs === ""
      ? setError((preState) => ({ ...preState, dob: "Date of Birth Needed" }))
      : setError((preState) => ({ ...preState, dob: "" }));
    genders === ""
      ? setError((preState) => ({ ...preState, gender: "Gender Needed" }))
      : setError((preState) => ({ ...preState, gender: "" }));
    startDates === ""
      ? setError((preState) => ({
          ...preState,
          startDate: "Start Date Needed",
        }))
      : setError((preState) => ({ ...preState, startDate: "" }));

    console.log(noMatchData);

    setUserPass(passportNumberRef);

    onSubmitForm(
      familyNameControls,
      nationalityControls,
      passportNumberRef,
      dobs,
      genders,
      startDates
    );
  };

  return (
    <>
      {error.fName ||
      error.passportNum ||
      error.dob ||
      error.nationality ||
      error.gender ||
      error.startDate || noMatchData ? (
        <div className={styles.error}>
          <ul>
            {error.fName ? <li>{error.fName}</li> : <></>}
            {error.passportNum ? <li>{error.passportNum}</li> : <></>}
            {error.nationality ? <li>{error.nationality}</li> : <></>}
            {error.dob ? <li>{error.dob}</li> : <></>}
            {error.gender ? <li>{error.gender}</li> : <></>}
            {error.startDate ? <li>{error.startDate}</li> : <></>}
            {noMatchData ? <li>{noMatchData}</li>: <></>}
          </ul>
        </div>
      ) : (
        <></>
      )}

      <form onSubmit={handleSubmit}>
        <fieldset className={styles.form}>
          <legend>Visa Verification Enquiry</legend>
          <div>
            <label C="innerContainer_mainContent_FamilyNameControl">
              Family Name<span>*</span>
            </label>
            <input
              name="FamilyNameControl"
              type="text"
              maxLength="50"
              id="FamilyNameControl"
              tabIndex="1"
              ref={familyNameControl}
            />
          </div>

          <div className={styles.hasButton}>
            <label htmlFor="innerContainer_mainContent_NationalityControl">
              Passport Nationality<span>*</span>
            </label>
            <select
              name="ctl00$ctl00$innerContainer$mainContent$NationalityControl"
              id="innerContainer_mainContent_NationalityControl"
              tabIndex="2"
              ref={nationalityControl}
            >
              <option value=""></option>
              <option value="Afghanistan">Afghanistan</option>
              <option value="Albania">Albania</option>
              <option value="Algeria">Algeria</option>
              <option value="Andorra">Andorra</option>
              <option value="Angola">Angola</option>
              <option value="Anguilla">Anguilla</option>
              <option value="Antigua & Barbuda">Antigua &amp; Barbuda</option>
              <option value="Argentina">Argentina</option>
              <option value="Armenia">Armenia</option>
              <option value="Aruba">Aruba</option>
              <option value="Australia">Australia</option>
              <option value="Austria">Austria</option>
              <option value="Azerbaijan">Azerbaijan</option>
              <option value="Bahamas">Bahamas</option>
              <option value="Bahrain">Bahrain</option>
              <option value="Bangladesh">Bangladesh</option>
              <option value="Barbados">Barbados</option>
              <option value="Belarus">Belarus</option>
              <option value="Belgium">Belgium</option>
              <option value="Belize">Belize</option>
              <option value="Benin">Benin</option>
              <option value="Bermuda">Bermuda</option>
              <option value="Bhutan">Bhutan</option>
              <option value="Bolivia">Bolivia</option>
              <option value="Bosnia & Herzegovina">
                Bosnia &amp; Herzegovina
              </option>
              <option value="Botswana">Botswana</option>
              <option value="Brazil">Brazil</option>
              <option value="Brunei Darussalam">Brunei Darussalam</option>
              <option value="Bulgaria">Bulgaria</option>
              <option value="Burkina Faso">Burkina Faso</option>
              <option value="Burundi">Burundi</option>
              <option value="Cambodia">Cambodia</option>
              <option value="Cameroon">Cameroon</option>
              <option value="Canada">Canada</option>
              <option value="Cape Verde">Cape Verde</option>
              <option value="Cayman Islands">Cayman Islands</option>
              <option value="Central African Republic">
                Central African Republic
              </option>
              <option value="Chad">Chad</option>
              <option value="Chile">Chile</option>
              <option value="China">China</option>
              <option value="47">Colombia</option>
              <option value="48">Comoros</option>
              <option value="49">Congo</option>
              <option value="51">Costa Rica</option>
              <option value="52">Croatia</option>
              <option value="53">Cuba</option>
              <option value="54">Cyprus</option>
              <option value="55">Czech Republic</option>
              <option value="58">Democratic Republic of Congo</option>
              <option value="59">Denmark</option>
              <option value="60">Djibouti</option>
              <option value="61">Dominica</option>
              <option value="62">Dominican Republic</option>
              <option value="65">Ecuador</option>
              <option value="66">Egypt</option>
              <option value="67">El Salvador</option>
              <option value="68">Equitorial Guinea</option>
              <option value="69">Eritrea</option>
              <option value="70">Estonia</option>
              <option value="71">Ethiopia</option>
              <option value="72">European Commission</option>
              <option value="73">Faeroe Islands</option>
              <option value="75">Federated States of Micronesia</option>
              <option value="76">Fiji</option>
              <option value="77">Finland</option>
              <option value="78">France</option>
              <option value="81">Gabon</option>
              <option value="82">Gambia</option>
              <option value="83">Georgia</option>
              <option value="84">Germany</option>
              <option value="85">Ghana</option>
              <option value="87">Great Britain</option>
              <option value="88">Greece</option>
              <option value="89">Greenland</option>
              <option value="90">Grenada</option>
              <option value="91">Guadeloupe</option>
              <option value="92">Guam</option>
              <option value="93">Guatemala</option>
              <option value="94">Guinea</option>
              <option value="95">Guinea - Bissau</option>
              <option value="96">Guyana</option>
              <option value="97">Haiti</option>
              <option value="98">Honduras</option>
              <option value="99">Hong Kong</option>
              <option value="100">Hungary</option>
              <option value="101">Iceland</option>
              <option value="Indian">India</option>
              <option value="103">Indonesia</option>
              <option value="104">Iran</option>
              <option value="105">Iraq</option>
              <option value="106">Ireland</option>
              <option value="107">Israel</option>
              <option value="108">Italy</option>
              <option value="109">Ivory Coast</option>
              <option value="110">Jamaica</option>
              <option value="111">Japan</option>
              <option value="112">Jordan</option>
              <option value="113">Kazakhstan</option>
              <option value="114">Kenya</option>
              <option value="115">Kiribati</option>
              <option value="116">Kosovo - Republic of</option>
              <option value="117">Kosovo - UN Mission in</option>
              <option value="118">Kuwait</option>
              <option value="119">Kyrgyzstan</option>
              <option value="120">Laos</option>
              <option value="121">Latvia</option>
              <option value="122">Lebanon</option>
              <option value="123">Lesotho</option>
              <option value="124">Liberia</option>
              <option value="125">Libya</option>
              <option value="126">Liechtenstein</option>
              <option value="127">Lithuania</option>
              <option value="128">Luxembourg</option>
              <option value="129">Macau</option>
              <option value="130">Macedonia</option>
              <option value="132">Madagascar</option>
              <option value="133">Malawi</option>
              <option value="134">Malaysia</option>
              <option value="135">Maldives</option>
              <option value="136">Mali</option>
              <option value="137">Malta</option>
              <option value="138">Marshall Islands</option>
              <option value="139">Martinique</option>
              <option value="140">Mauritania</option>
              <option value="141">Mauritius</option>
              <option value="142">Mayotte</option>
              <option value="143">Mexico</option>
              <option value="144">Moldova</option>
              <option value="145">Monaco</option>
              <option value="146">Mongolia</option>
              <option value="147">Montenegro</option>
              <option value="148">Montserrat</option>
              <option value="149">Morocco</option>
              <option value="150">Mozambique</option>
              <option value="151">Myanmar</option>
              <option value="152">Namibia</option>
              <option value="153">Nauru</option>
              <option value="154">Nepal</option>
              <option value="155">Netherlands</option>
              <option value="156">Netherlands Antilles</option>
              <option value="159">Nicaragua</option>
              <option value="160">Niger</option>
              <option value="161">Nigeria</option>
              <option value="164">North Korea</option>
              <option value="165">Northern Mariana Islands</option>
              <option value="166">Norway</option>
              <option value="168">Oman</option>
              <option value="170">Pakistan</option>
              <option value="171">Palau</option>
              <option value="172">Palestine</option>
              <option value="174">Panama</option>
              <option value="175">Papua New Guinea</option>
              <option value="176">Paraguay</option>
              <option value="177">Peru</option>
              <option value="178">Philippines</option>
              <option value="179">Pitcairn Islands</option>
              <option value="180">Poland</option>
              <option value="181">Portugal</option>
              <option value="182">Puerto Rico</option>
              <option value="183">Qatar</option>
              <option value="184">Reunion</option>
              <option value="185">Romania</option>
              <option value="186">Russia</option>
              <option value="187">Rwanda</option>
              <option value="188">Samoa</option>
              <option value="189">San Marino</option>
              <option value="190">Sao Tome &amp; Principe</option>
              <option value="191">Saudi Arabia</option>
              <option value="192">Senegal</option>
              <option value="193">Serbia</option>
              <option value="194">Serbia &amp; Montenegro</option>
              <option value="196">Seychelles</option>
              <option value="197">Sierra Leone</option>
              <option value="198">Singapore</option>
              <option value="199">Slovakia</option>
              <option value="200">Slovenia</option>
              <option value="201">Solomon Islands</option>
              <option value="202">Somalia</option>
              <option value="203">South Africa</option>
              <option value="204">South Korea</option>
              <option value="205">South Pacific commission</option>
              <option value="259">South Sudan</option>
              <option value="206">Soviet Union</option>
              <option value="207">Spain</option>
              <option value="208">Sri Lanka</option>
              <option value="210">St Kitts - Nevis</option>
              <option value="211">St Lucia</option>
              <option value="213">St Vincent and the Grenadines</option>
              <option value="216">Sudan</option>
              <option value="217">Suriname</option>
              <option value="218">Swaziland</option>
              <option value="219">Sweden</option>
              <option value="220">Switzerland</option>
              <option value="221">Syria</option>
              <option value="222">Taiwan</option>
              <option value="223">Tajikistan</option>
              <option value="224">Tanzania</option>
              <option value="225">Thailand</option>
              <option value="226">Timor Leste</option>
              <option value="227">Togo</option>
              <option value="229">Tonga</option>
              <option value="230">Trinidad and Tobago</option>
              <option value="231">Tunisia</option>
              <option value="232">Turkemenistan</option>
              <option value="233">Turkey</option>
              <option value="235">Tuvalu</option>
              <option value="236">Uganda</option>
              <option value="237">Ukraine</option>
              <option value="238">United Arab Emirates</option>
              <option value="239">United Nations</option>
              <option value="240">United States of America</option>
              <option value="242">Uruguay</option>
              <option value="245">Uzbekistan</option>
              <option value="246">Vanuatu</option>
              <option value="247">Vatican City</option>
              <option value="Venezuela">Venezuela</option>
              <option value="Vietnam">Vietnam</option>
              <option value="Western Sahara">Western Sahara</option>
              <option value="Yemen">Yemen</option>
              <option value="Yugoslavia">Yugoslavia</option>
              <option value="Zambia">Zambia</option>
              <option value="Zimbabwe">Zimbabwe</option>
            </select>
          </div>

          <div>
            <label htmlFor="innerContainer_mainContent_PassportNumberControl">
              Passport Number<span>*</span>
            </label>
            <input
              name="PassportNumberControl"
              type="text"
              maxLength="15"
              id="innerContainer_mainContent_PassportNumberControl"
              tabIndex="3"
              className={styles.medium}
              ref={passportNumber}
            />
          </div>

          <div className={styles.dob}>
            <label htmlFor="innerContainer_mainContent_DateOfBirthControl">
              Date of Birth <br /> dd/mm/yy<span>*</span>
            </label>
            <input
              name="ctl00$ctl00$innerContainer$mainContent$DateOfBirthControl"
              type="text"
              id="innerContainer_mainContent_DateOfBirthControl"
              tabIndex="4"
              className={styles.medium}
              ref={dob}
              placeholder=""
            />
            <Link href="#">
              <Image
                src="/images/icon-calendar.gif"
                id="innerContainer_mainContent_DatePickerControl1"
                alt="Select a date. "
                width={16}
                height={15}
              />
            </Link>
          </div>

          <div>
            <label htmlFor="innerContainer_mainContent_GenderControl">
              Gender<span>*</span>
            </label>
            <select
              name="ctl00$ctl00$innerContainer$mainContent$GenderControl"
              id="innerContainer_mainContent_GenderControl"
              tabIndex="5"
              className={styles.small}
              ref={gender}
            >
              <option value=""></option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          <div className={styles.dob}>
            <label htmlFor="innerContainer_mainContent_VisaStartDateControl">
              Visa Start Date
              <br /> dd/mm/yy<span>*</span>
            </label>
            <input
              name="ctl00$ctl00$innerContainer$mainContent$VisaStartDateControl"
              type="text"
              id="innerContainer_mainContent_VisaStartDateControl"
              tabIndex="6"
              className={styles.medium}
              ref={startDate}
            />

            <Link href="#">
              <Image
                src="/images/icon-calendar.gif"
                id="innerContainer_mainContent_DatePickerControl2"
                alt="Select a date. "
                width={16}
                height={15}
              />
            </Link>
          </div>

          <div className={styles.visaconsent}>
            <input
              id="innerContainer_mainContent_chkVisaConsent"
              type="checkbox"
              name="ctl00$ctl00$innerContainer$mainContent$chkVisaConsent"
              tabIndex="8"
            />
            <label htmlFor="innerContainer_mainContent_chkVisaConsent">
              The visa holder has consented to this check.
            </label>
          </div>
        </fieldset>
        <div className={styles.buttons}>
          <div>
            <span className={styles.btnCorner1}></span>
            <input
              type="submit"
              name="ctl00$ctl00$innerContainer$mainContent$CheckButton"
              value="Check Visa"
              id="innerContainer_mainContent_CheckButton"
              tabIndex="11"
            />
            <span className={styles.btnCorner2}></span>
            <div id="progressBar"></div>
          </div>
        </div>
      </form>
    </>
  );
}
