"use client";

import { useEffect, useRef, useState, useCallback } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────
interface Section {
  id: string;
  number: string;
  title: string;
  starred?: boolean;
}

// ─── TOC Data ─────────────────────────────────────────────────────────────────
const SECTIONS: Section[] = [
  { id: "s1",  number: "01", title: "Definitions" },
  { id: "s2",  number: "02", title: "Grant of License" },
  { id: "s3",  number: "03", title: "Scope of License" },
  { id: "s4",  number: "04", title: "License Restrictions" },
  { id: "s5",  number: "05", title: "Location Services & Emergency Dispatch", starred: true },
  { id: "s6",  number: "06", title: "Ownership & Intellectual Property" },
  { id: "s7",  number: "07", title: "Third-Party Software & Open Source" },
  { id: "s8",  number: "08", title: "Permitted Uses" },
  { id: "s9",  number: "09", title: "Prohibited Uses" },
  { id: "s10", number: "10", title: "Term & Termination" },
  { id: "s11", number: "11", title: "Updates, Patches & Upgrades" },
  { id: "s12", number: "12", title: "Support & Maintenance" },
  { id: "s13", number: "13", title: "Limitations of Liability" },
  { id: "s14", number: "14", title: "Indemnification" },
  { id: "s15", number: "15", title: "Data Collection & Privacy" },
  { id: "s16", number: "16", title: "Confidentiality" },
  { id: "s17", number: "17", title: "Compliance with Laws" },
  { id: "s18", number: "18", title: "Geographic Restrictions" },
  { id: "s19", number: "19", title: "Modifications to EULA" },
  { id: "s20", number: "20", title: "Entire Agreement" },
  { id: "s21", number: "21", title: "Contact Information" },
  { id: "s22", number: "22", title: "Special Provisions" },
  { id: "s23", number: "23", title: "Acknowledgment" },
];

// ─── Sub-components ───────────────────────────────────────────────────────────
function AlertBox({ variant, children }: { variant: "danger" | "info"; children: React.ReactNode }) {
  return (
    <div className={`alert-box alert-${variant}`}>
      <span className="alert-icon">{variant === "danger" ? "⚠" : "ℹ"}</span>
      <div className="alert-body">{children}</div>
      <style jsx>{`
        .alert-box {
          display: flex;
          gap: 1rem;
          padding: 1.25rem 1.5rem;
          border-radius: 4px;
          margin: 1.5rem 0;
        }
        .alert-danger {
          background: rgba(180, 30, 30, 0.07);
          border-left: 4px solid #b41e1e;
          border: 1px solid rgba(180, 30, 30, 0.2);
          border-left: 4px solid #b41e1e;
        }
        .alert-info {
          background: rgba(15, 40, 90, 0.06);
          border: 1px solid rgba(15, 40, 90, 0.15);
          border-left: 4px solid #0f285a;
        }
        .alert-icon {
          font-size: 1.1rem;
          flex-shrink: 0;
          margin-top: 2px;
          color: ${variant === "danger" ? "#b41e1e" : "#0f285a"};
        }
        .alert-body {
          font-size: 0.875rem;
          line-height: 1.7;
          color: ${variant === "danger" ? "#8a1515" : "#1a2f5e"};
          font-weight: 500;
        }
      `}</style>
    </div>
  );
}

function SectionHeading({ id, number, title }: { id: string; number: string; title: string }) {
  return (
    <h2 id={id} className="section-heading">
      <span className="section-number">{number}</span>
      {title}
      <style jsx>{`
        .section-heading {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(1.4rem, 2.5vw, 1.9rem);
          font-weight: 700;
          color: #0f285a;
          margin: 3rem 0 1rem;
          padding-bottom: 0.75rem;
          border-bottom: 1.5px solid #d4c9b0;
          display: flex;
          align-items: baseline;
          gap: 1rem;
          scroll-margin-top: 100px;
          letter-spacing: -0.01em;
        }
        .section-number {
          font-family: 'DM Mono', 'Courier New', monospace;
          font-size: 0.75rem;
          font-weight: 400;
          color: #b8a87a;
          letter-spacing: 0.08em;
          flex-shrink: 0;
        }
      `}</style>
    </h2>
  );
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="sub-heading">
      {children}
      <style jsx>{`
        .sub-heading {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 1.1rem;
          font-weight: 600;
          color: #1a3060;
          margin: 1.75rem 0 0.5rem;
          letter-spacing: 0.01em;
        }
      `}</style>
    </h3>
  );
}

function H4({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="h4">
      {children}
      <style jsx>{`
        .h4 {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.85rem;
          font-weight: 600;
          color: #0f285a;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin: 1.5rem 0 0.5rem;
        }
      `}</style>
    </h4>
  );
}

function P({ children, caps }: { children: React.ReactNode; caps?: boolean }) {
  return (
    <p className={caps ? "p caps" : "p"}>
      {children}
      <style jsx>{`
        .p {
          margin: 0.75rem 0;
          line-height: 1.85;
          color: #2c2c2c;
        }
        .caps {
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 0.04em;
          color: #1a1a1a;
          line-height: 1.7;
        }
      `}</style>
    </p>
  );
}

function UL({ items }: { items: string[] }) {
  return (
    <ul className="ul">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
      <style jsx>{`
        .ul {
          margin: 0.75rem 0 0.75rem 0;
          padding-left: 0;
          list-style: none;
        }
        .ul li {
          position: relative;
          padding-left: 1.5rem;
          margin: 0.4rem 0;
          line-height: 1.75;
          color: #2c2c2c;
          font-size: 0.9rem;
        }
        .ul li::before {
          content: '—';
          position: absolute;
          left: 0;
          color: #b8a87a;
          font-weight: 700;
        }
      `}</style>
    </ul>
  );
}

function StepBlock({ step, title, children }: { step: string; title: string; children: React.ReactNode }) {
  return (
    <div className="step-block">
      <div className="step-marker">
        <span className="step-num">{step}</span>
        <div className="step-line" />
      </div>
      <div className="step-content">
        <div className="step-title">{title}</div>
        {children}
      </div>
      <style jsx>{`
        .step-block {
          display: flex;
          gap: 1.25rem;
          margin: 1.25rem 0;
        }
        .step-marker {
          display: flex;
          flex-direction: column;
          align-items: center;
          flex-shrink: 0;
        }
        .step-num {
          width: 2rem;
          height: 2rem;
          border-radius: 50%;
          background: #0f285a;
          color: #f0e8d6;
          font-family: 'DM Mono', monospace;
          font-size: 0.75rem;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .step-line {
          width: 1px;
          flex: 1;
          background: linear-gradient(to bottom, #d4c9b0, transparent);
          margin-top: 4px;
        }
        .step-content {
          padding-bottom: 1rem;
          flex: 1;
        }
        .step-title {
          font-weight: 600;
          color: #0f285a;
          font-size: 0.9rem;
          margin-bottom: 0.4rem;
          font-family: 'DM Sans', sans-serif;
        }
      `}</style>
    </div>
  );
}

function PermissionTag({ label, req }: { label: string; req: string }) {
  return (
    <div className="perm-tag">
      <code className="perm-code">{label}</code>
      <span className="perm-req">{req}</span>
      <style jsx>{`
        .perm-tag {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          padding: 0.6rem 0;
          border-bottom: 1px solid #ece6d8;
        }
        .perm-code {
          font-family: 'DM Mono', monospace;
          font-size: 0.75rem;
          background: #f0e8d6;
          color: #0f285a;
          padding: 2px 8px;
          border-radius: 3px;
          flex-shrink: 0;
          margin-top: 2px;
        }
        .perm-req {
          font-size: 0.85rem;
          color: #444;
          line-height: 1.6;
        }
      `}</style>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function EULAPage() {
  const [activeSection, setActiveSection] = useState("s1");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [tocOpen, setTocOpen] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active section tracking
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
    );
    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observerRef.current?.observe(el);
    });
    return () => observerRef.current?.disconnect();
  }, []);

  const scrollTo = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setTocOpen(false);
  }, []);

  return (
    <>
      {/* ─── Google Fonts ─────────────────────────────────────────────────── */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=DM+Sans:wght@300;400;500;600&family=DM+Mono:wght@300;400;500&display=swap"
        rel="stylesheet"
      />

      <div className="root">
        {/* Progress bar */}
        <div className="progress-bar" style={{ width: `${scrollProgress}%` }} />

        {/* ─── Header ──────────────────────────────────────────────────────── */}
        <header className="header">
          <div className="header-inner">
            <div className="header-brand">
              <span className="brand-name">LekkerClap</span>
              <span className="brand-doc">End-User License Agreement</span>
            </div>
            <div className="header-meta">
              <span className="meta-badge">v1.1</span>
              <span className="meta-date">Effective January 1, 2026</span>
            </div>
          </div>
        </header>

        {/* ─── Mobile TOC toggle ────────────────────────────────────────────── */}
        <button className="toc-toggle" onClick={() => setTocOpen(!tocOpen)} aria-label="Toggle table of contents">
          <span className="toc-toggle-icon">{tocOpen ? "✕" : "≡"}</span>
          <span>Contents</span>
        </button>

        <div className="layout">
          {/* ─── Sidebar TOC ──────────────────────────────────────────────── */}
          <nav className={`sidebar ${tocOpen ? "sidebar-open" : ""}`}>
            <div className="sidebar-inner">
              <p className="sidebar-label">Contents</p>
              {SECTIONS.map((s) => (
                <button
                  key={s.id}
                  onClick={() => scrollTo(s.id)}
                  className={`toc-item ${activeSection === s.id ? "toc-active" : ""}`}
                >
                  <span className="toc-num">{s.number}</span>
                  <span className="toc-title">
                    {s.title}
                    {s.starred && <span className="toc-star">★</span>}
                  </span>
                </button>
              ))}
              <div className="sidebar-footer">
                <p>© 2025–2026 Lekkerclap Limited</p>
                <p>All rights reserved</p>
              </div>
            </div>
          </nav>

          {/* ─── Main Content ─────────────────────────────────────────────── */}
          <main className="content">
            {/* Hero */}
            <div className="hero">
              <div className="hero-eyebrow">
                <span className="eyebrow-dot" />
                Legal Document
              </div>
              <h1 className="hero-title">LekkerClap<br />License Agreement</h1>
              {/* <p className="hero-subtitle">
                Including Location Services &amp; Emergency Dispatch Disclosure<br />
                Required under Apple App Store Guideline 5.1.5
              </p> */}
              <div className="hero-meta-grid">
                <div className="hero-meta-item">
                  <span className="meta-label">Version</span>
                  <span className="meta-value">1.1</span>
                </div>
                <div className="hero-meta-item">
                  <span className="meta-label">Effective</span>
                  <span className="meta-value">Jan 1, 2026</span>
                </div>
                <div className="hero-meta-item">
                  <span className="meta-label">Updated</span>
                  <span className="meta-value">March 2026</span>
                </div>
                <div className="hero-meta-item">
                  <span className="meta-label">Licensor</span>
                  <span className="meta-value">Lekkerclap Limited</span>
                </div>
              </div>
            </div>

            <AlertBox variant="danger">
              IMPORTANT NOTICE — LOCATION SERVICES &amp; EMERGENCY DISPATCH: This application uses
              location-based APIs to transmit your precise GPS coordinates to emergency responders.
              By installing or using LekkerClap you explicitly consent to the collection, processing,
              and transmission of your real-time location data for emergency dispatch purposes.
              See Section 05 for full details.
            </AlertBox>

            {/* ── S1: Definitions ─────────────────────────────────────────── */}
            <SectionHeading id="s1" number="01" title="Definitions" />
            <P>For purposes of this EULA, the following terms have the meanings set forth below:</P>
            <UL items={[
              '"Application" or "Licensed Application" — the LekkerClap software, website, all versions, updates, patches, and associated documentation.',
              '"Platform" — the mobile application (iOS/Android), website, and all associated services and functionality.',
              '"Licensor" or "LekkerClap" — Lekkerclap Limited, owner and licensor of the Licensed Application.',
              '"You" or "User" — the individual downloading, installing, or using the Licensed Application.',
              '"Location Data" — any data derived from GPS, Wi-Fi, cellular triangulation, IP-address geolocation, Bluetooth, or any technology that identifies or approximates device/individual geographic position.',
              '"Precise Location" — GPS-derived coordinates accurate to approximately 10 metres.',
              '"Approximate Location" — location data with city-block-level accuracy (roughly 3 km radius) or coarser.',
              '"Background Location" — Location Data collected while the Application is not in the device foreground.',
              '"Distress Alert" — an emergency notification transmitted by the User through the Application, including Location Data, dispatched to Emergency Responders.',
              '"Emergency Responder" — any person or service receiving a Distress Alert (professional services, community first-responders, designated contacts).',
              '"Emergency Dispatch System" — the technical infrastructure used to receive, process, and route Distress Alerts.',
              '"Authorized User" — You and any family/household member using the Application on a device you own or control.',
              '"Confidential Information" — all non-public information regarding the Licensed Application, including source code, trade secrets, and business information.',
            ]} />

            {/* ── S2: Grant of License ────────────────────────────────────── */}
            <SectionHeading id="s2" number="02" title="Grant of License" />
            <SubHeading>2.1 Limited License Grant</SubHeading>
            <P>Subject to this EULA, Licensor grants you a personal, non-exclusive, non-transferable, revocable license to:</P>
            <UL items={[
              "Download, install, and use the Licensed Application on devices you own or control;",
              "Use the Licensed Application for its intended emergency-response and distress-alert purposes;",
              "Access services and features provided through the Application;",
              "Receive Updates (patches and bug fixes) at no additional cost;",
              "Use the Application for personal, non-commercial emergency response purposes.",
            ]} />
            <SubHeading>2.2 Scope of License</SubHeading>
            <P>This license is limited to personal, non-commercial use on devices you own, in accordance with documentation and applicable laws. It does NOT include commercial use, redistribution, sublicensing, or use beyond authorized geographic regions.</P>
            <SubHeading>2.3 Licensed Application is Not Sold</SubHeading>
            <P>The Licensed Application is licensed, not sold, to you. Licensor retains all right, title, and interest in and to the Licensed Application and all copies thereof.</P>

            {/* ── S3: Scope ───────────────────────────────────────────────── */}
            <SectionHeading id="s3" number="03" title="Scope of License" />
            <SubHeading>3.1 Device Installation</SubHeading>
            <P>You may install the Licensed Application on multiple devices you own or control. Installation on shared or public devices requires parental controls and supervision.</P>
            <SubHeading>3.2 Authorized Users</SubHeading>
            <P>A single license covers you (primary account holder), family or household members using the Application on your device with your explicit permission, and supervised minors with parental consent. Each person must accept this EULA and the Privacy Policy.</P>
            <SubHeading>3.3 Duration of License</SubHeading>
            <P>Personal licenses are granted on a perpetual basis and are revocable for EULA violations. The license terminates immediately upon account termination.</P>

            {/* ── S4: Restrictions ────────────────────────────────────────── */}
            <SectionHeading id="s4" number="04" title="License Restrictions" />
            <SubHeading>4.1 What You Cannot Do</SubHeading>
            <P>You expressly agree that you will NOT, directly or indirectly:</P>
            <UL items={[
              "Copy, duplicate, reproduce, or distribute the Licensed Application;",
              "Modify, adapt, translate, or create derivative works;",
              "Reverse engineer, disassemble, or decompile the Licensed Application;",
              "Remove copyright, trademark, or proprietary rights notices;",
              "Gain unauthorized access to systems or bypass security features;",
              "Use the Application for commercial or profit-making purposes;",
              "Transmit false, misleading, or hoax distress alerts;",
              "Use the Application for illegal purposes or to harm others;",
              "Misuse location data or emergency services features.",
            ]} />
            <SubHeading>4.2 Monitoring and Enforcement</SubHeading>
            <P>Licensor reserves the right to monitor use for compliance, use technical measures to enforce restrictions, and disable or terminate the Application if violations are detected.</P>

            {/* ── S5: LOCATION SERVICES (FLAGSHIP) ────────────────────────── */}
            <SectionHeading id="s5" number="05" title="Location Services, Emergency Dispatch & Apple Guideline 5.1.5 Compliance" />
            <AlertBox variant="info">
              This section constitutes the primary Location Services disclosure required under Apple
              App Store Review Guideline 5.1.5. It describes in full how location data is collected,
              used, transmitted, and retained in connection with emergency dispatch.
            </AlertBox>

            <SubHeading>5.1 Purpose of Location Data Collection</SubHeading>
            <P>LekkerClap is designed exclusively for emergency response and personal safety. Location Data is collected for these specific, limited purposes:</P>
            <UL items={[
              "Transmitting a User's precise GPS coordinates to the Emergency Dispatch System when a Distress Alert is activated;",
              "Enabling Emergency Responders to identify the physical location of an individual in distress with sufficient accuracy to render timely assistance;",
              "Displaying nearby registered responders or community members who can provide immediate aid;",
              "Providing navigation guidance to Emergency Responders traveling toward the individual in distress;",
              "Generating location-stamped records of Distress Alerts for post-incident review and legal/regulatory compliance;",
              "Allowing continuous location tracking during an active emergency session to update responders as the User moves.",
            ]} />
            <AlertBox variant="danger">
              Location Data is NOT collected or used for advertising, profiling, marketing analytics, or any purpose unrelated to emergency response.
            </AlertBox>

            <SubHeading>5.2 Types of Location Data Collected</SubHeading>
            <H4>5.2.1 Precise (Foreground) Location</H4>
            <P>When the Application is in the foreground, it requests access to Precise Location via GPS and/or Wi-Fi positioning, accurate to approximately 3–10 metres. This is the primary data transmitted during a Distress Alert.</P>
            <H4>5.2.2 Background Location</H4>
            <P>Once a Distress Alert is activated, the Application continues collecting Precise Location in the background to provide real-time updates to Emergency Responders. Background Location collection ceases immediately when the alert is cancelled or resolved. The Application will NOT collect Background Location outside of an active emergency session without separate, explicit consent.</P>
            <H4>5.2.3 Approximate Location</H4>
            <P>For non-emergency features (e.g., displaying nearby community responders), the Application may use Approximate Location where Precise Location is not strictly necessary.</P>
            <H4>5.2.4 Location Metadata</H4>
            <P>In addition to raw coordinates, the Application transmits the following metadata during a Distress Alert:</P>
            <UL items={[
              "Timestamp of location fix (UTC);",
              "Horizontal and vertical accuracy radius (in metres);",
              "Altitude (where available);",
              "Device heading and speed (where available);",
              "Source of location fix (GPS, Wi-Fi, cellular, or fused).",
            ]} />

            <SubHeading>5.3 Technical Architecture: How Emergency Services Receive Your Location</SubHeading>
            <P>The following describes the technical flow when you activate a Distress Alert:</P>
            <StepBlock step="1" title="Location Acquisition">
              <P>The Application immediately requests a high-accuracy location fix from the device's platform location APIs — CoreLocation on iOS, FusedLocationProviderClient on Android — using the highest accuracy level available ("Best" / "HIGH_ACCURACY"), combining GPS satellite data with Wi-Fi and cellular positioning.</P>
            </StepBlock>
            <StepBlock step="2" title="Secure Transmission">
              <P>Acquired coordinates (latitude, longitude, accuracy radius, altitude, timestamp, heading) are transmitted via encrypted HTTPS (TLS 1.3) to the LekkerClap Emergency Dispatch System. The payload is digitally signed and includes your authenticated account identifier to prevent spoofing.</P>
            </StepBlock>
            <StepBlock step="3" title="Dispatch System Processing">
              <P>The Emergency Dispatch System validates the authentication signature and immediately routes the Distress Alert to nearby registered Emergency Responders within a configurable radius, community first-responders in the area, and any pre-designated emergency contacts.</P>
            </StepBlock>
            <StepBlock step="4" title="Responder Location Display">
              <P>Emergency Responders receive the User's Precise Location via the LekkerClap Responder Application or web interface, showing a map with GPS coordinates and accuracy circle, a reverse-geocoded street address, real-time location updates if Background Location is active, and a breadcrumb trail of location history during the active session.</P>
            </StepBlock>
            <StepBlock step="5" title="Integration with Professional Emergency Services">
              <P>Where technically and legally feasible, and where the User has consented, the Application may relay location data to professional emergency services (police, fire, ambulance) in NG911/NG112 compliant format. Where no direct integration exists, responders are shown precise GPS coordinates to relay when contacting professional services.</P>
            </StepBlock>
            <AlertBox variant="info">
              Evidence of capability: LekkerClap's Emergency Dispatch System receives and identifies the precise location of individuals in distress. Location coordinates are transmitted in real-time, rendered on a map for responding parties, and reverse-geocoded to a physical address to facilitate both community and professional emergency response.
            </AlertBox>

            <SubHeading>5.4 Location Permission Requirements and User Consent</SubHeading>
            <H4>iOS Permissions</H4>
            <PermissionTag label="NSLocationWhenInUseUsageDescription" req="Required for all features. Requested upon first use of any location-dependent feature." />
            <PermissionTag label="NSLocationAlwaysAndWhenInUseUsageDescription" req="Required only when a Distress Alert is active. The Application explains why Background Location is needed before requesting this permission." />
            <PermissionTag label="NSLocationTemporaryFullAccuracyUsageDescription" req="The Application requests Precise Location when transmitting a Distress Alert and will explain the reason. Approximate Location may be accepted for non-emergency features." />
            <H4>Android Permissions</H4>
            <PermissionTag label="ACCESS_FINE_LOCATION" req="Required for Distress Alert transmission. Requested upon first alert activation." />
            <PermissionTag label="ACCESS_COARSE_LOCATION" req="Used as fallback and for non-emergency proximity features." />
            <PermissionTag label="ACCESS_BACKGROUND_LOCATION" req="Required for live location updates during an active alert. Android 10+ requires separate grant in device settings; the Application guides you through this process." />
            <P>You may modify or revoke location permissions at any time in device Settings. Revoking location permissions will prevent the Application from transmitting your location during a Distress Alert and significantly reduce emergency response effectiveness.</P>

            <SubHeading>5.5 Location Data Retention and Deletion</SubHeading>
            <UL items={[
              "Real-time alert coordinates: Retained for 36 months (law enforcement cooperation, incident review, regulatory compliance);",
              "Background location trail during active alert: Retained for 36 months;",
              "Approximate location for non-emergency features: Retained for 90 days, then deleted;",
              "Deleted account location data: Purged within 30 days of account deletion, except where law requires retention.",
            ]} />
            <P>Location Data is stored in encrypted form. Location Data is NOT sold to third parties.</P>

            <SubHeading>5.6 Third-Party Location Service Providers</SubHeading>
            <UL items={[
              "Apple CoreLocation (iOS) — platform location services subject to Apple's Privacy Policy;",
              "Google FusedLocationProviderClient (Android) — platform location services subject to Google's Privacy Policy;",
              "Reverse Geocoding API — converts GPS coordinates to human-readable addresses for Emergency Responders;",
              "Mapping Services — renders the User's location on a map for Emergency Responders.",
            ]} />

            <SubHeading>5.7 Location Accuracy Limitations</SubHeading>
            <AlertBox variant="danger">
              LOCATION ACCURACY DISCLAIMER: The accuracy of location data depends on device hardware, satellite signal availability, network conditions, and physical environment. Indoor locations, underground environments, or areas with weak GPS signals may result in reduced accuracy. The Application transmits the most accurate data available from the device, but Licensor cannot guarantee that transmitted location will be sufficient for Emergency Responders to locate the User.
            </AlertBox>
            <UL items={[
              "GPS: typically 3–10 m outdoors; may degrade to 50–100 m or more indoors;",
              "Wi-Fi positioning: typically 15–40 m but requires nearby access points;",
              "Cellular positioning: may be accurate only to 100–1,000 m depending on tower density;",
              "Altitude data may not distinguish floors in multi-story buildings;",
              "Background Location updates may be throttled by the OS to conserve battery.",
            ]} />

            <SubHeading>5.8 Your Responsibilities</SubHeading>
            <UL items={[
              "Grant Precise Location permission when prompted;",
              "Enable Background Location permission for active alert tracking;",
              "Keep device GPS hardware in functioning condition;",
              "Maintain a network connection when using the Application;",
              "Keep the operating system and Application updated;",
              "Do not use VPNs that mask your real location or deny location permissions after initial grant.",
            ]} />

            <SubHeading>5.9 Location Data and Law Enforcement</SubHeading>
            <P>In accordance with applicable law, Licensor may be required to disclose Location Data and Distress Alert records to law enforcement or regulatory authorities. Licensor will comply with lawful requests and, where permitted, will notify affected users. Distress Alert records are retained for 36 months specifically to support such cooperation.</P>

            <SubHeading>5.10 No Replacement for Direct Emergency Services</SubHeading>
            <AlertBox variant="danger">
              CRITICAL SAFETY DISCLAIMER: LekkerClap is designed to supplement — not replace — direct contact with professional emergency services. In any life-threatening emergency, ALWAYS contact your local emergency services directly (911 in the USA, 999 in the UK, 999/112 in Zimbabwe). LekkerClap does NOT guarantee that a Distress Alert will be received, acknowledged, or acted upon. The Application may be unavailable due to technical failures or network outages. Do not rely solely on this Application in an emergency.
            </AlertBox>

            {/* ── S6: Ownership & IP ──────────────────────────────────────── */}
            <SectionHeading id="s6" number="06" title="Ownership & Intellectual Property" />
            <P>Licensor owns and retains all right, title, and interest in and to the Licensed Application, including all software code, algorithms, design elements, graphics, trademarks, copyrights, patents, and trade secrets. These rights are retained regardless of whether you make modifications or additions.</P>
            <SubHeading>Copyright & Trademark</SubHeading>
            <P>Copyright © 2025–2026 Lekkerclap Limited. All Rights Reserved. LekkerClap® and all associated logos are trademarks of Lekkerclap Limited. You may not use these trademarks without prior written permission.</P>
            <SubHeading>Feedback</SubHeading>
            <P>If you provide feedback or suggestions, Licensor may use such feedback for any purpose without restriction or compensation. You grant Licensor a worldwide, perpetual, royalty-free license to any feedback you provide.</P>

            {/* ── S7: Third-Party Software ─────────────────────────────────── */}
            <SectionHeading id="s7" number="07" title="Third-Party Software & Open Source" />
            <P>The Licensed Application includes third-party components (including Didit for identity verification, cloud service providers, and analytics libraries). Your use of third-party software is subject to each provider's own terms. Licensor is not responsible for third-party software performance or availability.</P>
            <P>The Application also includes Open Source Software governed by separate licenses (MIT, Apache 2.0, GPL, BSD, etc.). OSS license terms are available at legal@lekkeclap.com. Where OSS terms conflict with this EULA, OSS terms govern solely with respect to that component.</P>

            {/* ── S8: Permitted Uses ───────────────────────────────────────── */}
            <SectionHeading id="s8" number="08" title="Permitted Uses" />
            <P>You are permitted to use the Licensed Application for:</P>
            <UL items={[
              "Transmitting genuine Distress Alerts during real emergencies;",
              "Responding to Distress Alerts from other users;",
              "Coordinating emergency response with other users and responders;",
              "Installing Updates as provided by Licensor;",
              "Contacting Licensor with questions or feedback.",
            ]} />

            {/* ── S9: Prohibited Uses ──────────────────────────────────────── */}
            <SectionHeading id="s9" number="09" title="Prohibited Uses" />
            <SubHeading>Illegal and Harmful Activities</SubHeading>
            <P>You shall NOT use the Application for illegal purposes, threats, harassment, fraud, stalking, child exploitation, terrorism, or intellectual property violations.</P>
            <SubHeading>Distress Alert Abuse</SubHeading>
            <P>You shall NOT submit false, misleading, or hoax Distress Alerts; test the Application without authorization; use alerts to harass responders; or engage in "swatting." Violation may result in license termination, ban, disclosure to law enforcement, and civil or criminal liability.</P>
            <SubHeading>Location Data Misuse</SubHeading>
            <P>You shall NOT collect, scrape, sell, or share Location Data from other users; access other users' location without authorization; or use Location Data for surveillance or stalking.</P>
            <SubHeading>Security and System Integrity</SubHeading>
            <P>You shall NOT probe Application systems for vulnerabilities, overload servers, modify Application code without authorization, or interfere with security or authentication systems.</P>

            {/* ── S10: Termination ─────────────────────────────────────────── */}
            <SectionHeading id="s10" number="10" title="Term & Termination" />
            <P>Personal licenses are granted on a perpetual basis but are revocable for EULA violations. Account-based licenses terminate when the account is suspended or closed.</P>
            <SubHeading>Termination by Licensor</SubHeading>
            <P>Licensor may immediately terminate this license for any EULA violation, including submission of false Distress Alerts, unauthorized reverse engineering, or illegal activity. Termination may occur with or without prior notice.</P>
            <SubHeading>Termination by You</SubHeading>
            <P>You may terminate by deleting the Application from all devices, closing your account, or writing to legal@lekkeclap.com. Termination is effective immediately. You must delete all copies of the Application upon termination.</P>

            {/* ── S11: Updates ─────────────────────────────────────────────── */}
            <SectionHeading id="s11" number="11" title="Updates, Patches & Upgrades" />
            <P>Updates (patches and bug fixes) are provided at no charge and must be installed within 30 days of release. Some Updates may be installed automatically. Failure to install Updates may void warranties and expose your device to security risks.</P>
            <P>Upgrades (major versions) may be offered at additional cost and are optional unless required for continued support. Licensor will provide at least one year's notice before end-of-life.</P>

            {/* ── S12: Support ─────────────────────────────────────────────── */}
            <SectionHeading id="s12" number="12" title="Support & Maintenance" />
            <P>Licensor provides technical support via support@lekkeclap.com and in-app help documentation, with a 48-business-hour response target. Support is provided on a best-effort basis and excludes third-party software, hardware problems, or issues caused by user modifications. Licensor will provide at least 30 days' notice before discontinuing support.</P>

            {/* ── S13: Liability ───────────────────────────────────────────── */}
            <SectionHeading id="s13" number="13" title="Limitations of Liability" />
            <P caps>TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, LICENSOR PROVIDES THE LICENSED APPLICATION ON AN "AS-IS" AND "AS-AVAILABLE" BASIS WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED.</P>
            <AlertBox variant="danger">
              LICENSOR DOES NOT GUARANTEE THAT DISTRESS ALERTS WILL BE RECEIVED, PROCESSED, OR ACTED UPON. LICENSOR DOES NOT GUARANTEE RESPONSE TIMES OR THE QUALITY OF EMERGENCY RESPONSE. LICENSOR DOES NOT GUARANTEE THE ACCURACY OF LOCATION DATA TRANSMITTED. LICENSOR DOES NOT ASSUME LIABILITY FOR EMERGENCY RESPONDER ACTIONS OR FAILURES.
            </AlertBox>
            <P caps>TO THE MAXIMUM EXTENT PERMITTED BY LAW, LICENSOR'S TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT YOU PAID TO LICENSOR IN THE PAST 12 MONTHS, OR USD 1,000 IF NO FEE WAS PAID. LICENSOR SHALL NOT BE LIABLE FOR INDIRECT, INCIDENTAL, CONSEQUENTIAL, SPECIAL, OR PUNITIVE DAMAGES.</P>
            <P>Exceptions: The liability cap does not apply to gross negligence, willful misconduct, fraud, death or severe bodily injury caused by Licensor's negligence, or data protection law violations.</P>

            {/* ── S14: Indemnification ─────────────────────────────────────── */}
            <SectionHeading id="s14" number="14" title="Indemnification" />
            <P>You agree to indemnify, defend, and hold harmless Licensor and its affiliates, officers, directors, and employees from all claims, damages, penalties, and attorney's fees arising from: your use of the Application in violation of this EULA; your violation of applicable law; false or fraudulent Distress Alerts; or any injury, death, or property damage caused by your use of the Application. You are not required to indemnify Licensor for its own gross negligence or willful misconduct.</P>

            {/* ── S15: Privacy ─────────────────────────────────────────────── */}
            <SectionHeading id="s15" number="15" title="Data Collection & Privacy" />
            <P>Your use of the Application is governed by the LekkerClap Privacy Policy (available at [Privacy Policy URL]), incorporated herein by reference. The Application collects account information, Location Data (see Section 05), device information, usage data, emergency alert content, and identity verification data.</P>
            <P>You have rights under GDPR, CCPA/CPRA, and other applicable laws to access, correct, delete, or port your data. Contact privacy@lekkeclap.com to exercise these rights.</P>
            <SubHeading>Data Retention Schedule</SubHeading>
            <UL items={[
              "Account data: During active use + 12 months;",
              "Distress Alert records: 36 months (law enforcement cooperation);",
              "Identity verification data: 90 days post-verification;",
              "Biometric data: 24 hours post-verification.",
            ]} />

            {/* ── S16: Confidentiality ─────────────────────────────────────── */}
            <SectionHeading id="s16" number="16" title="Confidentiality" />
            <P>You agree to keep Licensor's Confidential Information (source code, algorithms, business information, trade secrets) confidential and not to disclose it to third parties. Confidentiality obligations survive termination of this EULA indefinitely.</P>

            {/* ── S17: Compliance ──────────────────────────────────────────── */}
            <SectionHeading id="s17" number="17" title="Compliance with Laws" />
            <P>You agree to use the Application in compliance with all applicable laws, including:</P>
            <UL items={[
              "Data Protection: GDPR (EU), CCPA/CPRA (California), Zimbabwe Cyber and Data Protection Act;",
              "Privacy Laws: Laws protecting personal privacy and confidential information;",
              "Intellectual Property Laws: Copyright, trademark, patent, and trade secret laws;",
              "Emergency Services Laws: Laws governing emergency alert systems and false alarm reporting;",
              "Export Control and Anti-Corruption Laws.",
            ]} />

            {/* ── S18: Geographic ──────────────────────────────────────────── */}
            <SectionHeading id="s18" number="18" title="Geographic Restrictions" />
            <P>The Application may not be available in all jurisdictions. Certain features (emergency services integration, payment methods, parental consent requirements) vary by region. By downloading the Application, you represent that you are in a jurisdiction where it is permitted and you are not violating local laws.</P>

            {/* ── S19: Modifications ───────────────────────────────────────── */}
            <SectionHeading id="s19" number="19" title="Modifications to the EULA" />
            <P>Licensor reserves the right to modify this EULA at any time. For material changes, at least 30 days' notice will be provided via email or in-app notification. Continued use after the effective date of changes constitutes acceptance. If you do not accept changed terms, you must stop using the Application and request account termination.</P>

            {/* ── S20: Entire Agreement ────────────────────────────────────── */}
            <SectionHeading id="s20" number="20" title="Entire Agreement & Severability" />
            <P>This EULA, together with the Privacy Policy and Terms and Conditions, constitutes the entire agreement between you and Licensor regarding use of the Licensed Application. If any provision is found invalid or unenforceable, it will be severed and the remainder will continue in full force. No waiver is effective unless in writing.</P>

            {/* ── S21: Contact ─────────────────────────────────────────────── */}
            <SectionHeading id="s21" number="21" title="Contact Information" />
            <div className="contact-grid">
              <div className="contact-card">
                <div className="contact-card-label">General Support</div>
                <a href="mailto:support@lekkeclap.com" className="contact-link">support@lekkeclap.com</a>
                <p className="contact-note">Response within 48 business hours</p>
              </div>
              <div className="contact-card">
                <div className="contact-card-label">Legal &amp; EULA</div>
                <a href="mailto:legal@lekkeclap.com" className="contact-link">legal@lekkeclap.com</a>
                <p className="contact-note">Include "EULA QUESTION" in subject</p>
              </div>
              <div className="contact-card">
                <div className="contact-card-label">Privacy &amp; Data Rights</div>
                <a href="mailto:privacy@lekkeclap.com" className="contact-link">privacy@lekkeclap.com</a>
                <p className="contact-note">GDPR, CCPA, and data requests</p>
              </div>
            </div>

            {/* ── S22: Special Provisions ──────────────────────────────────── */}
            <SectionHeading id="s22" number="22" title="Special Provisions & Jurisdiction-Specific Terms" />
            <SubHeading>22.1 GDPR Compliance (EU/EEA Users)</SubHeading>
            <P>EU/EEA users have rights under the General Data Protection Regulation including access, portability, erasure, restriction of processing, and the right to lodge complaints with supervisory authorities. These rights cannot be waived by this EULA.</P>
            <SubHeading>22.2 CCPA/CPRA Compliance (California Users)</SubHeading>
            <P>California residents have rights to know, delete, correct, and opt-out of sale of personal information under the CCPA and CPRA. These rights cannot be waived.</P>
            <SubHeading>22.3 Zimbabwe Cyber and Data Protection Act</SubHeading>
            <P>Zimbabwean users are protected by the Cyber and Data Protection Act. Processing of personal data including Location Data is conducted in compliance with that Act.</P>
            <SubHeading>22.4 Governing Law and Dispute Resolution</SubHeading>
            <P>This EULA is governed by the laws of the United Kingdom. Disputes shall be resolved through a 30-day informal negotiation period followed by binding arbitration. Exceptions include data protection authority complaints, emergency injunctive relief, and small claims proceedings.</P>

            {/* ── S23: Acknowledgment ──────────────────────────────────────── */}
            <SectionHeading id="s23" number="23" title="Acknowledgment" />
            <P>By downloading, installing, or using the LekkerClap Licensed Application, you acknowledge that you have:</P>
            <UL items={[
              "Read and understood this entire EULA, including the Location Services disclosure in Section 05;",
              "Agreed to be bound by all terms and conditions;",
              "Understood the limitations of liability and disclaimers, including those regarding location accuracy and emergency response;",
              "Acknowledged that the Application is licensed, not sold;",
              "Consented to the collection and processing of Location Data and personal data as described in Section 05 and the Privacy Policy;",
              "Understood that this Application supplements — but does not replace — direct emergency services;",
              "Confirmed your age eligibility and parental consent (if applicable);",
              "Agreed to comply with all applicable laws;",
              "Assumed all risks associated with using the Application.",
            ]} />

            {/* Footer */}
            <footer className="doc-footer">
              <div className="footer-rule" />
              <div className="footer-grid">
                <div>
                  <p className="footer-brand">LekkerClap</p>
                  {/* <p className="footer-sub">by Lekkerclap Limited</p> */}
                </div>
                <div className="footer-meta">
                  <p>Version 1.1</p>
                  <p>Effective January 1, 2026</p>
                  <p>Last Updated March 2026</p>
                </div>
                <div className="footer-links">
                  <a href="mailto:support@lekkeclap.com">support@lekkeclap.com</a>
                  <a href="mailto:legal@lekkeclap.com">legal@lekkeclap.com</a>
                  <a href="mailto:privacy@lekkeclap.com">privacy@lekkeclap.com</a>
                </div>
              </div>
              {/* <p className="footer-copy">© 2025–2026 Lekkerclap Limited. All Rights Reserved.</p> */}
            </footer>
          </main>
        </div>
      </div>

      {/* ─── Global Styles ────────────────────────────────────────────────── */}
      <style jsx global>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --navy:   #0f285a;
          --gold:   #b8a87a;
          --cream:  #f5f0e8;
          --paper:  #faf8f4;
          --ink:    #1a1a1a;
          --muted:  #6b6457;
          --border: #ddd6c8;
          --sidebar-w: 280px;
        }

        html { scroll-behavior: smooth; }

        body {
          background: var(--paper);
          color: var(--ink);
          font-family: 'DM Sans', system-ui, sans-serif;
          font-size: 16px;
          line-height: 1.7;
          -webkit-font-smoothing: antialiased;
        }

        /* Progress bar */
        .progress-bar {
          position: fixed;
          top: 0; left: 0;
          height: 3px;
          background: linear-gradient(to right, var(--navy), var(--gold));
          z-index: 1000;
          transition: width 0.1s linear;
        }

        /* Header */
        .header {
          position: sticky;
          top: 0;
          background: rgba(250, 248, 244, 0.92);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--border);
          z-index: 100;
          height: 64px;
        }
        .header-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 2rem;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .header-brand {
          display: flex;
          align-items: baseline;
          gap: 0.75rem;
        }
        .brand-name {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 1.3rem;
          font-weight: 700;
          color: var(--navy);
          letter-spacing: -0.01em;
        }
        .brand-doc {
          font-size: 0.8rem;
          color: var(--muted);
          font-weight: 300;
        }
        .header-meta {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .meta-badge {
          background: var(--navy);
          color: #f0e8d6;
          font-family: 'DM Mono', monospace;
          font-size: 0.7rem;
          padding: 2px 8px;
          border-radius: 2px;
          letter-spacing: 0.05em;
        }
        .meta-date {
          font-size: 0.8rem;
          color: var(--muted);
        }

        /* Mobile TOC toggle */
        .toc-toggle {
          display: none;
          position: fixed;
          bottom: 1.5rem;
          right: 1.5rem;
          z-index: 200;
          background: var(--navy);
          color: #f0e8d6;
          border: none;
          padding: 0.6rem 1.1rem;
          border-radius: 2rem;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.85rem;
          cursor: pointer;
          gap: 0.5rem;
          align-items: center;
          box-shadow: 0 4px 20px rgba(15,40,90,0.25);
        }
        .toc-toggle-icon { font-size: 1.1rem; }

        /* Layout */
        .layout {
          max-width: 1280px;
          margin: 0 auto;
          display: flex;
          align-items: flex-start;
          padding: 0 2rem;
          gap: 3rem;
        }

        /* Sidebar */
        .sidebar {
          width: var(--sidebar-w);
          flex-shrink: 0;
          position: sticky;
          top: 80px;
          max-height: calc(100vh - 100px);
          overflow-y: auto;
          padding: 1.5rem 0 2rem;
          scrollbar-width: thin;
          scrollbar-color: var(--border) transparent;
        }
        .sidebar-inner { display: flex; flex-direction: column; }
        .sidebar-label {
          font-size: 0.7rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: var(--gold);
          margin-bottom: 0.75rem;
          padding: 0 0.75rem;
        }
        .toc-item {
          display: flex;
          align-items: flex-start;
          gap: 0.6rem;
          width: 100%;
          padding: 0.4rem 0.75rem;
          background: none;
          border: none;
          cursor: pointer;
          text-align: left;
          border-radius: 4px;
          transition: background 0.15s, color 0.15s;
          border-left: 2px solid transparent;
        }
        .toc-item:hover { background: rgba(15,40,90,0.05); }
        .toc-active {
          background: rgba(15,40,90,0.07);
          border-left-color: var(--navy);
        }
        .toc-num {
          font-family: 'DM Mono', monospace;
          font-size: 0.65rem;
          color: var(--gold);
          flex-shrink: 0;
          margin-top: 3px;
          letter-spacing: 0.05em;
        }
        .toc-title {
          font-size: 0.8rem;
          color: var(--muted);
          line-height: 1.4;
          font-weight: 400;
          transition: color 0.15s;
        }
        .toc-active .toc-title { color: var(--navy); font-weight: 500; }
        .toc-star {
          color: var(--gold);
          font-size: 0.65rem;
          margin-left: 4px;
        }
        .sidebar-footer {
          margin-top: 2rem;
          padding: 0.75rem;
          border-top: 1px solid var(--border);
          font-size: 0.7rem;
          color: var(--muted);
          line-height: 1.6;
        }

        /* Main content */
        .content {
          flex: 1;
          min-width: 0;
          padding: 2rem 0 4rem;
        }

        /* Hero */
        .hero {
          padding: 3.5rem 0 2.5rem;
          border-bottom: 1px solid var(--border);
          margin-bottom: 2.5rem;
        }
        .hero-eyebrow {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.75rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: var(--gold);
          margin-bottom: 1.25rem;
        }
        .eyebrow-dot {
          width: 6px; height: 6px;
          background: var(--gold);
          border-radius: 50%;
          display: inline-block;
        }
        .hero-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 700;
          color: var(--navy);
          line-height: 1.1;
          letter-spacing: -0.02em;
          margin-bottom: 1.25rem;
        }
        .hero-subtitle {
          font-size: 0.95rem;
          color: var(--muted);
          line-height: 1.7;
          margin-bottom: 2rem;
        }
        .hero-meta-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1px;
          background: var(--border);
          border: 1px solid var(--border);
          border-radius: 4px;
          overflow: hidden;
          max-width: 520px;
        }
        .hero-meta-item {
          background: var(--paper);
          padding: 0.75rem 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }
        .meta-label {
          font-size: 0.65rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--gold);
          font-weight: 600;
        }
        .meta-value {
          font-size: 0.8rem;
          color: var(--navy);
          font-weight: 500;
        }

        /* Contact grid */
        .contact-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: var(--border);
          border: 1px solid var(--border);
          border-radius: 4px;
          overflow: hidden;
          margin: 1.5rem 0;
        }
        .contact-card {
          background: var(--paper);
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }
        .contact-card-label {
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--gold);
          font-weight: 600;
        }
        .contact-link {
          font-size: 0.85rem;
          color: var(--navy);
          text-decoration: none;
          font-weight: 500;
          font-family: 'DM Mono', monospace;
        }
        .contact-link:hover { text-decoration: underline; }
        .contact-note {
          font-size: 0.75rem;
          color: var(--muted);
        }

        /* Footer */
        .doc-footer {
          margin-top: 4rem;
          padding-top: 2rem;
        }
        .footer-rule {
          height: 1px;
          background: linear-gradient(to right, var(--navy), var(--gold), transparent);
          margin-bottom: 2rem;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 2rem;
          margin-bottom: 2rem;
        }
        .footer-brand {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--navy);
        }
        .footer-sub {
          font-size: 0.8rem;
          color: var(--muted);
          margin-top: 0.25rem;
        }
        .footer-meta {
          font-size: 0.8rem;
          color: var(--muted);
          line-height: 1.8;
        }
        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }
        .footer-links a {
          font-family: 'DM Mono', monospace;
          font-size: 0.75rem;
          color: var(--navy);
          text-decoration: none;
        }
        .footer-links a:hover { text-decoration: underline; }
        .footer-copy {
          font-size: 0.75rem;
          color: var(--muted);
          border-top: 1px solid var(--border);
          padding-top: 1rem;
        }

        /* Responsive */
        @media (max-width: 900px) {
          .sidebar { display: none; }
          .sidebar.sidebar-open {
            display: flex;
            position: fixed;
            bottom: 0; left: 0; right: 0;
            top: auto;
            max-height: 60vh;
            background: var(--paper);
            z-index: 150;
            border-top: 2px solid var(--navy);
            padding: 1.25rem 1.5rem;
            overflow-y: auto;
          }
          .toc-toggle { display: flex; }
          .layout { padding: 0 1.25rem; }
          .header-inner { padding: 0 1.25rem; }
          .hero-meta-grid { grid-template-columns: repeat(2, 1fr); }
          .contact-grid { grid-template-columns: 1fr; }
          .footer-grid { grid-template-columns: 1fr; gap: 1.5rem; }
          .brand-doc { display: none; }
        }

        @media (max-width: 600px) {
          .hero-title { font-size: 2.2rem; }
          .hero-meta-grid { grid-template-columns: repeat(2, 1fr); }
        }
      `}</style>
    </>
  );
}