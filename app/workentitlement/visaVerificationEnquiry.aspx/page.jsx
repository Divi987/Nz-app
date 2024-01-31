import Header from '@/components/Header';
import styles from '../../../components/styles.module.css'
import Breadcrumb from '@/components/Breadcrumb';
import InnerContainer from '@/components/InnerContainer';
import Footer from '@/components/Footer';

export const metadata = {
  title: "Visa Verification Enquiry",
};

export default function VisaVerificationEnquiry({ params}) {
  return (
    <>
    
    <div className={styles.mainHeader}>
      <div className={styles.pageWrapper}>
        <Header />
      </div>
        <Breadcrumb />
    </div>
    <div className={styles.mainInnerContainer}>
       <InnerContainer />
    </div>
    <Footer />
    </>
  )
}