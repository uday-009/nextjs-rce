"use client";
import SectionTitle from "../Common/SectionTitle";
import Image from "next/image";
import Link from "next/link";
import Accordion from "./SingleAccordian";
import accordionDataOne from "./accordionDataOne";
import accordionDataTwo from "./accordionDataTwo";

const Mcs = () => {
  return (
    <>
      <section
        id="csr"
        className="bg-white py-16 dark:bg-bg-color-dark md:py-20 lg:py-28"
      >
        <div className="container flex items-center justify-between py-16">
          <div
            className="flex items-center justify-center   text-center dark:bg-bg-color-dark md:px-20 lg:px-20"
            style={{ flexDirection: "column", flex: 1 }}
          >
            <div
              className="accrd-div w-full"
              style={{ borderTop: "6px solid #4a6cf7" }}
            >
              <div>
                {accordionDataOne.map((item) => (
                  <Accordion key={item.id} item={item} />
                ))}
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/images/mcs/img01.png"
              alt="logo"
              width={400}
              height={350}
              className=""
              style={{ width: "100%" }}
            />
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
            Managed Cybersecurity Services from Relate Central. We deliver
            advanced managed security services through a network of trusted MSP
            partners. We arm our partners with our market- leading security
            platform and the expert resources to deliver best-in-market managed
            security services, to meet clients where they’re at.
          </h2>
        </div>

        <div className="container flex items-center justify-between py-16">
        <div className="flex items-center justify-center">
            <Image
              src="/images/mcs/acc02.jpg"
              alt="logo"
              width={400}
              height={350}
              className=""
              style={{ width: "100%" }}
            />
          </div>
          <div
            className="flex items-center justify-center   text-center dark:bg-bg-color-dark md:px-20 lg:px-20"
            style={{ flexDirection: "column", flex: 1 }}
          >
            <div
              className="accrd-div w-full"
              style={{ borderTop: "6px solid #4a6cf7" }}
            >
              <div>
                {accordionDataTwo.map((item) => (
                  <Accordion key={item.id} item={item} />
                ))}
              </div>
            </div>
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
            <Link
              href={"/contact"}
              className={`hover:text-underline dark:hover:text-white"} flex py-2 text-base text-dark hover:text-primary dark:text-white/70 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6`}
              style={{ fontSize: "24px", color: "#4a6cf7", display: "block" }}
            >
              Get in touch today to disover which services are right for you.
            </Link>
            <span>
              Learn more about how we support 24/7 Managed Cyber Security
              Services for peace of mind whenever it comes to protecting your
              company’s data.
            </span>
          </h2>
        </div>
      </section>
    </>
  );
};

export default Mcs;
