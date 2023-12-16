

const Table = (props) => {

    const { displayName, onChange, value, image} = props;

    const handleChange = (e : any) => {
        onChange(e.target.value);
    }
    return (
        <>
            <div className="text-[13px] text-[#a8acb9] flex items-center bg-[#000] gap-[10px] p-[8px] mt-[10px]">
                <img className="w-[13px] h-[13px]" src={image} alt="" />
                <h1 className="">{displayName}</h1>
            </div>
            <Controller value={value}  className="pl-[10px] text-white bg-[#1d1e22] w-[100%] h-[26%] outline-none" onChange={handleChange}>
            </Controller>
        </>
    )
}

export default Table;