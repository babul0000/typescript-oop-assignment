# Type Alias and Interface in TypeScript

When I started learning TypeScript, I found Type Alias and Interface a little confusing. Both looked almost the same to me because they are used to define the structure of data. After learning some examples, I understood that they have some similarities but also have differences.

A Type Alias is used to give a name to a type. It helps us create our own types and use them whenever we need. We can use Type Alias for strings, numbers, objects, and other types.

For example:

```ts id="t1z6xp"
type Student = {
  name: string;
  age: number;
};
```

Here, I created a type called Student. It means a student object should have a name and an age.

An Interface is also used to define the structure of an object. It tells TypeScript which properties an object should have and what types of values they can contain.

For example:

```ts id="g90zjc"
interface Employee {
  name: string;
  salary: number;
}
```

Here, the Employee interface defines two properties: name and salary.

After learning both, I found some important differences. Type Alias can be used to create union types, but Interface is mainly used for object structures. Another difference is that Interface supports declaration merging, but Type Alias does not.

For example:

```ts id="k8qf2a"
type ID = string | number;
```

Here, ID can be either a string or a number.

In my understanding, both Type Alias and Interface are useful in TypeScript. I can use Interface for object structures and Type Alias when I need union types or other custom types. Choosing between them depends on the situation.
