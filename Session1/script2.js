var teamName="Ducks";
var seasonRecord="3-0-1"
var powerPlay=88;
var peneltyKill=89.6;
var averageSOG=35;
var savePercentage=.950
var division="Western"


var schedulewk1="LA Kings";
var schedulewk2="SJ Sharks";
var schedulewk3="AZ Coyotes";
var schedulewk4="Canucks";
var schedulewk5="Flames";


var scoreOne=1;
var scoreTwo=2;
var scoreThree=3;
var scoreFour=4;
var scoreFive=5;


var win=true;
var lose=false;

var delayedGame="Delayed";

document.write(`
    <p>
    <table>
        <tr> Team: <b>${teamName}</b></tr>
        <td> Record: ${seasonRecord}</td>
        <td> Power Play: ${powerPlay}</td>
        <td> Penelty Kill %: ${peneltyKill}</td>
        <td> Average Shots on Goal: ${averageSOG}</td>
        <td> Golie Save Percentage: ${savePercentage}</td>
        <tr> Division: <b>${division}</b></tr>
    </table>
    </p>

    <p> ${teamName} vs. ${schedulewk1} Score: ${scoreThree} - ${scoreOne}</p>
    <p> ${teamName} vs. ${schedulewk2} Score: ${scoreFour} - ${scoreOne}</p>
    <p> ${teamName} vs. ${schedulewk3} Score: ${scoreFive} - ${scoreOne}</p>
    <p> ${teamName} vs. ${schedulewk4} : ${delayedGame}</p>
    <p> ${teamName} vs. ${schedulewk5} Score: ${scoreThree} - ${scoreOne}</p>


`)
var record=(`
    "Game 1" ${win}
    "Game 2" ${win}
    "Game 2" ${win}
    "Game 2" ${delayedGame}
    "Game 2" ${win}

`)


  console.log(
      record
  )