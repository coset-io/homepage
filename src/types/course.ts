export interface Resource {
  title: string;
  url: string;
}

export interface Assignment {
  title: string;
  description: string;
  url: string;
}

export interface Sponsor {
  name: string;
  logo: string;
  alt: string;
}

export interface Episode {
  title: string;
  speaker: string;
  videoLink: string;
  slideLink?: string;
  resources: Resource[];
}

export interface Part {
  title: string;
  episodes: Episode[];
  assignments?: Assignment[];
  supplementaryResources?: Resource[];
}

export interface CourseData {
  title: string;
  description: string;
  githubBaseUrl: string;
  discussionUrl: string;
  parts: Part[];
  sponsors?: Sponsor[];
  generalSupplementaryResources?: Resource[];
}

export interface CourseProps {
  courseData: CourseData;
  navigationItems: any[];
  footerConfig: any;
} 