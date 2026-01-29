
export default function ProjectDetailed(props){
    return (
        <div class="col d-flex align-items-start">
            <svg 
            class="bi text-body-secondary flex-shrink-0 me-3" width="1.75em" 
            height="1.75em" aria-hidden="true">
            <use xlink:href="#bootstrap"></use>
            </svg>
            <div>
            <h3 class="fw-bold mb-0 fs-4 text-body-emphasis pb-2">
                {props.title}
            </h3>
            <p>
            <strong>Description: </strong> {props.description} </p>
            <strong> Tech Used: </strong> {props.techStack}
            
            </div>
            </div>
    )
}