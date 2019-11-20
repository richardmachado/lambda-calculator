
  // STEP 2 - add the imported data to state
  import React from "react";
  import NumberButton from './NumberButton'
  import { numbers } from "../../../data";

 

  const Numbers = (props) => {
    // const [numberList, setNumbersList] = useState(numbers)
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}

        {
          numbers.map(number => (
            <NumberButton key={number} input={props.input} number={number} />
          ))
        }
    </div>
  );
};
export default Numbers