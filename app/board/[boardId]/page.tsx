import Room from "@/components/room";
import Canvas from "./_components/canvas";
import Laoding from "./_components/loading";

interface BoardIdPageProps {
  params: {
    boardId: string;
  };
}

const BoardIdPage = ({ params }: BoardIdPageProps) => {
  return (
    <Room roomId={params.boardId} fallback={<Laoding />}>
      <Canvas boardId={params.boardId} />
    </Room>
  );
};

export default BoardIdPage;
