import React,{ useState } from 'react';
function Counter(){
    const [count, setCount] = useState(0);
    const handleButtonClick = () => {
        setCount(count +1);
    };
    return(
      <div>
        <p>Click count :{count}</p>
       <button onClick={handleButtonClick}>Click Me</button>

</div>
    );
}
export default Counter;