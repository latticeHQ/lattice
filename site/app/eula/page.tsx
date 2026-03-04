"use client";

import React, { useState, useEffect } from 'react';
import {
  Shield,
  FileText,
  Mail,
  ArrowLeft,
  Key,
  Ban,
  BookOpen,
  Package,
  AlertTriangle,
  RefreshCw,
  Scale,
  Monitor,
} from 'lucide-react';

export default function EULA() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setIsLoaded(true);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`min-h-screen font-sans selection:bg-orange-500/20 transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
      style={{ background: "#f5f5f0", color: "#1a1a1a" }}
    >
      {/* Background grid */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-grid-subtle" />
      </div>

      {/* Header */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-200 ${
          isScrolled ? "border-b shadow-sm" : ""
        }`}
        style={{
          background: isScrolled ? "rgba(245, 245, 240, 0.95)" : "rgba(245, 245, 240, 0.8)",
          backdropFilter: "blur(12px)",
          borderColor: "#e0e0d8",
        }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-14 items-center justify-between">
            <a href="/" className="flex items-center gap-2.5 group">
              <img src="/lattice-logo.svg" alt="Lattice" className="w-7 h-7" />
              <div className="flex items-baseline gap-1.5">
                <span className="font-semibold text-sm" style={{ color: "#1a1a1a" }}>Lattice</span>
                <span
                  className="text-[10px] font-medium px-1.5 py-0.5 rounded"
                  style={{ background: "#ebe9e1", color: "#666666" }}
                >
                  Agent HQ
                </span>
              </div>
            </a>

            <a
              href="/"
              className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-[#d97706]"
              style={{ color: "#666666" }}
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10">
        {/* Page Header */}
        <section className="pt-16 pb-12">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-10 h-10 flex items-center justify-center rounded-lg"
                style={{ background: "rgba(217, 119, 6, 0.1)", border: "1px solid rgba(217, 119, 6, 0.2)" }}
              >
                <FileText className="w-5 h-5" style={{ color: "#d97706" }} />
              </div>
              <div>
                <span
                  className="text-[10px] font-medium px-1.5 py-0.5 rounded uppercase tracking-wider"
                  style={{ background: "rgba(217, 119, 6, 0.1)", color: "#d97706", border: "1px solid rgba(217, 119, 6, 0.2)" }}
                >
                  Legal
                </span>
              </div>
            </div>

            <h1
              className="text-4xl sm:text-5xl font-normal mb-4"
              style={{ color: "#1a1a1a", letterSpacing: "-0.02em", lineHeight: "1.1" }}
            >
              End User License Agreement
            </h1>
            <p className="text-lg" style={{ color: "#666666", lineHeight: "1.625" }}>
              This EULA governs your use of Lattice Workbench, including distribution through the Mac App Store.
            </p>
            <p className="mt-4 text-sm" style={{ color: "#999999" }}>
              Effective Date: March 4, 2026
            </p>
          </div>
        </section>

        {/* EULA Content */}
        <section className="pb-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">

              {/* License Grant */}
              <EulaSection
                icon={<Key className="w-5 h-5" style={{ color: "#d97706" }} />}
                title="1. License Grant"
              >
                <p>
                  Lattice Runtime, operated by Pratyaksh Gupta (&quot;Licensor,&quot; &quot;we,&quot;
                  &quot;us,&quot; or &quot;our&quot;), grants you (&quot;Licensee&quot; or &quot;you&quot;)
                  a limited, non-exclusive, non-transferable, revocable license to download, install,
                  and use Lattice Workbench (&quot;the Application&quot;) on devices that you own or
                  control, subject to the terms of this End User License Agreement (&quot;EULA&quot;).
                </p>
                <p>
                  This license is granted for personal or internal business use. The Application may be
                  installed on multiple devices owned or controlled by you, consistent with the platform
                  distribution terms (e.g., Apple App Store terms).
                </p>
                <p>
                  The Application is licensed, not sold, to you. The Licensor retains all rights, title,
                  and interest in and to the Application not expressly granted in this EULA.
                </p>
              </EulaSection>

              {/* Restrictions */}
              <EulaSection
                icon={<Ban className="w-5 h-5" style={{ color: "#d97706" }} />}
                title="2. Restrictions"
              >
                <p>
                  You agree that you will not:
                </p>
                <ul>
                  <li>
                    <strong>Reverse engineer</strong> &mdash; Decompile, disassemble, reverse engineer,
                    or otherwise attempt to derive the source code of the Application, except to the extent
                    that such activity is expressly permitted by applicable law or by the Apache 2.0 license
                    under which the Application&apos;s source code is available.
                  </li>
                  <li>
                    <strong>Redistribute</strong> &mdash; Copy, distribute, sublicense, lease, lend, or
                    rent the Application to any third party, except as permitted under the Apache 2.0
                    license for the open-source components.
                  </li>
                  <li>
                    <strong>Modify for redistribution</strong> &mdash; Create derivative works of the
                    Application for the purpose of redistribution under the Lattice name or branding
                    without prior written consent from the Licensor.
                  </li>
                  <li>
                    <strong>Remove notices</strong> &mdash; Remove, alter, or obscure any copyright,
                    trademark, or other proprietary notices contained in the Application.
                  </li>
                  <li>
                    <strong>Circumvent protections</strong> &mdash; Bypass, disable, or circumvent any
                    security, licensing, or access control mechanisms in the Application.
                  </li>
                  <li>
                    <strong>Misuse</strong> &mdash; Use the Application for any unlawful purpose or in
                    violation of any applicable regulations.
                  </li>
                </ul>
              </EulaSection>

              {/* Intellectual Property */}
              <EulaSection
                icon={<BookOpen className="w-5 h-5" style={{ color: "#d97706" }} />}
                title="3. Intellectual Property Rights"
              >
                <p>
                  The Application, including its design, structure, code, documentation, and all related
                  intellectual property, is owned by the Licensor and is protected by copyright, trademark,
                  and other intellectual property laws.
                </p>
                <p>
                  The Lattice name, Lattice logo, &quot;Agent HQ,&quot; and related branding are
                  trademarks of Lattice Runtime. This EULA does not grant you any rights to use
                  these trademarks except as necessary for the normal use of the Application.
                </p>
                <p>
                  The open-source components of Lattice Workbench are licensed under the Apache License
                  2.0, which permits use, modification, and distribution subject to its terms. This EULA
                  applies in addition to, and does not supersede, the Apache 2.0 license for those
                  components.
                </p>
              </EulaSection>

              {/* Third-Party Components */}
              <EulaSection
                icon={<Package className="w-5 h-5" style={{ color: "#d97706" }} />}
                title="4. Third-Party Components"
              >
                <p>
                  The Application incorporates third-party open-source software components, each governed
                  by its own license terms. These components include, but are not limited to:
                </p>
                <ul>
                  <li><strong>Electron</strong> &mdash; Framework for cross-platform desktop applications (MIT License).</li>
                  <li><strong>React</strong> &mdash; User interface library (MIT License).</li>
                  <li><strong>Node.js</strong> &mdash; JavaScript runtime (MIT License).</li>
                  <li><strong>Various npm packages</strong> &mdash; Subject to their respective licenses as documented in the Application&apos;s source repository.</li>
                </ul>
                <p>
                  A complete list of third-party components and their licenses is available in the
                  Application&apos;s source code repository on GitHub. You agree to comply with the
                  license terms of all third-party components.
                </p>
                <p>
                  The Licensor makes no warranty regarding third-party components and is not responsible
                  for any issues arising from their use.
                </p>
              </EulaSection>

              {/* Apple App Store Terms */}
              <EulaSection
                icon={<Monitor className="w-5 h-5" style={{ color: "#d97706" }} />}
                title="5. App Store Terms"
              >
                <p>
                  If you obtained the Application through the Apple App Store, the following additional
                  terms apply:
                </p>
                <ul>
                  <li>
                    <strong>Acknowledgment</strong> &mdash; You acknowledge that this EULA is between
                    you and the Licensor only, and not with Apple Inc. (&quot;Apple&quot;). The Licensor,
                    not Apple, is solely responsible for the Application and its content.
                  </li>
                  <li>
                    <strong>Scope of license</strong> &mdash; The license granted to you is limited to a
                    non-transferable license to use the Application on any Apple-branded products that you
                    own or control, as permitted by the Usage Rules set forth in the Apple Media Services
                    Terms and Conditions.
                  </li>
                  <li>
                    <strong>Maintenance and support</strong> &mdash; The Licensor is solely responsible
                    for providing maintenance and support services for the Application. Apple has no
                    obligation to furnish any maintenance and support services.
                  </li>
                  <li>
                    <strong>Warranty</strong> &mdash; The Licensor is solely responsible for any product
                    warranties, whether express or implied by law. In the event of any failure of the
                    Application to conform to any applicable warranty, you may notify Apple and Apple
                    will refund the purchase price (if any). To the maximum extent permitted by law,
                    Apple has no other warranty obligation with respect to the Application.
                  </li>
                  <li>
                    <strong>Product claims</strong> &mdash; The Licensor, not Apple, is responsible for
                    addressing any claims relating to the Application, including but not limited to:
                    product liability claims, claims that the Application fails to conform to any
                    applicable legal or regulatory requirement, and claims arising under consumer
                    protection or similar legislation.
                  </li>
                  <li>
                    <strong>Intellectual property claims</strong> &mdash; In the event of any third-party
                    claim that the Application or your possession and use of the Application infringes
                    that third party&apos;s intellectual property rights, the Licensor, not Apple, will
                    be solely responsible for the investigation, defense, settlement, and discharge of
                    any such claim.
                  </li>
                  <li>
                    <strong>Third-party beneficiary</strong> &mdash; You acknowledge and agree that Apple
                    and Apple&apos;s subsidiaries are third-party beneficiaries of this EULA, and that
                    upon your acceptance of the terms, Apple will have the right (and will be deemed to
                    have accepted the right) to enforce this EULA against you as a third-party beneficiary.
                  </li>
                </ul>
              </EulaSection>

              {/* Warranty Disclaimer */}
              <EulaSection
                icon={<AlertTriangle className="w-5 h-5" style={{ color: "#d97706" }} />}
                title="6. Warranty Disclaimer"
              >
                <p>
                  THE APPLICATION IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE,&quot; WITHOUT
                  WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
                  OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NONINFRINGEMENT.
                </p>
                <p>
                  THE LICENSOR DOES NOT WARRANT THAT:
                </p>
                <ul>
                  <li>The Application will meet your specific requirements.</li>
                  <li>The Application will be uninterrupted, timely, secure, or error-free.</li>
                  <li>The results obtained from the use of the Application (including AI-generated outputs) will be accurate or reliable.</li>
                  <li>Any errors in the Application will be corrected.</li>
                </ul>
                <p>
                  You expressly acknowledge that AI-generated content may contain errors, inaccuracies,
                  or biases. Any reliance on such content is at your own risk.
                </p>
              </EulaSection>

              {/* Limitation of Liability */}
              <EulaSection
                icon={<Shield className="w-5 h-5" style={{ color: "#d97706" }} />}
                title="7. Limitation of Liability"
              >
                <p>
                  TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL THE LICENSOR
                  BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES,
                  OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY
                  LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM:
                </p>
                <ul>
                  <li>Your access to or use of, or inability to access or use, the Application.</li>
                  <li>Any conduct or content of any third party on or related to the Application.</li>
                  <li>Any content obtained from the Application, including AI-generated outputs.</li>
                  <li>Unauthorized access, use, or alteration of your transmissions or content.</li>
                  <li>Third-party service interruptions, API changes, or pricing modifications.</li>
                </ul>
                <p>
                  THE LICENSOR&apos;S TOTAL LIABILITY FOR ALL CLAIMS SHALL NOT EXCEED THE AMOUNT YOU
                  PAID FOR THE APPLICATION, OR $100 USD, WHICHEVER IS LESS.
                </p>
              </EulaSection>

              {/* Termination */}
              <EulaSection
                icon={<RefreshCw className="w-5 h-5" style={{ color: "#d97706" }} />}
                title="8. Termination"
              >
                <p>
                  This EULA is effective from the date you first install or use the Application and
                  continues until terminated.
                </p>
                <p>
                  You may terminate this EULA at any time by uninstalling the Application and
                  destroying all copies in your possession or control.
                </p>
                <p>
                  The Licensor may terminate this EULA immediately if you breach any of its terms. Upon
                  termination, you must cease all use of the Application and destroy all copies in
                  your possession or control.
                </p>
                <p>
                  Sections relating to intellectual property, warranty disclaimers, limitation of
                  liability, and governing law shall survive any termination of this EULA.
                </p>
              </EulaSection>

              {/* Governing Law */}
              <EulaSection
                icon={<Scale className="w-5 h-5" style={{ color: "#d97706" }} />}
                title="9. Governing Law"
              >
                <p>
                  This EULA shall be governed by and construed in accordance with the laws of the
                  State of California, United States, without regard to its conflict of law provisions.
                </p>
                <p>
                  Any disputes arising out of or in connection with this EULA shall be subject to the
                  exclusive jurisdiction of the courts located in the State of California.
                </p>
              </EulaSection>

              {/* Contact Information */}
              <EulaSection
                icon={<Mail className="w-5 h-5" style={{ color: "#d97706" }} />}
                title="10. Contact Information"
              >
                <p>
                  If you have questions about this End User License Agreement, please contact us:
                </p>
                <div
                  className="mt-4 p-5 rounded-lg"
                  style={{ background: "#ebe9e1", border: "1px solid #e0e0d8" }}
                >
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="text-sm font-medium" style={{ color: "#1a1a1a", minWidth: "80px" }}>Publisher</span>
                      <span className="text-sm" style={{ color: "#666666" }}>Lattice Runtime / Pratyaksh Gupta</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-sm font-medium" style={{ color: "#1a1a1a", minWidth: "80px" }}>Email</span>
                      <a
                        href="mailto:onchainengineer@gmail.com"
                        className="text-sm hover:underline"
                        style={{ color: "#d97706" }}
                      >
                        onchainengineer@gmail.com
                      </a>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-sm font-medium" style={{ color: "#1a1a1a", minWidth: "80px" }}>Website</span>
                      <a
                        href="https://latticeruntime.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm hover:underline"
                        style={{ color: "#d97706" }}
                      >
                        https://latticeruntime.com
                      </a>
                    </div>
                  </div>
                </div>
              </EulaSection>

            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 relative" style={{ borderTop: "1px solid #e0e0d8" }}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div
                className="w-6 h-6 flex items-center justify-center"
                style={{ background: "#f5f5f0", border: "2px solid rgba(217,119,6,0.3)" }}
              >
                <Shield className="w-4 h-4" style={{ color: "#d97706" }} />
              </div>
              <span className="font-bold" style={{ color: "#1a1a1a" }}>Lattice &mdash; Agent HQ</span>
            </div>

            <div className="flex items-center flex-wrap justify-center space-x-6 text-sm" style={{ color: "#666666" }}>
              <a href="/" className="hover:text-[#d97706] transition">
                Home
              </a>
              <a href="https://github.com/latticeHQ" target="_blank" rel="noopener noreferrer" className="hover:text-[#d97706] transition">
                GitHub
              </a>
              <a href="/privacy" className="hover:text-[#d97706] transition">
                Privacy
              </a>
              <a href="/terms" className="hover:text-[#d97706] transition">
                Terms
              </a>
              <a href="/eula" className="hover:text-[#d97706] transition">
                EULA
              </a>
              <a href="/support" className="hover:text-[#d97706] transition">
                Support
              </a>
            </div>
          </div>

          <div className="mt-8 pt-6 text-center text-xs" style={{ borderTop: "1px solid #e0e0d8", color: "#999999" }}>
            <p>&copy; 2026 Lattice. The open-source headquarters for AI agents. Your agents. Your models. Your rules. Your infrastructure.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* Reusable EULA Section Component */
function EulaSection({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className="p-6 sm:p-8 rounded-lg"
      style={{ background: "#ebe9e1", border: "1px solid #e0e0d8" }}
    >
      <div className="flex items-center gap-3 mb-5">
        <div
          className="w-9 h-9 flex items-center justify-center rounded-md"
          style={{ background: "rgba(217, 119, 6, 0.1)", border: "1px solid rgba(217, 119, 6, 0.2)" }}
        >
          {icon}
        </div>
        <h2
          className="text-xl font-medium"
          style={{ color: "#1a1a1a", letterSpacing: "-0.02em" }}
        >
          {title}
        </h2>
      </div>
      <div className="space-y-4 eula-content">
        <style jsx>{`
          .eula-content p {
            font-size: 15px;
            line-height: 1.7;
            color: #666666;
          }
          .eula-content ul {
            list-style: none;
            padding: 0;
            margin: 0;
          }
          .eula-content ul li {
            position: relative;
            padding-left: 20px;
            font-size: 15px;
            line-height: 1.7;
            color: #666666;
            margin-bottom: 8px;
          }
          .eula-content ul li::before {
            content: '';
            position: absolute;
            left: 0;
            top: 11px;
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background: #d97706;
            opacity: 0.6;
          }
          .eula-content ul li strong {
            color: #1a1a1a;
            font-weight: 500;
          }
          .eula-content h4 {
            color: #1a1a1a;
            font-size: 16px;
            font-weight: 500;
          }
        `}</style>
        {children}
      </div>
    </div>
  );
}
