"use client";

import EmptyBoards from "./empty-boards";
import EmptyFavourties from "./empty-favourites";
import EmptySearch from "./empty-search";

interface BoardListProps {
  orgId: string;
  query: {
    search?: string;
    favourites?: string;
  };
}

const BoardList = ({ orgId, query }: BoardListProps) => {
  const data = [];

  if (!data?.length && query.search) {
    return <EmptySearch />;
  }

  if (!data?.length && query.favourites) {
    return <EmptyFavourties />;
  }

  if (!data?.length) {
    return <EmptyBoards />;
  }

  return <div></div>;
};

export default BoardList;
