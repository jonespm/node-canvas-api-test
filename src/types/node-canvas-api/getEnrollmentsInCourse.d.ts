export = getEnrollmentsInCourse;
/**
 * Retrieves all enrollments in course
 * @param {Number} courseId the course id.
 * @param {Array} options an array of options to include.
 * @return {Promise} A promise that resolves to a list of Enrollment objects: https://canvas.instructure.com/doc/api/enrollments.html#method.enrollments_api.index
 */
declare function getEnrollmentsInCourse(courseId: number, ...options: any[]): Promise<any>;
