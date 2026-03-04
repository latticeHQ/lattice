"use client";

import React, { useState, useEffect } from 'react';
import {
  Shield,
  Lock,
  Database,
  Globe,
  Mail,
  ArrowLeft,
  Server,
  Eye,
  FileText,
  RefreshCw,
} from 'lucide-react';

export default function PrivacyPolicy() {
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
                <Shield className="w-5 h-5" style={{ color: "#d97706" }} />
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
              Privacy Policy
            </h1>
            <p className="text-lg" style={{ color: "#666666", lineHeight: "1.625" }}>
              Lattice Workbench is built with privacy at its core. Your data stays on your machine.
            </p>
            <p className="mt-4 text-sm" style={{ color: "#999999" }}>
              Effective Date: March 4, 2026
            </p>
          </div>
        </section>

        {/* Policy Content */}
        <section className="pb-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">

              {/* Introduction */}
              <PolicySection
                icon={<FileText className="w-5 h-5" style={{ color: "#d97706" }} />}
                title="Introduction"
              >
                <p>
                  This Privacy Policy describes how Lattice Runtime (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;),
                  operated by Pratyaksh Gupta, handles information in connection with the Lattice Workbench
                  desktop application (&quot;the App&quot;). Lattice Workbench is an AI agent orchestration tool
                  that runs locally on your computer.
                </p>
                <p>
                  We are committed to protecting your privacy. Lattice Workbench is designed as a local-first
                  application, meaning your data remains on your device and under your control.
                </p>
              </PolicySection>

              {/* Data Collection */}
              <PolicySection
                icon={<Database className="w-5 h-5" style={{ color: "#d97706" }} />}
                title="Data Collection"
              >
                <p>
                  Lattice Workbench collects minimal data. As a local desktop application, the vast majority
                  of information never leaves your machine.
                </p>

                <h4 className="font-medium mt-6 mb-3" style={{ color: "#1a1a1a", fontSize: "16px" }}>
                  Data stored locally on your device
                </h4>
                <ul>
                  <li>
                    <strong>Configuration and preferences</strong> &mdash; Your application settings, AI provider
                    API keys, model preferences, and workspace configurations are stored locally in your
                    application data directory.
                  </li>
                  <li>
                    <strong>Chat history and agent sessions</strong> &mdash; All conversations with AI agents,
                    session histories, and agent workspace data are stored entirely on your local machine.
                  </li>
                  <li>
                    <strong>Project files and code</strong> &mdash; Any source code, project files, or workspace
                    data you work with through Lattice Workbench remains on your local filesystem.
                  </li>
                  <li>
                    <strong>MCP server configurations</strong> &mdash; Configurations for Model Context Protocol
                    servers, including connection details, are stored locally.
                  </li>
                </ul>

                <h4 className="font-medium mt-6 mb-3" style={{ color: "#1a1a1a", fontSize: "16px" }}>
                  Data we do NOT collect
                </h4>
                <ul>
                  <li>We do not collect personal information, usage analytics, or telemetry data.</li>
                  <li>We do not track your behavior, feature usage, or application interactions.</li>
                  <li>We do not collect crash reports or diagnostic data automatically.</li>
                  <li>We do not maintain user accounts or require registration.</li>
                  <li>We do not use cookies or similar tracking technologies.</li>
                </ul>
              </PolicySection>

              {/* Data Usage */}
              <PolicySection
                icon={<Eye className="w-5 h-5" style={{ color: "#d97706" }} />}
                title="Data Usage"
              >
                <p>
                  Since Lattice Workbench is a local desktop application that does not transmit data to
                  our servers, we do not use your data for any purpose. All application data is processed
                  locally on your device to provide the functionality of the App.
                </p>
                <p>
                  Your locally stored data is used solely to:
                </p>
                <ul>
                  <li>Operate the application and provide its core features (agent orchestration, chat sessions, code editing).</li>
                  <li>Maintain your preferences and configurations between sessions.</li>
                  <li>Store your chat history and agent workspace state for continuity.</li>
                </ul>
              </PolicySection>

              {/* Third-Party Services */}
              <PolicySection
                icon={<Globe className="w-5 h-5" style={{ color: "#d97706" }} />}
                title="Third-Party Services"
              >
                <p>
                  Lattice Workbench integrates with third-party AI providers to deliver its core
                  functionality. When you configure and use these providers, the App makes direct
                  HTTPS API calls from your machine to these services.
                </p>

                <h4 className="font-medium mt-6 mb-3" style={{ color: "#1a1a1a", fontSize: "16px" }}>
                  AI inference providers
                </h4>
                <p>
                  The App supports connections to AI providers including, but not limited to:
                </p>
                <ul>
                  <li><strong>Anthropic</strong> (Claude models)</li>
                  <li><strong>OpenAI</strong> (GPT and Codex models)</li>
                  <li><strong>Google</strong> (Gemini models)</li>
                  <li><strong>Other providers</strong> you configure via API keys or OAuth</li>
                </ul>
                <p>
                  When you send prompts or messages through the App, they are transmitted directly from
                  your device to the selected AI provider over encrypted HTTPS connections. We do not
                  proxy, intercept, store, or have access to these communications. Your API keys are
                  stored locally on your device and are never transmitted to our servers.
                </p>
                <p>
                  Each AI provider has its own privacy policy and data handling practices. We encourage
                  you to review the privacy policies of any AI providers you use with Lattice Workbench.
                </p>

                <h4 className="font-medium mt-6 mb-3" style={{ color: "#1a1a1a", fontSize: "16px" }}>
                  MCP (Model Context Protocol) servers
                </h4>
                <p>
                  You may configure external MCP servers to extend the App&apos;s capabilities. Connections
                  to MCP servers are initiated from your device based on your configuration. We do not
                  operate or control third-party MCP servers and are not responsible for their data
                  handling practices.
                </p>

                <h4 className="font-medium mt-6 mb-3" style={{ color: "#1a1a1a", fontSize: "16px" }}>
                  GitHub integration
                </h4>
                <p>
                  If you use the optional GitHub integration features (such as OAuth authentication
                  for GitHub Copilot or repository sync), the App communicates directly with
                  GitHub&apos;s APIs. These interactions are governed by GitHub&apos;s privacy policy.
                </p>
              </PolicySection>

              {/* Data Security */}
              <PolicySection
                icon={<Lock className="w-5 h-5" style={{ color: "#d97706" }} />}
                title="Data Security"
              >
                <p>
                  We take the security of your data seriously. Lattice Workbench employs the following
                  measures:
                </p>
                <ul>
                  <li>
                    <strong>Local-first architecture</strong> &mdash; Your data never leaves your machine
                    unless you explicitly initiate a connection to an external service (such as an AI
                    provider or GitHub).
                  </li>
                  <li>
                    <strong>Encrypted communications</strong> &mdash; All API calls to third-party
                    services are made over HTTPS with TLS encryption.
                  </li>
                  <li>
                    <strong>Local credential storage</strong> &mdash; API keys and OAuth tokens are
                    stored in your local application configuration directory, protected by your
                    operating system&apos;s file permissions.
                  </li>
                  <li>
                    <strong>No server-side storage</strong> &mdash; We do not operate servers that
                    store your data. There is no cloud database of user information to be breached.
                  </li>
                  <li>
                    <strong>Open-source transparency</strong> &mdash; Lattice is open source, allowing
                    you to inspect exactly how your data is handled.
                  </li>
                </ul>
              </PolicySection>

              {/* Data Retention */}
              <PolicySection
                icon={<Server className="w-5 h-5" style={{ color: "#d97706" }} />}
                title="Data Retention and Deletion"
              >
                <p>
                  Since all data is stored locally on your device, you have complete control over
                  data retention and deletion.
                </p>
                <ul>
                  <li>
                    You can delete chat histories, agent sessions, and workspace data at any time
                    through the App or by removing the application data directory.
                  </li>
                  <li>
                    Uninstalling Lattice Workbench removes the application. You may also remove
                    the local data directory to delete all stored configurations and histories.
                  </li>
                  <li>
                    We do not retain any copy of your data, as it is never transmitted to us.
                  </li>
                </ul>
              </PolicySection>

              {/* Children's Privacy */}
              <PolicySection
                icon={<Shield className="w-5 h-5" style={{ color: "#d97706" }} />}
                title="Children's Privacy"
              >
                <p>
                  Lattice Workbench is a developer tool not directed at children under the age of 13.
                  We do not knowingly collect personal information from children. Since the App does
                  not collect personal information from any users, this concern is inherently mitigated
                  by our local-first design.
                </p>
              </PolicySection>

              {/* Changes to Policy */}
              <PolicySection
                icon={<RefreshCw className="w-5 h-5" style={{ color: "#d97706" }} />}
                title="Changes to This Policy"
              >
                <p>
                  We may update this Privacy Policy from time to time to reflect changes in the App
                  or applicable laws. When we make changes, we will update the &quot;Effective Date&quot;
                  at the top of this policy and publish the revised version on our website.
                </p>
                <p>
                  We encourage you to review this Privacy Policy periodically. Your continued use
                  of Lattice Workbench after any changes indicates your acceptance of the updated
                  policy.
                </p>
              </PolicySection>

              {/* Contact Information */}
              <PolicySection
                icon={<Mail className="w-5 h-5" style={{ color: "#d97706" }} />}
                title="Contact Information"
              >
                <p>
                  If you have questions, concerns, or requests regarding this Privacy Policy or
                  our data practices, please contact us:
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
              </PolicySection>

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

/* Reusable Policy Section Component */
function PolicySection({
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
      <div className="space-y-4 privacy-content">
        <style jsx>{`
          .privacy-content p {
            font-size: 15px;
            line-height: 1.7;
            color: #666666;
          }
          .privacy-content ul {
            list-style: none;
            padding: 0;
            margin: 0;
          }
          .privacy-content ul li {
            position: relative;
            padding-left: 20px;
            font-size: 15px;
            line-height: 1.7;
            color: #666666;
            margin-bottom: 8px;
          }
          .privacy-content ul li::before {
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
          .privacy-content ul li strong {
            color: #1a1a1a;
            font-weight: 500;
          }
          .privacy-content h4 {
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
