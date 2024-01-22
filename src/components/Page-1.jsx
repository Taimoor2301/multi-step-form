import Header from "./utils/Header";
import Layout from "./utils/Layout";
import { useDataContext } from "../context/Context";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PageOne = () => {
  const { data, setData, setActivePage } = useDataContext();
  const { name, email, phoneNumber } = data;
  const navigate = useNavigate();

  useEffect(() => {
    setActivePage(1);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  function handleSubmit(e) {
    e.preventDefault();
    navigate("/2");
  }
  return (
    <form
      className="flex flex-col h-full justify-between"
      onSubmit={handleSubmit}
    >
      <div className="w-full flex flex-col gap-10 max-w-lg">
        <Header
          title={"Personal info"}
          sub={"Please provide your name, email address, and phone number."}
        />

        <section className="flex flex-col gap-5">
          <div className="input-wrapper">
            <label htmlFor="name" className="label">
              Name
            </label>
            <input
              type="text"
              required
              name="name"
              value={name}
              onChange={(e) => handleChange(e)}
              placeholder="e.g. Stephen King"
              className="input"
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="email" className="label">
              Email Address
            </label>
            <input
              type="email"
              required
              name="email"
              value={email}
              onChange={(e) => handleChange(e)}
              placeholder="e.g. stephenking@gmail.com"
              className="input"
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="phoneNumber" className="label">
              Phone Number
            </label>
            <input
              type="tel"
              required
              name="phoneNumber"
              value={phoneNumber}
              onChange={(e) => handleChange(e)}
              placeholder="e.g. +92 300 4345678"
              className="input"
            />
          </div>
        </section>
      </div>
      <section className="flex w-full justify-end mt-10">
        <button
          type="submit"
          className="bg-c1 hover:bg-c2 transition-all text-white font-ubuntuM w-44  px-5 py-3 rounded-md"
        >
          Next
        </button>
      </section>
    </form>
  );
};

export default PageOne;
