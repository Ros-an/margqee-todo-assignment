import { useNavigate } from "react-router-dom";
import { logout } from "../../utils/auth";
import { useGlobalContext } from "../../context/GlobalContext";
import MemoShutdownIcon from "../../assets/ShutdownIcon";
import { toast } from "react-toastify";

export default function Navbar() {
    const navigate = useNavigate();
    const { userData } = useGlobalContext();

    const handleLogout = () => {
        logout(() => navigate("/login"));
        toast.success("Logged out successfully!");
    };
    return (
        <nav className="flex justify-between items-center py-4 px-6 w-full shadow-md">
            <h2 className="font-semibold text-2xl">Todo App</h2>
            <div className="flex justify-between items-center gap-4">
                <p className="font-medium text-lg capitalize">{userData.username}</p>
                <button onClick={handleLogout}>
                    <MemoShutdownIcon fontSize={"1.5rem"} fill="orange" />
                </button>
            </div>
        </nav>
    );
}
