// import styles from './Header.module.css'

import { useState } from "react";

export default function Filter(props) {
  console.log(props);
  let tags = props.tags;
  let tag_dict = props.tag_dict;
  let set_tags = props.set_tags;

  const [filter, setFilter] = useState(tag_dict);

  return (
    <div className={""}>
      {props.tags.map((tag, id) => {
        return (
          <div>
            <input
              type="checkbox"
              id={tag}
              name={tag}
              defaultChecked={true}
              // checked={props.tag_dict[tag]}
              onChange={(e) => {
                console.log(e, tag_dict);
                // let new_tag_dict = tag_dict
                // new_tag_dict[tag] = !tag_dict[tag]
                tag_dict[e.target.name] = e.target.checked;
                set_tags(tag_dict);
                // handleOnChange(e)
              }}
            ></input>
            <label for={tag}>{tag}</label>
          </div>
        );
      })}{" "}
    </div>
  );
}

const handleOnChange = (e) => {
  console.log(e, e.target.checked);
};
