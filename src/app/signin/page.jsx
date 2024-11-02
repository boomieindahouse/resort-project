// pages/signin.js
export default function SignInPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-2xl font-semibold mb-6">Sign In for booking</h1>
            <form className="w-full max-w-xs">
                <div className="mb-4">
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full p-2 border rounded"
                    />
                </div>
                <div className="mb-6">
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full p-2 border rounded"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 rounded"
                >
                    Sign In
                </button>
            </form>
            <p className="mt-4 text-sm text-gray-600">
                Don’t have an account?{' '}
                <a href="/signup" className="text-blue-500 hover:underline">
                    Sign Up
                </a>
            </p>
        </div>
    );
}
