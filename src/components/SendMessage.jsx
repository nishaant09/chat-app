import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useState } from "react"
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";

const SendMessage = () => {
  const [value, setValue] = useState("");
  const { currentUser } = UserAuth();
  
  const handleSendMessage = async (e) => {
    e.preventDefault();

    if(value.trim() === "") {
      alert("Enter valid message!");
      return;
    }

    try {
      const { uid, displayName, photoURL } = currentUser; 
      await addDoc(collection(db, "messages"), {
        text: value,
        name: displayName,
        avatar: photoURL,
        createdAt: serverTimestamp(),
        uid
      })
    } catch(error) {
      console.log(error);
    }
    setValue("");
  }

  return (
    <div className='bg-[#622dcd] fixed bottom-0 w-full py-10 shadow-lg '>
      <form onSubmit={handleSendMessage} className='px-2 containerwrap flex'>
        <input value={value} onChange={e=>setValue(e.target.value)} className='input w-full focus:outline-none rounded-r-none' type="text" />
        <button type='sumbit' className='w-auto bg-[#9876dc] text-white rounded-r-lg px-5 text-sm'>Send</button>
      </form>
    </div>
  )
}

export default SendMessage
