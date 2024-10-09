import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Details() {
  const [data, setData] = useState({});
  const { itemNo } = useParams();
  const navigate = useNavigate();

  const apiUrl = "http://localhost:3005/food/" + itemNo;

  useEffect(() => {
    fetch(apiUrl, { method: "GET" })
      .then((res) => res.json())
      .then((res) => setData(res));
  }, [itemNo]);

  useEffect(() => {
    const modalElement = document.getElementById("modalId");
    const bootstrapModal = new window.bootstrap.Modal(modalElement);
    bootstrapModal.show();

    // Listen for modal close event (when the modal is closed by any means)
    modalElement.addEventListener("hidden.bs.modal", () => {
      // Navigate back to the grid view after closing the modal
      navigate("/menu");
      window.location.reload();
     
    });

    // Cleanup event listener on component unmount
    return () => {
      modalElement.removeEventListener("hidden.bs.modal", () => navigate("/menu"));
    };
  }, [data, navigate]);

  return (
    <>
      <div
        className="modal fade"
        id="modalId"
        tabIndex="-1"
        aria-hidden="true"
        data-bs-backdrop="static" // Prevent closing by clicking outside (optional)
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{data.name}</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <img src={data.image} alt={data.name} style={{width:'63vh'}} />
              <p>{data.moreDetails}</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Details;
