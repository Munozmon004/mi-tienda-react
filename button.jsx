export default function Button(props){
    const {text, color, disabled} = props;

    console.log(disabled);
    return ( <button disabled={disabled} className={`btn-${color}`}>
        {text}
    </button>
    );
}
