/* eslint-disable react/no-unescaped-entities */
import './Styles/Hero.css';
import box_over from '../public/images/box_over.webp'; // Adjust this path if necessary
import Variety from '../public/images/Variety.webp';
import salmon_katsu from '../public/images/salmon_katsu.webp';
import Family_cooking from '../public/images/Family_cooking.webp';
import vegan from '../public/images/vegan.webp';
import weekly_classic from '../public/images/weekly_classic.webp';
import Vegetarian from '../public/images/Vegetarian.webp';
import pic from '../public/images/pic.png';
import shrimply from '../public/images/shrimply.webp';
import credit from '../public/images/dxblivin-credit.webp'; // Removed the hyphen in variable name
import ashley_dxb from '../public/images/ashley_dxb.webp'; // Replaced comma with dot
import ayshasaiha from '../public/images/ayshasaiha.webp'; // Replaced comma with dot
import Instagram from '../public/Images/Instagram_logo_2016.svg.webp'; // SVG file name corrected

const Hero = () => {

    return (
        <div className="main-container">
            <div className="hero-container">
                <div className="hero-content">
                    <h1 className="title">Say hello to a new way of cooking</h1>
                    <p className="subtitle">Delicious recipes. Delivered by us, made by you. Ready to unbox mealtime?</p>
                    <button className="cta-button">Get Started</button>
                </div>
            </div>
            {/* Why Choose Us section */}
            <div className="why-choose-us">
                <h2 className="section-title">Why choose us?</h2>
                <p className="section-subtitle">Eat well for less with impressively easy meals starting from AED 35 per serving.</p>
                
                <div className="features-container">
                    <div className="feature-card">
                        <img src={box_over} alt="Convenience" />
                        <h3>Convenience</h3>
                        <ul>
                            <li>Pre-measured ingredients & easy recipes</li>
                            <li>Contactless, doorstep delivery across UAE</li>
                        </ul>
                    </div>

                    <div className="feature-card">
                        <img src={Variety} alt="Variety" />
                        <h3>Variety</h3>
                        <ul>
                            <li>New recipes every week</li>
                            <li>34+ dishes to choose from</li>
                            <li>Low-calorie & family-friendly options</li>
                        </ul>
                    </div>

                    <div className="feature-card">
                        <img src={salmon_katsu} alt="Deliciousness" />
                        <h3>Deliciousness</h3>
                        <ul>
                            <li>No skimpin' on the portion size!</li>
                            <li>100% satisfaction guarantee, or we will make it right</li>
                            <li>Fresh ingredients from local, trusted suppliers</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* How It Works Section */}
            <div className="how-it-works-container">
                <div className="how-it-works">
                    <h2>How it works</h2>
                    <p>
                        Simplify home cooking in just 4 easy steps. Get quality ingredients &
                        great recipes delivered to your door.
                    </p>
                    <ul>
                        <li>1. Select your box</li>
                        <li>2. Choose your recipes</li>
                        <li>3. Receive your delivery</li>
                        <li>4. Cook, eat, and enjoy!</li>
                    </ul>
                    <button className="learn-more-button">Learn More</button>
                </div>
                <img src={Family_cooking} alt="Family cooking together" />
            </div>

            <div className="ready-to-cook-container">
                <h2>Ready to cook healthy & inspiring meals?</h2>
                <p>Choose from 34+ recipes every week - from light, low-calorie dishes to hearty, family favourites. Look out for our handy recipe tags to make choosing even simpler.</p>

                <div className="recipe-carousel">
                    <button className="carousel-btn prev-btn">&lt;</button>

                    <div className="recipe-card">
                        <img src={vegan} alt="Vegan Dish" />
                        <span className="vegan">Vegan</span>
                    </div>

                    <div className="recipe-card">
                        <img src={weekly_classic} alt="Weekly Classic Dish" />
                        <span className="weekly_classic">Weekly Classic</span>
                    </div>

                    <div className="recipe-card">
                        <img src={Vegetarian} alt="Vegetarian Dish" />
                        <span className="Vegetarian">Vegetarian</span>
                    </div>

                    <button className="carousel-btn next-btn">&gt;</button>

                    <div className="recipe-card">
                        <img src={pic} alt="pic" />
                        <span className="pic">Pic</span>
                    </div>
                </div>
                <button className="view-menu-button">View Menu</button>
            </div>

            <div className="hello-chef">
                <h1>#hellochef</h1>
                <div className="gallery">
                    <div className="image-container">
                        <img src={Instagram} alt="Instagram_logo_2016,sgv" />
                        <span className="Instagram_logo_2016,sgv">Instagram</span>
                    </div>
                    <div className="image-container">
                        <img src={ayshasaiha} alt="ayshasaiha" />
                        <span className="ayshasaiha">Aysha Saiha</span>
                    </div>

                    <div className="image-container">
                        <img src={credit} alt="dxblivin-credit" />
                        <span className="dxblivin-credit">dxblivin-credit</span>
                    </div>

                    <div className="image-container">
                        <img src={shrimply} alt="Shrimply" />
                        <span className="shrimply">Shrimply</span>
                    </div>
                    <div className="image-container">
                        <img src={ashley_dxb} alt="ashley_dxb" />
                        <span className="ashley_dxb">Ashley DXB</span>
                    </div>
                </div>

                <div className="content">
                    <h2>Over 3 million meals</h2>
                    <p>Cooked and loved by our customers</p>
                    <div className="rating">
                        <span>4.9 ★★★★★</span>
                        <span>350+ reviews on Google</span>
                    </div>
                    <div className="badge">
                        <span>Hello Chef is a certified B Corp!</span>
                        <span className="new">NEW</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
