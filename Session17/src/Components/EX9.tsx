import React from "react";

export default function EX9() {
  return (
    <div style={{
        color: "#333",
      maxWidth: 900,
      margin: "24px auto",
      fontFamily: "sans-serif",
      background: "#fff",
      border: "2px solid #eee",
      borderRadius: 10,
      padding: 32
    }}>
      <h1 style={{ textAlign: "center", marginBottom: 24, fontWeight: 700 }}>Danh sách công việc</h1>
      <div style={{ display: "flex", gap: 8, marginBottom: 24 }}>
        <input
          type="text"
          placeholder="Nhập tên công việc"
          style={{
            flex: 1,
            padding: 12,
            borderRadius: 6,
            border: "1px solid #e5e7eb",
            fontSize: 16,
            background: "#fafbfc"
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
        >
          Thêm
        </button>
      </div>
      <div style={{ marginBottom: 16 }}>
        <div style={{
          display: "flex",
          alignItems: "center",
          marginBottom: 20,
          fontSize: 18
        }}>
          <input type="checkbox" style={{ marginRight: 14, width: 18, height: 18 }} />
          <span>Code</span>
          <span style={{
            marginLeft: "auto",
            display: "flex",
            gap: 18
          }}>
            <span style={{ color: "orange", cursor: "pointer", fontSize: 20 }} title="Sửa">🖋️</span>
            <span style={{ color: "red", cursor: "pointer", fontSize: 20 }} title="Xóa">🗑️</span>
          </span>
        </div>
        <div style={{
          display: "flex",
          alignItems: "center",
          marginBottom: 20,
          fontSize: 18
        }}>
          <input type="checkbox" style={{ marginRight: 14, width: 18, height: 18 }} />
          <span>Quét nhà</span>
          <span style={{
            marginLeft: "auto",
            display: "flex",
            gap: 18
          }}>
            <span style={{ color: "orange", cursor: "pointer", fontSize: 20 }} title="Sửa">🖋️</span>
            <span style={{ color: "red", cursor: "pointer", fontSize: 20 }} title="Xóa">🗑️</span>
          </span>
        </div>
        <div style={{
          display: "flex",
          alignItems: "center",
          marginBottom: 20,
          fontSize: 18
        }}>
          <input type="checkbox" style={{ marginRight: 14, width: 18, height: 18 }} />
          <span>Giặt quần áo</span>
          <span style={{
            marginLeft: "auto",
            display: "flex",
            gap: 18
          }}>
            <span style={{ color: "orange", cursor: "pointer", fontSize: 20 }} title="Sửa">🖋️</span>
            <span style={{ color: "red", cursor: "pointer", fontSize: 20 }} title="Xóa">🗑️</span>
          </span>
        </div>
        <div style={{
          display: "flex",
          alignItems: "center",
          marginBottom: 20,
          fontSize: 18
        }}>
          <input type="checkbox" style={{ marginRight: 14, width: 18, height: 18 }} />
          <span>Lau nhà</span>
          <span style={{
            marginLeft: "auto",
            display: "flex",
            gap: 18
          }}>
            <span style={{ color: "orange", cursor: "pointer", fontSize: 20 }} title="Sửa">🖋️</span>
            <span style={{ color: "red", cursor: "pointer", fontSize: 20 }} title="Xóa">🗑️</span>
          </span>
        </div>
      </div>
      <div style={{
        background: "#f6f7f9",
        padding: 14,
        borderRadius: 8,
        marginTop: 16,
        fontSize: 17
      }}>
        Công việc đã hoàn thành: <b>0 / 4</b>
      </div>
    </div>
  );
}