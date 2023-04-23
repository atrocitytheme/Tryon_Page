import { MusicAsset } from "@/components/common";

interface AudioFill {
  src: string;
}

export const BaseAudio: React.FC<MusicAsset> = (props) => {
  const { src } = props;
  return (
    <>
      <blockquote
        className="tiktok-embed"
        cite={src}
        data-music-id="Purple-Front-6992007585649920002"
        data-embed-from="embed"
        data-embed-type="music"
        style={{
          maxWidth: "780px",
          minWidth: "288px",
        }}
      >
        <section>
          <a target="_blank" title="♬ Purple Front - DJ BAI" href={src}>
            ♬ Purple Front - DJ BAI
          </a>{" "}
        </section>
      </blockquote>
      {/* <script async src="https://www.tiktok.com/embed.js"></script> */}
    </>
  );
};
