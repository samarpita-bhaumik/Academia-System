import { useNavigate } from 'react-router-dom';
import '../App';
import { useEffect, useState } from 'react';
import TimeTableRow from './TimeTableRow';
import { useAuth } from "../Auth/AuthContext";
const TimetableStudent=() =>
{
    const [dataTimetable, setData] = useState([]);
    const [data8, setData8] = useState([])
    const [data10, setData10] = useState([])
    const [data12, setData12] = useState([])
    const [data2, setData2] = useState([])
    const [data4, setData4] = useState([])
    const {isAuthenticated} = useAuth()
    const {setAuthenticated} = useAuth()
    let nav = useNavigate();
    const handleLogout = () => {
        setAuthenticated(false);
        nav('/');
    }
    const timetableAPI = async (id) => {
        const data = {
            studentId: id
        };
        await fetch("http://localhost:8080/timetable", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((response) => response.json())
          .then((textData) => {
            console.warn("data", textData);
            setData(textData);
            let arr8 = [];
            let arr10 = [];
            let arr12 = [];
            let arr2 = [];
            let arr4 = [];
            textData.forEach(obj => {
                if(obj.time == "8am"){
                    arr8.push(obj)
                }
                if(obj.time == "10am"){
                    arr10.push(obj)
                }
                if(obj.time == "12pm"){
                    arr12.push(obj)
                }
                if(obj.time == "2pm"){
                    arr2.push(obj)
                }
                if(obj.time == "4pm"){
                    arr4.push(obj)
                }
              });
            let arr8n = [];
            let arr10n = [];
            let arr12n = [];
            let arr2n = [];
            let arr4n = [];

            let foundItemM = arr8.find(element => element.day === "Monday");
            let foundItemT = arr8.find(element => element.day === "Tuesday");
            let foundItemW = arr8.find(element => element.day === "Wednesday");
            let foundItemTh = arr8.find(element => element.day === "Thursday");
            let foundItemF = arr8.find(element => element.day === "Friday");

            if(foundItemM !== undefined){
                let temp = {id:foundItemM.courseId, name:foundItemM.name}
                arr8n.push(temp)
            }else{
                let temp = {id:"",name:""}
                arr8n.push(temp);
            }

            if(foundItemT !== undefined){
                let temp = {id:foundItemT.courseId, name:foundItemT.name}
                arr8n.push(temp)
            }else{
                let temp = {id:"",name:""}
                arr8n.push(temp);
            }

            if(foundItemW !== undefined){
                let temp = {id:foundItemW.courseId, name:foundItemW.name}
                arr8n.push(temp)
            }else{
                let temp = {id:"",name:""}
                arr8n.push(temp);
            }

            if(foundItemTh !== undefined){
                let temp = {id:foundItemTh.courseId, name:foundItemTh.name}
                arr8n.push(temp)
            }else{
                let temp = {id:"",name:""}
                arr8n.push(temp);
            }

            if(foundItemF !== undefined){
                let temp = {id:foundItemF.courseId, name:foundItemF.name}
                arr8n.push(temp)
            }else{
                let temp = {id:"",name:""}
                arr8n.push(temp);
            }
            setData8(arr8n);


            let foundItemM10 = arr10.find(element => element.day === "Monday");
            let foundItemT10 = arr10.find(element => element.day === "Tuesday");
            let foundItemW10 = arr10.find(element => element.day === "Wednesday");
            let foundItemTh10 = arr10.find(element => element.day === "Thursday");
            let foundItemF10 = arr10.find(element => element.day === "Friday");

            if(foundItemM10 !== undefined){
                let temp = {id:foundItemM10.courseId, name:foundItemM10.name}
                arr10n.push(temp)
            }else{
                let temp = {id:"",name:""}
                arr10n.push(temp);
            }

            if(foundItemT10 !== undefined){
                let temp = {id:foundItemT10.courseId, name:foundItemT10.name}
                arr10n.push(temp)
            }else{
                let temp = {id:"",name:""}
                arr10n.push(temp);
            }

            if(foundItemW10 !== undefined){
                let temp = {id:foundItemW10.courseId, name:foundItemW10.name}
                arr10n.push(temp)
            }else{
                let temp = {id:"",name:""}
                arr10n.push(temp);
            }

            if(foundItemTh10 !== undefined){
                let temp = {id:foundItemTh10.courseId, name:foundItemTh10.name}
                arr10n.push(temp)
            }else{
                let temp = {id:"",name:""}
                arr10n.push(temp);
            }

            if(foundItemF10 !== undefined){
                let temp = {id:foundItemF10.courseId, name:foundItemF10.name}
                arr10n.push(temp)
            }else{
                let temp = {id:"",name:""}
                arr10n.push(temp);
            }
            setData10(arr10n);

            let foundItemM12 = arr12.find(element => element.day === "Monday");
            let foundItemT12 = arr12.find(element => element.day === "Tuesday");
            let foundItemW12 = arr12.find(element => element.day === "Wednesday");
            let foundItemTh12 = arr12.find(element => element.day === "Thursday");
            let foundItemF12 = arr12.find(element => element.day === "Friday");

            if(foundItemM12 !== undefined){
                let temp = {id:foundItemM12.courseId, name:foundItemM12.name}
                arr12n.push(temp)
            }else{
                let temp = {id:"",name:""}
                arr12n.push(temp);
            }

            if(foundItemT12 !== undefined){
                let temp = {id:foundItemT12.courseId, name:foundItemT12.name}
                arr12n.push(temp)
            }else{
                let temp = {id:"",name:""}
                arr12n.push(temp);
            }

            if(foundItemW12 !== undefined){
                let temp = {id:foundItemW12.courseId, name:foundItemW12.name}
                arr12n.push(temp)
            }else{
                let temp = {id:"",name:""}
                arr12n.push(temp);
            }

            if(foundItemTh12 !== undefined){
                let temp = {id:foundItemTh12.courseId, name:foundItemTh12.name}
                arr12n.push(temp)
            }else{
                let temp = {id:"",name:""}
                arr12n.push(temp);
            }

            if(foundItemF12 !== undefined){
                let temp = {id:foundItemF12.courseId, name:foundItemF12.name}
                arr12n.push(temp)
            }else{
                let temp = {id:"",name:""}
                arr12n.push(temp);
            }
            setData12(arr12n);

            let foundItemM2 = arr2.find(element => element.day === "Monday");
            let foundItemT2 = arr2.find(element => element.day === "Tuesday");
            let foundItemW2 = arr2.find(element => element.day === "Wednesday");
            let foundItemTh2 = arr2.find(element => element.day === "Thursday");
            let foundItemF2 = arr2.find(element => element.day === "Friday");

            if(foundItemM2 !== undefined){
                let temp = {id:foundItemM2.courseId, name:foundItemM2.name}
                arr2n.push(temp)
            }else{
                let temp = {id:"",name:""}
                arr2n.push(temp);
            }

            if(foundItemT2 !== undefined){
                let temp = {id:foundItemT2.courseId, name:foundItemT2.name}
                arr2n.push(temp)
            }else{
                let temp = {id:"",name:""}
                arr2n.push(temp);
            }

            if(foundItemW2 !== undefined){
                let temp = {id:foundItemW2.courseId, name:foundItemW2.name}
                arr2n.push(temp)
            }else{
                let temp = {id:"",name:""}
                arr2n.push(temp);
            }

            if(foundItemTh2 !== undefined){
                let temp = {id:foundItemTh2.courseId, name:foundItemTh2.name}
                arr2n.push(temp)
            }else{
                let temp = {id:"",name:""}
                arr2n.push(temp);
            }

            if(foundItemF2 !== undefined){
                let temp = {id:foundItemF2.courseId, name:foundItemF2.name}
                arr2n.push(temp)
            }else{
                let temp = {id:"",name:""}
                arr2n.push(temp);
            }
            setData2(arr2n);

            let foundItemM4 = arr4.find(element => element.day === "Monday");
            let foundItemT4 = arr4.find(element => element.day === "Tuesday");
            let foundItemW4 = arr4.find(element => element.day === "Wednesday");
            let foundItemTh4 = arr4.find(element => element.day === "Thursday");
            let foundItemF4 = arr4.find(element => element.day === "Friday");

            if(foundItemM4 !== undefined){
                let temp = {id:foundItemM4.courseId, name:foundItemM4.name}
                arr4n.push(temp)
            }else{
                let temp = {id:"",name:""}
                arr4n.push(temp);
            }

            if(foundItemT4 !== undefined){
                let temp = {id:foundItemT4.courseId, name:foundItemT4.name}
                arr4n.push(temp)
            }else{
                let temp = {id:"",name:""}
                arr4n.push(temp);
            }

            if(foundItemW4 !== undefined){
                let temp = {id:foundItemW4.courseId, name:foundItemW4.name}
                arr4n.push(temp)
            }else{
                let temp = {id:"",name:""}
                arr4n.push(temp);
            }

            if(foundItemTh4 !== undefined){
                let temp = {id:foundItemTh4.courseId, name:foundItemTh4.name}
                arr4n.push(temp)
            }else{
                let temp = {id:"",name:""}
                arr4n.push(temp);
            }

            if(foundItemF4 !== undefined){
                let temp = {id:foundItemF4.courseId, name:foundItemF4.name}
                arr4n.push(temp)
            }else{
                let temp = {id:"",name:""}
                arr4n.push(temp);
            }
            setData4(arr4n);

          })
          .catch((e) => {
            console.log("e", e);
          });
        return;
      };//js
      //
      useEffect(() => {
        if(isAuthenticated)
        {
            let id = localStorage.getItem('id');
            console.log("deb",id);
            timetableAPI(id);
        }
        else{
            return nav('/');
        }
        
    },[]);
return(
<>
<div class="timetable">
    <table>
        <thead>
            <tr>
                <th>Time</th>
                <th>Monday</th>
                <th>Tuesday</th>
                <th>Wednesday</th>
                <th>Thursday</th>
                <th>Friday</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>8am</td>
                {
                    data8.map((item) => {
                        return(
                            <TimeTableRow
                            first={item}/>
                        )
                    })
                }
            </tr>
            <tr>
                <td>10am</td>
                {
                    data10.map((item) => {
                        return(
                            <TimeTableRow
                            first={item}/>
                        )
                    })
                }
            </tr>
            <tr>
                <td>12pm</td>
                {
                    data12.map((item) => {
                        return(
                            <TimeTableRow
                            first={item}/>
                        )
                    })
                }
            </tr>
            <tr>
                <td>2pm</td>
                {
                    data2.map((item) => {
                        return(
                            <TimeTableRow
                            first={item}/>
                        )
                    })
                }
            </tr>
            <tr>
                <td>4pm</td>
                {
                    data4.map((item) => {
                        return(
                            <TimeTableRow
                            first={item}/>
                        )
                    })
                }
            </tr>
            {/* Add Logout Button */}
            <tr>
                <td colSpan="5">
                    <button className="logout" onClick={handleLogout}>Logout</button>
                </td>
            </tr>
        </tbody>
    </table>
</div>

</>
)};


export default TimetableStudent;