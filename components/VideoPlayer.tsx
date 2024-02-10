/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable react/jsx-no-comment-textnodes */
"use client";

const VideoPlayer = ({
  vimeoId,
  autoplay,
  muted,
}: {
  vimeoId: string;
  autoplay?: boolean;
  muted?: boolean;
}) => {
  return (
    <>
      <div
        style={{
          padding: "56.25% 0 0 0",
          position: "relative",
        }}
      >
        <iframe
          src={`https://player.vimeo.com/video/${vimeoId}?muted=${
            muted ? 1 : 0
          }&autoplay=${autoplay ? 1 : 0}`}
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            borderRadius: "16px",
          }}
        ></iframe>
      </div>
      <script src="https://player.vimeo.com/api/player.js"></script>
    </>
  );
};

export default VideoPlayer;
