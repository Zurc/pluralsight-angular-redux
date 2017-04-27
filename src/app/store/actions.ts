//    define the type of the action
export const FILTER_COURSES = 'courses/FILTER';

//    export the action creator. its purpose is to return the correct object that represents our action
export function filterCourses (searchText: string) {
    return {                        // it will return the action object
        type: FILTER_COURSES,        // with the type set to the constant
        searchText                    // and with the searchText on it
    }
}
