import Link from "next/link";
import styles from "./styles.module.css";

export default function InnerContainer() {
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

        <p>&nbsp;</p>

        <div>
          <span>Enter the details of the visa to be verified.</span>
          <a
            id="innerContainer_mainContent_HelpLink1"
            href="https://www.immigration.govt.nz/formshelp/visaview/vvs-search-tips"
            onclick="window.open('https://www.immigration.govt.nz/formshelp/visaview/vvs-search-tips','eespopup','toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=720,height=520,left=50,top=50'); return false;"
            style={{position:'absolute', marginLeft:'220px'}}
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
      </div>
    </div>
  );
}
