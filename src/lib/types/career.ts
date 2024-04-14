
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
  attributes: {
    url: string;
  }
}


export interface CareerData {
  id: number;
  attributes: {
    slug: string;
    position: string;
    company: string;
    company_logo: {
      data: ImageData;
    };
    company_website: string;
    company_location: string;
    industry: string;
    work_system: string;
    employee_status: string;
    start_period: string;
    end_period: string
  };
}

