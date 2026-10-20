import { Link } from "react-router-dom"
import SmallCard from "../CARD/card"
import './carousel.css'
import left from '../../assets/arrow-left.png'
import right from '../../assets/arrow-right.png'

function Carousel({carouselType}){
    const books = [
        { id: 1, bookName: "Lord of the Mysteries", type: "Novel", status: "Completed", chaps: 1395 },
        { id: 2, bookName: "Lord of the Rings", type: "Novel", status: "Completed", chaps: 15 },
        { id: 3, bookName: "Warlock of the Magus world", type: "Novel", status: "Completed", chaps: 1150 },
        { id: 4, bookName: "Omniscient Reader Viewpoint", type: "Novel", status: "Completed", chaps: 450 },
        { id: 5, bookName: "Advent of the three Calamities", type: "Novel", status: "Ongoing", chaps: 580 },
        { id: 6, bookName: "Harry Potter and the Order of the Pheonix", type: "Novel", status: "Completed", chaps: 20 },
        { id: 7, bookName: "Eragon", type: "Novel", status: "Completed", chaps: 25 },
        { id: 8, bookName: "Percy Jackson and the Battle of the Laybrinth", type: "Novel", status: "Completed", chaps: 19 },
        { id: 9, bookName: "Hobbit", type: "Novel", status: "Completed", chaps: 20 },
        { id: 10, bookName: "Lord of Chaos", type: "Novel", status: "Completed", chaps: 56 },
        { id: 11, bookName: "One Piece", type: "Manga", status: "On Going", chaps: 1250 },
        { id: 11, bookName: "One Piece", type: "Manga", status: "On Going", chaps: 1250 },
        { id: 12, bookName: "Monster", type: "Manga", status: "Completed", chaps: 280 },
        { id: 13, bookName: "Kingdom", type: "Manga", status: "On Going", chaps: 820 },
        { id: 14, bookName: "20'th Centuary Boys", type: "Manga", status: "Finished", chaps: 350 },
        { id: 15, bookName: "Claymore", type: "Manga", status: "Completed", chaps: 159 },
        { id: 16, bookName: "Attack On Titan", type: "Manga", status: "Completed", chaps: 141 },
        { id: 17, bookName: "FullMetal Alchemist", type: "Manga", status: "Completed", chaps: 158 },
    ]

    const list = books.map((book) => (
        <SmallCard key={book.id} book={book} />
    ))
    return(
        <>
            <div className="Carousel">
                <div className="Header">
                    <div className="filterType">{carouselType}</div>

                    <div className="rightHeader">
                        <Link className="showMoreButton" to="">Show More</Link>
                        <button>
                            <img src={left} alt="moveLeft" />
                        </button>

                        <button>
                            <img src={right} alt="moveRight" />
                        </button>
                    </div>
                </div>

                <div className="track">
                    {list}
                </div>
            </div>
        </>
    )
}

export default Carousel