export function HeroBg() {
  return (
    <div className="w-full h-full -z-10 absolute flex flex-row justify-between left-0 lg:h-full lg:max-w-7xl lg:px-0 mx-auto px-6 right-0">
      <div className="w-full h-full border-border border-x border-dashed"></div>
      <div className="w-full h-full border-border border-x border-dashed"></div>
      <div className="w-full h-full border-border border-x border-dashed hidden md:block"></div>
    </div>
  );
}
