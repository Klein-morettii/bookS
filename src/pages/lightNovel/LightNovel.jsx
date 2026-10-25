import Carousel from "../../components/carousel/Carousel.jsx";

function LightNovel(){
    return(
        <>
            <div className="subHeader">
                <h1>
                    Light Novel
                </h1>
                <div>
                    Light novels and web novels. Often the source a manga or webtoon was adapted from, and usually further ahead of it.
                </div>
            </div>

            <Carousel carouselType="Trending"/>

            <Carousel carouselType="Recent Release"/>

            <Carousel carouselType="Highest Rated"/>

            <Carousel carouselType="Finished"/>
        </>
    )
}

export default LightNovel