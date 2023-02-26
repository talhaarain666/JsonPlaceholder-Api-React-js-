import { Box } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import BasicCard from '../components/card';
import LoadingBar from 'react-top-loading-bar'


function Users() {

    const [apiData, setApiData] = useState([])
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        callApi();

        //   return () => {
        //     second
        //   }
    }, [])


    let callApi = () => {
        document.title = "JSON API - Users"

        setProgress(20)
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(function (response) {
                setProgress(70)
                // console.log(response.data)
                setApiData(response.data)
                setProgress(100)
            })
    }


    return (<>


        <LoadingBar
            color='#f11946'
            progress={progress}
            onLoaderFinished={() => setProgress(0)}
        />
        <h1>USERS</h1>

        {apiData.map((e) => {
            // console.log(e)
            return <>
                <Box whiteSpace={0} sx={{ display: "inline-flex", flexWrap: "wrap", margin: "1.5%" }} key={e.id}>

                    <BasicCard name={e.name} username={e.username} email={e.email} phone={e.phone} website={e.website} address={e.address} />
                </Box>
            </>

        })}





    </>
    )
}

export default Users