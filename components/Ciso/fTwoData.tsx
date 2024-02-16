import { Feature } from "@/types/feature";
import Image from "next/image";

const fTwoData: Feature[] = [
  {
    id: 1,
    icon: (
        <Image
        src="/images/ciso/img05.png"
        alt="logo"
        width={100}
        height={100}
        className=""
        style={{ width: "75%",  borderRadius: "8px" }}
      />
    ),
    title: "EXPERTISE",
    paragraph:
      "Cybersecurity is a complex field that demands specialized knowledge and skills.",
  },
  {
    id: 2,
    icon: (
        <Image
        src="/images/ciso/img06.png"
        alt="logo"
        width={100}
        height={100}
        className=""
        style={{ width: "75%", borderRadius: "8px"  }}
      />
    ),
    title: "SCABILITY ",
    paragraph:
      "vCISO services are scalable to meet the evolving needs of your organization.",
  },
  {
    id: 3,
    icon: (
        <Image
        src="/images/ciso/img07.png"
        alt="logo"
        width={100}
        height={100}
        className=""
        style={{ width: "75%" , borderRadius: "8px"  }}
      />
    ),
    title: "INDUSTRY COMPLIANCE",
    paragraph:
      "CISOs understand all compliance with industry-specific regulations and standards.",
  },
  {
    id: 4,
    icon: (
        <Image
        src="/images/ciso/img08.png"
        alt="logo"
        width={100}
        height={100}
        className=""
        style={{ width: "75%", borderRadius: "8px"   }}
      />
    ),
    title: "COST EFFICIENCIES",
    paragraph:
      "Virtual CISOs bring a wealth of experience and expertise at a fraction of the cost",
  },

];
export default fTwoData;
