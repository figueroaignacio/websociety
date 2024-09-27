import { Facebook, LinkedIn, Whatsapp, X } from "../components/social-icons";

export const socialPlatforms = [
  {
    name: "X",
    urlBase: "https://x.com/intent/post?url=",
    icon: X,
  },
  {
    name: "Facebook",
    urlBase: "https://www.facebook.com/sharer/sharer.php?u=",
    icon: Facebook,
  },
  {
    name: "LinkedIn",
    urlBase: "https://www.linkedin.com/sharing/share-offsite/?url=",
    icon: LinkedIn,
  },
  {
    name: "WhatsApp",
    urlBase: "https://api.whatsapp.com/send?text=",
    icon: Whatsapp,
  },
];
