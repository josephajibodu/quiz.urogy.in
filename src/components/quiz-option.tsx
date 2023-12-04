interface QuizOptionProp {
    selected?: boolean,
    label: string,
    value: string
}

function QuizOption({ selected = false, label, value}: QuizOptionProp) {
    return  <div className="flex items-center gap-4 lg:gap-6 border-brand border rounded-2xl lg:rounded-3xl px-4 py-3 lg:py-4 cursor-pointer">
        <div className="border-2 border-brand w-5 lg:w-6 h-5 lg:h-6 rounded-full flex items-center justify-center">
            {selected && <div className="lg:w-4 lg:h-4 rounded-full bg-brand"></div>}
        </div>
        <input className="hidden" type="radio" value={value} name={label} checked={selected} />
        <span className="text-brand font-medium text-lg lg:text-xl whitespace-nowrap">{label}</span>
    </div>
}

export default QuizOption