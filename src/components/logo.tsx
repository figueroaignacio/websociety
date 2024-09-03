// Components
import { LinkWithTransition } from "./link-with-transition";

export function Logo() {
  return (
    <LinkWithTransition href="/" className="flex items-center gap-2">
      <svg
        width="34"
        height="34"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="200" height="200" fill="#6b21a8" rx="34" />
        <g
          fill="none"
          stroke="#ffffff"
          strokeWidth="16"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M50 100 L75 75 L50 50" />
          <path d="M150 100 L125 125 L150 150" />
          <path d="M75 150 L125 50" />
        </g>
      </svg>
      <p className="text-xs hidden lg:block">Web society</p>
    </LinkWithTransition>
  );
}
