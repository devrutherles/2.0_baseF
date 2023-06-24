import styles from "./Icons.module.sass";
import React from 'react'


 const Icons =  ({ src ,color , w , h }) => {

  return (
    <div
      style={{fill:color , stroke: color || 'gray' , width: w || 24 , height: h || 'auto'}}
      dangerouslySetInnerHTML={{ __html: JSON.stringify(src) }}
    >

      
    </div>
  );
}

export default React.memo(Icons)