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


export interface EducationData {
  id: number;
  attributes: {
    slug: string;
    school: string;
    school_logo: {
      data: ImageData;
    };
    school_website: string;
    school_location: string;
    major: string;
    degree: string;
    start_period: string;
    end_period: string
  };
}
