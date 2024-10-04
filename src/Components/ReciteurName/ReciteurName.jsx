import "./ReciteurName.css"
function ReciteurName(props) {
    return (
        <div className="reciteurName">
            <h1>{props.reciteur}</h1>
        </div>
    )
}
export default ReciteurName;