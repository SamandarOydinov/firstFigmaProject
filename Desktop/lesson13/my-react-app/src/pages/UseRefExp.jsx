import React, { useRef } from "react";

function UseRefExplanation() {
    const inputRef = useRef("salom");

    const handleOk = () => {
        inputRef.current.style.outlineColor = "red";
        inputRef.current.focus();
    }

    return (
      <>
        <div>
          <textarea
            ref={inputRef}
            placeholder="Izoh qoldiring"
            className="border p-2 rounded w-full"
            // autoFocus
          />
        </div>
        <div>
          <h1 className="text-4xl text-center m-4">Use Ref</h1>
          <input
            ref={inputRef}
            type="text"
            className="border rounded p-2"
            placeholder="Type here.."
          />
          <button onClick={handleOk} className="py-2 px-6 bg-slate-400 m-1 rounded-[10px]">
            Ok
          </button>
        </div>
      </>
    );
}

export default UseRefExplanation;