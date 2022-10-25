import React from "react"
import "../App"

export default function AdUpdateForm() {
    return (
        <div className="mt-5">
            <div className="container">
                <table class="table table-hover">
                    <thead>
                        <tr className="table-dark">
                            <th scope="col">Id</th>
                            <th scope="col">Advertisement Name</th>
                            <th scope="col">Description</th>
                            <th scope="col">Hotel Name</th>
                            <th scope="col">Location</th>
                            <th scope="col">Valitidy Period</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Honeymoon Offer</td>
                            <td>50% for Honeymoon Couples</td>
                            <td>Shangrila</td>
                            <td>Colombo</td>
                            <td>25/10/2021 to 25/11/2021</td>
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