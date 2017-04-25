import { Course } from ".././courses/course";    // import interface
import { IAppState } from "./IAppState";

const initialState: IAppState = {
    courses: [
        {
            "id": 1,
            "name": "Building apps with Angular",
            "topic": "Angular JS"
        },
        {
            "id": 2,
            "name": "Building apps with Angular and Redux",
            "topic": "Angular, Redux"
        },
        {
            "id": 3,
            "name": "Building apps with Angular, Redux and functional programming",
            "topic": "Angular, Redux, ngrx"
        }
    ]
};

export function reducer(state: initialState, action) {
    return state;
}