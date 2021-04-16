export = getCustomGradeBookColumns;
/**
 * Get Custom GradeBook Columns
 * @param {Number} courseId the course id.
 * @return {Promise} A promise that resolves to a CustomColumn object: https://canvas.instructure.com/doc/api/custom_gradebook_columns.html#CustomColumn
 */
declare function getCustomGradeBookColumns(courseId: number): Promise<any>;
