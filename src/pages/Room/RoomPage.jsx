import React, { useEffect, useRef } from "react";
import { useLocation, useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

const RoomPage = () => {
  const { roomId } = useParams();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const name = params.get("name");
  const containerRef = useRef(null);

  useEffect(() => {
    const myMeeting = async (element) => {
      const appID = 1490941069;
      const serverSecret = "fef7ca32d465a8719c1dd3380ab6ddb2";
      const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId, Date.now().toString(), name);
      const zc = ZegoUIKitPrebuilt.create(kitToken);
      const currentHost = window.location.origin;

      // Append the name as a query parameter in the share link
      const shareLink = `${currentHost}/pages/room/${roomId}?name=${encodeURIComponent(name)}`;

      zc.joinRoom({
        container: element,
        sharedLinks: [{
          name: 'Copy Link',
          url: shareLink
        }],
        scenario: {
          mode: ZegoUIKitPrebuilt.OneONoneCall,
        },
        showScreenSharingButton: true,
        showAudioVideoSettingsButton: true,
        showLeaveRoomConfirmDialog: true,
        showMyCameraToggleButton: true,
        showMyMicrophoneToggleButton: true,
        showInviteToCohostButton: true,
        showTextChat: true,
        showRoomTimer: true
      });
    };

    if (containerRef.current) {
      myMeeting(containerRef.current);
    }
  }, [roomId, name]);

  return (
    <div>
      <div ref={containerRef} />
    </div>
  );
};

export default RoomPage;
