import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {summaryAction} from '../Actions/action';
import BaseStyles from "../Styles/base.module.css";
import Styles from "../Styles/summary.module.css";

export default function Summary() {
  const dispatch = useDispatch();
  const {summaryReducer} = useSelector(state => state);
  const [summary, setSummary] = useState(summaryReducer);

  function handleOnChange(e){
    let summaryText = e.target.value;
    setSummary(summaryText);
  }
  function submitSummary(){
    dispatch(summaryAction(summary));
  }

  useEffect(()=>{
    // console.log(summaryReducer);
  },[]);

  return (
    <div>
      <div className={BaseStyles.leftContainer}>
        <h4>Summary</h4>
        <p>
          Briefly describe the value that you bring through your skills,
          background and experience.
        </p>
        <textarea className={Styles.textArea} onChange={handleOnChange}></textarea>

        {/**************  Page Slider  ***********/}
        <div className={BaseStyles.pageSlider}>
          <Link to="/finalize-page">
            <button className={BaseStyles.submitBtn} onClick={submitSummary}>SAVE & CONTINUE</button>
          </Link>

          <div className={BaseStyles.back}>
            <Link to="/skills">Back</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
