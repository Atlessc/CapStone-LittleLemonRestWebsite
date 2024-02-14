import React from 'react';
import '../styles/components/Modal.css';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-close" onClick={onClose}>×</div>
        {children}
      </div>
    </div>
  );
};

export default Modal;