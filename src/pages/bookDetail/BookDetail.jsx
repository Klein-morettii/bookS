import { useParams } from 'react-router-dom'

import './bookDetail.css'

function BookDetail(){
    const {bookName, id} = useParams()

    return (
        <>
            <div className='detailPage'>
                <div>
                    <img className="bookCover" src="https://picsum.photos/200/300" alt="bookCover" />
                </div>

                <div>{bookName}</div>
            </div>
        </>
    )
}   

export default BookDetail