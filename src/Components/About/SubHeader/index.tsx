export default function SubHeader() {
    return (
        <section className="h-[380px] w-full flex justify-center items-center bg-[url('/subheader-about.webp')] bg-center bg-cover">

            <div className="h-full w-[85%] flex justify-center items-center Z-10">
                <ul className="flex text-white w-[85%] flex-col gap-[10px] mt-[50px]">
                    <p className="w-fit border-white border rounded-[12px] px-[10px] text-[18px]">About us</p>
                    <h2 className="text-[35px]  --font-display font-[800]">This is our story</h2>
                </ul>
            </div>
        </section>
    )
}