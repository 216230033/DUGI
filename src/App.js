import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { act } from 'react-dom/test-utils';

function App() {
  //기본 출력물
  const [Acount, setACount] = useState(0); //state화 한다는 뜻. A
  const [Bcount, setBcount] = useState(0); //B
  const [Ccount, setCCount] = useState(null);//C
  const [Ycount, setYcount] = useState(null);
  const [Ecount, setEacount] = useState(null);

  const test1 = (value1,value2) => {
    // Y가 null이면
    if(Acount === null){
      //A저장하고 A 출력
      console.log("AAA",value1);
      setACount(value1);
    }else{// 아니면 B저장하고 B 출력
      console.log("BBB",value2);
      setBcount(value2);
    }
    console.log(value1); // console.log : 콘솔에 로그 보여달라.
    console.log(value2);
    console.log("data",data);

    
  }

  // ＃변수를 선언하는 코드
  const test = (value) => {
  
    // int String 비교 , isNaN(이게 int 야? int면 false값을 줌.)
    console.log("Ycount", Ycount); //콘솔에 로그 찍어라
     
    const data = isNaN(value); 
    
   

    if(data === false) {
      console.log("int", value);
      test1;
        // 첫번째값.

    } else if (data === true){ // === 완벽하게 맞아야할 때 (ture/false) 값일 때.
      const test= (value3) => {
         // 4칙연산
        if (Ycount == "+"){
          console.log("+",value3);
          setYcount(value3);
          Ccount = Acount + Bcount;

          }else if (Ycount == "-"){
          console.log("-",value3);
          setYcount(value3);
          Ccount = Acount - Bcount;

          }else if (Ycount == "*"){
          console.log("*",value3);
          setYcount(value3);
          Ccount = Acount * Bcount;

          }else if (Ycount == "/"){
          console.log("/",value3);
          setYcount(value3);
          Ccount = Acount / Bcount;

          }else if(Ycount == "="){
          console.log("=",value3)
          setCCount(value3);
          
          }
          console.log(Acount);
          console.log(Bcount);
          console.log(Ccount);
          console.log(Ycount);
        
        
    
     }
        


    }


  }

  
     


  

  return (
    <div className="App">
       {/* {Bcount}
      <br />
      {Acount}  */}
      {/* ＃변수를 실행하는 코드 */}
      <button onClick={() => {test(1)}}>
        1
      </button>
      <button onClick={() => {test(2)}}>
        2
      </button>
      <button onClick={() => {test(3)}}>
        3
      </button> 
      <button onClick={() => {test(4)}}>
        4
      </button>
      <button onClick={() => {test(5)}}>
        5
      </button>
      <button onClick={() => {test(6)}}>
        6
      </button>
      <button onClick={() => {test(7)}}>
        7
      </button>
      <button onClick={() => {test(8)}}>
        8
      </button>
      <button onClick={() => {test(9)}}>
        9
      </button>
      <button onClick={() => {test(0)}}>
        0
      </button>

      <button onClick={() => {test("+")}}>
        +
      </button>
      <button onClick={() => {test("-")}}>
        -
      </button>
      <button onClick={() => {test("*")}}>
        *
      </button>
      <button onClick={() => {test("/")}}>
        /
      </button>
      <button onClick={() => {test("=")}}>
        =
      </button>
    </div>
  );
}

export default App;
