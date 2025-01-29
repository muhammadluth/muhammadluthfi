
export type ProjectsUIContextProps = {
}

interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface Meta {
  pagination: Pagination;
}

interface ImageData {
  id: number;
  documentId: string;
  url: string;
  formats: ImageDataFormats;
}

interface ImageDataFormats {
  large: ImageDataDetail
  small: ImageDataDetail
  medium: ImageDataDetail
  thumbnail: ImageDataDetail
}


interface ImageDataDetail {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: string | null;
  size: number;
  width: number;
  height: number;
  sizeInBytes: number;
}


export interface ProjectData {
  id: number;
  documentId: string;
  slug: string;
  title: string;
  description: string | null;
  overview: string | null;
  images: ImageData[];
  link_demo: string;
  link_repository: string;
  stacks: string[] | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

