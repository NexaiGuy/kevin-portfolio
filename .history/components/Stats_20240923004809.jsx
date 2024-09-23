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
        <div>
            {stats.map((item, index)=> {
                return <div key={index}>
                    <CountUp e/>
                </div>
            })}
        </div>
    </div>
  </section>;
}

export default Stats