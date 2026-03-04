"use client";

import React, { useState, useEffect } from 'react';
import {
  Shield,
  Mail,
  ArrowLeft,
  HelpCircle,
  Github,
  MessageCircle,
  Monitor,
  Key,
  AlertCircle,
  Download,
  Cpu,
  ChevronDown,
  ChevronUp,
  ExternalLink,
} from 'lucide-react';

export default function Support() {
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
      icon: <Download className="w-4 h-4" style={{ color: "#d97706" }} />,
      question: "How do I install Lattice Workbench?",
      answer:
        "Lattice Workbench is available for macOS, Windows, and Linux. On macOS, you can install it from the Mac App Store or download the DMG directly from our GitHub releases page. On Windows, download the installer (.exe) from GitHub releases. On Linux, AppImage and .deb packages are available. You can also build from source using the instructions in our GitHub repository.",
    },
    {
      icon: <Key className="w-4 h-4" style={{ color: "#d97706" }} />,
      question: "How do I set up my AI provider API keys?",
      answer:
        "After launching Lattice Workbench, navigate to Settings (gear icon) and then to the Providers section. You can add API keys for Anthropic (Claude), OpenAI (GPT), Google (Gemini), and other supported providers. Your API keys are stored locally on your machine and are never transmitted to our servers. You can also authenticate with GitHub Copilot using OAuth for a key-free experience.",
    },
    {
      icon: <AlertCircle className="w-4 h-4" style={{ color: "#d97706" }} />,
      question: "The app is not connecting to my AI provider. What should I do?",
      answer:
        "First, verify that your API key is correct and has not expired. Check that you have sufficient credits or quota with your AI provider. Ensure your network connection is active and that no firewall or proxy is blocking HTTPS connections to the provider's API endpoints. You can test your provider connection from the Settings > Providers panel. If the issue persists, check the application logs or open a GitHub issue with the error details.",
    },
    {
      icon: <Cpu className="w-4 h-4" style={{ color: "#d97706" }} />,
      question: "What are the system requirements?",
      answer:
        "Lattice Workbench requires: macOS 12 (Monterey) or later, Windows 10 or later, or a modern Linux distribution (Ubuntu 20.04+, Fedora 36+, or equivalent). A minimum of 4 GB RAM is recommended, though 8 GB or more is preferred for running multiple agent sessions. An active internet connection is required for AI provider API calls. Approximately 500 MB of disk space is needed for the application itself.",
    },
    {
      icon: <Monitor className="w-4 h-4" style={{ color: "#d97706" }} />,
      question: "Can I use Lattice Workbench offline?",
      answer:
        "The Lattice Workbench application itself runs locally on your machine. However, AI inference requires an internet connection to communicate with AI provider APIs (Anthropic, OpenAI, Google, etc.). Local MCP servers and file-based operations can function without an internet connection. If you configure a local inference engine (such as MLX or Ollama), you can run AI queries entirely offline.",
    },
    {
      icon: <MessageCircle className="w-4 h-4" style={{ color: "#d97706" }} />,
      question: "How do I create and manage minions (agent sessions)?",
      answer:
        "From the main dashboard, click the '+' button or use the 'Create Minion' option to start a new agent session. Each minion operates in its own isolated Git branch. You can configure the AI model, thinking level, and agent type for each minion. Minions can be organized into crews (groups), benched (archived) when not needed, and forked (cloned) to create variations of a session.",
    },
    {
      icon: <HelpCircle className="w-4 h-4" style={{ color: "#d97706" }} />,
      question: "How do I configure MCP (Model Context Protocol) servers?",
      answer:
        "Navigate to Settings > MCP Servers to add, remove, or configure MCP servers. You can add servers using stdio transport (a command that runs locally) or SSE/HTTP transport (a remote URL). Each MCP server can be enabled/disabled globally or per-minion. You can also configure project-specific MCP servers that are only available within a particular project.",
    },
    {
      icon: <Github className="w-4 h-4" style={{ color: "#d97706" }} />,
      question: "Is Lattice Workbench open source?",
      answer:
        "Yes. Lattice Workbench is open source and available under the Apache 2.0 License. You can view the source code, contribute, and report issues on our GitHub repository at github.com/latticeHQ/latticeWorkbench. Community contributions are welcome.",
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
              Support
            </h1>
            <p className="text-lg" style={{ color: "#666666", lineHeight: "1.625" }}>
              Get help with Lattice Workbench. Browse frequently asked questions or reach out to us directly.
            </p>
          </div>
        </section>

        {/* Contact Options */}
        <section className="pb-12">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

              {/* GitHub Issues */}
              <a
                href="https://github.com/latticeHQ/latticeWorkbench/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 rounded-lg transition-all duration-200 hover:shadow-md"
                style={{ background: "#ebe9e1", border: "1px solid #e0e0d8" }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-9 h-9 flex items-center justify-center rounded-md"
                    style={{ background: "rgba(217, 119, 6, 0.1)", border: "1px solid rgba(217, 119, 6, 0.2)" }}
                  >
                    <Github className="w-5 h-5" style={{ color: "#d97706" }} />
                  </div>
                  <h3
                    className="text-lg font-medium group-hover:text-[#d97706] transition-colors"
                    style={{ color: "#1a1a1a" }}
                  >
                    GitHub Issues
                  </h3>
                  <ExternalLink className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: "#d97706" }} />
                </div>
                <p className="text-sm" style={{ color: "#666666", lineHeight: "1.6" }}>
                  Report bugs, request features, or browse existing issues on our GitHub repository.
                  This is the best place for technical issues.
                </p>
              </a>

              {/* Email Support */}
              <a
                href="mailto:onchainengineer@gmail.com"
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
                  For general inquiries, account questions, or issues not suitable for GitHub.
                  Email us at onchainengineer@gmail.com.
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

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-medium mb-2 text-sm" style={{ color: "#1a1a1a" }}>macOS</h4>
                  <ul className="space-y-1.5">
                    <li className="text-sm flex items-start gap-2" style={{ color: "#666666" }}>
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#d97706", opacity: 0.6 }} />
                      macOS 12 (Monterey) or later
                    </li>
                    <li className="text-sm flex items-start gap-2" style={{ color: "#666666" }}>
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#d97706", opacity: 0.6 }} />
                      Apple Silicon or Intel
                    </li>
                    <li className="text-sm flex items-start gap-2" style={{ color: "#666666" }}>
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#d97706", opacity: 0.6 }} />
                      4 GB RAM minimum (8 GB recommended)
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2 text-sm" style={{ color: "#1a1a1a" }}>Windows</h4>
                  <ul className="space-y-1.5">
                    <li className="text-sm flex items-start gap-2" style={{ color: "#666666" }}>
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#d97706", opacity: 0.6 }} />
                      Windows 10 or later
                    </li>
                    <li className="text-sm flex items-start gap-2" style={{ color: "#666666" }}>
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#d97706", opacity: 0.6 }} />
                      x64 architecture
                    </li>
                    <li className="text-sm flex items-start gap-2" style={{ color: "#666666" }}>
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#d97706", opacity: 0.6 }} />
                      4 GB RAM minimum (8 GB recommended)
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2 text-sm" style={{ color: "#1a1a1a" }}>Linux</h4>
                  <ul className="space-y-1.5">
                    <li className="text-sm flex items-start gap-2" style={{ color: "#666666" }}>
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#d97706", opacity: 0.6 }} />
                      Ubuntu 20.04+, Fedora 36+, or equivalent
                    </li>
                    <li className="text-sm flex items-start gap-2" style={{ color: "#666666" }}>
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#d97706", opacity: 0.6 }} />
                      x64 architecture
                    </li>
                    <li className="text-sm flex items-start gap-2" style={{ color: "#666666" }}>
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#d97706", opacity: 0.6 }} />
                      4 GB RAM minimum (8 GB recommended)
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-5 pt-5" style={{ borderTop: "1px solid #e0e0d8" }}>
                <p className="text-sm" style={{ color: "#666666" }}>
                  All platforms require an active internet connection for AI provider API calls and approximately
                  500 MB of available disk space for the application.
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
