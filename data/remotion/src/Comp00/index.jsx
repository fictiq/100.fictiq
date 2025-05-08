import { spring } from "remotion";
import {
  AbsoluteFill,
  interpolate,
  Sequence,
  Series,
  useCurrentFrame,
  useVideoConfig,
  Loop,
} from "remotion";

import { Logo } from "./Logo";
import { Subtitle } from "./Subtitle";
import { Title } from "./Title";
import { Toon } from "./Toon";
import { FadeIn } from "./FadeIn";

export const Comp00 = ({ titleText, titleColor }) => {
  const frame = useCurrentFrame();
  const { durationInFrames, fps } = useVideoConfig();

  // Animate from 0 to 1 after 25 frames
  const logoTranslationProgress = spring({
    frame: frame - 25,
    fps,
    config: {
      damping: 100,
    },
  });

  // Move the logo up by 150 pixels once the transition starts
  const logoTranslation = interpolate(
    logoTranslationProgress,
    [0, 1],
    [0, -150],
  );

  // Fade out the animation at the end
  const opacity = interpolate(
    frame,
    [durationInFrames - 25, durationInFrames - 15],
    [1, 0],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    },
  );

  titleText = "Now I tell you";

  // A <AbsoluteFill> is just a absolutely positioned <div>!
  return (

    <Series>

      <Series.Sequence durationInFrames={100}>

        <AbsoluteFill style={{ backgroundColor: "white" }}>
          <FadeIn />
        </AbsoluteFill>

      </Series.Sequence>

      <Series.Sequence durationInFrames={10000}>

        <AbsoluteFill style={{ backgroundColor: "white" }}>
          <Loop durationInFrames={50}>
            <Toon />
          </Loop>
        </AbsoluteFill>

      </Series.Sequence>

    </Series>











  );
};
