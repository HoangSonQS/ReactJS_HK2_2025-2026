import { useState } from "react";

const Bai1 = () => {
      const [name, setName] = useState<string>("Default")
      const [email, setEmail] = useState<string>("Default")
      const [age, setAge] = useState<number>(0)
    
      console.log(name);
      console.log(email);
      console.log(age);
    
      return (
        <>
          <div style={{padding: 5}}>
            <button onClick={() => setName("Nguyen Hoang Son")}>Set Name</button>
            <a>{name}</a>
          </div>
          <div style={{padding: 5}}>
            <button onClick={() => setEmail("sonjiny2004@gmail.com")}>Set Name</button>
            <a>{email}</a>
          </div>
          <div style={{padding: 5}}>
            <button onClick={() => setAge(2026 - 2004)}>Set Name</button>
            <a>{age}</a>
          </div>
        </>
      )
}

export default Bai1