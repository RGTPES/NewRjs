import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "../hook/useRedux";
import { delStudent, updateField } from "../redux/reducer/StudentForm.Reducer";

const StudentList = () => {
  const dispatch = useAppDispatch();

  const handleDelete = (id: string) => {
    dispatch(delStudent(id));
  };

  const handleUpdate = (student: any) => {
    dispatch(updateField("id", student.id));
    dispatch(updateField("name", student.name));
    dispatch(updateField("age", student.age));
    dispatch(updateField("gender", student.gender));
    dispatch(updateField("birthday", student.birthday));
    dispatch(updateField("hometown", student.hometown));
  };

  const StudentInfo = useAppSelector((state) => state.Form.filteredStudents);

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>Mã sinh viên</TableCell>
            <TableCell>Tên sinh viên</TableCell>
            <TableCell>Tuổi</TableCell>
            <TableCell>Giới tính</TableCell>
            <TableCell>Hành động</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {StudentInfo.map((s, i) => (
            <TableRow key={s.id}>
              <TableCell>{i + 1}</TableCell>
              <TableCell>{s.id}</TableCell>
              <TableCell>{s.name}</TableCell>
              <TableCell>{s.age}</TableCell>
              <TableCell>{s.gender}</TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => console.log("Xem:", s)}
                  >
                    Xem
                  </Button>
                  <Button
                    variant="contained"
                    color="warning"
                    onClick={() => handleUpdate(s)}
                  >
                    Sửa
                  </Button>
                  <Button
                    variant="contained"
                    color="success"
                    onClick={() => handleDelete(s.id)}
                  >
                    Xóa
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default StudentList;
