import React from 'react'
import ReactDOM from 'react-dom/client'

const Book = {
    title:'react',
    price:'30 dollars',
    room: 'Room A'
}

function ReactBook(){
    return(
        <dl>
            <dt>Title</dt>
            <dd>{Book.title}</dd>
            <dt>Price</dt>
            <dd>{Book.price}</dd>
            <dt>Room</dt>
            <dd>{Book.room}</dd>
        </dl>
    )
}

const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(
    <React.StrictMode>
        <ReactBook />
    </React.StrictMode>
)