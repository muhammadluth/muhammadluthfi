import Link from "next/link";
import { ReactNode } from "react";
import { BsGithub as BsGithubIcon } from "react-icons/bs";
import { FiExternalLink as FiExternalLinkIcon } from "react-icons/fi";

interface ProjectLinkProps {
  title: string;
  link_demo?: string;
  link_repository?: string;
}

export default function ProjectLink({
  title,
  link_demo,
  link_repository,
}: Readonly<ProjectLinkProps>) {
  return (
    <div className="flex gap-4">
      {link_repository && (
        <LinkComponent
          title={title}
          url={link_repository}
          text="Source Code"
          icon={<BsGithubIcon size={22} />}
        />
      )}
      {link_repository && link_demo && (
        <span className="text-foreground-400">|</span>
      )}
      {link_demo && (
        <LinkComponent
          title={title}
          url={link_demo}
          text="Live Demo"
          icon={<FiExternalLinkIcon size={22} />}
        />
      )}
    </div>
  );
}

interface LinkComponentProps {
  title: string;
  url: string;
  text: string;
  icon?: ReactNode;
}
function LinkComponent({
  title,
  url,
  text,
  icon,
}: Readonly<LinkComponentProps>) {
  const eventName = `Click ${text} - Project ${title}`;
  return (
    <Link href={url} target="_blank" passHref data-umami-event={eventName}>
      <div className="flex gap-2 items-center font-medium">
        {icon}
        <span className="text-[15px] hover:text-primary transition-all duration-300">
          {text}
        </span>
      </div>
    </Link>
  );
}
