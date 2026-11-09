# Generics and Promises in TypeScript

When I started learning TypeScript, I found Generics and Promises a little difficult to understand. I wanted to know why we use them and how they work in real projects. After learning some examples, I understood that both have different purposes.

Generics are used to write reusable code. It means we can create one function that works with different data types. We do not need to write separate functions for strings and numbers.

For example:

```ts
const getValue = <T>(value: T): T => {
    return value;
};
```

Here, T represents a type. If we pass a string, it returns a string. If we pass a number, it returns a number. This makes our function more flexible.

A Promise is used when we have to wait for something to finish. For example, when we get data from a server, the response may take some time. A Promise helps us handle that situation.

A Promise has three states: Pending, Fulfilled, and Rejected. Pending means the work is still running. Fulfilled means the work is successful, and Rejected means something went wrong.

Here is a simple example:

```ts
const getUser = (): Promise<string> => {
    return new Promise((resolve) => {
        resolve("Babul");
    });
};
```

In this example, `Promise<string>` means the Promise will return a string when it is successful.

We can also use Generics with Promises to define what type of result we expect. For example, `Promise<number>` means the result will be a number.

After learning these topics, I understood that Generics help us write reusable code, while Promises help us handle asynchronous tasks. Both are useful when building applications with TypeScript.
