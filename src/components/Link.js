export default function Link({url, repo}){
    return(
        (url || repo) ? (
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
            </span>
        ) : null
    );
}