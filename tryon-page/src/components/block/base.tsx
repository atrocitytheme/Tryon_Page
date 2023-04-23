import { ReactNode } from "react";
import Image from "next/image";
export const BaseBlock: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div>
      {children}
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered By{" "}
            <Image
              src="/nliolo.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export const ReturnableBlock: React.FC<> = (props) => {};
