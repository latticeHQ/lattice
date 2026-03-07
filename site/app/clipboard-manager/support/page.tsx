"use client";

import React, { useState, useEffect } from 'react';
import {
  Shield,
  Mail,
  ArrowLeft,
  HelpCircle,
  MessageCircle,
  Monitor,
  Keyboard,
  Clipboard,
  Settings,
  Trash2,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  AlertCircle,
} from 'lucide-react';

export default function ClipboardManagerSupport() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    setIsLoaded(true);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      icon: <Keyboard className="w-4 h-4" style={{ color: "#d97706" }} />,
      question: "How do I open Clipboard Manager?",
      answer:
        "Press Option+V (⌥V) from any application to open your clipboard history. You can also click the clipboard icon in your menu bar and select \"Show History\". The history panel appears as a floating window on top of your current application.",
    },
    {
      icon: <AlertCircle className="w-4 h-4" style={{ color: "#d97706" }} />,
      question: "Why is the app asking for Accessibility permission?",
      answer:
        "Clipboard Manager needs Accessibility permission for two features: (1) detecting the Option+V keyboard shortcut when other apps are focused, and (2) pasting items directly at your cursor position. Without this permission, you can still copy items from history, but you'll need to manually press ⌘V to paste. Go to System Settings > Privacy & Security > Accessibility to grant access.",
    },
    {
      icon: <Clipboard className="w-4 h-4" style={{ color: "#d97706" }} />,
      question: "How many items does Clipboard Manager store?",
      answer:
        "Clipboard Manager keeps your most recent 50 clipboard items. When you copy a new item and the history is full, the oldest item is automatically removed. This keeps storage minimal while giving you a useful history window.",
    },
    {
      icon: <Monitor className="w-4 h-4" style={{ color: "#d97706" }} />,
      question: "What types of content are supported?",
      answer:
        "Clipboard Manager supports text, images, and file URLs. When you copy text, it's stored with a preview. Images are stored as thumbnails. File paths are captured when you copy files in Finder. Each item also records the source application and timestamp.",
    },
    {
      icon: <Trash2 className="w-4 h-4" style={{ color: "#d97706" }} />,
      question: "How do I clear my clipboard history?",
      answer:
        "You can clear all clipboard history from the menu bar icon — click the clipboard icon and select \"Clear All\". You can also access this from within the history panel. To completely remove all stored data, delete the folder at ~/Library/Application Support/ClipboardManager/.",
    },
    {
      icon: <Settings className="w-4 h-4" style={{ color: "#d97706" }} />,
      question: "Can I set Clipboard Manager to launch at login?",
      answer:
        "Yes. Open the app's Settings window (from the menu bar icon > Settings) and enable \"Launch at Login\". This uses macOS's native SMAppService, so Clipboard Manager will start automatically each time you log in — no background daemons or login items to manage.",
    },
    {
      icon: <Shield className="w-4 h-4" style={{ color: "#d97706" }} />,
      question: "Is my clipboard data sent anywhere?",
      answer:
        "No. Clipboard Manager is 100% offline and private. All data is stored locally on your Mac at ~/Library/Application Support/ClipboardManager/history.json. The app makes zero network requests — no analytics, no telemetry, no cloud sync. Your clipboard history never leaves your device.",
    },
    {
      icon: <HelpCircle className="w-4 h-4" style={{ color: "#d97706" }} />,
      question: "The Option+V shortcut isn't working. What should I do?",
      answer:
        "First, make sure Clipboard Manager is running (look for the clipboard icon in your menu bar). Then check that Accessibility permission is granted: go to System Settings > Privacy & Security > Accessibility and ensure Clipboard Manager is listed and enabled. If you recently installed the app, you may need to restart it after granting permission. If the issue persists, try removing and re-adding the app in Accessibility settings.",
    },
  ];

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
                <HelpCircle className="w-5 h-5" style={{ color: "#d97706" }} />
              </div>
              <div>
                <span
                  className="text-[10px] font-medium px-1.5 py-0.5 rounded uppercase tracking-wider"
                  style={{ background: "rgba(217, 119, 6, 0.1)", color: "#d97706", border: "1px solid rgba(217, 119, 6, 0.2)" }}
                >
                  Help
                </span>
              </div>
            </div>

            <h1
              className="text-4xl sm:text-5xl font-normal mb-4"
              style={{ color: "#1a1a1a", letterSpacing: "-0.02em", lineHeight: "1.1" }}
            >
              Clipboard Manager Support
            </h1>
            <p className="text-lg" style={{ color: "#666666", lineHeight: "1.625" }}>
              Get help with Clipboard Manager for macOS. Browse frequently asked questions or contact us directly.
            </p>
          </div>
        </section>

        {/* Contact Options */}
        <section className="pb-12">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

              {/* Email Support */}
              <a
                href="mailto:support@latticeruntime.com"
                className="group p-6 rounded-lg transition-all duration-200 hover:shadow-md"
                style={{ background: "#ebe9e1", border: "1px solid #e0e0d8" }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-9 h-9 flex items-center justify-center rounded-md"
                    style={{ background: "rgba(217, 119, 6, 0.1)", border: "1px solid rgba(217, 119, 6, 0.2)" }}
                  >
                    <Mail className="w-5 h-5" style={{ color: "#d97706" }} />
                  </div>
                  <h3
                    className="text-lg font-medium group-hover:text-[#d97706] transition-colors"
                    style={{ color: "#1a1a1a" }}
                  >
                    Email Support
                  </h3>
                  <ExternalLink className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: "#d97706" }} />
                </div>
                <p className="text-sm" style={{ color: "#666666", lineHeight: "1.6" }}>
                  For bug reports, feature requests, or general questions about Clipboard Manager.
                  Email us at support@latticeruntime.com.
                </p>
              </a>

              {/* Privacy Policy */}
              <a
                href="/clipboard-manager/privacy"
                className="group p-6 rounded-lg transition-all duration-200 hover:shadow-md"
                style={{ background: "#ebe9e1", border: "1px solid #e0e0d8" }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-9 h-9 flex items-center justify-center rounded-md"
                    style={{ background: "rgba(217, 119, 6, 0.1)", border: "1px solid rgba(217, 119, 6, 0.2)" }}
                  >
                    <Shield className="w-5 h-5" style={{ color: "#d97706" }} />
                  </div>
                  <h3
                    className="text-lg font-medium group-hover:text-[#d97706] transition-colors"
                    style={{ color: "#1a1a1a" }}
                  >
                    Privacy Policy
                  </h3>
                  <ExternalLink className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: "#d97706" }} />
                </div>
                <p className="text-sm" style={{ color: "#666666", lineHeight: "1.6" }}>
                  Learn how Clipboard Manager protects your data. Spoiler: everything stays on your device.
                </p>
              </a>

            </div>
          </div>
        </section>

        {/* System Requirements */}
        <section className="pb-12">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div
              className="p-6 sm:p-8 rounded-lg"
              style={{ background: "#ebe9e1", border: "1px solid #e0e0d8" }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-9 h-9 flex items-center justify-center rounded-md"
                  style={{ background: "rgba(217, 119, 6, 0.1)", border: "1px solid rgba(217, 119, 6, 0.2)" }}
                >
                  <Monitor className="w-5 h-5" style={{ color: "#d97706" }} />
                </div>
                <h2
                  className="text-xl font-medium"
                  style={{ color: "#1a1a1a", letterSpacing: "-0.02em" }}
                >
                  System Requirements
                </h2>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-2 text-sm" style={{ color: "#1a1a1a" }}>Minimum</h4>
                    <ul className="space-y-1.5">
                      <li className="text-sm flex items-start gap-2" style={{ color: "#666666" }}>
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#d97706", opacity: 0.6 }} />
                        macOS 14 (Sonoma) or later
                      </li>
                      <li className="text-sm flex items-start gap-2" style={{ color: "#666666" }}>
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#d97706", opacity: 0.6 }} />
                        Apple Silicon or Intel Mac
                      </li>
                      <li className="text-sm flex items-start gap-2" style={{ color: "#666666" }}>
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#d97706", opacity: 0.6 }} />
                        Minimal disk space (~5 MB)
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2 text-sm" style={{ color: "#1a1a1a" }}>Permissions</h4>
                    <ul className="space-y-1.5">
                      <li className="text-sm flex items-start gap-2" style={{ color: "#666666" }}>
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#d97706", opacity: 0.6 }} />
                        Accessibility (for global shortcut &amp; auto-paste)
                      </li>
                      <li className="text-sm flex items-start gap-2" style={{ color: "#666666" }}>
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#d97706", opacity: 0.6 }} />
                        No internet connection required
                      </li>
                      <li className="text-sm flex items-start gap-2" style={{ color: "#666666" }}>
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#d97706", opacity: 0.6 }} />
                        No account or sign-in needed
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-5" style={{ borderTop: "1px solid #e0e0d8" }}>
                <p className="text-sm" style={{ color: "#666666" }}>
                  Clipboard Manager is a lightweight menu bar app. It runs entirely offline with zero network
                  communication. All clipboard data is stored locally on your device.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="pb-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-8">
              <div
                className="w-9 h-9 flex items-center justify-center rounded-md"
                style={{ background: "rgba(217, 119, 6, 0.1)", border: "1px solid rgba(217, 119, 6, 0.2)" }}
              >
                <MessageCircle className="w-5 h-5" style={{ color: "#d97706" }} />
              </div>
              <h2
                className="text-2xl font-medium"
                style={{ color: "#1a1a1a", letterSpacing: "-0.02em" }}
              >
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="rounded-lg overflow-hidden transition-all duration-200"
                  style={{ background: "#ebe9e1", border: "1px solid #e0e0d8" }}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center gap-3 p-5 text-left transition-colors hover:bg-[#e5e3db]"
                  >
                    <div
                      className="w-7 h-7 flex items-center justify-center rounded-md flex-shrink-0"
                      style={{ background: "rgba(217, 119, 6, 0.1)", border: "1px solid rgba(217, 119, 6, 0.2)" }}
                    >
                      {faq.icon}
                    </div>
                    <span
                      className="text-sm font-medium flex-1"
                      style={{ color: "#1a1a1a" }}
                    >
                      {faq.question}
                    </span>
                    {openFaq === index ? (
                      <ChevronUp className="w-4 h-4 flex-shrink-0" style={{ color: "#d97706" }} />
                    ) : (
                      <ChevronDown className="w-4 h-4 flex-shrink-0" style={{ color: "#999999" }} />
                    )}
                  </button>
                  {openFaq === index && (
                    <div
                      className="px-5 pb-5 pt-0"
                    >
                      <div className="pl-10">
                        <p
                          className="text-sm"
                          style={{ color: "#666666", lineHeight: "1.7" }}
                        >
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
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
              <span className="font-bold" style={{ color: "#1a1a1a" }}>Lattice &mdash; Clipboard Manager</span>
            </div>

            <div className="flex items-center flex-wrap justify-center space-x-6 text-sm" style={{ color: "#666666" }}>
              <a href="/" className="hover:text-[#d97706] transition">
                Home
              </a>
              <a href="/clipboard-manager/privacy" className="hover:text-[#d97706] transition">
                Privacy
              </a>
              <a href="/clipboard-manager/support" className="hover:text-[#d97706] transition font-medium" style={{ color: "#d97706" }}>
                Support
              </a>
              <a href="/terms" className="hover:text-[#d97706] transition">
                Terms
              </a>
              <a href="/eula" className="hover:text-[#d97706] transition">
                EULA
              </a>
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
