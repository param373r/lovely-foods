import ReactDOM from "react-dom";



const Model = (props) => {

    const { show } = props;
    let modelOverlay = document.getElementById('modelOverlay');


    if(show){
        modelOverlay.style.display="flex";
        return ReactDOM.createPortal(
        <div className="model">
            {props.element}
        </div>
        , modelOverlay)
    }

    else {
        modelOverlay.style.display="none";
        return <div></div>
    }
}



export default Model;