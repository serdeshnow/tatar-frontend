import './ProgressBar.css'

export default function ProgressBar ({width}) {
    return(
        <div>
            <div className="progress_container">
                <div style={{width: `${width}%`}} className="progress_bar" />
            </div>
        </div>
        
    )
}