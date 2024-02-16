
type AccordionItem = {
  id: number;
  title: string;
  content: string[];
};

const accordionDataOne: AccordionItem[] = [
  {
    id: 1,
    title: "Outsource IT Security Expertise",
    content: ["Many businesses – especially small and medium businesses (SMBs) – rely on Relate Central managed security services because they lack the tech talent and advanced technology platforms necessary to effectively protect their firms from cyber threats. Relate Central delivers both for an affordable monthly subscription fee."],
  },
  {
    id: 2,
    title: "Combat Staff Turnover & Reduce Costs",
    content: ["Even enterprises with the resources necessary to combat cyber threats internally are turning to Relate Central to stabilize their teams amid the “Great Resignation” and to reduce costs of rising tech talent and technology with Relate Central subscription-based services, which are designed for security at scale."],
  },
  {
    id: 3,
    title: "Backstop In-house Expertise",
    content: ["Businesses that have internal security expertise often lack the resources and tools, such as real-time global threat intelligence, necessary to address the vast and ever- evolving scope and scale of cyberthreats around the clock. MSSPs can provide access to state-of-the art tools and after-hours security monitoring.."],
  },
  {
    id: 4,
    title: "Relate Central Managed Cyber Security Platform",
    content: ["MXDR, the cornerstone of the Managed Cyber security Platform, combines AI-powered Managed Extended Detection & Response (MXDR): leverages big data analytics, artificial intelligence to effectively cut through the noise and drill down on real alerts.", "24/7 Security Operations Center (SOC/SOAR):" , "Our team of expert security analysts monitor alerts and respond to threats around the clock, with an overlay of orchestration and automation (SOAR) to capture high-fidelity alerts and respond quicker in a scalable and customized process."],
  },
  {
    id: 5,
    title: "Relate Central Managed Cyber Security Services Ecosystem",
    content: ["Alongside the flagship MXDR and SOAR platform, Relate Central delivers a range of subscription services for threat prevention, detection and response to meet the security and compliance requirements of organizations large and small."],
  },
  {
    id: 6,
    title: "Relate Central Managed Detection & Response Solutions",
    content: ["Managed Extended Detection & Response (MXDR) Managed Everything Detection & Response is a unified approach to detection and response that collects and correlates all security tools to protect the entire enterprise attack surface effectively and efficiently.",
    "Network Detection & Response (NDR) Tap into our Cyber Security war room, a CISO led 24/7 SOC staffed by security analysts leveraging enterprise-class threat detection and hunting tools.",
    "Endpoint Detection & Response (EDR) Our solution monitors endpoints, detects suspicious behaviour, blocks malicious activity, suggests remediation steps and, most importantly, is managed by security experts."]
  },
  // {
  //   id: 2,
  //   title: "Accordion Item 2",
  //   content: [],
  // },
  // Add more items as needed
];

export default accordionDataOne;
