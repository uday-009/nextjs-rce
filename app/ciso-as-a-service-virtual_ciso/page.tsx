import Ciso from "@/components/Ciso/page";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CISO As A Service (CISOaaS) - Relate Central",
  description: "",
  // other metadata
};

const CisoPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="CISO As A Service (CISOaaS)"
        description="The Future of Cybersecurity Leadership: Virtual CISO as a Service"
      />
      <Ciso />
    </>
  );
};

export default CisoPage;
