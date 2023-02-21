# Paagination (inspired by [react-admin](https://github.com/marmelab/react-admin))

### 구현해야 할 것
- `ListPaginationContextProvider`의 구현을 완성해야 합니다.
  1. setNextPage: 다음 페이지 버튼을 클릭했을 때 동작하는 함수
  2. setPrevPage: 이전 페이지 버튼을 클릭했을 때 동작하는 함수
  3. setFirstPage: 첫번째 페이지로 이동하는 버튼을 클릭했을 때 동작하는 함수
  4. `ListPaginationContextProvider` 컴포넌트의 children 들은 `usePaginationContext`를 통해 `ListPaginationContext`에 접근할 수 있어야 합니다.
     - props drilling을 피하기 위해 `ListPaginationContextProvider` 컴포넌트를 사용합니다.
- `it.skip`에서 skip을 제거하고 테스트를 통과시켜야 합니다.
