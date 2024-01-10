export default function Link({url, repo, linkedIn, gitHub, mailTo, portfolio, text}){
    return(
        (url || repo || linkedIn || gitHub || mailTo || portfolio) ? (
            <span>
                {url && (
                <a
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    className="ms-3 fs-2"
                    >
                    <i class="bi bi-box-arrow-up-right text-warning"></i>
                </a>
                )}
                {
                repo && (
                <a
                    href={repo}
                    target="_blank"
                    rel="noreferrer"
                    className="ms-3 fs-2">
                    <i className="bi bi-github text-warning"></i>
                </a>
                )
                }
                {
                gitHub && (
                <a
                    href={gitHub}
                    target="_blank"
                    rel="noreferrer"
                    className="ms-3 fs-2">
                <i className="bi bi-github text-warning"></i>
                </a>
                )
                }
                {
                linkedIn && (
                <a 
                    href={linkedIn}
                    target="_blank"
                    rel="noreferrer"
                    className="ms-3 fs-2">
                <i className='bi bi-linkedin text-warning'></i>
                </a>
                )
                }
                {
                mailTo && (
                <a
                    href={mailTo}
                    target="_blank"
                    rel="noreferrer"
                    className="ms-3 fs-2">
                <i className="bi bi-envelope-at-fill text-warning"></i>
                </a>
                )
                }
                {
                portfolio && (
                <a
                    href={portfolio}
                    target="_blank"
                    rel="noreferrer"
                    className="ms-3 fs-4 text-decoration-none text-warning">
                <i class="bi bi-person-lines-fill me-2 text-warning"></i>
                {text}
                </a>
                )    
                }
            </span>
        ) : null
    );
}