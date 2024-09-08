import { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        alert(data.message); // 成功登录后的消息
      } else {
        setError(data.error); // 登录失败时显示错误信息
      }
    } catch {
      setError("登录失败，请稍后再试。");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-purple-500 to-blue-500">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          登录
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              用户名:
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-3 border border-purple-400 rounded-lg focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-200 transition duration-200"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">
              密码:
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-purple-400 rounded-lg focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-200 transition duration-200"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-purple-500 text-white font-bold py-3 rounded-lg hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-blue-200 transition duration-200"
          >
            登录
          </button>
          {error && <p className="mt-4 text-red-500 text-center">{error}</p>}
        </form>
      </div>
    </div>
  );
}

export default Login;
