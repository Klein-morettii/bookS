import Carousel from "../../components/carousel/Carousel";

function Anime(){
    return(
        <>
            <div className="subHeader">
                <h1>
                    Anime
                </h1>
                <div>
                    Anime (Japanese: アニメ; IPA: [aꜜɲime] ⓘ; derived from a shortening of the English word animation) is animation originating from Japan.
                </div>
            </div>

            <Carousel carouselType="Trending"/>

            <Carousel carouselType="Recent Release"/>

            <Carousel carouselType="Highest Rated"/>

            <Carousel carouselType="Finished"/>
        </>
    )
}

export default Anime