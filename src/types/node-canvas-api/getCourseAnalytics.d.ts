export = getCourseAnalytics;
/**
 * Retrives high-level course analytics
 * @param {Number} courseId the course id.
 * @return {Promise} A promise that resolves to a User object: https://canvas.instructure.com/doc/api/users.html#User
 */
declare function getCourseAnalytics(courseId: number): Promise<any>;
