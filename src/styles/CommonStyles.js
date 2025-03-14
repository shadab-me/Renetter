export const mainHeadingStyle = {
  fontSize: "calc(1.475rem + 2.7vw)",
  fontWeight: "700",
  marginBottom: "20px",
};

export const mainHeadingGradientStyle = {
  ...mainHeadingStyle,
  background: "linear-gradient(45deg, #086AD8 0%, #4F46E5 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
};

export const mainHeadingDarkStyle = {
  ...mainHeadingStyle,
  color: "#232323",
};

export const mainHeadingLightStyle = {
  ...mainHeadingStyle,
  color: "#ffffff",
};
