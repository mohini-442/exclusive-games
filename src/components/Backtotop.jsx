import React from 'react'

const Backtotop = () => {
    const [position, setPosition] = React.useState({ top: 0, left: 0 })
    React.useEffect(() => {
        window.scroll({
            top: position.top,
            left: position.left,
            behavior: 'smooth'
        })
    })
    const scrollTop = React.useRef()
    React.useEffect(() => {
        window.addEventListener('scroll', (e) => {
            window.scrollY > 200
                ? scrollTop.current.style.display = 'inline-block'
                : scrollTop.current.style.display = 'none'
        })
    })
    return (
        <>
            <div className='container mx-auto px-3 max-w-[1150px]'>
                <div onClick={() => setPosition({ ...position, position: { top: 0, left: 0 } })} className="fixed hidden bottom-[1%] right-[1%] z-30 translate-y-[0%] animate-bounce"
                    ref={scrollTop}
                ><div className=' cursor-pointer w-[50px] h-[50px] bg-gradient flex items-center justify-center rounded-[35%] scroll-smooth transform-[all] transform-[.3s] transform-[linear] shadow-[0px_0px_18px_#fff]'>
                        <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.054 9.42313C14.9306 9.55832 14.7841 9.66558 14.6228 9.73876C14.4615 9.81194 14.2886 9.84961 14.114 9.84961C13.9393 9.84961 13.7664 9.81194 13.6051 9.73876C13.4438 9.66558 13.2973 9.55832 13.1739 9.42313L8.00043 3.7648L2.82693 9.42313C2.57762 9.6958 2.23948 9.84899 1.8869 9.84899C1.53432 9.84899 1.19618 9.6958 0.946871 9.42313C0.69756 9.15045 0.557501 8.78063 0.557501 8.395C0.557501 8.00938 0.69756 7.63955 0.946871 7.36688L7.06706 0.673129C7.19042 0.537937 7.33694 0.43068 7.49825 0.357499C7.65955 0.284317 7.83246 0.246649 8.00709 0.246649C8.18172 0.246649 8.35464 0.284317 8.51594 0.357499C8.67725 0.43068 8.82377 0.537937 8.94712 0.673129L15.0673 7.36688C15.574 7.92105 15.574 8.85438 15.054 9.42313Z" fill="#000" />
                        </svg>
                    </div>
                </div>
            </div>


        </>

    )
}

export default Backtotop