import { ReactNode } from "react";
import { ArrowRightIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const BentoGrid = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-3 gap-4",
        className,
      )}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
}: {
  name: string;
  className: string;
  background: ReactNode;
  Icon?: React.ElementType;
  description: string;
  href: string;
  cta: string;
}) => (
  <div
    key={name}
    className={cn(
      "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl",
      // Dark mode styles (primary)
      "bg-[#09090b] border border-white/5",
      "hover:border-blue-300/30 hover:shadow-[0_0_40px_-10px_rgba(147,197,253,0.2)] transition-all duration-500",
      className,
    )}
  >
    <div>{background}</div>
    {name && (
      <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
        {Icon && (
          <div className="w-12 h-12 rounded-full bg-blue-400/10 flex items-center justify-center mb-2 group-hover:bg-blue-400/20 transition-colors">
            <Icon className="h-6 w-6 origin-left transform-gpu text-blue-400 transition-all duration-300 ease-in-out" />
          </div>
        )}
        <h3 className="text-xl font-semibold text-white">
          {name}
        </h3>
        <p className="max-w-lg text-neutral-400">{description}</p>
      </div>
    )}

    {cta && (
      <div
        className={cn(
          "pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100",
        )}
      >
        <a href={href} className="pointer-events-auto flex items-center gap-2 text-sm font-medium text-blue-300 hover:text-blue-200 transition-colors">
            {cta}
            <ArrowRightIcon className="ml-2 h-4 w-4" />
        </a>
      </div>
    )}
    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-blue-400/[.03]" />
    
    {/* Striped Border Overlay (Simulated) */}
    <div className="absolute inset-0 border border-white/5 rounded-xl pointer-events-none z-20" style={{ 
       backgroundImage: 'linear-gradient(135deg, rgba(255,255,255,0.03) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.03) 50%, rgba(255,255,255,0.03) 75%, transparent 75%, transparent)',
       backgroundSize: '4px 4px'
    }} />
  </div>
);

export { BentoCard, BentoGrid };
