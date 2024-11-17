export default function SinglePage({ params }) {
    return params.slug === 'T-shirt' || params.slug === 'SweetPants' ? (
        (<div>
            SinglePage
        </div>)
    ) : (
        <div className="flex flex-col items-center justify-center h-[70vh]">
            <h2 className="text-[2rem]">404</h2>
            <p className="text-[1rem]">Page not found</p>
        </div>
    )
}