import * as contentful from "contentful";
import { useEffect, useState } from "react";

export const contentfulClient = contentful.createClient({
  space: process.env.GATSBY_CONTENTFUL_SPACE!,
  accessToken: process.env.GATSBY_CONTENTFUL_KEY!,
});

export type PartnerSkeleton = {
  contentTypeId: "partners";
  fields: {
    icon: contentful.EntryFieldTypes.AssetLink;
    link: contentful.EntryFieldTypes.Text;
    title: contentful.EntryFieldTypes.Text;
    tag: contentful.EntryFieldTypes.Text;
  };
};

export type EventSkeleton = {
  contentTypeId: "events";
  fields: {
    name: contentful.EntryFieldTypes.Text;
    slug: contentful.EntryFieldTypes.Text;
    startDate: contentful.EntryFieldTypes.Text;
    endDate: contentful.EntryFieldTypes.Text;
    cover: contentful.EntryFieldTypes.AssetLink;
    link: contentful.EntryFieldTypes.Text;
    partners: contentful.EntryFieldTypes.EntryResourceLink<PartnerSkeleton>[];
    theme: contentful.EntryFieldTypes.Text;
    location: contentful.EntryFieldTypes.Text;
  };
};

export type Event = contentful.Entry<EventSkeleton, undefined, string>;
export type Partner = contentful.Entry<PartnerSkeleton, undefined, string>;

export const useEvent = (slug?: string) => {
  const [event, setEvent] = useState<Event>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      if (loading || !slug) {
        return;
      }
      setLoading(true);
      try {
        const eventFromContentful = await contentfulClient
          .getEntries<EventSkeleton>({
            content_type: "events",
            "fields.slug[match]": slug,
          })
          .then((response) => response.items.at(0))
          .catch(console.error);

        if (!eventFromContentful) {
          return;
        }

        setEvent(eventFromContentful);
      } catch (error) {
        console.log("🚀 ~ error:", error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return {
    data: event,
    loading,
  };
};
