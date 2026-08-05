import { Outlet } from "react-router-dom";
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import Toast from "../components/Toast";

export default function Layout() {
    const [menuOpen, setMenuOpen] = useState(window.innerWidth > 950);
    const [toast, setToast] = useState(null);

    return (
        <div className="app-shell">
            <Sidebar open={menuOpen} onClose={() => setMenuOpen(false)} />

            {menuOpen && (
                <button
                    className="sidebar-backdrop"
                    onClick={() => setMenuOpen(false)}
                />
            )}

            <main className="main-area">
                <Topbar
                    menuOpen={menuOpen}
                    onMenu={() => setMenuOpen(true)}
                />

                <div className="content">
                    <Outlet />
                </div>
            </main>

            {toast && (
                <Toast
                    message={toast}
                    onClose={() => setToast(null)}
                />
            )}
        </div>
    );
}