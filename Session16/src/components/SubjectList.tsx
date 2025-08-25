import React, { PureComponent } from 'react';

class SubjectList extends PureComponent<object, object> {
    render() {
        const subjects = ["Toán", "Văn", "Anh", "Hóa", "Sinh"];
        return (
            <div>
                <h2>Danh sách môn học</h2>
                <ul>
                    {subjects.map((subject, idx) => (
                        <li key={idx}>{subject}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default SubjectList;
