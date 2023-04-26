import { useEffect } from "react";
import { useState } from "react";

let MyTable = () => {

    const [products, setProducts] = useState([]);

    const fechData = () => {
        fetch("https://api.escuelajs.co/api/v1/products")
        .then((res) => res.json())
        .then((res) => {
            setProducts(res);
            console.log(products)
        });
    };

    useEffect(() => {
        fechData();
    }, []);

    return (
        <>
            <table class="table align-middle mb-0 bg-white">
                <thead class="bg-light">
                    <tr>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Status</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product =>  (
                            <tr>
                                <td>
                                    <div class="d-flex align-items-center">
                                        <img
                                            src={product.images}
                                            alt=""
                                            style={{width: "45px;",  height: "45px"}}
                                            class="rounded-circle"
                                        />
                                        <div class="ms-3">
                                            <p class="fw-bold mb-1">John Doe</p>
                                            <p class="text-muted mb-0">john.doe@gmail.com</p>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <p class="fw-normal mb-1">{product.title}</p>
                                    <p class="text-muted mb-0">{product.description}</p>
                                </td>
                                <td>
                                    <span class="badge badge-success rounded-pill d-inline">Active</span>
                                </td>
                                <td>{product.price}</td>
                                <td>
                                    <button type="button" class="btn btn-link btn-sm btn-rounded">
                                        Edit
                                    </button>
                                </td>
                            </tr>
                        ))
                }


                </tbody>
            </table>
        </>
    )
}

export default MyTable