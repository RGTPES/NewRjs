import React, { useState, useEffect } from "react"

type Task = {
  name: string
  done: boolean
}

export default function EX9() {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const data = localStorage.getItem("tasks")
    return data
      ? JSON.parse(data)
      : [
          { name: "Code", done: false },
          { name: "Quet nha", done: false },
          { name: "Giat quan ao", done: false },
          { name: "Lau nha", done: false }
        ]
  })
  const [input, setInput] = useState("")
  const [error, setError] = useState("")
  const [deleteIdx, setDeleteIdx] = useState<number | null>(null)

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])

  const handleAdd = () => {
    const trimmed = input.trim()
    if (!trimmed) {
      setError("Ten cong viec khong duoc de trong!")
      return
    }
    if (tasks.some(t => t.name.toLowerCase() === trimmed.toLowerCase())) {
      setError("Ten cong viec khong duoc trung!")
      return
    }
    setTasks([...tasks, { name: trimmed, done: false }])
    setInput("")
    setError("")
  }

  const handleDelete = (idx: number) => {
    setDeleteIdx(idx)
  }

  const confirmDelete = () => {
    if (deleteIdx !== null) {
      setTasks(tasks.filter((_, i) => i !== deleteIdx))
      setDeleteIdx(null)
    }
  }

  const cancelDelete = () => {
    setDeleteIdx(null)
  }

  const handleToggle = (idx: number) => {
    setTasks(tasks.map((t, i) => i === idx ? { ...t, done: !t.done } : t))
  }

  const completed = tasks.filter(t => t.done).length

  return (
    <div
      style={{
        color: "#333",
        maxWidth: 900,
        margin: "24px auto",
        fontFamily: "sans-serif",
        background: "#fff",
        border: "2px solid #eee",
        borderRadius: 10,
        padding: 32,
        position: "relative"
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: 24, fontWeight: 700 }}>
        Danh sach cong viec
      </h1>
      <div style={{ display: "flex", gap: 8, marginBottom: 8 }}>
        <input
          type="text"
          placeholder="Nhap ten cong viec"
          value={input}
          onChange={e => {
            setInput(e.target.value)
            setError("")
          }}
          style={{
            flex: 1,
            padding: 12,
            borderRadius: 6,
            border: "1px solid #e5e7eb",
            fontSize: 16,
            background: "#fafbfc"
          }}
          onKeyDown={e => {
            if (e.key === "Enter") handleAdd()
          }}
        />
        <button
          style={{
            background: "#1677ff",
            color: "#fff",
            border: "none",
            borderRadius: 6,
            padding: "0 24px",
            cursor: "pointer",
            fontSize: 16,
            height: 44
          }}
          onClick={handleAdd}
        >
          Them
        </button>
      </div>
      {error && (
        <div
          style={{
            background: "#fff3cd",
            color: "#856404",
            border: "1px solid #ffeeba",
            borderRadius: 6,
            padding: "10px 16px",
            marginBottom: 16,
            fontSize: 16
          }}
        >
          {error}
        </div>
      )}
      <div style={{ marginBottom: 16 }}>
        {tasks.map((task, idx) => (
          <div
            key={task.name}
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: 20,
              fontSize: 18
            }}
          >
            <input
              type="checkbox"
              checked={task.done}
              onChange={() => handleToggle(idx)}
              style={{ marginRight: 14, width: 18, height: 18 }}
            />
            <span
              style={{
                textDecoration: task.done ? "line-through" : "none",
                color: "#222"
              }}
            >
              {task.name}
            </span>
            <span
              style={{
                marginLeft: "auto",
                display: "flex",
                gap: 18
              }}
            >
              <span
                style={{
                  color: "orange",
                  cursor: "pointer",
                  fontSize: 20
                }}
                title="Sua"
              >
                🖋️
              </span>
              <span
                style={{
                  color: "red",
                  cursor: "pointer",
                  fontSize: 20
                }}
                title="Xoa"
                onClick={() => handleDelete(idx)}
              >
                🗑️
              </span>
            </span>
          </div>
        ))}
      </div>
      <div
        style={{
          background: "#f6f7f9",
          padding: 14,
          borderRadius: 8,
          marginTop: 16,
          fontSize: 17
        }}
      >
        Cong viec da hoan thanh: <b>{completed} / {tasks.length}</b>
      </div>
      {deleteIdx !== null && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0,0,0,0.15)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000
          }}
        >
          <div
            style={{
              background: "#fff",
              padding: 32,
              borderRadius: 10,
              boxShadow: "0 2px 16px rgba(0,0,0,0.15)",
              minWidth: 320,
              textAlign: "center"
            }}
          >
            <div style={{ fontSize: 18, marginBottom: 24 }}>
              Ban co chac chan muon xoa cong viec nay?
            </div>
            <div style={{ display: "flex", justifyContent: "center", gap: 16 }}>
              <button
                onClick={cancelDelete}
                style={{
                  padding: "8px 24px",
                  borderRadius: 6,
                  border: "1px solid #ccc",
                  background: "#fff",
                  color: "#333",
                  cursor: "pointer",
                  fontSize: 16
                }}
              >
                Huy
              </button>
              <button
                onClick={confirmDelete}
                style={{
                  padding: "8px 24px",
                  borderRadius: 6,
                  border: "none",
                  background: "#1677ff",
                  color: "#fff",
                  cursor: "pointer",
                  fontSize: 16
                }}
              >
                Dong y
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}