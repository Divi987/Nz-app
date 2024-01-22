import Header from '@/components/Header';
import styles from '../../../components/styles.module.css'

export const metadata = {
  title: "Visa Verification Enquiry",
};

export default function VisaVerificationEnquiry() {
  return (
    <div className={styles.mainHeader}>
      <div className={styles.pageWrapper}>
        <Header />
      </div>
    </div>
  )
}