import SpotifyWebApi from "spotify-web-api-node";

const scopes = [
  "user-read-email",
  "playlist-read-private",
  "playlist-read-collaborative",
  "streaming",
  "user-read-private",
  "user-library-read",
  "user-top-read",
  "user-read-playback-state",
  "user-modify-playback-state",
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-follow-read",
];

const clientId = process.env.NEXT_PUBLIC_CLIENT_ID;
const LOGIN_URL = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=code&redirect_uri=https://spotify-clone-m5uk8or0c-ts-projects-8171648b.vercel.app/api/auth/callback/spotify&scope=${scopes.join(
  "%20"
)}`;

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
  clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
});

export default spotifyApi;

export { LOGIN_URL };
