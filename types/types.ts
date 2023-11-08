export type Method = 'get' | 'post' | 'delete' | 'update';

export enum ShowType {
  Error = "error",
  Info = "info",
  Question = "question",
  Success = "success",
  Warning = "warning",
}

export enum ShowPosition {
  Top = "top",
  TopStart = "top-start",
  TopEnd = "top-end",
  TopLeft = "top-left",
  TopRight = "top-right",
  Center = "center",
  CenterStart = "center-start",
  CenterEnd = "center-end",
  CenterLeft = "center-left",
  CenterRight = "center-right",
  Bottom = "bottom",
  BottomStart = "bottom-start",
  BottomEnd = "bottom-end",
  BottomLeft = "bottom-left",
  BottomRight = "bottom-right",
}