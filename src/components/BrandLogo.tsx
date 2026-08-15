import primaryLogo from "../../assets/luxmi_logo_primary.svg";
import darkLogo from "../../assets/luxmi_logo_dark.svg";
import horizontalLogo from "../../assets/luxmi_logo_horizontal.svg";
import horizontalDarkLogo from "../../assets/luxmi_logo_horizontal_dark.svg";
import iconLogo from "../../assets/luxmi_icon_square.svg";

const logoSources = {
  primary: primaryLogo,
  dark: darkLogo,
  horizontal: horizontalLogo,
  horizontalDark: horizontalDarkLogo,
  icon: iconLogo
} as const;

type LogoVariant = keyof typeof logoSources;

interface BrandLogoProps {
  variant?: LogoVariant;
  alt?: string;
  className?: string;
}

export default function BrandLogo({
  variant = "horizontalDark",
  alt = "Luxmi Brick Field logo",
  className
}: BrandLogoProps) {
  return (
    <img
      src={logoSources[variant]}
      alt={alt}
      className={className}
      decoding="async"
    />
  );
}
