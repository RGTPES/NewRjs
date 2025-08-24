import './Exercise05.css'

const Exercise05=()=>{
    return(
        <div className='body'>
            <header>
                <h1>Quản lý sinh viên</h1>
                <button type="button" className="btn btn-primary">Thêm mới sinh viên</button>
            </header>
            <div className='right'>
                    <div>
                        <br />
                        <select name="sort" id="sort">
                            <option value="..." > Sắp xếp theo tuổi</option>
                            <option value="Tang dan">Tang dan</option>
                            <option value="Giam dan">Giam dan</option>
                        </select>
                        <input type="text" name='search' id='search' placeholder='  Tìm kiếm từ khóa theo tên hoặc email' />
                    </div>
            </div>
            <br /><br />
            <main>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Mã sinh viên</th>
                            <th>Tên sinh viên</th>
                            <th>Ngày sinh</th>
                            <th>Email</th>
                            <th>Trạng thái</th>
                            <th>Chức năng</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>SV001</td>
                            <td>Nguyễn Văn A</td>
                            <td>21/12/2023</td>
                            <td>nva@gmail.com</td>
                            <td className='check'><div className="active">Đang hoạt động</div></td>
                            <td>
                                <div className="function">
                                    <button className='block'>Chan</button>
                                    <button className='change'>Sua</button>
                                    <button className='delete'>Xoa</button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>SV002</td>
                            <td>Nguyễn Thị B</td>
                            <td>21/11/2022</td>
                            <td>ntb@gmail.com</td>
                            <td className='check'><div className="disconnect">Ngừng hoạt động</div></td>
                            <td>
                                <div className="function">
                                    <button className='block'>Chan</button>
                                    <button className='change'>Sua</button>
                                    <button className='delete'>Xoa</button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </main>
            <footer>
                <div>
                    <button>←</button>
                    <button className='select'>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>4</button>
                    <button>→</button>
                </div>
            </footer>
        </div>
    )

}


export default Exercise05