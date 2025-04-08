import React, { forwardRef } from 'react'
import './StorageInfo.css'
import { amazon, ebay, indexInfoBanner, shopify } from './assets'
import { useLanguage } from './context/LanguageContext.jsx'

const StorageInfo = forwardRef((props, ref) => {
  const { translations } = useLanguage()

  return (
    <section className="storage-info" ref={ref}>
      <div className="container">
        <h1 className="storage-info__title">
          {translations.storageinfo_title}
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
                    width="12"
                    height="10"
                    viewBox="0 0 12 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2.84748 3.57605C2.22944 2.91989 1.22105 2.85428 0.537944 3.47763C-0.145159 4.10097 -0.177689 5.11801 0.440357 5.80697L3.01013 8.62844C3.62817 9.2846 4.63656 9.35022 5.31967 8.72687L11.2074 2.78866C11.8254 2.16531 11.8254 1.14827 11.2074 0.492117C10.5568 -0.164039 9.5484 -0.164039 8.89783 0.492117L4.27875 5.15082L2.84748 3.57605ZM4.80993 8.19185L4.81851 8.1832L4.81894 8.18277L4.81915 8.18256L4.81936 8.18235L4.81957 8.18213L4.81978 8.18192L4.8202 8.1815L4.82041 8.18129L10.6828 2.26858C11.0063 1.94233 11.0266 1.3846 10.6761 1.0055C10.3146 0.647501 9.78175 0.649733 9.42237 1.0122L4.25545 6.22343L2.30587 4.07839C1.95323 3.70809 1.40782 3.68383 1.03585 4.02326C0.664148 4.36244 0.632699 4.91342 0.988577 5.31191L3.55151 8.12588C3.90043 8.49249 4.43822 8.52019 4.80993 8.19185Z"
                      fill="#e31e24"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2.84748 3.57605C2.22944 2.91989 1.22105 2.85428 0.537944 3.47763C-0.145159 4.10097 -0.177689 5.11801 0.440357 5.80697L3.01013 8.62844C3.62817 9.2846 4.63656 9.35022 5.31967 8.72687L11.2074 2.78866C11.8254 2.16531 11.8254 1.14827 11.2074 0.492117C10.5568 -0.164039 9.5484 -0.164039 8.89783 0.492117L4.27875 5.15082L2.84748 3.57605ZM4.80993 8.19185L4.81851 8.1832L4.81894 8.18277L4.81915 8.18256L4.81936 8.18235L4.81957 8.18213L4.81978 8.18192L4.8202 8.1815L4.82041 8.18129L10.6828 2.26858C11.0063 1.94233 11.0266 1.3846 10.6761 1.0055C10.3146 0.647501 9.78175 0.649733 9.42237 1.0122L4.25545 6.22343L2.30587 4.07839C1.95323 3.70809 1.40782 3.68383 1.03585 4.02326C0.664148 4.36244 0.632699 4.91342 0.988577 5.31191L3.55151 8.12588C3.90043 8.49249 4.43822 8.52019 4.80993 8.19185Z"
                      fill="#e31e24"
                    ></path>
                  </svg>
                  {translations.storageinfo_amazon_title}
                </h1>
                {translations.storageinfo_amazon_text}
                <img src={amazon} className="third-company__img" />
              </li>

              <li className="storage-features__item">
                <h1>
                  <svg
                    width="12"
                    height="10"
                    viewBox="0 0 12 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2.84748 3.57605C2.22944 2.91989 1.22105 2.85428 0.537944 3.47763C-0.145159 4.10097 -0.177689 5.11801 0.440357 5.80697L3.01013 8.62844C3.62817 9.2846 4.63656 9.35022 5.31967 8.72687L11.2074 2.78866C11.8254 2.16531 11.8254 1.14827 11.2074 0.492117C10.5568 -0.164039 9.5484 -0.164039 8.89783 0.492117L4.27875 5.15082L2.84748 3.57605ZM4.80993 8.19185L4.81851 8.1832L4.81894 8.18277L4.81915 8.18256L4.81936 8.18235L4.81957 8.18213L4.81978 8.18192L4.8202 8.1815L4.82041 8.18129L10.6828 2.26858C11.0063 1.94233 11.0266 1.3846 10.6761 1.0055C10.3146 0.647501 9.78175 0.649733 9.42237 1.0122L4.25545 6.22343L2.30587 4.07839C1.95323 3.70809 1.40782 3.68383 1.03585 4.02326C0.664148 4.36244 0.632699 4.91342 0.988577 5.31191L3.55151 8.12588C3.90043 8.49249 4.43822 8.52019 4.80993 8.19185Z"
                      fill="#e31e24"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2.84748 3.57605C2.22944 2.91989 1.22105 2.85428 0.537944 3.47763C-0.145159 4.10097 -0.177689 5.11801 0.440357 5.80697L3.01013 8.62844C3.62817 9.2846 4.63656 9.35022 5.31967 8.72687L11.2074 2.78866C11.8254 2.16531 11.8254 1.14827 11.2074 0.492117C10.5568 -0.164039 9.5484 -0.164039 8.89783 0.492117L4.27875 5.15082L2.84748 3.57605ZM4.80993 8.19185L4.81851 8.1832L4.81894 8.18277L4.81915 8.18256L4.81936 8.18235L4.81957 8.18213L4.81978 8.18192L4.8202 8.1815L4.82041 8.18129L10.6828 2.26858C11.0063 1.94233 11.0266 1.3846 10.6761 1.0055C10.3146 0.647501 9.78175 0.649733 9.42237 1.0122L4.25545 6.22343L2.30587 4.07839C1.95323 3.70809 1.40782 3.68383 1.03585 4.02326C0.664148 4.36244 0.632699 4.91342 0.988577 5.31191L3.55151 8.12588C3.90043 8.49249 4.43822 8.52019 4.80993 8.19185Z"
                      fill="#e31e24"
                    ></path>
                  </svg>
                  {translations.storageinfo_multichannel_title}
                </h1>
                {translations.storageinfo_multichannel_text}
                <img src={amazon} className="third-company__img" />
                <img src={ebay} className="third-company__img" />
                <img src={shopify} className="third-company__img" />
              </li>

              <li className="storage-features__item">
                <h1>
                  <svg
                    width="12"
                    height="10"
                    viewBox="0 0 12 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2.84748 3.57605C2.22944 2.91989 1.22105 2.85428 0.537944 3.47763C-0.145159 4.10097 -0.177689 5.11801 0.440357 5.80697L3.01013 8.62844C3.62817 9.2846 4.63656 9.35022 5.31967 8.72687L11.2074 2.78866C11.8254 2.16531 11.8254 1.14827 11.2074 0.492117C10.5568 -0.164039 9.5484 -0.164039 8.89783 0.492117L4.27875 5.15082L2.84748 3.57605ZM4.80993 8.19185L4.81851 8.1832L4.81894 8.18277L4.81915 8.18256L4.81936 8.18235L4.81957 8.18213L4.81978 8.18192L4.8202 8.1815L4.82041 8.18129L10.6828 2.26858C11.0063 1.94233 11.0266 1.3846 10.6761 1.0055C10.3146 0.647501 9.78175 0.649733 9.42237 1.0122L4.25545 6.22343L2.30587 4.07839C1.95323 3.70809 1.40782 3.68383 1.03585 4.02326C0.664148 4.36244 0.632699 4.91342 0.988577 5.31191L3.55151 8.12588C3.90043 8.49249 4.43822 8.52019 4.80993 8.19185Z"
                      fill="#e31e24"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2.84748 3.57605C2.22944 2.91989 1.22105 2.85428 0.537944 3.47763C-0.145159 4.10097 -0.177689 5.11801 0.440357 5.80697L3.01013 8.62844C3.62817 9.2846 4.63656 9.35022 5.31967 8.72687L11.2074 2.78866C11.8254 2.16531 11.8254 1.14827 11.2074 0.492117C10.5568 -0.164039 9.5484 -0.164039 8.89783 0.492117L4.27875 5.15082L2.84748 3.57605ZM4.80993 8.19185L4.81851 8.1832L4.81894 8.18277L4.81915 8.18256L4.81936 8.18235L4.81957 8.18213L4.81978 8.18192L4.8202 8.1815L4.82041 8.18129L10.6828 2.26858C11.0063 1.94233 11.0266 1.3846 10.6761 1.0055C10.3146 0.647501 9.78175 0.649733 9.42237 1.0122L4.25545 6.22343L2.30587 4.07839C1.95323 3.70809 1.40782 3.68383 1.03585 4.02326C0.664148 4.36244 0.632699 4.91342 0.988577 5.31191L3.55151 8.12588C3.90043 8.49249 4.43822 8.52019 4.80993 8.19185Z"
                      fill="#e31e24"
                    ></path>
                  </svg>
                  {translations.storageinfo_account_title}
                </h1>
                {translations.storageinfo_account_text}
              </li>

              <li className="storage-features__item">
                <h1>
                  <svg
                    width="12"
                    height="10"
                    viewBox="0 0 12 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2.84748 3.57605C2.22944 2.91989 1.22105 2.85428 0.537944 3.47763C-0.145159 4.10097 -0.177689 5.11801 0.440357 5.80697L3.01013 8.62844C3.62817 9.2846 4.63656 9.35022 5.31967 8.72687L11.2074 2.78866C11.8254 2.16531 11.8254 1.14827 11.2074 0.492117C10.5568 -0.164039 9.5484 -0.164039 8.89783 0.492117L4.27875 5.15082L2.84748 3.57605ZM4.80993 8.19185L4.81851 8.1832L4.81894 8.18277L4.81915 8.18256L4.81936 8.18235L4.81957 8.18213L4.81978 8.18192L4.8202 8.1815L4.82041 8.18129L10.6828 2.26858C11.0063 1.94233 11.0266 1.3846 10.6761 1.0055C10.3146 0.647501 9.78175 0.649733 9.42237 1.0122L4.25545 6.22343L2.30587 4.07839C1.95323 3.70809 1.40782 3.68383 1.03585 4.02326C0.664148 4.36244 0.632699 4.91342 0.988577 5.31191L3.55151 8.12588C3.90043 8.49249 4.43822 8.52019 4.80993 8.19185Z"
                      fill="#e31e24"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2.84748 3.57605C2.22944 2.91989 1.22105 2.85428 0.537944 3.47763C-0.145159 4.10097 -0.177689 5.11801 0.440357 5.80697L3.01013 8.62844C3.62817 9.2846 4.63656 9.35022 5.31967 8.72687L11.2074 2.78866C11.8254 2.16531 11.8254 1.14827 11.2074 0.492117C10.5568 -0.164039 9.5484 -0.164039 8.89783 0.492117L4.27875 5.15082L2.84748 3.57605ZM4.80993 8.19185L4.81851 8.1832L4.81894 8.18277L4.81915 8.18256L4.81936 8.18235L4.81957 8.18213L4.81978 8.18192L4.8202 8.1815L4.82041 8.18129L10.6828 2.26858C11.0063 1.94233 11.0266 1.3846 10.6761 1.0055C10.3146 0.647501 9.78175 0.649733 9.42237 1.0122L4.25545 6.22343L2.30587 4.07839C1.95323 3.70809 1.40782 3.68383 1.03585 4.02326C0.664148 4.36244 0.632699 4.91342 0.988577 5.31191L3.55151 8.12588C3.90043 8.49249 4.43822 8.52019 4.80993 8.19185Z"
                      fill="#e31e24"
                    ></path>
                  </svg>
                  {translations.storageinfo_listing_title}
                </h1>
                {translations.storageinfo_listing_text}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
})

StorageInfo.displayName = 'StorageInfo'
export default StorageInfo
