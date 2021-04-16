export = copyCourseContent;
/**
 * Initiates course copy.
 * @param {Number} sourceCourseId the course ID of the source course.
 * @param {Number} targetCourseId the course ID of the target course.
 * @return {Promise} A promise that resolves to a progress ID that can be used to look up progress
 * of copy
 */
declare function copyCourseContent(sourceCourseId: number, targetCourseId: number): Promise<any>;
