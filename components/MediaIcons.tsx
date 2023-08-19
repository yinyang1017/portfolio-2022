import { socialMediaIcons } from "../data";
import { Link } from "../types";

interface IProps {
  links: Link[];
}

export default function MediaIcons({ links }: IProps) {
  return (
    <div className="flex gap-5 items-center justify-center mt-7">
      {links.map((el: Link, id: number) => {
        const Icon =
          socialMediaIcons.find((e) => el.label === e.label)?.Icon || null;
        return (
          <a rel="noreferrer" href={el.mediaUrl} target="_blank" key={id}>
            {Icon && (
              <Icon className="text-gray-300 text-3xl h-10 w-10 transition-all duration-300 hover:text-main-orange cursor-pointer" />
            )}
          </a>
        );
      })}
    </div>
  );
}
