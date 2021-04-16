export = getSyllabusOfCourse;
/**
 * Retrieves syllabus of course
 * @param {Number} courseId the course id.
 * @return {Promise} A promise that resolves to a custom object: { courseCode, courseID, syllabus }
 */
declare function getSyllabusOfCourse(courseId: number): Promise<any>;
