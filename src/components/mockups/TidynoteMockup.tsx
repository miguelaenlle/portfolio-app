import classes from "./TidynoteMockup.module.css"

const TidynoteMockup: React.FC<{}> = (props) => {
    
    const image1 = <img className = {classes['image-1']} src={"./mockups/Tidynote/mockup-2.png"} alt="Tidynote Screenshot" />
    const image2 = <img className = {classes['image-2']} src={"./mockups/Tidynote/mockup-1.png"} alt="Tidynote Screenshot" />
    return (
        <div className = {classes['image-1']}>
            {image1}
            <div className = {classes['image-2']}>
                {image2}
            </div>
        </div>
    );
}
export default TidynoteMockup