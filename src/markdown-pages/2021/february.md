---
path: "/2021/february"
date: "2021-02-07"
title: "PHP OOP Quiz"
youtube_id: ""
technologies: ['php']
challengers: []
---

Test your PHP OOP knowledge with these interview style questions.  
Some questions require a yes or no answer and others require a code example.  
Please use Markdown to write your answers and [read the code submission details](/how-to-submit-your-code).

Your code will be reviewed on Twitch March 28th (Sunday)

## Question 1
Is multiple inheritance supported in PHP [yes/no]?

## Question 2
Explain the difference between a class and an object.

## Question 3
Demonstrate the singleton pattern.

## Question 4
Explain why the singleton pattern is sometimes considered an anti-pattern.

## Question 5
Explain what an abstract class does?

## Question 6
Can an abstract class extend another abstract class [yes/no]?

## Question 7
Can a PHP interface extend another interface [yes/no]?

## Question 8
How many interfaces can a PHP class implement?

## Question 9
Explain when you would use an interface instead of an abstract class?

## Question 10
Explain the output of the following code.
```php
<?php
final class BaseClass {
   public function test() {
       return "BaseClass::test() called";
   }
}

class ChildClass extends BaseClass {

}

$obj = new ChildClass();
$output = $obj->test();
echo $output;
?>
```
