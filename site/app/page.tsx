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
  Zap,
  GitBranch,
  AlertCircle,
  CheckSquare,
  ArrowRight,
  Github,
  Mail,
  Activity,
  Cpu,
  Database,
  Server,
  Network,
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
    <div className={`min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-orange-500/20 selection:text-white transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      {/* Base gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-950 via-orange-950/20 to-slate-950"></div>
      
      {/* Lattice structure overlay - hexagonal molecular grid */}
      <div className="fixed inset-0 opacity-20" style={{
        backgroundImage: `
          radial-gradient(circle at 20px 20px, rgba(251,146,60,0.15) 1px, transparent 1px),
          radial-gradient(circle at 60px 60px, rgba(251,146,60,0.15) 1px, transparent 1px)
        `,
        backgroundSize: '80px 80px',
        backgroundPosition: '0 0, 40px 40px'
      }}></div>
      
      {/* Crystalline connection lines */}
      <svg className="fixed inset-0 w-full h-full opacity-10 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="lattice-grid" x="0" y="0" width="120" height="104" patternUnits="userSpaceOnUse">
            {/* Hexagonal lattice structure */}
            <path d="M60,0 L90,15 L90,45 L60,60 L30,45 L30,15 Z" fill="none" stroke="rgba(251,146,60,0.3)" strokeWidth="0.5"/>
            <path d="M60,0 L120,30" stroke="rgba(251,146,60,0.2)" strokeWidth="0.5"/>
            <path d="M90,15 L120,30" stroke="rgba(251,146,60,0.2)" strokeWidth="0.5"/>
            <path d="M90,45 L120,60" stroke="rgba(251,146,60,0.2)" strokeWidth="0.5"/>
            <path d="M60,60 L60,104" stroke="rgba(251,146,60,0.2)" strokeWidth="0.5"/>
            <path d="M30,45 L0,30" stroke="rgba(251,146,60,0.2)" strokeWidth="0.5"/>
            <path d="M30,15 L0,30" stroke="rgba(251,146,60,0.2)" strokeWidth="0.5"/>
            {/* Nodes at connection points */}
            <circle cx="60" cy="0" r="1.5" fill="rgba(251,146,60,0.4)"/>
            <circle cx="90" cy="15" r="1.5" fill="rgba(251,146,60,0.4)"/>
            <circle cx="90" cy="45" r="1.5" fill="rgba(251,146,60,0.4)"/>
            <circle cx="60" cy="60" r="1.5" fill="rgba(251,146,60,0.4)"/>
            <circle cx="30" cy="45" r="1.5" fill="rgba(251,146,60,0.4)"/>
            <circle cx="30" cy="15" r="1.5" fill="rgba(251,146,60,0.4)"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#lattice-grid)"/>
      </svg>
      
      {/* Vignette */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)] pointer-events-none"></div>

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
  const navItems = [
    { id: 'hero' as ActiveSection, label: 'Home' },
    { id: 'problem' as ActiveSection, label: 'Problem' },
    { id: 'solution' as ActiveSection, label: 'Solution' },
    { id: 'features' as ActiveSection, label: 'Features' },
    { id: 'architecture' as ActiveSection, label: 'Architecture' },
    { id: 'contact' as ActiveSection, label: 'Contact' }
  ];

  return (
    <header className="fixed w-full z-50 bg-slate-950/80 backdrop-blur-xl border-b border-orange-500/10">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-12">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-8 h-8 bg-slate-950 border-2 border-orange-500/50 flex items-center justify-center relative overflow-hidden">
                  {/* Lattice pattern in logo */}
                  <div className="absolute inset-0 opacity-20">
                    <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg">
                      <line x1="0" y1="0" x2="32" y2="32" stroke="currentColor" strokeWidth="1" className="text-orange-400"/>
                      <line x1="32" y1="0" x2="0" y2="32" stroke="currentColor" strokeWidth="1" className="text-orange-400"/>
                      <line x1="16" y1="0" x2="16" y2="32" stroke="currentColor" strokeWidth="1" className="text-orange-400"/>
                      <line x1="0" y1="16" x2="32" y2="16" stroke="currentColor" strokeWidth="1" className="text-orange-400"/>
                    </svg>
                  </div>
                  <Shield className="w-5 h-5 text-orange-400 relative z-10" />
                </div>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-lg font-bold text-white">Lattice Runtime</span>
                <span className="text-xs text-orange-400">Enforcement Infrastructure</span>
              </div>
            </div>

            <nav className="hidden md:flex">
              <ul className="flex space-x-6">
                {navItems.map(item => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className={`text-sm hover:text-orange-400 transition-colors relative ${
                        activeSection === item.id ? 'text-orange-400 font-medium' : 'text-slate-400'
                      }`}
                    >
                      {item.label}
                      {activeSection === item.id && (
                        <span className="absolute -bottom-3 left-0 w-full h-0.5 bg-orange-500"></span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <a
            href="https://github.com/latticeHQ/lattice-runtime"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 px-4 py-2 bg-orange-600 text-white text-sm font-medium rounded-lg hover:bg-purple-700 transition-colors"
          >
            <Github size={14} className="mr-1.5" />
            VIEW ON GITHUB
          </a>
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
            <div className="inline-flex items-center gap-3 text-xs font-medium text-orange-400 border-2 border-orange-500/30 px-5 py-2 mb-8 bg-slate-900/50 backdrop-blur-sm relative overflow-hidden">
              {/* Lattice corner decorations */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-orange-500/50"></div>
              <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-orange-500/50"></div>
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-orange-500/50"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-orange-500/50"></div>
              
              <svg width="16" height="16" viewBox="0 0 16 16" className="text-orange-400">
                <circle cx="8" cy="8" r="2" fill="currentColor"/>
                <circle cx="8" cy="8" r="6" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
                <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="1"/>
                <line x1="8" y1="10" x2="8" y2="14" stroke="currentColor" strokeWidth="1"/>
                <line x1="2" y1="8" x2="6" y2="8" stroke="currentColor" strokeWidth="1"/>
                <line x1="10" y1="8" x2="14" y2="8" stroke="currentColor" strokeWidth="1"/>
              </svg>
              <span className="tracking-wide">ENTERPRISE ENFORCEMENT ARCHITECTURE</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-white">Runtime Enforcement</span>
              <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-300 to-orange-400">
                for AI Agents
              </span>
            </h1>

            <p className="text-slate-400 text-xl mb-12 leading-relaxed max-w-2xl">
              Lattice provides <span className="text-white font-medium">cryptographically-verified identity, zero-trust authorization, immutable audit, and deployment constraints</span> as enforced runtime primitives.
            </p>

            {/* Real-time metrics dashboard */}
            <div className="grid grid-cols-2 gap-px mb-12 bg-orange-500/20 border-2 border-orange-500/30">
              <div className="bg-slate-900/90 p-6 relative overflow-hidden">
                {/* Corner markers */}
                <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-orange-400/50"></div>
                <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-orange-400/50"></div>
                <div className="space-y-2">
                  <div className="text-xs font-medium text-slate-500 uppercase tracking-wider">Throughput</div>
                  <div className="text-3xl font-bold text-white tabular-nums font-mono">
                    {metrics.throughput.toLocaleString()}
                    <span className="text-sm text-slate-500 ml-2 font-normal">req/s</span>
                  </div>
                </div>
              </div>
              <div className="bg-slate-900/90 p-6 relative overflow-hidden">
                <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-orange-400/50"></div>
                <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-orange-400/50"></div>
                <div className="space-y-2">
                  <div className="text-xs font-medium text-slate-500 uppercase tracking-wider">Latency</div>
                  <div className="text-3xl font-bold text-white tabular-nums font-mono">
                    {metrics.latency.toFixed(2)}
                    <span className="text-sm text-slate-500 ml-2 font-normal">ms</span>
                  </div>
                </div>
              </div>
              <div className="bg-slate-900/90 p-6 relative overflow-hidden">
                <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-orange-400/50"></div>
                <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-orange-400/50"></div>
                <div className="space-y-2">
                  <div className="text-xs font-medium text-slate-500 uppercase tracking-wider">Allowed</div>
                  <div className="text-3xl font-bold text-orange-400 tabular-nums font-mono">
                    {metrics.allowed.toLocaleString()}
                  </div>
                </div>
              </div>
              <div className="bg-slate-900/90 p-6 relative overflow-hidden">
                <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-orange-400/50"></div>
                <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-orange-400/50"></div>
                <div className="space-y-2">
                  <div className="text-xs font-medium text-slate-500 uppercase tracking-wider">Blocked</div>
                  <div className="text-3xl font-bold text-orange-400 tabular-nums font-mono">
                    {metrics.blocked}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#solution"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-orange-600 text-white text-base font-semibold rounded-lg hover:bg-purple-700 transition-colors"
              >
                Get Started
                <ArrowRight size={18} />
              </a>
              <a
                href="https://github.com/latticeHQ/lattice-runtime"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-slate-800/50 border border-slate-700 text-slate-200 text-base font-semibold rounded-lg hover:bg-slate-800 hover:border-slate-600 transition-colors"
              >
                <Github size={18} />
                View on GitHub
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative">
              {/* Structural corner decorations */}
              <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-orange-500/30 pointer-events-none z-10"></div>
              <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-orange-500/30 pointer-events-none z-10"></div>
              <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-orange-500/30 pointer-events-none z-10"></div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-orange-500/30 pointer-events-none z-10"></div>
              
              <div className="relative bg-slate-900/50 border-2 border-orange-500/30 overflow-hidden backdrop-blur-sm">
                <div className="bg-slate-900/80 text-slate-400 py-3 px-4 border-b-2 border-orange-500/30 flex items-center text-sm">
                  <Terminal size={14} className="mr-2 text-orange-400" />
                  <span className="font-medium font-mono">lattice_enforcement.log</span>
                  <div className="ml-auto flex gap-2">
                    <div className="w-2 h-2 border border-slate-600"></div>
                    <div className="w-2 h-2 border border-slate-600"></div>
                    <div className="w-2 h-2 border border-orange-500"></div>
                  </div>
                </div>

                <div className="p-6 font-mono text-sm text-slate-300 h-96 overflow-auto">
                  {consoleLines.map((line, index) => (
                    <div key={index} className={line.startsWith('✓') ? 'text-orange-400' : line.startsWith('→') ? 'text-slate-500' : ''}>
                      {line}
                    </div>
                  ))}
                  {showCursor && <span className="inline-block w-2 h-4 bg-orange-400 ml-1 align-text-bottom animate-pulse"></span>}
                </div>
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
    <section id="problem" className="py-24 border-t border-orange-500/10 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center text-xs bg-red-900/20 border border-red-500/30 px-3 py-1.5 mb-4">
              <AlertCircle size={14} className="mr-2" />
              THE CHALLENGE
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Enterprise Trust Requires Scale
            </h2>
            <p className="text-slate-400 text-lg">
              Historically, meeting enterprise security requirements has required large organizations with dedicated platform teams.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-900/50 border border-red-500/20 p-6">
              <div className="flex items-start mb-4">
                <div className="p-2 bg-red-900/20 border border-red-500/30 mr-4">
                  <Code className="w-6 h-6 text-red-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Application-Level Enforcement</h3>
                  <p className="text-slate-400 text-sm">
                    Every AI company re-implements SSO, RBAC, audit logs, and compliance controls inside their application code.
                  </p>
                </div>
              </div>
              <ul className="space-y-2 ml-14">
                <li className="text-slate-400 text-sm flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  Expensive engineering resources
                </li>
                <li className="text-slate-400 text-sm flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  Diverts from core product development
                </li>
                <li className="text-slate-400 text-sm flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  Trust depends on code discipline
                </li>
              </ul>
            </div>

            <div className="bg-slate-900/50 border border-red-500/20 p-6">
              <div className="flex items-start mb-4">
                <div className="p-2 bg-red-900/20 border border-red-500/30 mr-4">
                  <Users className="w-6 h-6 text-red-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Coupled to Team Size</h3>
                  <p className="text-slate-400 text-sm">
                    Enterprise readiness becomes tightly coupled to organizational scale and team maturity.
                  </p>
                </div>
              </div>
              <ul className="space-y-2 ml-14">
                <li className="text-slate-400 text-sm flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  Small teams can&apos;t compete
                </li>
                <li className="text-slate-400 text-sm flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  Innovation slowed by infrastructure work
                </li>
                <li className="text-slate-400 text-sm flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  Enterprise deals require large teams
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 bg-slate-900/50 border border-orange-500/20 p-8 text-center">
            <p className="text-white text-xl font-semibold mb-2">
              The result: Only large organizations can ship software that enterprises trust.
            </p>
            <p className="text-slate-400">
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
    <section id="solution" className="py-24 border-t border-orange-500/10 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center text-xs bg-orange-900/20 border border-orange-500/30 px-3 py-1.5 mb-4">
              <CheckCircle size={14} className="mr-2" />
              THE SOLUTION
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Move Enforcement Into the Runtime
            </h2>
            <p className="text-slate-400 text-lg">
              Lattice decouples trust from team size by making enforcement a property of the runtime itself.
            </p>
          </div>

          <div className="bg-slate-900/50 border border-orange-500/30 p-8 mb-12">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold text-orange-400 mb-2">1</div>
                <h3 className="text-white font-semibold mb-2">Declare Constraints</h3>
                <p className="text-slate-400 text-sm">
                  Agent developers declare identity, authorization, audit, and deployment constraints once.
                </p>
              </div>

              <div>
                <div className="text-4xl font-bold text-orange-400 mb-2">2</div>
                <h3 className="text-white font-semibold mb-2">Runtime Enforcement</h3>
                <p className="text-slate-400 text-sm">
                  Lattice sits in the execution path and enforces constraints before actions are executed.
                </p>
              </div>

              <div>
                <div className="text-4xl font-bold text-orange-400 mb-2">3</div>
                <h3 className="text-white font-semibold mb-2">Violations Blocked</h3>
                <p className="text-slate-400 text-sm">
                  Policy violations are structurally impossible—enforcement happens by design, not by discipline.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-slate-900/50 border border-orange-500/20 p-6">
              <h3 className="text-white font-semibold mb-4 flex items-center">
                <Building className="w-5 h-5 text-orange-400 mr-2" />
                For Enterprises
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-orange-400 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-white font-medium">Enforced by Runtime</div>
                    <div className="text-slate-400 text-sm">Trust is structural, not based on vendor promises</div>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-orange-400 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-white font-medium">Auditable & Provable</div>
                    <div className="text-slate-400 text-sm">All enforcement decisions are transparent and inspectable</div>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-orange-400 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-white font-medium">Deploy Anywhere</div>
                    <div className="text-slate-400 text-sm">Cloud, self-hosted, or air-gapped environments</div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-slate-900/50 border border-orange-500/20 p-6">
              <h3 className="text-white font-semibold mb-4 flex items-center">
                <Code className="w-5 h-5 text-orange-400 mr-2" />
                For Developers
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-orange-400 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-white font-medium">Build Capabilities, Not Infrastructure</div>
                    <div className="text-slate-400 text-sm">Focus on agents, not enforcement systems</div>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-orange-400 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-white font-medium">Enterprise-Ready from Day One</div>
                    <div className="text-slate-400 text-sm">Ship to enterprises without a platform team</div>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-orange-400 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-white font-medium">Scales with Revenue</div>
                    <div className="text-slate-400 text-sm">Lattice grows with you as you close deals</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-900/20 to-orange-800/20 border border-orange-500/30 p-8 text-center">
            <p className="text-white text-2xl font-bold mb-2">
              Individual developers can now ship software that enterprises trust.
            </p>
            <p className="text-slate-400">
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
    <section id="features" className="py-24 border-t border-orange-500/10 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center text-xs bg-orange-900/20 border border-orange-500/30 px-3 py-1.5 mb-4">
            <Layers size={14} className="mr-2" />
            ENFORCEMENT PRIMITIVES
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            What Lattice Enforces
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            Four core enforcement layers that operate in the execution path, making violations impossible by construction.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="bg-slate-900/50 border border-orange-500/30 p-8">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-orange-900/20 border border-orange-500/30 mr-4">
                <Key className="w-8 h-8 text-orange-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Identity</h3>
                <p className="text-orange-400 text-sm">Who or what is making the request?</p>
              </div>
            </div>
            <p className="text-slate-400 mb-4">
              Verifies the identity of principals (users, services, agents) across cloud, self-hosted, and air-gapped environments.
            </p>
            <ul className="space-y-2">
              <li className="text-slate-400 text-sm flex items-start">
                <span className="text-orange-500 mr-2 font-mono">»</span>
                Multi-factor authentication support
              </li>
              <li className="text-slate-400 text-sm flex items-start">
                <span className="text-orange-500 mr-2 font-mono">»</span>
                Service account verification
              </li>
              <li className="text-slate-400 text-sm flex items-start">
                <span className="text-orange-500 mr-2 font-mono">»</span>
                Cross-environment identity federation
              </li>
              <li className="text-slate-400 text-sm flex items-start">
                <span className="text-orange-500 mr-2 font-mono">»</span>
                Zero-trust identity model
              </li>
            </ul>
          </div>

          <div className="bg-slate-900/50 border border-orange-500/30 p-8">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-orange-900/20 border border-orange-500/30 mr-4">
                <Lock className="w-8 h-8 text-orange-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Authorization</h3>
                <p className="text-orange-400 text-sm">Is this action allowed?</p>
              </div>
            </div>
            <p className="text-slate-400 mb-4">
              Evaluates whether an authenticated principal is permitted to perform a specific action on a resource.
            </p>
            <ul className="space-y-2">
              <li className="text-slate-400 text-sm flex items-start">
                <span className="text-orange-500 mr-2 font-mono">»</span>
                Role-based access control (RBAC)
              </li>
              <li className="text-slate-400 text-sm flex items-start">
                <span className="text-orange-500 mr-2 font-mono">»</span>
                Attribute-based policies (ABAC)
              </li>
              <li className="text-slate-400 text-sm flex items-start">
                <span className="text-orange-500 mr-2 font-mono">»</span>
                Fine-grained resource permissions
              </li>
              <li className="text-slate-400 text-sm flex items-start">
                <span className="text-orange-500 mr-2 font-mono">»</span>
                Dynamic policy evaluation
              </li>
            </ul>
          </div>

          <div className="bg-slate-900/50 border border-orange-500/30 p-8">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-orange-900/20 border border-orange-500/30 mr-4">
                <FileText className="w-8 h-8 text-orange-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Audit</h3>
                <p className="text-orange-400 text-sm">What happened and when?</p>
              </div>
            </div>
            <p className="text-slate-400 mb-4">
              Generates tamper-evident records of all enforcement decisions and agent actions for compliance and forensics.
            </p>
            <ul className="space-y-2">
              <li className="text-slate-400 text-sm flex items-start">
                <span className="text-orange-500 mr-2 font-mono">»</span>
                Immutable audit trail
              </li>
              <li className="text-slate-400 text-sm flex items-start">
                <span className="text-orange-500 mr-2 font-mono">»</span>
                Cryptographic event signing
              </li>
              <li className="text-slate-400 text-sm flex items-start">
                <span className="text-orange-500 mr-2 font-mono">»</span>
                Compliance reporting (SOC2, HIPAA, etc.)
              </li>
              <li className="text-slate-400 text-sm flex items-start">
                <span className="text-orange-500 mr-2 font-mono">»</span>
                Real-time event streaming
              </li>
            </ul>
          </div>

          <div className="bg-slate-900/50 border border-orange-500/30 p-8">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-orange-900/20 border border-orange-500/30 mr-4">
                <Shield className="w-8 h-8 text-orange-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Deployment Constraints</h3>
                <p className="text-orange-400 text-sm">Where can this run?</p>
              </div>
            </div>
            <p className="text-slate-400 mb-4">
              Ensures agents execute only within approved boundaries, configurations, and environments.
            </p>
            <ul className="space-y-2">
              <li className="text-slate-400 text-sm flex items-start">
                <span className="text-orange-500 mr-2 font-mono">»</span>
                Geographic restrictions
              </li>
              <li className="text-slate-400 text-sm flex items-start">
                <span className="text-orange-500 mr-2 font-mono">»</span>
                Network segmentation enforcement
              </li>
              <li className="text-slate-400 text-sm flex items-start">
                <span className="text-orange-500 mr-2 font-mono">»</span>
                Resource quota management
              </li>
              <li className="text-slate-400 text-sm flex items-start">
                <span className="text-orange-500 mr-2 font-mono">»</span>
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
    <section id="architecture" className="py-24 border-t border-orange-500/10 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center text-xs bg-orange-900/20 border border-orange-500/30 px-3 py-1.5 mb-4">
              <GitBranch size={14} className="mr-2" />
              OPEN CORE ARCHITECTURE
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              How Lattice Works
            </h2>
            <p className="text-slate-400 text-lg">
              Lattice operates as a control plane in the execution path, enforcing policies before actions execute.
            </p>
          </div>

          <div className="bg-slate-900/50 border border-orange-500/30 p-8 mb-12">
            <div className="font-mono text-sm">
              <div className="flex items-center justify-between mb-4 text-orange-400">
                <span>Agent Request</span>
                <ArrowRight size={16} />
                <span>Lattice Runtime</span>
                <ArrowRight size={16} />
                <span>Policy Evaluation</span>
                <ArrowRight size={16} />
                <span className="text-green-400">Allow</span>
                <span className="text-slate-600">/</span>
                <span className="text-red-400">Deny</span>
              </div>
              <div className="flex justify-center text-slate-600">
                <ArrowRight size={16} className="rotate-90" />
              </div>
              <div className="text-center text-blue-400">
                Audit Event Generated
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-slate-900/50 border border-orange-500/30 p-8">
              <h3 className="text-white font-bold mb-6 flex items-center">
                <CheckSquare className="w-5 h-5 text-orange-400 mr-2" />
                Open Source (Apache 2.0)
              </h3>
              <p className="text-slate-400 text-sm mb-4">
                The runtime enforcement layer is fully open source and auditable. This includes all components that evaluate and enforce policies.
              </p>
              <ul className="space-y-2">
                <li className="text-slate-400 text-sm flex items-start">
                  <span className="text-orange-500 mr-2 font-mono">✓</span>
                  Identity and authorization evaluation
                </li>
                <li className="text-slate-400 text-sm flex items-start">
                  <span className="text-orange-500 mr-2 font-mono">✓</span>
                  Policy decision engine
                </li>
                <li className="text-slate-400 text-sm flex items-start">
                  <span className="text-orange-500 mr-2 font-mono">✓</span>
                  Audit event generation
                </li>
                <li className="text-slate-400 text-sm flex items-start">
                  <span className="text-orange-500 mr-2 font-mono">✓</span>
                  Self-hosted deployment primitives
                </li>
              </ul>
              <div className="mt-4 p-3 bg-orange-900/10 border border-orange-500/20">
                <p className="text-xs text-orange-400">
                  <strong>Why open?</strong> Enterprises must inspect enforcement logic. Trust cannot depend on vendor opacity.
                </p>
              </div>
            </div>

            <div className="bg-slate-900/50 border border-amber-500/30 p-8">
              <h3 className="text-white font-bold mb-6 flex items-center">
                <Building className="w-5 h-5 text-amber-400 mr-2" />
                Commercial (Enterprise Edition)
              </h3>
              <p className="text-slate-400 text-sm mb-4">
                Enterprise control, governance, and administration features are commercially licensed for enterprise use.
              </p>
              <ul className="space-y-2">
                <li className="text-slate-400 text-sm flex items-start">
                  <span className="text-amber-500 mr-2 font-mono">✓</span>
                  Administrative control planes
                </li>
                <li className="text-slate-400 text-sm flex items-start">
                  <span className="text-amber-500 mr-2 font-mono">✓</span>
                  Policy lifecycle management
                </li>
                <li className="text-slate-400 text-sm flex items-start">
                  <span className="text-amber-500 mr-2 font-mono">✓</span>
                  Directory integrations (LDAP, SAML, OIDC)
                </li>
                <li className="text-slate-400 text-sm flex items-start">
                  <span className="text-amber-500 mr-2 font-mono">✓</span>
                  Compliance reporting and exports
                </li>
              </ul>
              <div className="mt-4 p-3 bg-amber-900/10 border border-amber-500/20">
                <p className="text-xs text-amber-400">
                  <strong>Why commercial?</strong> These components don&apos;t decide &quot;allow vs deny&quot;—they standardize operation at scale.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-slate-900/50 border border-orange-500/20 p-8">
            <h3 className="text-white font-bold mb-4">Getting Started</h3>
            <div className="bg-slate-950 border border-orange-500/30 p-4 font-mono text-sm">
              <div className="text-orange-400 mb-2"># Install Lattice Runtime (coming soon)</div>
              <div className="text-slate-400">$ curl -fsSL https://latticeruntime.com/install.sh | sh</div>
              <div className="text-slate-400 mt-4">$ lattice init</div>
              <div className="text-slate-400">$ lattice enforce --config ./policies.yml</div>
            </div>
            <p className="text-slate-400 text-sm mt-4">
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
    <section id="contact" className="py-24 border-t border-orange-500/10 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center text-xs bg-orange-900/20 border border-orange-500/30 px-3 py-1.5 mb-4">
            <Mail size={14} className="mr-2" />
            GET IN TOUCH
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join the Development
          </h2>
          <p className="text-slate-400 text-lg mb-12">
            Lattice is in active development. We welcome contributions, feedback, and early adopters.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <a
              href="https://github.com/latticeHQ/lattice-runtime"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-900/50 border border-orange-500/30 p-6 hover:border-orange-500/50 transition group"
            >
              <Github className="w-8 h-8 text-orange-400 mx-auto mb-3 group-hover:scale-110 transition" />
              <h3 className="text-white font-semibold mb-2">GitHub</h3>
              <p className="text-slate-400 text-sm">View source, report issues, contribute code</p>
            </a>

            <a
              href="mailto:hello@latticeruntime.com"
              className="bg-slate-900/50 border border-orange-500/30 p-6 hover:border-orange-500/50 transition group"
            >
              <Mail className="w-8 h-8 text-orange-400 mx-auto mb-3 group-hover:scale-110 transition" />
              <h3 className="text-white font-semibold mb-2">Email</h3>
              <p className="text-slate-400 text-sm">hello@latticeruntime.com</p>
            </a>

            <a
              href="mailto:security@latticeruntime.com"
              className="bg-slate-900/50 border border-orange-500/30 p-6 hover:border-orange-500/50 transition group"
            >
              <Shield className="w-8 h-8 text-orange-400 mx-auto mb-3 group-hover:scale-110 transition" />
              <h3 className="text-white font-semibold mb-2">Security</h3>
              <p className="text-slate-400 text-sm">Report vulnerabilities</p>
            </a>
          </div>

          <div className="bg-gradient-to-r from-orange-900/20 to-orange-800/20 border border-orange-500/30 p-8">
            <h3 className="text-white text-xl font-bold mb-3">Interested in Enterprise Edition?</h3>
            <p className="text-slate-400 mb-6">
              We&apos;re working with select early partners to shape the enterprise features. Get in touch to learn more.
            </p>
            <a
              href="mailto:enterprise@latticeruntime.com"
              className="inline-flex items-center px-6 py-3 bg-orange-600 text-white hover:bg-purple-700 transition font-semibold"
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
    <footer className="border-t border-orange-500/10 py-8 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <div className="w-6 h-6 bg-slate-950 border-2 border-orange-500/50 flex items-center justify-center">
              <Shield className="w-4 h-4 text-orange-500" />
            </div>
            <span className="text-white font-bold">Lattice Runtime</span>
          </div>

          <div className="flex items-center space-x-6 text-sm text-slate-400">
            <a href="https://github.com/latticeHQ/lattice-runtime" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition">
              GitHub
            </a>
            <a href="/docs" className="hover:text-orange-400 transition">
              Documentation
            </a>
            <a href="https://github.com/latticeHQ/lattice-runtime/blob/main/LICENSE" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition">
              Apache 2.0 License
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-orange-500/10 text-center text-xs text-slate-500">
          <p>© 2026 Lattice Runtime. Open source runtime enforcement for autonomous AI agents.</p>
        </div>
      </div>
    </footer>
  );
}
