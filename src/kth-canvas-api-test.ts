import CanvasApi from "@kth/canvas-api";
// or, with CommonJS:
// const CanvasApi = require("@kth/canvas-api");

async function start() {
  const canvas = new CanvasApi(
    "https://umich.beta.instructure.com/api/v1",
    "1770~<CANVAS API KEY>"
  );
  console.log(canvas)
  const { body } = await canvas.get("accounts/1")
  console.log(body)
}

start();


// API patterns needed
// Separate calls to CirrusIdentity
// Canvas API's 

//TODO Line 15
//TODO Line 8,9,11,12


export function getCourses (courseId?: number, params?: any) {
  // courses?{params}
  //Line 16
  // courses/{course_id}?{params}
}

export function getAccounts (accountId: number, method: "users" | "courses", params: any) {
  // Line 5
  // accounts/{account_id}
  // Line 10
  // accounts/{account_id}/users?{params}
  // Line 
  // accounts/{account_id}/courses?{params}
}

export function getSections (sectionId: number, params?: any) {
  // Lines 2-4, 17
  // sections/{section_id}/enrollments?{params}
}
export function mergeSections (sectionId: number, crossListId?: number) {
  // Lines 6-7
  // sections/{section_id}/crosslist
  // sections/{section_id}/crosslist/{id}
}
export function createSections(courseId: number, params: any) {
  //Line 8
  // courses/{course_id}/sections
}
