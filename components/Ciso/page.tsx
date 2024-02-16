import SectionTitle from "../Common/SectionTitle";
import Image from "next/image";
import Link from "next/link";
import fOneData from "./fOneData";
import SingleFeat from "./SingleFeat";
import fTwoData from "./fTwoData";

const Ciso = () => {
  return (
    <>
      <section
        id="csr"
        className="bg-gray-light py-16 dark:bg-bg-color-dark md:py-20 lg:py-28"
      >
        <div className="container">
          {/* <SectionTitle
            title="The Future of Cybersecurity Leadership: Virtual CISO as a Service"
            paragraph=""
            center
            width="100%"
            heading="h3"
          /> */}
          <div className="flex items-center justify-center">
            <Image
              src="/images/ciso/ciso-banner3.jpeg"
              alt="logo"
              width={960}
              height={500}
              className=""
              style={{ width: "75%" }}
            />
          </div>
          <div className="flex items-center justify-center text-center">
            <h2
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                marginTop: "3rem",
              }}
            >
              When you choose Relate Central you gain a trusted partner,
              dedicated to securing your organization’s digital assets. Relate
              Central offers services that are customized to fit the budget and
              size of your business, enabling you to determine the priorities
              for your operation.
            </h2>
          </div>
        </div>
      </section>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Virtual CISO Responsibilities"
            paragraph=""
            center
            width="100%"
          />

          <div
            className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-2"
            style={{ alignItems: "stretch" }}
          >
            {fOneData.map((feature) => (
              <div
                key={feature.id}
                className="w-full"
                style={{ height: "100%" }}
              >
                <SingleFeat feature={feature} />
              </div>
            ))}
          </div>
        </div>
        <div
          className=" flex items-center justify-center bg-gray-light py-16 text-center dark:bg-bg-color-dark md:py-20 lg:py-20"
          style={{ marginTop: "2rem" }}
        >
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              margin: "3rem",
            }}
          >
            The future of Cybersecurity leadership is increasingly reliant on
            virtual CISOs as a service. These experienced professionals bring a
            wealth of expertise and cost-effective solutions to the table,
            making them indispensable in today’s digital landscape.
          </h2>
        </div>
        <div className="container" style={{ marginTop: "3rem" }}>
          <div className="flex items-center justify-center text-center">
            <h2
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                margin: " 3rem 0 2rem",
              }}
            >
              THE VALUE AND BENEFITS OF HIRING A vCISO.
            </h2>
          </div>

          <div
            className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-2"
            style={{ alignItems: "stretch" }}
          >
            {fTwoData.map((feature) => (
              <div
                key={feature.id}
                className="w-full"
                style={{ height: "100%" }}
              >
                <SingleFeat feature={feature} />
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-4"></div>
        </div>
        <div
          className=" flex items-center justify-center  bg-gray-light py-16 text-center dark:bg-bg-color-dark md:py-20 lg:py-20"
          style={{ marginTop: "2rem", flexDirection: "column" }}
        >
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              margin: "3rem",
            }}
          >
            Check out the why small and mid-size businesses are turning to
            Relate Central for a Cyber Health Assessment.
          </h2>
        </div>
        <div
          className=" flex items-center justify-center  bg-gray-light py-16 text-center dark:bg-bg-color-dark md:py-20 lg:py-20"
          style={{ marginTop: "2rem", flexDirection: "column" }}
        >
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              margin: "3rem",
            }}
          >
            Our experienced professionals bring a wealth of expertise and
            cost-effective solutions to the table, making them indispensable in
            today’s digital landscape. By understanding the critical role of a
            virtual CISO and the benefits they offer, organizations can take
            proactive steps to enhance their Cybersecurity defenses and
            safeguard their digital assets from evolving threats.
          </h2>
          <Link
            href="https://relatecentral.com/contact-2/"
            className="rounded-sm bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
          >
            GET IN TOUCH TO LEARN MORE
          </Link>
        </div>
        <div className="container">
          <div
            className=" flex items-center justify-center   py-16 text-center md:py-20 lg:py-20"
            style={{ marginTop: "2rem", flexDirection: "column" }}
          >
            <h2
              style={{
                fontSize: "1.3rem",
                fontWeight: "bold",
                margin: "3rem",
              }}
            >
              Check out the why small and mid-size businesses are turning to
              Relate Central for a Cyber Health Assessment.
            </h2>
          </div>

          <div className="flex items-center justify-center">
            <Image
              src="/images/ciso/ciso-banner2.jpeg"
              alt="logo"
              width={960}
              height={500}
              className=""
              style={{ width: "75%" }}
            />
          </div>
          <div
            className=" flex items-center justify-center   py-16 text-center md:py-20 lg:py-20"
            style={{ marginTop: "2rem", flexDirection: "column" }}
          >
            <h2
              style={{
                fontSize: "1.3rem",
                fontWeight: "bold",
                margin: "3rem",
              }}
            >
              Our Cybersecurity Health Check Includes Five Key Elements
            </h2>
            <p className="text-base !leading-relaxed text-body-color md:text-lg mb-10">
              Comprehensive Assessment | Identification of Vulnerabilities |
              Customized Recommendations | Regulatory Compliance Assurance |
              Peace of Mind
            </p>
            <Link
            href="/contact"
            className="rounded-sm bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
          >
            GET IN TOUCH TO LEARN MORE
          </Link>
          </div>
          
        </div>
      </section>
    </>
  );
};

export default Ciso;
