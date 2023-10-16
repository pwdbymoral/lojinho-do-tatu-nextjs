function Banner() {
    const bannerurl = 'https://i.pinimg.com/564x/a7/bc/da/a7bcda822f7d1ca55f1ec88a1bcf90ee.jpg';
    return (
        <div className="bg-local bg-origin-border bg-cover bg-no-repeat bg-center h-[300px] flex items-end" style={{ backgroundImage: `url(${bannerurl})` }}>
            <div className="bg-gradient-to-b from-transparent to-gray-800 w-full h-3/4 flex items-end">
                <div className="container mx-auto px-4 py-4">
                    <p className="text-5xl font-title text-white opacity-80">Os produtos mais únicos de Shurima</p>
                    <p className="text-xl text-white">Por um precinho <i>okay</i>.</p>
                </div>
            </div>
        </div>
    )
}

export default Banner;
