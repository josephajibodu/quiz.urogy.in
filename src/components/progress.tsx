interface ProgressBarProps {
    value: number,
    max: number,
}

function Progress({value = 0, max = 0} : ProgressBarProps) {
    if (value > max) value = max;

    const width = value/max * 100;

    return <div className="h-1 bg-white w-[200px] lg:w-[400px] rounded-full overflow-hidden" role="progressbar" aria-valuenow={value} aria-valuemin={0} aria-valuemax={max}>
        <div style={{ width: width+"%" }} className={`bg-brand h-full rounded-full transition-[width] ease-in-out duration-500`}></div>
    </div>
}

export default Progress;