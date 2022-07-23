import React from 'react'
import ReactDOM from 'react-dom/client'

// const Book = {
//     title:'react',
//     price:'30 dollars',
//     room: 'Room A'
// }

function ReactBook(props){
    return(
        <dl>
            <dt>Title</dt>
            <dd>{props.title}</dd>
            <dt>Price</dt>
            <dd>{props.price}</dd>
            <dt>Room</dt>
            <dd>{props.room}</dd>
        </dl>
    )
}

const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(
    <React.StrictMode>
        <ReactBook
        title="react"
        price="30 dollars"
        room="Room A"
        />
    </React.StrictMode>
)