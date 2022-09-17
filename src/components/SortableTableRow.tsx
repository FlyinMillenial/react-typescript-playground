interface SortableTableRowProps {
    rowData: {[key:string]: any}
    rowDataMap: {[key:string]: any}
}

const SortableTableRow = (props:SortableTableRowProps) => {
    return (
        <tr>
            {
                Object.keys(props.rowDataMap).map((key, index) => (
                    <td key={index}>{props.rowData[key]}</td>
                ))
            }
        </tr>
    );
};

export default SortableTableRow;