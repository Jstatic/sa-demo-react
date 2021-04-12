export default function Table() {
    let rows = [];
    for (let i=0;i <36; i++) {
        rows.push(<div className="Results-row">
            <div className="Results-cell">Result {i}a</div>
            <div className="Results-cell">Result {i}b</div>
            <div className="Results-cell">Result {i}c</div>
            <div className="Results-cell select"><input type="button" value={"Select " + i} /></div>
        </div>)
    }
    return (
        <div className="Results-table">
            <div className="Results-row header">
                <div className="Results-cell">Value</div>
                <div className="Results-cell">Value</div>
                <div className="Results-cell">Value</div>
                <div className="Results-cell">Value</div>
            </div>
            {rows}
        </div>
    );
};