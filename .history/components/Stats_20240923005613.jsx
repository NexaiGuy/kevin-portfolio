"use client";

import CountUp from "react-countup";

const stats = [
    {
        num: 12,
        text: "Years of experience", 
    },
    {
        num: 26,
        text: "Projects completed", 
    },
    {
        num: 8,
        text: "Technologies mastered", 
    },
    {
        num: 500,
        text: "Code commits", 
    },
]

const Stats = () => {
  return <section>
    <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
            {stats.map((item, index)=> {
                return (
                  <div className="flex-1 gap-4 items-center justify-center xl:justify-start" key={index}>
                    <CountUp 
                      end={item.num} 
                      duration={5} 
                      delay={2} 
                      className="text-4xl xl:text-6xl font-extrabold"
                    />
                    <p className={`${item.text.length < 11}`}>{item.text}</p>
                </div>
              );
            })}
        </div>
    </div>
  </section>;
}

export default Stats