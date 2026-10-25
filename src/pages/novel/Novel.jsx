import Carousel from "../../components/carousel/Carousel";

function Novel(){
    return(
        <>
            <div className="subHeader">
                <h1>
                    Novel
                </h1>
                <div>
                    novel is an extended work of narrative fiction usually written in prose and published as a book.
                </div>
            </div>

            <Carousel carouselType="Trending"/>

            <Carousel carouselType="Recent Release"/>

            <Carousel carouselType="Highest Rated"/>

            <Carousel carouselType="Finished"/>
        </>
    )
}

export default Novel