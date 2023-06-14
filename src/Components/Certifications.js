const Certificates = () => {
    const image = [
        "/images/certificate/1.jpg",
        "/images/certificate/2.png",
        "/images/certificate/3.png",
        "/images/certificate/4.png",
        "/images/certificate/5.jpg",
        "/images/certificate/6.png",
    ]
    return(
        <>
            <h1 className="text-3xl font-semibold mb-8">Certifications</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 xl:gap-y-0 gap-6 md:gap-y-12 md:gap-x-12">
                {
                    image.map((val,idx) => {
                        return(
                            <div className="border-2 border-gray-400 h-24 sm:h-32 lg:h-60 xl:h-32 rounded-sm overflow-hidden">
                                <img src={val} className="h-full w-full object-cover object-top hover:scale-150" />
                            </div>
                        )
                    })
                }
            </div>
            <div className="mb-12"></div>
        </>
    )
}

export default Certificates