"use client";

import React, { useState, useEffect } from 'react';
import {
  Shield,
  Lock,
  Database,
  Eye,
  Clipboard,
  ArrowLeft,
  Mail,
  Trash2,
  Keyboard,
} from 'lucide-react';

export default function ClipboardManagerPrivacy() {
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
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-grid-subtle" />
      </div>

      <header
        className={`sticky top-0 z-50 w-full transition-all duration-200 ${isScrolled ? "border-b shadow-sm" : ""}`}
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
                  Clipboard Manager
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

      <main className="relative z-10">
        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="text-center mb-12">
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-6"
                style={{ background: "#ebe9e1", color: "#666666", border: "1px solid #e0e0d8" }}
              >
                <Shield className="w-3.5 h-3.5" style={{ color: "#d97706" }} />
                Clipboard Manager &mdash; Privacy Policy
              </div>
              <h1
                className="text-3xl sm:text-4xl font-bold mb-4"
                style={{ color: "#1a1a1a", letterSpacing: "-0.03em" }}
              >
                Privacy Policy
              </h1>
              <p className="text-base" style={{ color: "#666666" }}>
                Effective Date: March 7, 2026 &middot; Clipboard Manager v1.0
              </p>
            </div>

            <div className="space-y-6">

              <PolicySection
                icon={<Shield className="w-5 h-5" style={{ color: "#d97706" }} />}
                title="Overview"
              >
                <p>
                  Clipboard Manager is developed by Lattice Runtime. Your privacy is our top priority.
                  This app is designed to be <strong>100% private</strong> &mdash; all data stays on your device
                  and is never transmitted to any server.
                </p>
              </PolicySection>

              <PolicySection
                icon={<Lock className="w-5 h-5" style={{ color: "#d97706" }} />}
                title="Data Collection"
              >
                <p>
                  Clipboard Manager does <strong>not collect, transmit, or share any personal data</strong>.
                  We have no servers, no analytics, no tracking, and no telemetry. The app operates entirely
                  on your Mac with zero network communication.
                </p>
              </PolicySection>

              <PolicySection
                icon={<Database className="w-5 h-5" style={{ color: "#d97706" }} />}
                title="What Is Stored Locally"
              >
                <p>The following data is stored exclusively on your Mac:</p>
                <ul>
                  <li>Text, images, and file URLs that you copy to the system clipboard</li>
                  <li>Timestamps of when items were copied</li>
                  <li>The name of the application from which items were copied</li>
                </ul>
                <p>
                  This data is stored at <code style={{ background: "#e0e0d8", padding: "2px 6px", borderRadius: "4px", fontSize: "13px" }}>
                  ~/Library/Application Support/ClipboardManager/history.json</code> and
                  is only accessible by you and the app.
                </p>
              </PolicySection>

              <PolicySection
                icon={<Eye className="w-5 h-5" style={{ color: "#d97706" }} />}
                title="No Analytics or Tracking"
              >
                <p>
                  We do not use any analytics frameworks, crash reporting tools, advertising SDKs,
                  or tracking technologies. No data is ever sent to any server &mdash; ours or anyone else&apos;s.
                  The app makes zero network requests.
                </p>
              </PolicySection>

              <PolicySection
                icon={<Keyboard className="w-5 h-5" style={{ color: "#d97706" }} />}
                title="Permissions"
              >
                <p>Clipboard Manager requests the following system permissions:</p>
                <ul>
                  <li>
                    <strong>Accessibility:</strong> Used solely to detect the global keyboard shortcut
                    (Option+V) when other apps are focused, and to paste selected items at the cursor
                    position. No keystrokes are logged, recorded, or transmitted.
                  </li>
                  <li>
                    <strong>Clipboard Access:</strong> Used to monitor and store your clipboard history
                    locally on your device. Clipboard contents are never shared with any third party.
                  </li>
                </ul>
              </PolicySection>

              <PolicySection
                icon={<Trash2 className="w-5 h-5" style={{ color: "#d97706" }} />}
                title="Data Retention & Deletion"
              >
                <p>
                  Clipboard history is limited to the most recent 50 items. Older items are automatically
                  removed when new items are copied. You can clear all history at any time from within the app.
                </p>
                <p>
                  Uninstalling Clipboard Manager removes the app. To fully remove stored data, delete
                  the folder at <code style={{ background: "#e0e0d8", padding: "2px 6px", borderRadius: "4px", fontSize: "13px" }}>
                  ~/Library/Application Support/ClipboardManager/</code>.
                </p>
              </PolicySection>

              <PolicySection
                icon={<Clipboard className="w-5 h-5" style={{ color: "#d97706" }} />}
                title="Third-Party Services"
              >
                <p>
                  Clipboard Manager does not integrate with, connect to, or transmit data to any
                  third-party services, APIs, or servers. The app functions entirely offline.
                </p>
              </PolicySection>

              <PolicySection
                icon={<Mail className="w-5 h-5" style={{ color: "#d97706" }} />}
                title="Contact Us"
              >
                <p>
                  If you have any questions about this privacy policy or about Clipboard Manager,
                  please contact us:
                </p>
                <div
                  className="mt-4 p-4 rounded-lg"
                  style={{ background: "rgba(217, 119, 6, 0.08)", border: "1px solid rgba(217, 119, 6, 0.15)" }}
                >
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5" style={{ color: "#d97706" }} />
                    <div>
                      <p className="font-medium" style={{ color: "#1a1a1a", fontSize: "14px" }}>Email</p>
                      <a
                        href="mailto:privacy@latticeruntime.com"
                        className="text-sm hover:underline"
                        style={{ color: "#d97706" }}
                      >
                        privacy@latticeruntime.com
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="mt-3 p-4 rounded-lg"
                  style={{ background: "rgba(217, 119, 6, 0.08)", border: "1px solid rgba(217, 119, 6, 0.15)" }}
                >
                  <div className="flex items-center gap-3">
                    <Shield className="w-5 h-5" style={{ color: "#d97706" }} />
                    <div>
                      <p className="font-medium" style={{ color: "#1a1a1a", fontSize: "14px" }}>Website</p>
                      <a
                        href="https://latticeruntime.com"
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
              <span className="font-bold" style={{ color: "#1a1a1a" }}>Lattice &mdash; Clipboard Manager</span>
            </div>
            <div className="flex items-center flex-wrap justify-center space-x-6 text-sm" style={{ color: "#666666" }}>
              <a href="/" className="hover:text-[#d97706] transition">Home</a>
              <a href="/clipboard-manager/privacy" className="hover:text-[#d97706] transition font-medium" style={{ color: "#d97706" }}>Privacy</a>
              <a href="/clipboard-manager/support" className="hover:text-[#d97706] transition">Support</a>
              <a href="/terms" className="hover:text-[#d97706] transition">Terms</a>
              <a href="/eula" className="hover:text-[#d97706] transition">EULA</a>
            </div>
          </div>
          <div className="mt-8 pt-6 text-center text-xs" style={{ borderTop: "1px solid #e0e0d8", color: "#999999" }}>
            <p>&copy; 2026 Lattice Runtime. Clipboard Manager &mdash; your clipboard history, one shortcut away.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

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
          .privacy-content p { font-size: 15px; line-height: 1.7; color: #666666; }
          .privacy-content ul { list-style: none; padding: 0; margin: 0; }
          .privacy-content ul li { position: relative; padding-left: 20px; font-size: 15px; line-height: 1.7; color: #666666; margin-bottom: 8px; }
          .privacy-content ul li::before { content: ''; position: absolute; left: 0; top: 11px; width: 6px; height: 6px; border-radius: 50%; background: #d97706; opacity: 0.6; }
          .privacy-content ul li strong { color: #1a1a1a; font-weight: 500; }
        `}</style>
        {children}
      </div>
    </div>
  );
}
