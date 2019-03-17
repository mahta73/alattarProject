// import mainImage from '../imgs/mainImage.jpg'

export default () => (
    <div>
        <img 
            className = 'mainImage'
            src = '../static/mainImage.jpg' 
            alt = 'Our website is under construction' 
        />
        <style jsx> {`
            .mainImage {
                position: fixed;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                width: 100%;
                height: 100%;
                margin: auto;
                overflow: auto;
            }`}
            </style>
    </div>
)