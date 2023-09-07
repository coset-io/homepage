import React from "react"
import { StaticImage } from "gatsby-plugin-image"

export const Hero = (props: React.ComponentProps<"div">) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center" {...props}>
        <StaticImage
          alt="Antalpha sui event poster"
          src="./images/poster.png"
          aspectRatio={1393 / 833}
          style={{
            borderRadius: 20,
            maxWidth: "1400px",
            width: "100%",
          }}
        />

        {/* a tried on custom element */}
        {/* <div style={{ display: "grid" }}>
          <StaticImage
            alt="Antalpha sui event poster"
            src="./images/poster-background.png"
            layout="constrained"
            aspectRatio={1393 / 833}
            formats={["auto", "webp", "avif"]}
            style={{
              gridArea: "1/1",
              borderRadius: 20,
              maxWidth: "1400px",
              width: "100%",
            }}
          />
          <div
            style={{
              // By using the same grid area for both, they are stacked on top of each other
              gridArea: "1/1",
              position: "relative",
              // This centers the other elements inside the hero component
              placeItems: "center",
              display: "grid",
              maxWidth: "1400px",
              width: "100%",
            }}
          >
            <div className="flex flex-col items-center">
              <StaticImage
                alt="Antalpha sui event poster"
                src="./images/poster-title.svg"
                width={1029}
                height={351}
                backgroundColor="transparent"
                blurredOptions={{ width: 0 }}
                formats={["auto", "webp", "avif"]}
                className="-my-20"
              />

              <h3 className="text-[#2222FF] font-bold text-[105px]">#MOVE</h3>

              <div className="flex flex-wrap space-x-9 mt-12">
                <div className={heroStyles.glassItem}>
                  <p className={heroStyles.glassItemText}>@Dali, China</p>
                </div>

                <div className={heroStyles.glassItem} style={{ minWidth: 600 }}>
                  <p className={heroStyles.glassItemText}>
                    Sep 3rd - Sep 24th, 2023{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        <div className="flex flex-col pt-14 pb-20 justify-center items-center text-center">
          <h1 className="text-6xl font-semibold leading-tight">
            Antalpha HackerHouse
          </h1>
          <h1 className="text-6xl font-semibold underline decoration-2 decoration-double decoration-blue-700">
            # MOVE
          </h1>
          <p className="text-3xl leading-normal text-web-gray/70 mt-6">
            Sep 3rd - Sep 24th, 2023
          </p>
          <p className="text-3xl leading-normal text-web-gray/70">
            @Dali, China
          </p>
          <a
            href="https://tally.so/r/3qDRDk"
            target="_blank"
            rel="external"
            className="inline-flex py-4 px-10 uppercase text-xs font-semibold bg-web-black text-white rounded-sm border border-web-black mt-6 hover:opacity-80 transition-colors"
          >
            Apply to join
          </a>
        </div>
      </div>
    </>
  )
}
