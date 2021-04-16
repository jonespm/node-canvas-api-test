export = deleteAllCustomGradebookColumns;
/**
 * Deletes all custom gradebook columns
 * @param {Number} courseId the course ID of the target course.
 * @return {Promise} A list of CustomColumn objects: https://canvas.instructure.com/doc/api/custom_gradebook_columns.html#CustomColumn
 */
declare function deleteAllCustomGradebookColumns(courseId: number): Promise<any>;
