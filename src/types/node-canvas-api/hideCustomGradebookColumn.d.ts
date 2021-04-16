export = hideCustomGradebookColumn;
/**
 * Hide Custom Gradebook Column by Column Id
 * @param {Number} courseId the course id.
 * @param {Number} columnId the column id.
 * @return {Promise} A promise that resolves to a CustomColumn object: https://canvas.instructure.com/doc/api/custom_gradebook_columns.html#CustomColumn
*/
declare function hideCustomGradebookColumn(courseId: number, columnId: number): Promise<any>;
