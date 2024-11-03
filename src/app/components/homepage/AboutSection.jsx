// components/AboutSection.js
export default function AboutSection() {
    return (
        <div className="flex justify-around h-[700px] bg-gray-100 flex justify-center items-center">
            <img
                src="https://image-placeholder.com/images/actual-size/600x400.png"
                alt="Resort placeholder"
                className="object-cover"
            />
            <div className="w-1/3 text-left">
                <h3 className="text-xl font-semibold">Welcome To My Resort</h3>
                <p className="mt-2 text-gray-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quae rem nemo iste ut totam harum repellat esse quod voluptatum.
                </p>
                <p className="mt-2 text-gray-600">
                    Lorem ipsum dolor sit amet consectetur. Metus elit leo pretium amet...
                </p>
            </div>
        </div>
    );
}
