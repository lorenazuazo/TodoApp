import React from 'react'

const Small = React.memo(({value}) => {
    console.log('mevolvia a renderizar ');
    return (
        <small>
            {value}
        </small>
    )
}
)
export default Small;
