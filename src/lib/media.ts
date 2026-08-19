import brickWorkersCartImage from "../../assets/site-media/brick-workers-cart.jpg";
import brickYardKilnImage from "../../assets/site-media/brick-yard-kiln.jpg";
import greyBrickYardImage from "../../assets/site-media/grey-brick-yard.jpg";
import hollowBlockYardImage from "../../assets/site-media/hollow-block-yard.jpg";
import redBrickStackImage from "../../assets/site-media/red-brick-stack-pro.jpg";
import redBrickWallImage from "../../assets/site-media/red-brick-wall.jpg";
import rusticBrickWallImage from "../../assets/site-media/exposed-face-bricks-pro.jpg";
import wireCutBricksImage from "../../assets/site-media/wire-cut-bricks.jpg";
import luxmiBricksVideo from "../../assets/Luxmi Bricks.mp4";

const realGalleryImageModules = import.meta.glob("../../assets/Gallery/*.{jpg,jpeg,png,webp}", {
  eager: true,
  import: "default"
}) as Record<string, string>;

const sortGalleryPaths = (leftPath: string, rightPath: string) =>
  leftPath.localeCompare(rightPath, undefined, {
    numeric: true,
    sensitivity: "base"
  });

export const REAL_GALLERY_MEDIA = Object.entries(realGalleryImageModules)
  .sort(([leftPath], [rightPath]) => sortGalleryPaths(leftPath, rightPath))
  .map(([path, src], index) => ({
    id: `real-gallery-${index + 1}`,
    filename: path.split("/").pop() ?? `gallery-${index + 1}`,
    src
  }));

export const SITE_MEDIA = {
  aboutImage: brickYardKilnImage,
  factoryVideoPoster: brickWorkersCartImage,
  factoryVideoSrc: luxmiBricksVideo,
  products: {
    redClay: redBrickStackImage,
    flyAsh: greyBrickYardImage,
    exposedFace: rusticBrickWallImage,
    wireCut: wireCutBricksImage,
    hollowBricks: hollowBlockYardImage,
    claddingTiles: redBrickWallImage
  },
  gallery: REAL_GALLERY_MEDIA
} as const;
