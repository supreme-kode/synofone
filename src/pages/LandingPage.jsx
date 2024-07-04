
import BrandComponent from "../components/BrandComponent";
import CarouselComponent from "../components/CarouselComponent";
import FooterComponent from "../components/FooterComponent";
import NavbarComponent from "../components/NavbarComponent";
import SmartphoneComponent from "../components/SmartphoneComponent";


const LandingPage = () => {
    return (
        <>
            
            
            <NavbarComponent />
            
            <div id="banner">
                <CarouselComponent />
            </div>
            <div id="brand">
                <BrandComponent />
            </div>
            <div id="smartphone">
                <SmartphoneComponent kategori={"Unggulan"}/>
                <SmartphoneComponent kategori={"Lainnya"}/>
            </div>
            <FooterComponent/>
        </>
    );
}

export default LandingPage