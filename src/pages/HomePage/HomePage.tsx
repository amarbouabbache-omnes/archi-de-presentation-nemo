import DisplayDeviceWidth from "../../components/DisplayDeviceWidth/DisplayDeviceWidth";
import styles from "./HomePage.module.scss";

const HomePage = () => {
    return (
        <div className={styles.main_container}>
            <h1>Archi de présentation Nemo</h1>
            <DisplayDeviceWidth />
        </div>
    );
}

export default HomePage