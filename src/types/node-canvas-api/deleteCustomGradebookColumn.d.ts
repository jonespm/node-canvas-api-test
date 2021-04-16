export = deleteCustomGradebookColumn;
/**
 * Creates course
 * @param {Number} courseId the course ID of the target course.
 * @return {Promise} A CustomColumn objects: https://canvas.instructure.com/doc/api/custom_gradebook_columns.html#CustomColumn
 */
declare function deleteCustomGradebookColumn(courseId: number, gradebookColumnId: any): Promise<any>;
