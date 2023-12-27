
const Intro = ({name}) => {
  return (
    <div className="flex items-center gap-x-2">
    <span className="h-10 rounded-sm w-5 bg-[#DB4444]"></span>
    <p className="text-[#DB4444] text-[16px] font-semibold leading-[20px]">{name}</p>
    </div>
  )
}

export default Intro