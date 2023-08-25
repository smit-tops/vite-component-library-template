import React, { useMemo } from 'react'
import FieldHeader from '../../FormGenrator/FieldHeader'
import ItemLabel from '../../FormGenrator/ItemLabel'
import RequiredField from '../../FormGenrator/RequiredField'
import FieldFooter from '../../FormGenrator/FieldFooter'
import { Card, Col } from 'react-bootstrap'
import { FormField } from '../../../types/fields'
import useFieldSet from '../../../hook/useFieldSet'
import FieldCard from '../../FormGenrator/FieldCard'

const InputField = ({ field, onChange, provided }: { field: FormField; onChange: any; provided: any }) => {
  const { isEdit, renderData, handleEdit, handleSave, handleCancel, handleDelete, handleFieldChange } = useFieldSet(
    field,
    onChange,
  )

  return (
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
        required={renderData.required}
      />

      <input type="text" className="form-control my-2" disabled />

      <RequiredField edit={isEdit} value={renderData.required} onChange={handleFieldChange} id={renderData.id} />
    </FieldCard>
  )
}

export default InputField
