// ─── Hero ───────────────────────────────────────────────────────────────────
export type HeroContent = {
  badgeInner: string;
  badgeOuter: string;
  titleBefore: string;
  titleHighlight: string;
  titleAfter: string;
  subtitle: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  heroImageLight: string;
  heroImageDark: string;
  heroImageAlt: string;
};

// ─── Sponsors ───────────────────────────────────────────────────────────────
export type SponsorItem = { icon: string; name: string };
export type SponsorsContent = {
  heading: string;
  items: SponsorItem[];
};

// ─── Benefits ───────────────────────────────────────────────────────────────
export type BenefitItem = { icon: string; title: string; description: string };
export type BenefitsContent = {
  eyebrow: string;
  heading: string;
  description: string;
  items: BenefitItem[];
};

// ─── Feature Grid ───────────────────────────────────────────────────────────
export type FeatureItem = { icon: string; title: string; description: string };
export type FeaturesContent = {
  eyebrow: string;
  heading: string;
  subtitle: string;
  items: FeatureItem[];
};

// ─── Services ───────────────────────────────────────────────────────────────
export type ServiceItem = { title: string; description: string; pro: boolean };
export type ServicesContent = {
  eyebrow: string;
  heading: string;
  subtitle: string;
  items: ServiceItem[];
};

// ─── Testimonials ───────────────────────────────────────────────────────────
export type TestimonialItem = {
  image: string;
  name: string;
  role: string;
  comment: string;
  rating: number;
};
export type TestimonialsContent = {
  eyebrow: string;
  heading: string;
  reviews: TestimonialItem[];
};

// ─── Team ───────────────────────────────────────────────────────────────────
export type SocialLink = { name: string; url: string };
export type TeamMember = {
  imageUrl: string;
  firstName: string;
  lastName: string;
  positions: string[];
  socialNetworks: SocialLink[];
};
export type TeamContent = {
  eyebrow: string;
  heading: string;
  members: TeamMember[];
};

// ─── Pricing ────────────────────────────────────────────────────────────────
export type PricingPlan = {
  title: string;
  popular: boolean;
  price: number;
  description: string;
  buttonText: string;
  benefits: string[];
};
export type PricingContent = {
  eyebrow: string;
  heading: string;
  subtitle: string;
  priceSuffix: string;
  plans: PricingPlan[];
};

// ─── Contact ────────────────────────────────────────────────────────────────
export type ContactInfoBlock = { label: string; value: string | string[] };
export type ContactContent = {
  eyebrow: string;
  heading: string;
  description: string;
  mailtoAddress: string;
  info: {
    address: ContactInfoBlock;
    phone: ContactInfoBlock;
    email: ContactInfoBlock;
    hours: ContactInfoBlock;
  };
  formSubjects: string[];
  formSubmitLabel: string;
};

// ─── FAQ ────────────────────────────────────────────────────────────────────
export type FaqItem = { question: string; answer: string };
export type FaqContent = {
  eyebrow: string;
  heading: string;
  items: FaqItem[];
};

// ─── Footer ─────────────────────────────────────────────────────────────────
export type FooterLink = { label: string; href: string };
export type FooterColumn = { heading: string; links: FooterLink[] };
export type FooterContent = {
  brandName: string;
  columns: FooterColumn[];
  copyright: string;
  attribution: { label: string; href: string };
};

// ─── Navbar ─────────────────────────────────────────────────────────────────
export type NavRoute = { href: string; label: string };
export type NavFeature = { title: string; description: string };
export type NavbarContent = {
  brandName: string;
  routes: NavRoute[];
  featureDropdownLabel: string;
  featureImage: { src: string; alt: string };
  features: NavFeature[];
  signInLabel: string;
  signUpLabel: string;
  dashboardLabel: string;
  githubLink: { href: string; ariaLabel: string };
};

// ─── Root ───────────────────────────────────────────────────────────────────
export type HomeContent = {
  hero: HeroContent;
  sponsors: SponsorsContent;
  benefits: BenefitsContent;
  features: FeaturesContent;
  services: ServicesContent;
  testimonials: TestimonialsContent;
  team: TeamContent;
  pricing: PricingContent;
  contact: ContactContent;
  faq: FaqContent;
  footer: FooterContent;
  navbar: NavbarContent;
};

// ─── ContractFlow Content ───────────────────────────────────────────────────

export const defaultHomeContent: HomeContent = {
  hero: {
    badgeInner: "New",
    badgeOuter: "Introducing ContractFlow",
    titleBefore: "Simplify Contract Management with",
    titleHighlight: "ContractFlow",
    titleAfter: "",
    subtitle: "A modern platform to create, organize, and track all your contracts in one place. Empower your team to collaborate efficiently and reduce risk.",
    primaryCta: { label: "Start Free", href: "#pricing" },
    secondaryCta: { label: "Request a Demo", href: "#contact" },
    heroImageLight: "/hero-image-light.jpeg",
    heroImageDark: "/hero-image-dark.jpeg",
    heroImageAlt: "ContractFlow dashboard preview",
  },

  sponsors: {
    heading: "Trusted by Future-Ready Teams",
    items: [
      { icon: "FileText", name: "DocuSign" },
      { icon: "Lock", name: "AWS" },
      { icon: "UserCheck", name: "Slack" },
      { icon: "Layers", name: "Notion" },
      { icon: "CheckCircle", name: "Dropbox" },
      { icon: "Shield", name: "Google Cloud" },
      { icon: "Briefcase", name: "Salesforce" },
    ],
  },

  benefits: {
    eyebrow: "Why ContractFlow",
    heading: "A Platform Built for Contract Success",
    description: "Reduce risk and improve compliance with a single source of truth for your contracts. Collaborate with confidence, knowing everyone is working from the latest version.",
    items: [
      {
        icon: "FolderOpen",
        title: "Central Repository",
        description: "Store and organize contracts for easy access and compliance.",
      },
      {
        icon: "Users",
        title: "Team Collaboration",
        description: "Give your team a dedicated workspace for feedback, review, and approvals.",
      },
      {
        icon: "Repeat",
        title: "Full Lifecycle Tracking",
        description: "Follow contracts every step, from draft to renewal.",
      },
      {
        icon: "ShieldCheck",
        title: "Secure & Reliable",
        description: "Your data is encrypted and protected at every stage.",
      },
    ],
  },

  features: {
    eyebrow: "Features",
    heading: "Everything You Need for Contract Success",
    subtitle:
      "ContractFlow brings visibility, structure, and speed to your contract workflows.",
    items: [
      { icon: "LayoutDashboard", title: "Centralized Dashboard", description: "Access and manage all your contracts from a single, secure location." },
      { icon: "Users", title: "Collaborative Workflows", description: "Invite your team to review, comment, and approve contracts together." },
      { icon: "RefreshCcw", title: "Full Contract Lifecycle", description: "Track the status of every agreement from draft to renewal." },
    ],
  },

  services: {
    eyebrow: "Services",
    heading: "Built for Modern Businesses",
    subtitle:
      "ContractFlow helps you move quickly, collaborate efficiently, and stay compliant.",
    items: [
      { title: "Secure Storage", description: "All contracts are encrypted and safely stored.", pro: false },
      { title: "Role-Based Permissions", description: "Control access and actions by role—admins, reviewers, and signers.", pro: false },
      { title: "Audit Trail", description: "Review the complete history of changes and actions.", pro: false },
      { title: "Automated Reminders", description: "Never miss a key date with built-in notifications.", pro: true },
    ],
  },

  testimonials: {
    eyebrow: "Testimonials",
    heading: "Teams streamlining with ContractFlow",
    reviews: [
      {
        image: "/demo-img.jpg",
        name: "Aarav Shah",
        role: "Head of Legal, Smith & Co",
        comment: "We reduced contract cycle time by over 40% and have total confidence in our compliance tracking.",
        rating: 5.0,
      },
      {
        image: "/demo-img.jpg",
        name: "Sophia Chen",
        role: "CEO, Nexgen Ltd",
        comment: "Easy setup, smart workflows, and perfect for cross-department collaboration.",
        rating: 4.8,
      },
      {
        image: "/demo-img.jpg",
        name: "Gabriel Lee",
        role: "COO, UrbanSphere",
        comment: "ContractFlow made our contract process transparent and audit-friendly.",
        rating: 5.0,
      },
      {
        image: "/demo-img.jpg",
        name: "Emily Davis",
        role: "Operations Lead, Vertex",
        comment: "Onboarding the team took minutes—everyone loves having one place for all our contracts.",
        rating: 4.9,
      },
      {
        image: "/demo-img.jpg",
        name: "Anil Kumar",
        role: "Manager, Zenith Solutions",
        comment: "Setting up review flows and approval rules was easier than any other platform we evaluated.",
        rating: 5.0,
      },
    ],
  },

  team: {
    eyebrow: "Team",
    heading: "Meet the ContractFlow founders",
    members: [
      {
        imageUrl: "/team1.jpg",
        firstName: "Chirag",
        lastName: "Dodiya",
        positions: ["Founder & CEO", "Product Lead"],
        socialNetworks: [
          { name: "LinkedIn", url: "https://www.linkedin.com/in/chiragdodiya/" },
          { name: "Github", url: "https://github.com/chiragdodiya" },
        ],
      },
    ],
  },

  pricing: {
    eyebrow: "Pricing",
    heading: "Simple Plans for Every Business",
    subtitle: "No hidden fees. Scale up as your contract needs grow.",
    priceSuffix: "/month",
    plans: [
      {
        title: "Starter",
        popular: false,
        price: 0,
        description: "Ideal for startups and small teams managing a few contracts.",
        buttonText: "Get Started Free",
        benefits: ["Up to 5 contracts", "Unlimited team members", "Secure storage", "Basic support"],
      },
      {
        title: "Growth",
        popular: true,
        price: 29,
        description: "Best for growing businesses needing advanced collaboration.",
        buttonText: "Start 14-day Trial",
        benefits: ["Unlimited contracts", "Role-based permissions", "Audit trail", "Priority support"],
      },
      {
        title: "Enterprise",
        popular: false,
        price: 99,
        description: "For organizations requiring custom workflows and integrations.",
        buttonText: "Contact Sales",
        benefits: ["Custom integrations", "Advanced automation", "Dedicated success manager", "Enhanced security"],
      },
    ],
  },

  contact: {
    eyebrow: "Contact",
    heading: "Connect with ContractFlow",
    description:
      "Need help onboarding, want a demo, or have questions? Reach out to our team and we’ll respond promptly.",
    mailtoAddress: "chirag@bidx.ai",
    info: {
      address: { label: "Find us", value: "Remote-first • Global" },
      phone: { label: "Call us", value: "" },
      email: { label: "Email us", value: "chirag@bidx.ai" },
      hours: { label: "Hours", value: ["Monday - Friday", "9AM - 6PM"] },
    },
    formSubjects: ["Demo Request", "Feature Inquiry", "Partnership", "Help & Support", "Enterprise Solutions"],
    formSubmitLabel: "Contact ContractFlow",
  },

  faq: {
    eyebrow: "FAQ",
    heading: "ContractFlow Common Questions",
    items: [
      { question: "Can I import my existing contracts?", answer: "Yes. Bulk contract upload is supported on all paid plans." },
      { question: "Is there a free trial?", answer: "Absolutely! Get started with all features, no credit card required." },
      { question: "Are documents encrypted?", answer: "Yes. All contracts are encrypted at rest and in transit." },
      { question: "How does team collaboration work?", answer: "Easily invite colleagues and assign roles to manage each contract together." },
      { question: "Can I set reminders for renewal dates?", answer: "Yes, automated reminders and timeline tracking are built in." },
    ],
  },

  footer: {
    brandName: "ContractFlow",
    columns: [
      {
        heading: "Contact",
        links: [
          { label: "chirag@bidx.ai", href: "mailto:chirag@bidx.ai" },
          { label: "LinkedIn", href: "https://www.linkedin.com/in/chiragdodiya/" },
        ],
      },
      {
        heading: "Product",
        links: [
          { label: "Features", href: "#features" },
          { label: "Pricing", href: "#pricing" },
          { label: "Contact", href: "#contact" },
        ],
      },
      {
        heading: "Help",
        links: [
          { label: "Contact Us", href: "#contact" },
          { label: "FAQ", href: "#faq" },
        ],
      },
      {
        heading: "Socials",
        links: [
          { label: "GitHub", href: "https://github.com/chiragdodiya" },
          { label: "LinkedIn", href: "https://www.linkedin.com/in/chiragdodiya/" },
        ],
      },
    ],
    copyright: "© ContractFlow",
    attribution: { label: "Built on Next.js", href: "https://nextjs.org" },
  },

  navbar: {
    brandName: "ContractFlow",
    routes: [
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "#pricing" },
      { label: "Contact", href: "#contact" },
    ],
    featureDropdownLabel: "Features",
    featureImage: { src: "/hero-image-light.jpeg", alt: "ContractFlow preview" },
    features: [
      {
        title: "Centralized Dashboard",
        description: "See and manage all your contracts in one secure place.",
      },
      {
        title: "Collaborative Workflows",
        description: "Build review and approval flows for your team.",
      },
      {
        title: "Full Lifecycle Tracking",
        description: "Monitor contract status from draft to signature and renewal.",
      },
    ],
    signInLabel: "Sign In",
    signUpLabel: "Sign Up",
    dashboardLabel: "Dashboard",
    githubLink: { href: "https://github.com/chiragdodiya", ariaLabel: "View on GitHub" },
  },
};

export const homeContent: HomeContent = defaultHomeContent;

export function getHomeContent(): HomeContent {
  return homeContent;
}