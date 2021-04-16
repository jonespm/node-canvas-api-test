export = downloadFile;
/**
 * Downloads specified fileID from Canvas to specified path
 * @param {Number} fileId the fileId of the file
 * @param {String} path the path that the file should be downloaded to
 * @return {Promise} A Promise that resolves to a log that inidicated what the filename of the downloaded file is. On error, logs the error
 */
declare function downloadFile(fileId: number, path: string): Promise<any>;
