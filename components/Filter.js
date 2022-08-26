import { useState } from "react";
import styles from "@styles/Filters.module.css";

/*
* Filter component for updating state change of selected tags using boolean array
* https://stackoverflow.com/questions/72029810/next-js-checkbox-select-all
Filter based on:
Location
Activity
Topic

*/

export default function Filter(props) {
  // console.log(props);
  const [checkedState, setCheckedState] = useState(
    new Array(props.tags.length).fill(true)
  );

  /**
   * handles change
   * */
  const handleOnCheckChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    // console.log(updatedCheckedState);
    setCheckedState(updatedCheckedState);
    props.setTags(updatedCheckedState);
  };

  /*
   *filled all checkboxes' states with `Check All` value
   */
  const handleChangeAll = () => {
    let state;
    if (checkedState.every((e) => e === true)) {
      state = false;
    } else state = true;
    const updatedCheckedState = new Array(checkedState.length).fill(state);
    setCheckedState(updatedCheckedState);
    props.setTags(updatedCheckedState);
  };

  return (
    <div className={styles.filterContainer}>
      {props.tags.map((tag, index) => {
        return (
          <div className="gridItem">
            <label className={styles.filterElementLabel}>
              {tag}
              <input
                type="checkbox"
                id={tag}
                key={index}
                name={tag}
                value={tag}
                checked={checkedState[index]}
                onChange={() => handleOnCheckChange(index)}
              ></input>
            </label>
          </div>
        );
      })}
      <div className="call">
        <label for="checkall" className={styles.filterElementLabel}>
          {checkedState.every((e) => e === true) ? "Uncheck All" : "Check All"}
          <input
            type="checkbox"
            name="checkall"
            checked={checkedState.every((value) => value)}
            onChange={() => handleChangeAll()}
          />
        </label>
      </div>
    </div>
  );
}
