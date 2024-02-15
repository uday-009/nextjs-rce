import Link from "next/link";
import Image from "next/image";
import Herobg from "/images/hero/CyberSecurity.svg";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div
                className="wow fadeInUp mr-auto max-w-[800px] text-left"
                data-wow-delay=".2s"
              >
                <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  Guardians of the World’s Most Sensitive Data
                </h1>
                <p className="mb-12 text-base !leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-xl">
                  In today’s rapidly evolving threat landscape, ensuring robust
                  cybersecurity is a formidable task for organizations.
                  Traditional reactive approaches, where resources are allocated
                  to defend against well-known threats, are no longer
                  sufficient.
                </p>
                <div className="flex flex-col items-center justify-start space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Link
                    href="https://relatecentral.com/contact-2/"
                    className="rounded-sm bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                  >
                    GET IN TOUCH
                  </Link>
                  <Link
                    href="/"
                    className="inline-block rounded-sm bg-black px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/90 dark:bg-white/10 dark:text-white dark:hover:bg-white/5"
                  >
                    {" know more about us >"}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute right-0 top-0 z-[-1] opacity-30 lg:opacity-100"
          style={{ top: "25%", right: "7%" }}
        >
          <Image
            src="/images/hero/CyberSecurity.svg"
            alt="hero banner"
            height={400}
            width={500}
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
