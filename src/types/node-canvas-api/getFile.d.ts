export = getFile;
/**
 * Get file object by fileId
 * @param {Number} fileId the file id.
 * @return {Promise} A promise that resolves to a File object: https://canvas.instructure.com/doc/api/files.html#File
 */
declare function getFile(fileId: number): Promise<any>;
