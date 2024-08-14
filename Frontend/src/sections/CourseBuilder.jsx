import axios from "axios";
import { useState } from "react";

// Define style constants
const styles = {
  container:
    "w-full bg-[#161D29] mt-12 px-12 py-12 text-white border-[1px] border-[#32313D] rounded-md",
  hidden: "hidden",
  title: "text-2xl font-bold mb-4",
  sectionLabel: "block mb-2",
  required: "text-red-500",
  input: "w-full p-2 rounded bg-[#2C333F] border border-gray-700 outline-none",
  button:
    "flex items-center bg-yellow-500 text-black px-4 py-2 rounded mb-6 font-semibold",
  buttonText: "mr-2",
  sectionItem:
    "w-full my-2 p-2 rounded bg-gray-800 border border-gray-700 outline-none",
  buttonGroup: "flex font-semibold justify-between",
  backButton: "bg-gray-600 text-white px-4 py-2 rounded",
  nextButton: "bg-yellow-500 text-black px-4 py-2 rounded",
};

const CourseBuilder = ({ page, setpage, section, setSection, title }) => {
  const [lecture, setLecture] = useState("");
  const [description, setDescription] = useState("");

  const [sec, setSec] = useState([]);

  const updatesection = () => {
    if (lecture.trim() && description.trim()) {
      setSec((prev) => [...prev, { title: lecture, description }]);
      setLecture("");
      setDescription("");
    } else {
      alert("Both lecture name and description are required.");
    }
  };

  const AddLectures = async () => {
    if (sec.length === 0) {
      alert("Please add at least one lecture.");
      return;
    }

    try {
      const api_url = import.meta.env.VITE_API_URL;
      const response = await axios.post(`${api_url}/addLectures`, {
        id: localStorage.getItem("id"),
        title,
        lecture: sec,
      });

      if (response.data.success) {
        alert("Lecture added successfully!");
        // Optionally, reset the form or redirect
      } else {
        alert(response.data.message || "Failed to add lecture.");
      }
    } catch (e) {
      console.error("There was an error adding the lecture:", e);
      alert("An error occurred while adding the lecture.");
    }
  };

  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.title}>Course Builder</h1>

        {/* LECTURE INPUT */}
        <div className="mb-3">
          <label className={styles.sectionLabel}>
            Lecture Name <span className={styles.required}>*</span>
          </label>
          <input
            type="text"
            required
            placeholder="Add a Lecture name"
            value={lecture}
            onChange={(e) => {
              setLecture(e.target.value);
            }}
            className={styles.input}
          />
        </div>

        {/* DESCRIPTION INPUT */}
        <div className="mb-3">
          <label className={styles.sectionLabel}>
            Description <span className={styles.required}>*</span>
          </label>
          <input
            type="text"
            required
            placeholder="Add a Lecture description"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            className={styles.input}
          />
        </div>

        <button onClick={updatesection} className={styles.button}>
          <span className={styles.buttonText}>Add Lecture +</span>
        </button>

        {sec.map((item, index) => (
          <div key={index} className={`${styles.sectionItem} mt-2`}>
            <h1>{`Lecture-${index + 1}: ${item.lecture}`}</h1>
            <p className="mt-2">{`Description: ${item.description}`}</p>
          </div>
        ))}
      </div>

      <div className={styles.buttonGroup}>
        <button onClick={() => setpage(page - 1)} className={styles.backButton}>
          Back
        </button>
        <button
          onClick={() => {
            AddLectures(); // Trigger AddLectures before moving to the next page
            if (sec.length > 0) {
              setSection(sec);
              setpage(page + 1);
            }
          }}
          className={styles.nextButton}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CourseBuilder;
