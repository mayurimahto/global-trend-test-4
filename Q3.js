//Problem Statement
//Write a function to solve the 0/1 Knapsack problem using dynamic programming.
//Sample Test Case
//Input: weights = [1, 2, 3], values = [10, 15, 40], capacity = 6 Output: 55 (Maximum value that can be obtained)

//THERE IS A MISTAKE THE OUTPUT SHOULD BE 65, as we can pick all the available weights 1+2+3 = 6 so totak weight would be 10+15+40 = 65


function knapsack(weights, values, capacity){
    const n = weights.length;
    
    const dp = Array.from({length: n+1}, ()=>Array(capacity+1).fill(0));
    
    for(let i=1; i<=n; i++){
        for(let w=1; w<=capacity; w++){
            let nottake = dp[i-1][w];
            if(weights[i-1]<=w){
                let take = dp[i-1][w - weights[i-1]] + values[i-1]
                dp[i][w] = Math.max(nottake, take);
            }
            else{
                dp[i][w] = nottake;
            }
        }
    }
    
    return dp[n][capacity];
}

const weights = [1, 2, 3];
const values = [10, 15, 40];
const capacity = 6;

console.log(knapsack(weights, values, capacity));
