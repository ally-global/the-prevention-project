import Text from "@/components/Text";

const NumberCircle = ({
  number,
  color,
  backgroundColor,
}: {
  number: number;
  color: string;
  backgroundColor: string;
}) => {
  return (
    <Text
      variant="h4"
      sx={{
        width: { xs: "48px", sm: "48px", md: "56px" },
        height: { xs: "48px", sm: "48px", md: "56px" },
        borderRadius: "28px",
        backgroundColor,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      color={color}
    >
      {number}
    </Text>
  );
};

export default NumberCircle;
