import React, { useState } from 'react';

const TimeTableRow = (props) => {
  const [facultyName, setFacultyName] = useState('');
  const [roomNumbers, setRoomNumbers] = useState('');
  const [specialization, setSpecialization] = useState('');
  let [change, setChange] = useState(false)

  const showPopup = () => {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("customPopup").style.display = "block";
  };

  const closePopup = () => {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("customPopup").style.display = "none";
    setChange(false)
  };

  const fetchCourseDetails = async () => {
    try {
      const data = {
        courseId: props.first.id
      };

      const response = await fetch("http://localhost:8080/coursedetails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const textData = await response.json();
      //console.warn("SNS", textData[0].facultyName);

      if (textData.length > 0) {
        const roomSet = new Set();
        const specializationSet = new Set();

        textData.forEach(obj => {
          roomSet.add(obj.room);
          specializationSet.add(obj.sname);
        });
        //console.log("H",textData)
        setFacultyName(textData[0].facultyName);
        console.log(facultyName);
        setRoomNumbers([...roomSet].join(' '));
        setSpecialization([...specializationSet].join(' '));
        setChange(true)
        showPopup();
      }
    } catch (e) {
      console.error("Error fetching course details:", e);
    }
  };

  return (
    <>
    { (change &&<><div className="overlay" id="overlay"></div>
      <div className="popup" id="customPopup">
        <p>Faculty Name: {facultyName}</p>
        <p>Room Numbers: {roomNumbers}</p>
        <p>Specializations: {specialization}</p>
        <button className="close-btn" onClick={() => closePopup()}>Close</button>
      </div></>)
      }
      {(props.first.name !== "" && <td className="clickable" onClick={fetchCourseDetails}>{props.first.name}</td>)
        || (props.first.name === "" && <td className=""></td>)}
    </>
  );
};

export default TimeTableRow;
