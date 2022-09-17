import { render } from 'react-dom';
import { unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import SortableTableRow from '../../components/SortableTableRow';

let table:any = null;
let tbody:any = null;
beforeEach(() => {
  // setup a DOM element as a render target
  table = document.createElement("table")
  tbody = document.createElement("tbody");
  table.appendChild(tbody)
  document.body.appendChild(table);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(tbody);
  table.remove();
  table = null;
  tbody = null;
});

describe('SortableTableRow', () => {

    const rowDataMap = {
        dataOne: "One",
        dataTwo: "Two",
        dataThree: "Three"
    }

    const rowData = {
        dataOne: "1",
        dataTwo: "2",
        dataThree: "3"
    }

    it('Should render a number of cells equal to the number of keys in rowDataMap with the correct data from rowData', () => {
        act(() => {
            render(<SortableTableRow rowData={rowData} rowDataMap={rowDataMap}></SortableTableRow>, tbody)
        })
        let tableDataList = tbody.getElementsByTagName('td');
        expect(tableDataList.length).toBe(3);
        expect(tableDataList[0].textContent).toBe("1");
        expect(tableDataList[1].textContent).toBe("2");
        expect(tableDataList[2].textContent).toBe("3");
    });

})

