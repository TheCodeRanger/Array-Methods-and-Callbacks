import { fifaData } from './fifa.js';

// ⚽️ M  V P ⚽️ //

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 1: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Investigate the data above. Practice accessing data by console.log-ing the following pieces of data note, you may want to filter the data first 😉*/
const finals2014 = fifaData.filter(function(item){
    return item.Year === 2014 && item.Stage === 'Final';
});
//(a) Home Team name for 2014 world cup final
console.log('Task 1 a:', finals2014[0]['Home Team Name']);
//(b) Away Team name for 2014 world cup final
console.log('Task 1 b:', finals2014[0]['Away Team Name']);
//(c) Home Team goals for 2014 world cup final
console.log('Task 1 c:', finals2014[0]['Home Team Goals']);
//(d) Away Team goals for 2014 world cup final
console.log('Task 1 d:', finals2014[0]['Away Team Goals']);
//(e) Winner of 2014 world cup final */
console.log('Task 1 e:', finals2014[0]['Home Team Name']);

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {
   const finalsData = data.filter(function(item){
    return item.Stage === 'Final';
   });
   console.log('Task 2', finalsData); 
   return finalsData;
}



/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 3: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(data, getFinalsCB) {
    const years = getFinalsCB(data).map(function(item){
        return item['Year']; 
    });
    console.log(years);
    return years;
}
getYears(fifaData, getFinals);



/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 4: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(data, getFinalsCB) {
    const winners = getFinalsCB(data).map(function(item){
        if(item['Home Team Goals'] > item['Away Team Goals']){
            return item['Home Team Name'];
        } else if(item['Home Team Goals'] < item['Away Team Goals']){
            return item['Away Team Name'];
        } else{
            return 'Both teams sucked';
        }
    }); console.log(winners);
        return(winners);
}




/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 5: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(fifaData, getYearsCB, getWinnersCB) {
    let winner = getWinnersCB(fifaData);
    let years = getYearsCB(fifaData);

    const announce = winner.map(function(item, index){
        return `In ${years[index]}, ${item} won the world cup!`
    }) 
    console.log(announce);
    return announce;
}


/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 6: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {
    const aveHomeGoals = data.reduce(function(accumulator, item){
        return accumulator + item['Home Team Goals'];
    },0);
    const aveAwayGoals = data.reduce(function(accumulator, item){
        return accumulator + item['Away Team Goals'];
    },0);
    console.log(`${aveHomeGoals/data.length + aveAwayGoals/data.length}`);
    // return `${aveHomeGoals/data.length + aveAwayGoals/data.length}`
    const avgGoals = aveHomeGoals/data.length + aveAwayGoals/data.length
    return avgGoals.toFixed(2);
}

getAverageGoals(fifaData);




/// 🥅 STRETCH 🥅 ///

/* 💪💪💪💪💪 Stretch 1: 💪💪💪💪💪 
Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

}



/* 💪💪💪💪💪 Stretch 2: 💪💪💪💪💪 
Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

}


/* 💪💪💪💪💪 Stretch 3: 💪💪💪💪💪
Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

}


/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */


/* 🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑 */
function foo(){
    console.log('its working');
    return 'bar';
}
export default{
    foo,
    getFinals,
    getYears,
    getWinners,
    getWinnersByYear,
    getAverageGoals
}