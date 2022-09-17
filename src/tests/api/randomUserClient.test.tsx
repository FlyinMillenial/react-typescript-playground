import axios from "axios";
import { getRandomUsers } from "../../api/randomUserClient";

describe('randomUserClient', () => {
    
    it("should have the correct query param set reflecting the input number of results", () => {
        // arrange
        const axiosSpy = jest.spyOn(axios, 'get').mockImplementation(() => Promise.resolve({}));
        // act
        getRandomUsers(20);
        // assert
        expect(axiosSpy).toHaveBeenCalledWith("https://randomuser.me/api/?results=20");

    })

    it("should return the 'data' element of the returned object", async () => {
        // arrange
        jest.spyOn(axios, 'get').mockImplementation(() =>
            Promise.resolve({
                data: "Hello world!"
            })
        );
        // act / assert
        await expect(getRandomUsers(20)).resolves.toBe("Hello world!");
    })

})