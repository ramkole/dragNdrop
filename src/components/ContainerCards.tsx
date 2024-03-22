import { Data, FileName } from "../interfaces";
import { FolderItem } from "./CardItem";

interface Props {
  items: Data[];
  folderName: FileName;
  isDragging: boolean;
  handleUpdateList: (id: number, status: FileName) => void;
  handleDragging: (dragging: boolean) => void;
}

export const FolderContainer = ({
  items = [],
  folderName,
  isDragging,
  handleDragging,
  handleUpdateList,
}: Props) => {
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    handleUpdateList(+e.dataTransfer.getData("text"), folderName);
    handleDragging(false);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) =>
    e.preventDefault();

  return (
    <div
      className={`layout-cards ${isDragging ? "layout-dragging" : ""} `}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <p>{folderName}</p>
      {items.map(
        (item) =>
          folderName === item.folderName && (
            <FolderItem
              data={item}
              key={item.id}
              handleDragging={handleDragging}
            />
          )
      )}
    </div>
  );
};
