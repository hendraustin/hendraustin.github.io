import styles from "./panel.module.css";
import LeftPanel from "./leftpanel";
import RightPanel from "./rightpanel";

export default function Panels() {
  return (
    <div className={styles.flexbox}>
      <LeftPanel />
      <RightPanel />
    </div>
  );
}
