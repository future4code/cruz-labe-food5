import React from "react";
import { CircularProgress } from "@material-ui/core";
import { LoadingContainer } from "./styledLoading";

export default function Loading() {
  return (
    <LoadingContainer>
      <CircularProgress />
    </LoadingContainer>
  );
}
