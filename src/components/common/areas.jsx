import React, { useState, useRef, useEffect } from 'react';
import './areas.css';
import Btn from './btn';

const Areas = (props) => {
  const [expanded, setExpanded] = useState(false);
  const [showReadMore, setShowReadMore] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    const el = textRef.current;
    if (el.scrollHeight > el.clientHeight) {
      setShowReadMore(true);
    }
  }, []);

  return ( 
    <article className='areas'>
      <div className={props.areaimg}>
        <div className='areagradient'>
          <h5 className='areatitle'>{props.areatitle}</h5>
        </div>
      </div>

      <p
        ref={textRef}
        className={`areap ${expanded ? 'expanded' : ''}`}
      >
        {props.areap}
      </p>

      {showReadMore && (
        <span 
          className="readmore"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Read Less" : "Read More"}
        </span>
      )}

      <Btn 
        btncolor="btn2"
        btn="LEARN MORE"
      />
    </article>
  );
};

export default Areas;