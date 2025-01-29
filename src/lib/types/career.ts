
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



export interface CareerData {
  id: number;
  documentId: string;
  slug: string;
  position: string;
  company: string;
  company_logo: ImageData;
  company_website: string;
  company_location: string;
  industry: string;
  work_system: string;
  employee_status: string;
  start_period: string;
  end_period: string;
  experience: string;
}

