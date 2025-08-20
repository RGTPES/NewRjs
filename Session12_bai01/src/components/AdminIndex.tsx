

import './AdminIndex.css';

const AdminIndex = () => {
    return (
        <div className="admin-layout">
            <header className="admin-header">Header</header>
            <div className="admin-body">
                <aside className="admin-menu">Menu</aside>
                <main className="admin-main">Main</main>
            </div>
            <footer className="admin-footer">Footer</footer>
        </div>
    );
};

export default AdminIndex;