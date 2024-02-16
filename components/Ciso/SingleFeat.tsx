import { Feature } from "@/types/feature";

const SingleFeat = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;
  return (
    <div className="w-full p-3 w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color shadow-one outline-none  dark:bg-[#242B51] dark:shadow-signUp" >
      <div className="wow fadeInUp flex items-center justify-start" data-wow-delay=".15s">
        <div className="mr-10 flex h-[100px] w-[115px] items-center justify-center rounded-md bg-white bg-opacity-0 text-primary" style={{borderRadius:"8px", padding:"3px"}}>
          {icon}
        </div>
        <div className="feature-content">
          <h3 className="mb-5 text-xl font-bold text-black dark:text-white">
            {title}
          </h3>
          <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
            {paragraph}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleFeat;
