import book from '../../assets/bookk.png'
import page from '../../assets/page.png'
import bookmark from '../../assets/bookmark.png'
import complete from '../../assets/complete.png'
import onGoing from '../../assets/ongoing.png'
import hiatus from '../../assets/haitus.png'

import './card.css'

function SmallCard({book}) {

    if(!book){
        return null;
    }

    const {type, status, chaps, bookName} = book
    let completed = true;
    let logged = true;

    function bookStatus(){
        if(status === "completed"){
            return (
                    <img
                        className="statusImg"
                        src={complete} alt='Completed'  
                        style={{ backgroundColor: 'green' }}
                    />
            )
        }
        else if(status === "onGoing"){
            return(
                <img
                    className='statusImg' 
                    src={onGoing} alt='OnGoing'  
                    style={{ backgroundColor: 'blue' }} 
                />
            )
        }
        else if(status === "hiatus"){
            return(
                <>
                    <img 
                        className='statusImg' 
                        src={hiatus} alt='Hiatus'  
                        style={{ backgroundColor: 'yellow' }}
                    
                    />
                </>
            )
        }
        else{
            return null
        }

        /* const statusConfig = {
            completed: {
                image: complete,
                color: "green",
                label: "Completed",
            },
            onGoing: {
                image: onGoing,
                color: "blue",
                label: "Ongoing",
            },
            hiatus: {
                image: hiatus,
                color: "yellow",
                label: "Hiatus",
            },
        }

        const current = statusConfig[status]

        if (!current) {
            return null
        }

        return (
            <span
                className="statusImg"
                style={{ backgroundColor: current.color }}
            >
                <img src={current.image} alt={current.label} />
            </span>
        ) */
    }

    return (
        <>
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

                        <div className="status"> {bookStatus()} </div>

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
        </>
    );
}

export default SmallCard;