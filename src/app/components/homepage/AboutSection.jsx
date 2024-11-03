// components/AboutSection.js
export default function AboutSection() {
    return (
        <div className="text-center py-28 bg-gray-100">
            <h1 className="text-3xl font-semibold mb-4">About Resort</h1>
            <div className="flex justify-around h-[600px] items-center">
                <img
                    src="https://image-placeholder.com/images/actual-size/600x400.png"
                    alt="Resort placeholder"
                    className="object-cover"
                />
                <div className="w-1/3 text-left">
                    <h3 className="text-2xl font-semibold">Welcome To My Resort</h3>
                    <p className="mt-2 text-gray-600">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quae rem nemo iste ut totam harum repellat esse quod voluptatum.
                    </p>
                    <p className="mt-2 text-gray-600">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam incidunt quis impedit?
                    </p>
                    <p className="mt-2 text-gray-600">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos voluptate perspiciatis explicabo molestias molestiae aut.
                    </p>
                </div>
            </div>
        </div>
    );
}
