// node js_capstone.js

//   pseudocode
// 1. we have a string "abce"
// 2. go through every characters
// 3. compare with ASCII charts for missing characters
// 4. display the missing characters
// 5. if no letters missing, return undefined

function missingLetter(str) {

    for (let i = 0; i < str.length; i++) {
     const charCode = str.charCodeAt(i);
 
      if (charCode !== str.charCodeAt(0) + i) {
        return String.fromCharCode(charCode - 1);
      }
    }
    return undefined;
  }
  
  // test here
  console.log(missingLetter("abce"));
  console.log(missingLetter("abcdefghjklmno"));
  console.log(missingLetter("stvwx"));
  console.log(missingLetter("bcdf"));
  console.log(missingLetter("abcdefghijklmnopqrstuvwxyz"));

