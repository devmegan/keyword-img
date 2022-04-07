import { useState } from "react"

export default function SearchInput({ search, loading }) {
    const [keyword, setKeyword] = useState('');

    const handleChange = (e) => {
        setKeyword(e.target.value)
    };

    const handleClick = () => {
        search(keyword);
    };

    return (
        <div className="input-group">
            <input 
                className="input input-bordered input-primary" 
                placeholder="Keyword..." 
                type="text" 
                onChange={handleChange}
                value={keyword}
            />
            <button 
                className={`btn btn-square btn-primary`}
                onClick={handleClick}
                disabled={loading}
            > 
                <svg 
                    className="h-6 w-6" fill="none" 
                    stroke="currentColor"
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg" 
                >
                    <path 
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2" 
                    />
                </svg>
            </button>
        </div>
    )
}
