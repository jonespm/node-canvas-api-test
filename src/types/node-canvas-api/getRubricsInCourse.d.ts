export = getRubricsInCourse;
/**
 * Retrieves all rubrics in course
 * @param {Number} courseId the course id.
 * @param {Array} options an array of options to include.
 * @return {Promise} A promise that resolves to a list of Rubric objects: https://canvas.instructure.com/doc/api/rubrics.html
 */
declare function getRubricsInCourse(courseId: number, ...options: any[]): Promise<any>;
