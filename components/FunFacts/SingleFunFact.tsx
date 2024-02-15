import { Feature } from "@/types/feature";

const SingleFunFact = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;
  return (
    <div className="w-full">
      <div className="wow fadeInUp" data-wow-delay=".15s">
        <div className="mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
          {icon}
        </div>
        <h3 className="mb-2.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
          {title}
        </h3>
        <p className="pr-[10px] text-lg lg:text-para2">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleFunFact;
