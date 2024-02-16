import { Feature } from "@/types/feature";
import Image from "next/image";

const fOneData: Feature[] = [
  {
    id: 1,
    icon: (
        <Image
        src="/images/ciso/img01.png"
        alt="logo"
        width={100}
        height={100}
        className=""
        style={{ width: "75%", borderRadius: "8px"   }}
      />
    ),
    title: "STRATEGIC PLANNING & ASSESSMENT.",
    paragraph:
      "",
  },
  {
    id: 2,
    icon: (
        <Image
        src="/images/ciso/img02.jpg"
        alt="logo"
        width={100}
        height={100}
        className=""
        style={{ width: "75%", borderRadius: "8px"   }}
      />
    ),
    title: "POLICY DEVELOPMENT & IMPLEMENTATION. ",
    paragraph:
      "",
  },
  {
    id: 3,
    icon: (
        <Image
        src="/images/ciso/img03.png"
        alt="logo"
        width={100}
        height={100}
        className=""
        style={{ width: "75%", borderRadius: "8px"   }}
      />
    ),
    title: "VENDOR & TECHNOLOGY EVALUATION.",
    paragraph:
      "",
  },
  {
    id: 4,
    icon: (
        <Image
        src="/images/ciso/img04.png"
        alt="logo"
        width={100}
        height={100}
        className=""
        style={{ width: "75%", borderRadius: "8px"   }}
      />
    ),
    title: "SECURITY AWARENESS & TRAINING.",
    paragraph:
      "",
  },

];
export default fOneData;
