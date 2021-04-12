export default function Input(props) {
    const update = (e) => {
        if (props.type === 'text') {
            props.update(e.target.value);
        }
    }
    return (
      <div className="input">
          <input onChange={(e) => update(e)} type={props.type} placeholder={props.text} value={props.text} />
      </div>
    );
  }