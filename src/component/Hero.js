import Description from './Description'
import SearchInput from './SearchInput';

export default function Hero() {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center">
                <div className="max-w-md grid grid-cols-1 gap-3">
                    <span className="mx-auto inline-block">
                      <SearchInput />
                    </span>
                   <Description />
                </div>
            </div>
        </div>
    )
}