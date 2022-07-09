// import styles from './Header.module.css'

export default function Filter(props) {
  console.log(props);
  let tags = props.tags
  let tag_dict = props.tag_dict
  let set_tags = props.set_tags
  return (
    <div className={""}>
      {props.tags.map((tag) => {
        return (
          <div>
            <input
              type="checkbox"
              id={tag}
              name={tag}
              defaultChecked={true}
              // checked={props.tag_dict[tag]}
              onChange={e => {
                let new_tag_dict = tag_dict
                new_tag_dict[tag] = !tag_dict[tag]
                set_tags(new_tag_dict)
                console.log(e, new_tag_dict)
                handleOnChange(e)
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
  console.log(e, e.target.checked)
}
