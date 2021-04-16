export = getAllCoursesInDept;
/**
 * Retrieves every course in an account.
 * @param {Number} accountId the account id.
 * @param {String} deptName name of the dept (APBI, FNH, etc).
 * @param {Array} options an array of options to include.
 * @return {Promise} A promise that resolves to a list of Course objects: https://canvas.instructure.com/doc/api/courses.html#Course
 */
declare function getAllCoursesInDept(accountId: number, deptName: string, ...options: any[]): Promise<any>;
