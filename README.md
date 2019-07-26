# strip-typename

## What is this for?

Have you ever had to query from the Apollo GraphQL server, put the data in a form so that users can edit, and basically need to send the updated object back to a mutation? Then you probably have encountered the issue where the `__typename` properties received from the query will produce an error when you try to send that through. This utility will recursively strip all the `__typename` properties of an object and nested objects.

## Installation

### NPM

```sh
$ npm install strip-typename
```

### Yarn

```sh
$ yarn add strip-typename
```

## Usage

```js
import stripTypename from 'strip-typename';
const stripped = stripTypename(obj);
```
