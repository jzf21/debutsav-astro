import React, {useState, useEffect} from "react";

const Button = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <div>
      {/* {showButton && ( */}
      <div>
        <button className="md:block rounded-full shadow-xl text-xl fixed bottom-6 right-6 bg-red text-white z-50 px-4 py-2 cursor-pointer p-4">
          <a href="/">^</a>
        </button>
      </div>
      {/* )} */}
    </div>
  );
};

export default Button;
