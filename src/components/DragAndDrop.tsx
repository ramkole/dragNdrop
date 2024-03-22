import { data } from "../assets";
import { useDragAndDrop } from "../hooks/useDragAndDrop";
import { FileName } from "../interfaces";
import { FolderContainer } from "./ContainerCards";

const typesHero: FileName[] = ["folderOne", "folderTwo"];

export const DragAndDrop = () => {
  const { isDragging, listItems, handleDragging, handleUpdateList } =
    useDragAndDrop(data);

  return (
    <div className="grid">
      {typesHero.map((container) => (
        <FolderContainer
          items={listItems}
          folderName={container}
          key={container}
          isDragging={isDragging}
          handleDragging={handleDragging}
          handleUpdateList={handleUpdateList}
        />
      ))}
    </div>
  );
};
