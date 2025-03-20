import React from "react";
import scrollIntoView from "scroll-into-view-if-needed";
import { FadeIn } from "../../components/fade-in";
import { Subheader } from "../../components/subheader";
import { InViewSection } from "../../components/in-view-section";
import Header from "../../components/site-header";
import Footer from "../../components/footer";
import { ActiveAnchorProvider } from "../../components/providers/active-anchor";
import SEO from "../../components/seo";
import { Partner, useEvent } from "../../lib/contentful";
// import { GatsbyImage } from "gatsby-plugin-image";
import { Asset } from "contentful";

const context = { index: 0 };

export default function EventPage({
  params: { slug },
}: {
  params: { slug?: string };
}) {
  React.useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const activeSlug = location.hash.slice(1);
    if (!activeSlug) {
      return;
    }
    setTimeout(() => {
      const section = document.querySelector(`#${activeSlug}`);
      if (section) {
        scrollIntoView(section, {
          behavior: "smooth",
          block: "start",
          inline: "start",
          scrollMode: "always",
        });
      }
    }, 300);
  }, []);

  const { data } = useEvent(slug);
  const coverUrl = (data?.fields.cover as Asset | undefined)?.fields.file
    ?.url as string;

  return (
    <ActiveAnchorProvider>
      <Header />
      <main className="font-inter bg-web-tile">
        {/* TODO: show subheader condition */}
        {/* <Subheader /> */}
        <InViewSection id="overview" context={context}>
          <FadeIn>
            <Hero coverUrl={coverUrl} link={data?.fields.link} />
          </FadeIn>
        </InViewSection>
        <InViewSection id="partners" context={context}>
          <FadeIn>
            <Partners partners={data?.fields.partners} />
          </FadeIn>
        </InViewSection>
        {/* <InViewSection id="speakers" context={context}>
          <FadeIn>
            <Speakers />
          </FadeIn>
        </InViewSection>*/}
        {/* <InViewSection id="community-partners" context={context}>
          <FadeIn>
            <CommunitySupports />
          </FadeIn>
        </InViewSection> */}
      </main>
      <Footer />
    </ActiveAnchorProvider>
  );
}

export const Head = () => (
  <SEO
    title="HackerHouse Chengdu Event"
    description="Coset is a web3 developer community"
    // image={poster}
  />
);

function Hero(
  props: React.ComponentProps<"div"> & { coverUrl?: string; link?: string }
) {
  return (
    <>
      <div className="flex flex-col justify-center items-center" {...props}>
        <img
          alt={`Coset Chengdu event poster`}
          src={props.coverUrl}
          className="w-full lg:h-[920px] object-contain"
        />

        <div className="flex flex-col pt-14 pb-20 justify-center items-center text-center">
          {/* <h1 className="text-3xl md:text-6xl font-semibold leading-tight">
            Antalpha HackerHouse # Unlock Bitcoin
          </h1>
          <p className="text-lg md:text-3xl leading-normal text-web-gray/70 mt-6">
            Jun 16th - Jun 18th
          </p>
          <p className="text-lg md:text-3xl leading-normal text-web-gray/70">
            At 1304 East Oakey Boulevard, Las Vegas, NV 89104, United States
          </p> */}
          {!!props.link && (
            <a
              href={props.link}
              target="_blank"
              rel="external"
              className="inline-flex py-4 px-10 uppercase text-xs font-semibold bg-web-black text-white rounded-sm border border-web-black mt-6 hover:opacity-80 transition-colors"
            >
              Apply to join
            </a>
          )}
        </div>
      </div>
    </>
  );
}

function Partners(
  props: React.ComponentProps<"div"> & { partners?: Partner[] }
) {
  return (
    <div
      className="py-48 flex flex-col space-y-12 justify-center items-center bg-web-paper"
      {...props}
    >
      <div className="relative">
        <h1 className="font-semibold text-6xl capitalize text-web-gray">
          Partners
        </h1>
        <div className="absolute right-4 -top-12 translate-x-full">
          <svg
            width="99"
            height="100"
            viewBox="0 0 99 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M32.8715 60.8207C32.4038 61.0595 31.8629 60.8497 31.6145 60.387C29.6736 56.7705 27.2033 53.3652 25.4914 49.6749C25.2897 49.2401 25.4366 48.7297 25.8328 48.4599C32.8953 43.6486 51.8222 30.5194 60.2831 24.3898C61.1319 23.775 62.2919 24.7318 61.8587 25.6862C60.5406 28.5899 59.2737 31.513 58.0652 34.7396C57.8192 35.3965 58.3169 36.0892 59.0182 36.0755C62.7997 36.0019 66.8908 35.9696 70.6693 36.3194C71.6419 36.4094 71.8617 37.6947 71.0017 38.1577C60.3032 43.9177 38.6633 57.8635 32.8715 60.8207Z"
              fill="#FF495D"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M36.0781 78.1844C35.5561 78.1483 35.1481 77.7198 35.1244 77.1971C34.9856 74.1271 34.4274 71.0526 33.8087 68.0401C33.6921 67.472 34.0754 66.9237 34.6509 66.8521C39.2293 66.2827 49.7817 65.2081 56.5901 64.5316C57.6201 64.4292 58.2053 65.9093 57.4494 66.6164C55.8216 68.1394 54.3055 69.8189 52.7307 71.3683C52.322 71.7704 52.3185 72.434 52.7591 72.801C53.9049 73.7556 55.1631 74.5784 56.2983 75.5517C57.006 76.1584 57.6494 76.8239 58.3166 77.4629C58.9771 78.0956 58.6504 79.2772 57.736 79.3006C51.7664 79.4536 40.5133 78.4912 36.0781 78.1844Z"
              fill="#FF495D"
            />
          </svg>
        </div>
      </div>

      <div className="py-8 grid grid-cols-1 md:grid-cols-2 gap-2">
        {props.partners?.map(({ fields: x }) => (
          <div key={x.title ?? x.link} className="flex flex-col h-full">
            <a
              href={x.link}
              target="_blank"
              rel="noopener noreferrer"
              className="max-w-xs px-12 py-12 border border-web-gray/30 hover:opacity-75 transition flex justify-center items-center flex-1 hover:underline"
            >
              {typeof x.icon === "object" &&
              !!(x.icon as Asset).fields.file?.url ? (
                <img
                  src={(x.icon as Asset).fields.file?.url as string}
                  alt={`Logo of ${x.title}`}
                  className="w-full h-full"
                />
              ) : (
                <p className="text-4xl">{x.title}</p>
              )}
            </a>
            <div className="bg-web-tile border border-web-gray/30 -mt-[1px] flex justify-center items-center py-3 text-web-black">
              {x.tag ?? "Community Support"}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
