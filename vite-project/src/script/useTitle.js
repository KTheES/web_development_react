import { useEffect } from "react";
// 여기는 리액트이기 때문에 import 리액트 사용 가능

function useTitle(title) {
  useEffect(() => {
    document.title = title;
  },[title]);
} 

export default useTitle;
//함수를 export 시키는 것은 script에서 먼저 나온 기능