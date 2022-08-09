import React from 'react'

function EmployeeTable(props) {
  return (
    <div>
      <table border="1">
          <thead>
              <tr>
                  <th> # </th>
                  <th> name </th>
                  <th> gender </th>
                  <th> email </th>
                  <th> department </th>
                  <th> action </th>
              </tr>
          </thead>
          <tbody>
              { props.data.map(function (emp) {
                  return (
                      <tr key={emp.id}>
                          <td> {emp.id} </td>
                          <td> {emp.name} </td>
                          <td> {emp.gender} </td>
                          <td> {emp.email}</td>
                          <td> {emp.department} </td>
                          <td> <button onClick={() => {
                              props.handleRemove(emp.id)
                          }}> remove </button> </td> 
                      </tr>
                  )
              })}
          </tbody>
      </table>
    </div>
  )
}

export default EmployeeTable