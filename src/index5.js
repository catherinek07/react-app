import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

const Book = {
    title:'react',
    price:'30 dollars',
    room: 'Room A'
}

// function ReactBook({title,price,room}){
//     return(
//         <dl>
//             <dt>Title</dt>
//             <dd>{title}</dd>
//             <dt>Price</dt>
//             <dd>{price}</dd>
//             <dt>Room</dt>
//             <dd>{room}</dd>
//         </dl>
//     )
// }

class ReactBook extends React.Component{
    render(){
        return(
            <dl style={
                {color:'red',
                backgroundColor:'yellow',
            fontSize:'25px',
        textAlign:'center'}
            }>
                <dt>Book name</dt>
                <dd>{this.props.title}</dd>
                <dt>Price</dt>
                <dd>{this.props.year}</dd>
                <dt>Place</dt>
                <dd>{this.props.room}</dd>
            </dl>
        )
    }
}

const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(
    <React.StrictMode>
        <ReactBook />
    </React.StrictMode>
)