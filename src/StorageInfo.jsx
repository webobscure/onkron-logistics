import React from 'react'
import './StorageInfo.css';
import { amazon, ebay, indexInfoBanner, shopify } from './assets';

export default function StorageInfo () {
  return (
    <section className="storage-info">
    <div className="container">
      <h1 className="storage-info__title">
      Marketplace Expertise
      </h1>

      <div className="storage-info__content">
        <div className="storage-left">
          <img src={indexInfoBanner} />
        </div>
        <div className="storage-right">
          <ul className="storage-features">
            <li className="storage-features__item">
             
              <h1>
              <svg
                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root"
                focusable="false"
                viewBox="0 0 12 10"
                aria-hidden="true"
                width="12"
                height="10" 
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.5631 2.42982C10.9499 1.85673 9.99951 1.85673 9.38634 2.42982L5.03279 6.49881L3.68379 5.12338C3.10128 4.55028 2.15086 4.49297 1.50702 5.03741C0.863186 5.58186 0.832526 6.47015 1.41504 7.0719L3.83709 9.53622C4.41961 10.1093 5.37003 10.1666 6.01387 9.62219C6.04453 9.59353 6.04453 9.59353 6.07518 9.56488L11.5631 4.43566C12.1456 3.89122 12.1456 3.00292 11.5631 2.42982Z"
                  fill="#DCF1DA"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2.84748 3.57605C2.22944 2.91989 1.22105 2.85428 0.537944 3.47763C-0.145159 4.10097 -0.177689 5.11801 0.440357 5.80697L3.01013 8.62844C3.62817 9.2846 4.63656 9.35022 5.31967 8.72687L11.2074 2.78866C11.8254 2.16531 11.8254 1.14827 11.2074 0.492117C10.5568 -0.164039 9.5484 -0.164039 8.89783 0.492117L4.27875 5.15082L2.84748 3.57605ZM4.80993 8.19185L4.81851 8.1832L4.81894 8.18277L4.81915 8.18256L4.81936 8.18235L4.81957 8.18213L4.81978 8.18192L4.8202 8.1815L4.82041 8.18129L10.6828 2.26858C11.0063 1.94233 11.0266 1.3846 10.6761 1.0055C10.3146 0.647501 9.78175 0.649733 9.42237 1.0122L4.25545 6.22343L2.30587 4.07839C1.95323 3.70809 1.40782 3.68383 1.03585 4.02326C0.664148 4.36244 0.632699 4.91342 0.988577 5.31191L3.55151 8.12588C3.90043 8.49249 4.43822 8.52019 4.80993 8.19185Z"
                  fill="#e31e24"
                ></path>
              </svg>
              Amazon FBA Preparation</h1>
              We prepare your products according to <img src={amazon} className='third-company__img'/> strict requirements, ensuring <br/> compliance and avoiding costly penalties or delays.
            </li>

            <li className="storage-features__item">
            <h1>
              <svg
                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root"
                focusable="false"
                viewBox="0 0 12 10"
                aria-hidden="true"
                width="12"
                height="10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.5631 2.42982C10.9499 1.85673 9.99951 1.85673 9.38634 2.42982L5.03279 6.49881L3.68379 5.12338C3.10128 4.55028 2.15086 4.49297 1.50702 5.03741C0.863186 5.58186 0.832526 6.47015 1.41504 7.0719L3.83709 9.53622C4.41961 10.1093 5.37003 10.1666 6.01387 9.62219C6.04453 9.59353 6.04453 9.59353 6.07518 9.56488L11.5631 4.43566C12.1456 3.89122 12.1456 3.00292 11.5631 2.42982Z"
                  fill="#DCF1DA"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2.84748 3.57605C2.22944 2.91989 1.22105 2.85428 0.537944 3.47763C-0.145159 4.10097 -0.177689 5.11801 0.440357 5.80697L3.01013 8.62844C3.62817 9.2846 4.63656 9.35022 5.31967 8.72687L11.2074 2.78866C11.8254 2.16531 11.8254 1.14827 11.2074 0.492117C10.5568 -0.164039 9.5484 -0.164039 8.89783 0.492117L4.27875 5.15082L2.84748 3.57605ZM4.80993 8.19185L4.81851 8.1832L4.81894 8.18277L4.81915 8.18256L4.81936 8.18235L4.81957 8.18213L4.81978 8.18192L4.8202 8.1815L4.82041 8.18129L10.6828 2.26858C11.0063 1.94233 11.0266 1.3846 10.6761 1.0055C10.3146 0.647501 9.78175 0.649733 9.42237 1.0122L4.25545 6.22343L2.30587 4.07839C1.95323 3.70809 1.40782 3.68383 1.03585 4.02326C0.664148 4.36244 0.632699 4.91342 0.988577 5.31191L3.55151 8.12588C3.90043 8.49249 4.43822 8.52019 4.80993 8.19185Z"
                  fill="#e31e24"
                ></path>
              </svg>
              Multi-Channel Integration</h1>
              Seamlessly connect your shop across <img src={amazon} className='third-company__img'/>, <img src={ebay} className='third-company__img'/>, <img src={shopify} className='third-company__img'/>, and other platforms with our integrated inventory and order management systems.
            </li>

            <li className="storage-features__item">
            <h1>
              <svg
                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root"
                focusable="false"
                viewBox="0 0 12 10"
                aria-hidden="true"
                width="12"
                height="10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.5631 2.42982C10.9499 1.85673 9.99951 1.85673 9.38634 2.42982L5.03279 6.49881L3.68379 5.12338C3.10128 4.55028 2.15086 4.49297 1.50702 5.03741C0.863186 5.58186 0.832526 6.47015 1.41504 7.0719L3.83709 9.53622C4.41961 10.1093 5.37003 10.1666 6.01387 9.62219C6.04453 9.59353 6.04453 9.59353 6.07518 9.56488L11.5631 4.43566C12.1456 3.89122 12.1456 3.00292 11.5631 2.42982Z"
                  fill="#DCF1DA"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2.84748 3.57605C2.22944 2.91989 1.22105 2.85428 0.537944 3.47763C-0.145159 4.10097 -0.177689 5.11801 0.440357 5.80697L3.01013 8.62844C3.62817 9.2846 4.63656 9.35022 5.31967 8.72687L11.2074 2.78866C11.8254 2.16531 11.8254 1.14827 11.2074 0.492117C10.5568 -0.164039 9.5484 -0.164039 8.89783 0.492117L4.27875 5.15082L2.84748 3.57605ZM4.80993 8.19185L4.81851 8.1832L4.81894 8.18277L4.81915 8.18256L4.81936 8.18235L4.81957 8.18213L4.81978 8.18192L4.8202 8.1815L4.82041 8.18129L10.6828 2.26858C11.0063 1.94233 11.0266 1.3846 10.6761 1.0055C10.3146 0.647501 9.78175 0.649733 9.42237 1.0122L4.25545 6.22343L2.30587 4.07839C1.95323 3.70809 1.40782 3.68383 1.03585 4.02326C0.664148 4.36244 0.632699 4.91342 0.988577 5.31191L3.55151 8.12588C3.90043 8.49249 4.43822 8.52019 4.80993 8.19185Z"
                  fill="#e31e24"
                ></path>
              </svg>
              Account Management</h1>
              Our experts optimize your marketplace presence with strategic account management, performance analysis, and growth recommendations.
            </li>

            <li className="storage-features__item">
            <h1>
              <svg
                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root"
                focusable="false"
                viewBox="0 0 12 10"
                aria-hidden="true"
                width="12"
                height="10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.5631 2.42982C10.9499 1.85673 9.99951 1.85673 9.38634 2.42982L5.03279 6.49881L3.68379 5.12338C3.10128 4.55028 2.15086 4.49297 1.50702 5.03741C0.863186 5.58186 0.832526 6.47015 1.41504 7.0719L3.83709 9.53622C4.41961 10.1093 5.37003 10.1666 6.01387 9.62219C6.04453 9.59353 6.04453 9.59353 6.07518 9.56488L11.5631 4.43566C12.1456 3.89122 12.1456 3.00292 11.5631 2.42982Z"
                  fill="#DCF1DA"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2.84748 3.57605C2.22944 2.91989 1.22105 2.85428 0.537944 3.47763C-0.145159 4.10097 -0.177689 5.11801 0.440357 5.80697L3.01013 8.62844C3.62817 9.2846 4.63656 9.35022 5.31967 8.72687L11.2074 2.78866C11.8254 2.16531 11.8254 1.14827 11.2074 0.492117C10.5568 -0.164039 9.5484 -0.164039 8.89783 0.492117L4.27875 5.15082L2.84748 3.57605ZM4.80993 8.19185L4.81851 8.1832L4.81894 8.18277L4.81915 8.18256L4.81936 8.18235L4.81957 8.18213L4.81978 8.18192L4.8202 8.1815L4.82041 8.18129L10.6828 2.26858C11.0063 1.94233 11.0266 1.3846 10.6761 1.0055C10.3146 0.647501 9.78175 0.649733 9.42237 1.0122L4.25545 6.22343L2.30587 4.07839C1.95323 3.70809 1.40782 3.68383 1.03585 4.02326C0.664148 4.36244 0.632699 4.91342 0.988577 5.31191L3.55151 8.12588C3.90043 8.49249 4.43822 8.52019 4.80993 8.19185Z"
                  fill="#e31e24"
                ></path>
              </svg>
              Listing Optimization</h1>
              Enhance product visibility with professional content creation, keyword optimization, and competitive pricing strategies that drive conversions.
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  )
}
