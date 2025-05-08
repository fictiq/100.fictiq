import "./index.css";
import { Composition } from "remotion";
import { Comp00 } from "./Comp00";
import { Logo } from "./Comp00/Logo";

// Each <Composition> is an entry in the sidebar!

export const RemotionRoot = () => {
  return (
    <>
      <Composition
        // You can take the "id" to render a video:
        // npx remotion render src/index.jsx <id> out/video.mp4
        id="Comp00"
        component={Comp00}
        durationInFrames={64800}
        fps={12}
        width={1920}
        height={1080}
        // You can override these props for each render:
        // https://www.remotion.dev/docs/parametrized-rendering
        defaultProps={{
          titleText: "Papa Pete",
          titleColor: "red",
        }}
      />
    </>
  );
};
