import React from 'react';
import {Link} from 'react-router-dom';
const Object = (props) => {
  return (
    <div>
      <div>
      <Link to={`/product/${props.id}`}>
      <img src={props.image} alt="" />
      </Link>
      <p>{props.name}</p>
      <div>
        <div>{props.oldprice}</div>
        <div>{props.newprice}</div>
      </div>
    </div>
    </div>
  );
}

export default Object;
