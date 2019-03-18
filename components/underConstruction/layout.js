const Layout = props => (
    <div className = 'container'>
        <div className = 'imageContainer'>
            <img  
                className = 'backgroundImage'
                src = '../../static/backgroundImage.jpg' 
                alt = 'background image'
            />
        </div>
        <div className = 'centered'>
            {props.children}
        </div>

        <style jsx>{`
            .container {
                background: black;
            }
        
            .imageContainer {
                position: fixed; 
                top: 0; 
                left: 0; 
                bottom: 0;
                
                min-width: 100%;
                min-height: 100%;
            }

            .backgroundImage {
                width: 100%;
                height: 100%;
            }

            .centered {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }
        `}</style>
    </div>
)

export default Layout;