import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useUserStore } from "../store/useUserStore";

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("JaneDoe");
  const [password, setPassword] = useState("password123");

  const { name, email, setUser } = useUserStore();

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    // Store fake auth flag
    localStorage.setItem("auth", "true");
    // Store fake user data in zustand store
    setUser({
      name: username,
      email: `${username.toLowerCase()}@example.com`,
      avatar: `https://api.adorable.io/avatars/285/${username}.png`,
    });

    // Redirect
    navigate("/dashboard");
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
      <form
        onSubmit={handleLogin}
        className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md w-80 space-y-4"
      >
        <h2 className="text-xl font-bold text-center">Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full px-3 py-2 border rounded-md bg-gray-50 dark:bg-gray-700 dark:text-white text-black"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-3 py-2 border rounded-md bg-gray-50 dark:bg-gray-700 dark:text-white text-black"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Log In
        </button>
      </form>
    </div>
  );
}
