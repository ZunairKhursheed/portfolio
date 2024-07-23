interface NextImageProps {
  src?: string;
  width?: number;
  height?: number;
  alt?: string;
  priority?: boolean;
  testid?: string;
  fallbackSrc?: string;
  fill?: boolean;
  decoding?: "async" | "sync" | "auto";
  claz?: string;
}
export default NextImageProps;
