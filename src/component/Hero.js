import { useState } from 'react';
import Description from './Description'
import SearchInput from './SearchInput';
import ImgCard from './ImgCard';
import Error from './Error';

export default function Hero() {
    const [url, setUrl] = useState('');
    const [alt, setAlt] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const search = async (keyword) => {
        setLoading(true);
        setError(false);

        fetch(`https://source.unsplash.com/random/800x500/?${keyword}`)
            .then(Res => setUrl(Res.url));

        setAlt(`image from your search for ${keyword}`)
    }

    return (
        <div className="min-h-screen bg-base-200 w-full py-10 md:py-20">
            <div className="max-w-screen-md px-10 md:px-0 grid grid-cols-1 gap-3 block mx-auto text-center">
                <div className='h-80'>
                    {url && <ImgCard src={url} alt={alt} setLoading={setLoading} setError={setError} />}
                </div>
                {error && <Error error={error} setError={setError} setLoading={setLoading} />}
                <span className="mx-auto inline-block">
                    <SearchInput search={search} loading={loading} />
                </span>
                <Description />
            </div>
        </div>
    )
}
