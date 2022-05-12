import React from 'react';

const ShowAll = ( { show } ) => {
  return(
    <button onClick={(event) => show()}>Show All</button>
  )
}

export default ShowAll;