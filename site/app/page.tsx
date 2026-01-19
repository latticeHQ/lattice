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
} from 'lucide-react';

type ActiveSection = 'hero' | 'problem' | 'solution' | 'features' | 'architecture' | 'contact';

export default function LatticeRuntime() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState<ActiveSection>('hero');
  const [consoleLines, setConsoleLines] = useState<string[]>([]);
  const [showCursor, setShowCursor] = useState(true);
  const [metrics, setMetrics] = useState({
    throughput: 0,
    latency: 0,
    blocked: 0,
    allowed: 0
  });

  useEffect(() => {
    setIsLoaded(true);

    // Animate metrics
    const metricsInterval = setInterval(() => {
      setMetrics({
        throughput: Math.floor(Math.random() * 50000) + 45000,
        latency: Math.random() * 2 + 0.1,
        blocked: Math.floor(Math.random() * 100) + 50,
        allowed: Math.floor(Math.random() * 5000) + 8000
      });
    }, 2000);

    // Simulate enforcement console
    const terminalLines = [
      '$ lattice enforce --mode strict --verify-chains',
      'Initializing Lattice Runtime v0.1.0...',
      'Loading cryptographic policy chains...',
      '✓ Identity verification layer: ACTIVE [SHA-256: 8f3a...]',
      '✓ Authorization engine: ACTIVE [Policy count: 247]',
      '✓ Audit blockchain: SYNCED [Block height: 142,857]',
      '✓ Deployment constraints: ENFORCED [Zones: 12]',
      '✓ Quantum-resistant signatures: ENABLED',
      '',
      'Agent request: deploy_model(model_id="gpt-4", region="us-east")',
      '→ [0.023ms] Verifying identity signature...',
      '→ [0.041ms] Checking authorization policies...',
      '→ [0.015ms] Evaluating deployment constraints...',
      '→ [0.008ms] Computing audit merkle proof...',
      '✓ Request ALLOWED - All 247 policies satisfied',
      '✓ Audit event recorded: event_id="ae7f2a1c" | block=142858',
      '✓ Total enforcement time: 0.087ms',
      '',
      'Ready to enforce. Violations will be blocked.',
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
      const sections: ActiveSection[] = ['hero', 'problem', 'solution', 'features', 'architecture', 'contact'];

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
      clearInterval(metricsInterval);
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
        <HeroSection consoleLines={consoleLines} showCursor={showCursor} metrics={metrics} />
        <ProblemSection />
        <SolutionSection />
        <FeaturesSection />
        <ArchitectureSection />
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
    { id: 'features' as ActiveSection, label: 'Features' },
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
                Runtime
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
            <a
              href="https://registry.latticeruntime.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium transition-colors hover:text-[#d97706]"
              style={{ color: "#666666" }}
            >
              Registry
            </a>
            <a
              href="https://github.com/latticeHQ/lattice-runtime"
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
function HeroSection({ consoleLines, showCursor, metrics }: { consoleLines: string[], showCursor: boolean, metrics: any }) {
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
              <span className="tracking-wide">ENTERPRISE ENFORCEMENT ARCHITECTURE</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight" style={{ color: "#1a1a1a" }}>
              Runtime Enforcement
              <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r" style={{ backgroundImage: "linear-gradient(to right, #d97706, #f59e0b)" }}>
                for AI Agents
              </span>
            </h1>

            <p className="text-xl mb-12 leading-relaxed max-w-2xl" style={{ color: "#666666" }}>
              Lattice provides <span style={{ color: "#1a1a1a", fontWeight: "500" }}>cryptographically-verified identity, zero-trust authorization, immutable audit, and deployment constraints</span> as enforced runtime primitives.
            </p>

            {/* Real-time metrics dashboard */}
            <div className="grid grid-cols-2 gap-3 mb-12">
              <div className="card-base p-6">
                <div className="space-y-2">
                  <div className="text-xs font-medium uppercase tracking-wider" style={{ color: "#999999" }}>Throughput</div>
                  <div className="text-3xl font-bold tabular-nums font-mono" style={{ color: "#1a1a1a" }}>
                    {metrics.throughput.toLocaleString()}
                    <span className="text-sm font-normal ml-2" style={{ color: "#999999" }}>req/s</span>
                  </div>
                </div>
              </div>
              <div className="card-base p-6">
                <div className="space-y-2">
                  <div className="text-xs font-medium uppercase tracking-wider" style={{ color: "#999999" }}>Latency</div>
                  <div className="text-3xl font-bold tabular-nums font-mono" style={{ color: "#1a1a1a" }}>
                    {metrics.latency.toFixed(2)}
                    <span className="text-sm font-normal ml-2" style={{ color: "#999999" }}>ms</span>
                  </div>
                </div>
              </div>
              <div className="card-base p-6">
                <div className="space-y-2">
                  <div className="text-xs font-medium uppercase tracking-wider" style={{ color: "#999999" }}>Allowed</div>
                  <div className="text-3xl font-bold tabular-nums font-mono" style={{ color: "#d97706" }}>
                    {metrics.allowed.toLocaleString()}
                  </div>
                </div>
              </div>
              <div className="card-base p-6">
                <div className="space-y-2">
                  <div className="text-xs font-medium uppercase tracking-wider" style={{ color: "#999999" }}>Blocked</div>
                  <div className="text-3xl font-bold tabular-nums font-mono" style={{ color: "#d97706" }}>
                    {metrics.blocked}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#solution"
                className="btn-primary inline-flex items-center justify-center gap-2 px-6 py-3"
              >
                Get Started
                <ArrowRight size={18} />
              </a>
              <a
                href="https://github.com/latticeHQ/lattice-runtime"
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
                <span className="font-medium font-mono text-sm" style={{ color: "#666666" }}>lattice_enforcement.log</span>
                <div className="ml-auto flex gap-2">
                  <div className="w-2 h-2 rounded-full" style={{ background: "#e0e0d8" }}></div>
                  <div className="w-2 h-2 rounded-full" style={{ background: "#e0e0d8" }}></div>
                  <div className="w-2 h-2 rounded-full" style={{ background: "#d97706" }}></div>
                </div>
              </div>

              <div className="code-block p-6 font-mono text-sm h-96 overflow-auto">
                {consoleLines.map((line, index) => (
                  <div key={index} style={{ color: line.startsWith('✓') ? "#059669" : line.startsWith('→') ? "#999999" : "#666666" }}>
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
                  <span className="mr-2" style={{ color: "#dc2626" }}>✗</span>
                  Expensive engineering resources
                </li>
                <li className="text-sm flex items-start" style={{ color: "#666666" }}>
                  <span className="mr-2" style={{ color: "#dc2626" }}>✗</span>
                  Diverts from core product development
                </li>
                <li className="text-sm flex items-start" style={{ color: "#666666" }}>
                  <span className="mr-2" style={{ color: "#dc2626" }}>✗</span>
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
                  <span className="mr-2" style={{ color: "#dc2626" }}>✗</span>
                  Small teams can&apos;t compete
                </li>
                <li className="text-sm flex items-start" style={{ color: "#666666" }}>
                  <span className="mr-2" style={{ color: "#dc2626" }}>✗</span>
                  Innovation slowed by infrastructure work
                </li>
                <li className="text-sm flex items-start" style={{ color: "#666666" }}>
                  <span className="mr-2" style={{ color: "#dc2626" }}>✗</span>
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
              Lattice decouples trust from team size by making enforcement a property of the runtime itself.
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
                  Policy violations are structurally impossible—enforcement happens by design, not by discipline.
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
                    <div className="font-medium" style={{ color: "#1a1a1a" }}>Auditable & Provable</div>
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
                    <div className="font-medium" style={{ color: "#1a1a1a" }}>Scales with Revenue</div>
                    <div className="text-sm" style={{ color: "#666666" }}>Lattice grows with you as you close deals</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="card-base p-8 text-center" style={{ background: "linear-gradient(to right, rgba(217,119,6,0.1), rgba(245,158,11,0.1))", borderColor: "rgba(217,119,6,0.3)" }}>
            <p className="text-2xl font-bold mb-2" style={{ color: "#1a1a1a" }}>
              Individual developers can now ship software that enterprises trust.
            </p>
            <p style={{ color: "#666666" }}>
              Enterprise-grade enforcement becomes structural, not organizational.
            </p>
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
              Verifies the identity of principals (users, services, agents) across cloud, self-hosted, and air-gapped environments.
            </p>
            <ul className="space-y-2">
              <li className="text-sm flex items-start" style={{ color: "#666666" }}>
                <span className="mr-2 font-mono" style={{ color: "#d97706" }}>»</span>
                Multi-factor authentication support
              </li>
              <li className="text-sm flex items-start" style={{ color: "#666666" }}>
                <span className="mr-2 font-mono" style={{ color: "#d97706" }}>»</span>
                Service account verification
              </li>
              <li className="text-sm flex items-start" style={{ color: "#666666" }}>
                <span className="mr-2 font-mono" style={{ color: "#d97706" }}>»</span>
                Cross-environment identity federation
              </li>
              <li className="text-sm flex items-start" style={{ color: "#666666" }}>
                <span className="mr-2 font-mono" style={{ color: "#d97706" }}>»</span>
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
              Evaluates whether an authenticated principal is permitted to perform a specific action on a resource.
            </p>
            <ul className="space-y-2">
              <li className="text-sm flex items-start" style={{ color: "#666666" }}>
                <span className="mr-2 font-mono" style={{ color: "#d97706" }}>»</span>
                Role-based access control (RBAC)
              </li>
              <li className="text-sm flex items-start" style={{ color: "#666666" }}>
                <span className="mr-2 font-mono" style={{ color: "#d97706" }}>»</span>
                Attribute-based policies (ABAC)
              </li>
              <li className="text-sm flex items-start" style={{ color: "#666666" }}>
                <span className="mr-2 font-mono" style={{ color: "#d97706" }}>»</span>
                Fine-grained resource permissions
              </li>
              <li className="text-sm flex items-start" style={{ color: "#666666" }}>
                <span className="mr-2 font-mono" style={{ color: "#d97706" }}>»</span>
                Dynamic policy evaluation
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
              Generates tamper-evident records of all enforcement decisions and agent actions for compliance and forensics.
            </p>
            <ul className="space-y-2">
              <li className="text-sm flex items-start" style={{ color: "#666666" }}>
                <span className="mr-2 font-mono" style={{ color: "#d97706" }}>»</span>
                Immutable audit trail
              </li>
              <li className="text-sm flex items-start" style={{ color: "#666666" }}>
                <span className="mr-2 font-mono" style={{ color: "#d97706" }}>»</span>
                Cryptographic event signing
              </li>
              <li className="text-sm flex items-start" style={{ color: "#666666" }}>
                <span className="mr-2 font-mono" style={{ color: "#d97706" }}>»</span>
                Compliance reporting (SOC2, HIPAA, etc.)
              </li>
              <li className="text-sm flex items-start" style={{ color: "#666666" }}>
                <span className="mr-2 font-mono" style={{ color: "#d97706" }}>»</span>
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
              Ensures agents execute only within approved boundaries, configurations, and environments.
            </p>
            <ul className="space-y-2">
              <li className="text-sm flex items-start" style={{ color: "#666666" }}>
                <span className="mr-2 font-mono" style={{ color: "#d97706" }}>»</span>
                Geographic restrictions
              </li>
              <li className="text-sm flex items-start" style={{ color: "#666666" }}>
                <span className="mr-2 font-mono" style={{ color: "#d97706" }}>»</span>
                Network segmentation enforcement
              </li>
              <li className="text-sm flex items-start" style={{ color: "#666666" }}>
                <span className="mr-2 font-mono" style={{ color: "#d97706" }}>»</span>
                Resource quota management
              </li>
              <li className="text-sm flex items-start" style={{ color: "#666666" }}>
                <span className="mr-2 font-mono" style={{ color: "#d97706" }}>»</span>
                Air-gap validation
              </li>
            </ul>
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
              OPEN CORE ARCHITECTURE
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: "#1a1a1a" }}>
              How Lattice Works
            </h2>
            <p className="text-lg" style={{ color: "#666666" }}>
              Lattice operates as a control plane in the execution path, enforcing policies before actions execute.
            </p>
          </div>

          <div className="card-base p-8 mb-12">
            <div className="font-mono text-sm">
              <div className="flex items-center justify-between mb-4" style={{ color: "#d97706" }}>
                <span>Agent Request</span>
                <ArrowRight size={16} />
                <span>Lattice Runtime</span>
                <ArrowRight size={16} />
                <span>Policy Evaluation</span>
                <ArrowRight size={16} />
                <span style={{ color: "#059669" }}>Allow</span>
                <span style={{ color: "#e0e0d8" }}>/</span>
                <span style={{ color: "#dc2626" }}>Deny</span>
              </div>
              <div className="flex justify-center" style={{ color: "#e0e0d8" }}>
                <ArrowRight size={16} className="rotate-90" />
              </div>
              <div className="text-center" style={{ color: "#3b82f6" }}>
                Audit Event Generated
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="card-base p-8">
              <h3 className="font-bold mb-6 flex items-center" style={{ color: "#1a1a1a" }}>
                <CheckSquare className="w-5 h-5 mr-2" style={{ color: "#d97706" }} />
                Open Source (Apache 2.0)
              </h3>
              <p className="text-sm mb-4" style={{ color: "#666666" }}>
                The runtime enforcement layer is fully open source and auditable. This includes all components that evaluate and enforce policies.
              </p>
              <ul className="space-y-2">
                <li className="text-sm flex items-start" style={{ color: "#666666" }}>
                  <span className="mr-2 font-mono" style={{ color: "#d97706" }}>✓</span>
                  Identity and authorization evaluation
                </li>
                <li className="text-sm flex items-start" style={{ color: "#666666" }}>
                  <span className="mr-2 font-mono" style={{ color: "#d97706" }}>✓</span>
                  Policy decision engine
                </li>
                <li className="text-sm flex items-start" style={{ color: "#666666" }}>
                  <span className="mr-2 font-mono" style={{ color: "#d97706" }}>✓</span>
                  Audit event generation
                </li>
                <li className="text-sm flex items-start" style={{ color: "#666666" }}>
                  <span className="mr-2 font-mono" style={{ color: "#d97706" }}>✓</span>
                  Self-hosted deployment primitives
                </li>
              </ul>
              <div className="mt-4 p-3 rounded-md" style={{ background: "rgba(217,119,6,0.05)", border: "1px solid rgba(217,119,6,0.2)" }}>
                <p className="text-xs" style={{ color: "#d97706" }}>
                  <strong>Why open?</strong> Enterprises must inspect enforcement logic. Trust cannot depend on vendor opacity.
                </p>
              </div>
            </div>

            <div className="card-base p-8">
              <h3 className="font-bold mb-6 flex items-center" style={{ color: "#1a1a1a" }}>
                <Building className="w-5 h-5 mr-2" style={{ color: "#f59e0b" }} />
                Commercial (Enterprise Edition)
              </h3>
              <p className="text-sm mb-4" style={{ color: "#666666" }}>
                Enterprise control, governance, and administration features are commercially licensed for enterprise use.
              </p>
              <ul className="space-y-2">
                <li className="text-sm flex items-start" style={{ color: "#666666" }}>
                  <span className="mr-2 font-mono" style={{ color: "#f59e0b" }}>✓</span>
                  Administrative control planes
                </li>
                <li className="text-sm flex items-start" style={{ color: "#666666" }}>
                  <span className="mr-2 font-mono" style={{ color: "#f59e0b" }}>✓</span>
                  Policy lifecycle management
                </li>
                <li className="text-sm flex items-start" style={{ color: "#666666" }}>
                  <span className="mr-2 font-mono" style={{ color: "#f59e0b" }}>✓</span>
                  Directory integrations (LDAP, SAML, OIDC)
                </li>
                <li className="text-sm flex items-start" style={{ color: "#666666" }}>
                  <span className="mr-2 font-mono" style={{ color: "#f59e0b" }}>✓</span>
                  Compliance reporting and exports
                </li>
              </ul>
              <div className="mt-4 p-3 rounded-md" style={{ background: "rgba(245,158,11,0.05)", border: "1px solid rgba(245,158,11,0.2)" }}>
                <p className="text-xs" style={{ color: "#f59e0b" }}>
                  <strong>Why commercial?</strong> These components don&apos;t decide &quot;allow vs deny&quot;—they standardize operation at scale.
                </p>
              </div>
            </div>
          </div>

          <div className="card-base p-8">
            <h3 className="font-bold mb-4" style={{ color: "#1a1a1a" }}>Getting Started</h3>
            <div className="code-block">
              <div className="mb-2" style={{ color: "#d97706" }}># Install Lattice Runtime (coming soon)</div>
              <div style={{ color: "#666666" }}>$ curl -fsSL https://latticeruntime.com/install.sh | sh</div>
              <div className="mt-4" style={{ color: "#666666" }}>$ lattice init</div>
              <div style={{ color: "#666666" }}>$ lattice enforce --config ./policies.yml</div>
            </div>
            <p className="text-sm mt-4" style={{ color: "#666666" }}>
              Documentation, examples, and API references coming soon. Star the project on GitHub to follow development.
            </p>
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
            Join the Development
          </h2>
          <p className="text-lg mb-12" style={{ color: "#666666" }}>
            Lattice is in active development. We welcome contributions, feedback, and early adopters.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <a
              href="https://github.com/latticeHQ/lattice-runtime"
              target="_blank"
              rel="noopener noreferrer"
              className="card-interactive p-6 group"
            >
              <Github className="w-8 h-8 mx-auto mb-3 group-hover:scale-110 transition" style={{ color: "#d97706" }} />
              <h3 className="font-semibold mb-2" style={{ color: "#1a1a1a" }}>GitHub</h3>
              <p className="text-sm" style={{ color: "#666666" }}>View source, report issues, contribute code</p>
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
            <span className="font-bold" style={{ color: "#1a1a1a" }}>Lattice Runtime</span>
          </div>

          <div className="flex items-center space-x-6 text-sm" style={{ color: "#666666" }}>
            <a href="https://registry.latticeruntime.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#d97706] transition">
              Registry
            </a>
            <a href="https://github.com/latticeHQ/lattice-runtime" target="_blank" rel="noopener noreferrer" className="hover:text-[#d97706] transition">
              GitHub
            </a>
            <a href="/docs" className="hover:text-[#d97706] transition">
              Documentation
            </a>
            <a href="https://github.com/latticeHQ/lattice-runtime/blob/main/LICENSE" target="_blank" rel="noopener noreferrer" className="hover:text-[#d97706] transition">
              Apache 2.0 License
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 text-center text-xs" style={{ borderTop: "1px solid #e0e0d8", color: "#999999" }}>
          <p>© 2026 Lattice Runtime. Open source runtime enforcement for autonomous AI agents.</p>
        </div>
      </div>
    </footer>
  );
}
