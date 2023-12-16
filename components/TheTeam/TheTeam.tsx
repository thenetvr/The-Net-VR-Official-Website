"use client";

import React from "react";
import Carousel from "../shared/Carousel";
import Reveal from "../shared/Reveal";

export default function TheTeam() {
  return (
    <div className="flex flex-col pb-4 pt-20 px-10 lg:px-20 xl:px-72 gap-10 items-center">
      <div className="flex flex-col">
        <Reveal delay={0}>
          <div className="uppercase text-xl">Meet Our Incredible</div>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="p-6 text-4xl font-bold text-center">Team</h1>
        </Reveal>
      </div>
      <div className="flex w-full justify-center">
        <Carousel
          data={[
            {
              image: "/images/logo.png",
              name: "Noah",
              role: "Lead",
            },
            {
              image: "https://picsum.photos/seed/random102/500/500",
              name: "Mike",
              role: "Lead",
            },
            {
              image: "https://picsum.photos/seed/random103/500/500",
              name: "Samuel",
              role: "Lead",
            },
          ]}
        />
      </div>
    </div>
  );
}
