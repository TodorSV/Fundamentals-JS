function cutR(input) {
    /* The input will be a single string.
    Write a function that cuts the given string into half and reverse the two halves. 
    Print each half on a separate line.
    */
   let firstHalf=input
   .split("")//правим масив
   .slice(0, input.length/2)//режем до средата
   .reverse()//обръщаме 
   .join("");//съединяваме

   let secondHalf=input
   .split("")
   .slice(input.length/2,input.length)//от средата до края
   .reverse()
   .join("");

   
   console.log(firstHalf);
   console.log(secondHalf);
}
cutR('tluciffiDsIsihTgnizamAoSsIsihT')