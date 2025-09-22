interface FormState {
  id?: string;
  name?: string;
  age?: number;
  gender: string;
  birthday?: string;
  hometown?: string;
  address?: string;
}

interface StudentState {
  form: FormState;
  students: FormState[];        
  filteredStudents: FormState[]; 
}

const loadStudents = (): FormState[] => {
  const data = localStorage.getItem("students");
  return data ? JSON.parse(data) : [
    { id: "SV001", name: "Nguyễn Văn A", age: 20, gender: "Nam" },
    { id: "SV002", name: "Nguyễn Văn B", age: 21, gender: "Nữ" },
    { id: "SV003", name: "Nguyễn Văn C", age: 19, gender: "Nam" },
  ];
};

const initialState: StudentState = {
  form: {
    id: "",
    name: "",
    age: 0,
    gender: "",
    birthday: "",
    hometown: "",
    address: ""
  },
  students: loadStudents(),
  filteredStudents: loadStudents()
};

const UPDATE_FIELD = "form/updateField";
const ADD_STUDENT = "form/addStudent";
const DELETE_STUDENT = "form/deleteStudent";
const SEARCH_STUDENT = "form/searchStudent";
const UPDATE_STUDENT = "form/updateStudent";
const StudentReducer = (
  state: StudentState = initialState,
  action: any
): StudentState => {
  switch (action.type) {
    case UPDATE_FIELD:
      return {
        ...state,
        form: {
          ...state.form,
          [action.payload.name]: action.payload.value
        }
      };

    case ADD_STUDENT: {
      const updatedStudents = [...state.students, state.form];
      localStorage.setItem("students", JSON.stringify(updatedStudents));
      return {
        ...state,
        students: updatedStudents,
        filteredStudents: updatedStudents,
        form: initialState.form
      };
    }

    case DELETE_STUDENT: {
      const updatedStudents = state.students.filter(
        (student) => student.id !== action.payload.id
      );
      localStorage.setItem("students", JSON.stringify(updatedStudents));
      return {
        ...state,
        students: updatedStudents,
        filteredStudents: updatedStudents
      };
    }

    case SEARCH_STUDENT: {
      const keyword = action.payload.toLowerCase();
      const results = state.students.filter(
        (student) =>
          student.name?.toLowerCase().includes(keyword)

      );
      return {
        ...state,
        filteredStudents: results
      };
    }
    case UPDATE_STUDENT: {
  const updatedStudents = state.students.map((s) =>
    s.id === action.payload.id ? action.payload : s
  );
  localStorage.setItem("students", JSON.stringify(updatedStudents));
  return {
    ...state,
    students: updatedStudents,
    filteredStudents: updatedStudents,
    form: initialState.form
  };
}

    default:
      return state;
  }
};

export default StudentReducer;

export const updateField = (name: string, value: any) => ({
  type: UPDATE_FIELD,
  payload: { name, value }
});


export const addStudent = () => ({
  type: ADD_STUDENT
});

export const delStudent = (id: string) => ({
  type: DELETE_STUDENT,
  payload: { id }
});

export const searchStudent = (keyword: string) => ({
  type: SEARCH_STUDENT,
  payload: keyword
});
export const updateStudent = (student: FormState) => ({
  type: UPDATE_STUDENT,
  payload: student
});
