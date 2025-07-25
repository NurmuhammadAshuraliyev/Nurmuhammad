import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaTelegramPlane,
} from "react-icons/fa";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
export default function Socials() {
  const socialLinks = [
    {
      name: "Telegram",
      icon: <FaTelegramPlane />,
      url: "https://t.me/Nurmuhammad_800",
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
      url: "https://github.com/NurmuhammadAshuraliyev",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/nurmuhammad-ashuraliyev/",
    },
    {
      name: "Email",
      icon: <FaEnvelope />,
      url: "mailto:ashuraliyevnurmuhammad16@gmail.com",
    },
  ];
  return (
    <div className="flex gap-7 mt-20">
      {socialLinks.map(({ url, icon, name }, index) => (
        <Tooltip key={index}>
          <TooltipTrigger asChild>
            <Button size="icon" variant="outline">
              <a target="_blank" href={url}>
                {icon}
              </a>
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>{name}</p>
          </TooltipContent>
        </Tooltip>
      ))}
    </div>
  );
}
