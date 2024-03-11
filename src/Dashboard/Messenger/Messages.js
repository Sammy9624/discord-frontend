import React, { useState } from "react";
import MessageHeader from "./MessageHeader";
import { styled } from "@mui/system";
import { connect } from "react-redux";
import Message from "./Message";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";

const MainContainer = styled("div")({
  height: "calc(100% - 80px)",
  overflow: "auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "0 0 10px 0",
  position: "relative",
});

const ScrollTop = styled("div")({
  position: "absolute",
  bottom: "70px",
  textAlign: "center",
  left: "calc(50% + 80px)",
  margin: "auto",
  transition: "all 0.2s ease-in-out",
  zIndex: "1",
});

const ScrollBtn = styled("button")({
  backgroundColor: "transparent",
  color: "#DCDDDE",
  cursor: "pointer",
  border: "none",
});

const convertDateToHumanReadable = (date, format) => {
  const map = {
    mm: date.getMonth() + 1,
    dd: date.getDate(),
    yy: date.getFullYear().toString().slice(-2),
    yyyy: date.getFullYear(),
  };

  return format.replace(/mm|dd|yy|yyy/gi, (matched) => map[matched]);
};

const Messages = ({ chosenChatDetails, message }) => {
  const [scrolled, setScrolled] = useState(null);

  const mainContainer = document.getElementById("main-container");
  mainContainer?.addEventListener("scroll", (value) => {
    setScrolled(mainContainer.scrollTop);
  });

  const scrollToTop = () => {
    mainContainer.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {scrolled > 200 && (
        <ScrollTop>
          <ScrollBtn onClick={scrollToTop}>
            <KeyboardDoubleArrowUpIcon />
          </ScrollBtn>
        </ScrollTop>
      )}
      <MainContainer id="main-container">
        <MessageHeader name={chosenChatDetails?.name} />
        {message?.map((msg, index) => {
          const sameAuthor =
            index > 0 &&
            message[index]?.author?._id === message[index - 1]?.author?._id;

          const sameDay =
            index > 0 &&
            convertDateToHumanReadable(new Date(msg.date), "dd/mm/yy") ===
              convertDateToHumanReadable(
                new Date(message[index - 1].date),
                "dd/mm/yy"
              );

          return (
            <Message
              key={msg._id}
              content={msg.content}
              username={msg.author.username}
              sameAuthor={sameAuthor}
              date={msg.date}
              sameDay={sameDay}
            />
          );
        })}
      </MainContainer>
    </>
  );
};

const mapStoreToProps = ({ chat }) => {
  return {
    ...chat,
  };
};

export default connect(mapStoreToProps)(Messages);
