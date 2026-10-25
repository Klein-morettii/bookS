import Carousel from "../../components/carousel/Carousel";

function Manhwa(){
    return(
        <>
            <div className="subHeader">
                <h1>
                    Manhwa
                </h1>
                <div>
                    Korean comics, mostly full colour and built to scroll on a phone. Where the tower-climbing, regression and villainess stories live.
                </div>
            </div>

            <Carousel carouselType="Trending"/>

            <Carousel carouselType="Recent Release"/>

            <Carousel carouselType="Highest Rated"/>

            <Carousel carouselType="Finished"/>
        </>
    )
}

export default Manhwa