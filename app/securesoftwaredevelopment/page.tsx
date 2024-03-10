import Breadcrumb from "@/components/Common/Breadcrumb";
import SSDOne from "@/components/SSD/SSDOne";
import SSDTwo from "@/components/SSD/SSDTwo";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Secure Software Development",
  description: "Secure Software Development | relate central",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Secure Software Development"
        description="Your Partner in Secure Software Development. At Relate Central, we understand the critical importance of secure software development in today's digital landscape. "
      />
      <SSDOne />
      <SSDTwo />
    </>
  );
};

export default AboutPage;
