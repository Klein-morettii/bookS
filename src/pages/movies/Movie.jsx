import Carousel from "../../components/carousel/Carousel";

function Movie(){
    return(
        <>
            <div className="subHeader">
                <h1>
                    Movie
                </h1>
                <div>
                    A recorded sequence of film or video images displayed on a screen with sufficient rapidity as to create the illusion of motion and continuity.
                </div>
            </div>

            <Carousel carouselType="Trending"/>

            <Carousel carouselType="Recent Release"/>

            <Carousel carouselType="Highest Rated"/>

            <Carousel carouselType="Finished"/>
        </>
    )
}

export default Movie