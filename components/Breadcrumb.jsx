import Link from 'next/link'
import styles from './styles.module.css'

export default function Breadcrumb() {
  return (
    <div className={styles.breadcrumbs}>
      <div className={styles.breadcrumbsMain}>
        <ul>
          <li> <Link href="">Home</Link></li>
          <li> <Link href="">VisaView</Link></li>
          <li>Visa Verification Enquiry</li>
        </ul>
      </div>
    </div>
  )
}