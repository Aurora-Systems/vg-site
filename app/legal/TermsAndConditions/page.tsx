"use client"
import React, { useState } from 'react';

export default function TermsAndConditions(){
  const [activeSection, setActiveSection] = useState<string>('');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <div className="min-h-screen">
      <style>{`
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          line-height: 1.7;
          color: #292524;
        }

        h1, h2, h3, h4, h5, h6 {
          font-weight: 700;
        }

        .terms-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem;
        }

        .header-section {
          background: linear-gradient(135deg, #7f1d1d 0%, #b91c1c 100%);
          color: white;
          padding: 4rem 2rem;
          margin-bottom: 3rem;
          border-radius: 0 0 2rem 2rem;
          box-shadow: 0 20px 60px rgba(127, 29, 29, 0.3);
        }

        .header-content {
          max-width: 1200px;
          margin: 0 auto;
        }

        .main-title {
          font-size: 3.5rem;
          font-weight: 900;
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
          color: #78716c;
          text-decoration: none;
          border-radius: 0.5rem;
          font-size: 0.875rem;
          transition: all 0.2s;
          cursor: pointer;
        }

        .nav-link:hover {
          background: #fef2f2;
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
          border-bottom: 1px solid #fef2f2;
        }

        tr:hover {
          background: #fef2f2;
        }

        .definition-term {
          font-weight: 600;
          color: #991b1b;
        }

        .warning-box {
          background: #fef2f2;
          border-left: 4px solid #b91c1c;
          padding: 1rem;
          margin: 1.5rem 0;
          border-radius: 0.5rem;
        }

        .warning-box strong {
          color: #7f1d1d;
        }

        @media (max-width: 1024px) {
          .content-wrapper {
            grid-template-columns: 1fr;
          }

          .sidebar {
            position: static;
          }

          .main-title {
            font-size: 2.5rem;
          }
        }

        @media (max-width: 640px) {
          .terms-container {
            padding: 1rem;
          }

          .header-section {
            padding: 2rem 1rem;
          }

          .main-title {
            font-size: 2rem;
          }

          .main-content {
            padding: 1.5rem;
          }
        }
      `}</style>

      

      <div className="terms-container">
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
                  <a className={`nav-link ${activeSection === 'service-description' ? 'active' : ''}`} onClick={() => scrollToSection('service-description')}>3. Description of Service</a>
                </li>
                <li className="nav-item">
                  <a className={`nav-link ${activeSection === 'eligibility' ? 'active' : ''}`} onClick={() => scrollToSection('eligibility')}>4. Eligibility and Registration</a>
                </li>
                <li className="nav-item">
                  <a className={`nav-link ${activeSection === 'user-accounts' ? 'active' : ''}`} onClick={() => scrollToSection('user-accounts')}>5. User Accounts</a>
                </li>
                <li className="nav-item">
                  <a className={`nav-link ${activeSection === 'permitted-uses' ? 'active' : ''}`} onClick={() => scrollToSection('permitted-uses')}>6. Permitted Uses</a>
                </li>
                <li className="nav-item">
                  <a className={`nav-link ${activeSection === 'prohibited-conduct' ? 'active' : ''}`} onClick={() => scrollToSection('prohibited-conduct')}>7. Prohibited Conduct</a>
                </li>
                <li className="nav-item">
                  <a className={`nav-link ${activeSection === 'intellectual-property' ? 'active' : ''}`} onClick={() => scrollToSection('intellectual-property')}>8. Intellectual Property</a>
                </li>
                <li className="nav-item">
                  <a className={`nav-link ${activeSection === 'user-content' ? 'active' : ''}`} onClick={() => scrollToSection('user-content')}>9. User-Generated Content</a>
                </li>
                <li className="nav-item">
                  <a className={`nav-link ${activeSection === 'payment' ? 'active' : ''}`} onClick={() => scrollToSection('payment')}>10. Payment Terms</a>
                </li>
                <li className="nav-item">
                  <a className={`nav-link ${activeSection === 'false-alarms' ? 'active' : ''}`} onClick={() => scrollToSection('false-alarms')}>11. False Alarms</a>
                </li>
                <li className="nav-item">
                  <a className={`nav-link ${activeSection === 'termination' ? 'active' : ''}`} onClick={() => scrollToSection('termination')}>12. Termination</a>
                </li>
                <li className="nav-item">
                  <a className={`nav-link ${activeSection === 'liability' ? 'active' : ''}`} onClick={() => scrollToSection('liability')}>13. Limitation of Liability</a>
                </li>
                <li className="nav-item">
                  <a className={`nav-link ${activeSection === 'indemnification' ? 'active' : ''}`} onClick={() => scrollToSection('indemnification')}>14. Indemnification</a>
                </li>
                <li className="nav-item">
                  <a className={`nav-link ${activeSection === 'third-party' ? 'active' : ''}`} onClick={() => scrollToSection('third-party')}>15. Third-Party Links</a>
                </li>
                <li className="nav-item">
                  <a className={`nav-link ${activeSection === 'dispute' ? 'active' : ''}`} onClick={() => scrollToSection('dispute')}>16. Dispute Resolution</a>
                </li>
                <li className="nav-item">
                  <a className={`nav-link ${activeSection === 'modifications' ? 'active' : ''}`} onClick={() => scrollToSection('modifications')}>17. Modifications</a>
                </li>
                <li className="nav-item">
                  <a className={`nav-link ${activeSection === 'entire-agreement' ? 'active' : ''}`} onClick={() => scrollToSection('entire-agreement')}>18. Entire Agreement</a>
                </li>
                <li className="nav-item">
                  <a className={`nav-link ${activeSection === 'severability' ? 'active' : ''}`} onClick={() => scrollToSection('severability')}>19. Severability</a>
                </li>
                <li className="nav-item">
                  <a className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`} onClick={() => scrollToSection('contact')}>20. Contact Information</a>
                </li>
                <li className="nav-item">
                  <a className={`nav-link ${activeSection === 'appendix-a' ? 'active' : ''}`} onClick={() => scrollToSection('appendix-a')}>Appendix A</a>
                </li>
                <li className="nav-item">
                  <a className={`nav-link ${activeSection === 'appendix-b' ? 'active' : ''}`} onClick={() => scrollToSection('appendix-b')}>Appendix B</a>
                </li>
              </ul>
            </nav>
          </aside>

          <main className="main-content">
            <section id="introduction" className="section">
              <h2 className="section-title">1. INTRODUCTION AND ACCEPTANCE OF TERMS</h2>
              
              <h3 className="subsection-title">1.1 Agreement</h3>
              <p className="paragraph">
                LekkerClap Africa Ltd ("we," "us," "our," "Company," "Platform," or "Service") provides a mobile application and website designed to facilitate community awareness and communication between nearby users.
              </p>
              <p className="paragraph">
                These Terms and Conditions of Use (the "Agreement" or "Terms") constitute a legally binding contract between you (the "User," "you," or "your") and LekkerClap Africa Ltd. This Agreement governs your use of the Platform, including all features, functionality, content, and services made available through the Platform.
              </p>

              <h3 className="subsection-title">1.2 Acceptance</h3>
              <p className="paragraph">
                By downloading, installing, accessing, or using the LekkerClap Platform, whether directly through the mobile application or website, you expressly agree to be bound by all terms, conditions, and notices contained in this Agreement. If you do not agree to any provision of this Agreement, you may not use the Platform.
              </p>
              <p className="paragraph">
                Your continued use of the Platform constitutes your ongoing acceptance of this Agreement. If you disagree with any modifications to this Agreement, your exclusive remedy is to stop using the Platform.
              </p>

              <h3 className="subsection-title">1.3 Scope and Application</h3>
              <p className="paragraph">
                This Agreement applies to: - All users globally who access or use the Platform - Access via the mobile application (iOS, Android, or other platforms) - Access via the website - All features, including community alerts, location services, and communication with other users - All devices through which the Platform is accessed
              </p>

              <h3 className="subsection-title">1.4 Compliance with Laws</h3>
              <p className="paragraph">
                By using the Platform, you acknowledge and agree that: - You will comply with all applicable federal, state, local, and international laws and regulations - The Platform must be used in accordance with this Agreement and all applicable legal requirements - You are responsible for ensuring your use is lawful in your jurisdiction of residence - Certain features may be restricted based on your location due to legal requirements
              </p>

              <h3 className="subsection-title">1.5 Age Restrictions</h3>
              <p className="paragraph">
                The Platform is intended for users aged 13 years and older only. Users aged 13-17 must have parental consent and supervision as specified in our Privacy Policy. Users under 13 are not permitted to use the Platform.
              </p>
              <p className="paragraph">
                By creating an account, you represent and warrant that you are at least 13 years of age (or the age of majority in your jurisdiction, whichever is greater), or that you have obtained proper parental/guardian consent as required.
              </p>
            </section>

            <section id="definitions" className="section">
              <h2 className="section-title">2. DEFINITIONS</h2>
              <p className="paragraph">For purposes of this Agreement:</p>
              <ul className="list">
                <li className="list-item">
                  <span className="definition-term">"Alert"</span> means a notification created and transmitted through the Platform by a user to communicate information to nearby LekkerClap users and their chosen emergency contacts.
                </li>
                <li className="list-item">
                  <span className="definition-term">"Emergency Services"</span> means authorized public and private emergency response entities, including police, fire, medical, search and rescue, and other first responders.
                </li>
                <li className="list-item">
                  <span className="definition-term">"Intellectual Property"</span> or <span className="definition-term">"IP"</span> means all patents, trademarks, service marks, copyrights, trade secrets, and other intellectual property rights, whether registered or unregistered, associated with the Platform and its content.
                </li>
                <li className="list-item">
                  <span className="definition-term">"Prohibited Conduct"</span> means any use of the Platform that violates this Agreement, applicable law, or the rights of other users or third parties.
                </li>
                <li className="list-item">
                  <span className="definition-term">"User Content"</span> means any data, information, communications, images, or content that a user creates, uploads, transmits, or otherwise provides through the Platform.
                </li>
                <li className="list-item">
                  <span className="definition-term">"False Alarm"</span> means an Alert where no actual emergency exists, or where the Alert cannot be verified as involving a genuine situation requiring response, as determined by applicable standards.
                </li>
                <li className="list-item">
                  <span className="definition-term">"Responder"</span> means any LekkerClap user who responds to an Alert, or an authorized emergency services representative.
                </li>
                <li className="list-item">
                  <span className="definition-term">"Platform"</span> means the LekkerClap mobile application, website, and all related services, features, and functionality.
                </li>
              </ul>
            </section>

            <section id="service-description" className="section">
              <h2 className="section-title">3. DESCRIPTION OF SERVICE</h2>

              <h3 className="subsection-title">3.1 Platform Overview</h3>
              <p className="paragraph">
                LekkerClap is a community-powered communication platform that enables users to: - Create and send Alerts to nearby registered users - Receive notifications when nearby users create Alerts - Coordinate with members of their chosen safety circle - Facilitate community awareness and communication
              </p>

              <h3 className="subsection-title">3.2 Important Clarification: NOT an Emergency Service</h3>
              <div className="warning-box">
                <p className="paragraph">
                  <strong>LekkerClap is NOT an emergency dispatch system, security service, or replacement for emergency services.</strong>
                </p>
                <p className="paragraph">
                  LekkerClap does not: - Provide emergency response services - Dispatch police, fire, medical, or other responders - Monitor or manage emergency situations - Guarantee response times or outcomes - Replace direct calls to emergency services (911, police, ambulance, or local equivalent) - Assume responsibility for user actions or third-party responses - Control or direct the actions of responders or other users
                </p>
                <p className="paragraph">
                  <strong>You should always contact your local emergency services directly in urgent situations.</strong> The Platform is designed to facilitate communication between community members and provide awareness of nearby activity. It is a voluntary, community-based tool—not a professional emergency response system.
                </p>
              </div>

              <h3 className="subsection-title">3.3 Best-Effort Service</h3>
              <p className="paragraph">
                LekkerClap operates on a best-efforts basis. The Platform is provided to help communities coordinate and share awareness. It does not guarantee delivery, response, or specific outcomes. Technical failures, network issues, user behavior, and numerous other factors may impact the functionality of the Platform.
              </p>
            </section>

            <section id="eligibility" className="section">
              <h2 className="section-title">4. ELIGIBILITY AND REGISTRATION</h2>

              <h3 className="subsection-title">4.1 Eligibility</h3>
              <p className="paragraph">
                To use the Platform, you must: - Be at least 13 years old (or the age of majority in your jurisdiction) - Have parental/guardian consent if between 13-17 years old - Have the legal capacity to enter into this Agreement - Not be restricted from using the Platform in your jurisdiction - Not be listed on any government sanctions list or prohibited party list
              </p>

              <h3 className="subsection-title">4.2 Account Registration</h3>
              <p className="paragraph">
                To access certain features of the Platform, you must create an account and provide: - Accurate, complete, and up-to-date information - A valid email address and password - Your location (as permitted by your device and privacy settings) - Any other information required during registration
              </p>
              <p className="paragraph">
                You represent and warrant that all information you provide is true, accurate, and complete. You agree to maintain and promptly update your account information as needed.
              </p>

              <h3 className="subsection-title">4.3 Account Security</h3>
              <p className="paragraph">
                You are responsible for: - Maintaining the confidentiality of your password and account credentials - All activities that occur under your account - Notifying us immediately of any unauthorized use of your account - Ensuring that your account information remains current and accurate
              </p>
              <p className="paragraph">
                LekkerClap is not responsible for unauthorized access to your account if you fail to protect your credentials.
              </p>
            </section>

            <section id="user-accounts" className="section">
              <h2 className="section-title">5. USER ACCOUNTS AND SECURITY</h2>

              <h3 className="subsection-title">5.1 Your Responsibilities</h3>
              <p className="paragraph">
                You agree to: - Keep your login credentials confidential - Immediately notify LekkerClap of any suspected unauthorized access - Provide accurate location and personal information as requested - Enable location services and permissions as required by the Platform - Maintain appropriate security practices on your device
              </p>

              <h3 className="subsection-title">5.2 Account Suspension</h3>
              <p className="paragraph">
                LekkerClap may suspend or terminate your account if: - You violate this Agreement - You engage in prohibited conduct - Your account is used to create false Alerts - You repeatedly violate our False Alarm policy - We reasonably believe continued access poses a safety risk - We are required to do so by law
              </p>
              <p className="paragraph">
                Suspension may be immediate and without prior notice in cases involving safety risks or legal compliance.
              </p>

              <h3 className="subsection-title">5.3 Data Collection and Location Services</h3>
              <p className="paragraph">
                To function, LekkerClap requires: - Access to your location data - Permission to send you notifications - Ability to contact your emergency contacts - Storage of your profile information
              </p>
              <p className="paragraph">
                You authorize LekkerClap to collect and use this information as described in our Privacy Policy. You may modify your permissions through your device settings at any time.
              </p>
            </section>

            <section id="permitted-uses" className="section">
              <h2 className="section-title">6. PERMITTED USES</h2>
              <p className="paragraph">
                You may use the Platform only to: - Create and send Alerts in genuine situations requiring awareness or assistance - Receive and respond to Alerts from other users - Communicate with members of your safety circle - Access Platform features as intended - Review your account history and settings
              </p>
              <p className="paragraph">
                All uses must be lawful, honest, and in compliance with this Agreement.
              </p>
            </section>

            <section id="prohibited-conduct" className="section">
              <h2 className="section-title">7. PROHIBITED CONDUCT</h2>
              <p className="paragraph">You agree not to:</p>

              <h3 className="subsection-title">7.1 False or Misleading Alerts</h3>
              <ul className="list">
                <li className="list-item">Create Alerts that are false, misleading, or unverified</li>
                <li className="list-item">Test the Platform using live Alerts (use Test Mode if available)</li>
                <li className="list-item">Create Alerts as pranks, jokes, or to cause panic</li>
                <li className="list-item">Deliberately misrepresent the nature of a situation</li>
                <li className="list-item">Create Alerts for non-emergency situations to solicit responses</li>
              </ul>

              <h3 className="subsection-title">7.2 Abuse and Harassment</h3>
              <ul className="list">
                <li className="list-item">Use the Platform to harass, threaten, or intimidate other users</li>
                <li className="list-item">Send Alerts targeting specific individuals or groups</li>
                <li className="list-item">Use the Platform for stalking, bullying, or cyberbullying</li>
                <li className="list-item">Engage in any form of discrimination based on protected characteristics</li>
                <li className="list-item">Use the Platform to facilitate illegal activity</li>
              </ul>

              <h3 className="subsection-title">7.3 Unauthorized Access and Misuse</h3>
              <ul className="list">
                <li className="list-item">Attempt to access the Platform without authorization</li>
                <li className="list-item">Hack, crack, or otherwise compromise Platform security</li>
                <li className="list-item">Reverse-engineer, decompile, or disassemble the Platform</li>
                <li className="list-item">Interfere with Platform functionality or servers</li>
                <li className="list-item">Bypass security measures or access restrictions</li>
                <li className="list-item">Use automated tools (bots, scrapers) to access the Platform</li>
              </ul>

              <h3 className="subsection-title">7.4 Intellectual Property Violations</h3>
              <ul className="list">
                <li className="list-item">Infringe on LekkerClap's intellectual property rights</li>
                <li className="list-item">Copy, reproduce, or distribute Platform content without permission</li>
                <li className="list-item">Plagiarize or claim credit for others' content</li>
                <li className="list-item">Use LekkerClap trademarks or branding without authorization</li>
                <li className="list-item">Create derivative works based on the Platform without permission</li>
              </ul>

              <h3 className="subsection-title">7.5 Illegal Activity</h3>
              <ul className="list">
                <li className="list-item">Violate any applicable law or regulation</li>
                <li className="list-item">Facilitate, encourage, or assist illegal conduct</li>
                <li className="list-item">Use the Platform to commit fraud, identity theft, or scams</li>
                <li className="list-item">Distribute malware, viruses, or harmful code</li>
                <li className="list-item">Engage in any activity that violates criminal law</li>
              </ul>

              <h3 className="subsection-title">7.6 Commercial and Solicitation Abuse</h3>
              <ul className="list">
                <li className="list-item">Spam users with unwanted messages or Alerts</li>
                <li className="list-item">Engage in commercial activities or advertising without permission</li>
                <li className="list-item">Solicit money, donations, or valuables through the Platform</li>
                <li className="list-item">Pyramid schemes, multi-level marketing, or similar schemes</li>
                <li className="list-item">Phishing or social engineering attacks</li>
              </ul>

              <h3 className="subsection-title">7.7 Privacy Violations</h3>
              <ul className="list">
                <li className="list-item">Share or disclose other users' personal information without consent</li>
                <li className="list-item">Collect personal information about other users</li>
                <li className="list-item">Create fake profiles or impersonate other users</li>
                <li className="list-item">Share location data beyond intended recipients</li>
              </ul>
            </section>

            <section id="intellectual-property" className="section">
              <h2 className="section-title">8. INTELLECTUAL PROPERTY RIGHTS</h2>

              <h3 className="subsection-title">8.1 Ownership</h3>
              <p className="paragraph">
                LekkerClap owns all intellectual property in and related to the Platform, including: - The Platform code, design, and functionality - All content created, compiled, or provided by LekkerClap - Trademarks, logos, and branding - Databases and compilations - All improvements, modifications, and derivative works
              </p>

              <h3 className="subsection-title">8.2 Limited License</h3>
              <p className="paragraph">
                We grant you a limited, non-exclusive, non-transferable, revocable license to access and use the Platform solely for lawful purposes in accordance with this Agreement. This license does not permit you to: - Sell, resell, or commercially exploit the Platform - Modify or create derivative works - Copy or reproduce the Platform - Rent, lease, or lend access to the Platform - Transfer your license to others
              </p>

              <h3 className="subsection-title">8.3 Restrictions</h3>
              <p className="paragraph">
                You may not: - Attempt to gain unauthorized access to Platform source code or infrastructure - Reverse-engineer, disassemble, or decompile any part of the Platform - Remove, obscure, or alter any proprietary notices - Use the Platform to develop competing products or services
              </p>
            </section>

            <section id="user-content" className="section">
              <h2 className="section-title">9. USER-GENERATED CONTENT</h2>

              <h3 className="subsection-title">9.1 Ownership and License</h3>
              <div className="warning-box">
                <p className="paragraph">
                  <strong>All content produced on or using the Platform, including Alerts, messages, images, and any other User Content, belongs to LekkerClap.</strong>
                </p>
              </div>
              <p className="paragraph">
                By creating, uploading, or transmitting any User Content through the Platform, you grant LekkerClap and its affiliates: - Perpetual, worldwide, royalty-free rights to use, reproduce, modify, adapt, distribute, and display your User Content - The right to sublicense these rights to partners, service providers, and emergency responders - The right to create derivative works based on your User Content - The right to use your User Content for research, improvement, and analysis of the Platform
              </p>
              <p className="paragraph">
                This ownership structure allows LekkerClap to: - Ensure content integrity and prevent misuse - Maintain historical records for verification and investigation - Share verified information with authorized emergency services - Improve the Platform based on usage patterns - Protect against false claims regarding content creation
              </p>

              <h3 className="subsection-title">9.2 Your Representations</h3>
              <p className="paragraph">
                You represent and warrant that: - You own or have permission to use any content you submit - Your content does not infringe third-party rights - Your content complies with this Agreement and applicable law - You have the right to grant the licenses described above
              </p>

              <h3 className="subsection-title">9.3 Content Standards</h3>
              <p className="paragraph">
                You agree that your User Content will: - Be truthful and accurate to the best of your knowledge - Not be defamatory, obscene, or offensive - Not violate others' privacy or intellectual property rights - Comply with all applicable laws - Not contain malware, spam, or harmful code
              </p>

              <h3 className="subsection-title">9.4 Content Removal</h3>
              <p className="paragraph">
                LekkerClap may remove any User Content that: - Violates this Agreement - Appears to be false or misleading - Is illegal or promotes illegal activity - Violates third-party rights - We reasonably believe poses a safety risk
              </p>
              <p className="paragraph">
                Removal does not waive your liability for the content or your obligation to indemnify LekkerClap.
              </p>
            </section>

            <section id="payment" className="section">
              <h2 className="section-title">10. PAYMENT TERMS AND BILLING</h2>

              <h3 className="subsection-title">10.1 Current Status</h3>
              <p className="paragraph">
                As of the Effective Date of this Agreement, the LekkerClap Platform is provided at no cost to users. No payment is currently required to access basic Platform features.
              </p>

              <h3 className="subsection-title">10.2 Future Fees</h3>
              <p className="paragraph">
                LekkerClap reserves the right to introduce paid features, premium services, or subscription models in the future. You will receive notice of any changes to our pricing structure. Continued use of the Platform following notice of new fees constitutes acceptance of the new pricing terms.
              </p>

              <h3 className="subsection-title">10.3 In-App Purchases</h3>
              <p className="paragraph">
                If LekkerClap introduces in-app purchases, paid features will be governed by additional terms provided at the time of purchase. All charges are non-refundable unless required by applicable law or expressly stated otherwise.
              </p>

              <h3 className="subsection-title">10.4 Refund Policy</h3>
              <p className="paragraph">
                Currently, no refunds are applicable as all services are provided free of charge. If paid services are introduced, our refund policy will be provided separately.
              </p>
            </section>

            <section id="false-alarms" className="section">
              <h2 className="section-title">11. FALSE ALARMS AND SERVICE ABUSE</h2>

              <h3 className="subsection-title">11.1 Definition and Monitoring</h3>
              <p className="paragraph">
                A "False Alarm" is an Alert created where no actual emergency or genuine situation exists, or where the Alert is determined to be unverified, misleading, or not requiring response under reasonable circumstances.
              </p>
              <p className="paragraph">
                LekkerClap monitors for False Alarms through: - User reporting and feedback - Pattern analysis and detection - Emergency services verification - Community verification - Responder feedback
              </p>

              <h3 className="subsection-title">11.2 False Alarm Penalty Structure</h3>
              <p className="paragraph">
                Penalties are assessed on a rolling 4 to 6-month period. This timeline allows for initial platform testing and refinement while maintaining accountability.
              </p>

              <div className="table-container">
                <table>
                  <thead>
                    <tr>
                      <th>False Alarms (within rolling 4-6 month period)</th>
                      <th>Penalty</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1-3</td>
                      <td>Warning notice (no fee; educational message provided)</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>$50-$100 per incident</td>
                    </tr>
                    <tr>
                      <td>5-10</td>
                      <td>$100-$250 per incident</td>
                    </tr>
                    <tr>
                      <td>10+</td>
                      <td>Up to $500+ per incident + possible account suspension</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="subsection-title">11.3 Testing and Test Mode</h3>
              <p className="paragraph">
                If LekkerClap provides a designated Test Mode or testing environment, you may use it to: - Familiarize yourself with Platform features - Verify functionality with your safety circle - Demonstrate Platform effectiveness to stakeholders
              </p>
              <div className="warning-box">
                <p className="paragraph">
                  <strong>Alerts created in Test Mode do not trigger penalties. Alerts created outside Test Mode are considered live Alerts and are subject to False Alarm penalties.</strong>
                </p>
              </div>
              <p className="paragraph">
                If Test Mode is available, LekkerClap will provide clear instructions on how to access and use it.
              </p>

              <h3 className="subsection-title">11.4 Appeal Process</h3>
              <p className="paragraph">
                If you believe an Alert was incorrectly classified as a False Alarm, you may: 1. Submit a written explanation to LekkerClap within 30 days of the determination 2. Provide evidence supporting your claim that the Alert was valid 3. Request a review by our compliance team
              </p>
              <p className="paragraph">
                LekkerClap will review your appeal and notify you of the outcome within 15 business days. The appeal process does not waive your payment obligation for False Alarms unless LekkerClap agrees in writing.
              </p>

              <h3 className="subsection-title">11.5 Repeat Violations</h3>
              <p className="paragraph">
                Users who repeatedly create False Alarms may face: - Increased penalties - Temporary or permanent account suspension - Restrictions on Alert creation - Referral to law enforcement for potential criminal penalties (false emergency reporting is illegal in many jurisdictions)
              </p>

              <h3 className="subsection-title">11.6 Administrative Fees</h3>
              <p className="paragraph">
                In addition to penalties, users who create recurring False Alarms may be charged administrative fees to cover: - Investigation costs - Emergency services response costs - Platform moderation and review - Legal and compliance expenses
              </p>
            </section>

            <section id="termination" className="section">
              <h2 className="section-title">12. TERMINATION AND SUSPENSION OF SERVICE</h2>

              <h3 className="subsection-title">12.1 Termination by You</h3>
              <p className="paragraph">
                You may terminate your account at any time by: 1. Logging into your account and requesting account deletion 2. Contacting our support team in writing 3. Following the account deletion process in Platform settings
              </p>
              <p className="paragraph">
                Upon termination: - Your account will be deactivated - You will no longer receive Alerts - We will retain your User Content as permitted by law and this Agreement - You remain responsible for any outstanding fees or penalties
              </p>

              <h3 className="subsection-title">12.2 Suspension or Termination by LekkerClap</h3>
              <p className="paragraph">
                LekkerClap may suspend or terminate your account immediately and without prior notice if: - You violate this Agreement - You repeatedly create False Alarms - Your account is used for illegal activity - You engage in harassment or abuse of other users - Your conduct violates emergency services protocols - We reasonably believe continued access poses a safety or legal risk - You fail to pay assessed penalties or fees - We are required to do so by law or court order
              </p>

              <h3 className="subsection-title">12.3 Consequences of Termination</h3>
              <p className="paragraph">
                Upon termination or suspension: - Your access to the Platform will cease immediately - Your account data may be retained as required by law - You forgo any outstanding benefits or unused services - You remain liable for penalties, fees, and indemnification obligations - Any legal claims or investigations may continue
              </p>

              <h3 className="subsection-title">12.4 Reactivation</h3>
              <p className="paragraph">
                If your account is suspended, you may request reactivation by: 1. Contacting our support team 2. Explaining the circumstances of the suspension 3. Demonstrating compliance with this Agreement
              </p>
              <p className="paragraph">
                Reactivation is at LekkerClap's sole discretion and is not guaranteed.
              </p>
            </section>

            <section id="liability" className="section">
              <h2 className="section-title">13. LIMITATION OF LIABILITY AND DISCLAIMERS</h2>

              <h3 className="subsection-title">13.1 No Assumption of Duty of Care</h3>
              <div className="warning-box">
                <p className="paragraph">
                  <strong>LekkerClap is a platform that facilitates communication and awareness between community members. LekkerClap does not provide emergency services, security services, law enforcement, or medical services, and does not assume any duty of care to users or third parties.</strong>
                </p>
              </div>
              <p className="paragraph">
                By using the Platform, you acknowledge that: - LekkerClap does not control, direct, supervise, or guarantee any response to an Alert - Any actions taken by users in response to Alerts are undertaken voluntarily and at their own discretion - LekkerClap does not make decisions or provide instructions regarding emergency response - Users and responders act independently and bear responsibility for their own actions
              </p>

              <h3 className="subsection-title">13.2 Specific Disclaimers</h3>
              <p className="paragraph">
                <strong>LekkerClap does NOT guarantee:</strong>
              </p>
              <ul className="list">
                <li className="list-item"><strong>Response to Alerts:</strong> We do not guarantee that any Alert will be received, read, understood, or acted upon</li>
                <li className="list-item"><strong>Response Times:</strong> We do not guarantee any response time and are not liable for delays</li>
                <li className="list-item"><strong>Responder Quality:</strong> We do not control the quality, competence, or adequacy of responses from other users or emergency services</li>
                <li className="list-item"><strong>Emergency Services Response:</strong> We do not control emergency services and are not liable for their actions or inactions</li>
                <li className="list-item"><strong>Personal Safety:</strong> We do not guarantee your safety, security, or the resolution of emergencies</li>
                <li className="list-item"><strong>Injuries or Deaths:</strong> We are not liable for personal injury, death, or property damage related to Alerts or responses (or lack thereof)</li>
                <li className="list-item"><strong>Third-Party Services:</strong> We are not liable for failures of third-party services, including telecommunications, cloud providers, or emergency dispatch systems</li>
                <li className="list-item"><strong>Platform Availability:</strong> We do not guarantee uninterrupted access to the Platform</li>
                <li className="list-item"><strong>Delivery of Notifications:</strong> We do not guarantee delivery of notifications to intended recipients</li>
                <li className="list-item"><strong>Data Accuracy:</strong> We do not guarantee the accuracy, completeness, or timeliness of information on the Platform</li>
                <li className="list-item"><strong>Force Majeure:</strong> We are not liable for service interruptions due to natural disasters, war, terrorism, strikes, power outages, or other events beyond our control</li>
              </ul>

              <h3 className="subsection-title">13.3 User Acknowledgment and Assumption of Risk</h3>
              <p className="paragraph">
                <strong>You acknowledge and agree that:</strong>
              </p>
              <ul className="list">
                <li className="list-item">Using a community alert platform involves inherent risks and uncertainties</li>
                <li className="list-item">The Platform is not a substitute for direct calls to emergency services (911, police, ambulance, or local equivalent)</li>
                <li className="list-item">You should continue to contact emergency services directly in urgent situations</li>
                <li className="list-item">The Platform may fail due to technical issues, network outages, user behavior, or other factors</li>
                <li className="list-item">Responders may not receive, understand, or respond to your Alert</li>
                <li className="list-item">Even if received, response is not guaranteed</li>
                <li className="list-item">Relying solely on this Platform for emergency response could result in serious injury, death, or property loss</li>
                <li className="list-item">You voluntarily assume all risks associated with using the Platform</li>
                <li className="list-item">You release LekkerClap from all claims arising from your use of the Platform or reliance on Alerts or responses (or lack thereof)</li>
              </ul>

              <h3 className="subsection-title">13.4 Disclaimers of Warranties</h3>
              <p className="paragraph">
                To the fullest extent permitted by law:
              </p>
              <div className="warning-box">
                <p className="paragraph">
                  <strong>The Platform is provided "AS IS" and "AS AVAILABLE" without warranties of any kind, either express or implied. LekkerClap disclaims all warranties, including:</strong>
                </p>
              </div>
              <ul className="list">
                <li className="list-item"><strong>Fitness for a Particular Purpose:</strong> The Platform is not warranted to be suitable for any particular use</li>
                <li className="list-item"><strong>Merchantability:</strong> The Platform is not warranted to be of merchantable quality</li>
                <li className="list-item"><strong>Non-Infringement:</strong> LekkerClap does not warrant that Platform content does not infringe third-party rights</li>
                <li className="list-item"><strong>Accuracy:</strong> LekkerClap does not warrant the accuracy or completeness of Platform content</li>
                <li className="list-item"><strong>Availability:</strong> LekkerClap does not warrant that the Platform will be error-free or continuously available</li>
                <li className="list-item"><strong>Security:</strong> LekkerClap does not warrant that the Platform is secure or free from malware</li>
              </ul>

              <h3 className="subsection-title">13.5 Limitation of Liability</h3>
              <div className="warning-box">
                <p className="paragraph">
                  <strong>To the fullest extent permitted by law, in no event shall LekkerClap be liable for:</strong>
                </p>
              </div>
              <ul className="list">
                <li className="list-item"><strong>Indirect Damages:</strong> Indirect, incidental, special, consequential, or punitive damages</li>
                <li className="list-item"><strong>Lost Profits:</strong> Lost profits, revenue, or business opportunities</li>
                <li className="list-item"><strong>Lost Data:</strong> Loss of data, information, or content</li>
                <li className="list-item"><strong>Reputational Harm:</strong> Damage to reputation or goodwill</li>
                <li className="list-item"><strong>Any Damages Over Cap:</strong> Any damages, losses, or claims exceeding the amount you have paid to LekkerClap in the 12 months preceding the claim (or $100 USD if you have not paid anything)</li>
              </ul>
              <p className="paragraph">
                <strong>This limitation applies regardless of the cause of action, whether based on warranty, contract, tort, negligence, strict liability, or any other legal theory, and even if LekkerClap has been advised of the possibility of such damages.</strong>
              </p>

              <h3 className="subsection-title">13.6 Exceptions to Liability Limitations</h3>
              <p className="paragraph">
                The liability limitations in this Section 13 do not apply to:
              </p>
              <ul className="list">
                <li className="list-item"><strong>Gross Negligence or Willful Misconduct:</strong> Claims arising from gross negligence, recklessness, or willful misconduct by LekkerClap</li>
                <li className="list-item"><strong>Mandatory Consumer Protection Law:</strong> Protections that cannot be waived under consumer protection laws in your jurisdiction</li>
                <li className="list-item"><strong>Death or Bodily Injury:</strong> Claims arising from death, severe bodily injury, or intentional harm (except to the extent permitted by law)</li>
                <li className="list-item"><strong>Willful Violation of Law:</strong> LekkerClap's willful violation of mandatory legal requirements</li>
                <li className="list-item"><strong>Data Protection Breaches:</strong> Violations of GDPR, CCPA, or other data protection laws cannot be fully waived under applicable law</li>
              </ul>
              <p className="paragraph">
                <strong>Jurisdiction-Specific Exceptions:</strong> - EU/EEA (GDPR): Liability for data protection violations cannot be limited below €2 million or 4% of global revenue, as required by law - California (CCPA): Liability for data breach cannot be waived; statutory damages of $100-$750 per consumer still apply - Consumer Protection Laws: State and local consumer protection laws may override liability limitations where applicable
              </p>
            </section>

            <section id="indemnification" className="section">
              <h2 className="section-title">14. INDEMNIFICATION</h2>

              <h3 className="subsection-title">14.1 Indemnification by User</h3>
              <div className="warning-box">
                <p className="paragraph">
                  <strong>You agree to indemnify, defend (with attorneys reasonably acceptable to LekkerClap), and hold harmless LekkerClap and its:</strong> - Officers, directors, employees, and agents - Service providers and contractors - Partners and affiliates - Emergency services responders
                </p>
              </div>
              <p className="paragraph">
                <strong>From and against all:</strong> - Claims, damages, and losses (including reasonable attorney's fees) - Judgments, settlements, and penalties - Costs and expenses - Fines and regulatory penalties
              </p>
              <p className="paragraph">
                <strong>Arising from or related to:</strong> - Your use of the Platform in violation of this Agreement - Your violation of any applicable law or regulation - Your User Content or communications - Infringement of third-party rights (intellectual property, privacy, publicity, etc.) by your content - False, fraudulent, or misleading information you provide - Claims by third parties regarding your account or conduct - Your failure to comply with emergency responder instructions - Your actions or inactions related to Alerts you created or responded to
              </p>

              <h3 className="subsection-title">14.2 Indemnification Procedures</h3>
              <p className="paragraph">
                <strong>Notice:</strong> The indemnified party will provide prompt written notice of any claim, as soon as reasonably practicable.
              </p>
              <p className="paragraph">
                <strong>Defense and Control:</strong> You will have the right to control the defense of the claim with attorneys of your choice, provided that: - The attorneys are reasonably acceptable to LekkerClap - The indemnified party may participate at your expense - You do not settle the claim without the indemnified party's prior written consent (not to be unreasonably withheld)
              </p>
              <p className="paragraph">
                <strong>Cooperation:</strong> You agree to cooperate fully in the defense, including: - Providing documents, information, and witnesses - Making relevant personnel available for depositions - Not taking actions that harm the defense of the claim
              </p>

              <h3 className="subsection-title">14.3 Exclusions from Indemnification</h3>
              <p className="paragraph">
                You are not required to indemnify LekkerClap for claims arising from: - LekkerClap's gross negligence, recklessness, or willful misconduct - LekkerClap's violation of applicable law - LekkerClap's breach of this Agreement - Defective design, operation, or security of the Platform (not caused by your use) - Claims not related to your use of the Platform or your conduct - LekkerClap's failure to detect or prevent False Alarms
              </p>
            </section>

            <section id="third-party" className="section">
              <h2 className="section-title">15. THIRD-PARTY LINKS AND SERVICES</h2>

              <h3 className="subsection-title">15.1 Links to Third-Party Websites</h3>
              <p className="paragraph">
                The Platform may contain links to third-party websites, applications, and services. LekkerClap: - Does not control these third-party services - Is not responsible for their content, accuracy, or operations - Does not endorse or recommend them - Is not liable for any damages or losses arising from your use of them
              </p>
              <p className="paragraph">
                Your use of third-party services is governed by their terms and privacy policies, not this Agreement.
              </p>

              <h3 className="subsection-title">15.2 Third-Party Integrations</h3>
              <p className="paragraph">
                If the Platform integrates with third-party services (e.g., emergency dispatch systems, cloud providers), you acknowledge that: - These integrations are provided "as is" - LekkerClap does not control these services - Failures in third-party services may impact Platform functionality - LekkerClap is not liable for failures of third-party services
              </p>
            </section>

            <section id="dispute" className="section">
              <h2 className="section-title">16. DISPUTE RESOLUTION AND GOVERNING LAW</h2>

              <h3 className="subsection-title">16.1 Governing Law</h3>
              <p className="paragraph">
                This Agreement is governed by and construed in accordance with the laws of Mauritius, without regard to its conflict-of-laws principles. The substantive law of Mauritius will apply to all disputes, claims, and proceedings.
              </p>

              <h3 className="subsection-title">16.2 Dispute Resolution and Jurisdiction</h3>
              <p className="paragraph">
                In the event of a dispute arising from or related to this Agreement, the Platform, or your use thereof, the parties agree as follows:
              </p>
              <p className="paragraph">
                <strong>Primary Jurisdiction:</strong> The courts of Mauritius shall have exclusive jurisdiction to hear and determine the dispute.
              </p>
              <p className="paragraph">
                <strong>Mutual Arbitration Option:</strong> Notwithstanding the above, if both parties mutually agree at the time a dispute arises, the dispute may instead be referred to binding arbitration. If arbitration is elected:
              </p>
              <ul className="list">
                <li className="list-item"><strong>Seat of Arbitration:</strong> Mauritius</li>
                <li className="list-item"><strong>Arbitration Rules:</strong> The dispute will be conducted under the rules of a mutually agreed arbitration body, or in the absence of agreement, under the rules of the International Court of Arbitration (ICC) or equivalent body as specified by Mauritius law</li>
                <li className="list-item"><strong>Arbitrator Selection:</strong> A single arbitrator will be selected jointly by the parties, or if the parties cannot agree, in accordance with arbitration rules</li>
                <li className="list-item"><strong>Binding Decision:</strong> The arbitrator's decision is final and binding</li>
                <li className="list-item"><strong>Costs:</strong> Each party bears its own costs; arbitrator fees are split unless the arbitrator awards costs to one party</li>
                <li className="list-item"><strong>Confidentiality:</strong> Arbitration proceedings and decisions remain confidential</li>
              </ul>

              <h3 className="subsection-title">16.3 Dispute Notice and Resolution Process</h3>
              <p className="paragraph">
                Before initiating legal proceedings or arbitration, the parties agree to attempt good-faith resolution as follows:
              </p>
              <ol className="list">
                <li className="list-item"><strong>Written Notice:</strong> The party initiating the dispute will send written notice to the other party describing the dispute, desired resolution, and proposed remedy</li>
                <li className="list-item"><strong>Negotiation Period:</strong> The parties will have 30 days to negotiate and attempt resolution</li>
                <li className="list-item"><strong>Escalation (Optional):</strong> If unresolved, either party may escalate to senior management for further negotiation</li>
                <li className="list-item"><strong>Formal Proceedings:</strong> If not resolved within 60 days, either party may initiate formal legal proceedings or arbitration as described above</li>
              </ol>

              <h3 className="subsection-title">16.4 Jurisdiction-Specific Provisions</h3>
              <p className="paragraph">
                <strong>For Users in Other Jurisdictions:</strong> If you are located outside Mauritius, you acknowledge that: - You submit to the jurisdiction of Mauritius courts - Mauritius law will govern this Agreement - You may still access local consumer remedies to the extent mandatory under your local law
              </p>
            </section>

            <section id="modifications" className="section">
              <h2 className="section-title">17. MODIFICATIONS TO TERMS</h2>

              <h3 className="subsection-title">17.1 Right to Modify</h3>
              <p className="paragraph">
                LekkerClap may modify this Agreement at any time by posting the updated terms on the Platform. Modifications may include: - Changes to Platform features or functionality - Changes to pricing or billing - Changes to prohibited conduct or use restrictions - Changes to limitation of liability or disclaimers - Clarifications or updates to terms
              </p>

              <h3 className="subsection-title">17.2 Notice of Changes</h3>
              <p className="paragraph">
                LekkerClap will provide notice of material changes through: - In-app notification - Email to your registered email address - A prominent notice on the Platform - Update to the "Last Updated" date at the top of this Agreement
              </p>

              <h3 className="subsection-title">17.3 Acceptance of Changes</h3>
              <p className="paragraph">
                Your continued use of the Platform following notice of changes constitutes your acceptance of the modified terms. If you do not agree with any changes, your exclusive remedy is to discontinue use of the Platform.
              </p>
              <p className="paragraph">
                Changes to liability limitations or disclaimers may require affirmative acceptance in some jurisdictions; LekkerClap will comply with applicable law regarding material changes.
              </p>
            </section>

            <section id="entire-agreement" className="section">
              <h2 className="section-title">18. ENTIRE AGREEMENT</h2>

              <h3 className="subsection-title">18.1 Integration</h3>
              <p className="paragraph">
                This Agreement, including the Privacy Policy and any additional terms posted on the Platform, constitutes the entire agreement between you and LekkerClap regarding the Platform and supersedes all prior agreements, understandings, and communications (whether written or oral).
              </p>

              <h3 className="subsection-title">18.2 Order of Precedence</h3>
              <p className="paragraph">
                If any inconsistency exists between documents, the order of precedence is: 1. Court-ordered injunctions or mandatory legal requirements 2. This Terms and Conditions of Use 3. The Privacy Policy 4. Any other posted terms or guidelines
              </p>

              <h3 className="subsection-title">18.3 No Third-Party Beneficiaries</h3>
              <p className="paragraph">
                Nothing in this Agreement is intended to create any third-party beneficiary rights. Only you and LekkerClap have rights under this Agreement.
              </p>
            </section>

            <section id="severability" className="section">
              <h2 className="section-title">19. SEVERABILITY</h2>

              <h3 className="subsection-title">19.1 Severability Clause</h3>
              <p className="paragraph">
                If any provision of this Agreement is found to be invalid, illegal, or unenforceable by a court of competent jurisdiction, such provision will be modified to the minimum extent necessary to make it enforceable, or if that is not possible, will be severed from this Agreement.
              </p>

              <h3 className="subsection-title">19.2 Remaining Terms</h3>
              <p className="paragraph">
                The severance of any provision does not affect the validity or enforceability of any other provision. This Agreement will remain in full force and effect with all other provisions intact.
              </p>

              <h3 className="subsection-title">19.3 Reformation</h3>
              <p className="paragraph">
                If a provision is found unenforceable, the parties agree to accept the court's or arbitrator's reformation of the provision to the maximum extent permitted by law.
              </p>
            </section>

            <section id="contact" className="section">
              <h2 className="section-title">20. CONTACT INFORMATION</h2>

              <h3 className="subsection-title">20.1 LekkerClap Contact Details</h3>
              <p className="paragraph">
                For questions, complaints, or notices regarding this Agreement, the Platform, or your account, contact LekkerClap at:
              </p>
              <p className="paragraph">
                <strong>LekkerClap Africa Ltd</strong><br />
                Email: support@lekkerclap.com
              </p>

              <h3 className="subsection-title">20.2 Copyright and Trademark Notice</h3>
              <p className="paragraph">
                © 2025-2026 LekkerClap Africa Ltd. All rights reserved.
              </p>
              <p className="paragraph">
                LekkerClap, the LekkerClap logo, and related names and marks are trademarks of LekkerClap Africa Ltd and may not be used without prior written permission.
              </p>

              <h3 className="subsection-title">20.3 Regulatory Disclosures</h3>
              <p className="paragraph">
                For users in specific jurisdictions: - EU/EEA users are entitled to additional consumer protections under EU law - California users are entitled to privacy rights under the California Consumer Privacy Act - South African users are entitled to consumer rights under the National Credit Act and Consumer Protection Act - Zimbabwe users are subject to the laws of Zimbabwe as applicable
              </p>
              <p className="paragraph">
                LekkerClap will comply with all mandatory consumer protection and data protection laws applicable to your jurisdiction.
              </p>
            </section>

            <section id="appendix-a" className="section">
              <h2 className="section-title">APPENDIX A: COUNCIL AND GOVERNMENT PARTNERSHIP ADDENDUM</h2>

              <h3 className="subsection-title">A.1 Scope of Partnership</h3>
              <p className="paragraph">
                When LekkerClap operates under a Memorandum of Understanding (MOU), pilot program, or partnership with any government agency, council, or public body (the "Partner"), the following additional terms apply:
              </p>

              <h3 className="subsection-title">A.2 Limitation of Responsibility</h3>
              <div className="warning-box">
                <p className="paragraph">
                  <strong>LekkerClap is a digital communication platform and does not assume responsibility for:</strong> - The actions or inactions of users, volunteers, or third parties responding to Alerts - Response times, response quality, or incident outcomes - Emergency services response or dispatch decisions - The performance or conduct of emergency responders - The adequacy of resources or training of responders - Verification of information in Alerts
                </p>
              </div>
              <p className="paragraph">
                The Partner acknowledges that: - LekkerClap operates as an independent platform provider - LekkerClap does not replace or supplement official emergency services - The Partner retains all responsibility for emergency response and public safety - The Partner remains liable for the actions of its own employees and agents
              </p>

              <h3 className="subsection-title">A.3 No Implied Agency or Joint Liability</h3>
              <p className="paragraph">
                The Partner and LekkerClap are independent parties. Nothing in this Agreement or any MOU creates: - An agency or partnership relationship - Shared liability for emergency response - Joint control over Platform operations - Implied representation that LekkerClap is an official government service
              </p>

              <h3 className="subsection-title">A.4 Liability Allocation</h3>
              <ul className="list">
                <li className="list-item"><strong>LekkerClap is liable for:</strong> Defects in the Platform, security breaches, gross negligence</li>
                <li className="list-item"><strong>The Partner is liable for:</strong> Emergency response decisions, responder conduct, public safety outcomes</li>
              </ul>
              <p className="paragraph">
                Neither party is liable for the other's operations or decisions.
              </p>

              <h3 className="subsection-title">A.5 MOU Disputes</h3>
              <p className="paragraph">
                Disputes arising under an MOU will be governed by the terms of the specific MOU and these Terms and Conditions, with the MOU taking precedence on partnership-specific matters.
              </p>
            </section>

            <section id="appendix-b" className="section">
              <h2 className="section-title">APPENDIX B: CORPORATE DATA PROTECTION ADDENDUM</h2>
              <p className="paragraph">
                This Addendum applies to business and organizational users who may process personal data through the Platform.
              </p>

              <h3 className="subsection-title">B.1 Data Processing</h3>
              <p className="paragraph">
                Users who create Alerts containing personal data (names, phone numbers, location data) acknowledge that: - The data is processed according to our Privacy Policy - Data may be shared with emergency services or responders - Data is retained according to our retention schedule - Users are responsible for obtaining necessary consent to include others' data in Alerts
              </p>

              <h3 className="subsection-title">B.2 GDPR Compliance (for EU Users)</h3>
              <p className="paragraph">
                For users subject to GDPR: - LekkerClap is a data processor when acting on your instructions - A Data Processing Agreement is available upon request - You are responsible for obtaining lawful basis for data processing - You may exercise data subject rights through your account or support@lekkerclap.com
              </p>

              <h3 className="subsection-title">B.3 CCPA Compliance (for California Users)</h3>
              <p className="paragraph">
                For California residents: - LekkerClap does not "sell" personal information as defined by CCPA - You have the right to know what personal data we collect - You have the right to delete your personal data (subject to legal obligations) - Exercise these rights through your account or support@lekkerclap.com
              </p>
            </section>

            <section className="section" style={{borderTop: '3px solid #b91c1c', paddingTop: '2rem'}}>
              <h2 className="section-title">END OF TERMS AND CONDITIONS</h2>
              <p className="paragraph" style={{marginTop: '2rem', fontSize: '1.125rem', fontWeight: 600, color: '#7f1d1d'}}>
                By using LekkerClap, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
              </p>
              <p className="paragraph" style={{marginTop: '1rem', fontStyle: 'italic', color: '#78716c'}}>
                Last Updated: January 5, 2026<br />
                Effective Date: January 1, 2026
              </p>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

