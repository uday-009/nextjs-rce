import Breadcrumb from "@/components/Common/Breadcrumb";
import CyberSecurityResources from "@/components/CyberSecurityResources";
import ITCsrOne from "@/components/ItCsR/ITCsrOne";
import ITCsrTwo from "@/components/ItCsR/ITCsrTwo";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "IT and Cybersecurity resources",
  description: "IT and Cybersecurity resources | relatecentral",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="IT and Cybersecurity resources"
        description="Relate Central is your trusted partner for accessing top-tier IT and cybersecurity talent to meet your organization's needs. "
      />
      <ITCsrOne />
      <ITCsrTwo />
    </>
  );
};

export default AboutPage;
