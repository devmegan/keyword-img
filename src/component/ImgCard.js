export default function ImgCard({ alt, src, setError, setLoading }){
    const handleLoad = () => {
        setLoading(false); 

        if(src.search("/source-404?") !== -1) {
            setError("No images found");
        }
    }

    return (
        <img 
            alt={alt} 
            className="card h-full w-auto mx-auto block object-cover shadow-2xl"
            src={src} 
            onLoad={handleLoad}
        />
    )
}