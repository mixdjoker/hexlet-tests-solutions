# buildQueryString.js

Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход список параметров и возвращает сформированный `query string` из этих параметров:

```javascript
import bqs from '../buildQueryString.js';

bqs({ per: 10, page: 1 });
// page=1&per=10
bqs({ param: 'all', param1: true });
// param=all&param1=true
```

Имена параметров в выходной строке должны располагаться в _алфавитном_ порядке (то есть их нужно отсортировать).
