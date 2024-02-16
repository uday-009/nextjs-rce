import Breadcrumb from "@/components/Common/Breadcrumb";
import CyberSecurityResources from "@/components/CyberSecurityResources";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "IT & Cybersecurity Resources - Relate Central",
  description: "",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Resource Solutions"
        description=""
      />
      <CyberSecurityResources />
    </>
  );
};

export default AboutPage;
