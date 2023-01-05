import CompanyCard from './CompanyCard';
import Data from './CompanyArray';
import React from 'react'

const ComCardFun = () => {
    return (
        <>
            <CompanyCard
                imgSrc={Data[0].imgSrc}
                head={Data[0].head}
                data={Data[0].data}
            />
            <CompanyCard
                imgSrc={Data[1].imgSrc}
                head={Data[1].head}
                data={Data[1].data}
            />
            <CompanyCard
                imgSrc={Data[2].imgSrc}
                head={Data[2].head}
                data={Data[2].data}
            />
        </>
    )
}

export default ComCardFun;