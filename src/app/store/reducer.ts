import { Course } from ".././courses/course";    // import interface
import { IAppState } from "./IAppState";
import { FILTER_COURSES, REQUEST_COURSES_SUCCESS } from "../courses/course.actions";

const courses = [
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

const initialState: IAppState = {
    courses,
    filteredCourses: courses
};

function filteredCourses(state, action): IAppState {
    return Object.assign({}, state, {
                filteredCourses : state.courses.filter(c => c.name.toLowerCase().indexOf(action.searchText.toLowerCase()) > -1)
            })
}

function storeCourses(state, action): IAppState {
    return Object.assign({}, state, {
        courses: action.courses,
        filteredCourses: action.courses
    })
}

export function reducer(state = initialState, action) {
    switch(action.type) {
        case FILTER_COURSES: 
            return filteredCourses(state, action)
        case REQUEST_COURSES_SUCCESS: 
            return storeCourses(state, action)
        default: 
            return state;
    }
}