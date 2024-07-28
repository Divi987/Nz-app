import Link from "next/link";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import { deleteCookie, getCookie, hasCookie } from "cookies-next";
import { useRouter } from "next/navigation";

export default function Login(){
  let router = useRouter();
  const [userName, setUserName] = useState('');

  useEffect(() => {
      const userCookie = getCookie("cookieUserName");
    
      let hasCookieExp = hasCookie("cookieUserName");
      console.log(hasCookieExp)
      if (!hasCookieExp) {
        deleteCookie("cookieUserName");
        router.push("/visas/login");
      } else {
        const userCookieValue = JSON.parse(userCookie);
        console.log(userCookieValue);
        setUserName(userCookieValue);
      }
    },[])
    return (
        <div className={styles.login}>
        <div>
          <span id="innerContainer_loginLabel" className={styles.fauxLabel}>
            Logged in as:
          </span>
          <span id="innerContainer_CurrentRepresentativeName">
           {userName === "" ? 'Manish Kumar' : userName}
          </span>
          <Link id="innerContainer_logoutLinkControl" href="https://www.immigration.govt.nz/about-us/our-online-systems/visaview">
            logout
          </Link>
        </div>
      </div>
    )
}