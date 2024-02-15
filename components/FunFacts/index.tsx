"use client";
import React from "react";
import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import funFactsData from "./funFactsData";
import SingleFunFact from "./SingleFunFact";

const FunFacts = () => {
  return (
    <>
      
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container" style={{position:"relative"}}>
          <SectionTitle
            title="Did You Know?"
            paragraph=""
            center
          />

          <Image
            fill
            src="/images/img-dotted.svg"
            alt="Dotted"
            className="absolute left-0 top-0 -z-1 dark:hidden"
          />
          <Image
            fill
            src="/images/img-dotted-dark.svg"
            alt="Dotted"
            className="absolute left-0 top-0 -z-1 hidden dark:block"
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-4">
            {funFactsData.map((fact) => (
              <SingleFunFact key={fact.id} feature={fact} />
            ))}
          
          </div>
        </div>
      </section>
    </>
  );
};

export default FunFacts;
