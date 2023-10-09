export interface Notion {
  object: string;
  id: string;
  created_time: string;
  last_edited_time: string;
  created_by: Createdby;
  last_edited_by: Createdby;
  cover: Cover;
  icon?: any;
  parent: Parent;
  archived: boolean;
  properties: Properties;
  url: string;
  public_url: string;
}

interface Properties {
  Author: Author;
  Type: Type;
  HeadTitle: HeadTitle;
  'Creation Time': CreationTime;
  Host: Host;
}

interface Host {
  id: string;
  type: string;
  people: any[];
}

interface CreationTime {
  id: string;
  type: string;
  date: Date;
}

interface Date {
  start: string;
  end?: any;
  time_zone?: any;
}

interface HeadTitle {
  id: string;
  type: string;
  title: Title[];
}

interface Title {
  type: string;
  text: Text;
  annotations: Annotations;
  plain_text: string;
  href?: any;
}

interface Annotations {
  bold: boolean;
  italic: boolean;
  strikethrough: boolean;
  underline: boolean;
  code: boolean;
  color: string;
}

interface Text {
  content: string;
  link?: any;
}

export interface Type {
  id: string;
  type: string;
  multi_select: Multiselect[];
}

interface Multiselect {
  id: string;
  name: string;
  color: string;
}

interface Author {
  id: string;
  type: string;
  rich_text: any[];
}

interface Parent {
  type: string;
  database_id: string;
}

interface Cover {
  type: string;
  file: File;
  external?: File
}

interface File {
  url: string;
  expiry_time: string;
}

interface Createdby {
  object: string;
  id: string;
}