// src/components/ui/select.js
import React from 'react';

const Select = ({ children, ...props }) => <select {...props}>{children}</select>;
const SelectTrigger = ({ children }) => <div className="select-trigger">{children}</div>;
const SelectValue = ({ children }) => <div className="select-value">{children}</div>;
const SelectContent = ({ children }) => <div className="select-content">{children}</div>;
const SelectItem = ({ children }) => <div className="select-item">{children}</div>;

export {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem
};
