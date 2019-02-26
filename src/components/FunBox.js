
import React from 'react'

const FunBox = ( {funPerson, funReason, handleRemoveFunReason} ) => {
  return (
    <div class="box content is-medium">
        <p>{funPerson} is fun because {funReason}</p>
        <button onClick={(event) => handleRemoveFunReason(event)} class="button is-link">Remove {funPerson}</button>
    </div>
  )
}

export default FunBox
