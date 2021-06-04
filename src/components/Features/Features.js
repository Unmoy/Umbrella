import React, { useEffect, useState } from 'react';
import fakeData from '../../FakeData/MOCK_DATA.json'
import FeaturesCard from '../FeaturesCard/FeaturesCard';
import './Features.css'
const Features = () => {
    const [card, setCard] = useState([])
    useEffect(() => {
        setCard(fakeData)
    }, [])
    const sliceData=  card.slice(0,4)
    return (
        <section className='mt-5 p-3'>
            <div className='text-center'>
                <h4 className='text-secondary'>Summer Collection</h4>
                <h1>MINIMAL & SIMPLE Design</h1>
            </div>
            <div className='featuresContainer'>
                <div className='d-flex pt-5'>
                    {
                        sliceData.map(data=><FeaturesCard key={data.id} data={data}></FeaturesCard>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Features;