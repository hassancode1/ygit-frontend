import React,{useState, useEffect} from "react";
import resources from "../assets/resources.svg";
import Course from "../components/Course";
import { client } from "../../lib/Client";
const Resources = () => {
  const [resource, setResource] = useState([])

  useEffect(() =>{
client.fetch(`*[_type == "resources"]{
  name,
  id,
  link,
 paragraph
}`).then((data) => setResource(data))
.catch((error) => console.log(error))
  },[])

  return (
    <div>
      <div className="flex justify-center items-center my-4 gap-6">
        <div className="bg-active text-white px-9 py-2 rounded-md md:px-4">
          Explore Resources
        </div>
        <button className="hidden md:block rounded-md border border-active px-6 py-2">
          About YGIT
        </button>
      </div>

      <img
        src={resources}
        alt="resource"
        className="mx-auto rounded-3xl  object-cover my-3 overflow-hidden w-full p-3 max-w-lg md:max-w-7xl  max-h-[37.5rem] "
      />
 <div className="flex flex-wrap justify-center mt-24"  id="resources">
<Course resource={resource}/>
</div>
    </div>
  );
};

export default Resources;
