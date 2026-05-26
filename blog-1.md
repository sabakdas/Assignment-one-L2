# What is "any" in TypeScript?

`any` is a data type in TypeScript.The `any` type in TypeScript that allows a variable to hold any kind of value. It is generally used when a type of variable is unknown or not yet defined. The `any` type is useful when converting the JavaScript code to TypeScript.
`any` type is not a type in traditional sense. It is like a placeholder that tells the TypeScript compiler to ignore type checking for the particular variable, function, etc.
`let data: any = "Hello";`
Later, the same variable can store another type of value:
`data=123`
TypeScript will not complain because any disables type checking.
