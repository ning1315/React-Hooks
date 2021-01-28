
const [ count, setCount ] = usestate(0)
const render = () => {
	console.log('rendered!')
}
useEffect(render)

//위와 같이 사용한다면 랜더링이될 때마다 콘솔이 찍힌다. (count가 변해도 찍힌다)

//만약 해당값이 업데이트될 때마다 실행시키고 싶다면 아래와 같이 사용하면 된다.

const [ count, setCount ] = usestate(0)
const render = () => {
	console.log('rendered!')
}
useEffect(render, [count])

//위에 같은 경우 useEffect의 두번째 인자인 `count`가 업데이트 될 때 마다 콘솔이 찍힐 것이다.
//만약 랜더링때만 찍히고 업데이트때 콘솔이 안찍히게 하려면 빈배열을 주어도 가능하다!