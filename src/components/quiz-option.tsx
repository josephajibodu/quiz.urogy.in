interface QuizOptionProp {
    selected?: boolean,
    label: string,
    value: number,
    onSelect: (v: number) => void
}

function QuizOption({ selected = false, label, value, onSelect}: QuizOptionProp) {
    return  <div onClick={() => onSelect && onSelect(value)} className="flex items-center gap-4 lg:gap-6 border-brand border rounded-2xl lg:rounded-3xl px-4 py-3 lg:py-4 cursor-pointer">
        <div className="border-2 border-brand w-5 lg:w-6 h-5 lg:h-6 rounded-full flex items-center justify-center">
            {selected && <div className="w-3 lg:w-4 h-3 lg:h-4 rounded-full bg-brand"></div>}
        </div>
        <input className="hidden" type="radio" value={value} name={label} defaultChecked={selected ? true : false} />
        <span className="text-brand font-medium text-[1rem] lg:text-xl whitespace-nowrap">{label}</span>
    </div>
}

export default QuizOption