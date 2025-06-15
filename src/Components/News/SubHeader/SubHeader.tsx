export default function News() {
    return (
        <section className="h-[500px] w-full flex  justify-center items-center bg-[url('/subheader-news.webp')] bg-cover bg-center">
            {/* Container */}
            <div className="w-[85%] h-full flex justify-center items-center z-10">
                <ul className="flex text-white w-[85%] flex-col gap-[10px] mt-[50px]">
                    <p className="w-fit border-white border rounded-[12px] px-[10px] text-[18px]">Latest From Us</p>
                    <h2 className="text-[35px]  --font-display">News & Promo</h2>
                </ul>
            </div>


        </section>
    )
}