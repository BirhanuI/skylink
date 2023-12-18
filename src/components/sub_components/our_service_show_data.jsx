import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { FaPlus, FaTrashAlt } from "react-icons/fa";
import { GrUpdate } from "react-icons/gr";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const OurServiceDataTable = () => {
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/our-service").then((res) => {
      setData(res.data);
    });
  }, []);
  const handleDelete = (id) => {
    axios.delete(`http://127.0.0.1:8000/api/our-service/${id}`).then((res) => {
      setData(res.data);
      toast.success("Deleted successfully");
    });
  };
  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", value);
    formData.append("image", image);
    formData.append("link", link);
    formData.append("icon", icon);
    axios
      .post("http://127.0.0.1:8000/api/our-service", formData)
      .then((res) => {
        setData(res.data);
        toast.success("Data inserted successfully");
        setShowModal(false);
      });
  };
  const handleUpdate = () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", value);
    formData.append("image", image);
    formData.append("link", link);
    formData.append("icon", icon);
    axios
      .post(`http://127.0.0.1:8000/api/our-service/${id}`, formData)
      .then((res) => {
        setData(res.data);
        toast.success("Data updated successfully");
        setShowModal(false);
      });
  };
  const [dataIndex, setDataIndex] = useState(-1);
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState();
  const [state, setState] = useState(true);
  const [id, setId] = useState();
  const [link, setLink] = useState("");
  const [icon, setIcon] = useState();
  return (
    <div className="pt-10 text-blue-400 ">
      <div className="overflow-y-auto h-[700px]">
        <table className="w-full">
          <thead className="text-xl ">
            <td className="pl-5">No.</td>
            <td className="text-center">Title</td>
            <td className="text-center">Description</td>
            <td className="text-center">Image</td>
            <td className="text-center">Icon</td>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? "bg-blue-50" : "bg-white"
                } cursor-pointer relative`}
                onMouseEnter={() => {
                  setDataIndex(index);
                }}
                onMouseLeave={() => {
                  setDataIndex(-1);
                }}
              >
                <td className="pl-5 text-center">{index + 1}</td>
                <td className="text-center">{item.title}</td>
                <td className="text-center" dangerouslySetInnerHTML={{ __html: item.description }}/>
                <td className="">
                  <img
                    className="h-20 w-20 mx-auto"
                    src={`http://localhost:8000${item.image}`}
                    alt={`${item.title} image`}
                  />
                </td>
                <td className="">
                  <img
                  className="h-20 w-20 mx-auto"
                    src={`http://localhost:8000${item.icon}`}
                    alt={`${item.title} icon`}
                  />
                </td>
                <div
                  className={`absolute top-0 left-0 right-0 bottom-0 flex items-center ${
                    index === dataIndex ? "" : "hidden"
                  }`}
                >
                  <div
                    onClick={() => {
                      setValue(item.description);
                      setShowModal(true);
                      setState(true);
                      setId(item.id);
                    }}
                    className="bg-yellow-500 opacity-50 hover:opacity-100 w-full flex items-center justify-center h-full text-3xl relative"
                  >
                    <GrUpdate className="z-10" />
                  </div>
                  <div
                    onDoubleClick={() => {
                      handleDelete(item.id);
                    }}
                    onClick={() => {
                      toast.info("Double click to delete.");
                    }}
                    className="bg-red-500 opacity-50 hover:opacity-100 w-full  flex items-center justify-center h-full text-3xl text-black relative"
                  >
                    <FaTrashAlt className="z-10" />
                  </div>
                </div>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div
        onClick={() => {
          setShowModal(!showModal);
          setValue("");
          setState(false);
          setTitle("");
          setLink("");
          setIcon("");
        }}
        className="fixed bottom-10 right-20 w-16 h-16 bg-white rounded-full flex justify-center items-center text-2xl hover:text-white hover:bg-blue-400 duration-300 cursor-pointer"
      >
        <FaPlus />
      </div>
      {/*
       *
       *
       ***************Form**************
       *
       *
       */}
      <div
        className={`absolute top-0 right-0 bottom-0 left-0 bg-black opacity-50 ${
          showModal ? "" : "hidden"
        }`}
        onClick={() => setShowModal(!showModal)}
      />
      <div
        className={`absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  ${
          showModal ? "flex" : "hidden"
        }`}
      >
        <div className="overflow-y-auto bg-white p-10 rounded-xl flex justify-center items-center flex-col gap-10">
          <div className=" flex justify-around items-center gap-10">
            <div className="flex justify-center">
              <label htmlFor="title">Title: </label>
              <input
                type="text"
                name="title"
                className="border outline-none"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="flex justify-center">
              <label htmlFor="image">Image:</label>
              <input
                type="file"
                name="image"
                className="outline-none"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </div>
          </div>
          <div className="flex justify-around items-center gap-10">
            {/* <div className="flex justify-center">
              <label htmlFor="link">Link: </label>
              <input
                type="text"
                name="link"
                className="border outline-none"
                onChange={(e) => setLink(e.target.value)}
              />
            </div> */}
            <div className="flex justify-center">
              <label htmlFor="icon">Icon:</label>
              <input
                type="file"
                name="Icon"
                className="outline-none"
                onChange={(e) => setIcon(e.target.files[0])}
              />
            </div>
          </div>
          <div className="flex justify-center py-10 flex-col">
            <label htmlFor="description">Description: </label>
            <ReactQuill theme="snow" value={value} onChange={setValue} />
          </div>
          <div
            onClick={handleSubmit}
            className={`border mt-10 px-5 py-2 rounded-md hover:border-blue-400  duration-300 cursor-pointer ${
              state ? "hidden" : ""
            }`}
          >
            Submit
          </div>
          <div
            onClick={handleUpdate}
            className={`border mt-10 px-5 py-2 rounded-md hover:border-blue-400  duration-300 cursor-pointer ${
              state ? "" : "hidden"
            }`}
          >
            update
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServiceDataTable;
