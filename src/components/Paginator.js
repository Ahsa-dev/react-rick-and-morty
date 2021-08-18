import React, {useState, useEffect} from 'react';
import styles from '../styles/modules/paginator.module.scss';
import '../fonts/font-awesome/css/font-awesome.min.css';

const Paginator = ({ changePage, currentPage, totalPages }) => {
    const [state, setState] = useState({buttons: null});
    useEffect(()=>{
        setButtons();
    },[currentPage,totalPages]);

    const setButtons = () => {
        let min = Math.floor(parseInt(currentPage) - 2);
        let max = Math.floor(parseInt(currentPage) + 2);
        if(min <= 0){
            max += Math.abs(min)+1;
            min = 1;
        }
        if(max > totalPages){
            min -= max - totalPages;
            max = totalPages;
        }
        let buttons = [];
        for (let i = min; i <= max; i++){
            buttons.push({value: i});
        }
        setState({ ...state, buttons: buttons });
    }

    return (
        <div className={styles.pag}>
            <button onClick={()=>changePage(1)}><i className="fas fa-chevron-left"></i></button>
            {state.buttons !== null && 
                state.buttons.map((current)=>(
                    <button className={current.value == currentPage ? styles.active:""} key={`paginator-button-${current.value}`} onClick={()=>changePage(current.value)}>
                        {current.value}
                    </button>
                ))
            }
            <button onClick={()=>changePage(totalPages)}><i className="fas fa-chevron-right"></i></button>
        </div>
    );
}

export default Paginator;