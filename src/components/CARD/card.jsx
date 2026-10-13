import './card.css'
import book from '../../assets/bookk.png'
import page from '../../assets/page.png'
import bookmark from '../../assets/bookmark.png'

function SmallCard() {
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
                        <span>Novel</span>
                    </div>

                    <div className="status">
                        {completed ? "Completed" : "Releasing"}
                    </div>

                    <div className="chapters">
                        <img src={page} alt="" />
                        <span>34</span>
                    </div>

                </div>
            </div>

            <div className="cardDetail">
                <div className="title">Lord of the Mysteries</div>
            </div>

        </div>
    );
}

export default SmallCard;