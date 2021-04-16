export = createCustomGradebookColumn;
/**
 * Creates custom gradebook column
 * @param {Number} courseId the course ID of the target course.
 * @param {String} columnTitle the title of the custom column.
 * @param {Number} columnPosition the position of the column, starting from left to right, indexed at 1.
 * @return {Promise} A promise that resolves to a CustomColumn object: https://canvas.instructure.com/doc/api/custom_gradebook_columns.html#CustomColumn
 */
declare function createCustomGradebookColumn(courseId: number, columnTitle: string, columnPosition: number): Promise<any>;
