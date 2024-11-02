// pages/signup.js

export default function SignUpPage() {
    return (
        <div>
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-10">
                <h1 className="text-2xl font-semibold mb-6">Sign up for booking</h1>
                <form className="w-full max-w-sm space-y-4 p-6">
                    <input type="text" placeholder="National ID Card" className="w-full p-2 border rounded-md" />
                    <input type="text" placeholder="Name" className="w-full p-2 border rounded-md" />
                    <input type="text" placeholder="Surname" className="w-full p-2 border rounded-md" />
                    <input type="email" placeholder="Email" className="w-full p-2 border rounded-md" />
                    <input type="tel" placeholder="Telephone" className="w-full p-2 border rounded-md" />
                    <input type="password" placeholder="Password" className="w-full p-2 border rounded-md" />
                    <input type="password" placeholder="Confirm Password" className="w-full p-2 border rounded-md" />
                    <button type="submit" className="w-full bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 rounded">
                        Sign Up
                    </button>
                </form>
                <p className="mt-4 text-gray-600">
                    Already have an account? <a href="/signin" className="text-blue-500">Sign In</a>
                </p>
            </div>
        </div>
    );
}
