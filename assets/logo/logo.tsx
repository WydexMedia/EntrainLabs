import type { SVGAttributes } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const Logo = (props: SVGAttributes<SVGElement>) => {
  return (
    <div className={cn("flex items-center gap-2.5", props.className)}>
      <Image 
        src="/logo.png" 
        alt="Entrain Labs" 
        width={150} 
        height={40}
        className="h-10 w-auto"
        priority
      />
    </div>
  );
};

export default Logo;
