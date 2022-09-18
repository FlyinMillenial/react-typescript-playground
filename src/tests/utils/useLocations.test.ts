import { act, renderHook } from "@testing-library/react";
import React from "react";
import * as getRandomUsersModule from "../../api/randomUserClient";
import * as getFlattenedLocationModule from "../../types/location";
import { useLocations } from "../../utils/useLocations";
import { location } from "../../types/location"


describe('useLocations', () => {

    let useStateSpy:any;
    let useEffectSpy:any;
    let getRandomUsersSpy:any;
    let getFlattenedLocationSpy:any;

    const mockUserData ={
        results: [
            {},
            {},
            {}
        ]
    } 

    beforeEach(() => {
        useStateSpy = jest.spyOn(React, 'useState');
        useEffectSpy = jest.spyOn(React, 'useEffect');
        getRandomUsersSpy = jest.spyOn(getRandomUsersModule, 'getRandomUsers')
            .mockImplementation(() => Promise.resolve(mockUserData));
        getFlattenedLocationSpy = jest.spyOn(getFlattenedLocationModule, 'getFlattenedLocation')
            .mockImplementation(
                () => (
                    ({city: 'a'} as location)
                )
            );
    })

    it('Should call useState, useEffect, getRandomUsers, getFlattenedLocations, and return the correct number of results', async () => {
        let result:any;
        await act( async () => {
            result = await renderHook(useLocations, {initialProps: 5}).result;
        })
        expect(useStateSpy).toHaveBeenCalled();
        expect(useEffectSpy).toHaveBeenCalled();
        expect(getRandomUsersSpy).toHaveBeenCalled();
        expect(getFlattenedLocationSpy).toHaveBeenCalledTimes(mockUserData.results.length);
        expect(result.current[0].length).toBe(mockUserData.results.length);
    })

})