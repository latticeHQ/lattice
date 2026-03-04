"use client";

import React, { useState, useEffect } from 'react';
import {
  Shield,
  FileText,
  Mail,
  ArrowLeft,
  Scale,
  Users,
  Globe,
  AlertTriangle,
  CheckCircle,
  RefreshCw,
  BookOpen,
  Ban,
} from 'lucide-react';

export default function TermsOfService() {
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
                <Scale className="w-5 h-5" style={{ color: "#d97706" }} />
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
              Terms of Service
            </h1>
            <p className="text-lg" style={{ color: "#666666", lineHeight: "1.625" }}>
              Please read these terms carefully before using Lattice Workbench.
            </p>
            <p className="mt-4 text-sm" style={{ color: "#999999" }}>
              Effective Date: March 4, 2026
            </p>
          </div>
        </section>

        {/* Terms Content */}
        <section className="pb-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">

              {/* Acceptance of Terms */}
              <TermsSection
                icon={<CheckCircle className="w-5 h-5" style={{ color: "#d97706" }} />}
                title="1. Acceptance of Terms"
              >
                <p>
                  By downloading, installing, or using Lattice Workbench (&quot;the App&quot;), you agree to
                  be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms,
                  do not download, install, or use the App.
                </p>
                <p>
                  These Terms constitute a legally binding agreement between you (&quot;User&quot; or &quot;you&quot;)
                  and Lattice Runtime, operated by Pratyaksh Gupta (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;).
                </p>
                <p>
                  If you are using the App on behalf of an organization, you represent and warrant that you
                  have the authority to bind that organization to these Terms.
                </p>
              </TermsSection>

              {/* Description of Service */}
              <TermsSection
                icon={<FileText className="w-5 h-5" style={{ color: "#d97706" }} />}
                title="2. Description of Service"
              >
                <p>
                  Lattice Workbench is an AI agent orchestration desktop application that provides:
                </p>
                <ul>
                  <li>
                    <strong>Agent management</strong> &mdash; Creation, configuration, and orchestration of
                    AI agent sessions (referred to as &quot;minions&quot;) within isolated environments.
                  </li>
                  <li>
                    <strong>Multi-model inference</strong> &mdash; Integration with multiple AI providers for
                    language model inference, including Anthropic, OpenAI, Google, and others.
                  </li>
                  <li>
                    <strong>Local-first architecture</strong> &mdash; The App runs locally on your device.
                    Your data, configurations, API keys, and chat histories are stored on your machine.
                  </li>
                  <li>
                    <strong>Developer tooling</strong> &mdash; Terminal integration, code editing support,
                    MCP (Model Context Protocol) server management, and Git workflow automation.
                  </li>
                  <li>
                    <strong>Extensibility</strong> &mdash; Support for custom agents, skills, MCP servers,
                    and third-party integrations configured by the user.
                  </li>
                </ul>
              </TermsSection>

              {/* User Responsibilities */}
              <TermsSection
                icon={<Users className="w-5 h-5" style={{ color: "#d97706" }} />}
                title="3. User Responsibilities"
              >
                <p>
                  As a user of Lattice Workbench, you agree to the following:
                </p>
                <ul>
                  <li>
                    <strong>Compliance with laws</strong> &mdash; You will use the App in compliance with all
                    applicable local, state, national, and international laws and regulations.
                  </li>
                  <li>
                    <strong>API key management</strong> &mdash; You are solely responsible for managing and
                    securing your API keys for third-party AI providers. You must comply with the terms
                    of service of each provider whose API you use through the App.
                  </li>
                  <li>
                    <strong>Content responsibility</strong> &mdash; You are responsible for all content
                    you generate, process, or transmit using the App, including prompts sent to AI
                    providers and any code or output produced.
                  </li>
                  <li>
                    <strong>Appropriate use</strong> &mdash; You will not use the App to generate, store,
                    or transmit content that is unlawful, harmful, threatening, abusive, harassing,
                    defamatory, or otherwise objectionable.
                  </li>
                  <li>
                    <strong>System security</strong> &mdash; You are responsible for maintaining the
                    security of your device, operating system, and network environment in which the
                    App operates.
                  </li>
                  <li>
                    <strong>No unauthorized access</strong> &mdash; You will not use the App to gain
                    unauthorized access to any systems, networks, or data.
                  </li>
                </ul>
              </TermsSection>

              {/* Intellectual Property */}
              <TermsSection
                icon={<BookOpen className="w-5 h-5" style={{ color: "#d97706" }} />}
                title="4. Intellectual Property"
              >
                <p>
                  Lattice Workbench is distributed under the Apache License 2.0. Subject to the terms
                  of that license:
                </p>
                <ul>
                  <li>
                    The Lattice name, logo, and branding are trademarks of Lattice Runtime. You may
                    not use these marks without prior written permission, except as permitted by the
                    Apache 2.0 license.
                  </li>
                  <li>
                    You retain all rights to your own content, data, code, and configurations created
                    using the App.
                  </li>
                  <li>
                    Output generated by AI providers through the App is subject to the respective
                    provider&apos;s terms of service regarding intellectual property and ownership.
                  </li>
                  <li>
                    Third-party components included in the App are subject to their own respective
                    licenses, which are documented in the application&apos;s source code.
                  </li>
                </ul>
              </TermsSection>

              {/* Third-Party Services */}
              <TermsSection
                icon={<Globe className="w-5 h-5" style={{ color: "#d97706" }} />}
                title="5. Third-Party Services"
              >
                <p>
                  Lattice Workbench integrates with third-party services that are not owned or
                  controlled by us. These include, but are not limited to:
                </p>
                <ul>
                  <li><strong>Anthropic</strong> &mdash; Claude language models</li>
                  <li><strong>OpenAI</strong> &mdash; GPT, Codex, and related models</li>
                  <li><strong>Google</strong> &mdash; Gemini language models</li>
                  <li><strong>GitHub</strong> &mdash; Repository hosting, Copilot, and OAuth services</li>
                  <li><strong>Apple</strong> &mdash; App Store distribution (for Mac App Store builds)</li>
                  <li><strong>MCP servers</strong> &mdash; Third-party Model Context Protocol servers</li>
                </ul>
                <p>
                  Your use of these third-party services is governed by their respective terms of service
                  and privacy policies. We are not responsible for the practices, content, or availability
                  of these third-party services.
                </p>
                <p>
                  API usage costs incurred through third-party providers are your sole responsibility.
                  We do not process, mediate, or have visibility into your billing with these providers.
                </p>
              </TermsSection>

              {/* Limitation of Liability */}
              <TermsSection
                icon={<AlertTriangle className="w-5 h-5" style={{ color: "#d97706" }} />}
                title="6. Limitation of Liability"
              >
                <p>
                  TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL LATTICE RUNTIME,
                  ITS DEVELOPER, CONTRIBUTORS, OR AFFILIATES BE LIABLE FOR ANY INDIRECT, INCIDENTAL,
                  SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO:
                </p>
                <ul>
                  <li>Loss of profits, data, use, goodwill, or other intangible losses.</li>
                  <li>Damages resulting from unauthorized access to or alteration of your data or transmissions.</li>
                  <li>Damages resulting from AI-generated content or outputs produced through the App.</li>
                  <li>Damages resulting from third-party service outages, API changes, or pricing modifications.</li>
                  <li>Damages resulting from the conduct of any third party on or related to the App.</li>
                  <li>Cost of procurement of substitute goods and services.</li>
                </ul>
                <p>
                  OUR TOTAL LIABILITY FOR ALL CLAIMS ARISING FROM OR RELATED TO THESE TERMS OR THE APP
                  SHALL NOT EXCEED THE AMOUNT YOU PAID US IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM,
                  OR $100 USD, WHICHEVER IS LESS.
                </p>
              </TermsSection>

              {/* Disclaimer of Warranties */}
              <TermsSection
                icon={<Ban className="w-5 h-5" style={{ color: "#d97706" }} />}
                title="7. Disclaimer of Warranties"
              >
                <p>
                  THE APP IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE,&quot; WITHOUT WARRANTY OF
                  ANY KIND, EXPRESS OR IMPLIED. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL
                  WARRANTIES, INCLUDING BUT NOT LIMITED TO:
                </p>
                <ul>
                  <li>IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.</li>
                  <li>WARRANTIES THAT THE APP WILL BE UNINTERRUPTED, ERROR-FREE, SECURE, OR FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.</li>
                  <li>WARRANTIES REGARDING THE ACCURACY, RELIABILITY, OR COMPLETENESS OF AI-GENERATED CONTENT OR OUTPUTS.</li>
                  <li>WARRANTIES REGARDING THE AVAILABILITY OR CONTINUED OPERATION OF THIRD-PARTY SERVICES.</li>
                </ul>
                <p>
                  You acknowledge that AI-generated content may contain errors, biases, or inaccuracies.
                  You are solely responsible for reviewing and validating any output produced through the App
                  before relying on it.
                </p>
              </TermsSection>

              {/* Termination */}
              <TermsSection
                icon={<Shield className="w-5 h-5" style={{ color: "#d97706" }} />}
                title="8. Termination"
              >
                <p>
                  You may stop using the App and uninstall it at any time. Since the App is a local desktop
                  application and does not require an account, there is no formal account termination process.
                </p>
                <p>
                  We reserve the right to modify, suspend, or discontinue the App (or any part thereof)
                  at any time, with or without notice. We shall not be liable to you or any third party
                  for any modification, suspension, or discontinuation of the App.
                </p>
                <p>
                  Provisions of these Terms that by their nature should survive termination shall survive,
                  including but not limited to: intellectual property provisions, warranty disclaimers,
                  limitation of liability, and governing law.
                </p>
              </TermsSection>

              {/* Governing Law */}
              <TermsSection
                icon={<Scale className="w-5 h-5" style={{ color: "#d97706" }} />}
                title="9. Governing Law"
              >
                <p>
                  These Terms shall be governed by and construed in accordance with the laws of the
                  State of California, United States, without regard to its conflict of law provisions.
                </p>
                <p>
                  Any disputes arising from or relating to these Terms or the App shall be resolved
                  through binding arbitration in accordance with the rules of the American Arbitration
                  Association, except that either party may seek injunctive or other equitable relief
                  in any court of competent jurisdiction.
                </p>
                <p>
                  If any provision of these Terms is found to be unenforceable or invalid, that
                  provision shall be limited or eliminated to the minimum extent necessary, and the
                  remaining provisions shall remain in full force and effect.
                </p>
              </TermsSection>

              {/* Changes to Terms */}
              <TermsSection
                icon={<RefreshCw className="w-5 h-5" style={{ color: "#d97706" }} />}
                title="10. Changes to Terms"
              >
                <p>
                  We reserve the right to modify these Terms at any time. When we make changes, we will
                  update the &quot;Effective Date&quot; at the top of this page and publish the revised
                  Terms on our website.
                </p>
                <p>
                  Your continued use of the App after any changes to these Terms constitutes your
                  acceptance of the revised Terms. If you do not agree to the revised Terms, you
                  must stop using the App.
                </p>
                <p>
                  We encourage you to review these Terms periodically for any updates.
                </p>
              </TermsSection>

              {/* Contact Information */}
              <TermsSection
                icon={<Mail className="w-5 h-5" style={{ color: "#d97706" }} />}
                title="11. Contact Information"
              >
                <p>
                  If you have questions or concerns regarding these Terms of Service, please contact us:
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
              </TermsSection>

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

/* Reusable Terms Section Component */
function TermsSection({
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
      <div className="space-y-4 terms-content">
        <style jsx>{`
          .terms-content p {
            font-size: 15px;
            line-height: 1.7;
            color: #666666;
          }
          .terms-content ul {
            list-style: none;
            padding: 0;
            margin: 0;
          }
          .terms-content ul li {
            position: relative;
            padding-left: 20px;
            font-size: 15px;
            line-height: 1.7;
            color: #666666;
            margin-bottom: 8px;
          }
          .terms-content ul li::before {
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
          .terms-content ul li strong {
            color: #1a1a1a;
            font-weight: 500;
          }
          .terms-content h4 {
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
