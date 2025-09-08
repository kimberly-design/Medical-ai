import React from "react";
import { motion } from "framer-motion";
import {
  Stethoscope,
  Bot,
  HeartPulse,
  Users,
  FileText,
  AlertTriangle,
  Shield,
  Watch,
  Languages,
  FlaskConical,
  CreditCard,
  MessageSquare,
  PhoneCall,
  Lock,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

// Helper animation presets
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Section = ({ id, children, className = "" }) => (
  <section id={id} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>{children}</section>
);

const Feature = ({ Icon, title, desc }) => (
  <Card className="h-full rounded-2xl shadow-sm">
    <CardHeader className="space-y-2">
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-muted">
        <Icon className="w-6 h-6" />
      </div>
      <CardTitle className="text-lg">{title}</CardTitle>
      <CardDescription className="text-muted-foreground">{desc}</CardDescription>
    </CardHeader>
  </Card>
);

const Pill = ({ children }) => (
  <span className="px-3 py-1 rounded-full text-xs bg-primary/10 text-primary font-medium tracking-wide">
    {children}
  </span>
);

const WorkflowArrow = () => (
  <svg viewBox="0 0 200 60" className="w-full h-12">
    <defs>
      <marker id="arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
        <path d="M0,0 L0,6 L6,3 z" />
      </marker>
    </defs>
    <line x1="0" y1="30" x2="200" y2="30" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrow)" />
  </svg>
);

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20 text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-40 backdrop-blur bg-background/70 border-b">
        <Section className="flex items-center justify-between py-3">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-2xl grid place-items-center bg-primary/10">
              <HeartPulse className="w-5 h-5 text-primary" />
            </div>
            <span className="font-semibold tracking-tight">HealBridge AI</span>
            <Badge variant="secondary" className="ml-2">Beta</Badge>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#how" className="hover:text-foreground">How it works</a>
            <a href="#phases" className="hover:text-foreground">Phases</a>
            <a href="#addons" className="hover:text-foreground">Future add‑ons</a>
            <a href="#demo" className="hover:text-foreground">Live demo</a>
            <a href="#faq" className="hover:text-foreground">FAQ</a>
          </nav>
          <div className="flex items-center gap-2">
            <Button variant="ghost" className="hidden sm:inline-flex">Log in</Button>
            <Button className="rounded-2xl">Get Started</Button>
          </div>
        </Section>
      </header>

      {/* Hero */}
      <Section className="py-16 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div variants={fadeUp} initial="hidden" animate="show" className="space-y-6">
            <Pill>Smart AI triage • Real doctor care</Pill>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight">
              I’m building an AI chatbot that listens deeply and connects patients to the right doctor—automatically.
            </h1>
            <p className="text-lg text-muted-foreground">
              Two secure portals: one for patients, one for certified doctors. After a focused 1‑hour conversation, the bot compiles a clinical summary and routes the case to the best‑fit specialist.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button size="lg" className="rounded-2xl">Try Patient Mode</Button>
              <Button size="lg" variant="outline" className="rounded-2xl">Doctor Portal</Button>
            </div>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2"><Lock className="w-4 h-4" /> HIPAA‑style privacy</div>
              <div className="flex items-center gap-2"><Shield className="w-4 h-4" /> Encryption at rest & in transit</div>
            </div>
          </motion.div>
          <motion.div variants={fadeUp} initial="hidden" animate="show" className="lg:pl-8">
            <Card className="rounded-2xl shadow-xl border-muted">
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Bot className="w-5 h-5" /> AI Intake Preview</CardTitle>
                <CardDescription>How the 1‑hour conversation structures your case.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-2xl border p-4 space-y-3 bg-muted/30">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-muted grid place-items-center"><Bot className="w-5 h-5" /></div>
                    <div>
                      <p className="font-medium">AI:</p>
                      <p className="text-sm text-muted-foreground">Tell me about your main symptom. When did it start? Any triggers or relief?</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-primary/10 grid place-items-center"><Users className="w-5 h-5 text-primary" /></div>
                    <div>
                      <p className="font-medium">You:</p>
                      <p className="text-sm text-muted-foreground">Tight chest and short breath during evening walks for 2 weeks.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-muted grid place-items-center"><Bot className="w-5 h-5" /></div>
                    <div>
                      <p className="font-medium">AI:</p>
                      <p className="text-sm text-muted-foreground">Got it. I’ll assess risk factors, vitals from wearables, and suggest urgency. I may connect you to a cardiologist.</p>
                    </div>
                  </div>
                </div>
                <div className="grid sm:grid-cols-3 gap-3">
                  <div className="p-3 rounded-xl bg-muted/40 text-sm"><span className="font-medium">Triage:</span> Moderate</div>
                  <div className="p-3 rounded-xl bg-muted/40 text-sm"><span className="font-medium">Likely specialty:</span> Cardiology</div>
                  <div className="p-3 rounded-xl bg-muted/40 text-sm"><span className="font-medium">ETA to match:</span> ~1 hour talk</div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </Section>

      {/* How it works */}
      <Section id="how" className="py-16 sm:py-24">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <Pill>How it works</Pill>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">From conversation to care</h2>
            <p className="text-muted-foreground">A guided, clinically‑aware chat that becomes a structured report and a precise doctor match.</p>
          </div>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            <Feature Icon={MessageSquare} title="Guided intake" desc="The AI leads a 1‑hour conversation with smart follow‑ups and red‑flag checks." />
            <Feature Icon={FileText} title="Auto‑generated report" desc="Symptoms, history, probable causes, and urgency—ready for doctors." />
            <Feature Icon={PhoneCall} title="Specialist connect" desc="Routes the case to the right certified doctor with context attached." />
          </div>

          {/* Simple workflow diagram */}
          <div className="mt-12 grid gap-6">
            <div className="grid md:grid-cols-3 gap-6 items-center">
              <Card className="rounded-2xl">
                <CardHeader className="text-center">
                  <CardTitle className="flex items-center gap-2 justify-center"><Users className="w-5 h-5" /> Patient speaks</CardTitle>
                  <CardDescription>Free‑text + structured prompts</CardDescription>
                </CardHeader>
              </Card>
              <WorkflowArrow />
              <Card className="rounded-2xl">
                <CardHeader className="text-center">
                  <CardTitle className="flex items-center gap-2 justify-center"><Bot className="w-5 h-5" /> AI triage</CardTitle>
                  <CardDescription>Clinical summary + risk level</CardDescription>
                </CardHeader>
              </Card>
            </div>
            <div className="grid md:grid-cols-3 gap-6 items-center">
              <Card className="rounded-2xl">
                <CardHeader className="text-center">
                  <CardTitle className="flex items-center gap-2 justify-center"><Stethoscope className="w-5 h-5" /> Doctor match</CardTitle>
                  <CardDescription>Specialty routing + notify</CardDescription>
                </CardHeader>
              </Card>
              <WorkflowArrow />
              <Card className="rounded-2xl">
                <CardHeader className="text-center">
                  <CardTitle className="flex items-center gap-2 justify-center"><HeartPulse className="w-5 h-5" /> Consultation</CardTitle>
                  <CardDescription>Chat/video + e‑Rx + plan</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </motion.div>
      </Section>

      {/* Phases */}
      <Section id="phases" className="py-16 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <Tabs defaultValue="patient" className="w-full">
            <TabsList className="rounded-2xl">
              <TabsTrigger value="patient" className="rounded-xl">Patient Phase</TabsTrigger>
              <TabsTrigger value="doctor" className="rounded-xl">Doctor Phase</TabsTrigger>
            </TabsList>
            <TabsContent value="patient" className="mt-6">
              <Card className="rounded-2xl">
                <CardContent className="p-6 space-y-4">
                  <ul className="grid sm:grid-cols-2 gap-3 text-sm">
                    <li className="flex items-start gap-2"><Check className="w-4 h-4 mt-0.5" /> Sign up, create health profile (age, allergies, meds)</li>
                    <li className="flex items-start gap-2"><Check className="w-4 h-4 mt-0.5" /> 1‑hour guided chat with smart follow‑ups</li>
                    <li className="flex items-start gap-2"><Check className="w-4 h-4 mt-0.5" /> Risk level & urgency detection</li>
                    <li className="flex items-start gap-2"><Check className="w-4 h-4 mt-0.5" /> AI report: symptoms, history, probable causes</li>
                    <li className="flex items-start gap-2"><Check className="w-4 h-4 mt-0.5" /> Auto‑match to specialist</li>
                    <li className="flex items-start gap-2"><Check className="w-4 h-4 mt-0.5" /> Chat/video consult + e‑Rx</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="doctor" className="mt-6">
              <Card className="rounded-2xl">
                <CardContent className="p-6 space-y-4">
                  <ul className="grid sm:grid-cols-2 gap-3 text-sm">
                    <li className="flex items-start gap-2"><Check className="w-4 h-4 mt-0.5" /> Verified license onboarding</li>
                    <li className="flex items-start gap-2"><Check className="w-4 h-4 mt-0.5" /> AI‑prepared case summaries</li>
                    <li className="flex items-start gap-2"><Check className="w-4 h-4 mt-0.5" /> Specialty‑based routing & filters</li>
                    <li className="flex items-start gap-2"><Check className="w-4 h-4 mt-0.5" /> Chat/video + e‑prescription tools</li>
                    <li className="flex items-start gap-2"><Check className="w-4 h-4 mt-0.5" /> Outcome feedback to improve AI</li>
                    <li className="flex items-start gap-2"><Check className="w-4 h-4 mt-0.5" /> Earnings dashboard & payouts</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle>Security & Compliance</CardTitle>
              <CardDescription>Because trust is the first feature.</CardDescription>
            </CardHeader>
            <CardContent className="grid sm:grid-cols-2 gap-4">
              <Feature Icon={Shield} title="End‑to‑end encryption" desc="Data encrypted in transit & at rest." />
              <Feature Icon={Lock} title="Role‑based access" desc="Strict separation of patient/doctor data." />
              <Feature Icon={AlertTriangle} title="Red‑flag detection" desc="Escalates emergencies instantly." />
              <Feature Icon={Languages} title="Multi‑language" desc="Serve users in their native language." />
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Future Add‑ons */}
      <Section id="addons" className="py-16 sm:py-24">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <Pill>Future add‑ons</Pill>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">What I’ll build next</h2>
          <p className="text-muted-foreground">Extending the platform into a complete health ecosystem.</p>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <Feature Icon={AlertTriangle} title="Emergency alerts" desc="Detect stroke/MI patterns and notify emergency services & contacts." />
          <Feature Icon={FileText} title="E‑prescriptions" desc="Doctors issue secure digital prescriptions inside the app." />
          <Feature Icon={FlaskConical} title="Lab integration" desc="Book tests; results auto‑attach to the patient record." />
          <Feature Icon={CreditCard} title="Payments & insurance" desc="In‑app consultations, cashless claims & invoices." />
          <Feature Icon={Watch} title="Wearable data" desc="Pull heart rate, SpO₂, sleep, activity for better triage." />
          <Feature Icon={Languages} title="24/7 multilingual" desc="Support users across regions and literacy levels." />
        </div>
      </Section>

      {/* Demo widgets */}
      <Section id="demo" className="py-16 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><MessageSquare className="w-5 h-5" /> Patient Chat (Mock)</CardTitle>
              <CardDescription>Try a quick intake to see how it feels.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-3">
                <div className="grid gap-2">
                  <label className="text-sm">Describe your main symptom</label>
                  <input className="w-full rounded-xl border p-3 bg-background" placeholder="e.g., Headache behind the eyes for 3 days" />
                </div>
                <div className="grid gap-2">
                  <label className="text-sm">When did it start?</label>
                  <input className="w-full rounded-xl border p-3 bg-background" placeholder="e.g., Since Friday evening" />
                </div>
                <div className="grid gap-2">
                  <label className="text-sm">Relevant history / meds</label>
                  <input className="w-full rounded-xl border p-3 bg-background" placeholder="e.g., Migraine history, ibuprofen helps" />
                </div>
                <div className="flex flex-wrap gap-3 pt-2">
                  <Badge variant="secondary">Red‑flag checks</Badge>
                  <Badge variant="secondary">Probable causes</Badge>
                  <Badge variant="secondary">Urgency level</Badge>
                </div>
                <div className="pt-2 flex gap-3">
                  <Button type="button" className="rounded-2xl">Run AI Triage</Button>
                  <Button type="button" variant="outline" className="rounded-2xl">Download Report</Button>
                </div>
              </form>
            </CardContent>
          </Card>

          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><Stethoscope className="w-5 h-5" /> Doctor Dashboard (Mock)</CardTitle>
              <CardDescription>What doctors see once a case is matched.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-xl border p-4">
                <div className="flex items-center justify-between">
                  <div className="font-medium">Case #A1298 • Chest tightness</div>
                  <Badge>Cardiology</Badge>
                </div>
                <p className="text-sm text-muted-foreground mt-1">Male, 42 • onset 2 weeks • exertional dyspnea</p>
                <div className="grid sm:grid-cols-3 gap-2 mt-3 text-sm">
                  <div className="p-2 rounded-lg bg-muted/40"><span className="font-medium">Triage:</span> Moderate</div>
                  <div className="p-2 rounded-lg bg-muted/40"><span className="font-medium">Priority:</span> 2 hrs</div>
                  <div className="p-2 rounded-lg bg-muted/40"><span className="font-medium">Vitals:</span> HR 92, SpO₂ 97%</div>
                </div>
                <div className="flex gap-2 mt-3">
                  <Button className="rounded-xl">Open Case</Button>
                  <Button variant="outline" className="rounded-xl">Video Call</Button>
                </div>
              </div>
              <div className="rounded-xl border p-4">
                <div className="flex items-center justify-between">
                  <div className="font-medium">Case #B2041 • Skin rash</div>
                  <Badge>Dermatology</Badge>
                </div>
                <p className="text-sm text-muted-foreground mt-1">Female, 28 • onset 5 days • itchy maculopapular</p>
                <div className="grid sm:grid-cols-3 gap-2 mt-3 text-sm">
                  <div className="p-2 rounded-lg bg-muted/40"><span className="font-medium">Triage:</span> Low</div>
                  <div className="p-2 rounded-lg bg-muted/40"><span className="font-medium">Priority:</span> 24 hrs</div>
                  <div className="p-2 rounded-lg bg-muted/40"><span className="font-medium">Photos:</span> 3 attached</div>
                </div>
                <div className="flex gap-2 mt-3">
                  <Button className="rounded-xl">Open Case</Button>
                  <Button variant="outline" className="rounded-xl">Chat</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* FAQ */}
      <Section id="faq" className="py-16 sm:py-24">
        <div className="max-w-3xl mx-auto">
          <div className="text-center space-y-3">
            <Pill>FAQ</Pill>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Quick answers</h2>
          </div>
          <div className="mt-8 grid gap-4">
            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle>Is this a medical device or advice?</CardTitle>
                <CardDescription>
                  The AI provides informational triage only and connects you to licensed doctors for care. In emergencies, it escalates immediately.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle>How do doctors get verified?</CardTitle>
                <CardDescription>
                  We verify registration numbers and certifications during onboarding and conduct periodic re‑checks.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle>What about privacy?</CardTitle>
                <CardDescription>
                  Data is encrypted at rest and in transit. We use role‑based access and log every access for audit.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t">
        <Section className="py-10 flex flex-col sm:flex-row gap-6 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-2xl grid place-items-center bg-primary/10">
              <HeartPulse className="w-5 h-5 text-primary" />
            </div>
            <span className="font-semibold tracking-tight">HealBridge AI</span>
          </div>
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} HealBridge AI — Built with ❤️ for smarter care.
          </div>
        </Section>
      </footer>
    </div>
  );
}
