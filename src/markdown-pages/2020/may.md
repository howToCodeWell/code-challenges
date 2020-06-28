---
path: "/2020/may"
date: "2020-05-03"
title: "May 2020 Code Challenges"
youtube_id: ""
technologies: ['javascript', 'html5', 'php', 'css3']
challengers: ['https://github.com/mrdb303/coding-tests', 'https://github.com/michaelgallipo/monster-battle.git', 'https://github.com/Tyrianad/MarchChallenge2020']
---
We are going to be build a game! It's going to take a couple of months and this is the 3rd and final part

# Building a fighting game (Part 3)
In this challenge you will be starting the fight, processing the special powers and displaying the winner.

You can mix PHP, JavaScript, HTML and CSS.

Frameworks are allowed however bonus points if you don't use frameworks

*Please note that there is no health or strength cap however if the health is 0 the player should be removed from the game.*

## Level 1 - Pair up
- Randomly pair fighters together
- A creature can only have one opponent per fight.
- Create a column which holds the opponents name.
- There will be fighters who do not have an opponent due to an odd number of fighters
    - If there is an odd number please ensure that the special powers are still processed
 
## Level 2 - Distribute the special powers
- Randomly distribute the special powers across the creatures
- Only one special power is allowed per creature
- Display the special power in the 'Special Power' column

## Level 3 - Process the special powers
- Adjust the HP, strength and remove creatures from the brawl where necessary
- Once the opponents have been paired randomly select which opponent uses their special power first
- Remove players who have a health of zero.

**Example 1**

A double 2 was rolled

Opponent A starts with a health of 200

Opponent B starts with a health of 250

- Opponent A = Increases health by 100
- Opponent B =  Decreases their opponents health by 100

**Result**

- Opponent A having no change to health. It would still be 200

**Example 2**

A double 5 was rolled

- Opponent A = Decreases their strength between 1 - 100
- Opponent B =  Hides (Skips a go)

**Result**

- Opponent A would have a reduction of health between 1 - 100
- The fight would not happen because opponent B is hidden

**Example 3**

A double 6 was rolled

- Opponent A = Steals 50% of the strength from opponent B
- Opponent B = Increases their strength between 1 - 100

**Result**

- Opponent B would gain an increase of strength between 1 - 100
- Opponent A would gain 50% of the Opponent B's health

## Level 4 - Fight!
- After the special powers have been processed randomly decided which opponent will strike first
- Subtract the sum of the strength plus the dice roll from the opponents health
- If the opponents health has been reduced to zero then remove that opponent from the game
- Repeat for the second opponent

## Level 5 - Display the winner!
- Keep rolling the dice until you get a winner
- Show that winner in the modal/alert
    
##  Level master
- Don't use any frameworks!
    
We will be using this setup for Aprils challenge.  So make it look good! :)