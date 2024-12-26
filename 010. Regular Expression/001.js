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
console.log(regex.test('aA'));  // true The output of regex.test('aA') will be true, because the string contains at least one lowercase letter ('a'), even though it also contains an uppercase letter ('A').


2. [A-Z]
Matches: Any uppercase letter between 'A' and 'Z'.
Example:

let regex = /[A-Z]/;
console.log(regex.test('B'));  // true
console.log(regex.test('a'));  // false (lowercase letters don't match)
console.log(regex.test('aAbc')); // true because string contains at least one uppercase letter (from 'A' to 'Z').

3. [a-zA-Z]
Matches: Any letter, either lowercase ('a'–'z') or uppercase ('A'–'Z').
Example:

let regex = /[a-zA-Z]/;
console.log(regex.test('c'));  // true
console.log(regex.test('D'));  // true
console.log(regex.test('1'));  // false (digits don't match)
console.log(regex.test('1c')); //true beacuse string contain  at least one alphabetic letter (either lowercase a-z or uppercase A-Z) in the string.

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
        console.log(regex.test('aab'));  // true (because 'b' is not a vowel)..atleast one
        
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

   
        console.log(regex.test(''));     //TRUE
        console.log(regex.test('bcd'));  // true (no vowels)
        console.log(regex.test('apple'));  // false (contains vowels)
        console.log(regex.test('xyz'));  // true (no vowels)
        console.log(regex.test('aei'));  // false (contains vowels)

                                              # WHY WE ARE USING * ??
                                              *: The quantifier * is applied to [^aeiou]. This means:
                                              The regex will match zero or more characters that are not vowels.
                                              So, it allows the string to be empty (zero non-vowel characters) or to contain any number of non-vowel characters.
                                    
                                    
                                              #if we don't use * then code will become like this :-
                                    
                                              let regex = /^[^aeiou]$/;
                                              
                                              Full regex /^[^aeiou]$/:
                                              This regex will match:
                                              Exactly one character that is not a vowel (because of the [^aeiou]).
                                              The string must have exactly one non-vowel character, as indicated by the lack of quantifiers like * or +.
                                    
                                    
                                    
                                               #note
                                               
                                               let regex = /^[^aeiou]$/; 
                                               console.log(regex.test('bc')); //false
                                               
                                               Full regex /^[^aeiou]$/:
                                               This regex will match:
                                               Exactly one character that is not a vowel (because of the [^aeiou]).
                                               The string must have exactly one non-vowel character, as indicated by the lack of quantifiers like * or +.
                                               Test String: 'bc'
                                               We are testing whether the string 'bc' matches the regex /^[^aeiou]$/.
                                               
                                               Iteration-by-Iteration Explanation:
                                               The input string is 'bc'.
                                               
                                               The regex expects exactly one non-vowel character and no more.
                                               Start of matching:
                                               
                                               The regex begins matching at the start of the string (^).
                                               It tries to match one character that is not a vowel ([^aeiou]).
                                               First character: 'b':
                                               
                                               'b' is a non-vowel character, so it matches the part [^aeiou].
                                               The string has matched one non-vowel character ('b'), but we have not yet reached the end of the string.
                                               Second character: 'c':
                                               
                                               The string has a second character ('c'), but the regex has already completed matching one character (the 'b').
                                               Since the regex expects the string to have exactly one character (due to the $ anchor), the presence of a second character ('c') causes the match to fail.


                                                #alternative of * ????

                                                u can use + for one or more occurences

                                                 If you want to match exactly one non-vowel character, you can use quantifier like + (for one or more occurrences):
                                                 
                                                 Regex: /^[^aeiou]+$/
                                                 This will match strings that consist of one or more characters that are not vowels.
                                                 
                                                 ^: Start of the string.
                                                 [^aeiou]: Any character that is not a vowel.
                                                 +: One or more non-vowel characters.
                                                 $: End of the string.
                                                 So, this regex will not match an empty string, but will match strings like 'b', 'bc', or 'xyz' because they contain non-vowel characters, and it requires at least one such character.
                                                 
                                                 Example Usage:
                                                 javascript
                                                 Copy code
                                                 let regex = /^[^aeiou]+$/;
                                                 console.log(regex.test('bc'));   // true (matches non-vowels only)
                                                 console.log(regex.test('xyz'));  // true (matches non-vowels only)
                                                 console.log(regex.test('a'));    // false (contains a vowel)
                                                 console.log(regex.test(''));     // false (empty string doesn't match)

                                                
                                    
                                    
                                    



        Explanation of Example Results:
        let regex = /^[^aeiou]*$/;

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

                        NOTE: EXPLAIN EACH ITERATION 1

                                              let regex = /^hello/;
                                              console.log(regex.test('hello world'));     //true


                                              Regular Expression Explanation:
                                              ^: Anchors the match at the start of the string. This means the regex engine looks for 'hello' right at the beginning of 
                                               the string.
                                              hello: The literal string 'hello' that must exactly match the start of the string.
                                              Iteration-by-Iteration Explanation:
                                              Start:
                                              
                                              The input string is 'hello world'.
                                              The regex is /^hello/, which requires 'hello' to be at the start of the string.
                                              Iteration 1 — Checking the first character:
                                              
                                              The regex engine starts with the first character of the string 'hello world', which is 'h'.
                                              The pattern 'hello' starts with 'h', so it matches the first character.
                                              The engine moves to the next character.
                                              Iteration 2 — Checking the second character:
                                              
                                              The regex engine now checks the second character of the string, which is 'e'.
                                              The next character in the pattern is 'e', so this also matches.
                                              The engine moves to the next character.
                                              Iteration 3 — Checking the third character:
                                              
                                              The regex engine now checks the third character, which is 'l'.
                                              The pattern expects 'l' next, and this matches as well.
                                              The engine moves to the next character.
                                              Iteration 4 — Checking the fourth character:
                                              
                                              The regex engine now checks the fourth character, which is another 'l'.
                                              The pattern expects another 'l', and this matches.
                                              The engine moves to the next character.
                                              Iteration 5 — Checking the fifth character:
                                              
                                              The regex engine now checks the fifth character, which is 'o'.
                                              The pattern expects 'o' next, and this matches as well.
                                              All five characters 'hello' have matched the pattern exactly.
                                              End of match:
                                              
                                              The regex has successfully matched 'hello' at the start of the string.
                                              Since the ^ anchor ensures that the match must be at the beginning, and we've found 'hello' right at the start, the 
                                              match is complete.
                                              No need to check further:
                                              
                                              The regex engine does not need to check the remaining part of the string (' world') because the anchor ^ has already 
                                              ensured that it only needs to find 'hello' at the start.
                                              Result:
                                              
                                              The .test() method returns true because the string starts with 'hello'.



                                  NOTE : EXPLAIN EACH ITERASTION 2


                                  let regex = /^hello/;
                                  console.log(regex.test('say hello world'));     //false
                                  
                                  
                                  Regular Expression Explanation:
                                  ^ (Caret): This is an anchor that asserts the start of the string. The pattern following ^ must appear at the very beginning of the string for the match to succeed.
                                  hello: This is the literal string 'hello' that must match exactly at the start of the string.
                                  So, the regex /^hello/ checks if the string starts with the exact sequence 'hello'.
                                  
                                  Iteration-by-Iteration Explanation:
                                  String being tested: 'say hello world'
                                  
                                  Iteration 1 — Checking the first character:
                                  
                                  The first character of the string is 's'.
                                  The pattern requires the string to start with 'h', but the first character is 's'.
                                  Since the first character doesn't match, the match fails immediately without further checking.
                                  No need for further iterations:
                                  
                                  Because the regex requires that the string starts with 'hello' (due to the ^ anchor), the regex engine stops immediately when it finds the first mismatch ('s' vs. 'h').
                                  There is no need to check the rest of the string ('ay hello world') because the beginning of the string already failed to match the expected pattern.
                                  Result:
                                  
                                  The .test() method returns false because the string 'say hello world' does not start with 'hello' (it starts with 'say' instead).

                                                        
                                                        NOTE: JYADA KNOWLEDGE
                                                        
                                                        
                                                        Matches: The exact literal string "regular expression".
                                                        Example:
                                                        
                                                        let regex = /regular expression/;
                                                        console.log(regex.test('regular expression'));  // true
                                                        console.log(regex.test('regex expression'));  // false

9. regularexpression$
Matches: The literal string "regularexpression" at the end of a string (because $ anchors to the end of the string).
Example:

let regex = /regularexpression$/;
console.log(regex.test('this is a regularexpression'));  // true
console.log(regex.test('regularexpression test'));  // false



                                       NOTE: EXPLAIN ITERATION BY BITERATION 1
                                       
                                       let regex = /regularexpression$/;
                                       console.log(regex.test('this is a regularexpression'));     //TRUE
                                       
                                       Regular Expression Explanation: /regularexpression$/
                                       regularexpression: This is the literal string that we want to match in the input.
                                       $: This is an anchor that asserts the position at the end of the string. This means that the string must end with 'regularexpression' for the match to be successful.
                                       Test String: 'this is a regularexpression'
                                       We are checking if the string 'this is a regularexpression' ends with 'regularexpression'.
                                       
                                       Iteration-by-Iteration Process:
                                       String being tested: 'this is a regularexpression'
                                       
                                       Start of regex matching: The regex /regularexpression$/ begins by looking at the end of the string, because the $ anchor asserts that the match must occur at the end of the string.
                                       
                                       Iteration 1: Checking the last part of the string:
                                       The regex engine begins its matching at the end of the string. It starts with the last characters of the string 'this is a regularexpression'.
                                       The engine checks the last 17 characters ('regularexpression') and compares them with the literal string 'regularexpression' in the regex.
                                       'regularexpression' (from the string) matches exactly with 'regularexpression' (in the regex).
                                       Match successful:
                                       Since the last 17 characters of the string match the literal 'regularexpression' and the $ anchor ensures that the match is at the end of the string, the regex succeeds.
                                       No need for further iterations:
                                       Because the $ anchor has successfully matched the end of the string, the regex engine stops further checks.
                                       The engine doesn't need to look at any other part of the string, as it only cares about the match at the end of the string.
                                       Result:
                                       The .test() method returns true because the string does end with 'regularexpression'.



                                               
                                               NOTE: EXPLAIN ITERATION BY ITEARTION 2
                                               
                                               
                                               let regex = /regularexpression$/;
                                               console.log(regex.test('this is a regularexAression'));       //false
                                               
                                               Regular Expression Explanation: /regularexpression$/
                                               regularexpression: This is the literal string 'regularexpression' that the regex is trying to match.
                                               $: This is an anchor that asserts the end of the string. It ensures that 'regularexpression' must appear at the end of the string for the match to succeed.
                                               Test String: 'this is a regularexAression'
                                               We are checking if the string 'this is a regularexAression' ends with 'regularexpression'.
                                               
                                               Iteration-by-Iteration Process:
                                               String being tested: 'this is a regularexAression'
                                               
                                               Start of regex matching: The regex /regularexpression$/ starts by looking at the end of the string because of the $ anchor.
                                               
                                               Last 17 characters of the string:
                                               
                                               The regex engine begins at the end of the string 'this is a regularexAression'. It looks at the last 17 characters, which are 'regularexAression'.
                                               The regex expects the string to be exactly 'regularexpression' at the end of the string.
                                               Comparing 'regularexAression' with 'regularexpression':
                                               The string 'regularexAression' does not match 'regularexpression' exactly. The only difference is the capital 'A' in 'regularexAression' versus a lowercase 'a' in 'regularexpression'.
                                               Since the regex /regularexpression$/ expects an exact match at the end of the string, the presence of the uppercase 'A' breaks the match.
                                               Result:
                                               The regex does not match because the string 'this is a regularexAression' ends with 'regularexAression' (with an uppercase 'A'), not 'regularexpression' (with a lowercase 'a').
                                               Therefore, the .test() method will return false.





10. * (Quantifier - Zero or More)               ZERO OR MORE OCCURENCES
Matches: Zero or more occurrences of the preceding character or group.
Example:

let regex = /a*/;  // Matches zero or more 'a's
console.log(regex.test('aaa'));  // true
console.log(regex.test(''));  // true (zero occurrences is allowed)
console.log(regex.test('c'));  //true 




                               NOTE : EXPLAIN ITERATION BY ITERATION
                               
                               let regex = /a*/;  // Matches zero or more 'a's
                               console.log(regex.test('c'));
                               
                               
                               
                               Regular Expression Explanation: /a*/
                               a: Matches the literal character 'a'.
                               *: This is a quantifier that means zero or more of the preceding element. In this case, it means zero or more occurrences of the letter 'a'.
                               So, /a*/ will match:
                               
                               An empty string (zero occurrences of 'a').
                               A string with one or more consecutive 'a' characters (like 'a', 'aa', 'aaa', etc.).
                               Test String: 'c'
                               We are testing whether the regex /a*/ matches the string 'c'.
                               
                               Iteration-by-Iteration Explanation:
                               Start of matching:
                               
                               The input string is 'c'.
                               The regex /a*/ tries to match zero or more occurrences of 'a' starting at the beginning of the string.
                               Iteration 1 — Look at the first character of the string:
                               
                               The first character in the string 'c' is 'c'.
                               The regex expects zero or more occurrences of 'a'. It can match zero occurrences of 'a' because of the * quantifier.
                               So, at the very start, it matches zero 'a' characters — meaning it doesn't need to match anything at all.
                               Result so far: A match is found for the empty string at the start of the string.
                               
                               No further iterations are needed:
                               
                               The regex doesn't need to look for more characters because it has already successfully matched zero 'a' characters at the beginning of the string.
                               The match is considered complete, even though the string 'c' has the character 'c', which is not an 'a'.
                               Final Match:
                               
                               The regex successfully matches the empty string at the start of 'c' because it allows for zero occurrences of 'a'.
                               So, the .test() method returns true.

                                

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



  






  

  
