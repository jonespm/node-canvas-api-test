export = getProgress;
/**
 * Retrieves progress of asynchronous operation.
 * @param {Number} id get the progress of id.
 * @return {Promise} A promise that resolves to a Progress object: https://canvas.instructure.com/doc/api/progress.html
 */
declare function getProgress(id: number): Promise<any>;
