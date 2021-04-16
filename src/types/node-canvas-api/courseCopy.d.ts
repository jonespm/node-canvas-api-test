export = courseCopy;
/**
 * Initiates course copy.
 * @param {Number} sourceCourseId the course ID of the source course.
 * @param {Number} targetCourseId the course ID of the target course.
 * @return {Promise} A promise that resolves to a contentMigration object
 */
declare function courseCopy(sourceCourseId: number, targetCourseId: number): Promise<any>;
