import FileUploader from "../components/FileUploader";
import ReactDom from "react-dom";


function Videos(){

    return (
        <div className = 'container mt-4'>
            
            <h4 className="display-4 text-center mb-4">
                <i className="fab fa-react"></i> Video Upload
            </h4>

            <FileUploader/>
            </div>
    );

}

export default Videos;