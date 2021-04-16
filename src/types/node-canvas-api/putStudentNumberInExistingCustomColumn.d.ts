export = putStudentNumberInExistingCustomColumn;
/**
 * Put student number in existing custom column by ID
 * @param {Number} courseId the course ID of the target course.
 * @param {Number} customGradeBookId the ID of the custom gradebook ID.
 * @return {Promise} A promise that resolves to a CustomColumn object: https://canvas.instructure.com/doc/api/custom_gradebook_columns.html#CustomColumn
 */
declare function putStudentNumberInExistingCustomColumn(courseId: number, customGradeBookId: number): Promise<any>;
