import Carousel from "../../components/carousel/Carousel.jsx"

function Manga() {
    return(
        <>
            
            <div className="subHeader">
                <h1>
                    Manga
                </h1>
                <div>
                    Japanese comics, from twenty-year shounen serials to single-volume oddities nobody licensed. 
                    The deepest catalogue here, and the widest spread of genre.
                </div>
            </div>

            <Carousel carouselType="Trending"/>

            <Carousel carouselType="Recent Release"/>

            <Carousel carouselType="Highest Rated"/>

            <Carousel carouselType="Finished"/>
        </>
    )
}

export default Manga