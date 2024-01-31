"use client";

import { useOthers, useSelf } from "@/liveblocks.config";
import UserAvatar from "./user-avatar";
import { connectionIdToColor } from "@/lib/utils";

const MAX_PARTICIPANTS = 2;

const Participants = () => {
  const users = useOthers();
  const currentUser = useSelf();

  const hasMoreUser = users.length > MAX_PARTICIPANTS;

  return (
    <div className=" absolute h-12 top-2 right-2 bg-white rounded-md p-3 flex items-center shadow-md ">
      <div className="flex gap-x-2">
        {users.slice(0, MAX_PARTICIPANTS).map(({ connectionId, info }) => {
          return (
            <UserAvatar
              borderColor={connectionIdToColor(connectionId)}
              key={connectionId}
              src={info?.picture}
              name={info?.name}
              fallback={info?.name?.charAt(0) || "A"}
            />
          );
        })}
        {currentUser && (
          <UserAvatar
            borderColor={connectionIdToColor(currentUser.connectionId)}
            src={currentUser.info?.picture}
            name={`${currentUser.info?.name} (You)`}
            fallback={currentUser.info?.name?.charAt(0)}
          />
        )}
        {hasMoreUser && (
          <UserAvatar
            name={`${users.length - MAX_PARTICIPANTS} more`}
            fallback={`+${users.length - MAX_PARTICIPANTS}`}
          />
        )}
      </div>
    </div>
  );
};

export const ParticipantsSkeleton = () => {
  return (
    <div className=" absolute h-12 top-2 right-2 bg-white rounded-md p-3 flex items-center shadow-md w-[100px] " />
  );
};

export default Participants;
