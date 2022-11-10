import React from 'react';
import useTitle from '../../hooks/useTitle';

const AddService = () => {
    useTitle('AddService');

    const handleAddService = (event) => {
        event.preventDefault();

        const form = event.target;
        const title = form.serviceName.value;
        const price = form.price.value;
        const image = form.image.value;
        const description = form.description.value;

        const service = {
            price,
            title,
            image,
            description
        }

        fetch('https://mobile-service-server.vercel.app/services', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    form.reset()
                    alert('Service Added Seccessfully')

                }
            })
            .catch(err => console.log(err))


    }

    return (
        <div className='w-full lg:w-2/3 my-5 mx-auto'>
            <h3 className='text-2xl font-semibold my-4 text-center'>Add Your Review</h3>
            <form onSubmit={handleAddService}>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input name='serviceName' type="text" placeholder="service name" className="input input-bordered w-full" required />
                    <input name='price' type="text" placeholder="price" className="input input-bordered w-full" required />
                    <input name='image' type="text" placeholder="image link" className="input input-bordered w-full" required />
                </div>
                <textarea name='description' className="textarea textarea-bordered h-24 w-full my-3" placeholder="description" required></textarea>
                <div className='grid justify-center'>
                    <input className='btn btn-primary' type="submit" value="Submit" />
                </div>
            </form>
        </div>
    );
};

export default AddService;