import { useState } from "react"
import { Data, FileName } from "../interfaces"

export const useDragAndDrop = (initialState: Data[]) => {

    const [isDragging, setIsDragging] = useState(false)
    const [listItems, setListItems] = useState<Data[]>(initialState)

    const handleUpdateList = (id: number, folderName: FileName) => {
        let card = listItems.find(item => item.id === id)

        if (card && card.folderName !== folderName) {
            card.folderName = folderName
            if (Array.isArray(listItems)) {
                setListItems(prev => ([
                    card!,
                    ...prev.filter(item => item.id !== id)
                ]))
            }
        }

    }

    const handleDragging = (dragging: boolean) => setIsDragging(dragging)

    return {
        isDragging,
        listItems,
        handleUpdateList,
        handleDragging,
    }
}