// Components
import Image from "next/image";
import { Callout } from "./callout";

const useMDXComponents = (code: string) => {
  const fn = new Function(code);
  return fn({ ...Function }).default();
};

const components = {
  Image,
  Callout,
};

interface MdxProps {
  code: string;
}

export function MDXContent({ code }: MdxProps) {
  const Component = useMDXComponents(code);

  return <Component components={components} />;
}
