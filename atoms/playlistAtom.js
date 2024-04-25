import { atom } from "recoil";

export const playlistState = atom({
  key: "playlistState",
  default: null,
});

export const playlistIdState = atom({
  key: "playlistIdState",
  default: "0jjbxVhvIkvUhps0GWuR9r", // my current playlist
});
