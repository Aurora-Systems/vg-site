"use client"
import React, { useState } from 'react';

export default function PrivacyPolicy(){
  const [activeSection, setActiveSection] = useState<string>('');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <div className="min-h-screen container overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@400;600;700&family=DM+Sans:wght@400;500;600;700&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'DM Sans', sans-serif;
          line-height: 1.7;
          color: #1e293b;
        }

        h1, h2, h3, h4, h5, h6 {
          font-family: 'Crimson Pro', serif;
          font-weight: 700;
        }

        .privacy-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem;
        }

        .header-section {
          background: linear-gradient(135deg,rgb(137, 4, 4) 0%,rgb(159, 1, 1) 100%);
          color: white;
          padding: 4rem 2rem;
          margin-bottom: 3rem;
          border-radius: 0 0 2rem 2rem;
          box-shadow: 0 20px 60px rgba(138, 30, 30, 0.3);
        }

        .header-content {
          max-width: 1200px;
          margin: 0 auto;
        }

        .main-title {
          font-size: 3.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          letter-spacing: -0.02em;
        }

        .subtitle {
          font-size: 1.125rem;
          opacity: 0.9;
          font-weight: 400;
        }

        .content-wrapper {
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 3rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .sidebar {
          position: sticky;
          top: 2rem;
          height: fit-content;
          background: white;
          padding: 1.5rem;
          border-radius: 1rem;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          border: 1px solid rgba(127, 29, 29, 0.1);
        }

        .sidebar-title {
          font-size: 0.875rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: #b91c1c;
          margin-bottom: 1rem;
        }

        .nav-list {
          list-style: none;
        }

        .nav-item {
          margin-bottom: 0.5rem;
        }

        .nav-link {
          display: block;
          padding: 0.5rem 0.75rem;
          color: #64748b;
          text-decoration: none;
          border-radius: 0.5rem;
          font-size: 0.875rem;
          transition: all 0.2s;
          cursor: pointer;
        }

        .nav-link:hover {
          background: #f1f5f9;
          color: #7f1d1d;
        }

        .nav-link.active {
          background: #fef2f2;
          color: #7f1d1d;
          font-weight: 600;
        }

        .main-content {
          background: white;
          padding: 3rem;
          border-radius: 1rem;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          border: 1px solid rgba(127, 29, 29, 0.1);
        }

        .section {
          margin-bottom: 3rem;
        }

        .section-title {
          font-size: 2rem;
          color: #7f1d1d;
          margin-bottom: 1.5rem;
          padding-bottom: 0.75rem;
          border-bottom: 3px solid #b91c1c;
        }

        .subsection-title {
          font-size: 1.5rem;
          color: #991b1b;
          margin-top: 2rem;
          margin-bottom: 1rem;
        }

        .paragraph {
          margin-bottom: 1rem;
          text-align: justify;
        }

        .list {
          margin-left: 2rem;
          margin-bottom: 1rem;
        }

        .list-item {
          margin-bottom: 0.5rem;
        }

        .table-container {
          overflow-x: auto;
          margin: 1.5rem 0;
        }

        table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.875rem;
        }

        th {
          background: #7f1d1d;
          color: white;
          padding: 0.75rem;
          text-align: left;
          font-weight: 600;
        }

        td {
          padding: 0.75rem;
          border-bottom: 1px solid #e2e8f0;
        }

        tr:hover {
          background: #f8fafc;
        }

        .definition-term {
          font-weight: 600;
          color: #991b1b;
        }

        @media (max-width: 1024px) {
          .content-wrapper {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .sidebar {
            position: static;
          }

          .main-title {
            font-size: 2.5rem;
          }

          .main-content {
            padding: 2rem;
          }
        }

        @media (max-width: 768px) {
          .privacy-container {
            padding: 1rem;
          }

          .header-section {
            padding: 2.5rem 1.25rem;
            margin-bottom: 2rem;
            border-radius: 0 0 1.25rem 1.25rem;
          }

          .main-title {
            font-size: 2rem;
            line-height: 1.2;
          }

          .subtitle {
            font-size: 1rem;
          }

          .content-wrapper {
            gap: 1.5rem;
          }

          .sidebar {
            padding: 1rem;
            max-height: 220px;
            overflow-y: auto;
            -webkit-overflow-scrolling: touch;
          }

          .sidebar-title {
            font-size: 0.8125rem;
            margin-bottom: 0.75rem;
          }

          .nav-link {
            padding: 0.5rem 0.625rem;
            font-size: 0.8125rem;
            min-height: 44px;
            display: flex;
            align-items: center;
          }

          .main-content {
            padding: 1.5rem;
            border-radius: 0.75rem;
          }

          .section-title {
            font-size: 1.5rem;
            margin-bottom: 1rem;
            padding-bottom: 0.5rem;
          }

          .subsection-title {
            font-size: 1.25rem;
            margin-top: 1.5rem;
            margin-bottom: 0.75rem;
          }

          .paragraph {
            font-size: 0.9375rem;
            margin-bottom: 0.875rem;
          }

          .list {
            margin-left: 1.25rem;
            margin-bottom: 0.875rem;
          }

          .list-item {
            font-size: 0.9375rem;
          }

          table {
            font-size: 0.8125rem;
          }

          th, td {
            padding: 0.5rem 0.375rem;
          }
        }

        @media (max-width: 640px) {
          .privacy-container {
            padding: 0.75rem;
          }

          .header-section {
            padding: 2rem 1rem;
            margin-bottom: 1.5rem;
            border-radius: 0 0 1rem 1rem;
          }

          .main-title {
            font-size: 1.625rem;
          }

          .subtitle {
            font-size: 0.9375rem;
          }

          .sidebar {
            padding: 0.875rem;
            max-height: 200px;
          }

          .main-content {
            padding: 1rem;
            border-radius: 0.5rem;
          }

          .section-title {
            font-size: 1.25rem;
          }

          .subsection-title {
            font-size: 1.125rem;
            margin-top: 1.25rem;
          }

          .paragraph {
            font-size: 0.875rem;
            text-align: left;
          }

          .list {
            margin-left: 1rem;
          }

          .list-item {
            font-size: 0.875rem;
          }

          .table-container {
            margin: 1rem 0;
            -webkit-overflow-scrolling: touch;
          }

          table {
            font-size: 0.75rem;
            min-width: 320px;
          }

          th, td {
            padding: 0.5rem 0.25rem;
          }
        }

        @media (max-width: 480px) {
          .privacy-container {
            padding: 0.5rem;
          }

          .header-section {
            padding: 1.5rem 0.75rem;
          }

          .main-title {
            font-size: 1.5rem;
          }

          .subtitle {
            font-size: 0.875rem;
          }

          .main-content {
            padding: 0.875rem;
          }

          .section-title {
            font-size: 1.125rem;
          }

          .subsection-title {
            font-size: 1rem;
          }
        }

        @supports (padding: max(0px)) {
          .privacy-container {
            padding-left: max(0.5rem, env(safe-area-inset-left));
            padding-right: max(0.5rem, env(safe-area-inset-right));
          }

          .header-section {
            padding-left: max(1rem, env(safe-area-inset-left));
            padding-right: max(1rem, env(safe-area-inset-right));
          }
        }
      `}</style>

      

      <div className="privacy-container">
        <div className="content-wrapper">
          <aside className="sidebar">
            <h2 className="sidebar-title">Table of Contents</h2>
            <nav>
              <ul className="nav-list">
                <li className="nav-item">
                  <a className={`nav-link ${activeSection === 'introduction' ? 'active' : ''}`} onClick={() => scrollToSection('introduction')}>1. Introduction</a>
                </li>
                <li className="nav-item">
                  <a className={`nav-link ${activeSection === 'definitions' ? 'active' : ''}`} onClick={() => scrollToSection('definitions')}>2. Definitions</a>
                </li>
                <li className="nav-item">
                  <a className={`nav-link ${activeSection === 'information-collect' ? 'active' : ''}`} onClick={() => scrollToSection('information-collect')}>3. Information We Collect</a>
                </li>
                <li className="nav-item">
                  <a className={`nav-link ${activeSection === 'lawful-basis' ? 'active' : ''}`} onClick={() => scrollToSection('lawful-basis')}>4. Lawful Basis for Processing</a>
                </li>
                <li className="nav-item">
                  <a className={`nav-link ${activeSection === 'how-we-use' ? 'active' : ''}`} onClick={() => scrollToSection('how-we-use')}>5. How We Use Your Information</a>
                </li>
                <li className="nav-item">
                  <a className={`nav-link ${activeSection === 'data-minimization' ? 'active' : ''}`} onClick={() => scrollToSection('data-minimization')}>6. Data Minimization</a>
                </li>
                <li className="nav-item">
                  <a className={`nav-link ${activeSection === 'sharing' ? 'active' : ''}`} onClick={() => scrollToSection('sharing')}>7. Sharing and Disclosure</a>
                </li>
                <li className="nav-item">
                  <a className={`nav-link ${activeSection === 'retention' ? 'active' : ''}`} onClick={() => scrollToSection('retention')}>8. Data Retention</a>
                </li>
                <li className="nav-item">
                  <a className={`nav-link ${activeSection === 'children' ? 'active' : ''}`} onClick={() => scrollToSection('children')}>9. Children and Minors</a>
                </li>
                <li className="nav-item">
                  <a className={`nav-link ${activeSection === 'privacy-rights' ? 'active' : ''}`} onClick={() => scrollToSection('privacy-rights')}>10. Your Privacy Rights</a>
                </li>
                <li className="nav-item">
                  <a className={`nav-link ${activeSection === 'security' ? 'active' : ''}`} onClick={() => scrollToSection('security')}>11. Data Security</a>
                </li>
                <li className="nav-item">
                  <a className={`nav-link ${activeSection === 'breach' ? 'active' : ''}`} onClick={() => scrollToSection('breach')}>12. Data Breach Notification</a>
                </li>
                <li className="nav-item">
                  <a className={`nav-link ${activeSection === 'cookies' ? 'active' : ''}`} onClick={() => scrollToSection('cookies')}>13. Cookies and Tracking</a>
                </li>
                <li className="nav-item">
                  <a className={`nav-link ${activeSection === 'third-party' ? 'active' : ''}`} onClick={() => scrollToSection('third-party')}>14. Third-Party Links</a>
                </li>
                <li className="nav-item">
                  <a className={`nav-link ${activeSection === 'policy-changes' ? 'active' : ''}`} onClick={() => scrollToSection('policy-changes')}>15. Privacy Policy Changes</a>
                </li>
                <li className="nav-item">
                  <a className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`} onClick={() => scrollToSection('contact')}>16. Contact Information</a>
                </li>
                <li className="nav-item">
                  <a className={`nav-link ${activeSection === 'jurisdiction' ? 'active' : ''}`} onClick={() => scrollToSection('jurisdiction')}>17. Special Provisions</a>
                </li>
                <li className="nav-item">
                  <a className={`nav-link ${activeSection === 'international' ? 'active' : ''}`} onClick={() => scrollToSection('international')}>18. International Transfers</a>
                </li>
                <li className="nav-item">
                  <a className={`nav-link ${activeSection === 'dispute' ? 'active' : ''}`} onClick={() => scrollToSection('dispute')}>19. Dispute Resolution</a>
                </li>
                <li className="nav-item">
                  <a className={`nav-link ${activeSection === 'final' ? 'active' : ''}`} onClick={() => scrollToSection('final')}>20. Final Provisions</a>
                </li>
                <li className="nav-item">
                  <a className={`nav-link ${activeSection === 'appendices' ? 'active' : ''}`} onClick={() => scrollToSection('appendices')}>21. Appendices</a>
                </li>
              </ul>
            </nav>
          </aside>

          <main className="main-content">
            <section id="introduction" className="section">
              <h2 className="section-title">1. INTRODUCTION</h2>
              <p className="paragraph">
                LekkerClap ("we," "our," "us," or "Company") is committed to protecting your privacy and ensuring you have a positive experience on our platform. This Privacy Policy explains how we collect, use, disclose, and safeguard information when you use our mobile application and website (collectively, the "Platform"), including features that allow you to send distress alerts and connect with emergency services and nearby LekkerClap users.
              </p>
              <p className="paragraph">
                This Privacy Policy applies to all users globally and complies with applicable data protection laws, including the Protection of Personal Information Act (POPIA) [South Africa], the European Union's General Data Protection Regulation (GDPR), the California Consumer Privacy Act and California Privacy Rights Act (CCPA/CPRA), the Children's Online Privacy Protection Act (COPPA), the Zimbabwe Cyber and Data Protection Act [Chapter 12:07], and other applicable privacy regulations in jurisdictions where our Platform operates or where our users are located.
              </p>
              <p className="paragraph">
                Please read this Privacy Policy carefully. By accessing and using LekkerClap, you acknowledge that you have read, understood, and agree to be bound by all the provisions of this Privacy Policy.
              </p>
            </section>

            <section id="definitions" className="section">
              <h2 className="section-title">2. DEFINITIONS</h2>
              <p className="paragraph">For purposes of this Privacy Policy:</p>
              <ul className="list">
                <li className="list-item">
                  <span className="definition-term">"Personal Data"</span> or <span className="definition-term">"Personal Information"</span> means any information relating to an identified or identifiable natural person, including but not limited to: names, email addresses, phone numbers, physical addresses, precise and approximate location data, IP addresses, device identifiers, biometric data collected during identity verification, contact information from your device, and any other information that can be used to identify you directly or indirectly.
                </li>
                <li className="list-item">
                  <span className="definition-term">"Processing"</span> means any operation performed on personal data, including collection, use, storage, transmission, combination, alteration, deletion, or disclosure.
                </li>
                <li className="list-item">
                  <span className="definition-term">"Data Subject"</span> means any individual to whose personal data we have access through the Platform.
                </li>
                <li className="list-item">
                  <span className="definition-term">"Data Controller"</span> means LekkerClap, the entity that determines the purposes and means of processing personal data.
                </li>
                <li className="list-item">
                  <span className="definition-term">"Data Processor"</span> means any entity processing personal data on behalf of LekkerClap, including third-party service providers such as Didit (identity verification provider).
                </li>
                <li className="list-item">
                  <span className="definition-term">"Emergency Services"</span> means authorized public emergency response entities, including police, fire, medical, and other first responders designated to receive distress alerts.
                </li>
                <li className="list-item">
                  <span className="definition-term">"Distress Alert"</span> means the urgent notification transmitted through the Platform when a user activates the emergency feature to request immediate assistance.
                </li>
              </ul>
            </section>

            <section id="information-collect" className="section">
              <h2 className="section-title">3. INFORMATION WE COLLECT</h2>
              
              <h3 className="subsection-title">3.1 Information You Provide Directly</h3>
              <p className="paragraph">
                <strong>Account Registration Information:</strong> - Full name - Email address - Phone number - Date of birth (to verify age eligibility) - Password and security questions - Emergency contact information - Profile information (optional)
              </p>
              <p className="paragraph">
                <strong>Identity Verification Information (via Didit):</strong> When you register as a user aged 13 and above on LekkerClap, we use Didit, a third-party identity verification provider, to verify your identity and age. During this verification process, we collect: - Government-issued identification data (passport, national ID, driver's license) - Facial recognition biometric data (photograph/video for liveness detection) - Name, date of birth, and identification number from government documents - Verification metadata and results
              </p>
              <p className="paragraph">
                <strong>Distress Alert Information:</strong> - Your precise GPS location (latitude and longitude) at the time of alert activation - Approximate location based on cell tower or WiFi data - Timestamp of the alert - Nature or category of emergency (if provided) - Voice, video, or message content in the distress alert - Your real-time location updates during active alert response - Device type, operating system, and connectivity information
              </p>
              <p className="paragraph">
                <strong>Communication Information:</strong> - Messages you send to nearby LekkerClap users responding to your alert - Voice or video call recordings (if you enable this feature) - User-to-user chat history with responders - Feedback and ratings provided after alert resolution
              </p>
              <p className="paragraph">
                <strong>Device and Technical Information:</strong> - Device model, manufacturer, and operating system version - Device identifier (IMEI, IDFA, or Android Advertising ID) - IP address and ISP information - Mobile network information (carrier, signal strength) - App version and installation date - Crash reports and performance diagnostics - WiFi network names and MAC addresses
              </p>
              <p className="paragraph">
                <strong>Contacts Information:</strong> - With your permission, we access and store your device's contact list to help identify trusted emergency contacts
              </p>
              <p className="paragraph">
                <strong>Usage Information:</strong> - Features accessed and frequency of use - Time spent in the application - Content you view or interact with - Search queries within the platform - Settings and preferences you configure - Platform pages or features you visit - Referral information (how you discovered us)
              </p>

              <h3 className="subsection-title">3.2 Information Collected Automatically</h3>
              <p className="paragraph">
                <strong>Location Data:</strong> - Precise location (GPS coordinates) when the app is active and you permit location access - Approximate location derived from IP address or cellular data - Location history relative to your activities is NOT continuously tracked – precise location is temporary and alert-scoped only
              </p>
              <p className="paragraph">
                <strong>Cookies and Similar Technologies:</strong> - Session identifiers and cookies for authentication - Analytics cookies to track user engagement and app performance - Functional cookies to remember your preferences - Marketing/advertising cookies (only with your explicit consent) - Web beacons and pixel tags for tracking page interactions
              </p>
              <p className="paragraph">
                <strong>Biometric Data:</strong> - Fingerprint data (if you enable biometric authentication) - Facial recognition data (collected during identity verification with Didit)
              </p>
              <p className="paragraph">
                <strong>Health and Safety Data:</strong> - Emergency status indicators and alert history - Response times and resolution metrics - Injury or incident descriptions provided in alerts - Medical information you voluntarily share in distress alerts
              </p>

              <h3 className="subsection-title">3.3 Information from Third Parties</h3>
              <p className="paragraph">
                <strong>From Didit (Identity Verification Provider):</strong> - Age verification results and confirmed identity status - Verification success/failure indicators - Compliance attestation regarding identity confirmation
              </p>
              <p className="paragraph">
                <strong>From Emergency Services:</strong> - Confirmation of alert receipt and dispatch information - Response and resolution status - Incident reports or follow-up information they choose to share
              </p>
              <p className="paragraph">
                <strong>From Other Users:</strong> - Information reported about your account (abuse reports, complaints) - Ratings and feedback provided after interactions
              </p>
              <p className="paragraph">
                <strong>From Service Providers:</strong> - Payment processors provide transaction verification data - Analytics providers furnish aggregated usage statistics - Cloud hosting providers share security incident reports
              </p>
              <p className="paragraph">
                <strong>From Your Device:</strong> - Permissions granted for location, contacts, camera, microphone - Mobile operating system data about app performance and crashes
              </p>
            </section>

            <section id="lawful-basis" className="section">
              <h2 className="section-title">4. LAWFUL BASIS FOR PROCESSING (POPIA-ALIGNED)</h2>
              <p className="paragraph">
                LekkerClap processes your personal data based on the following lawful bases under POPIA and other applicable laws:
              </p>

              <h3 className="subsection-title">4.1 POPIA Lawful Bases</h3>
              <p className="paragraph">
                POPIA does not require consent for everything. We process personal information based on one or more of the following lawful grounds:
              </p>

              <p className="paragraph">
                <strong>A. Performance of a Contract (PRIMARY)</strong> Applies to: - Account creation and user registration - Location sharing during active alerts - Alert delivery and emergency response coordination - Communication with responders
              </p>
              <p className="paragraph">
                Why this works: You download the app to receive the emergency alert service. Processing your location data during alerts is essential to deliver this service you have contracted for. We do not need your consent for this processing – it is mandatory for service delivery.
              </p>
              <p className="paragraph">
                Your Rights: - This processing cannot be objected to as it is necessary for contract performance - We cannot refuse service if you object to contract-based processing - However, you retain the right to delete your account and stop using the service
              </p>

              <p className="paragraph">
                <strong>B. Legitimate Interest (SECONDARY)</strong> Applies to: - Community awareness and proximity matching of responders - Anonymised safety analytics to improve the service - Abuse prevention and fraud detection - Platform security and integrity - Service improvement and feature development
              </p>
              <p className="paragraph">
                POPIA Requirement: Processing must be reasonable, necessary, and balanced. Your privacy interests cannot be overridden by our legitimate interests.
              </p>
              <p className="paragraph">
                Your Privacy Zone Architecture Supports This: - We mask or reduce location precision inside your privacy zones - Precise data is temporary and alert-scoped only - We do not continuously track location outside alerts - We do not sell location data
              </p>
              <p className="paragraph">
                Balancing Test: - Our interest in safety analytics serves the public interest (better emergency response) - Your interest in privacy is protected by data minimization and anonymisation - The benefit to community safety outweighs the limited impact on your privacy
              </p>
              <p className="paragraph">
                Your Rights: - You have the right to object to this processing - We must then cease processing unless we can demonstrate compelling legitimate interests - Objection does not affect contract-based processing (alerts will still work)
              </p>

              <p className="paragraph">
                <strong>C. Consent (LIMITED, EXPLICIT)</strong> Use consent only for: - Optional notification settings and frequency - Analytics and performance data collection (beyond what is necessary for service) - Marketing communications - Background location access (if ever enabled) - Any future data use beyond what is described in this policy
              </p>
              <p className="paragraph">
                Consent Standards (POPIA requirement): - Freely given (not forced or pre-ticked) - Specific (clear description of what is consented to) - Informed (you understand what you are consenting to) - Revocable (you can withdraw consent at any time)
              </p>
              <p className="paragraph">
                We will NOT: - Rely on consent alone for essential service delivery - Bundle consent with other terms - Make consent mandatory for using the platform - Make withdrawal of consent difficult
              </p>
              <p className="paragraph">
                Your Rights: - You can withdraw consent at any time through account settings - Withdrawal is effective immediately for future processing - Past processing under consent remains valid
              </p>

              <p className="paragraph">
                <strong>D. Protection of Legitimate Interests (Life or Physical Safety)</strong> Applies to: - Emergency alerts where your life or someone else's may be at risk - Medical or safety incidents requiring immediate response - Situations where processing is necessary to protect vital interests
              </p>
              <p className="paragraph">
                POPIA Legal Basis: POPIA explicitly permits processing to protect the vital interests (life or physical safety) of a data subject or another person. This is a separate lawful basis from consent or contract.
              </p>
              <p className="paragraph">
                Example: If you activate a distress alert during what appears to be a violent crime, we can share your precise location with emergency services without needing your consent – your safety overrides consent requirements.
              </p>
              <p className="paragraph">
                Your Rights: - You cannot object to this processing when vital interests are at stake - However, we apply this basis narrowly – only when there is genuine risk to life or safety - After the emergency passes, normal privacy protections resume
              </p>
            </section>

            <section id="how-we-use" className="section">
              <h2 className="section-title">5. HOW WE USE YOUR INFORMATION</h2>

              <h3 className="subsection-title">5.1 Core Service Delivery</h3>
              <ul className="list">
                <li className="list-item"><strong>Emergency Alert Transmission:</strong> To send your distress alert to nearby LekkerClap users and authorize emergency services</li>
                <li className="list-item"><strong>Location Routing:</strong> To identify and notify users within geographic proximity to your emergency location</li>
                <li className="list-item"><strong>User Verification:</strong> To confirm your identity and age eligibility through Didit verification, ensuring only appropriate users access the platform</li>
                <li className="list-item"><strong>Emergency Coordination:</strong> To coordinate response efforts between platform users and official emergency services</li>
                <li className="list-item"><strong>Alert Management:</strong> To track alert status, response times, and resolution outcomes</li>
                <li className="list-item"><strong>User Communication:</strong> To facilitate messages and communications between you and responders</li>
              </ul>

              <h3 className="subsection-title">5.2 Account Management and Security</h3>
              <ul className="list">
                <li className="list-item"><strong>Account Maintenance:</strong> Creating and maintaining your user account, processing registration requests</li>
                <li className="list-item"><strong>Authentication:</strong> Verifying your identity through login credentials, biometric authentication, and identity verification</li>
                <li className="list-item"><strong>Security and Fraud Prevention:</strong> Detecting unauthorized access, preventing fraud, and protecting account integrity</li>
                <li className="list-item"><strong>Compliance Verification:</strong> Confirming ongoing age eligibility and parental consent status for minor users</li>
                <li className="list-item"><strong>Password Recovery:</strong> Enabling account recovery and security credential reset</li>
              </ul>

              <h3 className="subsection-title">5.3 Safety and Emergency Response</h3>
              <ul className="list">
                <li className="list-item"><strong>Safety Monitoring:</strong> Analyzing distress alerts for patterns indicating genuine emergencies versus misuse</li>
                <li className="list-item"><strong>Emergency Dispatch Coordination:</strong> Sharing location and emergency details with authorized emergency services</li>
                <li className="list-item"><strong>Response Tracking:</strong> Monitoring response times, user safety outcomes, and incident resolution</li>
                <li className="list-item"><strong>Emergency Service Integration:</strong> Transmitting alerts to official emergency services systems</li>
                <li className="list-item"><strong>Incident Investigation:</strong> Investigating reports of platform misuse, false alerts, or emergency service abuse</li>
              </ul>

              <h3 className="subsection-title">5.4 Communications</h3>
              <ul className="list">
                <li className="list-item"><strong>Transactional Emails/SMS:</strong> Sending account confirmations, password resets, alert acknowledgments, and service notifications</li>
                <li className="list-item"><strong>Alert Notifications:</strong> Pushing urgent notifications about distress alerts and emergency responses</li>
                <li className="list-item"><strong>Safety Alerts:</strong> Notifying you of suspicious account activity or security concerns</li>
                <li className="list-item"><strong>Service Updates:</strong> Informing you of platform changes, maintenance, and feature updates</li>
                <li className="list-item"><strong>Parental Communications:</strong> Sending required privacy notices and consent requests to parents/guardians of minor users</li>
              </ul>

              <h3 className="subsection-title">5.5 Analytics and Service Improvement</h3>
              <ul className="list">
                <li className="list-item"><strong>Usage Analytics:</strong> Analyzing how users interact with the platform to improve features and user experience</li>
                <li className="list-item"><strong>Performance Monitoring:</strong> Tracking app stability, crash rates, and technical performance</li>
                <li className="list-item"><strong>Aggregate Reporting:</strong> Creating anonymized, aggregate statistics about emergency response patterns</li>
                <li className="list-item"><strong>A/B Testing:</strong> Testing platform modifications to optimize emergency alert delivery and response coordination</li>
                <li className="list-item"><strong>Trend Analysis:</strong> Understanding geographic and temporal patterns in emergency alert usage</li>
              </ul>

              <h3 className="subsection-title">5.6 Legal and Compliance</h3>
              <ul className="list">
                <li className="list-item"><strong>Regulatory Compliance:</strong> Fulfilling obligations under POPIA, GDPR, CCPA/CPRA, COPPA, Zimbabwe data protection laws, and other applicable regulations</li>
                <li className="list-item"><strong>Law Enforcement:</strong> Responding to warrants, subpoenas, court orders, and lawful government requests</li>
                <li className="list-item"><strong>Dispute Resolution:</strong> Addressing complaints, resolving disputes, and defending legal claims</li>
                <li className="list-item"><strong>Data Retention Compliance:</strong> Maintaining records necessary to demonstrate regulatory compliance</li>
                <li className="list-item"><strong>Audit Preparation:</strong> Maintaining documentation for data protection audits and regulatory investigations</li>
              </ul>

              <h3 className="subsection-title">5.7 Legitimate Business Interests</h3>
              <ul className="list">
                <li className="list-item"><strong>Platform Development:</strong> Building new features, testing functionality, and improving platform architecture</li>
                <li className="list-item"><strong>Marketing and Business Development:</strong> Understanding user demographics to improve targeting of relevant services</li>
                <li className="list-item"><strong>Data Quality:</strong> Ensuring accuracy of stored personal data and removing duplicate or outdated records</li>
                <li className="list-item"><strong>Customer Support:</strong> Providing responsive support by understanding user history and interaction patterns</li>
                <li className="list-item"><strong>Risk Assessment:</strong> Evaluating data protection risks and implementing appropriate safeguards</li>
              </ul>

              <h3 className="subsection-title">5.8 Prohibited Uses</h3>
              <p className="paragraph">
                LekkerClap explicitly does NOT use your personal data for: - Selling personal information for commercial purposes (except as required by law or with explicit opt-in consent) - Profiling for discriminatory purposes - Automated decision-making that produces legal or similarly significant effects (except for identity verification) - Tracking behavioral patterns for non-emergency purposes - Third-party advertising without separate explicit consent - Any purpose incompatible with the emergency services nature of the platform
              </p>
            </section>

            <section id="data-minimization" className="section">
              <h2 className="section-title">6. DATA MINIMIZATION AND PURPOSE LIMITATION</h2>

              <h3 className="subsection-title">6.1 Principle of Minimization</h3>
              <p className="paragraph">
                LekkerClap adheres to the data minimization principle and collects only the personal data that is: - Relevant and necessary for the stated purposes - Proportionate to the service being provided - Not excessive relative to the emergency response function
              </p>
              <p className="paragraph">
                We do not collect: - Political opinions or religious beliefs - Trade union membership - Genetic data (except biometric data necessary for identity verification and authentication) - Sexual orientation or gender identity (except where voluntarily provided for emergency contact purposes) - Criminal convictions or offense data (except as required by law) - Financial account information (except payment method for service fees)
              </p>

              <h3 className="subsection-title">6.2 Purpose Limitation</h3>
              <p className="paragraph">
                Your personal data will not be used for purposes other than those stated in this Privacy Policy without obtaining your prior written consent. In particular:
              </p>
              <ul className="list">
                <li className="list-item">
                  Location data is collected solely for emergency alert routing and will not be used for:
                  <ul className="list" style={{marginLeft: '2rem'}}>
                    <li className="list-item">Behavioral tracking or profiling</li>
                    <li className="list-item">Commercial advertising or marketing (except as needed to notify you of platform features)</li>
                    <li className="list-item">Sale to location brokers or data aggregators</li>
                    <li className="list-item">Any non-emergency purpose unless you explicitly consent</li>
                  </ul>
                </li>
                <li className="list-item">
                  Identity verification data collected via Didit is retained only for:
                  <ul className="list" style={{marginLeft: '2rem'}}>
                    <li className="list-item">Confirming age eligibility</li>
                    <li className="list-item">Preventing account fraud and duplicate accounts</li>
                    <li className="list-item">Satisfying COPPA and age-of-consent legal requirements</li>
                    <li className="list-item">Purposes explicitly permitted by Didit's separate privacy policy (which we encourage you to review)</li>
                  </ul>
                </li>
                <li className="list-item">
                  Biometric data (facial recognition) is used only for:
                  <ul className="list" style={{marginLeft: '2rem'}}>
                    <li className="list-item">Identity verification during registration (via Didit)</li>
                    <li className="list-item">Biometric authentication for account login (if you enable this feature)</li>
                    <li className="list-item">Liveness detection to prevent spoofing and deepfakes</li>
                    <li className="list-item">Will not be used for surveillance, law enforcement matching, or third-party disclosure without explicit consent</li>
                  </ul>
                </li>
              </ul>
            </section>

            <section id="sharing" className="section">
              <h2 className="section-title">7. SHARING AND DISCLOSURE OF INFORMATION</h2>

              <h3 className="subsection-title">7.1 Essential Service Providers and Processors</h3>
              <p className="paragraph">
                LekkerClap shares personal data with the following categories of service providers acting as Data Processors:
              </p>
              <p className="paragraph">
                <strong>Identity Verification:</strong> - Didit – Third-party identity verification and age confirmation provider - Processes: Government ID data, biometric facial recognition data, name, date of birth - Purpose: Age verification, identity confirmation, fraud prevention - Legal basis: Contract (service provision) and legitimate interest (security) - Didit's Privacy Policy: [Link to Didit Privacy Policy] - Data retention: As specified in Didit's terms (typically 30-90 days post-verification)
              </p>
              <p className="paragraph">
                <strong>Emergency Services Integration:</strong> - Emergency Dispatch Centers and Emergency Services – Official emergency response agencies - Processes: Your precise location, alert content, phone number, emergency details - Purpose: Emergency dispatch and response coordination - Legal basis: Vital interests (life-saving emergency response) and contract performance - Data retention: Per emergency services record retention requirements (typically 18-36 months) - Note: These transfers are mandated by law and occur without requiring additional consent
              </p>
              <p className="paragraph">
                <strong>Cloud Infrastructure and Data Hosting:</strong> - Cloud Service Providers (e.g., AWS, Google Cloud, Azure) - Processes: All platform data including account information, location history, alert records - Purpose: Secure data storage, backup, platform infrastructure - Legal basis: Contract and legitimate interest (service delivery and security) - Geographic location: Data may be stored in multiple jurisdictions - Sub-processor notification: Provided as required
              </p>
              <p className="paragraph">
                <strong>Analytics and Monitoring:</strong> - Analytics Providers (e.g., Firebase, Amplitude, Mixpanel) - Processes: Aggregated usage data, crash logs, performance metrics (personal identifiers are removed) - Purpose: Understanding platform performance and user engagement - Legal basis: Legitimate interest (service improvement) - Data retention: Typically 12 months
              </p>
              <p className="paragraph">
                <strong>Payment Processing:</strong> - Payment Service Providers (e.g., Stripe, PayPal) - Processes: Payment method details, transaction amounts, billing information - Purpose: Processing subscription fees and in-app purchases - Legal basis: Contract (service provision) - Note: Payment data is not stored by LekkerClap; providers maintain PCI-DSS compliance
              </p>
              <p className="paragraph">
                <strong>Communication Services:</strong> - SMS/Email Service Providers (e.g., Twilio, SendGrid) - Processes: Phone numbers, email addresses, message content - Purpose: Delivering transactional notifications and alerts - Legal basis: Contract and legitimate interest (service delivery)
              </p>
              <p className="paragraph">
                <strong>Customer Support:</strong> - Help Desk and Support Providers (e.g., Zendesk, Intercom) - Processes: Support tickets, communication history, user account details - Purpose: Providing technical support and resolving issues - Legal basis: Contract (service provision) and legitimate interest (customer service)
              </p>

              <h3 className="subsection-title">7.2 Required Legal Disclosures</h3>
              <p className="paragraph">
                We may disclose personal information without your consent when legally required to do so:
              </p>
              <ul className="list">
                <li className="list-item"><strong>Law Enforcement and Government Requests:</strong> We will disclose information in response to lawful warrants, subpoenas, court orders, or government agency requests, as required by law</li>
                <li className="list-item"><strong>Legal Claims and Proceedings:</strong> We may disclose information when necessary to defend against legal claims, enforce our Terms of Service, or protect our rights and property</li>
                <li className="list-item"><strong>Public Safety:</strong> We may disclose information when we believe in good faith that disclosure is necessary to prevent harm, fraud, or illegal activity</li>
                <li className="list-item"><strong>Emergency Response:</strong> Location and alert information is automatically shared with emergency services without delay when a distress alert is activated</li>
              </ul>
              <p className="paragraph">
                When legally permitted, we will provide notice to the affected data subject of any legal disclosure request, unless prohibited by law.
              </p>

              <h3 className="subsection-title">7.3 Mandatory Disclosures</h3>
              <p className="paragraph">
                <strong>Emergency Services Sharing:</strong> When you activate a distress alert, the following information is automatically transmitted to nearby LekkerClap users and authorized emergency services: - Your precise GPS location - Approximate location - Name and contact information - Phone number - Alert content and description - Device information - Alert timestamp
              </p>
              <p className="paragraph">
                This sharing occurs without requiring additional consent because it is the fundamental function of the Platform and is based on lawful bases: (1) performance of contract, (2) vital interests, and (3) legitimate interest in emergency response coordination.
              </p>

              <h3 className="subsection-title">7.4 Conditional Disclosures (Requiring Your Consent)</h3>
              <p className="paragraph">
                We will not share your personal data with the following parties without your explicit prior consent:
              </p>
              <ul className="list">
                <li className="list-item">Third-party marketing partners (for promotional offers or advertising)</li>
                <li className="list-item">Data brokers or aggregators (for commercial data resale)</li>
                <li className="list-item">Credit bureaus (for creditworthiness assessment)</li>
                <li className="list-item">Non-emergency government agencies (beyond law enforcement emergency requests)</li>
                <li className="list-item">Corporate partners (for co-marketing initiatives)</li>
                <li className="list-item">Parent company or affiliates (for purposes beyond service provision)</li>
              </ul>

              <h3 className="subsection-title">7.5 Business Transfers</h3>
              <p className="paragraph">
                If LekkerClap undergoes a merger, acquisition, bankruptcy, dissolution, reorganization, or similar transaction, your personal data may be transferred as part of that transaction. We will provide notice of such change and any choices you have regarding your personal data if required by applicable law.
              </p>

              <h3 className="subsection-title">7.6 Aggregated and De-identified Data</h3>
              <p className="paragraph">
                LekkerClap may use and disclose aggregated, de-identified, or anonymized data without restriction. This includes: - Statistical reports on emergency response patterns - Geographic heat maps of emergency alert concentrations - Temporal trends in emergency alert usage - Aggregate demographic information (without identifying individuals)
              </p>
              <p className="paragraph">
                Such data cannot identify you and is not considered personal data.
              </p>

              <h3 className="subsection-title">7.7 International Data Transfers</h3>
              <p className="paragraph">
                LekkerClap operates globally and may transfer your personal data across international borders. When transferring personal data outside your country of residence:
              </p>
              <p className="paragraph">
                <strong>For POPIA Users (South Africa):</strong> - Data transfers are subject to POPIA Chapter 2 protections - We implement appropriate safeguards (contractual guarantees, adequacy determinations) - You have the right to lodge a complaint with the POPIA regulator if transfers are non-compliant
              </p>
              <p className="paragraph">
                <strong>For GDPR/EEA Users:</strong> We implement appropriate safeguards as required by GDPR Chapter V, including: - Adequacy Decisions: Transfers to countries with EU adequacy decisions (UK, Canada, Japan, etc.) - Standard Contractual Clauses (SCCs): Transfers using Commission-approved SCCs including data transfer impact assessments - Data Transfer Mechanisms: Implementation of binding corporate rules or contractual safeguards
              </p>
              <p className="paragraph">
                Data transferred to the United States may be subject to access by U.S. law enforcement under laws like the Foreign Intelligence Surveillance Act (FISA). We assess these risks and implement additional safeguards where feasible.
              </p>
              <p className="paragraph">
                <strong>For CCPA/CPRA Users:</strong> We ensure that service providers receiving California personal information are subject to contractual obligations to comply with CCPA/CPRA and maintain equivalent protections.
              </p>
              <p className="paragraph">
                <strong>For Zimbabwe Users:</strong> We provide prior written notice to the Zimbabwe Data Protection Authority (POTRAZ) before transferring your personal data outside Zimbabwe, as required by the Cyber and Data Protection Act.
              </p>
            </section>

            <section id="retention" className="section">
              <h2 className="section-title">8. DATA RETENTION AND DELETION</h2>

              <h3 className="subsection-title">8.1 Data Retention Schedule</h3>
              <p className="paragraph">
                LekkerClap retains personal data only for as long as necessary to provide the service, comply with legal obligations, resolve disputes, and enforce agreements. Precise location data associated with emergency alerts is retained for a limited period and then securely deleted.
              </p>

              <div className="table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Data Category</th>
                      <th>Retention Period</th>
                      <th>Legal Basis</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Active Account Information</td>
                      <td>Duration of account activity + 12 months</td>
                      <td>Contract and legitimate interest</td>
                    </tr>
                    <tr>
                      <td>Coarse Presence Data (non-alert)</td>
                      <td>Rolling 30–90 days</td>
                      <td>Analytics and service improvement</td>
                    </tr>
                    <tr>
                      <td>Precise Alert Location (during emergency)</td>
                      <td>30–90 days max</td>
                      <td>Incident investigation and emergency coordination</td>
                    </tr>
                    <tr>
                      <td>Alert Metadata (non-identifiable)</td>
                      <td>12–24 months</td>
                      <td>Analytics and trend analysis</td>
                    </tr>
                    <tr>
                      <td>Identity Verification Data (Didit)</td>
                      <td>90 days post-verification</td>
                      <td>GDPR, COPPA, fraud prevention</td>
                    </tr>
                    <tr>
                      <td>Biometric Data (facial recognition)</td>
                      <td>24 hours post-verification (unless stored with identity provider)</td>
                      <td>Data minimization, GDPR</td>
                    </tr>
                    <tr>
                      <td>Communication Records</td>
                      <td>24 months</td>
                      <td>Dispute resolution, abuse investigation</td>
                    </tr>
                    <tr>
                      <td>Payment Information</td>
                      <td>12 months or as required by law</td>
                      <td>Financial record retention requirements</td>
                    </tr>
                    <tr>
                      <td>Email/SMS Communications</td>
                      <td>12 months</td>
                      <td>Legal compliance, support history</td>
                    </tr>
                    <tr>
                      <td>Analytics and Logs</td>
                      <td>6–12 months</td>
                      <td>Service improvement, security</td>
                    </tr>
                    <tr>
                      <td>Backup and Archive Data</td>
                      <td>90 days after deletion</td>
                      <td>Disaster recovery and business continuity</td>
                    </tr>
                    <tr>
                      <td>Parental Consent Records</td>
                      <td>Until child reaches age of majority</td>
                      <td>GDPR, COPPA, legal compliance</td>
                    </tr>
                    <tr>
                      <td>Support / Rights Requests</td>
                      <td>12 months</td>
                      <td>Record-keeping and audit trail</td>
                    </tr>
                    <tr>
                      <td>Security / Abuse Logs</td>
                      <td>6–12 months</td>
                      <td>Incident response and investigation</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="paragraph">
                <strong>Key Principle:</strong> Precise location data is temporary and incident-scoped. We do not maintain rolling location histories outside of active alerts.
              </p>

              <h3 className="subsection-title">8.2 Your Right to Deletion (Right to Be Forgotten)</h3>
              <p className="paragraph">
                Subject to legal exceptions outlined below, you have the right to request deletion of your personal data. To exercise this right:
              </p>
              <ol className="list">
                <li className="list-item">Submit a Deletion Request via your account settings, email to privacy@lekkeclap.com, or certified mail to our address listed in Section 16</li>
                <li className="list-item">Verification: We will verify your identity before processing deletion requests</li>
                <li className="list-item">
                  Processing Timeline:
                  <ul className="list" style={{marginLeft: '2rem'}}>
                    <li className="list-item">POPIA (South Africa users): Within a reasonable timeframe (typically 30 days)</li>
                    <li className="list-item">GDPR (EU/EEA users): We will respond within 30 days</li>
                    <li className="list-item">CCPA/CPRA (California users): We will respond within 45 days (extendable to 90 days)</li>
                    <li className="list-item">Zimbabwe users: We will respond within a reasonable timeframe consistent with data subject rights</li>
                  </ul>
                </li>
              </ol>

              <h3 className="subsection-title">8.3 Exceptions to Deletion</h3>
              <p className="paragraph">
                We may retain personal data even after deletion request if retention is: - Legally required by law, regulation, or court order - Necessary for law enforcement cooperation in response to lawful governmental request - Required for emergency services to maintain incident records - Necessary to enforce our agreements or protect legal rights - Necessary to prevent fraud or security incidents - Required for backup and archive purposes (typically 90 days maximum) - Necessary for legitimate interests that override your privacy interest
              </p>
              <p className="paragraph">
                For minors, we retain parental consent records until the child reaches the age of majority in their jurisdiction, or as required by COPPA.
              </p>

              <h3 className="subsection-title">8.4 Data Portability</h3>
              <p className="paragraph">
                Subject to applicable laws, you have the right to: - Obtain a copy of your personal data in a structured, commonly-used, machine-readable format - Transmit that data to another data controller - Request we transmit data directly to another controller
              </p>
              <p className="paragraph">
                To request data portability: 1. Submit a request to privacy@lekkeclap.com with "DATA PORTABILITY REQUEST" in the subject 2. Specify the format in which you wish to receive the data 3. We will comply within 30-45 days as required by applicable law
              </p>
            </section>

            <section id="children" className="section">
              <h2 className="section-title">9. CHILDREN AND MINORS</h2>

              <h3 className="subsection-title">9.1 Minimum Age Requirement</h3>
              <p className="paragraph">
                LekkerClap is intended for users aged 13 years and above only. We recognize that different jurisdictions have varying age-of-consent thresholds under data protection laws:
              </p>
              <ul className="list">
                <li className="list-item">COPPA (United States): Children under 13 require verifiable parental consent</li>
                <li className="list-item">GDPR (European Union): Children under the country-specific age (13-16, varying by member state) require parental consent</li>
                <li className="list-item">CCPA/CPRA (California): Consumers under 16 have heightened privacy protections; under 13 require opt-in from parent/guardian</li>
                <li className="list-item">POPIA (South Africa): Individuals under 16 require parental consent for data processing</li>
                <li className="list-item">Zimbabwe: Individuals under 16 require parental consent for data processing</li>
              </ul>

              <h3 className="subsection-title">9.2 For Users Aged 13-15 Years (Parental Consent Required)</h3>
              <p className="paragraph">
                <strong>Verification of Age:</strong> Upon registration, you will be asked to provide your date of birth. If our system identifies you as under the age of consent in your jurisdiction (typically 13-16 depending on location), the following will occur:
              </p>
              <p className="paragraph">
                <strong>Mandatory Parental Consent Process:</strong> 1. We will immediately pause account activation 2. We will send a direct notice to a parent or legal guardian's email address (as you provide) 3. The parent must actively confirm consent through: - Email verification link + explicit acceptance form, OR - Video conference with our trained staff member (for higher-risk data processing), OR - Knowledge-based verification questions about the parent's identity
              </p>
              <p className="paragraph">
                <strong>What Parents/Guardians Must Know:</strong>
              </p>
              <p className="paragraph">
                Parents and guardians have the right to: - Review all personal data collected about the child - Request correction or deletion of the child's data - Withdraw parental consent at any time (which will result in account suspension) - Prevent future collection of data from the child - Know that emergency alerts involving the child may be shared with emergency services
              </p>
              <p className="paragraph">
                <strong>Data Processed from Minors:</strong> For users aged 13-15, we minimize data collection to: - Basic account information (name, email, phone, date of birth) - Identity verification data (via Didit - for age confirmation only) - Location data (only when distress alert is active) - Emergency alert content and response data - Communications with responders (only emergency-related)
              </p>
              <p className="paragraph">
                <strong>Prohibited for Minors:</strong> - Marketing cookies and behavioral tracking (beyond service-essential analytics) - Third-party data sharing for advertising or profiling - Sale of personal information - Long-term location history outside active alerts
              </p>
              <p className="paragraph">
                <strong>Parental Consent Revocation:</strong> Parents may withdraw consent at any time by contacting privacy@lekkeclap.com with written request. Upon withdrawal: - The child's account will be deactivated within 24 hours - All non-essential data will be deleted within 30 days - Emergency alert records may be retained to fulfill legal obligations
              </p>

              <h3 className="subsection-title">9.3 For Users Aged 16+ (Without Parental Consent in Most Jurisdictions)</h3>
              <p className="paragraph">
                Users who reach the age of consent in their jurisdiction (typically 16 in EU, 13+ in some states) may provide their own consent without parental involvement. However: - Users aged 16-18 still receive enhanced privacy protections - We will not sell their personal information - We will not collect biometric data beyond identity verification - Marketing communications require active opt-in
              </p>

              <h3 className="subsection-title">9.4 COPPA Compliance (United States, Children Under 13)</h3>
              <p className="paragraph">
                For users under 13 in the United States:
              </p>
              <p className="paragraph">
                <strong>Parental Notice and Consent:</strong> We will obtain verifiable parental consent using one of the following FTC-approved methods: - Confirmatory email sent to parent's email with active acknowledgment link - Credit card or payment mechanism providing parental account holder notification - Video conversation with trained staff who verbally confirms parental consent - Government-issued ID verification of parent identity
              </p>
              <p className="paragraph">
                <strong>Parental Rights Under COPPA:</strong> - Right to review data collected about the child - Right to request data deletion - Right to withdraw consent and deactivate child's account - Right to opt-out of future collection
              </p>
              <p className="paragraph">
                <strong>Safe Harbor Notice:</strong> We may ask to collect certain data that would normally require parental consent but is exempt under COPPA, such as: - Email address to send password reset (one-time use exceptions) - Name and phone for emergency contact purposes only - Location data for emergency alert purposes only
              </p>

              <h3 className="subsection-title">9.5 Contact Information for Parental Inquiries</h3>
              <p className="paragraph">
                Parents or guardians who have concerns about a child's account or data: - Email: privacy@lekkeclap.com with "PARENTAL INQUIRY" in subject - Phone: [Contact number] - Mail: [Physical address - see Section 16] - Online request form: [Link on platform]
              </p>
              <p className="paragraph">
                We will respond to parental inquiries within 10 business days.
              </p>
            </section>

            <section id="privacy-rights" className="section">
              <h2 className="section-title">10. YOUR PRIVACY RIGHTS AND HOW TO EXERCISE THEM</h2>

              <h3 className="subsection-title">10.1 POPIA Rights (South Africa)</h3>
              <p className="paragraph">
                If you are located in South Africa, POPIA grants you the following rights:
              </p>
              <p className="paragraph">
                <strong>1. Right of Access</strong> - Right: You have the right to request confirmation of whether we process your personal data and request a copy of that data - How to Exercise: Submit a "Data Access Request" to privacy@lekkeclap.com - Timeline: We will respond within a reasonable timeframe (typically 30 days) - Cost: Reasonable fee may apply for compilation of data (not for first request) - Exception: We may refuse if the request is vexatious, frivolous, or impairs others' rights
              </p>
              <p className="paragraph">
                <strong>2. Right to Correct/Update</strong> - Right: You can request correction of inaccurate personal data - How to Exercise: Submit a "Correction Request" via your account settings or email - Timeline: We will make corrections within a reasonable timeframe - Exception: We will not correct data if retention is required by law or for legal proceedings
              </p>
              <p className="paragraph">
                <strong>3. Right to Erasure / Delete</strong> - Right: You can request deletion of your personal data - Grounds for Erasure: The data is no longer necessary for its original purpose; you withdraw consent; you object to processing; the data was unlawfully processed; erasure is required by law - How to Exercise: Submit an "Erasure Request" via privacy@lekkeclap.com with "RIGHT TO ERASURE" in subject - Timeline: We will respond within a reasonable timeframe - Exceptions: We may retain data if necessary for legal obligations, law enforcement cooperation, public health, or establishment of legal claims
              </p>
              <p className="paragraph">
                <strong>4. Right to Restrict Processing</strong> - Right: You can request that we limit how we process your personal data - How to Exercise: Submit a "Restriction Request" to privacy@lekkeclap.com - Timeline: We will acknowledge within a reasonable timeframe and apply restrictions while investigating
              </p>
              <p className="paragraph">
                <strong>5. Right to Object</strong> - Right: You can object to processing of your personal data based on legitimate interest - How to Exercise: Submit an "Objection" to privacy@lekkeclap.com - Timeline: We must stop processing within a reasonable timeframe unless we demonstrate compelling legitimate interests - Exception: You cannot object to processing necessary for contract performance or emergency response
              </p>
              <p className="paragraph">
                <strong>6. Right to Withdraw Consent</strong> - Right: If we process your data based on consent, you can withdraw that consent at any time - How to Exercise: Adjust settings in your account or email privacy@lekkeclap.com - Effect: Withdrawal does not affect processing before withdrawal; future processing will stop - Exception: Withdrawal does not affect processing necessary for emergency response
              </p>

              <h3 className="subsection-title">10.2 GDPR Rights (for EU/EEA Users)</h3>
              <p className="paragraph">
                If you are located in the European Union or European Economic Area, the GDPR grants you the following rights:
              </p>
              <p className="paragraph">
                <strong>1. Right of Access (Article 15)</strong> - Right: You have the right to obtain confirmation of whether we process your personal data and request a copy of that data - How to Exercise: Submit a "Data Access Request" to privacy@lekkeclap.com - Timeline: We will respond within 30 calendar days (extendable by 60 days for complex requests) - Cost: Free of charge for up to two requests per year; additional requests may incur reasonable fees - Exception: We may refuse if the request is manifestly unfounded or excessive
              </p>
              <p className="paragraph">
                <strong>2. Right to Rectification (Article 16)</strong> - Right: You can request correction of inaccurate personal data - How to Exercise: Submit a "Correction Request" via your account settings or email - Timeline: We will make corrections within 30 days - Exception: We will not correct data if retention is required by law or for legal proceedings
              </p>
              <p className="paragraph">
                <strong>3. Right to Erasure / Right to Be Forgotten (Article 17)</strong> - Right: You can request deletion of your personal data under certain circumstances - Grounds for Erasure: The data is no longer necessary for its original purpose; you withdraw consent; you object to processing; the data was unlawfully processed; erasure is required by law - How to Exercise: Submit an "Erasure Request" via privacy@lekkeclap.com with "RIGHT TO ERASURE" in subject - Timeline: We will respond within 30 days - Exceptions: We may retain data if necessary for legal obligations, law enforcement cooperation, public health, or establishment of legal claims - Notification: We will inform third parties of your erasure request, unless impracticable
              </p>
              <p className="paragraph">
                <strong>4. Right to Restrict Processing (Article 18)</strong> - Right: You can request that we limit how we process your personal data while we verify accuracy or assess your objection - How to Exercise: Submit a "Restriction Request" to privacy@lekkeclap.com - Timeline: We will acknowledge within 30 days and apply restrictions while investigating - Effect: Restricted data will not be processed except with your consent or for legal establishment, exercise, or defense of claims
              </p>
              <p className="paragraph">
                <strong>5. Right to Data Portability (Article 20)</strong> - Right: You can request a copy of your personal data in a structured, commonly-used, machine-readable format and request transmission to another controller - How to Exercise: Submit a "Data Portability Request" to privacy@lekkeclap.com - Timeline: We will provide data within 30 days in formats such as CSV or JSON - Cost: Free of charge - Exception: We may refuse if processing is not automated or if data is not processed based on consent or contract
              </p>
              <p className="paragraph">
                <strong>6. Right to Object (Article 21)</strong> - Right: You can object to processing of your personal data in certain circumstances - Grounds for Objection: Processing based on legitimate interests or public task; processing for direct marketing; processing for purposes of analytics or profiling - How to Exercise: Submit an "Objection" to privacy@lekkeclap.com specifying the processing you object to - Timeline: We must stop processing within 30 days unless we demonstrate compelling legitimate interests - Exception: We may continue processing if necessary to protect vital interests, establish legal claims, or fulfill legal obligations
              </p>
              <p className="paragraph">
                <strong>7. Rights Related to Automated Decision-Making (Article 22)</strong> - Right: You have the right not to be subject to decisions based solely on automated processing that produces legal or similarly significant effects - How It Applies: Our identity verification (Didit) is an automated decision, but you have the right to human review - How to Exercise: Contact privacy@lekkeclap.com to request human review of any automated verification decision - Exception: Automated decisions are permitted if necessary for contract performance or lawful processing with safeguards
              </p>
              <p className="paragraph">
                <strong>8. Right to Withdraw Consent</strong> - Right: If we process your data based on consent, you can withdraw that consent at any time - How to Exercise: Adjust settings in your account or email privacy@lekkeclap.com - Effect: Withdrawal does not affect processing before withdrawal; future processing will stop - Exception: Withdrawal does not affect processing necessary for emergency response
              </p>

              <h3 className="subsection-title">10.3 CCPA/CPRA Rights (for California Residents)</h3>
              <p className="paragraph">
                If you are a California resident, the California Consumer Privacy Act (CCPA) and California Privacy Rights Act (CPRA) grant you the following rights:
              </p>
              <p className="paragraph">
                <strong>1. Right to Know/Access (CCPA Section 1798.100)</strong> - Right: You can request what personal information we have collected, the sources, purposes of collection, and categories of third parties with whom we share it - How to Exercise: Submit a "Verifiable Consumer Request" using email to privacy@lekkeclap.com. - Verification: We will verify your identity by matching information you provide against records we hold - Timeline: We will respond within 45 days (may extend 45 additional days with notice) - Format: We will provide information in a portable, readily useable format - Cost: Free of charge for two requests per calendar year
              </p>
              <p className="paragraph">
                <strong>2. Right to Delete (CPRA Section 1798.105)</strong> - Right: You can request deletion of personal information we have collected - How to Exercise: Submit a "Deletion Request" with "REQUEST TO DELETE" in subject via email or online form - Timeline: We will respond within 45 days (may extend 45 additional days) - Exceptions: We may retain data if necessary for service delivery, security, legal obligations, or emergency response - Third-Party Notification: We will inform service providers to delete the data, unless deletion is not possible - Verification: We will verify your identity before processing deletion - Cost: Free of charge
              </p>
              <p className="paragraph">
                <strong>3. Right to Correct (CPRA Section 1798.100(d))</strong> - Right: You can request correction of inaccurate personal information - How to Exercise: Submit a "Correction Request" via privacy@lekkeclap.com - Timeline: We will respond within 45 days (may extend 45 additional days) - Verification: We will verify identity and assess reasonableness of request - Cost: Free of charge
              </p>
              <p className="paragraph">
                <strong>4. Right to Opt-Out of Sale/Sharing (CCPA Sections 1798.120, CPRA Section 1798.120)</strong> - Right: You can opt-out of the sale or sharing of your personal information to third parties - How to Exercise: Use the "Do Not Sell or Share My Personal Information" link in your account settings or on our homepage - Current Status: LekkerClap does not sell personal information. Any future sale would require explicit notice and your opt-out mechanism. We do share limited data with emergency services as part of core service delivery. - Timeline: We will honor opt-out requests within 45 days - Cost: Free of charge
              </p>
              <p className="paragraph">
                <strong>5. Right to Limit Use and Disclosure (CPRA Section 1798.121)</strong> - Right: You can limit how we use and disclose sensitive personal information (such as location data, biometric data) - How to Exercise: Submit a "Limitation Request" to privacy@lekkeclap.com specifying which categories of sensitive data you wish to limit - Timeline: We will respond within 45 days - Limitations: We will use sensitive data only for service provision, legal compliance, security, fraud prevention, and short-term analytics - Exception: We cannot limit location data sharing for emergency alert purposes, as this is core to service delivery
              </p>
              <p className="paragraph">
                <strong>6. Right to Non-Discrimination (CCPA Section 1798.125, CPRA Section 1798.125)</strong> - Right: You will not face discrimination (including denial of service, different pricing, or lower quality) for exercising your privacy rights - How We Comply: We provide the same service quality and pricing to all users regardless of privacy choices - Exception: We may offer different service levels if different data collection enables different features (this is not discrimination)
              </p>
              <p className="paragraph">
                <strong>7. Right to Automated Decision-Making (CPRA Section 1798.100)</strong> - Right: You have the right to understand and challenge automated decision-making that produces legal or similarly significant effects - How It Applies: Identity verification may use automated processing; you can request human review - How to Exercise: Contact privacy@lekkeclap.com to request explanation of automated decision or human review
              </p>
              <p className="paragraph">
                <strong>8. Consumer Privacy Rights – Opt-Out Preference Signals</strong> - We honor the Global Privacy Control (GPC) signal to opt-out of sale/sharing and targeted advertising - We will treat GPC signal as consumer opt-out request
              </p>

              <h3 className="subsection-title">10.4 Zimbabwe Data Subject Rights</h3>
              <p className="paragraph">
                Under the Zimbabwe Cyber and Data Protection Act, you have the right to:
              </p>
              <ul className="list">
                <li className="list-item"><strong>Right to Access:</strong> Obtain confirmation and copies of personal data we process about you</li>
                <li className="list-item"><strong>Right to Correction:</strong> Correct inaccurate or incomplete personal data</li>
                <li className="list-item"><strong>Right to Deletion:</strong> Request deletion of personal data (subject to legal exceptions)</li>
                <li className="list-item"><strong>Right to Restrict Processing:</strong> Request limitation of how we process your data</li>
                <li className="list-item"><strong>Right to Withdraw Consent:</strong> Withdraw consent for any processing based on consent</li>
                <li className="list-item"><strong>Right to Complain:</strong> Lodge a complaint with the Zimbabwe Data Protection Authority (POTRAZ)</li>
              </ul>
              <p className="paragraph">
                How to Exercise: - Submit requests to privacy@lekkeclap.com - We will respond within a reasonable timeframe - You may contact POTRAZ if unsatisfied: [POTRAZ contact information]
              </p>

              <h3 className="subsection-title">10.5 COPPA Rights (for Parents/Guardians of US Children Under 13)</h3>
              <p className="paragraph">
                Parents and guardians have the following specific rights:
              </p>
              <ul className="list">
                <li className="list-item"><strong>Right to Review:</strong> Request a review of all personal information we have collected about your child</li>
                <li className="list-item"><strong>Right to Delete:</strong> Request deletion of your child's personal information (subject to exceptions)</li>
                <li className="list-item"><strong>Right to Refuse/Withdraw Consent:</strong> Refuse or withdraw permission for future data collection about your child</li>
                <li className="list-item"><strong>Right to Notification:</strong> Receive clear notice of our information practices before we collect from your child</li>
              </ul>
              <p className="paragraph">
                How to Exercise: - Email: privacy@lekkeclap.com with "COPPA PARENTAL REQUEST" in subject
              </p>
              <p className="paragraph">
                We will verify parental identity and respond within 10 business days.
              </p>

              <h3 className="subsection-title">10.6 General Procedures for Exercising Rights</h3>
              <p className="paragraph">
                <strong>Submitting Requests:</strong> You can submit data subject requests through any of the following channels: 2. Email: privacy@lekkeclap.com (must include "DATA SUBJECT REQUEST" in subject) 5. Authorized Agent: We accept requests from authorized agents acting on your behalf if you provide power of attorney or written authorization
              </p>
              <p className="paragraph">
                <strong>Identity Verification:</strong> - We will verify your identity by requiring information that matches our records - For sensitive requests, we may require additional verification such as government ID photocopy - We will not request information we do not already hold about you
              </p>
              <p className="paragraph">
                <strong>Response Timelines:</strong> - POPIA (South Africa): Reasonable timeframe (typically 30 days) - GDPR (EU/EEA): 30 calendar days, extendable by 60 days for complex requests - CCPA/CPRA (California): 45 calendar days, extendable by 45 additional days - Zimbabwe: Reasonable timeframe (typically 30 days) - We will provide status updates if processing requires longer
              </p>
              <p className="paragraph">
                <strong>Free Requests:</strong> - You are entitled to free responses to your requests (POPIA, GDPR, CCPA/CPRA) - We may charge a reasonable fee for manifestly unfounded, excessive, or repetitive requests after first request
              </p>
              <p className="paragraph">
                <strong>Appeal/Complaint:</strong> - If unsatisfied with our response, you may: - Request supervisory authority review (contact your local Data Protection Authority) - Appeal any denial of your request in writing - Pursue legal remedies available under applicable law
              </p>
            </section>

            <section id="security" className="section">
              <h2 className="section-title">11. DATA SECURITY</h2>

              <h3 className="subsection-title">11.1 Security Measures</h3>
              <p className="paragraph">
                LekkerClap implements comprehensive technical and organizational security measures to protect personal data against unauthorized access, accidental loss, alteration, and disclosure, consistent with the "Privacy by Design" principle.
              </p>
              <p className="paragraph">
                <strong>Technical Safeguards:</strong> - TLS Encryption in Transit: All data transmitted between your device and our servers is encrypted using TLS 1.2 or higher - Encryption at Rest: Personal data stored on servers is encrypted using AES-256 or equivalent - Secure Cloud Infrastructure: Data is stored with Firebase, GCP, or AWS with their enterprise security standards - Role-based Access Control: Access limited to founder and developer only, on need-to-know basis - No Continuous Location Tracking: Precise location is captured only during active alerts; no rolling history maintained - Separation of Incident Data: Alert data separated from user profile data to minimize exposure - Database Security: Firewalls and network segmentation protecting data - API Security: Authenticated endpoints with rate limiting
              </p>
              <p className="paragraph">
                <strong>Organizational Safeguards:</strong> - Limited Access: Only essential personnel (founder + developer) have access to production data - No Shared Passwords: Unique credentials with complex requirements for all administrative access - 2FA on Admin Consoles: Multi-factor authentication protecting admin access - Incident Response Plan: Documented procedures for responding to data breaches (see Section 12) - Access Logging: Audit logs documenting who accessed what data and when - Employee Training: Annual privacy and security training for all staff - Data Minimization: Limiting access to only necessary personal data; purging outdated information - Secure Data Destruction: Secure deletion procedures for decommissioned systems
              </p>
              <p className="paragraph">
                <strong>Privacy by Design:</strong> - Privacy impact assessments conducted before new systems or features are implemented - Privacy requirements integrated into system architecture and development processes - Default privacy settings configured to protect users (opt-in rather than opt-out) - Regular privacy reviews and audits
              </p>

              <h3 className="subsection-title">11.2 Limitations of Security</h3>
              <p className="paragraph">
                While we implement industry-standard security measures, no system is completely secure. We cannot guarantee absolute security against: - Sophisticated cyber attacks or zero-day exploits - Insider threats or employee misconduct - Physical theft or natural disasters - Compromised third-party service providers - User negligence (weak passwords, lost devices, phishing attacks)
              </p>
              <p className="paragraph">
                <strong>Your Responsibility:</strong> - Choose strong, unique passwords and change them regularly - Do not share your login credentials with others - Keep your device software updated - Use secure WiFi networks (not open public WiFi) when accessing the platform - Report suspicious activity immediately to security@lekkeclap.com
              </p>

              <h3 className="subsection-title">11.3 Data Protection Impact Assessments</h3>
              <p className="paragraph">
                LekkerClap conducts Data Protection Impact Assessments (DPIAs) for high-risk processing activities, including: - Location data collection and emergency alert routing - Identity verification and biometric processing - Automated decision-making (verification algorithms) - Cross-border data transfers - Integration with emergency services
              </p>
              <p className="paragraph">
                These DPIAs evaluate: - Lawfulness of processing - Necessity and proportionality of data collection - Rights and freedom impacts - Risk mitigation measures - Third-party involvement
              </p>
              <p className="paragraph">
                Summaries are available upon request to regulatory authorities and can be accessed by data subjects in certain jurisdictions.
              </p>
            </section>

            <section id="breach" className="section">
              <h2 className="section-title">12. DATA BREACH NOTIFICATION</h2>

              <h3 className="subsection-title">12.1 Our Breach Notification Obligations</h3>
              <p className="paragraph">
                In the event of a personal data breach (unauthorized access, loss, alteration, or disclosure of personal data), LekkerClap will notify affected users and the Information Regulator in accordance with applicable law.
              </p>
              <p className="paragraph">
                <strong>Notification Timeline:</strong> - POPIA (South Africa): Notify POPIA regulator as soon as reasonably practicable; notify affected data subjects if high risk - GDPR (EU/EEA): Notify supervisory authority within 72 hours of becoming aware of breach; notify affected data subjects without undue delay - Zimbabwe: Notify POTRAZ within 24 hours; notify affected data subjects within 72 hours if breach poses high risk - California: Notify affected residents without unreasonable delay, consistent with law enforcement requests - Other Jurisdictions: Comply with applicable notification timelines
              </p>

              <h3 className="subsection-title">12.2 What We Will Include in Breach Notification</h3>
              <p className="paragraph">
                Our breach notification will include: - Description of what personal data was compromised - Approximate number of affected individuals - Date and time of breach discovery - Likely consequences of the breach - Measures taken or being taken to secure data and mitigate harm - Our point of contact for questions - Description of remedial measures offered (credit monitoring, identity theft protection, etc.)
              </p>

              <h3 className="subsection-title">12.3 Exceptions to Notification</h3>
              <p className="paragraph">
                We may determine that notification is not required if: - The breach is unlikely to result in risk to rights and freedoms (e.g., encrypted data where key remains secure) - The personal data was not sensitive in nature - We have taken sufficient remedial steps - Law enforcement requests non-disclosure (temporary)
              </p>

              <h3 className="subsection-title">12.4 Breach Investigation and Response</h3>
              <p className="paragraph">
                Upon discovery of a breach: 1. Immediate Containment: Isolate affected systems to prevent further unauthorized access 2. Assessment: Determine scope, nature, and risk level of breach within 24 hours 3. Authority Notification: Notify relevant Data Protection Authorities (POTRAZ, POPIA regulator, ICO, GDPA, etc.) within required timeframe 4. Victim Notification: Notify affected data subjects if breach poses high risk 5. Documentation: Maintain detailed records of breach discovery, investigation, and remediation 6. Enhanced Monitoring: Implement additional security measures to prevent recurrence 7. Review and Lessons Learned: Conduct post-incident review to strengthen security posture
              </p>

              <h3 className="subsection-title">12.5 User Notification About Suspected Breach</h3>
              <p className="paragraph">
                If you suspect your account has been compromised or believe we may have experienced a breach affecting you: - Contact us immediately at security@lekkeclap.com or call [Emergency phone number] - Do not attempt to use your account if you suspect compromise - Monitor your credit reports and accounts for suspicious activity - Consider placing a fraud alert with credit bureaus - We will investigate promptly and follow notification procedures
              </p>
            </section>

            <section id="cookies" className="section">
              <h2 className="section-title">13. COOKIES AND TRACKING TECHNOLOGIES</h2>

              <h3 className="subsection-title">13.1 What Are Cookies?</h3>
              <p className="paragraph">
                Cookies are small text files stored on your device that contain information about your interactions with the Platform. We use cookies and similar technologies to: - Remember your login session and preferences - Understand how users interact with features - Improve platform performance and user experience - Provide analytics and track campaign effectiveness - Enable security features and prevent fraud
              </p>

              <h3 className="subsection-title">13.2 Types of Cookies We Use</h3>
              <p className="paragraph">
                <strong>1. Essential/Necessary Cookies</strong> - Purpose: Required for basic platform functionality (login sessions, CSRF protection, security) - User Consent: Not required (automatically enabled) - Duration: Session or 12 months - Examples: Session ID, security tokens, language preferences
              </p>
              <p className="paragraph">
                <strong>2. Functional Cookies</strong> - Purpose: Remember your settings and preferences (time zone, layout preferences) - User Consent: Required (you will be prompted on first visit) - Duration: 12 months - Examples: Display preferences, favorite features
              </p>
              <p className="paragraph">
                <strong>3. Analytics Cookies</strong> - Purpose: Track how users interact with the platform (pages visited, features used, time on app) - User Consent: Required (opt-in) - Duration: 12 months - Providers: Google Analytics, Firebase, Amplitude - Note: Personal identifiers are removed; data is aggregated
              </p>
              <p className="paragraph">
                <strong>4. Marketing/Advertising Cookies</strong> - Purpose: Track user behavior across websites for targeted advertising (if enabled) - User Consent: Required (explicit opt-in) - Duration: Up to 24 months - Providers: Google Ads, Facebook Pixel, LinkedIn - Note: Not used by LekkerClap at this time; future advertising may require separate consent
              </p>

              <h3 className="subsection-title">13.3 Your Cookie Preferences</h3>
              <p className="paragraph">
                <strong>Managing Cookies in Your Browser:</strong> You can control cookies through your browser settings: - Most browsers allow you to refuse cookies or alert you when cookies are set - Google Chrome: Settings &gt; Privacy and Security &gt; Cookies - Safari: Preferences &gt; Privacy &gt; Cookies - Firefox: Preferences &gt; Privacy &gt; Cookies - Edge: Settings &gt; Privacy &gt; Cookies
              </p>
              <p className="paragraph">
                Note: Disabling cookies may limit platform functionality.
              </p>
              <p className="paragraph">
                <strong>LekkerClap Cookie Control Panel:</strong> - Upon first visit, we present a cookie banner with options to: - Accept all cookies (including marketing) - Accept essential cookies only - Customize your preferences by category - Access our full cookie policy
              </p>
              <p className="paragraph">
                Withdraw Consent: You can change your cookie preferences at any time through account settings or the cookie banner on our website.
              </p>

              <h3 className="subsection-title">13.4 Similar Tracking Technologies</h3>
              <p className="paragraph">
                Beyond cookies, we may use: - Web Beacons/Tracking Pixels: Invisible images that track page views and user interactions - Local Storage: Browser-based data storage (HTML5) for preferences and cache - Mobile Ad IDs: Device-specific identifiers for mobile app tracking (IDFA on iOS, Android Advertising ID) - Server Logs: IP address, browser type, referrer information automatically recorded
              </p>
              <p className="paragraph">
                All tracking technologies follow the same consent and disclosure requirements as cookies.
              </p>

              <h3 className="subsection-title">13.5 Third-Party Cookies</h3>
              <p className="paragraph">
                Third-party service providers may set cookies on your device: - Google Analytics: Privacy Policy - Firebase: Privacy Policy - Amplitude: Privacy Policy
              </p>
              <p className="paragraph">
                These third parties have their own privacy policies; we are not responsible for their practices.
              </p>

              <h3 className="subsection-title">13.6 Cookie Retention and Deletion</h3>
              <ul className="list">
                <li className="list-item"><strong>Essential Cookies:</strong> Retained until end of session or 12 months (renewed with each login)</li>
                <li className="list-item"><strong>Functional Cookies:</strong> Retained for 12 months</li>
                <li className="list-item"><strong>Analytics Cookies:</strong> Retained for 12 months; automatically purged thereafter</li>
                <li className="list-item"><strong>Marketing Cookies:</strong> Retained up to 24 months</li>
              </ul>
              <p className="paragraph">
                You can clear all cookies through your browser settings or by contacting privacy@lekkeclap.com.
              </p>
            </section>

            <section id="third-party" className="section">
              <h2 className="section-title">14. THIRD-PARTY LINKS AND SERVICES</h2>

              <h3 className="subsection-title">14.1 Links to Third-Party Websites</h3>
              <p className="paragraph">
                The LekkerClap Platform may contain links to third-party websites, applications, and services that are not operated by us, including: - Emergency services websites - Payment processors - Identity verification providers (Didit) - Cloud service providers - Social media platforms
              </p>
              <p className="paragraph">
                We are not responsible for the privacy practices of third-party sites. We encourage you to review their privacy policies before providing personal information.
              </p>

              <h3 className="subsection-title">14.2 Third-Party Integrations</h3>
              <p className="paragraph">
                When you integrate third-party services with your LekkerClap account: - You authorize LekkerClap to share limited data as necessary for the integration - The third party's terms and privacy policy apply to their use of data - You remain responsible for reviewing third-party privacy disclosures
              </p>
              <p className="paragraph">
                Common Integrations: - Emergency Services APIs: Location and alert data shared automatically for dispatch - Payment Processors: Payment method and transaction information - Contact Sync: Permission to access device contacts (if you grant permission)
              </p>

              <h3 className="subsection-title">14.3 Social Media Integration</h3>
              <p className="paragraph">
                If you connect your social media account to LekkerClap: - We request limited permissions (profile information only; we do not post on your behalf) - Social media providers set their own cookies; review their policies - You can disconnect social media integration at any time through account settings
              </p>
            </section>

            <section id="policy-changes" className="section">
              <h2 className="section-title">15. PRIVACY POLICY CHANGES AND UPDATES</h2>

              <h3 className="subsection-title">15.1 Changes to This Privacy Policy</h3>
              <p className="paragraph">
                We may update this Privacy Policy to reflect: - Changes in our data practices - New features or services - Regulatory requirements or legal developments - Technological advancements - Feedback from users
              </p>

              <h3 className="subsection-title">15.2 How We Notify You</h3>
              <p className="paragraph">
                <strong>Significant Changes:</strong> - For changes that materially affect your privacy rights, we will: - Provide at least 30 days' notice before changes take effect - Send email notification to your registered email address - Display a prominent notice in the app or on the website - Require affirmative acceptance of revised terms for continued service (in some cases)
              </p>
              <p className="paragraph">
                <strong>Minor Changes:</strong> - Non-material clarifications or administrative updates will be effective immediately - We will note the "Last Updated" date at the top of this policy
              </p>

              <h3 className="subsection-title">15.3 Your Choices Regarding Changes</h3>
              <ul className="list">
                <li className="list-item"><strong>For POPIA/GDPR users:</strong> You have the right to object to material changes and withdraw consent</li>
                <li className="list-item"><strong>For CCPA/CPRA users:</strong> You have the right to opt-out of new data collection practices</li>
                <li className="list-item"><strong>For Minor Users:</strong> Parents must re-consent if changes affect data handling for minors</li>
              </ul>
              <p className="paragraph">
                If you do not accept changes, you may: - Stop using the Platform - Request deletion of your account and data (subject to exceptions) - Contact us to discuss specific concerns
              </p>

              <h3 className="subsection-title">15.4 Archive of Previous Versions</h3>
              <p className="paragraph">
                Previous versions of this Privacy Policy are available upon request. Contact privacy@lekkeclap.com to request a specific version.
              </p>
            </section>

            <section id="contact" className="section">
              <h2 className="section-title">16. CONTACT INFORMATION AND PRIVACY RIGHTS REQUESTS</h2>

              <h3 className="subsection-title">16.1 Data Protection Officer and Privacy Contact</h3>
              <p className="paragraph">
                <strong>Data Protection Officer:</strong> - Email: dpo@lekkeclap.com
              </p>
              <p className="paragraph">
                The DPO is responsible for: - Overseeing privacy compliance - Responding to data subject requests - Coordinating with regulatory authorities - Conducting privacy impact assessments - Training staff on privacy obligations
              </p>

              <h3 className="subsection-title">16.2 General Privacy Inquiries</h3>
              <p className="paragraph">
                Email: privacy@lekkeclap.com
              </p>
              <p className="paragraph">
                We will acknowledge receipt of inquiries within 2 business days and provide substantive response within 10-30 business days depending on complexity.
              </p>

              <h3 className="subsection-title">16.3 Request Types and Routing</h3>
              <p className="paragraph">
                <strong>Data Subject Requests (Access, Deletion, Correction, Portability):</strong> - Email: privacy@lekkeclap.com with "DATA SUBJECT REQUEST" in subject - Include your full name, account email, and specific request details - Verification: Provide government ID and proof of residence if requested - Timeline: 30-45 days depending on jurisdiction
              </p>
              <p className="paragraph">
                <strong>COPPA Parental Requests:</strong> - Email: privacy@lekkeclap.com with "COPPA PARENTAL REQUEST" in subject - Include parent name, child name, account email, and verification of parental relationship - Timeline: 10 business days
              </p>
              <p className="paragraph">
                <strong>Security or Breach Reporting:</strong> - Email: security@lekkeclap.com (for urgent security issues) - Subject: "SECURITY INCIDENT REPORT"
              </p>
              <p className="paragraph">
                <strong>Marketing Communications Opt-Out:</strong> - Click "Unsubscribe" link in marketing email - Email: privacy@lekkeclap.com with "OPT-OUT" in subject - Update settings in account preferences
              </p>
              <p className="paragraph">
                <strong>Regulatory Authority Contact (Complaints):</strong> - POPIA (South Africa): POPIA Regulator / Information Regulator - EU Users: Your local Data Protection Authority (e.g., GDPR supervisory authority) - California Users: California Privacy Protection Agency (CPPA) - Zimbabwe Users: POTRAZ (Zimbabwe Data Protection Authority)
              </p>

              <h3 className="subsection-title">16.4 Regulatory Authority Information</h3>
              <p className="paragraph">
                <strong>South Africa - POPIA Regulator (Information Regulator):</strong> - Website: https://www.justice.gov.za/inforeg/
              </p>
              <p className="paragraph">
                <strong>European Data Protection Authorities:</strong> Each EU member state has a Data Protection Authority. Examples: - Germany (BfDI): https://www.bfdi.bund.de/ - France (CNIL): https://www.cnil.fr/ - Ireland (DPC): https://www.dataprotection.ie/ - Spain (AEPD): https://www.aepd.es/
              </p>
              <p className="paragraph">
                <strong>California Privacy Protection Agency:</strong> - Website: https://cppa.ca.gov - Email: privacy@cppa.ca.gov - Phone: (844) 272-4662
              </p>
              <p className="paragraph">
                <strong>Zimbabwe Data Protection Authority (POTRAZ):</strong> - Website: https://www.potraz.zw/
              </p>
            </section>

            <section id="jurisdiction" className="section">
              <h2 className="section-title">17. SPECIAL PROVISIONS BY JURISDICTION</h2>

              <h3 className="subsection-title">17.1 South Africa (POPIA Users)</h3>
              <p className="paragraph">
                POPIA Compliance: - This policy incorporates all POPIA requirements for lawful processing, transparency, and user rights - An Information Officer or DPO is appointed and available for inquiries - Personal information is processed according to POPIA's Eight Conditions - Data subjects can lodge complaints with the Information Regulator if rights are violated - We maintain records of our lawful basis for processing each data category
              </p>

              <h3 className="subsection-title">17.2 European Union and EEA Users</h3>
              <p className="paragraph">
                <strong>GDPR Compliance:</strong> - This policy incorporates all GDPR requirements for lawful processing, transparency, and user rights - Standard Contractual Clauses (SCCs) are in place for data transfers outside the EEA - Data Protection Impact Assessments (DPIAs) are conducted for high-risk processing - Legitimate interests assessments are documented for processing based on legitimate interests - A Data Protection Officer is appointed and available for inquiries
              </p>
              <p className="paragraph">
                <strong>Digital Services Act (DSA):</strong> - We provide clear information about algorithmic recommendation systems - We prohibit deceptive design (dark patterns) that may manipulate privacy choices - We provide easy mechanisms to control advertising and tracking
              </p>
              <p className="paragraph">
                <strong>ePrivacy Directive:</strong> - Prior consent is obtained before non-essential cookies are set - Consent is granular by category (analytics, functional, marketing) - You can withdraw consent at any time through cookie settings
              </p>

              <h3 className="subsection-title">17.3 California Residents</h3>
              <p className="paragraph">
                <strong>CCPA/CPRA Compliance:</strong> - This policy incorporates all CCPA and CPRA rights and obligations - Service provider contracts include required CCPA/CPRA data handling restrictions - Risk assessments are conducted if processing poses significant privacy risk - Cybersecurity audits are performed for sensitive data handling - Financial incentive disclosures are provided if you opt into any data programs
              </p>
              <p className="paragraph">
                <strong>California Online Privacy Protection Act (CalOPPA):</strong> - This policy includes a link to our Shine the Light request process - California residents can request a list of third parties with whom we share personal information
              </p>
              <p className="paragraph">
                <strong>California's Right to Opt-Out of Targeted Advertising:</strong> - We do not currently engage in targeted advertising, but if we do in the future, California residents will have an opt-out mechanism - We honor the Global Privacy Control (GPC) signal
              </p>

              <h3 className="subsection-title">17.4 Other State Privacy Laws</h3>
              <p className="paragraph">
                <strong>States with Comprehensive Privacy Laws (Virginia, Colorado, Connecticut, Utah, Montana, Delaware, Mississippi, Texas):</strong> - Users in these states enjoy similar rights to those granted under CCPA/CPRA - Specific implementations may vary; please review your state's law or contact privacy@lekkeclap.com
              </p>

              <h3 className="subsection-title">17.5 Zimbabwe Residents</h3>
              <p className="paragraph">
                <strong>Cyber and Data Protection Act [Chapter 12:07] Compliance:</strong> - LekkerClap is registered with POTRAZ as a Data Controller - A Data Protection Officer has been appointed and is responsible for compliance - Data subjects may exercise rights as outlined in Section 10.4 - Breaches are reported to POTRAZ within 24 hours - Data transfers outside Zimbabwe are notified to POTRAZ in advance - This policy is aligned with Zimbabwe's data protection principles
              </p>
            </section>

            <section id="international" className="section">
              <h2 className="section-title">18. INTERNATIONAL DATA TRANSFERS AND ADEQUACY DECISIONS</h2>

              <h3 className="subsection-title">18.1 How We Handle International Transfers</h3>
              <p className="paragraph">
                LekkerClap operates globally and processes personal data across multiple countries and continents. When your personal data is transferred to countries with different data protection standards:
              </p>
              <p className="paragraph">
                <strong>For POPIA/GDPR Compliance:</strong> We use the following mechanisms to ensure adequate protection:
              </p>
              <ol className="list">
                <li className="list-item">
                  <strong>Adequacy Decisions:</strong> Transfer of data to countries where regulatory authorities have determined adequate protection:
                  <ul className="list" style={{marginLeft: '2rem'}}>
                    <li className="list-item">United Kingdom</li>
                    <li className="list-item">Canada</li>
                    <li className="list-item">Japan</li>
                    <li className="list-item">New Zealand</li>
                    <li className="list-item">Switzerland</li>
                    <li className="list-item">[Others as applicable]</li>
                  </ul>
                </li>
                <li className="list-item">
                  <strong>Standard Contractual Clauses (SCCs):</strong> For transfers to countries without adequacy decisions, we incorporate SCCs and conduct Transfer Impact Assessments (TIAs) to evaluate:
                  <ul className="list" style={{marginLeft: '2rem'}}>
                    <li className="list-item">Laws of the receiving country that may impact data protection</li>
                    <li className="list-item">Existence of foreign intelligence laws requiring data disclosure</li>
                    <li className="list-item">Ability to enforce SCC protections in that jurisdiction</li>
                    <li className="list-item">Implementation of additional safeguards where necessary</li>
                  </ul>
                </li>
                <li className="list-item">
                  <strong>Binding Corporate Rules (BCRs):</strong> If LekkerClap expands to have multiple affiliated entities, BCRs may be implemented to govern internal data transfers
                </li>
                <li className="list-item">
                  <strong>Derogations:</strong> In limited circumstances, transfers may proceed under GDPR/POPIA derogations (informed consent, vital interests, legal claims, public interest)
                </li>
              </ol>
              <p className="paragraph">
                <strong>For California Users:</strong> We ensure that service providers and contractors receiving California personal information are subject to contractual obligations to maintain CCPA/CPRA compliance and equivalent protections.
              </p>
              <p className="paragraph">
                <strong>For Zimbabwe Users:</strong> Before transferring your personal data outside Zimbabwe, we notify POTRAZ and implement safeguards to maintain data protection standards.
              </p>

              <h3 className="subsection-title">18.2 Data Residency and Storage Locations</h3>
              <p className="paragraph">
                <strong>Primary Data Storage Locations:</strong> - Primary region: [Specify - e.g., United States, European Union, South Africa] - Backup regions: [Specify others] - Emergency services data: May be replicated to optimize response
              </p>
              <p className="paragraph">
                You have the right to: - Know where your data is stored and processed - Request that data be stored in a specific jurisdiction (if feasible) - Request deletion rather than transfer
              </p>
              <p className="paragraph">
                <strong>Data Location Considerations:</strong> - Some features may require data processing in multiple locations (emergency response) - We implement privacy controls and encryption regardless of storage location - Data may transit through multiple jurisdictions for backup and recovery purposes
              </p>
            </section>

            <section id="dispute" className="section">
              <h2 className="section-title">19. DISPUTE RESOLUTION AND GOVERNING LAW</h2>

              <h3 className="subsection-title">19.1 Governing Law</h3>
              <p className="paragraph">
                This Privacy Policy is governed by the laws of [Specify primary jurisdiction - typically where company is incorporated]. However, data protection disputes are governed by the laws of the data subject's jurisdiction: - POPIA for South Africa residents - GDPR for EU/EEA residents - CCPA/CPRA for California residents - Zimbabwe Cyber and Data Protection Act for Zimbabwe residents - Other applicable state or national laws for other users
              </p>

              <h3 className="subsection-title">19.2 Dispute Resolution Process</h3>
              <p className="paragraph">
                If you believe we have violated your privacy rights:
              </p>
              <ol className="list">
                <li className="list-item">
                  <strong>Informal Resolution (First Step):</strong>
                  <ul className="list" style={{marginLeft: '2rem'}}>
                    <li className="list-item">Contact us with details of the alleged violation: privacy@lekkeclap.com</li>
                    <li className="list-item">We will acknowledge receipt within 2 business days</li>
                    <li className="list-item">We will investigate and respond substantively within 30 days</li>
                    <li className="list-item">If necessary, we will offer remedies or corrective actions</li>
                  </ul>
                </li>
                <li className="list-item">
                  <strong>Escalation (If Unsatisfied):</strong>
                  <ul className="list" style={{marginLeft: '2rem'}}>
                    <li className="list-item">Request escalation to our Data Protection Officer</li>
                    <li className="list-item">Provide written explanation of the unsatisfactory response</li>
                    <li className="list-item">We will conduct further investigation and provide written resolution</li>
                  </ul>
                </li>
                <li className="list-item">
                  <strong>Regulatory Authority Complaint:</strong>
                  <ul className="list" style={{marginLeft: '2rem'}}>
                    <li className="list-item">File a complaint with your jurisdiction's Data Protection Authority</li>
                    <li className="list-item">No prior complaint to us is required</li>
                    <li className="list-item">Authorities can conduct independent investigations and impose penalties</li>
                  </ul>
                </li>
                <li className="list-item">
                  <strong>Legal Action:</strong>
                  <ul className="list" style={{marginLeft: '2rem'}}>
                    <li className="list-item">You may pursue civil litigation if other remedies are insufficient</li>
                    <li className="list-item">Private right of action for data breaches: Available under various laws (statutory damages $100-$750 per consumer, per incident under some regimes)</li>
                    <li className="list-item">Your jurisdiction's consumer protection laws may provide additional remedies</li>
                  </ul>
                </li>
              </ol>

              <h3 className="subsection-title">19.3 Liability Limitations</h3>
              <p className="paragraph">
                Subject to applicable law, LekkerClap's liability for privacy violations is limited to: - Correcting the violation and restoring compliant processing - Providing credit monitoring or identity theft protection services (for breaches) - Payment of statutory damages where applicable - Actual damages proven by you, not to exceed [Amount based on jurisdiction]
              </p>
              <p className="paragraph">
                <strong>Exclusions:</strong> - We are not liable for your failure to keep passwords secure or confidential - We are not liable for unauthorized access due to your negligence - We are not liable for third-party processor actions beyond our reasonable control
              </p>
            </section>

            <section id="final" className="section">
              <h2 className="section-title">20. FINAL PROVISIONS</h2>

              <h3 className="subsection-title">20.1 Entire Agreement</h3>
              <p className="paragraph">
                This Privacy Policy, together with our Terms of Service, constitutes the entire agreement regarding privacy and data protection between you and LekkerClap. If any provision is found to be unenforceable, the remaining provisions will remain in effect.
              </p>

              <h3 className="subsection-title">20.2 Severability</h3>
              <p className="paragraph">
                If any provision of this Privacy Policy is found invalid or unenforceable by a court or regulatory authority: - That provision will be severed - Remaining provisions continue in full force - We will amend the policy to comply with the regulatory determination
              </p>

              <h3 className="subsection-title">20.3 Waiver</h3>
              <p className="paragraph">
                Failure by LekkerClap to enforce any privacy right does not constitute a waiver of that right. We reserve the right to enforce all privacy protections at any time.
              </p>

              <h3 className="subsection-title">20.4 Acknowledgment</h3>
              <p className="paragraph">
                By using LekkerClap, you acknowledge that you have: - Read and understood this Privacy Policy - Agreed to the collection and processing of personal data as described - Understood your rights and how to exercise them - Consented to emergency alert functionality, including location sharing with emergency services
              </p>
            </section>

            <section id="appendices" className="section">
              <h2 className="section-title">21. APPENDICES</h2>

              <h3 className="subsection-title">Appendix A: List of Third-Party Service Providers and Data Processing</h3>
              <div className="table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Service Provider</th>
                      <th>Data Categories</th>
                      <th>Purpose</th>
                      <th>Privacy Policy</th>
                      <th>Processing Location</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Didit</td>
                      <td>ID documents, biometric data, name, DOB</td>
                      <td>Age verification, fraud prevention</td>
                      <td>[Link]</td>
                      <td>[Location]</td>
                    </tr>
                    <tr>
                      <td>[Provider]</td>
                      <td>All platform data</td>
                      <td>Data storage, backup, infrastructure</td>
                      <td>[Link]</td>
                      <td>[Location]</td>
                    </tr>
                    <tr>
                      <td>Google/Firebase</td>
                      <td>Usage metrics (anonymized)</td>
                      <td>Performance monitoring</td>
                      <td>[Link]</td>
                      <td>[Location]</td>
                    </tr>
                    <tr>
                      <td>[Processor]</td>
                      <td>Payment method, transaction data</td>
                      <td>Billing</td>
                      <td>[Link]</td>
                      <td>[Location]</td>
                    </tr>
                    <tr>
                      <td>[Provider]</td>
                      <td>Phone/email, message content</td>
                      <td>Notifications</td>
                      <td>[Link]</td>
                      <td>[Location]</td>
                    </tr>
                    <tr>
                      <td>Emergency Services</td>
                      <td>Location, alert content, contact info</td>
                      <td>Emergency dispatch</td>
                      <td>N/A</td>
                      <td>Regional</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="subsection-title">Appendix B: Data Processing Agreement (DPA) Terms</h3>
              <p className="paragraph">
                All Data Processors are subject to a Standard Data Processing Agreement incorporating: - POPIA Chapter 2 processor obligations - GDPR Article 28 processor obligations - CCPA/CPRA processor restrictions - Data security requirements - Sub-processor notification - Data subject rights assistance - Data breach notification - Audit rights and compliance certification - Termination and data return/deletion obligations
              </p>

              <h3 className="subsection-title">Appendix C: Consent Records and Parental Consent Documentation</h3>
              <p className="paragraph">
                LekkerClap maintains records of: - User consent to terms and privacy policy - Parental consent for minor users (digitally signed with timestamp) - COPPA verifiable parental consent methods used - Cookie and marketing communication preferences - Withdrawal of consent (with timestamp)
              </p>
              <p className="paragraph">
                These records are retained for 5+ years to demonstrate POPIA, GDPR, CCPA, and COPPA compliance.
              </p>

              <h3 className="subsection-title">Appendix D: POPIA Lawful Basis Summary</h3>
              <div className="table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Processing Activity</th>
                      <th>Lawful Basis</th>
                      <th>Data Categories</th>
                      <th>POPIA Justification</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Account creation & management</td>
                      <td>Contract</td>
                      <td>Name, email, phone, DOB</td>
                      <td>Necessary for service delivery</td>
                    </tr>
                    <tr>
                      <td>Location sharing during alerts</td>
                      <td>Contract + Vital Interests</td>
                      <td>Precise GPS location</td>
                      <td>Essential for emergency response</td>
                    </tr>
                    <tr>
                      <td>Identity verification</td>
                      <td>Contract</td>
                      <td>Government ID, biometric</td>
                      <td>Age eligibility confirmation</td>
                    </tr>
                    <tr>
                      <td>Community proximity matching</td>
                      <td>Legitimate Interest</td>
                      <td>Approximate location, anonymized data</td>
                      <td>Reasonable, necessary, balanced for safety</td>
                    </tr>
                    <tr>
                      <td>Analytics & service improvement</td>
                      <td>Legitimate Interest</td>
                      <td>Aggregated usage data</td>
                      <td>Improves service quality for all users</td>
                    </tr>
                    <tr>
                      <td>Abuse prevention & fraud detection</td>
                      <td>Legitimate Interest</td>
                      <td>Account behavior, patterns</td>
                      <td>Protects integrity and security</td>
                    </tr>
                    <tr>
                      <td>Optional notifications</td>
                      <td>Consent</td>
                      <td>Notification preferences</td>
                      <td>Freely given, specific, revocable</td>
                    </tr>
                    <tr>
                      <td>Marketing communications</td>
                      <td>Consent</td>
                      <td>Email/SMS address, preferences</td>
                      <td>Explicit opt-in required</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="subsection-title">Appendix E: Data Subject Rights Request Forms</h3>
              <p className="paragraph">
                Standardized forms for: - Data Access Request - Erasure/Deletion Request - Correction/Rectification Request - Data Portability Request - Restriction of Processing Request - Objection to Processing - Right to Withdraw Consent
              </p>
              <p className="paragraph">
                Forms available at: [Website link]
              </p>

              <h3 className="subsection-title">Appendix F: POPIA Evidence Pack (Auditable Records)</h3>
              <p className="paragraph">
                LekkerClap maintains and stores the following POPIA evidence: 1. Current Privacy Policy (PDF + dated version history) 2. Change log (what changed, when, why) 3. Data subject request log (dates, types, responses, outcomes) 4. Security measures summary (1-page overview of controls) 5. Data retention schedule (detailed table by category) 6. Screenshots of in-app disclosures (privacy zones, notifications, alerts) 7. Lawful basis assessments (documented for each processing activity) 8. Data Processing Agreements (with all third-party processors) 9. Breach incident records (if any) 10. Employee training records (privacy & security)
              </p>
              <p className="paragraph">
                These documents are stored securely and available for regulatory inspection.
              </p>
            </section>

            <section className="section" style={{borderTop: '3px solid #b91c1c', paddingTop: '2rem'}}>
              <h2 className="section-title">CONCLUSION</h2>
              <p className="paragraph">
                LekkerClap is committed to protecting your privacy and complying with all applicable data protection laws globally, including POPIA, GDPR, CCPA/CPRA, and others. We recognize that trust is essential to our mission of providing life-saving emergency alert services.
              </p>
              <p className="paragraph">
                You are already 80% POPIA-aligned by design because we: - Minimise location use (temporary, alert-scoped only) - Scope precise data to incidents - Give users control (privacy zones, settings, consent) - Do not sell data - Implement appropriate security measures
              </p>
              <p className="paragraph">
                What this revised policy does: - Makes your data practices explicit - Makes them defensible under POPIA and other laws - Makes them auditable (evidence trail, documentation)
              </p>
              <p className="paragraph">
                If you have any questions, concerns, or requests regarding this Privacy Policy or your personal data, please do not hesitate to contact us using the information in Section 16.
              </p>
              <p className="paragraph" style={{marginTop: '2rem', fontSize: '1.125rem', fontWeight: 600, color: '#7f1d1d'}}>
                Thank you for trusting LekkerClap with your information and your safety.
              </p>
              <p className="paragraph" style={{marginTop: '1rem', fontStyle: 'italic', color: '#64748b'}}>
                Last Updated: January 8, 2026<br />
                Effective Date: January 1, 2026
              </p>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

