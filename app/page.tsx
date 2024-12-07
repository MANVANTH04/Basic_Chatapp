"use client"
import ChatForm from "./Components/ChatForm";

export default function Home() {

  const handleSendMessage = (value: string)=>{
    console.log(value)
  }

  return (
   
    <div className="flex mt-24 justify-center w-full" >
      <div className="w-full max-w-3xl mx-auto">
        <h1 className="mb-4 text-2xl font-bold">
          
          Room-1
          <div className="">
              Todo: add chat room
          </div>
            <ChatForm onSendMessage={handleSendMessage}/>
          </h1> 
      </div>
    </div>
  );
}
