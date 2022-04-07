export default function Error({ error, setError }) {

    const handleClick = () => {
        setError(false);
    }

    return (
        <div className="alert alert-error shadow-lg max-w-sm mx-auto">
            <div>
                <svg 
                    className="stroke-current flex-shrink-0 h-6 w-6 hover:text-red-800 cursor-pointer" 
                    onClick={handleClick}
                    fill="none" 
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path 
                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2" 
                    />
                </svg>
                <span>{error}</span>
            </div>
        </div>
    )
}
