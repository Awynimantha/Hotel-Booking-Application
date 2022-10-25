import React from "react"
import "../App"

export default function HotelUpdateForm() {
    return (
        <div className="mt-5">
            <div className="container">
                <table class="table table-hover">
                    <thead>
                        <tr className="table-dark">
                            <th scope="col">Id</th>
                            <th scope="col">Hotel Name</th>
                            <th scope="col">Type</th>
                            <th scope="col">Num Of Rooms</th>
                            <th scope="col">Location</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Galadari Hotels (Lanka) PLC</td>
                            <td>five-star</td>
                            <td>458</td>
                            <td>Colombo</td>
                            <td className="d-flex justify-content-between">
                            <button className="btn btn-primary">Update</button>
                            <button className="btn btn-danger">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}