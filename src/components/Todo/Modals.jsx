const Modals = ({onModalClose, onModalConfirm})=>{

    const handleConfirm = () =>{
        return onModalConfirm();
    }

    return (
        <>
            <div className="modal"> 
                <p>Are you sure?</p>
                <button className="btn btn--alt" onClick={onModalClose}>Cancel</button>
                <button className="btn" onClick={handleConfirm}>Confirm</button>
            </div>

        </>
    )
}

export default Modals;