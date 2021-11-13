import React from 'react';

import './item-status-filter.css';

const ItemStatusFilter = ({onChangeStatus}) => {
  return (
    <div className="btn-group">
      <button type="button"
              onClick={() => onChangeStatus('all')}
              className="btn btn-info">All</button>
      <button type="button"
              onClick={() => onChangeStatus('active')}
              className="btn btn-outline-secondary">Active</button>
      <button type="button"
              onClick={() => onChangeStatus('done')}
              className="btn btn-outline-secondary">Done</button>
    </div>
  );
};

export default ItemStatusFilter;
