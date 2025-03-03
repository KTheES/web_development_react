import { useContext } from "react";
import { MenuContext } from "./Context";
export default function Customer02() {
  const price = useContext(MenuContext);
  return <div> 1번 고객님은{price.카페라떼떼}원을 지불합니다.</div>
}