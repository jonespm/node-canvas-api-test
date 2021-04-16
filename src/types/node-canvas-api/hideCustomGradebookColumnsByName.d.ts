export = hideCustomGradebookColumnsByName;
/**
 * Hide Custom Gradebook Column by Name
 * @param {Number} courseId the course ID of the target course.
 * @param {Array} gradebookColumnNames the title of the custom column.
 * @return {Promise} A promise that resolves to a list of CustomColumn object: https://canvas.instructure.com/doc/api/custom_gradebook_columns.html#CustomColumn
 */
declare function hideCustomGradebookColumnsByName(courseId: number, ...gradebookColumnNames: any[]): Promise<any>;
