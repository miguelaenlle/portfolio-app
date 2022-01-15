import classes from "./ScatterMockup.module.css"
const ScatterMockup: React.FC<{}> = (props) => {
    const image1 = <img src={"./mockups/Scatter/mockup-1.png"} alt="Scatter Screenshot" />
    const image2 = <img src={"./mockups/Scatter/mockup-2.png"} alt="Scatter Screenshot" />
    return (
        <div className = {classes['image-1']}>
            {image1}
            <div className = {classes['image-2']}>
                {image2}
            </div>
        </div>
    );
}
export default ScatterMockup