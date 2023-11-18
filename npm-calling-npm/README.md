Measuring what happens when you use `npm run` within a `package.json` to call other `scripts`.

## Measuring the time and memory usage
Measuring the timing:

```shell
# direct call
time node ./main.js
# direct call through npm
time npm run direct
# call the top-most layer through npm
time npm run layer5
```

Measuring the memory usage:

```shell
# direct call
node --expose-gc --trace-gc --trace-gc-ignore-scavenger --trace-gc-verbose ./main.js

# direct call through npm
whereis npm | cut -d':' -f2 | xargs -I {} node --expose-gc --trace-gc --trace-gc-ignore-scavenger --trace-gc-verbose {} run mem:direct

# call the top-most layer through npm
whereis npm | cut -d':' -f2 | xargs -I {} node --expose-gc --trace-gc --trace-gc-ignore-scavenger --trace-gc-verbose {} run mem:layer5
```

## Results
Using `npm` to call other scripts within npm is slower, based on the results below. Inlining the scripts is faster.

### Timing
#### Direct call
```
time node ./main.js
Hello world: 2023-11-17T03:12:26.959Z
node ./main.js  0.04s user 0.01s system 92% cpu 0.053 total
```

##### Call through `npm`
```
time npm run direct

> direct
> node ./main.js

Hello world: 2023-11-17T03:13:13.118Z
npm run direct  0.18s user 0.04s system 87% cpu 0.261 total
```

#### Call the top-most layer through `npm`
```
time npm run layer5

> layer5
> npm run layer4


> layer4
> npm run layer3


> layer3
> npm run layer2


> layer2
> npm run layer1


> layer1
> npm run layer0


> layer0
> npm run direct


> direct
> node ./main.js

Hello world: 2023-11-17T03:40:04.065Z
npm run layer5  1.06s user 0.21s system 107% cpu 1.174 total
```

### Memory
#### Direct call
```
node ./main.js

```

##### Call through `npm`
```
time npm run direct

```

#### Call the top-most layer through `npm`
```
time npm run layer4

```