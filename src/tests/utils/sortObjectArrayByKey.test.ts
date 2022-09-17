import { sortObjectArrayByKey } from "../../utils/sortObjectArrayByKey";

describe('sortObjectArrayByKeys', () => {

    it('should properly sort an array of flat objects by key without mutating the original array', () => {
        // Arrange
        const data = [
            { fruit: "Banana"},
            { fruit: "Apple"},
            { fruit: "Pear"}
        ]
        // Act
        const sortedData = sortObjectArrayByKey(data, "fruit");
        // Assert
        expect(sortedData[0]["fruit"]).toEqual("Apple");
        expect(sortedData[1]["fruit"]).toEqual("Banana");
        expect(sortedData[2]["fruit"]).toEqual("Pear");
        expect(data[0]["fruit"]).toEqual("Banana");
        expect(data[1]["fruit"]).toEqual("Apple");
        expect(data[2]["fruit"]).toEqual("Pear");
        
    })

})