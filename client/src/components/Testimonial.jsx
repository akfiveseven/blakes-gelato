const Testimonial = () => {
    return (
        <>
            <div className="py-20 bg-amber-100">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-16">What Our Customers Say</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { name: "Maria T.", quote: "Best gelato outside of Italy! The pistachio flavor takes me back to summers in Sicily." },
                            { name: "James L.", quote: "Their dairy-free options are amazing. Finally found a place that doesn't compromise on flavor!" },
                            { name: "Sofia R.", quote: "The atmosphere is as delightful as the gelato. Perfect place to spend an afternoon." }
                        ].map((testimonial, index) => (
                                <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                                    <div className="flex items-center mb-4">
                                        <div className="h-12 w-12 rounded-full bg-amber-200 flex items-center justify-center mr-4">
                                            <span className="text-amber-700 font-bold">{testimonial.name.charAt(0)}</span>
                                        </div>
                                        <h3 className="font-bold">{testimonial.name}</h3>
                                    </div>
                                    <p className="italic text-amber-800">"{testimonial.quote}"</p>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </>
    )
};
