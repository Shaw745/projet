import React, { useState, useEffect }from "react";
import brand from "../assets/icon-brand-recognition.svg";
import detailed from "../assets/icon-detailed-records.svg";
import fully from "../assets/icon-fully-customizable.svg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const validationSchema = yup.object().shape({
  link: yup.string().required("Please add a link"),
});

const STORAGE_KEY = "shortened_links";

const Widget = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(validationSchema) });

  const [links, setLinks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [copiedUrl, setCopiedUrl] = useState(null);

  // Load from localStorage on component mount
  useEffect(() => {
    const savedLinks = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    setLinks(savedLinks);
  }, []);

  // Save to localStorage whenever links change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(links));
  }, [links]);

  const handleFormSubmit = async (data) => {
    setLoading(true);
    setErrorMsg("");

    try {
      const response = await fetch(
        `https://tinyurl.com/api-create.php?url=${encodeURIComponent(
          data.link
        )}`
      );

      if (!response.ok) throw new Error("Failed to shorten the URL");

      const shortUrl = await response.text();

      const newLink = {
        original: data.link,
        short: shortUrl,
      };

      setLinks((prev) => [newLink, ...prev]); // Add new link to the top
      reset();
    } catch (error) {
      setErrorMsg("There was a problem shortening the URL.");
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = async (url) => {
    try {
      await navigator.clipboard.writeText(url);
      setCopiedUrl(url);
      setTimeout(() => setCopiedUrl(null), 2000);
    } catch (err) {
      alert("Failed to copy the URL.");
    }
  };
  return (
    <div className="bg-gray-300">
      <div className="components ">
        <div className=" w-full p-5 md:p-10 md:h-[100px]  bg-[#393455] -translate-y-[40%] ">
          <form
            onSubmit={handleSubmit(handleFormSubmit)}
            className="flex flex-col md:flex-row gap-4 w-[90%]  mx-auto"
          >
            <input
              type="text"
              placeholder="Shorten a link here..."
              className={`bg-white text-gray-400 h-[40px] w-full rounded-md  p-3  placeholdenpr:text-gray-400  ${
                errors.link ? "border-red-900" : "border-gray-300"
              }`}
              {...register("link")}
            />
            {errors.link && (
              <span className="text-red-500 text-sm md:hidden ">
                {errors.link.message}
              </span>
            )}
            <button
              type="submit"
              disabled={loading}
              className="md:w-[150px] w-full h-[40px] hover:bg-[#92c7c1]  cursor-pointer rounded-md bg-[#40b3a6] text-white font-semibold"
            >
              {" "}
              {loading ? "Shortening..." : "Shorten It!"}
            </button>
          </form>
          {errors.link && (
            <span className="text-red-500 text-sm hidden ml-14  md:block">
              {errors.link.message}
            </span>
          )}
          {errorMsg && (
            <span className="text-red-500 text-sm mt-2">{errorMsg}</span>
          )}
        </div>
        {/* LIST OF SHORTENED LINKS */}
        {links.length > 0 && (
          <div className="w-[90%] mx-auto space-y-4 -mt-4 mb-8">
            {links.map((link, index) => (
              <div
                key={index}
                className="bg-white rounded-md p-4 flex flex-col md:flex-row justify-between items-center shadow"
              >
                <p className="text-gray-800 break-all mb-2 md:mb-0 w-full md:w-auto">
                  {link.original}
                </p>
                <div className="flex flex-col md:flex-row items-center gap-2">
                  <p className="text-[#40b3a6] break-all">{link.short}</p>
                  <button
                    onClick={() => handleCopy(link.short)}
                    className={`rounded-md px-4 py-2 text-white transition-colors cursor-pointer duration-300 ${
                      copiedUrl === link.short
                        ? "bg-purple-600 hover:bg-purple-700"
                        : "bg-[#40b3a6] hover:bg-[#a1e6de]"
                    }`}
                  >
                    {copiedUrl === link.short ? "Copied!" : "Copy"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="text-center mb-10">
          <h2 className="text-gray-800 text-center font-bold text-4xl mt-10">
            Advanced Statistics
          </h2>
          <p className="text-gray-600 text-center mt-4 w-[300px] mx-auto">
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>
        {/*  */}
        <section className="mb-15 md:mb-3"> 
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-4 p-5 md:p-10">
            {/* Card 1 */}
            <div className="bg-white rounded-sm shadow-lg h-full p-5 relative">
              {/* Vertical line for mobile and desktop */}
              <div className="absolute bg-[#2ACFCF] w-2 h-9 md:h-2 md:w-13 md:top-[50%] top-57 left-1/2 transform -translate-x-1/2 md:left-auto md:-right-20 "></div>

              <div className="flex items-center justify-center bg-[#393455] p-3 rounded-full mt-4 mb-8 absolute -top-10 md:left-2 left-1/2 transform -translate-x-1/2 md:translate-x-0">
                <img
                  src={brand}
                  alt="Brand Recognition"
                  className="w-12 h-12"
                />
              </div>
              <h3 className="text-gray-800 font-bold text-xl mt-8">
                Brand Recognition
              </h3>
              <p className="text-gray-400 mt-2">
                Boost your brand recognition with each click. Generic links
                don’t mean a thing. Branded links help instil confidence in your
                content.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-sm shadow-lg h-full p-5 relative mt-8 md:mt-8">
              {/* Vertical line for mobile and desktop */}
              <div className=" absolute bg-[#2ACFCF] w-2 h-full md:h-2 md:w-13 md:top-[50%] top-65 left-1/2 transform -translate-x-1/2 md:left-auto md:-right-20 "></div>

              <div className="flex items-center justify-center bg-[#393455] p-3 rounded-full absolute -top-10 md:left-2 left-1/2 transform -translate-x-1/2 md:translate-x-0">
                <img
                  src={detailed}
                  alt="Detailed Records"
                  className="w-12 h-12"
                />
              </div>
              <h3 className="text-gray-800 font-bold text-xl mt-8">
                Detailed Records
              </h3>
              <p className="text-gray-400 mt-2">
                Gain insights into who is clicking your links. Knowing when and
                where people engage with your content helps inform better
                decisions.
              </p>
            </div>

            {/* Card 3 (No connector line after this) */}
            <div className="bg-white h-full rounded-sm shadow-lg p-5 relative mt-18 md:mt-16">
              <div className="flex items-center justify-center bg-[#393455] p-3 rounded-full absolute -top-10 md:left-2 left-1/2 transform -translate-x-1/2 md:translate-x-0">
                <img
                  src={fully}
                  alt="Fully Customizable"
                  className="w-10 h-10"
                />
              </div>
              <h3 className="text-gray-800 font-bold text-xl mt-8">
                Fully Customizable
              </h3>
              <p className="text-gray-400 mt-2">
                Improve brand awareness and content discoverability through
                customizable links, supercharging audience engagement.
              </p>
                
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Widget;
