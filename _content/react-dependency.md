---
title: '[React] 부모로부터 받은 state, props는 dependency array에 넣어야하는 이유'
category: 'React'
date: '2021-09-03T14:18:19.819Z'
description: ''
corver_image: '/images/React/corver.png'
---

상황은 checkbox와 radio button들을 통해서 해당하는 값을 filtering하는 중이었다.

```jsx
const [Filters, setFilters] = useState({
  category: [],
  price: [],
});
```

분명히 불변성을 지키기 위해 spread 연산자를 사용했는데 결과는

### CheckBox 클릭 시

![filter1](/images/React/filter1.png)
![filter2](/images/React/filter2.png)

<br />

### RadioBox 클릭 시

![filter3](/images/React/filter3.png)
![filter4](/images/React/filter4.png)

### `복사가 되지 않았다.`

생각하다가 도저히 안되서 코드 전체를 점검해보고 검색도 해봤는데 찾지 못하고 우연히 전에 했었던 코드를 훑어보다가 마침내 이유를 찾았다.

이렇게 각각 자식 컴포넌트에게 `handleFilters` props를 넣어줬다.

```jsx
const [Filters, setFilters] = useState({
  category: [],
  price: [],
});

const handleFilters = useCallback(
  (filters, category) => {
    const newFilters = { ...Filters };

    newFilters[category] = filters;

    if (category === 'price') {
      let priceValues = handlePrice(filters);
      newFilters[category] = priceValues;
    }

    showFilterResults(newFilters);
    setFilters(newFilters);
  },
  [Filters],
);

return (
  <>
    <CategoryBox list={clothes} handleFilters={(filters) => handleFilters(filters, 'category')} />
    <PriceBox list={price} handleFilters={(filters) => handleFilters(filters, 'price')} />
  </>
);
```

아래의 코드는 부모로부터 물려받은 props를 useCallback dependency안에 넣어주지 않아서 컴포넌트들이 리렌더링 된다해도 자식컴포넌트들은 handleFilters 함수에 참조가 안되어 호출하지 안았던 이유이다.

```jsx
// CategoryBox

function CategoryBox({ list, handleFilters }) {
  const [Checked, setChecked] = useState([]);

  const onChangeToggle = useCallback(
    (value) => {
      const currentIndex = Checked.indexOf(value);

      const newChecked = [...Checked];

      if (currentIndex === -1) {
        newChecked.push(value);
      } else {
        newChecked.splice(currentIndex, 1);
      }

      setChecked(newChecked);
      handleFilters(newChecked);
      console.log('handleFiltersChecked', newChecked);
    },
    [Checked],
  );
```

그래서 물려받은 props를 dependency안에 `[handleFilters]` 넣어줬더니 참조가 되어 리렌더링 후에도 호출되도록 해결하였다.

![filter5](/images/React/filter5.png)
