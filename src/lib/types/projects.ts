
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
  attributes: {
    url: string;
  }
}


export interface ProjectData {
  id: number;
  attributes: {
    slug: string;
    title: string;
    description: string | null;
    images: {
      data: ImageData[];
    };
    link_demo: string;
    link_repository: string;
    stacks: string[] | null;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

