# Statistiken

A JavaScript library for solving all kind of statistics operations. 📈

[![npm(scoped)](https://img.shields.io/badge/npm%20-v1.0.0-red)](https://www.npmjs.com/package/statistiken)
[![issues(scoped)](https://img.shields.io/github/issues/sk8Guerra/statistiken)](https://github.com/sk8Guerra/statistiken/issues)
[![forks(scoped)](https://img.shields.io/github/forks/sk8Guerra/statistiken)](https://github.com/sk8Guerra/statistiken)
[![stars(scoped)](https://img.shields.io/github/stars/sk8Guerra/statistiken)](https://github.com/sk8Guerra/statistiken)
[![license(scoped)](https://img.shields.io/badge/license-MIT-blue)](https://github.com/sk8Guerra/statistiken)

## 📦 Install

```bash
npm install -s statistiken
```
or
```bash
yarn add statistiken
```

## 🛠 Usage

```js
const statistiken = require('statistiken');

statistiken.mean([53, 16, 91, 77, 13, 10, 100]); // -> 51.42
```
You can either pass an array of numbers to each function or create an instace of Statistiken class, and calculate different operations from the same array of numbers.

```javascript
const Statistiken = require('statistiken').Statistiken;

const stats = new Statistiken([3, 4, 5, 6, 7]);

stats
    .arithmetic()
    .mean(); // -> 5

stats
    .dispersion()
    .variance(); // -> 2.5

stats
    .position()
    .decile(1) // -> 3
```

## ✨ Features

### Arithmetic

* [Mean](#mean)
* [Median](#median)
* [Mode](#mode)

### Dispersion

* [Variance](#variance)
* [Standard Deviation](#standard-deviation)
* [Coefficient of variation](#coefficient-of-variation)

### Position

* [Decile](#decile)
* [Percentile](#percentile)

### Other

* [Ascending order](#ascending-order)

## 🎮 Examples

### Arithmetic

##### Mean

```javascript
statistiken.mean([53, 16, 91, 77, 13, 10, 100]); // -> 51.42

new Statistiken([3, 4, 5, 6, 7]).arithmetic().mean(); // -> 5
```
##### Median

```javascript
statistiken.median([4, 10, 7, 15, 2]); // -> 7

new Statistiken([3, 4, 5, 6, 7]).arithmetic().median() // -> 5
```

##### Mode

```javascript
statistiken.mode([3, 5, 4, 4, 1, 1, 1, 2]); // {"modes": [1]}

new Statistiken([3, 4, 5, 6, 7, 7]).arithmetic().mode(); // -> {"modes": [7]}
```

**[⬆ back to features](#features)**

### Dispersion

##### Variance

```javascript
statistiken.variance([1, 2, 3, 4]); // -> 1.6666666666666667

new Statistiken([3, 4, 5, 6, 7]).dispersion().variance(); // -> 2.5
```

##### Standard Deviation

```javascript
statistiken.stddev([1, 2, 3, 4]); // -> 1.2909944487358056

new Statistiken([3, 4, 5, 6, 7]).dispersion().stddev(); // -> 1.5811388300841898
```

##### Coefficient of Variation

```javascript
statistiken.coevar([1, 2, 3, 4]); // -> 51.64

new Statistiken([3, 4, 5, 6, 7]).dispersion().coevar(); // -> 31.6227766017
```
Note: the result * 100.

**[⬆ back to features](#features)**

### Position

##### Decile

```javascript
statistiken.decile(1, [3, 4, 5, 6, 7]); // -> 3

new Statistiken([3, 4, 5, 6, 7]).position().decile(1); // -> 3
```

The first argument is the number of decile you want to calculate.

##### Percentile

```javascript
statistiken.percentile(1, [3, 4, 5, 6, 7]) // -> 3

new Statistiken([3, 4, 5, 6, 7]).position().percentile(1); // -> 3
```

The first argument is the number of percentile you want to calculate.

**[⬆ back to features](#features)**

### Other

##### Ascending order

```javascript
statistiken.orderAsc([5, 3, 2, 8, 10]) // -> [2, 3, 5, 8, 10]
```

**[⬆ back to features](#features)**









