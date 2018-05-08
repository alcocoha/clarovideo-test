import * as listActions from "../../actions";

describe('ListActions', () => {
    it('Debe mandar un llamado a los datos', () => {
        const expectedAction = {
            type: 'FETCHING_DATA'
        }
        expect(listActions.getData()).toEqual(expectedAction);
    });
    it('Debe mandar un llamado a los datos', () => {
        const payloadTest = [{'foo':'foo'},{'bar':'bar'}];
        const expectedAction = {
            type: 'FETCHING_DATA_SUCCESS',
            payload: payloadTest
        }
        expect(listActions.getDataSuccess(payloadTest)).toEqual(expectedAction);
    });
    it('Debe mandar un llamado a los datos', () => {
        const expectedAction = {
            type: 'FETCHING_DATA_FAILURE'
        }
        expect(listActions.getDataFailure()).toEqual(expectedAction);
    });
});