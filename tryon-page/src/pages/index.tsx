import Image from "next/image";
import { Inter } from "next/font/google";
import { BaseCard, ClickableCard } from "@/components/block";
import { ContactForm } from "@/components/form";
import { useRef, useState } from "react";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [contactClicked, setContactClicked] = useState(false);
  const contactRef = useRef(null);
  return (
    <main className="flex min-h-screen flex-col items-center justify-evenly p-12">
      <div className="relative flex place-items-center before:absolute before:h-[200px] before:w-[380px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/nliolo.svg"
          alt="Nliolo Logo"
          width={180}
          height={37}
          priority
        />
        <p className="ml-2 font-serif text-gray-500">Everything's Virtual!</p>
      </div>
      <div
        className={`mt-32 mb-32 grid text-center lg:mb-0 lg:grid-cols-${
          contactClicked ? "2" : "3"
        } md:grid-cols-2 lg:text-left`}
      >
        <BaseCard
          title="What's Nliolo?"
          description="Our mission, our vision, and our values"
          target="_self"
        ></BaseCard>
        <BaseCard title="Samples" description="See our past work!"></BaseCard>
        {contactClicked ? (
          <></>
        ) : (
          <ClickableCard
            title="Get a Quote"
            description="Get a quote from the developers"
            target="_self"
            onclick={(state, action) => {
              setContactClicked(true);
              contactRef.current!.focus();
            }}
          ></ClickableCard>
        )}
      </div>
      <div
        className={` flex justify-center h-screen transition-transform mt-20 focus:shadow-blue focus:outline-none ${
          contactClicked
            ? "block transform-translate-y-full"
            : "hidden transform-none"
        }`}
        ref={contactRef}
      >
        <ContactForm />
      </div>
    </main>
  );
}
