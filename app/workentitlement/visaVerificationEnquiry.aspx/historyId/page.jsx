"use client";

import Breadcrumb from "@/components/Breadcrumb";
import Header from "@/components/Header";
import styles from '../../../../components/styles.module.css'
import Footer from '@/components/Footer';
import InnerContainerDetails from "@/components/InnerContainerDetails";

export default function Page() {
  //const id = user.id;

  return (
    <>
      <div className={styles.mainHeader}>
        <div className={styles.pageWrapper}>
          <Header />
        </div>
        <Breadcrumb />
      </div>
      <div className={styles.mainInnerContainer}>
      <InnerContainerDetails />
      </div>
      <Footer />
    </>
  );
}
