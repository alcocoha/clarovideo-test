import reducer from "../../reducers/dataReducer";

const res = [{ id: "769902", title: "Triángulo diabólico de las Bermudas", title_episode: null, title_uri: "Triangulo-diabolico-de-las-Bermudas", title_original: "Triángulo diabólico de las Bermudas" }, { id: "769573", title: "En la Luna", title_episode: null, title_uri: "En-la-Luna", title_original: "Moon" }]

describe('ListReducers', () => {
    describe('dataReducer', () => {
        let state;
        beforeEach(()=> {
           state = reducer({}, {
               type: 'FETCHING_DATA_SUCCESS',
               payload: res
           })
        });
        it('Debe de tener datos el state', () => {
            expect(state.payload.length).toEqual(2);
        });
        it('Debe de tener datos el state', () => {
            expect(state.payload[3]).toEqual(undefined);
        });
    })
});