// src/components/ui/textarea.tsx
import React from 'react';

const Textarea: React.FC<React.TextareaHTMLAttributes<HTMLTextAreaElement>> = (props) => {
  return <textarea {...props} />;
};

export default Textarea;
