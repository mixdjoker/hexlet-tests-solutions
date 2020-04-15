# Task 4

Обращение к вложенным объектам выглядит просто, только когда мы уверены в наличии всех ключей, попадающихся по пути:

```javascript
const data = {
  a: {
    b: {
      c: 'wow'
    }
  }
};

data.a.b.c; // wow
```

Если же наличие данных ключей в объекте не обязательно, тогда код резко усложняется. Каждая попытка обратиться внутрь должна сопровождаться проверкой:

```javascript
import { has } from 'lodash';

if (has(data, 'a')) {
    const inner1 = data.a;
    if (has(data, 'b')) {
        const inner2 = inner1.b;
        if (has(data, 'c')) {
            // ...
        }
    }
}
```

## objects.js

Реализуйте и экспортируйте по умолчанию функцию `getIn`, которая извлекает из объекта (который может быть любой глубины вложенности) значение по указанным ключам. Аргументы:

- Исходный объект
- Массив ключей, по которым ведется поиск значения

В случае, когда добраться до значения невозможно, возвращается null.

Примеры

```javascript
const data = {
  user: 'ubuntu',
  hosts: {
    0: {
      name: 'web1',
    },
    1: {
      name: 'web2',
      null: 3,
      active: false,
    },
  },
};

getIn(data, ['undefined']); // null
getIn(data, ['user']); // 'ubuntu'
getIn(data, ['user', 'ubuntu']); // null
getIn(data, ['hosts', 1, 'name']); // 'web2'
getIn(data, ['hosts', 0]); // { name: 'web1' }
getIn(data, ['hosts', 1, null]); // 3
getIn(data, ['hosts', 1, 'active']); // false
```