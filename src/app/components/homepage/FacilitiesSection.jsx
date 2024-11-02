import { 
    FACILITIES_TITLE, 
    FACILITIES_DESCRIPTION, 
    FACILITIES_LIST, 
    FACILITIES_QUOTE 
} from '../../constants/index';

export default function FacilitiesSection() {
  return (
    <div className="text-center py-10 bg-gray-200">
      <h2 className="text-3xl font-semibold mb-4">{FACILITIES_TITLE}</h2>
      <p className="mb-6 text-gray-500">{FACILITIES_DESCRIPTION}</p>
      
      <div className="bg-white p-8 rounded-lg shadow-lg inline-block max-w-4xl">
        <ul className="list-disc list-inside text-left space-y-2">
          {FACILITIES_LIST.map((facility, index) => (
            <li key={index} className="flex items-start">
              <span className="mr-2 text-green-500">✔️</span> {facility}
            </li>
          ))}
        </ul>
      </div>

      <p className="mt-6 italic text-gray-700">
        {FACILITIES_QUOTE}
      </p>
    </div>
  );
}
