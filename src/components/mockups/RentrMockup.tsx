import classes from "./RentrMockup.module.css"

const RentrMockup: React.FC<{}> = (props) => {
    const image1 = <img src={"./mockups/Rentr/mockup-1.png"} alt="Rentr Screenshot" />
    const image2 = <img src={"./mockups/Rentr/mockup-2.png"} alt="Rentr Screenshot" />
    return (
        <div className = {classes['image-1']}>
            {image1}
            <div className = {classes['image-2']}>
                {image2}
            </div>
        </div>
    );
}
export default RentrMockup