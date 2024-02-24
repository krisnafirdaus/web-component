import React, { useState } from 'react';
import './styles.css'; 
import { TooltipProps } from './types';

const Tooltip: React.FC<TooltipProps> = ({ children, text, position = 'top' }) => {
  const [isVisible, setIsVisible] = useState(false);

  const showTooltip = () => setIsVisible(true);
  const hideTooltip = () => setIsVisible(false);

  return (
    <div className="tooltip-wrapper" onMouseEnter={showTooltip} onMouseLeave={hideTooltip}>
      {children}
      {isVisible && (
        <div className={`tooltip-box ${position}`}>
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
