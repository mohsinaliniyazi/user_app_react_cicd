import React from "react"
const AllList = (props) => {
  return (
    props.taskList.map((val, idx) => {
      let projectName = `projectName-${idx}`, task = `task-${idx}`, taskNotes = `taskNotes-${idx}`, taskStatus = `taskStatus-${idx}`
      return (
        <tr key={val.idx}>
          <th scope="row">{idx + 1}</th>

          <td>
            <input type="text"  name="id" value={val.id} data-id={idx} id="id" className="form-control " disabled />
          </td>
         
          <td>
            <input  name="taskNotes" value={val.username} id={taskNotes} data-id={idx} className="form-control" />
          </td>
          <td>
            <input type="text"  name="task" value={val.email}  id={task} data-id={idx} className="form-control " />
          </td>
          <td>
            <select name="taskStatus" id={taskStatus} data-id={idx} className="form-control" >
              <option value="pending">Pending</option>
              <option value="In Progress">In progress</option>
              <option value="Completed">Completed</option>
              <option value="Hold">Hold</option>
            </select>
          </td>
          <td>
            {
            <button onClick={()=>props.add()} type="button" className="btn btn-primary text-center"><i className="fa fa-plus-circle" aria-hidden="true"></i></button>
           
            }
          </td>
        </tr >
      )
    })
  )
}
export default AllList