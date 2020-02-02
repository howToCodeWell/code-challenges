---
path: "/2020/february"
date: "2020-02-02"
title: "February 2020 Code Challenges"
youtube_id: ""
technologies: ['js', 'html', 'php']
challengers: ['']
---
## Level 1 - Encode a string
- Use JavaScript or PHP to encode a string
- This could either be a command or a web page that converts a given string to a hashed string
- If it's a command then the first argument should be the string you want to encrypt.
- If it's a webpage you can pass the string in the query string.

Web request

`/hashthis?string=helloworld`

Or command 
```bash
$ ./hashthis.php helloword
```

## Level 2 Add the hashed string to a text file
-  Create a new line in a text file for every hashed string

## Level 3 Create a form that verifies the encryption of a submitted string
- Loop over existing hashes in the text file and verify that the submitted string exist in the list of hashes
- Print the result
- If strings have been decoded then print out the decoded string and its hash