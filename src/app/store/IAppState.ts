import { filterCourses } from './actions';
import { Course } from ".././courses/course";    // import interface

export interface IAppState {
    courses: Course[],
    filteredCourses: Course[]
}