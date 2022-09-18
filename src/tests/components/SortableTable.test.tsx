import { render } from 'react-dom';
import { unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import SortableTable from '../../components/SortableTable';

let container:any = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div")
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe('SortableTable', () => {

    const rowDataMap = {
        dataOne: "One",
        dataTwo: "Two",
        dataThree: "Three"
    }

    const tableData = [{
        dataOne: "1",
        dataTwo: "2",
        dataThree: "3"
    }]

    const callback = jest.fn();

    it('should render the number of columns that rowDataMap contains and call the sorting callback on click of a header', () => {
        act(() => {
            render(<SortableTable tableData={tableData} rowDataMap={rowDataMap} sortingCallback={callback}></SortableTable>, container);
            (container as HTMLDivElement).getElementsByTagName('th')[0].click();
        });
        expect((container as HTMLDivElement).getElementsByTagName('th').length).toBe(Object.keys(rowDataMap).length);
        expect(callback).toHaveBeenCalled();
    });

})

