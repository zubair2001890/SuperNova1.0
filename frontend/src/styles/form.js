export const title = {
  fontFamily: "Montserrat",
  fontSize: "1.25rem",
  fontWeight: 600,
  display: "inline-block",
  letterSpacing: "-0.06px",
};

export const iconOffset = "0.8125rem";
export const iconSize = "4.25rem";

export const icon = {
  position: "absolute",
  bottom: `calc( -1 * ${iconSize} + ${iconSize} - ${iconOffset})`,
  right: iconOffset,
  width: iconSize,
  height: iconSize,
  border: "1px solid #707070",
  backgroundColor: "white",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};
