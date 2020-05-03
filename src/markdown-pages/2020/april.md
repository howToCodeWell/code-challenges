---
path: "/2020/april"
date: "2020-04-05"
title: "April 2020 Code Challenges"
youtube_id: ""
technologies: ['javascript', 'html5', 'php', 'css3']
challengers: ['https://github.com/mrdb303/coding-tests-apr2020', 'https://github.com/michaelgallipo/monster-battle.git', 'https://github.com/ilmala/fighting-game']
---
We are going to be improving the game that we created in the [last challenge](/2020/march)

# Roll the dice and start to play (Part 2)
In this challenge you will be adding some of functionality to the game
You can mix PHP, JavaScript, HTML and CSS.
Frameworks are allowed however bonus points if you don't use frameworks
 
## Level 1 - Delete the rows
- Upon clicking the delete button the row should be removed. This should remove the character from the game

## Level 2 - Increase HP
- Upon clicking the 'Increase health' button increase the creatures health by one point

## Level 3 - Decrease HP
- Upon clicking the 'Decrease health' button decrease the creatures health by one

## Level 4 - Roll those dice
- When clicking the 'Roll Dice Button' generate two random numbers between 1 and 6
- Display both of the numbers in alert/modal
- When a double is rolled display 'Special Powers Activated' in the alert/modal
- Store the dice rolls and record if the special powers are activated in a object that can be accessed in the next challenge

## Level 5 - Display Special Powers
- Create 6 special powers
    - Double 1 = Increases health to 100
    - Double 2 = Decreases opponents heath by 100
    - Double 3 = Increases strength between 1 - 100
    - Double 4 = Decreases strength between 1 - 100
    - Double 5 = Hides (Skips a go)
    - Double 6 = Steals 50% of the strength from the opponent 
- When rolling a double display which special powers are active
- When rolling a double all the special powers before are also active.
### Examples

Rolling a double 3 will activate the following:
- Increases strength between 1 - 100
- Decreases opponents heath by 100
- Increases health to 100

Rolling a double 5 will activate the following:
- Hides (Skips a go)
- Decreases strength between 1 - 100
- Increases strength between 1 - 100
- Decreases opponents heath by 100
- Increases health to 100

Rolling a double 6 will activate all the special powers

Don't do anything with these powers yet.  This will come together in the next challenge.

##  Level master
- Don't use any frameworks!
    
We will be using this setup for Aprils challenge.  So make it look good! :)