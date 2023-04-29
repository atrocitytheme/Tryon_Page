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
        <p className="ml-2 font-serif text-gray-500">
          Everything&apos;s Virtual!
        </p>
      </div>
      <div
        className={`mt-32 mb-32 grid text-center lg:mb-0 lg:grid-cols-${
          contactClicked ? "2" : "3"
        } md:grid-cols-2 lg:text-left`}
      >
        {aboutClicked ? (
          <></>
        ) : (
          <ClickableCard
            title="What's Nliolo?"
            description="Our mission, our vision, and our values"
            onclick={(state, action) => {
              setAboutClicked(true);
              setTimeout(() => {
                aboutRef.current!.scrollIntoView({
                  behavior: "smooth",
                  block: "nearest",
                });
              });
            }}
          ></ClickableCard>
        )}
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
        className={`h-screen transition-transform mt-20 focus:shadow-blue focus:outline-none ${
          aboutClicked
            ? "block transform-translate-y-full"
            : "hidden transform-none"
        }`}
        ref={aboutRef}
      >
        <div className="h-2/3 grid">
          <h2 className="text-4xl font-serif tracking-wider text-center text-gray-800">
            Nliolo: Revolutionizing the virtual experience with Generative AI
          </h2>
          <p className="font-serif tracking-wider">
            Nliolo is a generative AI company that provides cutting-edge
            solutions for various industries. Its main focus is on try-on
            models, which allow customers to see how clothes and accessories
            will look on them before making a purchase. In addition to try-on
            models, Nliolo also offers game image generation, which enables
            developers to create realistic in-game characters and assets.
            Nliolo&apos; goal is to provide a personalized and enjoyable
            experience for customers and developers. By using generative AI
            technology, customers can try on different styles and sizes without
            leaving their homes, saving them time and money. Nliolo&apos; try-on
            models benefit retailers by reducing return rates and increasing
            customer satisfaction. On the other hand, game developers can use
            Nliolo&apos; game image generation to create their own characters
            and assets.
          </p>
        </div>
      </div>
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
            description="Generated Model (direct try on)"
            img="/sample1.png"
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
            description="Generated try-on model (Generation)"
            img="/sample2.png"
          ></BaseImageCard>
        </div>
        <div className="grid lg:text-left sm:grid-cols-1 lg:grid-cols-2 gap-x-40 sm:gap-x-4">
          <BaseImageCard
            title="Pixel Game Graph 1"
            description="Game Pixel 1"
            img="/sample3.png"
          ></BaseImageCard>
          <BaseImageCard
            title="Pixel Game Graph 2"
            description="Game Pixel 2"
            img="/sample4.png"
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
