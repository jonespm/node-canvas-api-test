export = putStudentNumberInGradeColumn;
/**
 * Put student number in grade column
 * @param {Number} courseId the course ID of the target course.
 * @param {Number} gradebookColumnId the position of the column, starting from left to right, indexed at 1.
 * @param {Number} studentId the student ID
 * @param {Object} body the object to put
 * @return {Promise} A promise that resolves to a CustomColumn object: https://canvas.instructure.com/doc/api/custom_gradebook_columns.html#CustomColumn
 */
declare function putStudentNumberInGradeColumn(courseId: number, gradebookColumnId: number, studentId: number, body: any): Promise<any>;
