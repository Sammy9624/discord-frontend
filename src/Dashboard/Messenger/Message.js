import React from "react";
import { styled, width } from "@mui/system";
import Avatar from "../../shared/Component/Avatar";
import { Typography } from "@mui/material";
import DateDivider from "../DateDivider";
import dayjs from "dayjs";
import { connect } from "react-redux";

const style = {
  mainContainer: { width: "97%", display: "flex", marginTop: "10px" },
  paragraph: {
    padding: "10px",
    margin: "7px 0 0 0",
    wordBreak: "break-word",
    maxWidth: "300px",
    width: "fit-content",
    background:
      "linear-gradient(to left, #1f51ff, #4b51fa, #6352f4, #7553ef, #8454ea, #8558eb, #865deb, #8761ec, #7c68f2, #716ff7, #6476fb, #567cff);",
    borderRadius: "10px",
  },
};

const MainContainerDiff = styled("div")({
  ...style.mainContainer,
});

const MainContainerSame = styled("div")({
  ...style.mainContainer,
  justifyContent: "end",
});

const AvatarContainer = styled("div")({
  width: "70px",
});

const MessageContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
});

const MessageContentSame = styled("p")({
  color: "#DCDDDE",
  ...style.paragraph,
});

const MessageContentSameDiff = styled("p")({
  color: "#DCDDDE",
  ...style.paragraph,
});

const SameAuthorMessageContentSameUser = styled("div")({
  width: "97%",
  color: "#DCDDDE",
  display: "flex",
  justifyContent: "end",
});

const SameAuthorMessageContentDiffUser = styled("div")({
  width: "97%",
  color: "#DCDDDE",
});

const SameAuthorMessageTextSameUser = styled("p")({
  ...style.paragraph,
});

const SameAuthorMessageTextDiffUser = styled("p")({
  ...style.paragraph,
  marginLeft: "70px",
});

const SingleSameUserMsg = styled("div")({
  display: "flex",
  justifyContent: "end",
});

const Message = ({ content, username, sameAuthor, date, sameDay, name }) => {

  const innerBody = (
    <>
      <AvatarContainer>
        <Avatar username={username} />
      </AvatarContainer>
      <MessageContainer>
        <Typography style={{ fontSize: "16px", color: "white" }}>
          {username}{" "}
          <span style={{ fontSize: "12px", color: "#72767d" }}>
            {dayjs(date).format("DD/MM/YYYY")}
          </span>
        </Typography>
        {username === name ? (
          <SingleSameUserMsg>
            <MessageContentSame>{content}</MessageContentSame>
          </SingleSameUserMsg>
        ) : (
          <MessageContentSameDiff>{content}</MessageContentSameDiff>
        )}
      </MessageContainer>
    </>
  );

  if (sameAuthor && sameDay) {
    return (
      <>
        {username === name ? (
          <SameAuthorMessageContentSameUser>
            <SameAuthorMessageTextSameUser>
              {content}
            </SameAuthorMessageTextSameUser>
          </SameAuthorMessageContentSameUser>
        ) : (
          <SameAuthorMessageContentDiffUser>
            <SameAuthorMessageTextDiffUser>
              {content}
            </SameAuthorMessageTextDiffUser>
          </SameAuthorMessageContentDiffUser>
        )}
      </>
    );
  }

  return (
    <>
      {!sameDay && <DateDivider date={date} />}
      {username === name ? (
        <MainContainerSame>{innerBody}</MainContainerSame>
      ) : (
        <MainContainerDiff>{innerBody}</MainContainerDiff>
      )}
    </>
  );
};

const mapStoreToProps = ({ auth }) => {
  return {
    name: auth?.userDetails?.username,
  };
};

export default connect(mapStoreToProps)(Message);
