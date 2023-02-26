import React from 'react'
import ActionAreaCard from '../components/imagecard';
import { Box } from '@mui/system';
import axios from 'axios';
import { useEffect, useState } from 'react'
import LoadingBar from 'react-top-loading-bar'
import InfiniteScroll from 'react-infinite-scroll-component';
import { CircularProgress } from '@mui/material';




function Photos() {

    const pageLimit = 50;

    const [apiData, setApiData] = useState([])
    const [progress, setProgress] = useState(0)



    useEffect(() => {
        callApi();
        // calculateResults();

    }, [])

    let pgNo = Math.ceil(apiData.length / pageLimit) + 1

    let callApi = () => {

        document.title = "JSON API - Photos"

        setProgress(20)
        axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${pgNo}`)
            .then(function (response) {
                setProgress(70)
                // console.log(response.data)
                setApiData(response.data)
                setProgress(100)
            })
    }


    let fetchMoreData = () => {
        axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${pgNo}`)
            // axios.get('https://jsonplaceholder.typicode.com/users')
            .then(function (response) {
                setApiData(apiData.concat(response.data))
                console.log(apiData)

            })

    }



    return (<>
        <LoadingBar
            color='#f11946'
            progress={progress}
            onLoaderFinished={() => setProgress(0)}
        />
        <h1>PHOTOS</h1>
        {/* {totalResults} */}


        <InfiniteScroll
            dataLength={apiData.length}
            next={fetchMoreData}
            hasMore={apiData.length !== 5000}
            loader={<h4>Loading...</h4>}
        >


            {apiData.map((e) => {
                // console.log(e)
                return <>
                    <Box whiteSpace={0} sx={{ display: "inline-flex", flexWrap: "wrap", margin: "1.5%" }} key={e.id}>

                        <ActionAreaCard id={e.id} title={e.title} url={e.url} thumbnailUrl={e.thumbnailUrl} />
                    </Box>
                </>

            })}
        </InfiniteScroll>



    </>
    )
}

export default Photos