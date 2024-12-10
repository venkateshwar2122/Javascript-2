In JavaScript, regular expressions (regex) are patterns used to match character combinations in strings.

[a-z]
[A-Z]
[a-zA-z]
[0-9]
[aeiou]
[^aeiou]
^regularexpression
regularexpression$
 *
 +
 ?
pattern{n}
pattern{n,}
pattern{m,n}
. 
x|y|z
\s
\S
\d
\D
\w
\W  

1. [a-z]
Matches: Any lowercase letter between 'a' and 'z'.
Example:

let regex = /[a-z]/;
console.log(regex.test('a'));  // true
console.log(regex.test('Z'));  // false (uppercase letters don't match)

2. [A-Z]
Matches: Any uppercase letter between 'A' and 'Z'.
Example:

let regex = /[A-Z]/;
console.log(regex.test('B'));  // true
console.log(regex.test('a'));  // false (lowercase letters don't match)

3. [a-zA-Z]
Matches: Any letter, either lowercase ('a'–'z') or uppercase ('A'–'Z').
Example:

let regex = /[a-zA-Z]/;
console.log(regex.test('c'));  // true
console.log(regex.test('D'));  // true
console.log(regex.test('1'));  // false (digits don't match)

4. [0-9]
Matches: Any digit between '0' and '9'.
Example:

let regex = /[0-9]/;
console.log(regex.test('5'));  // true
console.log(regex.test('a'));  // false (letters don't match)

5. [aeiou]
Matches: Any lowercase vowel ('a', 'e', 'i', 'o', 'u').
Example:

let regex = /[aeiou]/;
console.log(regex.test('e'));  // true
console.log(regex.test('b'));  // false (non-vowel consonants don't match)

6. [^aeiou]
Matches: Any character that is not a lowercase vowel.
The ^ inside the brackets negates the character class, meaning it matches everything except the characters specified.
Example:

let regex = /[^aeiou]/;
console.log(regex.test('b'));  // true (consonants match)
console.log(regex.test('e'));  // false (vowel doesn't match)


        #NOTE1: JYADA KNOWLEDGE.....HOW IS ITERATION WORKING??
        
        let regex = /[^aeiou]/;
        console.log(regex.test('aab'));  // true (because 'b' is not a vowel)
        
        The string 'aab' contains the characters:
        
        'a': This is a vowel, so it does not match the regex /[^aeiou]/ (because the regex is looking for non-vowels).
        'a': This is another vowel, so it also does not match.
        'b': This is a consonant, so it matches the regex /[^aeiou]/ (since b is not a vowel).
        Conclusion:
        Since the regex [^aeiou] matches the character 'b' (a consonant), and the test() method stops as soon as it finds a match, the result will be true.


        #NOTE2: the whole string should not conatin any vowel
        
        If you want to check that a string does not contain any vowels (i.e., no characters from 'a', 'e', 'i', 'o', 'u'), 
        you can modify your regular expression to ensure that none of the characters in the string are vowels.
        
        To achieve this, you need to check that the string consists only of non-vowel characters. Here's how you can do it:
        
        Regular Expression:
        
        let regex = /^[^aeiou]*$/;
        
        Explanation:
        ^: Anchors the match to the start of the string.
        [^aeiou]: This is a negated character class that matches any character that is not a lowercase vowel ('a', 'e', 'i', 'o', 'u').
        *: Matches zero or more occurrences of the preceding element (i.e., any non-vowel character).
        $: Anchors the match to the end of the string.
        So, this regex will ensure that the entire string consists only of non-vowel characters, and if it contains any vowels, it will not match.
        
        Example:
        
        let regex = /^[^aeiou]*$/;
        
        console.log(regex.test('bcd'));  // true (no vowels)
        console.log(regex.test('apple'));  // false (contains vowels)
        console.log(regex.test('xyz'));  // true (no vowels)
        console.log(regex.test('aei'));  // false (contains vowels)
        Explanation of Example Results:
        regex.test('bcd') returns true because there are no vowels in the string.
        regex.test('apple') returns false because the string contains vowels ('a' and 'e').
        regex.test('xyz') returns true because there are no vowels.
        regex.test('aei') returns false because it contains vowels ('a', 'e', and 'i').
        
        
        NOTE3: EXPALIN EACH ITERATION OF ABOVE PROGRAM 
        
        Let's go step by step through the regular expression /^[^aeiou]*$/ and explain how each iteration works when applied to the string.
        
        Regular Expression:
        
        /^[^aeiou]*$/
        
        Components of the Regular Expression:
        ^: This is the start anchor, meaning the match must begin at the start of the string.
        [^aeiou]: This is a negated character class, meaning it matches any character except the vowels 'a', 'e', 'i', 'o', 'u'.
        *: This means "zero or more occurrences" of the preceding element (in this case, any non-vowel character).
        $: This is the end anchor, meaning the match must end at the end of the string.
        Iteration Explanation:
        Let’s break down how the regex is applied to the string "bcd" and then explain the iteration step by step.
        
        Example 1: regex.test('bcd')
        Start of string:
        
        The ^ at the beginning of the regex ensures that the match starts from the very first character of the string.
        Iteration 1: Check 'b':
        
        The first character is 'b'.
        'b' is not a vowel (it is a consonant), so it matches [^aeiou].
        Since the character matches, the regular expression continues checking the next character.
        Iteration 2: Check 'c':
        
        The second character is 'c'.
        'c' is also not a vowel, so it matches [^aeiou].
        The regex continues checking the next character.
        Iteration 3: Check 'd':
        
        The third character is 'd'.
        'd' is not a vowel, so it matches [^aeiou].
        The regex continues checking the next character.
        End of string:
        
        There are no more characters left in the string.
        Since the entire string consists only of characters that match [^aeiou], the regex is successful.
        The regex has matched the entire string, so regex.test('bcd') returns true.
        
          
        Example 2: regex.test('apple')
        Let’s go step by step through the string 'apple':
        
        Start of string:
        
        The regex starts matching from the first character of the string due to ^.
        Iteration 1: Check 'a':
        
        The first character is 'a'.
        'a' is a vowel, so it does not match [^aeiou].
        Since the regex is looking for non-vowel characters and 'a' is a vowel, it fails the match immediately.
        The regex does not continue checking the rest of the string, because * allows for zero or more non-vowel characters, but the match has already failed at the very first character.
        End of string:
        
        The regex does not proceed to check the rest of the string because it has already failed on the first character.
        Since the string contains vowels, it does not match the full string.
        So, regex.test('apple') returns false.
        
          
        Example 3: regex.test('xyz')
        Let’s go step by step through the string 'xyz':
        
        Start of string:
        
        The regex starts matching from the first character of the string due to ^.
        Iteration 1: Check 'x':
        
        The first character is 'x'.
        'x' is not a vowel, so it matches [^aeiou].
        The regex continues checking the next character.
        Iteration 2: Check 'y':
        
        The second character is 'y'.
        'y' is not a vowel, so it matches [^aeiou].
        The regex continues checking the next character.
        Iteration 3: Check 'z':
        
        The third character is 'z'.
        'z' is not a vowel, so it matches [^aeiou].
        The regex continues checking the next character.
        End of string:
        
        There are no more characters left in the string.
        Since the entire string consists only of characters that match [^aeiou], the regex is successful.
        The regex has matched the entire string, so regex.test('xyz') returns true.





7. ^ (Anchor - Start of String)
Matches: The beginning of a string.
Example:

let regex = /^hello/;
console.log(regex.test('hello world'));  // true
console.log(regex.test('say hello world'));  // false (doesn't start with 'hello')
console.log(regex.test('    hello world'));  // false (IT HAS EMPTY SPACE BEFORE THERFORE IT doesn't start with 'hello')

                                                        
                                                        NOTE: JYADA KNOWLEDGE
                                                        
                                                        
                                                        Matches: The exact literal string "regular expression".
                                                        Example:
                                                        
                                                        let regex = /regular expression/;
                                                        console.log(regex.test('regular expression'));  // true
                                                        console.log(regex.test('regex expression'));  // false

9. regularexpression$
Matches: The literal string "regularexpression" at the end of a string (because $ anchors to the end of the string).
Example:
javascript
Copy code
let regex = /regularexpression$/;
console.log(regex.test('this is a regularexpression'));  // true
console.log(regex.test('regularexpression test'));  // false


10. * (Quantifier - Zero or More)               ZERO OR MORE OCCURENCES
Matches: Zero or more occurrences of the preceding character or group.
Example:

let regex = /a*/;  // Matches zero or more 'a's
console.log(regex.test('aaa'));  // true
console.log(regex.test(''));  // true (zero occurrences is allowed)

                        note : JYADA KNOWLEDGE 
                        
                        let regex = /a*/;
                        console.log(regex.test('MY NAME IS a which is aa and aaa'));  
                        Explanation:
                        
                        The string 'MY NAME IS a which is aa and aaa' contains many characters, but let's focus on how the regex /a*/ works here.
                        The regex /a*/ matches zero or more occurrences of 'a'. So, the regex will attempt to match the longest possible substring starting from the beginning of the string (because * is greedy).
                        In this case, at the start of the string 'MY NAME IS a which is aa and aaa', the very first character is 'M', which is not an 'a'.
                        Since the regex allows for zero occurrences of 'a', it will match nothing until it finds an 'a'. After finding 'a', it will continue to match consecutive 'a' characters until it hits a character that is not 'a'.
                        Thus, when testing the string 'MY NAME IS a which is aa and aaa', the regex:
                        
                        Matches zero 'a' characters at the beginning (because the first character is not 'a').
                        Then, it matches one 'a' in 'a' after "IS".
                        Later, it finds two 'a's in 'aa' in the substring "aa and".
                        It finds another sequence of 'a's in 'aaa' towards the end.
                        Since the regex /a*/ always matches some part of the string (even if it's just zero occurrences of 'a'), it will always return true.
                        
                        Result: true because the regex /a*/ can match substrings like 'a', 'aa', 'aaa', and it will also match zero occurrences of 'a' between other characters.
                        
                        Key Points:
                        The * quantifier allows the regex to match zero or more occurrences of 'a'. So, it will always match at least zero occurrences anywhere in the string.
                        Even if there are no 'a' characters in a part of the string, the regex will still match zero occurrences of 'a', which is why it will return true in the test cases above.
                                                                                


11. + (Quantifier - One or More)
Matches: One or more occurrences of the preceding character or group.
Example:

let regex = /a+/;  // Matches one or more 'a's
console.log(regex.test('aaa'));  // true
console.log(regex.test('a'));  // true
console.log(regex.test(''));  // false (no 'a' is not allowed)


                        note : jyada knowledge
                        
                        let regex = /a+/;
                        console.log(regex.test('MY NAME IS a which is aa and aaa'));       // true
                        Explanation:
                        
                        The string 'MY NAME IS a which is aa and aaa' contains several sequences of the character 'a'.
                        Let's break it down:
                        There's a single 'a' in "a".
                        There's a pair of 'a's in "aa".
                        There's a triplet of 'a's in "aaa".
                        The regex /a+/ looks for one or more consecutive 'a's. As the string contains multiple such sequences of 'a's (including 'a', 'aa', and 'aaa'), 
                          it will successfully match the first occurrence of 'a' and stop because the .test() method only needs to find one match to return true.


  12. ? (Quantifier - Zero or One)
Matches: Zero or one occurrence of the preceding character or group.
Example:

let regex = /a?/;  // Matches zero or one 'a'
console.log(regex.test('a'));  // true
console.log(regex.test(''));  // true
console.log(regex.test('b'));  // true (since 'a?' allows zero occurrences)


13. pattern{n} (Exact Number of Occurrences)
Matches: Exactly n occurrences of the preceding character or group.
Example:

let regex = /a{3}/;  // Matches exactly 3 'a's
console.log(regex.test('aaa'));  // true
console.log(regex.test('aa'));  // false

14. pattern{n,} (At Least n Occurrences)
Matches: n or more occurrences of the preceding character or group.
Example:

let regex = /a{2,}/;  // Matches 2 or more 'a's
console.log(regex.test('aaa'));  // true
console.log(regex.test('a'));  // false (only one 'a')


15. pattern{m,n} (Between m and n Occurrences)
Matches: Between m and n occurrences of the preceding character or group.
Example:

let regex = /a{2,4}/;  // Matches between 2 and 4 'a's
console.log(regex.test('aaa'));  // true
console.log(regex.test('aaaa'));  // true
console.log(regex.test('a'));  // false

16. . (Dot - Any Character Except Newline)
Matches: Any single character except a newline.
Example:

let regex = /a.b/;  // Matches any character between 'a' and 'b'
console.log(regex.test('acb'));  // true
console.log(regex.test('abb'));  // true
console.log(regex.test('a\nb'));  // false (newlines don't match)


17. x|y|z (Alternation)
Matches: Either x, y, or z (logical "or").
Example:

let regex = /a|b|c/;  // Matches 'a', 'b', or 'c'
console.log(regex.test('a'));  // true
console.log(regex.test('b'));  // true
console.log(regex.test('d'));  // false

18. \s (Whitespace Character)
Matches: Any whitespace character (spaces, tabs, line breaks).
Example:

let regex = /\s/;
console.log(regex.test(' '));  // true
console.log(regex.test('\t'));  // true (tab is a whitespace)
console.log(regex.test('a'));  // false

let regex = /\s/;
console.log(regex.test('Hello World'));   // true (matches the space between "Hello" and "World")
console.log(regex.test('NoSpaceHere'));   // false (no whitespace in the string)
console.log(regex.test('Hello\nWorld'));  // true (matches the newline between "Hello" and "World")



19. \S (Non-Whitespace Character)
Matches: Any character that is not a whitespace character.
Example:

let regex = /\S/;
console.log(regex.test('a'));  // true
console.log(regex.test(' '));  // false

let regex = /\S/;
console.log(regex.test('Hello World'));  // true (matches "Hello" as it's a non-whitespace character)
console.log(regex.test('   '));          // false (no non-whitespace characters)
console.log(regex.test('123  abc'));     // true (matches the digit '1' and 'a')



20. \d (Digit)
Matches: Any digit (0–9).
Example:

let regex = /\d/;
console.log(regex.test('5'));  // true
console.log(regex.test('a'));  // false

let regex = /\d/;
console.log(regex.test('abc123'));  // true (matches the digit '1')
console.log(regex.test('No digits')); // false (no digits in the string)
console.log(regex.test('12345'));   // true (matches the digits '1', '2', '3', '4', '5')



21. \D (Non-Digit)
Matches: Any non-digit character.
Example:

let regex = /\D/;
console.log(regex.test('a'));  // true
console.log(regex.test('5'));  // false

let regex = /\D/;
console.log(regex.test('abc123'));  // true (matches 'a', 'b', 'c')
console.log(regex.test('12345'));   // false (no non-digits, only digits)
console.log(regex.test('Hello!'));  // true (matches 'H', 'e', 'l', etc.)

22. \w — Matches any word character (letters, digits, and underscores)
The \w character class matches any alphanumeric character, plus the underscore (_).

Examples:

let regex = /\w/;
console.log(regex.test('Hello World'));  // true (matches 'H', 'e', 'l', etc.)
console.log(regex.test('123_abc'));      // true (matches '1', '2', '3', '_', 'a')
console.log(regex.test('!@#'));          // false (no word characters, only special chars)


23. \W — Matches any non-word character (anything except letters, digits, and underscores)
The \W character class is the inverse of \w. It matches any character that isn't a word character.

Examples:

let regex = /\W/;
console.log(regex.test('Hello World!'));  // true (matches ' ' and '!')
console.log(regex.test('123_abc'));       // false (all are word characters)
console.log(regex.test('@#$%'));          // true (matches all characters as non-word)



  






  

  
