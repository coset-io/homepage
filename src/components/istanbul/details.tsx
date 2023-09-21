import React from "react"

const contents = [
  {
    title: "Focus",
    content:
      "Deep dive into Zero-knowledge proof, understanding Folding Schemes and Lookup. By understanding the basic concepts, could we find more low-hanging fruit?",
  },
  {
    title: "Free Co-Living space",
    content:
      "Away from distractions for better coding experience, filled with the most brilliant ZKP researchers.",
  },
  {
    title: "Work Scope",
    content:
      "By the end of 1st week, hackers are expected to share at least one ZKP research paper in depth. The paper could be of interest or fundamental for you to build on for the next 3 weeks. Sharing involves elaborating the mathematics and the intuition. The following 3 weeks will focus on forming teams of 2-4 ppl, and hack on really anything you wish to build.",
  },
  {
    title: "Tech Session",
    content:
      "Each in-house ZKP researcher will have 1 day to share and discuss on area of their interest. Also inviting outside researchers to drop-by. Weekdays only.",
  },
  {
    title: "Fun",
    content:
      "Tourism around Istanbul during the weekend. Hot air balloon & historical sites etc.",
  },
  {
    title: "Demo Work",
    content:
      "During the week of Devconnect (Nov13th-19th), there will be public events to showcase our findings & work.",
  },
]

export const Details = () => {
  return (
    <div className="container mx-auto space-y-9 text-center py-24">
      {contents.map((x) => (
        <div key={x.title} className="flex flex-col items-center justify-center space-y-4 px-8">
          <h1 className="font-semibold text-[3.5rem]">{x.title}</h1>
          <p className="font-light text-[2rem] text-web-gray/70 max-w-4xl">{x.content}</p>
        </div>
      ))}
    </div>
  )
}
