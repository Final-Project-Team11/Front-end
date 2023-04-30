## Recoil


1. Atom 
- atom은 하나의 상태의라고 볼 수 있다. 컴포넌트가 구독할 수 있는 React state
라고 생각하면 된다. atom의 값을 변경하면 그것을 구독하고 있는 컴포넌트 들이 모두 
다시 렌더링 된다. atom을 생성하기 위해 어플리케이션에서 고유한 키 값과 디폴트
값을 설정해야 한다. 디폴트값은 정적인 값, 함수 또는 심지어 비동기 함수(나중에 지원예정)가 될 수 있다.


```tsx
import {atom} from 'recoil'

export const nameState = atom({
    key : 'nameState',
    default : 'Chanwoo',
})
```

### useRecoilState
: atom의 값을 구독하여 업데이트 할 수 있는 hook. useState와 동일한 방식으로 사용가능

### useRecoilValue 
: setter 함수 없이 atom의 값을 반환만 한다.

### useSetRecoilState 
: setter 함수만 반환한다. 

