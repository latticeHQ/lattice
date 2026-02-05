"use client";

import React, { useState, useEffect } from 'react';
import {
  Terminal,
  Shield,
  Lock,
  Key,
  CheckCircle,
  FileText,
  Layers,
  Code,
  Users,
  Building,
  GitBranch,
  AlertCircle,
  CheckSquare,
  ArrowRight,
  Github,
  Mail,
  Sparkles,
  Package,
  Box,
  Cpu,
  Monitor,
  Cloud,
  Globe,
  Zap,
  Database,
  Wifi,
} from 'lucide-react';

type ActiveSection = 'hero' | 'problem' | 'solution' | 'ecosystem' | 'features' | 'inference' | 'cloud' | 'architecture' | 'quickstart' | 'audiences' | 'contact';

export default function LatticeAgentHQ() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState<ActiveSection>('hero');
  const [consoleLines, setConsoleLines] = useState<string[]>([]);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    setIsLoaded(true);

    // Simulate ecosystem console
    const terminalLines = [
      '$ brew install latticehq/lattice/lattice',
      'Installing Lattice Agent Headquarters...',
      '✓ lattice v0.1.0 installed',
      '',
      '$ lattice server',
      'Initializing Lattice Agent HQ...',
      '✓ Runtime enforcement kernel: ACTIVE',
      '✓ Identity verification: ACTIVE [SHA-256]',
      '✓ Authorization engine: ACTIVE [247 policies]',
      '✓ Audit trail: SYNCED [tamper-evident]',
      '✓ Inference engine: READY [MLX backend detected]',
      '✓ Workbench: AVAILABLE at localhost:3000',
      '✓ Registry: CONNECTED [142 templates]',
      '',
      '$ lattice create my-agent --template docker',
      '→ Creating agent "my-agent"...',
      '→ Assigning cryptographic identity...',
      '→ Applying default policy set...',
      '→ Configuring audit logging...',
      '✓ Agent "my-agent" deployed with full governance',
      '',
      'Agent HQ ready. Your agents. Your rules.',
      '$ _'
    ];

    const typeNextLine = (index = 0) => {
      if (index < terminalLines.length) {
        setConsoleLines(prev => [...prev, terminalLines[index]]);
        const nextDelay = terminalLines[index].length * 3 + Math.random() * 200 + 100;
        setTimeout(() => typeNextLine(index + 1), nextDelay);
      }
    };

    setTimeout(() => typeNextLine(), 500);

    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);

    const handleScroll = () => {
      const sections: ActiveSection[] = ['hero', 'problem', 'solution', 'ecosystem', 'features', 'inference', 'cloud', 'architecture', 'quickstart', 'audiences', 'contact'];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(cursorInterval);
    };
  }, []);

  return (
    <div className={`min-h-screen font-sans selection:bg-orange-500/20 transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`} style={{ background: "#f5f5f0", color: "#1a1a1a" }}>
      {/* Background grid */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-grid-subtle" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-radial blur-3xl" style={{ background: "radial-gradient(circle, rgba(217,119,6,0.1) 0%, transparent 70%)" }} />
      </div>

      {/* Header */}
      <Header activeSection={activeSection} />

      <main className="relative z-10">
        <HeroSection consoleLines={consoleLines} showCursor={showCursor} />
        <ProblemSection />
        <SolutionSection />
        <EcosystemSection />
        <FeaturesSection />
        <InferenceSection />
        <CloudSection />
        <ArchitectureSection />
        <QuickStartSection />
        <AudienceSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}

// Header Component
function Header({ activeSection }: { activeSection: ActiveSection }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: 'hero' as ActiveSection, label: 'Home' },
    { id: 'problem' as ActiveSection, label: 'Problem' },
    { id: 'solution' as ActiveSection, label: 'Solution' },
    { id: 'ecosystem' as ActiveSection, label: 'Ecosystem' },
    { id: 'features' as ActiveSection, label: 'Features' },
    { id: 'cloud' as ActiveSection, label: 'Cloud' },
    { id: 'architecture' as ActiveSection, label: 'Architecture' },
    { id: 'contact' as ActiveSection, label: 'Contact' }
  ];

  return (
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
              <span className="text-[10px] font-medium px-1.5 py-0.5 rounded"
                    style={{ background: "#ebe9e1", color: "#666666" }}>
                Agent HQ
              </span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map(item => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-sm font-medium transition-colors hover:text-[#d97706]"
                style={{ color: activeSection === item.id ? "#d97706" : "#666666" }}
              >
                {item.label}
              </a>
            ))}
            <div className="flex items-center gap-1 px-2 py-1 rounded-md" style={{ background: "#ebe9e1" }}>
              <a
                href="https://registry.latticeruntime.com/modules"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium transition-colors hover:text-[#d97706] px-2 py-1"
                style={{ color: "#666666" }}
              >
                Modules
              </a>
              <a
                href="https://registry.latticeruntime.com/templates"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium transition-colors hover:text-[#d97706] px-2 py-1"
                style={{ color: "#666666" }}
              >
                Templates
              </a>
              <a
                href="https://registry.latticeruntime.com/presets"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium transition-colors hover:text-[#d97706] px-2 py-1"
                style={{ color: "#666666" }}
              >
                Presets
              </a>
            </div>
            <a
              href="https://github.com/latticeHQ"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              <Github size={14} />
              GitHub
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}

// Hero Section
function HeroSection({ consoleLines, showCursor }: { consoleLines: string[], showCursor: boolean }) {
  return (
    <section id="hero" className="pt-28 pb-20 relative min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="badge-primary inline-flex items-center gap-2 mb-8">
              <svg width="16" height="16" viewBox="0 0 16 16" style={{ color: "#d97706" }}>
                <circle cx="8" cy="8" r="2" fill="currentColor"/>
                <circle cx="8" cy="8" r="6" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
                <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="1"/>
                <line x1="8" y1="10" x2="8" y2="14" stroke="currentColor" strokeWidth="1"/>
                <line x1="2" y1="8" x2="6" y2="8" stroke="currentColor" strokeWidth="1"/>
                <line x1="10" y1="8" x2="14" y2="8" stroke="currentColor" strokeWidth="1"/>
              </svg>
              <span className="tracking-wide">AGENT HEADQUARTERS</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight" style={{ color: "#1a1a1a" }}>
              The Open-Source
              <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r" style={{ backgroundImage: "linear-gradient(to right, #d97706, #f59e0b)" }}>
                Headquarters for AI Agents
              </span>
            </h1>

            <p className="text-xl mb-8 leading-relaxed max-w-2xl" style={{ color: "#666666" }}>
              Lattice is where AI agents get their <span style={{ color: "#1a1a1a", fontWeight: "500" }}>identity, their permissions, their compute, and their orders</span>. From a weekend hack to Fortune 500 governance — self-hosted, vendor-neutral, runs anywhere.
            </p>

            {/* Ecosystem stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
              <div className="card-base p-4 text-center">
                <div className="text-2xl font-bold font-mono" style={{ color: "#d97706" }}>5</div>
                <div className="text-[10px] font-medium uppercase tracking-wider mt-1" style={{ color: "#999999" }}>Components</div>
              </div>
              <div className="card-base p-4 text-center">
                <div className="text-2xl font-bold font-mono" style={{ color: "#d97706" }}>280K+</div>
                <div className="text-[10px] font-medium uppercase tracking-wider mt-1" style={{ color: "#999999" }}>Lines of Code</div>
              </div>
              <div className="card-base p-4 text-center">
                <div className="text-2xl font-bold font-mono" style={{ color: "#d97706" }}>6</div>
                <div className="text-[10px] font-medium uppercase tracking-wider mt-1" style={{ color: "#999999" }}>Deploy Targets</div>
              </div>
              <div className="card-base p-4 text-center">
                <div className="text-lg font-bold font-mono" style={{ color: "#d97706" }}>Apache 2.0</div>
                <div className="text-[10px] font-medium uppercase tracking-wider mt-1" style={{ color: "#999999" }}>Open Source</div>
              </div>
            </div>

            {/* Install command */}
            <div className="card-base p-3 mb-8 inline-flex items-center gap-3">
              <Terminal size={14} style={{ color: "#d97706" }} />
              <code className="text-sm font-mono" style={{ color: "#666666", background: "transparent", border: "none", padding: 0 }}>brew install latticehq/lattice/lattice</code>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#quickstart"
                className="btn-primary inline-flex items-center justify-center gap-2 px-6 py-3"
              >
                Get Started
                <ArrowRight size={18} />
              </a>
              <a
                href="https://github.com/latticeHQ"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center justify-center gap-2 px-6 py-3"
              >
                <Github size={18} />
                View on GitHub
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="card-base relative overflow-hidden" style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.06)" }}>
              <div className="py-3 px-4 flex items-center text-sm" style={{ background: "#fafaf8", borderBottom: "1px solid #e0e0d8" }}>
                <Terminal size={14} className="mr-2" style={{ color: "#d97706" }} />
                <span className="font-medium font-mono text-sm" style={{ color: "#666666" }}>lattice_agent_hq</span>
                <div className="ml-auto flex gap-2">
                  <div className="w-2 h-2 rounded-full" style={{ background: "#e0e0d8" }}></div>
                  <div className="w-2 h-2 rounded-full" style={{ background: "#e0e0d8" }}></div>
                  <div className="w-2 h-2 rounded-full" style={{ background: "#d97706" }}></div>
                </div>
              </div>

              <div className="code-block p-6 font-mono text-sm h-96 overflow-auto">
                {consoleLines.map((line, index) => (
                  <div key={index} style={{ color: line.startsWith('✓') ? "#059669" : line.startsWith('→') ? "#999999" : line.startsWith('$') ? "#d97706" : "#666666" }}>
                    {line}
                  </div>
                ))}
                {showCursor && <span className="inline-block w-2 h-4 ml-1 align-text-bottom animate-pulse" style={{ background: "#d97706" }}></span>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Problem Section
function ProblemSection() {
  return (
    <section id="problem" className="py-24 relative" style={{ borderTop: "1px solid #e0e0d8" }}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="badge-base inline-flex items-center gap-2 mb-4" style={{ background: "rgba(239, 68, 68, 0.1)", border: "1px solid rgba(239, 68, 68, 0.3)", color: "#dc2626" }}>
              <AlertCircle size={14} className="mr-2" />
              THE CHALLENGE
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: "#1a1a1a" }}>
              Enterprise Trust Requires Scale
            </h2>
            <p className="text-lg" style={{ color: "#666666" }}>
              Historically, meeting enterprise security requirements has required large organizations with dedicated platform teams.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="card-base p-6" style={{ borderColor: "rgba(239, 68, 68, 0.2)" }}>
              <div className="flex items-start mb-4">
                <div className="icon-container mr-4" style={{ background: "rgba(239, 68, 68, 0.1)", border: "1px solid rgba(239, 68, 68, 0.3)" }}>
                  <Code className="w-6 h-6" style={{ color: "#dc2626" }} />
                </div>
                <div>
                  <h3 className="font-semibold mb-2" style={{ color: "#1a1a1a" }}>Application-Level Enforcement</h3>
                  <p className="text-sm" style={{ color: "#666666" }}>
                    Every AI company re-implements SSO, RBAC, audit logs, and compliance controls inside their application code.
                  </p>
                </div>
              </div>
              <ul className="space-y-2 ml-14">
                <li className="text-sm flex items-start" style={{ color: "#666666" }}>
                  <span className="mr-2" style={{ color: "#dc2626" }}>&#10007;</span>
                  Expensive engineering resources
                </li>
                <li className="text-sm flex items-start" style={{ color: "#666666" }}>
                  <span className="mr-2" style={{ color: "#dc2626" }}>&#10007;</span>
                  Diverts from core product development
                </li>
                <li className="text-sm flex items-start" style={{ color: "#666666" }}>
                  <span className="mr-2" style={{ color: "#dc2626" }}>&#10007;</span>
                  Trust depends on code discipline
                </li>
              </ul>
            </div>

            <div className="card-base p-6" style={{ borderColor: "rgba(239, 68, 68, 0.2)" }}>
              <div className="flex items-start mb-4">
                <div className="icon-container mr-4" style={{ background: "rgba(239, 68, 68, 0.1)", border: "1px solid rgba(239, 68, 68, 0.3)" }}>
                  <Users className="w-6 h-6" style={{ color: "#dc2626" }} />
                </div>
                <div>
                  <h3 className="font-semibold mb-2" style={{ color: "#1a1a1a" }}>Coupled to Team Size</h3>
                  <p className="text-sm" style={{ color: "#666666" }}>
                    Enterprise readiness becomes tightly coupled to organizational scale and team maturity.
                  </p>
                </div>
              </div>
              <ul className="space-y-2 ml-14">
                <li className="text-sm flex items-start" style={{ color: "#666666" }}>
                  <span className="mr-2" style={{ color: "#dc2626" }}>&#10007;</span>
                  Small teams can&apos;t compete
                </li>
                <li className="text-sm flex items-start" style={{ color: "#666666" }}>
                  <span className="mr-2" style={{ color: "#dc2626" }}>&#10007;</span>
                  Innovation slowed by infrastructure work
                </li>
                <li className="text-sm flex items-start" style={{ color: "#666666" }}>
                  <span className="mr-2" style={{ color: "#dc2626" }}>&#10007;</span>
                  Enterprise deals require large teams
                </li>
              </ul>
            </div>
          </div>

          <div className="card-base mt-12 p-8 text-center">
            <p className="text-xl font-semibold mb-2" style={{ color: "#1a1a1a" }}>
              The result: Only large organizations can ship software that enterprises trust.
            </p>
            <p style={{ color: "#666666" }}>
              This creates an artificial barrier between individual innovation and enterprise deployment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Solution Section
function SolutionSection() {
  return (
    <section id="solution" className="py-24 relative" style={{ borderTop: "1px solid #e0e0d8" }}>
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="badge-primary inline-flex items-center gap-2 mb-4">
              <CheckCircle size={14} className="mr-2" />
              THE SOLUTION
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: "#1a1a1a" }}>
              Move Enforcement Into the Runtime
            </h2>
            <p className="text-lg" style={{ color: "#666666" }}>
              Lattice decouples trust from team size by providing a complete headquarters — enforcement, compute, operations, and community — as open-source infrastructure.
            </p>
          </div>

          <div className="card-base p-8 mb-12">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold mb-2" style={{ color: "#d97706" }}>1</div>
                <h3 className="font-semibold mb-2" style={{ color: "#1a1a1a" }}>Declare Constraints</h3>
                <p className="text-sm" style={{ color: "#666666" }}>
                  Agent developers declare identity, authorization, audit, and deployment constraints once.
                </p>
              </div>

              <div>
                <div className="text-4xl font-bold mb-2" style={{ color: "#d97706" }}>2</div>
                <h3 className="font-semibold mb-2" style={{ color: "#1a1a1a" }}>Runtime Enforcement</h3>
                <p className="text-sm" style={{ color: "#666666" }}>
                  Lattice sits in the execution path and enforces constraints before actions are executed.
                </p>
              </div>

              <div>
                <div className="text-4xl font-bold mb-2" style={{ color: "#d97706" }}>3</div>
                <h3 className="font-semibold mb-2" style={{ color: "#1a1a1a" }}>Violations Blocked</h3>
                <p className="text-sm" style={{ color: "#666666" }}>
                  Policy violations are structurally impossible — enforcement happens by design, not by discipline.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="card-base p-6">
              <h3 className="font-semibold mb-4 flex items-center" style={{ color: "#1a1a1a" }}>
                <Building className="w-5 h-5 mr-2" style={{ color: "#d97706" }} />
                For Enterprises
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" style={{ color: "#d97706" }} />
                  <div>
                    <div className="font-medium" style={{ color: "#1a1a1a" }}>Enforced by Runtime</div>
                    <div className="text-sm" style={{ color: "#666666" }}>Trust is structural, not based on vendor promises</div>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" style={{ color: "#d97706" }} />
                  <div>
                    <div className="font-medium" style={{ color: "#1a1a1a" }}>Auditable &amp; Provable</div>
                    <div className="text-sm" style={{ color: "#666666" }}>All enforcement decisions are transparent and inspectable</div>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" style={{ color: "#d97706" }} />
                  <div>
                    <div className="font-medium" style={{ color: "#1a1a1a" }}>Deploy Anywhere</div>
                    <div className="text-sm" style={{ color: "#666666" }}>Cloud, self-hosted, or air-gapped environments</div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="card-base p-6">
              <h3 className="font-semibold mb-4 flex items-center" style={{ color: "#1a1a1a" }}>
                <Code className="w-5 h-5 mr-2" style={{ color: "#d97706" }} />
                For Developers
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" style={{ color: "#d97706" }} />
                  <div>
                    <div className="font-medium" style={{ color: "#1a1a1a" }}>Build Capabilities, Not Infrastructure</div>
                    <div className="text-sm" style={{ color: "#666666" }}>Focus on agents, not enforcement systems</div>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" style={{ color: "#d97706" }} />
                  <div>
                    <div className="font-medium" style={{ color: "#1a1a1a" }}>Enterprise-Ready from Day One</div>
                    <div className="text-sm" style={{ color: "#666666" }}>Ship to enterprises without a platform team</div>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" style={{ color: "#d97706" }} />
                  <div>
                    <div className="font-medium" style={{ color: "#1a1a1a" }}>Zero API Costs</div>
                    <div className="text-sm" style={{ color: "#666666" }}>Local inference on your hardware, no monthly bill</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="card-base p-8 text-center" style={{ background: "linear-gradient(to right, rgba(217,119,6,0.1), rgba(245,158,11,0.1))", borderColor: "rgba(217,119,6,0.3)" }}>
            <p className="text-2xl font-bold mb-2" style={{ color: "#1a1a1a" }}>
              From solo hacker to Fortune 500 — same platform, same codebase, same community.
            </p>
            <p style={{ color: "#666666" }}>
              Your agents. Your models. Your rules. Your infrastructure.
            </p>
          </div>

          {/* Trust layer infographic */}
          <div className="card-base mt-12 overflow-hidden">
            <img
              src="/img/lattice-trust-layer.png"
              alt="Lattice: The Open-Source Trust Layer for the AI Agent Era"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// Ecosystem Section
function EcosystemSection() {
  return (
    <section id="ecosystem" className="py-24 relative" style={{ borderTop: "1px solid #e0e0d8" }}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="badge-primary inline-flex items-center gap-2 mb-4">
              <Layers size={14} className="mr-2" />
              THE PLATFORM
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: "#1a1a1a" }}>
              Agent Headquarters
            </h2>
            <p className="text-lg max-w-3xl mx-auto" style={{ color: "#666666" }}>
              Five integrated components. One open-source platform. Everything your agents need.
            </p>
          </div>

          {/* Ecosystem video */}
          <div className="card-base overflow-hidden mb-12" style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.06)" }}>
            <video
              src="/img/lattice-ecosystem-preview.mp4"
              controls
              poster="/img/lattice-headquarters.png"
              className="w-full h-auto"
              preload="metadata"
            />
          </div>

          {/* Top row: 3 core components */}
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="card-interactive p-6">
              <div className="flex items-center mb-4">
                <div className="icon-container mr-3">
                  <Shield className="w-5 h-5" style={{ color: "#d97706" }} />
                </div>
                <div>
                  <h3 className="font-semibold" style={{ color: "#1a1a1a" }}>Runtime</h3>
                  <p className="text-xs" style={{ color: "#d97706" }}>The Kernel</p>
                </div>
              </div>
              <p className="text-sm mb-3" style={{ color: "#666666" }}>
                Enforcement engine — identity, authorization, audit, deployment constraints. Every agent action passes through four gates.
              </p>
              <div className="text-xs font-mono" style={{ color: "#999999" }}>Go &middot; Apache 2.0</div>
            </div>

            <div className="card-interactive p-6">
              <div className="flex items-center mb-4">
                <div className="icon-container mr-3">
                  <Cpu className="w-5 h-5" style={{ color: "#d97706" }} />
                </div>
                <div>
                  <h3 className="font-semibold" style={{ color: "#1a1a1a" }}>Inference</h3>
                  <p className="text-xs" style={{ color: "#d97706" }}>The Compute</p>
                </div>
              </div>
              <p className="text-sm mb-3" style={{ color: "#666666" }}>
                Local LLM serving on your hardware. MLX for Apple Silicon, CUDA for NVIDIA. mDNS autodiscovery forms GPU clusters automatically.
              </p>
              <div className="text-xs font-mono" style={{ color: "#999999" }}>Go + Python &middot; Apache 2.0</div>
            </div>

            <div className="card-interactive p-6">
              <div className="flex items-center mb-4">
                <div className="icon-container mr-3">
                  <Monitor className="w-5 h-5" style={{ color: "#d97706" }} />
                </div>
                <div>
                  <h3 className="font-semibold" style={{ color: "#1a1a1a" }}>Workbench</h3>
                  <p className="text-xs" style={{ color: "#d97706" }}>The Interface</p>
                </div>
              </div>
              <p className="text-sm mb-3" style={{ color: "#666666" }}>
                Agent IDE and operations console. Multi-model chat, real-time monitoring, cost tracking. Desktop, web, CLI, VS Code.
              </p>
              <div className="text-xs font-mono" style={{ color: "#999999" }}>TypeScript &middot; MIT</div>
            </div>
          </div>

          {/* Bottom row: 2 support components, centered */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            <div className="card-interactive p-6">
              <div className="flex items-center mb-4">
                <div className="icon-container mr-3">
                  <Package className="w-5 h-5" style={{ color: "#d97706" }} />
                </div>
                <div>
                  <h3 className="font-semibold" style={{ color: "#1a1a1a" }}>Registry</h3>
                  <p className="text-xs" style={{ color: "#d97706" }}>The Ecosystem</p>
                </div>
              </div>
              <p className="text-sm mb-3" style={{ color: "#666666" }}>
                Community templates, modules, and presets for Docker, Kubernetes, AWS, GCP, Azure. Deploy agents anywhere in minutes.
              </p>
              <div className="text-xs font-mono" style={{ color: "#999999" }}>Terraform &middot; Apache 2.0</div>
            </div>

            <div className="card-interactive p-6">
              <div className="flex items-center mb-4">
                <div className="icon-container mr-3" style={{ background: "rgba(245,158,11,0.1)", borderColor: "rgba(245,158,11,0.3)" }}>
                  <Building className="w-5 h-5" style={{ color: "#f59e0b" }} />
                </div>
                <div>
                  <h3 className="font-semibold" style={{ color: "#1a1a1a" }}>Enterprise</h3>
                  <p className="text-xs" style={{ color: "#f59e0b" }}>The Scale Layer</p>
                </div>
              </div>
              <p className="text-sm mb-3" style={{ color: "#666666" }}>
                Admin control planes, policy lifecycle, directory integration (AD, Okta, LDAP), compliance exports (SOC2, HIPAA, FedRAMP).
              </p>
              <div className="text-xs font-mono" style={{ color: "#999999" }}>Commercial &middot; Self-Hosted</div>
            </div>
          </div>

          {/* HQ Infographic */}
          <div className="card-base overflow-hidden">
            <img
              src="/img/lattice-headquarters.png"
              alt="Lattice Agent Headquarters — the complete open-source platform for AI agents"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// Features Section
function FeaturesSection() {
  return (
    <section id="features" className="py-24 relative" style={{ borderTop: "1px solid #e0e0d8" }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center text-xs px-3 py-1.5 mb-4 rounded-md" style={{ background: "rgba(217,119,6,0.1)", border: "1px solid rgba(217,119,6,0.3)", color: "#d97706" }}>
            <Layers size={14} className="mr-2" />
            ENFORCEMENT PRIMITIVES
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: "#1a1a1a" }}>
            What Lattice Enforces
          </h2>
          <p className="text-lg max-w-3xl mx-auto" style={{ color: "#666666" }}>
            Four core enforcement layers that operate in the execution path, making violations impossible by construction.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="card-base p-8">
            <div className="flex items-center mb-6">
              <div className="icon-container mr-4">
                <Key className="w-8 h-8" style={{ color: "#d97706" }} />
              </div>
              <div>
                <h3 className="text-xl font-bold" style={{ color: "#1a1a1a" }}>Identity</h3>
                <p className="text-sm" style={{ color: "#d97706" }}>Who or what is making the request?</p>
              </div>
            </div>
            <p className="mb-4" style={{ color: "#666666" }}>
              Cryptographically verified identity for every agent, user, and service across cloud, self-hosted, and air-gapped environments.
            </p>
            <ul className="space-y-2">
              <li className="text-sm flex items-start" style={{ color: "#666666" }}>
                <span className="mr-2 font-mono" style={{ color: "#d97706" }}>&raquo;</span>
                OAuth 2.0, OIDC, SAML, mutual TLS, API keys
              </li>
              <li className="text-sm flex items-start" style={{ color: "#666666" }}>
                <span className="mr-2 font-mono" style={{ color: "#d97706" }}>&raquo;</span>
                Unique cryptographic principal per agent
              </li>
              <li className="text-sm flex items-start" style={{ color: "#666666" }}>
                <span className="mr-2 font-mono" style={{ color: "#d97706" }}>&raquo;</span>
                Cross-environment identity federation
              </li>
              <li className="text-sm flex items-start" style={{ color: "#666666" }}>
                <span className="mr-2 font-mono" style={{ color: "#d97706" }}>&raquo;</span>
                Zero-trust identity model
              </li>
            </ul>
          </div>

          <div className="card-base p-8">
            <div className="flex items-center mb-6">
              <div className="icon-container mr-4">
                <Lock className="w-8 h-8" style={{ color: "#d97706" }} />
              </div>
              <div>
                <h3 className="text-xl font-bold" style={{ color: "#1a1a1a" }}>Authorization</h3>
                <p className="text-sm" style={{ color: "#d97706" }}>Is this action allowed?</p>
              </div>
            </div>
            <p className="mb-4" style={{ color: "#666666" }}>
              Policy-as-code evaluated at runtime, not coded into applications. Fine-grained control over what agents can do.
            </p>
            <ul className="space-y-2">
              <li className="text-sm flex items-start" style={{ color: "#666666" }}>
                <span className="mr-2 font-mono" style={{ color: "#d97706" }}>&raquo;</span>
                RBAC + attribute-based policies (ABAC)
              </li>
              <li className="text-sm flex items-start" style={{ color: "#666666" }}>
                <span className="mr-2 font-mono" style={{ color: "#d97706" }}>&raquo;</span>
                Fine-grained resource permissions
              </li>
              <li className="text-sm flex items-start" style={{ color: "#666666" }}>
                <span className="mr-2 font-mono" style={{ color: "#d97706" }}>&raquo;</span>
                Dynamic real-time policy evaluation
              </li>
              <li className="text-sm flex items-start" style={{ color: "#666666" }}>
                <span className="mr-2 font-mono" style={{ color: "#d97706" }}>&raquo;</span>
                Cross-platform consistency
              </li>
            </ul>
          </div>

          <div className="card-base p-8">
            <div className="flex items-center mb-6">
              <div className="icon-container mr-4">
                <FileText className="w-8 h-8" style={{ color: "#d97706" }} />
              </div>
              <div>
                <h3 className="text-xl font-bold" style={{ color: "#1a1a1a" }}>Audit</h3>
                <p className="text-sm" style={{ color: "#d97706" }}>What happened and when?</p>
              </div>
            </div>
            <p className="mb-4" style={{ color: "#666666" }}>
              Immutable, tamper-evident records of every enforcement decision and agent action for compliance and forensics.
            </p>
            <ul className="space-y-2">
              <li className="text-sm flex items-start" style={{ color: "#666666" }}>
                <span className="mr-2 font-mono" style={{ color: "#d97706" }}>&raquo;</span>
                Cryptographically chained audit trail
              </li>
              <li className="text-sm flex items-start" style={{ color: "#666666" }}>
                <span className="mr-2 font-mono" style={{ color: "#d97706" }}>&raquo;</span>
                Compliance reporting (SOC2, HIPAA, FedRAMP, GDPR)
              </li>
              <li className="text-sm flex items-start" style={{ color: "#666666" }}>
                <span className="mr-2 font-mono" style={{ color: "#d97706" }}>&raquo;</span>
                Queryable event history
              </li>
              <li className="text-sm flex items-start" style={{ color: "#666666" }}>
                <span className="mr-2 font-mono" style={{ color: "#d97706" }}>&raquo;</span>
                Real-time event streaming
              </li>
            </ul>
          </div>

          <div className="card-base p-8">
            <div className="flex items-center mb-6">
              <div className="icon-container mr-4">
                <Shield className="w-8 h-8" style={{ color: "#d97706" }} />
              </div>
              <div>
                <h3 className="text-xl font-bold" style={{ color: "#1a1a1a" }}>Deployment Constraints</h3>
                <p className="text-sm" style={{ color: "#d97706" }}>Where can this run?</p>
              </div>
            </div>
            <p className="mb-4" style={{ color: "#666666" }}>
              Structural boundaries on agent execution — where they can run, what resources they consume, and when.
            </p>
            <ul className="space-y-2">
              <li className="text-sm flex items-start" style={{ color: "#666666" }}>
                <span className="mr-2 font-mono" style={{ color: "#d97706" }}>&raquo;</span>
                Environment and geographic restrictions
              </li>
              <li className="text-sm flex items-start" style={{ color: "#666666" }}>
                <span className="mr-2 font-mono" style={{ color: "#d97706" }}>&raquo;</span>
                Network segmentation enforcement
              </li>
              <li className="text-sm flex items-start" style={{ color: "#666666" }}>
                <span className="mr-2 font-mono" style={{ color: "#d97706" }}>&raquo;</span>
                Resource quota management
              </li>
              <li className="text-sm flex items-start" style={{ color: "#666666" }}>
                <span className="mr-2 font-mono" style={{ color: "#d97706" }}>&raquo;</span>
                Air-gap validation
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// Inference Section
function InferenceSection() {
  return (
    <section id="inference" className="py-24 relative" style={{ borderTop: "1px solid #e0e0d8" }}>
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="badge-primary inline-flex items-center gap-2 mb-4">
              <Cpu size={14} className="mr-2" />
              LOCAL INFERENCE
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: "#1a1a1a" }}>
              Your Models. Your Hardware. Zero API Costs.
            </h2>
            <p className="text-lg max-w-3xl mx-auto" style={{ color: "#666666" }}>
              Run LLMs on your own machines with an OpenAI-compatible API. Data never leaves your infrastructure.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Capabilities */}
            <div className="space-y-4">
              <div className="card-base p-4 flex items-start">
                <span className="mr-3 font-mono text-lg font-bold" style={{ color: "#d97706" }}>M4</span>
                <div>
                  <div className="font-semibold text-sm" style={{ color: "#1a1a1a" }}>Apple Silicon (MLX)</div>
                  <div className="text-xs" style={{ color: "#666666" }}>Optimized for M1-M4 Metal GPU. Native performance on Mac.</div>
                </div>
              </div>
              <div className="card-base p-4 flex items-start">
                <Zap size={20} className="mr-3 mt-0.5 flex-shrink-0" style={{ color: "#d97706" }} />
                <div>
                  <div className="font-semibold text-sm" style={{ color: "#1a1a1a" }}>NVIDIA (CUDA)</div>
                  <div className="text-xs" style={{ color: "#666666" }}>llama.cpp with CUDA. Multi-GPU automatic tensor splitting.</div>
                </div>
              </div>
              <div className="card-base p-4 flex items-start">
                <Globe size={20} className="mr-3 mt-0.5 flex-shrink-0" style={{ color: "#d97706" }} />
                <div>
                  <div className="font-semibold text-sm" style={{ color: "#1a1a1a" }}>OpenAI-Compatible API</div>
                  <div className="text-xs" style={{ color: "#666666" }}>/v1/chat/completions — any tool that speaks OpenAI works with Lattice.</div>
                </div>
              </div>
              <div className="card-base p-4 flex items-start">
                <Wifi size={20} className="mr-3 mt-0.5 flex-shrink-0" style={{ color: "#d97706" }} />
                <div>
                  <div className="font-semibold text-sm" style={{ color: "#1a1a1a" }}>Zero-Config GPU Clustering</div>
                  <div className="text-xs" style={{ color: "#666666" }}>mDNS autodiscovery. Machines on the same network form a cluster automatically.</div>
                </div>
              </div>
              <div className="card-base p-4 flex items-start">
                <Database size={20} className="mr-3 mt-0.5 flex-shrink-0" style={{ color: "#d97706" }} />
                <div>
                  <div className="font-semibold text-sm" style={{ color: "#1a1a1a" }}>Multi-Model Pool</div>
                  <div className="text-xs" style={{ color: "#666666" }}>LRU eviction, memory budgeting. Serve multiple models simultaneously.</div>
                </div>
              </div>
            </div>

            {/* Code examples */}
            <div className="space-y-4">
              <div className="card-base overflow-hidden">
                <div className="py-2 px-4 text-xs font-mono" style={{ background: "#fafaf8", borderBottom: "1px solid #e0e0d8", color: "#666666" }}>
                  Solo Developer
                </div>
                <div className="code-block p-4 text-sm" style={{ borderRadius: 0, border: "none", boxShadow: "none" }}>
                  <div style={{ color: "#d97706" }}># One command — local inference running</div>
                  <div style={{ color: "#666666" }}>$ lattice inference serve \</div>
                  <div style={{ color: "#666666" }}>&nbsp;&nbsp;&nbsp;&nbsp;--model mlx-community/Llama-3.2-3B-Instruct-4bit</div>
                  <div className="mt-2" style={{ color: "#059669" }}>&#10003; OpenAI-compatible API at localhost:8000</div>
                </div>
              </div>
              <div className="card-base overflow-hidden">
                <div className="py-2 px-4 text-xs font-mono" style={{ background: "#fafaf8", borderBottom: "1px solid #e0e0d8", color: "#666666" }}>
                  Team GPU Cluster
                </div>
                <div className="code-block p-4 text-sm" style={{ borderRadius: 0, border: "none", boxShadow: "none" }}>
                  <div style={{ color: "#d97706" }}># Machine 1 — starts cluster automatically</div>
                  <div style={{ color: "#666666" }}>$ lattice inference serve \</div>
                  <div style={{ color: "#666666" }}>&nbsp;&nbsp;&nbsp;&nbsp;--model meta-llama/Llama-3.1-70B --cluster</div>
                  <div className="mt-2" style={{ color: "#d97706" }}># Machine 2, 3, 4 — discover and join via mDNS</div>
                  <div style={{ color: "#666666" }}>$ lattice inference serve --join</div>
                  <div className="mt-2" style={{ color: "#059669" }}>&#10003; Model distributed across 4 nodes. Zero config.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Cloud Integration Section
function CloudSection() {
  return (
    <section id="cloud" className="py-24 relative" style={{ borderTop: "1px solid #e0e0d8" }}>
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="badge-primary inline-flex items-center gap-2 mb-4">
              <Cloud size={14} className="mr-2" />
              MULTI-CLOUD GOVERNANCE
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: "#1a1a1a" }}>
              The Governance Layer Every Cloud Needs
            </h2>
            <p className="text-lg max-w-3xl mx-auto" style={{ color: "#666666" }}>
              Unified governance across every agent platform, every cloud, every environment. Vendor-neutral by design.
            </p>
          </div>

          {/* Cloud flow diagram */}
          <div className="card-base p-8 mb-12">
            <div className="space-y-6">
              {/* Cloud platforms grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {['Vertex AI Agents', 'Bedrock Agents', 'Azure AI Agents', 'Agentforce', 'Custom Agents', 'OSS Agents'].map(platform => (
                  <div key={platform} className="card-base p-3 text-center text-xs font-medium" style={{ color: "#666666" }}>
                    {platform}
                  </div>
                ))}
              </div>

              {/* Arrow */}
              <div className="flex justify-center">
                <ArrowRight size={24} className="rotate-90" style={{ color: "#d97706" }} />
              </div>

              {/* Lattice layer */}
              <div className="card-base p-6 text-center" style={{ background: "linear-gradient(to right, rgba(217,119,6,0.1), rgba(245,158,11,0.1))", borderColor: "rgba(217,119,6,0.3)" }}>
                <div className="font-bold text-xl mb-3" style={{ color: "#1a1a1a" }}>LATTICE</div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <div className="text-xs p-2 rounded" style={{ background: "rgba(217,119,6,0.1)", color: "#d97706" }}>One identity system</div>
                  <div className="text-xs p-2 rounded" style={{ background: "rgba(217,119,6,0.1)", color: "#d97706" }}>One auth engine</div>
                  <div className="text-xs p-2 rounded" style={{ background: "rgba(217,119,6,0.1)", color: "#d97706" }}>One audit trail</div>
                  <div className="text-xs p-2 rounded" style={{ background: "rgba(217,119,6,0.1)", color: "#d97706" }}>One policy framework</div>
                </div>
              </div>

              <div className="text-center text-sm" style={{ color: "#666666" }}>
                Self-hosted. Auditable. Vendor-neutral. Yours.
              </div>
            </div>
          </div>

          {/* Use cases */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="card-base p-6">
              <h3 className="font-semibold mb-3 flex items-center" style={{ color: "#1a1a1a" }}>
                <CheckCircle className="w-4 h-4 mr-2" style={{ color: "#d97706" }} />
                Multi-Cloud Enterprises
              </h3>
              <p className="text-sm" style={{ color: "#666666" }}>
                Bank deploying across GCP + on-prem? Hospital spanning multiple systems? Lattice provides unified identity, auth, and audit across every environment.
              </p>
            </div>
            <div className="card-base p-6">
              <h3 className="font-semibold mb-3 flex items-center" style={{ color: "#1a1a1a" }}>
                <CheckCircle className="w-4 h-4 mr-2" style={{ color: "#d97706" }} />
                Air-Gapped Deployments
              </h3>
              <p className="text-sm" style={{ color: "#666666" }}>
                Defense, healthcare, government — Lattice runs fully offline with zero internet access. Complete governance in disconnected environments.
              </p>
            </div>
          </div>

          {/* Infrastructure infographic */}
          <div className="card-base overflow-hidden">
            <img
              src="/img/lattice-infrastructure.png"
              alt="Lattice: The Open-Source Infrastructure for AI Agent Governance"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// Architecture Section
function ArchitectureSection() {
  return (
    <section id="architecture" className="py-24 relative" style={{ borderTop: "1px solid #e0e0d8" }}>
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="badge-primary inline-flex items-center gap-2 mb-4">
              <GitBranch size={14} className="mr-2" />
              FULL STACK ARCHITECTURE
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: "#1a1a1a" }}>
              How Lattice Works
            </h2>
            <p className="text-lg" style={{ color: "#666666" }}>
              Five components working together — from enforcement kernel to developer interface.
            </p>
          </div>

          {/* Full stack diagram */}
          <div className="card-base p-8 mb-12">
            <div className="font-mono text-sm space-y-4">
              {/* Your Agents layer */}
              <div className="card-base p-3 text-center text-xs font-medium" style={{ color: "#666666", borderStyle: "dashed" }}>
                YOUR AGENTS &middot; LangChain &middot; CrewAI &middot; AutoGen &middot; Custom
              </div>

              {/* Arrow */}
              <div className="flex justify-center">
                <ArrowRight size={16} className="rotate-90" style={{ color: "#e0e0d8" }} />
              </div>

              {/* Lattice HQ */}
              <div className="card-base p-6" style={{ borderColor: "rgba(217,119,6,0.3)" }}>
                <div className="text-center font-bold text-xs tracking-wider mb-4" style={{ color: "#d97706" }}>
                  L A T T I C E&nbsp;&nbsp;&nbsp;A G E N T&nbsp;&nbsp;&nbsp;H Q
                </div>

                {/* Top: Workbench */}
                <div className="card-base p-3 mb-3 text-center" style={{ background: "rgba(217,119,6,0.05)" }}>
                  <div className="text-xs font-medium" style={{ color: "#1a1a1a" }}>WORKBENCH</div>
                  <div className="text-[10px]" style={{ color: "#999999" }}>Agent Chat &middot; Operations &middot; Monitoring &middot; Desktop / Web / CLI / VS Code</div>
                </div>

                {/* Middle: Runtime (4 gates) */}
                <div className="card-base p-3 mb-3" style={{ background: "rgba(217,119,6,0.05)" }}>
                  <div className="text-xs font-medium text-center mb-2" style={{ color: "#1a1a1a" }}>RUNTIME</div>
                  <div className="grid grid-cols-4 gap-2">
                    <div className="text-center p-2 rounded" style={{ background: "rgba(217,119,6,0.1)" }}>
                      <div className="text-[10px] font-medium" style={{ color: "#d97706" }}>Identity</div>
                    </div>
                    <div className="text-center p-2 rounded" style={{ background: "rgba(217,119,6,0.1)" }}>
                      <div className="text-[10px] font-medium" style={{ color: "#d97706" }}>Auth</div>
                    </div>
                    <div className="text-center p-2 rounded" style={{ background: "rgba(217,119,6,0.1)" }}>
                      <div className="text-[10px] font-medium" style={{ color: "#d97706" }}>Audit</div>
                    </div>
                    <div className="text-center p-2 rounded" style={{ background: "rgba(217,119,6,0.1)" }}>
                      <div className="text-[10px] font-medium" style={{ color: "#d97706" }}>Constraints</div>
                    </div>
                  </div>
                </div>

                {/* Bottom: Inference + Registry side by side */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="card-base p-3 text-center" style={{ background: "rgba(217,119,6,0.05)" }}>
                    <div className="text-xs font-medium" style={{ color: "#1a1a1a" }}>INFERENCE</div>
                    <div className="text-[10px]" style={{ color: "#999999" }}>MLX &middot; CUDA &middot; OpenAI API</div>
                  </div>
                  <div className="card-base p-3 text-center" style={{ background: "rgba(217,119,6,0.05)" }}>
                    <div className="text-xs font-medium" style={{ color: "#1a1a1a" }}>REGISTRY</div>
                    <div className="text-[10px]" style={{ color: "#999999" }}>Templates &middot; Modules &middot; Presets</div>
                  </div>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center">
                <ArrowRight size={16} className="rotate-90" style={{ color: "#e0e0d8" }} />
              </div>

              {/* Your Infrastructure layer */}
              <div className="card-base p-3 text-center text-xs font-medium" style={{ color: "#666666", borderStyle: "dashed" }}>
                YOUR INFRASTRUCTURE &middot; Laptop &middot; Homelab &middot; Docker &middot; K8s &middot; Cloud &middot; Air Gap
              </div>
            </div>
          </div>

          {/* Open Core model */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="card-base p-8">
              <h3 className="font-bold mb-6 flex items-center" style={{ color: "#1a1a1a" }}>
                <CheckSquare className="w-5 h-5 mr-2" style={{ color: "#d97706" }} />
                Open Source (Apache 2.0 / MIT)
              </h3>
              <p className="text-sm mb-4" style={{ color: "#666666" }}>
                Runtime, Inference, Workbench, and Registry are fully open source and auditable.
              </p>
              <ul className="space-y-2">
                <li className="text-sm flex items-start" style={{ color: "#666666" }}>
                  <span className="mr-2 font-mono" style={{ color: "#d97706" }}>&#10003;</span>
                  Identity and authorization evaluation
                </li>
                <li className="text-sm flex items-start" style={{ color: "#666666" }}>
                  <span className="mr-2 font-mono" style={{ color: "#d97706" }}>&#10003;</span>
                  Policy decision engine
                </li>
                <li className="text-sm flex items-start" style={{ color: "#666666" }}>
                  <span className="mr-2 font-mono" style={{ color: "#d97706" }}>&#10003;</span>
                  Audit event generation
                </li>
                <li className="text-sm flex items-start" style={{ color: "#666666" }}>
                  <span className="mr-2 font-mono" style={{ color: "#d97706" }}>&#10003;</span>
                  Local LLM inference serving
                </li>
                <li className="text-sm flex items-start" style={{ color: "#666666" }}>
                  <span className="mr-2 font-mono" style={{ color: "#d97706" }}>&#10003;</span>
                  Agent IDE and operations console
                </li>
              </ul>
              <div className="mt-4 p-3 rounded-md" style={{ background: "rgba(217,119,6,0.05)", border: "1px solid rgba(217,119,6,0.2)" }}>
                <p className="text-xs" style={{ color: "#d97706" }}>
                  <strong>Why open?</strong> Enforcement must be auditable. If the software decides &quot;allow&quot; or &quot;deny,&quot; you can read the code.
                </p>
              </div>
            </div>

            <div className="card-base p-8">
              <h3 className="font-bold mb-6 flex items-center" style={{ color: "#1a1a1a" }}>
                <Building className="w-5 h-5 mr-2" style={{ color: "#f59e0b" }} />
                Commercial (Enterprise Edition)
              </h3>
              <p className="text-sm mb-4" style={{ color: "#666666" }}>
                Enterprise governance, administration, and compliance features for organizations at scale.
              </p>
              <ul className="space-y-2">
                <li className="text-sm flex items-start" style={{ color: "#666666" }}>
                  <span className="mr-2 font-mono" style={{ color: "#f59e0b" }}>&#10003;</span>
                  Administrative control planes
                </li>
                <li className="text-sm flex items-start" style={{ color: "#666666" }}>
                  <span className="mr-2 font-mono" style={{ color: "#f59e0b" }}>&#10003;</span>
                  Policy lifecycle management
                </li>
                <li className="text-sm flex items-start" style={{ color: "#666666" }}>
                  <span className="mr-2 font-mono" style={{ color: "#f59e0b" }}>&#10003;</span>
                  Directory integrations (AD, Okta, LDAP, SAML)
                </li>
                <li className="text-sm flex items-start" style={{ color: "#666666" }}>
                  <span className="mr-2 font-mono" style={{ color: "#f59e0b" }}>&#10003;</span>
                  Compliance exports (SOC2, HIPAA, FedRAMP)
                </li>
                <li className="text-sm flex items-start" style={{ color: "#666666" }}>
                  <span className="mr-2 font-mono" style={{ color: "#f59e0b" }}>&#10003;</span>
                  Multi-tenant organizational governance
                </li>
              </ul>
              <div className="mt-4 p-3 rounded-md" style={{ background: "rgba(245,158,11,0.05)", border: "1px solid rgba(245,158,11,0.2)" }}>
                <p className="text-xs" style={{ color: "#f59e0b" }}>
                  <strong>Why commercial?</strong> These components don&apos;t decide &quot;allow vs deny&quot; — they standardize operation at scale.
                </p>
              </div>
            </div>
          </div>

          {/* Technical overview infographic */}
          <div className="card-base overflow-hidden">
            <img
              src="/img/lattice-technical-overview.png"
              alt="Lattice: Technical Architecture Overview"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// Quick Start Section
function QuickStartSection() {
  return (
    <section id="quickstart" className="py-24 relative" style={{ borderTop: "1px solid #e0e0d8" }}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="badge-primary inline-flex items-center gap-2 mb-4">
              <Terminal size={14} className="mr-2" />
              QUICK START
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: "#1a1a1a" }}>
              Up and Running in Three Commands
            </h2>
            <p className="text-lg" style={{ color: "#666666" }}>
              Install Lattice, start your headquarters, deploy your first agent.
            </p>
          </div>

          <div className="card-base p-8 mb-8">
            <div className="code-block">
              <div style={{ color: "#d97706" }}># Install via Homebrew (macOS / Linux)</div>
              <div style={{ color: "#666666" }}>$ brew install latticehq/lattice/lattice</div>
              <div className="mt-4" style={{ color: "#d97706" }}># Start Agent Headquarters</div>
              <div style={{ color: "#666666" }}>$ lattice server</div>
              <div className="mt-4" style={{ color: "#d97706" }}># Deploy an agent with full governance</div>
              <div style={{ color: "#666666" }}>$ lattice create my-agent --template docker</div>
              <div className="mt-4" style={{ color: "#d97706" }}># Serve local models (optional)</div>
              <div style={{ color: "#666666" }}>$ lattice inference serve --model mlx-community/Llama-3.2-3B-Instruct-4bit</div>
              <div className="mt-4" style={{ color: "#d97706" }}># Open the Workbench (optional)</div>
              <div style={{ color: "#666666" }}>$ lattice workbench</div>
            </div>
          </div>

          {/* What you get */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            <div className="card-base p-4">
              <Key size={16} className="mb-2" style={{ color: "#d97706" }} />
              <div className="font-semibold text-sm" style={{ color: "#1a1a1a" }}>Cryptographic Identity</div>
              <div className="text-xs" style={{ color: "#666666" }}>Not a shared API key — a unique, verifiable principal.</div>
            </div>
            <div className="card-base p-4">
              <Lock size={16} className="mb-2" style={{ color: "#d97706" }} />
              <div className="font-semibold text-sm" style={{ color: "#1a1a1a" }}>Permission Controls</div>
              <div className="text-xs" style={{ color: "#666666" }}>What your agent can and cannot do, enforced at runtime.</div>
            </div>
            <div className="card-base p-4">
              <FileText size={16} className="mb-2" style={{ color: "#d97706" }} />
              <div className="font-semibold text-sm" style={{ color: "#1a1a1a" }}>Immutable Audit Trail</div>
              <div className="text-xs" style={{ color: "#666666" }}>Every action logged, tamper-evident, compliance-ready.</div>
            </div>
            <div className="card-base p-4">
              <Cpu size={16} className="mb-2" style={{ color: "#d97706" }} />
              <div className="font-semibold text-sm" style={{ color: "#1a1a1a" }}>Local Inference</div>
              <div className="text-xs" style={{ color: "#666666" }}>No API costs. Data never leaves your machine.</div>
            </div>
            <div className="card-base p-4">
              <Monitor size={16} className="mb-2" style={{ color: "#d97706" }} />
              <div className="font-semibold text-sm" style={{ color: "#1a1a1a" }}>Web Dashboard</div>
              <div className="text-xs" style={{ color: "#666666" }}>Monitor everything in the Workbench at localhost:3000.</div>
            </div>
            <div className="card-base p-4">
              <Package size={16} className="mb-2" style={{ color: "#d97706" }} />
              <div className="font-semibold text-sm" style={{ color: "#1a1a1a" }}>Community Templates</div>
              <div className="text-xs" style={{ color: "#666666" }}>Docker, K8s, AWS, GCP, Azure — deploy anywhere.</div>
            </div>
          </div>

          {/* Registry links */}
          <div className="grid grid-cols-3 gap-4">
            <a
              href="https://registry.latticeruntime.com/modules"
              target="_blank"
              rel="noopener noreferrer"
              className="card-interactive p-4 flex items-center gap-2 text-sm"
              style={{ color: "#666666" }}
            >
              <Package size={16} style={{ color: "#d97706" }} />
              Browse Modules
            </a>
            <a
              href="https://registry.latticeruntime.com/templates"
              target="_blank"
              rel="noopener noreferrer"
              className="card-interactive p-4 flex items-center gap-2 text-sm"
              style={{ color: "#666666" }}
            >
              <Box size={16} style={{ color: "#d97706" }} />
              Explore Templates
            </a>
            <a
              href="https://registry.latticeruntime.com/presets"
              target="_blank"
              rel="noopener noreferrer"
              className="card-interactive p-4 flex items-center gap-2 text-sm"
              style={{ color: "#666666" }}
            >
              <Sparkles size={16} style={{ color: "#d97706" }} />
              Discover Presets
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// Audience Section
function AudienceSection() {
  return (
    <section id="audiences" className="py-24 relative" style={{ borderTop: "1px solid #e0e0d8" }}>
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="badge-primary inline-flex items-center gap-2 mb-4">
              <Users size={14} className="mr-2" />
              WHO IT&apos;S FOR
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: "#1a1a1a" }}>
              Same Platform. Every Scale.
            </h2>
            <p className="text-lg" style={{ color: "#666666" }}>
              From a weekend hack to Fortune 500 production — Lattice grows with you.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="card-base p-6">
              <div className="icon-container mb-4">
                <Terminal className="w-5 h-5" style={{ color: "#d97706" }} />
              </div>
              <h3 className="font-semibold mb-2" style={{ color: "#1a1a1a" }}>Weekend Hackers</h3>
              <p className="text-sm mb-4" style={{ color: "#666666" }}>
                brew install and go. Free local inference, no API bill, no credit card. Your agents run on your machine with full governance.
              </p>
              <div className="code-block p-2 text-xs">
                <span style={{ color: "#666666" }}>$ brew install latticehq/lattice/lattice</span>
              </div>
            </div>

            <div className="card-base p-6">
              <div className="icon-container mb-4">
                <Zap className="w-5 h-5" style={{ color: "#d97706" }} />
              </div>
              <h3 className="font-semibold mb-2" style={{ color: "#1a1a1a" }}>Startup Founders</h3>
              <p className="text-sm mb-4" style={{ color: "#666666" }}>
                Enterprise-grade governance from day one. Ship to enterprises without hiring a platform team. SOC2 and HIPAA compliance built in.
              </p>
              <div className="code-block p-2 text-xs">
                <span style={{ color: "#666666" }}>$ lattice create my-saas --template k8s</span>
              </div>
            </div>

            <div className="card-base p-6">
              <div className="icon-container mb-4" style={{ background: "rgba(245,158,11,0.1)", borderColor: "rgba(245,158,11,0.3)" }}>
                <Building className="w-5 h-5" style={{ color: "#f59e0b" }} />
              </div>
              <h3 className="font-semibold mb-2" style={{ color: "#1a1a1a" }}>Enterprise Platform Teams</h3>
              <p className="text-sm mb-4" style={{ color: "#666666" }}>
                Unified governance across every cloud, every system. Self-hosted, auditable, vendor-neutral. Integrates with AD, Okta, LDAP.
              </p>
              <a href="mailto:enterprise@latticeruntime.com" className="text-xs font-mono hover:underline" style={{ color: "#f59e0b" }}>
                enterprise@latticeruntime.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Contact Section
function ContactSection() {
  return (
    <section id="contact" className="py-24 relative" style={{ borderTop: "1px solid #e0e0d8" }}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="badge-primary inline-flex items-center gap-2 mb-4">
            <Mail size={14} />
            GET IN TOUCH
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: "#1a1a1a" }}>
            Join the Community
          </h2>
          <p className="text-lg mb-12" style={{ color: "#666666" }}>
            Lattice is in active development across five open-source repositories. We welcome contributions, feedback, and early adopters.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <a
              href="https://github.com/latticeHQ"
              target="_blank"
              rel="noopener noreferrer"
              className="card-interactive p-6 group"
            >
              <Github className="w-8 h-8 mx-auto mb-3 group-hover:scale-110 transition" style={{ color: "#d97706" }} />
              <h3 className="font-semibold mb-2" style={{ color: "#1a1a1a" }}>GitHub</h3>
              <p className="text-sm" style={{ color: "#666666" }}>View the ecosystem, report issues, contribute code</p>
            </a>

            <a
              href="mailto:hello@latticeruntime.com"
              className="card-interactive p-6 group"
            >
              <Mail className="w-8 h-8 mx-auto mb-3 group-hover:scale-110 transition" style={{ color: "#d97706" }} />
              <h3 className="font-semibold mb-2" style={{ color: "#1a1a1a" }}>Email</h3>
              <p className="text-sm" style={{ color: "#666666" }}>hello@latticeruntime.com</p>
            </a>

            <a
              href="mailto:security@latticeruntime.com"
              className="card-interactive p-6 group"
            >
              <Shield className="w-8 h-8 mx-auto mb-3 group-hover:scale-110 transition" style={{ color: "#d97706" }} />
              <h3 className="font-semibold mb-2" style={{ color: "#1a1a1a" }}>Security</h3>
              <p className="text-sm" style={{ color: "#666666" }}>Report vulnerabilities</p>
            </a>
          </div>

          <div className="card-base p-8" style={{ background: "linear-gradient(to right, rgba(217,119,6,0.1), rgba(245,158,11,0.1))", borderColor: "rgba(217,119,6,0.3)" }}>
            <h3 className="text-xl font-bold mb-3" style={{ color: "#1a1a1a" }}>Interested in Enterprise Edition?</h3>
            <p className="mb-6" style={{ color: "#666666" }}>
              We&apos;re working with select early partners to shape the enterprise features. Get in touch to learn more.
            </p>
            <a
              href="mailto:enterprise@latticeruntime.com"
              className="btn-primary inline-flex items-center gap-2"
            >
              <Mail size={18} className="mr-2" />
              CONTACT ENTERPRISE TEAM
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="py-8 relative" style={{ borderTop: "1px solid #e0e0d8" }}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <div className="w-6 h-6 flex items-center justify-center" style={{ background: "#f5f5f0", border: "2px solid rgba(217,119,6,0.3)" }}>
              <Shield className="w-4 h-4" style={{ color: "#d97706" }} />
            </div>
            <span className="font-bold" style={{ color: "#1a1a1a" }}>Lattice &mdash; Agent HQ</span>
          </div>

          <div className="flex items-center flex-wrap justify-center space-x-6 text-sm" style={{ color: "#666666" }}>
            <a href="https://registry.latticeruntime.com/modules" target="_blank" rel="noopener noreferrer" className="hover:text-[#d97706] transition">
              Modules
            </a>
            <a href="https://registry.latticeruntime.com/templates" target="_blank" rel="noopener noreferrer" className="hover:text-[#d97706] transition">
              Templates
            </a>
            <a href="https://registry.latticeruntime.com/presets" target="_blank" rel="noopener noreferrer" className="hover:text-[#d97706] transition">
              Presets
            </a>
            <a href="https://github.com/latticeHQ" target="_blank" rel="noopener noreferrer" className="hover:text-[#d97706] transition">
              GitHub
            </a>
            <a href="/docs" className="hover:text-[#d97706] transition">
              Documentation
            </a>
            <a href="https://github.com/latticeHQ/latticeRuntime/blob/main/LICENSE" target="_blank" rel="noopener noreferrer" className="hover:text-[#d97706] transition">
              Apache 2.0 License
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 text-center text-xs" style={{ borderTop: "1px solid #e0e0d8", color: "#999999" }}>
          <p>&copy; 2026 Lattice. The open-source headquarters for AI agents. Your agents. Your models. Your rules. Your infrastructure.</p>
        </div>
      </div>
    </footer>
  );
}
