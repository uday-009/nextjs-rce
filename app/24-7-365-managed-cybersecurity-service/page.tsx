
import Breadcrumb from "@/components/Common/Breadcrumb";
import Mcs from "@/components/Mcs/page";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "24/7 Managed Services (MCS) - Relate Central",
  description: "",
  // other metadata
};

const McsPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="24/7 Managed Services (MCS)"
        description="Cyber Security is a 24/7 job that requires expertise to stay ahead of ever-evolving Cyber threats.
        Businesses only need to read the headlines to know that a firewall or antivirus is no longer going to keep them safe.
        Businesses of all sizes are turning to Relate Central Managed Security Services to fill in the gaps in their expertise or resources."
      />
      <Mcs />
    </>
  );
};

export default McsPage;
