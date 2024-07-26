//Q-1
//Problem Statement
//Write a function to find the longest common subsequence of two given strings.
//Sample Test Case
//Input: str1 = "abcde", str2 = "ace" Output: 3 (The LCS is "ace")


function lcs(s1, s2){
    const memo = {};
    
    function lcsmemo(i, j){
        if(i==0 || j==0){
            return 0;
        }
        
        const key = `${i}-${j}`;
        if(memo[key]!==undefined){
            return memo[key];
        }
        
        if(s1[i-1] === s2[j-1]){
            memo[key] = 1 + lcsmemo(i-1, j-1);
        }
        else{
            memo[key] = Math.max(lcsmemo(i-1, j), lcsmemo(i, j-1));
        }
        return memo[key];
    }
    return lcsmemo(s1.length, s2.length);
}

const s1 = "abcde";
const s2 = "ace";

console.log(lcs(s1, s2));

