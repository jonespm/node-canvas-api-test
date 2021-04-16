export = updateCourse;
/**
 * Update a course
 * @param {Number} courseId the course id.
 * @param {Object} options the options to pass in body of PUT request: https://canvas.instructure.com/doc/api/courses.html#method.courses.update
 * @return {Promise} A promise that resolves to a course metadata response: https://canvas.instructure.com/doc/api/courses.html#method.courses.update
 */
declare function updateCourse(courseId: number, options: any): Promise<any>;
