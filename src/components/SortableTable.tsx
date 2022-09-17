import React, { useState } from 'react';
import SortableTableRow from './SortableTableRow';

interface SortableTableProps {
    /**
     * Callback function that will be called when user clicks the 
     * header of any column in the table; ostensibly sorts the data
     */
    sortingCallback: Function
    /**
     * Array of FLAT objects (nesting is NOT supported) that will be
     * used to populate the table rows.
     */
    tableData: Array<{[key:string]: any}>
    /**
     * Object whose values are the desired column labels on the table
     * and whose keys match the keys in the tableData.
     */
    rowDataMap: {[key:string]: any}
}

/**
 * Create a sortable table from an array of data objects and a map of the
 * desired columns and column labels.
 * @param props: SortableTableProps
 */
const SortableTable = (props:SortableTableProps) => {

    const [ascending, setAscending] = useState(false); // Sort ascending by default
    const [currentSortKey, setCurrentSortKey] = useState(Object.keys(props.rowDataMap)[0]); // Sort by first colummn by default

    const callSortingCallback = (keyToSortBy:string) => {
        if (keyToSortBy === currentSortKey) {
            setAscending(!ascending);
        } else {
            setAscending(true);
            setCurrentSortKey(keyToSortBy);
        }
        props.sortingCallback(keyToSortBy, ascending);
    }

    return (
        <table>
            <thead>
                <tr>
                    {
                        Object.keys(props.rowDataMap).map((key, index) => (
                            <th key={`tableHeader-${index}`} onClick={() => {callSortingCallback(key)}}>{props.rowDataMap[key]}</th>
                        ))
                    }
                </tr>
            </thead>
            <tbody>
                {
                    props.tableData.map((datum, index) => {
                        return <SortableTableRow rowData={datum} rowDataMap={props.rowDataMap} key={`address${index}`}></SortableTableRow>
                    })
                }
            </tbody>
        </table>
    );
};

export default SortableTable;