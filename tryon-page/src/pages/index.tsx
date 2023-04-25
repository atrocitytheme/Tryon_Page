import Image from "next/image";
import { Inter } from "next/font/google";
import { BaseCard, ClickableCard, BaseImageCard } from "@/components/block";
import { ContactForm } from "@/components/form";
import { useRef, useState } from "react";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [contactClicked, setContactClicked] = useState(false);
  const [artifactClicked, setArtifactClicked] = useState(false);
  const [aboutClicked, setAboutClicked] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const contactRef = useRef<HTMLDivElement>(null);
  const artifactRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
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
        {artifactClicked ? (
          <></>
        ) : (
          <ClickableCard
            title="Samples"
            description="See our past work!"
            target="_self"
            onclick={(state, action) => {
              setArtifactClicked(true);
              setTimeout(() => {
                artifactRef.current!.scrollIntoView({
                  behavior: "smooth",
                  block: "nearest",
                });
              }, 0);
            }}
          ></ClickableCard>
        )}
        {contactClicked ? (
          <></>
        ) : (
          <ClickableCard
            title="Get a Quote"
            description="Get a quote from the developers"
            target="_self"
            onclick={(state, action) => {
              setContactClicked(true);
              setTimeout(() => {
                // to make sure ref exists
                contactRef.current!.scrollIntoView({
                  behavior: "smooth",
                  block: "nearest",
                });
              }, 0);
            }}
          ></ClickableCard>
        )}
      </div>
      <div
        className={`grid lg:text-left sm:grid-cols-1 lg:grid-cols-3 h-screen transition-transform mt-20 focus:shadow-blue focus:outline-none ${
          aboutClicked
            ? "block transform-translate-y-full"
            : "hidden transform-none"
        }`}
        ref={aboutRef}
      ></div>
      <div
        className={`min-h-screen transition-transform mt-20 focus:shadow-blue focus:outline-none ${
          artifactClicked
            ? "block transform-translate-y-full"
            : "hidden transform-none"
        }`}
        ref={artifactRef}
      >
        <div className="grid lg:text-left sm:grid-cols-1 lg:grid-cols-2 gap-x-40 sm:gap-x-4">
          <BaseImageCard
            title="Original Cloth"
            description="Original cloth (direct try on)"
            img="/origin_sample_1.png"
          ></BaseImageCard>
          <BaseImageCard
            title="Generated try-on model"
            description="TODO: add description"
            img="/sample_1.png"
          ></BaseImageCard>
        </div>
        <div className="grid lg:text-left sm:grid-cols-1 lg:grid-cols-2 gap-x-40 sm:gap-x-4">
          <BaseImageCard
            title="Original Cloth"
            description="Original cloth (Improvising styles)"
            img="/origin_sample_2.png"
          ></BaseImageCard>
          <BaseImageCard
            title="Generated try-on model"
            description="TODO: add description"
            img="/sample_2.png"
          ></BaseImageCard>
        </div>
      </div>
      <div
        className={` flex justify-center h-screen transition-transform mt-20 focus:shadow-blue focus:outline-none ${
          contactClicked
            ? "block transform-translate-y-full"
            : "hidden transform-none"
        }`}
        ref={contactRef}
      >
        {emailSent ? (
          <p className=" font-semibold text-blue-500">
            Thank you for your interest! Our team will touch base once you send
            your email!
          </p>
        ) : (
          <>
            <ContactForm
              onSubmit={(values, sendEmail) => {
                sendEmail({ ...values });
                setEmailSent(true);
              }}
            />
          </>
        )}
      </div>
    </main>
  );
}
