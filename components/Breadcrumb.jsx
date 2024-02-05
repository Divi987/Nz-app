import Link from 'next/link'
import styles from './styles.module.css'

export default function Breadcrumb({ title }) {
  return (
    <div className={styles.breadcrumbs}>
      <div className={styles.breadcrumbsMain}>
        <ul>
          <li> <Link href="https://www.immigration.govt.nz/">Home</Link></li>
          <li> <Link href="https://www.immigration.govt.nz/visaview-employers/">VisaView</Link></li>
          <li>{title}</li>
        </ul>
      </div>
    </div>
  )
}