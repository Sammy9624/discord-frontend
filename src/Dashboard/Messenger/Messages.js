import React from "react";
import MessageHeader from "./MessageHeader";
import { styled } from "@mui/system";
import { connect } from "react-redux";
import Message from "./Message";

const MainContainer = styled("div")({
  height: "calc(100% - 80px)",
  overflow: "auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
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
  return (
    <MainContainer>
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
            date={convertDateToHumanReadable(new Date(msg.date), "dd/mm/yy")}
            sameDay={sameDay}
          />
        );
      })}
    </MainContainer>
  );
};

const mapStoreToProps = ({ chat }) => {
  return {
    ...chat,
  };
};

export default connect(mapStoreToProps)(Messages);
