//single selection
//multiple selection

import { useState } from "react";
import data from "./data";
import 'styles.css'; 



export default function Accordian() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection,setenableMultiSelection] = useState (false)
  const [multiple,setMultiple] = useState([]);
  //der single Selection approach 
  
  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }
  
  //Was hat es mit fid Index of Current Id vor sich ? 
  function handleMultiSelection (getCurrentId){
    let cpyMultiple = [...multiple]; 
    const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId)

  console.log (findIndexOfCurrentId); 
  //Was hat es mit push und slice auf sich ? 
  //und welche Rolle hat findIndexOfCurrent Id
  if(findIndexOfCurrentId === -1) cpyMultiple.push(getCurrentId)
  else cpyMultiple.splice (findIndexOfCurrentId,1) 

    setMultiple(cpyMultiple); 
  }

  console.log(selected);
  return (
    // toggeling <button onClick ={()=> setenableMultiSelection (!enableMultiSelection)}> </button>; 
    // Was genau meint er mit toggeling (button Element)? 
    //PseudoCode if/else : Frage '?' if statement ':' else statement
    //bei dem Selected über content brauchen wir eine 'condition' um bei multiselection auch wirklich das Dropdown zu erhalten 
    // '||'-Zeichen steht für or/oder. Wird auch bei content im If Statement genutzt (Broken down version bei 29:30 in video)
    <div className="wrapper">
      <button onClick ={()=> setenableMultiSelection (!enableMultiSelection)}> </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className=" item">
              <div
                onClick={
                  enableMultiSelection 
                  ? ()=> handleMultiSelection (dataItem.id) 
                  : () => handleSingleSelection(dataItem.id)
                }
                className="title"
              >
                <h3> {dataItem.question}</h3>
                <span>+</span>
              </div>
              {selected === dataItem.id || multiple.IndexOf(dataItem.id) !== -1 ? (
                <div className="content"> {dataItem.answer}</div>
              ) : null}
            </div>
          ))
        ) : (
          <div> No data found !</div>
        )}
      </div>
    </div>
  );
}
