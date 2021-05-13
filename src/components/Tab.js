import React,{useState} from 'react';
import styles from './Tab.module.css';

const Tab = (props) => {
    const [active, setActive] = useState(1);

    return (
        <>
        <div className={styles.tabs}>
        {
            props.list.map( (item,i) =>
            <div key={i} className={styles.tab_header} style={{backgroundColor: i===active && ('gray')}} onClick={() => setActive(i)} value='1'>{item}</div>
            )
        }
        </div>
        <div className={styles.tab_content}>{props.list[active]} content is here</div>
        </>
    )
}

export default Tab;