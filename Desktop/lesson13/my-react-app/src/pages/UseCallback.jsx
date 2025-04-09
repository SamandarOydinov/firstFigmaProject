import React, { useCallback, useState } from "react";
import ChildComponent from "../components/ChildComponent";

function UseCallback() {
    const [count, setCount] = useState(0);
    const [form, setForm] = useState({ name: '' });

    const handleSubmit = useCallback(
      (e) => {
        e.preventDefault();
        alert(`Yuborildi: ${form.name}`);
      },
      [form],
    );

    return (
      <>
        {/* ===== */}
        <div className="flex flex-col">
          <h1 className="text-3xl">Use Callback</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ name: e.target.value })}
              placeholder="Ism"
              className="rounded-[10px] w-[400px] h-[50px] bg-amber-100 border-1 pl-1"
            />
            <button
              className="w-[100px] h-[50px] rounded-[10px] bg-green-600"
              type="submit"
            >
              Yuborish
            </button>
          </form>
        </div>
      </>
    );
}

export default UseCallback;

// useState
// useEffect
// useRef
// useContext
// useMemo, memo
// useCallback