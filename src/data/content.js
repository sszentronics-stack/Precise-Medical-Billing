import {
  DollarSign,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Building2,
  MapPin,
  Stethoscope,
  FileText,
  Send,
  Users,
  BadgeCheck,
  Activity,
  Bone,
  Brain,
  HeartPulse,
  Baby,
  Search,
  Layers,
  TrendingUp,
} from "lucide-react";

export const CORE_STATS = [
  { value: "$620M+", label: "Collected for clients annually" },
  { value: "98.4%", label: "Clean claim rate, first pass" },
  { value: "11 days", label: "Average days in A/R" },
];

export const STAT_BAND = [
  { value: 620, prefix: "$", suffix: "M+", label: "Collected annually", icon: DollarSign },
  { value: 98.4, suffix: "%", label: "Clean claim rate", icon: CheckCircle2 },
  { value: 11, suffix: " days", label: "Avg. days in A/R", icon: Clock },
  { value: 1.6, suffix: "%", label: "Denial rate", icon: ShieldCheck },
  { value: 340, suffix: "+", label: "Provider clients", icon: Building2 },
  { value: 32, suffix: "", label: "States served", icon: MapPin },
];

export const SERVICES = [
  {
    slug: "medical-coding",
    icon: FileText,
    title: "Medical Coding",
    shortDesc: "Certified coders assign accurate ICD-10 and CPT codes for every encounter.",
    tagline: "Coding accuracy that survives a payer audit.",
    heroStat: { value: "99.1%", label: "Coding accuracy rate across client charts" },
    benefits: [
      { title: "Specialty-matched coders", desc: "Coders certified in your specialty's code sets, modifiers, and bundling rules." },
      { title: "Same-day turnaround", desc: "Charts are coded the day they're closed, not batched at the end of the week." },
      { title: "Documentation feedback", desc: "Gaps in provider documentation are flagged back to your team immediately." },
      { title: "Audit-ready records", desc: "Every code carries a documented rationale, ready for payer or compliance review." },
    ],
    faqs: [
      { q: "Who codes our charts?", a: "AAPC or AHIMA-certified coders assigned specifically to your specialty — not a rotating general pool." },
      { q: "How fast do you turn around coding?", a: "Same business day for 92% of charts, with same-week completion guaranteed for the remainder." },
      { q: "What happens if documentation is incomplete?", a: "We flag it back to your clinical team within 24 hours with the specific gap, so nothing sits waiting." },
    ],
  },
  {
    slug: "claims-submission",
    icon: Send,
    title: "Claims Submission & Scrubbing",
    shortDesc: "Every claim is scrubbed against payer edits and filed within 24 hours.",
    tagline: "Clean claims, filed before the ink dries.",
    heroStat: { value: "24 hrs", label: "From charge capture to claim submission" },
    benefits: [
      { title: "Automated payer-edit checks", desc: "Claims are checked against thousands of payer-specific edits before they're filed." },
      { title: "Electronic filing", desc: "Direct connections to every major clearinghouse — no manual re-keying." },
      { title: "Real-time tracking", desc: "Every claim's status is visible, tied back to a claim ID you can search." },
      { title: "First-pass focus", desc: "We optimize for getting it right the first time, not for fast resubmission." },
    ],
    faqs: [
      { q: "How quickly are claims filed after a visit?", a: "Within 24 hours of charge capture for 95% of claims." },
      { q: "What's your first-pass clean claim rate?", a: "98.4% across all client practices, measured monthly." },
      { q: "Can we see claim status ourselves?", a: "Yes — every claim is visible in your dashboard by claim ID, payer, and status in real time." },
    ],
  },
  {
    slug: "denial-management",
    icon: ShieldCheck,
    title: "Denial Management & Appeals",
    shortDesc: "Denials are triaged same-week, corrected, and appealed — not written off.",
    tagline: "We don't let denials become write-offs.",
    heroStat: { value: "71%", label: "Of appealed denials overturned in client accounts" },
    benefits: [
      { title: "Same-week triage", desc: "Denials are sorted by dollar value and recoverability within days of arriving." },
      { title: "Root-cause tracking", desc: "We track why a denial happened so the same mistake doesn't repeat." },
      { title: "Documented appeals", desc: "Every appeal is filed with supporting clinical documentation attached." },
      { title: "Transparent reporting", desc: "You see denial trends by payer and reason code, not just a summary total." },
    ],
    faqs: [
      { q: "How quickly are denials worked?", a: "Triaged within 5 business days of receipt, prioritized by dollar value." },
      { q: "What's your appeal success rate?", a: "71% of appealed denials are overturned across our client base." },
      { q: "Will we know why claims are being denied?", a: "Yes — you'll get a monthly breakdown of denial reasons by payer so patterns are visible, not hidden." },
    ],
  },
  {
    slug: "payment-posting",
    icon: BadgeCheck,
    title: "Payment Posting & Reconciliation",
    shortDesc: "ERA and EOB payments are posted and reconciled daily.",
    tagline: "Your ledger, reconciled every single day.",
    heroStat: { value: "24 hrs", label: "Payment posting turnaround from receipt" },
    benefits: [
      { title: "Daily posting", desc: "Electronic and paper remittances are posted the day they arrive." },
      { title: "Contractual review", desc: "Adjustments are checked against your actual fee schedules, not assumed correct." },
      { title: "Bank-tied reconciliation", desc: "Monthly reconciliation reports are tied directly to your bank deposits." },
      { title: "Variance flags", desc: "Underpayments against contracted rates are flagged for follow-up automatically." },
    ],
    faqs: [
      { q: "How fast are payments posted?", a: "Within 24 hours of receipt for both electronic and paper remittances." },
      { q: "Do you catch underpayments?", a: "Yes — every payment is checked against your contracted fee schedule, and variances are flagged." },
      { q: "How does reconciliation work with our bank?", a: "Monthly reports are tied line-by-line to your actual deposits, so nothing is estimated." },
    ],
  },
  {
    slug: "patient-billing",
    icon: Users,
    title: "Patient Statements & Support",
    shortDesc: "Clear, itemized statements and a real phone line for patient questions.",
    tagline: "Billing your patients can actually understand.",
    heroStat: { value: "31%", label: "Average reduction in patient billing calls to your office" },
    benefits: [
      { title: "Plain-language statements", desc: "Itemized statements written to be understood, not just technically accurate." },
      { title: "Staffed support line", desc: "A real phone line for patient billing questions — not a voicemail box." },
      { title: "Flexible payment plans", desc: "Payment plans configured on your practice's own terms and thresholds." },
      { title: "Multiple delivery options", desc: "Statements sent by mail, email, or both, based on patient preference." },
    ],
    faqs: [
      { q: "Do patients call us or you?", a: "Billing questions route to our staffed support line, reducing calls to your front desk by an average of 31%." },
      { q: "Can we set our own payment plan rules?", a: "Yes — thresholds, plan lengths, and terms are configured to match your practice's policies." },
      { q: "How are statements delivered?", a: "By mail, email, or both — patient preference is tracked and honored automatically." },
    ],
  },
  {
    slug: "credentialing",
    icon: BadgeCheck,
    title: "Credentialing & Enrollment",
    shortDesc: "Payer enrollment and re-credentialing so you're never dropped from a network.",
    tagline: "Never lose a network by accident again.",
    heroStat: { value: "45 days", label: "Average enrollment turnaround, commercial payers" },
    benefits: [
      { title: "New provider enrollment", desc: "Applications managed across commercial and government payers alike." },
      { title: "Proactive re-credentialing", desc: "Renewals tracked and filed well ahead of expiration dates." },
      { title: "CAQH maintenance", desc: "Your CAQH profile is kept current without you having to remember it." },
      { title: "Status visibility", desc: "Enrollment status for every payer is visible in your dashboard." },
    ],
    faqs: [
      { q: "How long does enrollment take?", a: "Roughly 45 days on average for commercial payers, longer for some government programs." },
      { q: "Will we get dropped during re-credentialing?", a: "No — renewals are filed well ahead of expiration, tracked against every payer's specific deadline." },
      { q: "Who maintains our CAQH profile?", a: "We do, continuously, so it's never the reason an enrollment stalls." },
    ],
  },
];

export const SPECIALTIES = [
  {
    slug: "family-medicine",
    icon: Stethoscope,
    title: "Family & Internal Medicine",
    painPoint: "High patient volume means small coding errors compound fast across thousands of visits.",
    tagline: "Built for the volume, tuned for the codes.",
    heroStat: { value: "98.7%", label: "Clean claim rate for family medicine clients" },
    benefits: [
      { title: "E/M coding precision", desc: "Coders trained specifically on evaluation and management code selection." },
      { title: "Preventive care billing", desc: "Annual wellness visits and preventive screenings billed to avoid common denials." },
      { title: "High-volume throughput", desc: "Built to handle hundreds of daily encounters without a backlog forming." },
      { title: "Medicare compliance", desc: "Wellness visit billing kept current with annual Medicare rule changes." },
    ],
    faqs: [
      { q: "Can you keep up with our visit volume?", a: "Yes — our workflow is built for practices seeing 150+ daily encounters without claims backing up." },
      { q: "Do you handle Medicare wellness visit rules?", a: "Yes, including annual updates to G-codes and wellness visit billing requirements." },
    ],
  },
  {
    slug: "orthopedics",
    icon: Bone,
    title: "Orthopedics",
    painPoint: "Multi-stage surgical billing and DME claims create more ways for a claim to go wrong.",
    tagline: "Surgical billing without the surgical headache.",
    heroStat: { value: "$1.8M", label: "Average annual recovery increase for orthopedic clients" },
    benefits: [
      { title: "Surgical package billing", desc: "Global periods and staged procedures billed correctly from the start." },
      { title: "DME claim handling", desc: "Durable medical equipment claims filed with the documentation payers require." },
      { title: "Modifier accuracy", desc: "Complex modifier combinations reviewed by coders who work orthopedics daily." },
      { title: "Pre-authorization tracking", desc: "Surgical pre-certs tracked so procedures aren't delayed by paperwork." },
    ],
    faqs: [
      { q: "Do you understand global surgical periods?", a: "Yes — staged and related procedures within a global period are billed and tracked correctly." },
      { q: "How do you handle DME billing?", a: "With the specific documentation and modifiers each DME payer requires, tracked separately from the surgical claim." },
    ],
  },
  {
    slug: "dermatology",
    icon: Activity,
    title: "Dermatology",
    painPoint: "Distinguishing medical from cosmetic procedures is where most dermatology claims get denied.",
    tagline: "Medical or cosmetic — coded correctly, every time.",
    heroStat: { value: "96.9%", label: "Clean claim rate for dermatology procedure billing" },
    benefits: [
      { title: "Procedure-level coding", desc: "Biopsies, excisions, and destructions coded to the specific technique used." },
      { title: "Medical vs. cosmetic clarity", desc: "Documentation reviewed to support medical necessity where it applies." },
      { title: "Pathology coordination", desc: "Coding aligned with pathology results once they're finalized." },
      { title: "Multiple-procedure billing", desc: "Same-visit procedure bundling handled to avoid underpayment." },
    ],
    faqs: [
      { q: "How do you handle medical vs. cosmetic distinctions?", a: "We review documentation for medical necessity before filing, flagging anything that needs a stronger note first." },
      { q: "Do you wait for pathology results?", a: "Yes, when the final code depends on pathology, we hold and code once results are in." },
    ],
  },
  {
    slug: "behavioral-health",
    icon: Brain,
    title: "Behavioral Health",
    painPoint: "Time-based coding and telehealth rules shift often enough to trip up in-house billing.",
    tagline: "Telehealth rules change. Your revenue shouldn't.",
    heroStat: { value: "94.8%", label: "Clean claim rate for behavioral health telehealth visits" },
    benefits: [
      { title: "Time-based coding", desc: "Session length coded accurately against current payer time thresholds." },
      { title: "Telehealth compliance", desc: "Billing kept current with state-by-state telehealth parity rules." },
      { title: "Prior-auth tracking", desc: "Authorization status tracked per patient, per payer, per session count." },
      { title: "Sliding-scale support", desc: "Patient billing configured to support sliding-scale and grant-funded care." },
    ],
    faqs: [
      { q: "Do you track telehealth parity by state?", a: "Yes — rules are monitored per state and applied to billing as they change." },
      { q: "Can you track session-count authorizations?", a: "Yes, remaining authorized sessions are tracked per patient so care isn't billed past what's approved." },
    ],
  },
  {
    slug: "cardiology",
    icon: HeartPulse,
    title: "Cardiology",
    painPoint: "Diagnostic test bundling and device billing require payer pre-certification most teams miss.",
    tagline: "Complex tests, correctly bundled.",
    heroStat: { value: "$2.4M", label: "Average annual recovery increase for cardiology clients" },
    benefits: [
      { title: "Diagnostic bundling", desc: "Stress tests, echoes, and related studies billed with correct bundling rules." },
      { title: "Device billing", desc: "Implantable device claims filed with the documentation payers require." },
      { title: "Pre-certification tracking", desc: "Procedures requiring pre-cert are flagged before the appointment, not after." },
      { title: "Interpretation billing", desc: "Professional and technical component splits handled correctly for shared equipment." },
    ],
    faqs: [
      { q: "Do you handle device billing?", a: "Yes, including the specific documentation payers require for implantable devices." },
      { q: "How do you avoid pre-cert denials?", a: "Procedures requiring authorization are flagged against the schedule before the visit happens." },
    ],
  },
  {
    slug: "pediatrics",
    icon: Baby,
    title: "Pediatrics",
    painPoint: "Immunization billing and shifting Medicaid/CHIP rules create constant small denials.",
    tagline: "Every shot, every visit, billed correctly.",
    heroStat: { value: "97.5%", label: "Clean claim rate for pediatric immunization billing" },
    benefits: [
      { title: "Immunization billing", desc: "Vaccine and administration codes billed together correctly, every time." },
      { title: "Well-child scheduling", desc: "Visit billing aligned to age-based well-child visit schedules." },
      { title: "Medicaid & CHIP handling", desc: "State-specific Medicaid and CHIP claim rules applied automatically." },
      { title: "VFC program support", desc: "Vaccines for Children program billing handled correctly alongside private claims." },
    ],
    faqs: [
      { q: "Do you handle VFC program billing?", a: "Yes — Vaccines for Children claims are billed correctly alongside your standard commercial claims." },
      { q: "Can you keep up with state Medicaid rule changes?", a: "Yes, state-specific Medicaid and CHIP rules are tracked and applied as they change." },
    ],
  },
];

export const LOCATIONS = [
  { slug: "texas", title: "Texas", abbr: "TX", stat: "68 practices served", heroStat: { value: "68", label: "Practices served across Texas" } },
  { slug: "california", title: "California", abbr: "CA", stat: "54 practices served", heroStat: { value: "54", label: "Practices served across California" } },
  { slug: "florida", title: "Florida", abbr: "FL", stat: "41 practices served", heroStat: { value: "41", label: "Practices served across Florida" } },
  { slug: "new-york", title: "New York", abbr: "NY", stat: "37 practices served", heroStat: { value: "37", label: "Practices served across New York" } },
  { slug: "illinois", title: "Illinois", abbr: "IL", stat: "29 practices served", heroStat: { value: "29", label: "Practices served across Illinois" } },
  { slug: "georgia", title: "Georgia", abbr: "GA", stat: "26 practices served", heroStat: { value: "26", label: "Practices served across Georgia" } },
  { slug: "ohio", title: "Ohio", abbr: "OH", stat: "22 practices served", heroStat: { value: "22", label: "Practices served across Ohio" } },
  { slug: "arizona", title: "Arizona", abbr: "AZ", stat: "19 practices served", heroStat: { value: "19", label: "Practices served across Arizona" } },
].map((loc) => ({
  ...loc,
  tagline: `Revenue cycle management for independent practices in ${loc.title}.`,
  benefits: [
    { title: "Local payer expertise", desc: `Billing teams familiar with the commercial and Medicaid payers most common in ${loc.title}.` },
    { title: "State-specific compliance", desc: "Billing kept current with state-level telehealth, Medicaid, and reporting rules." },
    { title: "Fast onboarding", desc: "New practices in the region are typically fully transitioned within two to three weeks." },
    { title: "Dedicated account team", desc: "A named biller and coder assigned to your account, not a rotating pool." },
  ],
  faqs: [
    { q: `Do you have experience with payers in ${loc.title}?`, a: `Yes — we bill for practices across ${loc.title} regularly and know the common commercial and Medicaid payers in the state.` },
    { q: "How long does onboarding take?", a: "Most practices are fully transitioned within two to three weeks, including data migration and payer notifications." },
  ],
}));

export const TESTIMONIALS = [
  { name: "Dr. M. Alvarez", practice: "Riverbend Family Medicine", specialty: "Family Medicine", quote: "Days in A/R went from 51 to 14 in one quarter. I stopped thinking about billing every day." },
  { name: "K. Chen, Practice Manager", practice: "Sunridge Orthopedic Associates", specialty: "Orthopedics", quote: "They caught a coding pattern that cost us underpayments for two years. Paid for itself in a month." },
  { name: "Dr. R. Patel", practice: "Clearview Dermatology Partners", specialty: "Dermatology", quote: "The reporting alone was worth switching. I can see exactly where every claim is, every week." },
  { name: "S. Whitfield, Office Admin", practice: "Lakeshore Behavioral Health", specialty: "Behavioral Health", quote: "Telehealth billing used to be a mess of denials. That's just gone now." },
  { name: "Dr. J. Okafor", practice: "Heartland Cardiology Group", specialty: "Cardiology", quote: "Our denial rate on diagnostic tests dropped by more than half within two months." },
  { name: "T. Reyes, Billing Coordinator", practice: "Little Oaks Pediatrics", specialty: "Pediatrics", quote: "Immunization billing errors that used to eat an afternoon a week are just handled now." },
  { name: "Dr. L. Nguyen", practice: "Westgate Family Practice", specialty: "Family Medicine", quote: "We see 200 patients a day and claims still go out clean. That's the part that impressed me." },
  { name: "M. Douglas, Practice Owner", practice: "Cascade Orthopedic & Sports Medicine", specialty: "Orthopedics", quote: "Credentialing alone used to take us months. They had us enrolled with two new payers in six weeks." },
  { name: "Dr. A. Brooks", practice: "Foothill Dermatology", specialty: "Dermatology", quote: "Patient billing calls to our front desk dropped noticeably within the first month." },
  { name: "P. Simmons, Office Manager", practice: "Willow Creek Behavioral Health", specialty: "Behavioral Health", quote: "Prior-auth tracking alone justified the switch. Nothing falls through anymore." },
];

const unsplash = (id) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=80`;

export const BLOG_POSTS = [
  {
    slug: "five-denial-reasons-costing-practices-2026",
    tag: "Denial Management",
    title: "The five denial reasons costing independent practices the most in 2026",
    excerpt: "A breakdown of the most common — and most avoidable — denial codes we see across client accounts.",
    image: unsplash("1758691462954-e6fa5005474b"),
    date: "2026-01-14",
    readTime: "6 min read",
    body: [
      { type: "p", text: "Denials that never get worked don't disappear — they quietly become write-offs. Across the practices we onboard, the same five reasons account for the overwhelming majority of preventable denial dollars, and none of them require a policy change to fix." },
      {
        type: "list",
        items: [
          { title: "Missing or invalid prior authorization", desc: "The single largest category by dollar value. Most of these aren't missing entirely — they were obtained for the wrong CPT code, the wrong date range, or expired before the claim was filed." },
          { title: "Eligibility not verified within 24 hours of the visit", desc: "Coverage that was active at scheduling can lapse by the appointment date. Practices that verify at booking and again the morning of the visit catch this before it becomes a denial." },
          { title: "Duplicate claim submissions", desc: "Usually caused by a claim resubmitted before the original finished adjudicating. It reads as an easy fix, but payers flag the account, which slows down every claim behind it." },
          { title: "Modifier errors on bundled procedures", desc: "Modifier 25 and 59 are the two most misapplied modifiers we see, almost always on encounters billed by staff outside a coder's direct review." },
          { title: "Timely filing missed after a payer or clearinghouse switch", desc: "Filing deadlines reset differently across payers. A clearinghouse migration that adds even a few days of processing lag is enough to push claims past the window." },
        ],
      },
      { type: "p", text: "None of these require a system overhaul — they require someone checking for them before the claim goes out, not after it comes back." },
    ],
  },
  {
    slug: "state-telehealth-billing-changes",
    tag: "Telehealth",
    title: "State-by-state telehealth billing changes practices need to know about",
    excerpt: "Parity rules are shifting again this year. Here's what's changed and what to check in your own claims.",
    image: unsplash("1758691462743-f9fc9e430d39"),
    date: "2026-02-03",
    readTime: "5 min read",
    body: [
      { type: "p", text: "Telehealth parity rules — which govern whether payers reimburse virtual visits at the same rate as in-person care — are shifting again this year. Practices billing telehealth without checking their state's current rules are the ones most likely to see clean claims turn into denials mid-quarter." },
      {
        type: "list",
        items: [
          { title: "Place of Service code 10 vs. 02", desc: "POS 10 (patient's home) now reimburses differently than POS 02 (other location) in a growing number of states. Defaulting to whichever code was used last year is one of the fastest ways to trigger a rate reduction." },
          { title: "Audio-only parity is not guaranteed", desc: "Several states that paid audio-only visits at full parity during the emergency period have not made that permanent. Confirm audio-only coverage per payer, not per state blanket assumption." },
          { title: "Modifier 95 requirements vary by payer", desc: "Some commercial payers still require modifier 95 on every synchronous telehealth claim; others have dropped it entirely. Applying it inconsistently is a common cause of otherwise-clean claims bouncing." },
          { title: "Originating site restrictions are back for some payers", desc: "A handful of payers have reintroduced originating-site requirements that were waived in prior years, meaning certain specialties can no longer bill telehealth from any location." },
        ],
      },
      { type: "p", text: "The practices staying ahead of this aren't tracking federal policy — they're tracking payer-level bulletins, because that's where the actual reimbursement rules live." },
    ],
  },
  {
    slug: "re-credentialing-delays-revenue-killer",
    tag: "Credentialing",
    title: "Why re-credentialing delays are the quiet revenue killer nobody tracks",
    excerpt: "A dropped network isn't always dramatic — sometimes it's just a missed renewal date.",
    image: unsplash("1671376354112-6de3d08b97af"),
    date: "2026-02-19",
    readTime: "5 min read",
    body: [
      { type: "p", text: "A denied claim gets attention immediately. A credentialing lapse doesn't — it just shows up months later as a payer that quietly stopped paying, with claims denied for a provider who, on paper, was never in-network to begin with." },
      {
        type: "list",
        items: [
          { title: "Re-attestation windows are shorter than they used to be", desc: "Several major payers moved from 3-year to 2-year re-attestation cycles without much notice. Practices tracking the old timeline miss the new deadline by default." },
          { title: "One missed CAQH update can cascade across payers", desc: "Most payers pull directly from a shared CAQH profile. An expired license or malpractice certificate in that one profile can trigger a network drop across every payer that references it." },
          { title: "New associates billing before enrollment finalizes", desc: "Claims submitted under a supervising provider's NPI during the enrollment gap are often billable, but only if that fallback is set up in advance — not discovered after the first denial." },
          { title: "Location changes require separate enrollment", desc: "Adding a second office location isn't an address update — most payers treat it as a new enrollment requiring separate confirmation, and treat claims from an unlisted address as out-of-network." },
        ],
      },
      { type: "p", text: "Credentialing rarely causes a dramatic event. It causes a slow leak — and slow leaks are the ones that go unnoticed until someone finally reconciles a full quarter of A/R." },
    ],
  },
  {
    slug: "ar-benchmarks-by-specialty",
    tag: "Benchmarks",
    title: "What 'good' actually looks like: A/R benchmarks by specialty",
    excerpt: "Days in A/R and clean claim rate benchmarks vary more by specialty than most practices assume.",
    image: unsplash("1551288049-bebda4e38f71"),
    date: "2026-03-05",
    readTime: "4 min read",
    body: [
      { type: "p", text: "Every practice wants to know if their numbers are \"good.\" The honest answer is that clean-claim rate and days in A/R vary enough by specialty that a single industry-wide target is close to useless." },
      {
        type: "list",
        items: [
          { title: "Primary care", desc: "Typical clean-claim rate: 92–95%. Typical A/R: 28–35 days. Lower per-claim dollar value keeps the tolerance for denials wider than in procedure-heavy specialties." },
          { title: "Orthopedics", desc: "Typical clean-claim rate: 88–92%. Typical A/R: 35–45 days. Higher-dollar procedures and frequent prior authorization requirements push both numbers up." },
          { title: "Behavioral health", desc: "Typical clean-claim rate: 90–94%. Typical A/R: 30–40 days. Session-limit and authorization renewals are the most common source of the gap." },
          { title: "Dermatology", desc: "Typical clean-claim rate: 90–93%. Typical A/R: 25–32 days. Fast turnaround is common, but modifier errors on procedure-heavy visits are a persistent drag." },
        ],
      },
      { type: "p", text: "Our own numbers — 98.4% clean claims and 11 days in A/R — sit meaningfully ahead of every specialty benchmark above, which is the actual point of tracking these by specialty instead of by industry average." },
    ],
  },
];

export const INTEGRATIONS = [
  "MediSync EHR", "CarePath PM", "ClaimFlow", "HealthLedger", "PractiCore",
  "VitalChart", "BillWorks", "ClinicOS", "RCM Bridge", "ChartLink",
  "PayerConnect", "MedOffice Suite",
];

export const CLIENT_LOGOS = [
  "Riverbend Family Medicine", "Sunridge Orthopedic", "Clearview Dermatology",
  "Lakeshore Behavioral Health", "Heartland Cardiology", "Little Oaks Pediatrics",
  "Westgate Family Practice", "Cascade Orthopedic Group",
];

export const HOME_FAQS = [
  { q: "How long does it take to switch from our current billing setup?", a: "Most practices are fully transitioned within two to three weeks. We handle data migration, payer notifications, and staff onboarding so claims never stop moving." },
  { q: "What exact percentage do you charge, and does it change with volume?", a: "We charge a percentage of collections, typically between 4% and 7% depending on specialty and monthly claim volume — higher volume generally means a lower rate." },
  { q: "How fast will we see our first improvement in clean-claim rate?", a: "Most practices see a measurable improvement in clean-claim rate within the first 30 days, with full stabilization by day 60." },
  { q: "What happens to claims already in progress when we switch?", a: "We audit your existing A/R on day one and take over follow-up on open claims immediately, prioritizing anything near a timely-filing deadline." },
  { q: "Do you integrate with our existing practice management software?", a: "Yes, we integrate with most major EHR and practice management platforms — see our full compatibility list below." },
  { q: "Who exactly works on our account day to day?", a: "A dedicated senior biller, a coder matched to your specialty, and a denial specialist — all reachable directly, not through a ticket queue." },
];

export const NAV_ITEMS = [
  {
    label: "Services",
    to: "/services",
    blurb: "End-to-end revenue cycle management, from charge capture to payment posting.",
    ctaLabel: "View all services",
    sublinks: SERVICES.slice(0, 6).map((s) => ({ label: s.title, to: `/services/${s.slug}`, icon: s.icon })),
  },
  {
    label: "Specialties",
    to: "/specialties",
    blurb: "Coders matched to your specialty's codes, modifiers, and payer quirks.",
    ctaLabel: "View all specialties",
    sublinks: SPECIALTIES.slice(0, 6).map((s) => ({ label: s.title, to: `/specialties/${s.slug}`, icon: s.icon })),
  },
  {
    label: "Locations",
    to: "/locations",
    blurb: "340+ providers served across 32 states, with local payer expertise.",
    ctaLabel: "View all locations",
    sublinks: LOCATIONS.slice(0, 6).map((l) => ({ label: l.title, to: `/locations/${l.slug}`, icon: MapPin })),
  },
];

export const SIMPLE_NAV_LINKS = [
  { label: "About", to: "/about" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];
