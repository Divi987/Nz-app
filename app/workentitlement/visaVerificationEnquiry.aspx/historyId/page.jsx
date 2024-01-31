"use client";

import Breadcrumb from "@/components/Breadcrumb";
import { userState, userStateSelector } from "@/components/Form";
import Header from "@/components/Header";
import styles from '../../../../components/styles.module.css'
import Footer from '@/components/Footer';
import { useRecoilValue } from "recoil";

export default function Page() {
  //const id = user.id;
  const value = useRecoilValue(userStateSelector);
  console.log(value);
  return (
    <>
      <div className={styles.mainHeader}>
        <div className={styles.pageWrapper}>
          <Header />
        </div>
        <Breadcrumb />
      </div>
      <div className={styles.mainInnerContainer}>
        
      </div>
      <Footer />
    </>
  );
}
