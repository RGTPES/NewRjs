import {
  Button,
  MenuItem,
  Select,
  TextField,
  type SelectChangeEvent,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "../hook/useRedux";
import type { ChangeEvent } from "react";
import {
  updateField,
  addStudent,
  updateStudent,
} from "../redux/reducer/StudentForm.Reducer";

const StudentForm = () => {
  const dispatch = useAppDispatch();
  const form = useAppSelector((state) => state.Form.form);
  const students = useAppSelector((state) => state.Form.students);

  const handleChange = (
    e:
      | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | SelectChangeEvent<string>
  ) => {
    const { name, value } = e.target;
    dispatch(updateField(name, value));
  };

  const handleSubmit = () => {
    if (form.id && students.find((s) => s.id === form.id)) {
      dispatch(updateStudent(form));
    } else {
      dispatch(addStudent());
    }
  };

  return (
    <div className="w-1/3 p-4 border rounded-xl shadow">
      <h2 className="font-semibold mb-4">Thông Tin Sinh Viên</h2>
      <div className="flex flex-col gap-4">
        <TextField
          label="Mã sinh viên"
          name="id"
          value={form.id}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          label="Tên sinh viên"
          name="name"
          value={form.name}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          label="Tuổi"
          name="age"
          type="number"
          value={form.age}
          onChange={handleChange}
          fullWidth
        />
        <Select
          name="gender"
          value={form.gender}
          onChange={handleChange}
          fullWidth
        >
          <MenuItem value="Nam">Nam</MenuItem>
          <MenuItem value="Nữ">Nữ</MenuItem>
        </Select>
        <TextField
          type="date"
          name="birthday"
          value={form.birthday}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          label="Nơi sinh"
          name="hometown"
          value={form.hometown}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          label="Địa chỉ"
          name="address"
          value={form.address}
          onChange={handleChange}
          fullWidth
        />
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </div>
    </div>
  );
};

export default StudentForm;
