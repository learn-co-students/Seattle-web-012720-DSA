# Given an Encoded String, Return the Message

Given an encoded string, write a function which correctly deciphers the message and returns it.

The string will be encoded in the following way:
- All letters will be replaced with numbers (a=0, b=1, c=2...)
- All numbers will be replaced with letters (0=a, 1=b, 2=c...)
- Letters will be separated by dashes

```javascript
    stringDecoder("7-4-24 10-8-12")
    => "HEY KIM"
    stringDecoder("12-24 3-14-6 8-18 F")
    => "MY DOG IS 5"
```