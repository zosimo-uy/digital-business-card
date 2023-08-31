export default function Link({url, repo, linkedIn, gitHub, mailTo}){
    return(
        (url || repo || linkedIn || gitHub || mailTo) ? (
            <span>
                {url && (
                <a
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    className="ms-3 fs-2"
                    >
                    <i class="bi bi-box-arrow-up-right"></i>
                </a>
                )}
                {
                repo && (
                <a
                    href={repo}
                    target="_blank"
                    rel="noreferrer"
                    className="ms-3 fs-2">
                    <i className="bi bi-github"></i>
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
                <i className="bi bi-github"></i>
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
                <i className='bi bi-linkedin'></i>
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
                <i className="bi bi-envelope-at-fill"></i>
                </a>
                )
                }
            </span>
        ) : null
    );
}