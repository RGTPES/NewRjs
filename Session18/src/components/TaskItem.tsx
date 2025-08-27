import React from 'react'

export default function TodoItem() {
  return (
    <div>
      <li className="list-group-item d-flex justify-content-between align-items-center">
          <div className="form-check">
            <input className="form-check-input me-2" type="checkbox" />
            <span className="task-name">Quét nhà</span>
          </div>
          <div>
            <i className="fas fa-edit text-primary me-3" role="button" />
            <i className="fas fa-trash text-danger" role="button" />
          </div>
        </li>
    </div>
  )
}
