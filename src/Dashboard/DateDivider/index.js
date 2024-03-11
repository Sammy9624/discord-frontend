import React from "react";
import { styled } from "@mui/system";
import dayjs from "dayjs";

const Line = styled("div")({
  width: "97%",
  textAlign: "center",
  borderBottom: "1px solid #DCDDDE",
  lineHeight: "0.1em",
  marginTop: "20px",
  color: "#DCDDDE",
});

const TextContainer = styled("span")({
  background: "#36393f",
  padding: "0 2px",
});

const DateDivider = ({ date }) => {
  const dateDifference = () => {
    const date1 = dayjs(date).format("YYYY-MM-DD");
    const date2 = dayjs();
    const day = date2.diff(dayjs(date1), "day");
    let dateString;
    switch (day) {
      case 0:
        dateString = "Today";
        break;
      case 1:
        dateString = "Yesterday";
        break;
      default:
        dateString = dayjs(date).format("DD/MM/YYYY");
    }
    return dateString;
  };

  return (
    <Line>
      <TextContainer>{dateDifference()}</TextContainer>
    </Line>
  );
};

export default DateDivider;
