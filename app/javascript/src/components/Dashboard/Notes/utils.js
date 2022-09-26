import dayjs from "dayjs";

export const formatDateAndTime = date => dayjs(date).format("dddd, hh:mmA");

export const calculateCreatedAgo = date => dayjs(date).fromNow();
