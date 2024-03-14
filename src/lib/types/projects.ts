export interface ProjectItemProps {
  id: number;
  title: string;
  description: string;
  image: string;
  link_demo?: string;
  link_github?: string;
  stacks: string;
  content?: string;
  is_show: boolean;
  is_featured: boolean;
  updated_at: Date;
}