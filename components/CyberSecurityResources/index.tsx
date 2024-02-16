import SectionTitle from "../Common/SectionTitle";
import SingleSolution from "./SingleSolution";
import solutionsData from "./solutionsData";

const CyberSecurityResources = () => {
  return (
    <>
      <section
        id="csr"
        className="bg-gray-light py-16 dark:bg-bg-color-dark md:py-20 lg:py-28"
      >
        <div className="container">
          <SectionTitle
            title="Call us today to learn more, or to discuss your requirements.
          We welcome your questions anytime 678.530.5342"
            paragraph=""
            center
            width="100%"
          />
        </div>
      </section>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="How we engage with our clients"
            paragraph="24/7 Managed Services | Global delivery | Ongoing support  "
            center
            width="100%"
          />
          <SectionTitle
            title=""
            paragraph="Our team consists of experienced professionals who have years of experience protecting data, systems, and networks from malicious attacks. ​​​We understand that no two organizations have identical cybersecurity needs - whether it be small businesses or large enterprises. ​​That's why we offer customized solutions tailored to each specific organization's requirements. ​​No matter what industry you’re in or how complex your cybersecurity needs may be, our team is here to help you protect yourself from threats. ​​"
            center
            width="100%"
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3" style={{alignItems: "stretch"}}>
          {solutionsData.map((blog) => (
            <div key={blog.id} className="w-full" style={{height: "100%"}}>
              <SingleSolution blog={blog} />
            </div>
          ))}
        </div>

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-4"></div>
        </div>
      </section>
    </>
  );
};

export default CyberSecurityResources;
