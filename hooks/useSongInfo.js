import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { currentTrackIdState } from "../atoms/songAtom";
import { deviceIdState } from "../atoms/deviceAtom";
import useSpotify from "./useSpotify";

function useSongInfo() {
  const spotifyApi = useSpotify();
  const [currentIdTrack, setCurrentIdTrack] =
    useRecoilState(currentTrackIdState);
  const [songInfo, setSongInfo] = useState(null);
  const [deviceId, setDeviceId] = useRecoilState(deviceIdState);
  console.log("deviceId: ", deviceId);
  useEffect(() => {
    const fetchSongInfo = async () => {
      console.log("fetchsong info", songInfo);
      if (currentIdTrack) {
        const trackInfo = await fetch(
          `https://api.spotify.com/v1/tracks/${currentIdTrack}?device_id=${deviceId}`,
          {
            headers: {
              Authorization: `Bearer ${spotifyApi.getAccessToken()}`,
            },
          }
        ).then((res) => res.json());
        setSongInfo(trackInfo);
      }
    };
    fetchSongInfo();
  }, [currentIdTrack, spotifyApi]);
  return songInfo;
}

export default useSongInfo;
