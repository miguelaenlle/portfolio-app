import classes from "./Devices.module.css";
const Devices: React.FC<{ devices: string[] }> = (props) => {
  const devicesCapitalized = props.devices.map(
    (device) => device.charAt(0).toUpperCase() + device.slice(1)
  );
  const deviceString = devicesCapitalized.join(", ");
  return (
    <div className={classes["left-stack"]}>
      {props.devices.map((device) => (
        <img
          className={classes["device-icon"]}
          src={`./imgs/${device}.png`}
          alt={device}
          key={device}
        />
      ))}
      <p className={classes["device-string"]}>{deviceString}</p>
    </div>
  );
};
export default Devices;
