import React from 'react'
import ItemLabel from '../../FormGenrator/ItemLabel'
import { FormField } from '../../../types/fields'
import useFieldSet from '../../../hook/useFieldSet'
import FieldCard from '../../FormGenrator/FieldCard'

export default function LabelField({ field, onChange, provided }: { field: FormField; onChange: any; provided: any }) {
  const { isEdit, handleFieldChange, handleEdit, handleSave, handleCancel, handleDelete, renderData } = useFieldSet(
    field,
    onChange,
  )

  return (
    <>
      <FieldCard
        handleDelete={() => handleDelete(field.id)}
        handleEdit={handleEdit}
        handleCancel={handleCancel}
        handleSave={handleSave}
        isEdit={isEdit}
        value={renderData}
        provided={provided}
      >
        <ItemLabel
          edit={isEdit}
          value={renderData.label}
          onChange={handleFieldChange}
          className="form-control"
          label="Heaader"
          keyField="label"
        />
        <ItemLabel
          edit={isEdit}
          value={renderData.subLabel}
          onChange={handleFieldChange}
          className="form-control"
          label="Sub Header"
          keyField="subLabel"
          input
        />
      </FieldCard>
    </>
  )
}
