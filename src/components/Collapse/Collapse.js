import React, { useState } from 'react';
import "./Collapse.css";
import "../../pages/Logement/Logement.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faChevronUp, faChevronDown);

const Collapse = (data) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <>
    <div className='collapse-container'>
  <button className='collapse' onClick={toggleCollapse}>
    {isCollapsed ? (
      <>
        {data.name}<FontAwesomeIcon icon={faChevronDown} />
      </>
    ) : (
      <>
        {data.name} <FontAwesomeIcon icon={faChevronUp} /> 
      </>
    )}
  </button>
  {!isCollapsed && <div className='div-collapse'>{data.description}</div>}
  </div>
</>
  );
};

export default Collapse;