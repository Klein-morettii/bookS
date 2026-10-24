import book from '../../assets/bookk.png'
import page from '../../assets/page.png'
import bookmark from '../../assets/bookmark.png'

import './card.css'

function SmallCard({book: {type, status, chaps, bookName}}) {
    let completed = true;
    let logged = true;

    return (
        <div className="container">

            <div className="cardImg">

                <img
                    className="cover"
                    src="https://picsum.photos/200/300"
                    alt="Title cover"
                />

                {logged && (
                    <button className="mark">
                        <img src={bookmark} alt="Bookmark" />
                    </button>
                )}

                <div className="dataOnXAxis">

                    <div className="mediaType">
                        <img
                            className="typeOfMedia"
                            src={book}
                            alt=""
                        />
                        <span>{type}</span>
                    </div>

                    <div className="status">{status}</div>

                    <div className="chapters">
                        <img src={page} alt="" />
                        <span>{chaps}</span>
                    </div>

                </div>
            </div>

            <div className="cardDetail">
                <div className="title">{bookName}</div>
            </div>

        </div>
    );
}

export default SmallCard;