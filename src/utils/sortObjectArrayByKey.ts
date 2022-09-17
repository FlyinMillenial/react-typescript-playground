// TODOD: The floats stored as strings don't sort properly
const sortObjectArrayByKey = (inputList: Array<any>, keyToSortBy: string, ascending:boolean = true) => {
    const listToSort = [...inputList];
    listToSort.sort((a, b) => {
        if (a[keyToSortBy] < b[keyToSortBy]) {
            return ascending ? -1 : 1;
          }
          if (a[keyToSortBy] > b[keyToSortBy]) {
            return ascending ? 1 : -1;
          }
          return 0;
    })
    return listToSort;
}

export { sortObjectArrayByKey };