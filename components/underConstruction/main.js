import Logo from './logo'
import Footer from './footer'

const Main = () => (
    <div className = 'container'>
        <Logo />
        <p className = 'pafrumeManufacturing' >The first Armenian Parfume manufacturing</p>
        <p className = 'underConstruction'>OUR WEBSITE IS UNDER CONSTRUCTION</p>
        <div className = 'line'></div>
        <Footer />

        <style jsx>{`
            .container {
                text-align: center;
            }

            .underConstruction {
                font-size: 2em;
            }

            .line {
                width: 100%;
                height: 3px;
                background-color: black;
            }
        `}</style>
    </div>
)

export default Main;

/*

*/