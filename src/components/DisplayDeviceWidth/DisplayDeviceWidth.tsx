import { useSelector } from "react-redux";
import { getDeviceWidth } from "../../app/slices/deviceWidth.slice";

import styles from "./DisplayDeviceWidth.module.scss";

const DisplayDeviceWidth = () => {
    const deviceWidth = useSelector(getDeviceWidth);

    return (
        <div className={styles.main_container}>
            <p className={styles.txt}>Device Width (resize me) : {deviceWidth}</p>
        </div>
    );
}

export default DisplayDeviceWidth;