//Named Import
import { add, sub } from "./math.js";
//Default Import
import userProfile from "./userProfile.js";

// 3. 실행 로직 (main.js에 유지)
console.log(add(10, 20)); //30
console.log(sub(10, 20)); //-10
console.log(userProfile.name); //'홍길동'
