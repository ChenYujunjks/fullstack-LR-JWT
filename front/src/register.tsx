import { useState } from "react";
import { Link } from "react-router-dom"; // 引入 Link 组件

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(""); // 清空之前的错误消息
    setSuccessMessage(""); // 清空之前的成功消息

    try {
      const response = await fetch("/api/register", {
        //http://localhost:8080/api/register
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
        setUsername("");
        setPassword("");
        setSuccessMessage(data.message); // 显示成功消息
      } else {
        setError(data.error); // 注册失败时显示错误信息
      }
    } catch {
      setError("注册失败，请稍后再试。");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-purple-400 to-blue-500">
      <div className="bg-blue-100 p-8 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          注册
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
            注册
          </button>
          {error && <p className="mt-4 text-red-500 text-center">{error}</p>}
        </form>
        {/* 添加跳转到登录页面的链接 */}
        <div className="mt-4 text-center">
          <Link to="/login" className="text-blue-600 hover:underline">
            已有账号？去登录
          </Link>
        </div>

        {/* 间隔一段背景色，成功消息显示在下方 */}
        {successMessage && (
          <div className="mt-8 bg-white p-4 rounded-lg shadow-inner max-w-sm w-full text-indigo-600 text-center">
            {successMessage}
          </div>
        )}
      </div>
    </div>
  );
}

export default Register;
