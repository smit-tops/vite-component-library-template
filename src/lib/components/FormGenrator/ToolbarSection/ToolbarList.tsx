import React, { useContext } from 'react'
import { FormGenratorContext } from '../../../context/FormContext'
import { addField } from '../../../service/formServices'
import * as n from '../../../service/initialField'
import { ToolbarItemTypes } from '../../../types/constants'
import { FormField } from '../../../types/fields'

export default function ToolbarList({ items }: { items: any }) {
  const { setFormData } = useContext(FormGenratorContext)

  const itemToFunctionMap: any = {
    [ToolbarItemTypes.Heading]: n.getNewHeading,
    [ToolbarItemTypes.LongText]: n.getNewLongText,
    [ToolbarItemTypes.SingleChoice]: n.getNewSingleChoice,
    [ToolbarItemTypes.ShortText]: n.getNewShortText,
    [ToolbarItemTypes.Paragraph]: n.getNewParagraph,
    [ToolbarItemTypes.LineBreak]: n.getNewLineBreak,
    [ToolbarItemTypes.MultipleChoice]: n.getNewMultipleChoice,
    [ToolbarItemTypes.Date]: n.getNewDate,
    [ToolbarItemTypes.Dropdown]: n.getNewDropdown,
    [ToolbarItemTypes.Image]: n.getNewImage,
    [ToolbarItemTypes.File]: n.getNewFile,
    [ToolbarItemTypes.TwoColumns]: n.getNewTwoColumn,
  }

  const handleAddNewData = (newData: FormField) => {
    addField(newData)
    setFormData((prev: Array<FormField>) => [...prev, newData])
  }

  const handleClick = (key: string) => {
    const selectedFunction = itemToFunctionMap[key]
    if (selectedFunction) {
      handleAddNewData(selectedFunction())
    }
  }

  return (
    <div>
      <div className="text-center">
        <div className="toolbox">
          {items.map((item: any) => (
            <div className="iconBox cursor-pointer" key={item.key} onClick={() => handleClick(item.key)}>
              <div className="iconBoxInner">
                <i className={`icon fa-solid ${item.icon}`} />
                <span className="d-block">{item.value}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}