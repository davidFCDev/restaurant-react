import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";
import './gallery.css';

const Gallery = () => {
    return (
        <section id="gallery">
            <SectionOne />
            <SectionTwo />
            <SectionThree />
        </section>
    )
}

export default Gallery