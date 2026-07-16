"use client";

import React, { useEffect, useRef } from "react";

interface LottiePlayerProps {
  src: string;
  autoplay?: boolean;
  loop?: boolean;
  controls?: boolean;
  style?: React.CSSProperties;
  className?: string;
  speed?: number;
}

export default function LottiePlayer({
  src,
  autoplay = true,
  loop = true,
  controls = false,
  style,
  className,
  speed = 1,
}: LottiePlayerProps) {
  const playerRef = useRef<any>(null);

  useEffect(() => {
    if (playerRef.current) {
      const handleReady = () => {
        playerRef.current.setSpeed(speed);
      };
      playerRef.current.addEventListener("ready", handleReady);
      return () => {
        if (playerRef.current) {
          playerRef.current.removeEventListener("ready", handleReady);
        }
      };
    }
  }, [speed]);

  return (
    // @ts-ignore
    <lottie-player
      ref={playerRef}
      src={src}
      background="transparent"
      style={style}
      className={className}
      loop={loop ? true : undefined}
      autoplay={autoplay ? true : undefined}
      controls={controls ? true : undefined}
    />
  );
}
