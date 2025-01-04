declare module "react-image-magnify" {
  import React from "react";

  export interface ReactImageMagnifyProps {
    smallImage: {
      src: string;
      alt?: string;
      isFluidWidth?: boolean;
      width?: number;
      height?: number;
    };
    largeImage: {
      src: string;
      width: number;
      height: number;
    };
    enlargedImagePosition?: "over" | "beside";
    isHintEnabled?: boolean;
    hintTextMouse?: string;
    hintTextTouch?: string;
    fadeDurationInMs?: number;
    hoverDelayInMs?: number;
    hoverOffDelayInMs?: number;
    lensStyle?: React.CSSProperties;
  }

  const ReactImageMagnify: React.FC<ReactImageMagnifyProps>;

  export default ReactImageMagnify;
}
